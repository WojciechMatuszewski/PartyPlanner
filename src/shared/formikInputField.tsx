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
  return (
    <FormItem>
      <Input {...antdInputProps} />
    </FormItem>
  );
};

export default FormikInputField;
