import React from 'react';
import { Form, Row, Col, DatePicker, Tabs, Button, Icon } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import styled from '@emotion/styled';
import * as yup from 'yup';
import useMedia from '@hooks/useMedia';
import CreatePartyLocation from './CreateParty/CreatePartyLocation';
import { Formik, FormikErrors, FormikTouched, FastField } from 'formik';
import moment from 'moment';
import { RangePickerValue } from 'antd/lib/date-picker/interface';
import FormikInputField from '@shared/formikInputField';
import { UserLocation } from '@hooks/useUserLocation';
import UserCalendar from '@components/UserCalendar/UserCalendar';
import css from '@emotion/css';
import InviteFriend from './CreateParty/InviteFriend/InviteFriend';

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

  invitedFriends: []
};

export type PartyLocation = UserLocation;

export interface CreatePartyForm {
  title: string;
  description: string;
  date: RangePickerValue;
  location: PartyLocation;
  invitedFriends: string[];
}

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
  invitedFriends: yup.array().of(yup.string())
});

const CreateParty: React.FC = () => {
  const isBreakingTheGrid = useMedia('(max-width:992px)');

  function getValidateStatus(
    errors: FormikErrors<CreatePartyForm>,
    touched: FormikTouched<CreatePartyForm>,
    fieldName: keyof FormikErrors<CreatePartyForm>
  ) {
    return errors[fieldName] && touched[fieldName]
      ? 'error'
      : touched[fieldName] && !errors[fieldName]
      ? 'success'
      : undefined;
  }

  function getFieldErrors(
    errors: FormikErrors<CreatePartyForm>,
    touched: FormikTouched<CreatePartyForm>,
    fieldName: keyof FormikErrors<CreatePartyForm>
  ) {
    return getValidateStatus(errors, touched, fieldName) === 'error'
      ? errors[fieldName]
      : '';
  }

  return (
    <CreatePartyFormWrapper>
      <InnerWrapper>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={() => null}
        >
          {({ handleSubmit, setFieldValue, errors, touched }) => (
            <Form layout="horizontal" onSubmit={handleSubmit}>
              <Row gutter={32}>
                <Col lg={{ span: 12 }} sm={{ span: 24 }}>
                  <FastField
                    component={FormikInputField}
                    size="large"
                    name="title"
                    placeholder="Name your party"
                    prefix={
                      <Icon type="form" style={{ color: 'rgba(0,0,0,.25)' }} />
                    }
                  />
                  <Form.Item
                    hasFeedback={true}
                    validateStatus={getValidateStatus(
                      errors as any,
                      touched as any,
                      'date'
                    )}
                    help={getFieldErrors(errors as any, touched as any, 'date')}
                  >
                    <DatePicker.RangePicker
                      onChange={dates => setFieldValue('date', dates)}
                      name="date"
                      showTime={{ format: 'hh:mm', use12Hours: false }}
                      format="YYYY-MM-DD HH:mm"
                      style={{ width: '100%' }}
                    />
                  </Form.Item>
                </Col>

                {!isBreakingTheGrid && (
                  <Col lg={{ span: 12 }} sm={{ span: 24 }}>
                    <Button type="primary" size="large" htmlType="submit">
                      Save
                    </Button>
                  </Col>
                )}
              </Row>

              <Row gutter={32}>
                <Col lg={{ span: 12 }} sm={{ span: 24 }}>
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
                        />
                      </Tabs.TabPane>
                    </Tabs>
                  </Form.Item>
                </Col>

                <Col lg={{ span: 12 }} sm={{ span: 24 }}>
                  <Form.Item>
                    <Tabs defaultActiveKey="1" onChange={() => {}}>
                      <Tabs.TabPane tab="Invite friends" key="1">
                        <InviteFriend />
                      </Tabs.TabPane>
                    </Tabs>
                  </Form.Item>
                </Col>
              </Row>
              {isBreakingTheGrid && (
                <FormItem>
                  <Button type="primary" block={true} htmlType="submit">
                    Save
                  </Button>
                </FormItem>
              )}
            </Form>
          )}
        </Formik>
      </InnerWrapper>
    </CreatePartyFormWrapper>
  );
};

export default CreateParty;
