import RestrictPlaylistInfo from '../shared/RestrictPlaylistInfo';

import styled from '@emotion/styled';
import FormikInputField from '@shared/FormikInputField';
import { Button, Checkbox, Form as AntdForm, Form } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
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

function createInitialFormValues() {
  return {
    name: undefined,
    shouldDeleteWhenCombining: false,
    notImportable: false
  };
}

interface Props {
  disabled: boolean;
  loading: boolean;
  onSubmit: (formValues: CombinePlaylistFormValues) => void;
}
export default function CombinePlaylistsForm({
  disabled,
  onSubmit,
  loading
}: Props) {
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={createInitialFormValues()}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, handleChange, values }) => (
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
            <DeleteWhenCombiningCheckbox
              onChange={handleChange('shouldDeleteWhenCombining')}
              checked={values.shouldDeleteWhenCombining}
            />
            <RestrictToThisPartyCheckbox
              onChange={handleChange('notImportable')}
              checked={values.notImportable}
            />
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

interface RestrictToThisPartyCheckboxProps {
  onChange: (e: CheckboxChangeEvent) => void;
  checked: boolean;
}
function RestrictToThisPartyCheckbox({
  onChange,
  checked
}: RestrictToThisPartyCheckboxProps) {
  return (
    <RestrictImportingWrapper>
      <Checkbox
        name="notImportable"
        onChange={onChange}
        checked={checked}
        defaultChecked={false}
      >
        Restrict to this party
      </Checkbox>
      <RestrictPlaylistInfo />
    </RestrictImportingWrapper>
  );
}

interface DeleteWhenCombiningCheckboxProps {
  onChange: (e: CheckboxChangeEvent) => void;
  checked: boolean;
}
function DeleteWhenCombiningCheckbox({
  onChange,
  checked
}: DeleteWhenCombiningCheckboxProps) {
  return (
    <Checkbox
      name="shouldDeleteWhenCombining"
      onChange={onChange}
      checked={checked}
      defaultChecked={false}
    >
      Delete playlist when combining
    </Checkbox>
  );
}
