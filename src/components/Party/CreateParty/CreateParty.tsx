import React from 'react';
import {
  Form,
  DatePicker,
  Tabs,
  Button,
  Icon,
  Switch,
  Typography,
  Spin
} from 'antd';
import styled from '@emotion/styled';
import * as yup from 'yup';
import useMedia from '@hooks/useMedia';
import CreatePartyLocation from './CreatePartyLocation';
import { Formik, FastField } from 'formik';
import moment from 'moment';
import { RangePickerValue } from 'antd/lib/date-picker/interface';
import FormikInputField from '@shared/formikInputField';
import { UserLocation } from '@hooks/useUserLocation';
import UserCalendar from '@components/UserCalendar/UserCalendar';
import css from '@emotion/css';
import InviteFriend from './InviteFriend/InviteFriend';
import { FlexBoxVerticallyCenteredStyles } from '@shared/styles';
import CreatePartyColorTintSelect from './CreatePartyColorTintSelect';
import { curry } from 'ramda';
import {
  getFormItemError,
  getFormItemValidateStatus
} from '@shared/formikFieldUtils';
import { CreatePartyComponent, useMeQuery } from '@generated/graphql';

const CreatePartyFormWrapper = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  background: white;
  min-height: calc(100vh - 66px);
  margin: 0 auto;
`;

const InnerWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  @media screen and (min-width: 992px) {
    margin-top: 30px;
  }
`;

const ShouldBePublicStyles = css`
  .ant-typography {
    margin-right: 24px;
  }
  .ant-form-item-children {
    width: 100%;
    ${FlexBoxVerticallyCenteredStyles}
  }
  h4 {
    display: inline-block;
  }
`;

const initialValues: CreatePartyForm = {
  title: '',
  description: '',
  date: [undefined, undefined],
  location: {
    coords: {
      latitude: 0,
      longitude: 0
    },
    placeName: ''
  },
  invitedFriends: [],
  isPublic: false,
  colorTint: '#4caf50'
};

export type PartyLocation = UserLocation;

export interface CreatePartyForm {
  title: string;
  description: string;
  date: RangePickerValue;
  location: PartyLocation;
  invitedFriends: string[];
  colorTint: string;
  isPublic: boolean;
}

const RowWrapper = styled.div`
  flex: 1;
  padding: 12px;
`;

const BreakableRowStyles = css`
  display: flex;
  flex-direction: column;
`;

const RowsWrapper = styled.div`
  display: flex;
  flex-direction: ${(props: { isBreakingTheGrid: boolean }) =>
    props.isBreakingTheGrid ? 'column' : 'row'};
`;

const validationSchema = yup.object().shape<CreatePartyForm>({
  title: yup
    .string()
    .min(2, 'At least 2 characters')
    .max(20)
    .required('This field is required'),
  description: yup.string(),
  date: yup
    .mixed()
    .test('works', 'Please enter correct dates', (value: RangePickerValue) => {
      let bothElementsAreMomentInstances = true;
      value.forEach(val => {
        if (!moment.isMoment(val)) {
          bothElementsAreMomentInstances = false;
        }
      });
      return value.length === 2 && bothElementsAreMomentInstances;
    })
    .required(),
  location: yup
    .object()
    .shape({
      placeName: yup.string().required(),
      coords: yup.object().shape({
        latitude: yup.number().required(),
        longitude: yup.number().required()
      })
    })
    .required(),
  invitedFriends: yup.array().of(yup.string()),
  isPublic: yup.boolean(),
  colorTint: yup.string()
});

const CreateParty: React.FC = () => {
  const isBreakingTheGrid = useMedia('(max-width:992px)');

  const { data: meData, loading } = useMeQuery({ fetchPolicy: 'cache-first' });

  if (loading || !meData || !meData.me) {
    return <Spin />;
  }

  return (
    <CreatePartyFormWrapper>
      <CreatePartyComponent>
        {(mutate, { loading }) => (
          <InnerWrapper>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={async formValues => {
                try {
                  const {
                    invitedFriends,
                    location,
                    date,
                    ...restOfFormFields
                  } = formValues;
                  await mutate({
                    variables: {
                      data: {
                        members: {
                          connect: [
                            ...invitedFriends.map(id => ({ id })),
                            { id: meData!.me!.id }
                          ]
                        },
                        location: {
                          create: {
                            placeName: location.placeName,
                            ...location.coords
                          }
                        },
                        author: {
                          connect: {
                            id: meData!.me!.id
                          }
                        },
                        start: date[0],
                        end: date[1],
                        ...restOfFormFields
                      }
                    }
                  });
                  // console.log(data);
                } catch (e) {
                  return null;
                }
              }}
            >
              {({ handleSubmit, setFieldValue, errors, touched }) => (
                <Form layout="horizontal" onSubmit={handleSubmit}>
                  <RowsWrapper isBreakingTheGrid={isBreakingTheGrid}>
                    <RowWrapper>
                      <FastField
                        size="large"
                        component={FormikInputField}
                        name="title"
                        placeholder="Name your party"
                        prefix={
                          <Icon
                            type="form"
                            style={{ color: 'rgba(0,0,0,.25)' }}
                          />
                        }
                      />
                      <Form.Item
                        hasFeedback={true}
                        validateStatus={getFormItemValidateStatus(
                          errors as any,
                          touched as any,
                          'date'
                        )}
                        help={getFormItemError(
                          errors as any,
                          touched as any,
                          'date'
                        )}
                      >
                        <DatePicker.RangePicker
                          onChange={dates => setFieldValue('date', dates)}
                          name="date"
                          showTime={{ format: 'hh:mm', use12Hours: false }}
                          format="YYYY-MM-DD HH:mm"
                          style={{ width: '100%' }}
                        />
                      </Form.Item>
                      <Form.Item>
                        <div css={[ShouldBePublicStyles]}>
                          <Typography.Title level={4}>
                            Should party be public
                          </Typography.Title>
                          <Switch
                            onChange={curry(setFieldValue)('isPublic')}
                            checkedChildren={<Icon type="check" />}
                            unCheckedChildren={<Icon type="close" />}
                            defaultChecked={false}
                          />
                        </div>
                        <CreatePartyColorTintSelect
                          initialColorTint={initialValues.colorTint}
                        />
                      </Form.Item>
                      <Form.Item>
                        <Tabs defaultActiveKey="1" onChange={() => {}}>
                          <Tabs.TabPane tab="Information's" key="1">
                            <CreatePartyLocation />
                            <FastField
                              component={FormikInputField}
                              name="description"
                              type="textArea"
                              placeholder="Description"
                              autosize={{ minRows: 4 }}
                            />
                          </Tabs.TabPane>
                          <Tabs.TabPane
                            tab="Find Time"
                            key="2"
                            css={css`
                              .rbc-calendar {
                                max-height: 100%;
                              }
                            `}
                          >
                            <UserCalendar
                              controlled={true}
                              controlledView="day"
                              selectable={false}
                              userId={meData!.me!.id}
                            />
                          </Tabs.TabPane>
                        </Tabs>
                      </Form.Item>
                    </RowWrapper>

                    <RowWrapper css={[BreakableRowStyles]}>
                      <Form.Item style={{ order: isBreakingTheGrid ? 1 : 0 }}>
                        <Button
                          loading={loading}
                          size="large"
                          type="primary"
                          block={true}
                          htmlType="submit"
                        >
                          Save
                        </Button>
                      </Form.Item>
                      <Form.Item>
                        <InviteFriend />
                      </Form.Item>
                    </RowWrapper>
                  </RowsWrapper>
                </Form>
              )}
            </Formik>
          </InnerWrapper>
        )}
      </CreatePartyComponent>
    </CreatePartyFormWrapper>
  );
};

export default CreateParty;
