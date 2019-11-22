import RestrictPlaylistInfo from '../shared/RestrictPlaylistInfo';

import styled from '@emotion/styled';
import FormikInputField from '@shared/FormikInputField';
import { Button, Checkbox, Form as AntdForm, Form } from 'antd';
import { Field, Formik } from 'formik';
import React from 'react';
import * as yup from 'yup';

export interface CombinePlaylistFormValues {
  name: string | undefined;
  shouldDeleteWhenCombining: boolean;
  notImportable: boolean;
}

const RestrictImportingWrapper = styled.div`
  display: inline-flex;
  align-items: center;
`;

const validationSchema = yup.object().shape<CombinePlaylistFormValues>({
  name: yup
    .string()
    .required()
    .min(2),
  shouldDeleteWhenCombining: yup.boolean(),
  notImportable: yup.boolean()
});

function createInitialFormValues(restricted: boolean) {
  return {
    name: undefined,
    shouldDeleteWhenCombining: false,
    notImportable: restricted
  };
}

interface Props {
  disabled: boolean;
  loading: boolean;
  isRestricted?: boolean;
  onSubmit: (formValues: CombinePlaylistFormValues) => void;
}
export default function CombinePlaylistsForm({
  disabled,
  onSubmit,
  loading,
  isRestricted = false
}: Props) {
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={createInitialFormValues(isRestricted)}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, handleChange }) => (
        <AntdForm onSubmit={handleSubmit}>
          <Field
            component={FormikInputField}
            name="name"
            formItemProps={{
              label: 'Playlist name',
              colon: false,
              htmlFor: 'name',
              style: { marginBottom: 0 }
            }}
            placeholder="Playlist name"
            id="name"
          />
          <Form.Item style={{ marginBottom: 0 }}>
            <Checkbox onChange={handleChange('shouldDeleteWhenCombining')}>
              Delete playlist when combining
            </Checkbox>
            <RestrictImportingWrapper>
              <Checkbox
                disabled={isRestricted}
                defaultChecked={isRestricted}
                onChange={handleChange('notImportable')}
              >
                Restrict to this party
              </Checkbox>
              <RestrictPlaylistInfo />
            </RestrictImportingWrapper>
          </Form.Item>
          <Form.Item>
            <Button
              htmlType="submit"
              type="primary"
              disabled={disabled}
              loading={loading}
            >
              Combine
            </Button>
          </Form.Item>
        </AntdForm>
      )}
    </Formik>
  );
}
