import React from 'react';
import { Modal, Button, Input, Icon, DatePicker, Form } from 'antd';
import css from '@emotion/css';
import styled from '@emotion/styled';
import { stringOrDate } from 'react-big-calendar';
import moment from 'moment';
import { Formik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  partyName: yup
    .string()
    .required('Field is required')
    .min(2)
    .max(20),
  rangePicker: yup
    .array()
    .required()
    .min(2)
    .max(2)
});

export interface CalendarNewPartyModalProps {
  isVisible: boolean;
  selectedDate: stringOrDate;
}

const ModalBodyWrapper = styled.div`
  display: flex;
`;

const ModalInputsWrapper = styled.div`
  width: 100%;
  flex: 1;
  h3 {
    margin-bottom: 14px;
  }
`;

const CalendarNewPartyModal: React.FC<CalendarNewPartyModalProps> = ({
  isVisible,
  selectedDate
}) => {
  const parsedDate = moment(selectedDate);

  //TODO:
  // custom range picker validation :)

  return (
    <Modal
      css={css`
        .ant-modal-footer {
          border: 0;
        }
        .ant-modal-close {
          display: none;
        }
      `}
      footer={
        <React.Fragment>
          <Button type="dashed">More Options</Button>
          <Button type="primary">Create</Button>
          <Button type="danger">Cancel</Button>
        </React.Fragment>
      }
      maskClosable={true}
      visible={isVisible}
      closable={true}
    >
      <ModalBodyWrapper>
        <Icon
          type="question-circle"
          css={css`
            color: #faad14;
            font-size: 22px;
            margin-right: 16px;
          `}
        />
        <Formik
          validationSchema={validationSchema}
          initialValues={{ partyName: '', rangePicker: [parsedDate] }}
          onSubmit={() => null}
        >
          {({ handleChange, handleBlur, errors, touched }) => (
            <ModalInputsWrapper>
              <h2>Do you wish to create new party?</h2>
              <Form.Item
                hasFeedback={true}
                validateStatus={
                  errors.partyName && touched.partyName
                    ? 'error'
                    : !errors.partyName && touched.partyName
                    ? 'success'
                    : undefined
                }
                help={
                  errors.partyName && touched.partyName ? errors.partyName : ''
                }
              >
                <Input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="partyName"
                  size="large"
                  placeholder="Party name"
                />
              </Form.Item>
              <Form.Item
                hasFeedback={true}
                validateStatus={
                  errors.rangePicker && touched.rangePicker
                    ? 'error'
                    : !errors.rangePicker && touched.rangePicker
                    ? 'success'
                    : undefined
                }
                help={
                  errors.rangePicker && touched.rangePicker
                    ? errors.rangePicker
                    : ''
                }
              >
                <DatePicker.RangePicker
                  onChange={handleChange}
                  // onBlur = {handleBlur}
                  name="rangePicker"
                  size="large"
                  showTime={true}
                  defaultValue={[parsedDate]}
                  style={{ width: '100%' }}
                />
              </Form.Item>
            </ModalInputsWrapper>
          )}
        </Formik>
      </ModalBodyWrapper>
    </Modal>
  );
};

export default CalendarNewPartyModal;
