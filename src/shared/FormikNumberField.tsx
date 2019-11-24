import React from 'react';
import { FieldProps } from 'formik';
import { InputNumberProps } from 'antd/lib/input-number';
import { FormItemProps } from 'antd/es/form/FormItem';
import { Form, InputNumber } from 'antd';
import css, { SerializedStyles } from '@emotion/css';

const FormItemStyles = css`
  .ant-form-item-label {
    padding-bottom: 0;
    line-height: 1;
  }
`;

type Props = FieldProps &
  InputNumberProps & {
    formItemProps: FormItemProps & { css?: SerializedStyles };
  };
export default function FormikNumberField({
  form,
  field,
  formItemProps,
  ...antdInputProps
}: Props) {
  const errorFeedback = form.errors[field.name];
  const isInvalid = form.errors[field.name] && form.touched[field.name];
  const isValid = !form.errors[field.name] && form.touched[field.name];
  const { onChange, ...restOfField } = field;
  return (
    <Form.Item
      colon={false}
      hasFeedback={true}
      help={isInvalid ? errorFeedback : null}
      validateStatus={isInvalid ? 'error' : isValid ? 'success' : ''}
      {...formItemProps}
      css={[formItemProps.css, FormItemStyles]}
    >
      <InputNumber
        type="number"
        {...antdInputProps}
        onChange={value => form.setFieldValue(field.name, value)}
        {...restOfField}
      />
    </Form.Item>
  );
}
