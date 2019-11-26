import css from '@emotion/css';
import FormikInputField from '@shared/FormikInputField';
import FormikNumberField from '@shared/FormikNumberField';
import { Button, Col, Form, Row } from 'antd';
import { Field, Formik } from 'formik';
import React from 'react';
import * as yup from 'yup';

export interface PartyCartAddItemFormValues {
  name: string;
  description: string | undefined;
  price: number;
  quantity: number;
}

const initialValues: PartyCartAddItemFormValues = {
  name: '',
  description: undefined,
  price: 0,
  quantity: 0
};

const validationSchema = yup.object().shape<PartyCartAddItemFormValues>({
  name: yup
    .string()
    .required()
    .min(2),
  description: yup.string().min(2),
  price: yup
    .number()
    .typeError('Has to be a number')
    .required('Has to be a number')
    .moreThan(0),
  quantity: yup
    .number()
    .typeError('Has to be a number')
    .required('Has to be a number')
    .integer('Has to be an integer')
    .moreThan(0)
});

const BlockFormItemStyles = css`
  input {
    width: 100%;
  }
  .ant-input-number {
    width: 100%;
  }
  margin-bottom: 0;
`;

interface Props {
  loading: boolean;
  onSubmit: (values: PartyCartAddItemFormValues) => void;
}
export default function PartyCartAddItemForm({ loading, onSubmit }: Props) {
  function handleFormatPrice(value: number) {
    return `${value}`
      .replace(/\B(?=(\d{6})+(?!\d))/g, ',')
      .replace(/[.,](\d{3})(?!\d)/g, '');
  }

  function handleParsePrice(value: string) {
    return value.replace(/\$\s?|(,*)/g, '');
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <Field
            component={FormikInputField}
            name="name"
            id="name"
            type="text"
            placeholder="Name..."
            formItemProps={{
              label: 'Name',
              colon: false,
              htmlFor: 'name'
            }}
          />
          <Field
            component={FormikInputField}
            name="description"
            id="description"
            type="textArea"
            rows={2}
            style={{ marginBottom: 0 }}
            placeholder="Description"
            formItemProps={{
              label: 'Description (optional)',
              colon: false,
              htmlFor: 'description'
            }}
          />
          <Row gutter={12}>
            <Col span={16}>
              <Field
                component={FormikNumberField}
                name="price"
                defaultValue={0}
                formatter={handleFormatPrice}
                parser={handleParsePrice}
                step="0.01"
                formItemProps={{
                  label: 'Price (PLN)',
                  colon: false,
                  htmlFor: 'price',
                  css: [BlockFormItemStyles]
                }}
              />
            </Col>
            <Col span={8}>
              <Field
                component={FormikNumberField}
                defaultValue={0}
                name="quantity"
                formItemProps={{
                  label: 'Quantity',
                  colon: false,
                  htmlFor: 'quantity',
                  css: [BlockFormItemStyles]
                }}
              />
            </Col>
          </Row>
          <Form.Item>
            <Button htmlType="submit" type="primary" loading={loading}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      )}
    </Formik>
  );
}
