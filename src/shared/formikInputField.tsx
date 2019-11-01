import React from 'react';
import { FieldProps } from 'formik';
import FormItem from 'antd/lib/form/FormItem';
import { Input } from 'antd';
import { InputProps } from 'antd/lib/input';
import { FormItemProps } from 'antd/es/form/FormItem';

/* eslint-disable */
const FormikInputField: React.FC<
  FieldProps & InputProps & { formItemProps?: FormItemProps }
> = ({ field, form, formItemProps, ...antdInputProps }) => {
  const errorFeedback = form.errors[field.name];
  const isInvalid = form.errors[field.name] && form.touched[field.name];
  const isValid = !form.errors[field.name] && form.touched[field.name];
  return (
    <FormItem
      {...formItemProps}
      hasFeedback={true}
      help={isInvalid ? errorFeedback : null}
      validateStatus={isInvalid ? 'error' : isValid ? 'success' : ''}
    >
      {antdInputProps.type === 'textArea' ? (
        <Input.TextArea {...field} {...(antdInputProps as any)} />
      ) : (
        <Input {...field} {...antdInputProps} />
      )}
    </FormItem>
  );
};

export default FormikInputField;
