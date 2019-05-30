import React from 'react';
import * as yup from 'yup';
import moment from 'moment';
import { RangePickerValue } from 'antd/lib/date-picker/interface';
import { UserLocation } from '@hooks/useUserLocation';
import { FlexBoxVerticallyCenteredStyles } from '@shared/styles';
import css from '@emotion/css';
import styled from '@emotion/styled';
import { Form, Icon, DatePicker, Typography, Switch, Tabs, Button } from 'antd';
import { FastField, Formik } from 'formik';
import FormikInputField from '@shared/formikInputField';
import {
  getFormItemValidateStatus,
  getFormItemError
} from '@shared/formikFieldUtils';
import { curry } from 'ramda';
import CreatePartyColorTintSelect from './CreatePartyColorTintSelect';
import CreatePartyLocation from './CreatePartyLocation';
import UserCalendar from '@components/UserCalendar/UserCalendar';
import InviteFriend from './InviteFriend/InviteFriend';
import useMedia from '@hooks/useMedia';
import { CREATE_PARTY_MOBILE_WIDTH } from './CreateParty';

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

// TODO: import does not work but hard coding 992px works??
const RowWrapper = styled.div`
  flex: 1;
  padding: 12px;
  @media screen and (max-width: ${'992px'}) {
    padding-left: 0;
    padding-right: 0;
    &:first-of-type {
      .tab-pane-with-description {
        .ant-form-item {
          margin-bottom: 0;
        }
      }
      .ant-form-item:last-of-type {
        margin-bottom: 0;
      }
    }
  }
`;

const BreakableRowStyles = css`
  display: flex;
  flex-direction: column;
`;

const RowsWrapper = styled.div<{ isBreakingTheGrid: boolean }>`
  display: flex;
  flex-direction: ${(props: { isBreakingTheGrid: boolean }) =>
    props.isBreakingTheGrid ? 'column' : 'row'};
`;

export interface CreatePartyFormValues {
  title: string;
  description: string;
  date: RangePickerValue;
  location: UserLocation;
  invitedFriends: string[];
  colorTint: string;
  isPublic: boolean;
}

const initialValues: CreatePartyFormValues = {
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

function dateValidationFn(value: RangePickerValue): boolean {
  let bothElementsAreMomentInstances = true;
  value.forEach(val => {
    if (!moment.isMoment(val)) {
      bothElementsAreMomentInstances = false;
    }
  });
  return value.length === 2 && bothElementsAreMomentInstances;
}
const validationSchema = yup.object().shape<CreatePartyFormValues>({
  title: yup
    .string()
    .min(2, 'At least 2 characters')
    .max(20)
    .required('This field is required'),
  description: yup.string(),
  date: yup
    .mixed()
    .test('works', 'Please enter correct dates', dateValidationFn)
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

interface Props {
  userId: string;
  onSubmit: (values: CreatePartyFormValues) => void;
  loading: boolean;
}

const CreatePartyForm: React.FC<Props> = props => {
  const isBreakingTheGrid = useMedia(
    `(max-width:${CREATE_PARTY_MOBILE_WIDTH})`
  );
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={props.onSubmit}
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
                  <Icon type="form" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
              />
              <Form.Item
                hasFeedback={true}
                validateStatus={getFormItemValidateStatus(
                  errors as any,
                  touched as any,
                  'date'
                )}
                help={getFormItemError(errors as any, touched as any, 'date')}
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
                  <Tabs.TabPane
                    tab="Information's"
                    key="1"
                    className="tab-pane-with-description"
                  >
                    <CreatePartyLocation />
                    <FastField
                      component={FormikInputField}
                      name="description"
                      type="textArea"
                      placeholder="Description"
                      autosize={{ minRows: 4 }}
                    />
                  </Tabs.TabPane>
                  <Tabs.TabPane tab="Find Time" key="2">
                    <UserCalendar
                      controlled={true}
                      controlledView="day"
                      selectable={false}
                      userId={props.userId}
                    />
                  </Tabs.TabPane>
                </Tabs>
              </Form.Item>
            </RowWrapper>
            <RowWrapper css={[BreakableRowStyles]}>
              <Form.Item style={{ order: isBreakingTheGrid ? 1 : 0 }}>
                <Button
                  loading={props.loading}
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
  );
};

export default CreatePartyForm;
