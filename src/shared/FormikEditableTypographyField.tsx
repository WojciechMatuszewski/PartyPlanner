import React from 'react';
import { FieldProps } from 'formik';
import { SerializedStyles } from '@emotion/css';
import { FormItemProps } from 'antd/lib/form';
import { Form, Typography } from 'antd';

type Props = FieldProps & { css?: SerializedStyles } & {
  formItemProps: FormItemProps;
};

export default function FormikEditableTypographyField({
  form,
  field,
  formItemProps,
  css
}: Props) {
  const errorFeedback = form.errors[field.name];
  const isInvalid = form.errors[field.name] && form.touched[field.name];
  const isValid = !form.errors[field.name] && form.touched[field.name];

  return (
    <Form.Item
      colon={false}
      {...formItemProps}
      help={isInvalid ? errorFeedback : null}
      validateStatus={isInvalid ? 'error' : isValid ? 'success' : ''}
      css={[css]}
    >
      <Typography.Paragraph
        style={{ marginBottom: 0, fontSize: 16 }}
        editable={{ onChange: value => form.setFieldValue(field.name, value) }}
      >
        {field.value}
      </Typography.Paragraph>
    </Form.Item>
  );
}
