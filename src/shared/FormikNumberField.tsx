import React from 'react';
import { FieldProps } from 'formik';
import InputNumber, { InputNumberProps } from 'antd/lib/input-number';
import { FormItemProps } from 'antd/es/form/FormItem';
import { Form } from 'antd';

type Props = FieldProps & InputNumberProps & { formItemProps: FormItemProps };
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
      hasFeedback={true}
      help={isInvalid ? errorFeedback : null}
      validateStatus={isInvalid ? 'error' : isValid ? 'success' : ''}
      {...formItemProps}
    >
      <InputNumber
        {...antdInputProps}
        onChange={value => form.setFieldValue(field.name, value)}
        {...restOfField}
      />
    </Form.Item>
  );
}
