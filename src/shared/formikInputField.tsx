import React from 'react';
import { FieldProps } from 'formik';
import FormItem from 'antd/lib/form/FormItem';
import { Input } from 'antd';
import { InputProps } from 'antd/lib/input';

/* eslint-disable */
const FormikInputField: React.FC<FieldProps & InputProps> = ({
  field,
  form,
  ...antdInputProps
}) => {
  const errorFeedback = form.errors[field.name];
  const isInvalid = form.errors[field.name] && form.touched[field.name];
  const isValid = !form.errors[field.name] && form.touched[field.name];
  return (
    <FormItem
      hasFeedback={true}
      help={isInvalid ? errorFeedback : null}
      validateStatus={isInvalid ? 'error' : isValid ? 'success' : ''}
    >
      <Input {...antdInputProps} {...field} />
    </FormItem>
  );
};

export default FormikInputField;
