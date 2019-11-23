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
      {({ handleSubmit, handleChange, setFieldValue, values }) => (
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
          <Form.Item
            validateStatus={isRestricted ? 'warning' : undefined}
            help={isRestricted ? 'Includes restricted playlist' : undefined}
          >
            <DeleteWhenCombiningCheckbox
              onChange={handleChange('shouldDeleteWhenCombining')}
              isRestricted={isRestricted}
              checked={values.shouldDeleteWhenCombining}
              onManuallySetValue={value =>
                setFieldValue('shouldDeleteWhenCombining', value)
              }
            />
            <RestrictToThisPartyCheckbox
              onChange={handleChange('notImportable')}
              isRestricted={isRestricted}
              checked={values.notImportable}
              onManuallySetValue={value =>
                setFieldValue('notImportable', value)
              }
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
  isRestricted: boolean;
  onChange: (e: CheckboxChangeEvent) => void;
  onManuallySetValue: (valueToSet: boolean) => void;
  checked: boolean;
}
function RestrictToThisPartyCheckbox({
  isRestricted,
  onChange,
  onManuallySetValue,
  checked
}: RestrictToThisPartyCheckboxProps) {
  React.useEffect(() => {
    onManuallySetValue(isRestricted);
  }, [isRestricted]);

  return (
    <RestrictImportingWrapper>
      <Checkbox
        name="notImportable"
        disabled={isRestricted}
        defaultChecked={isRestricted}
        onChange={onChange}
        checked={checked}
      >
        Restrict to this party
      </Checkbox>
      <RestrictPlaylistInfo />
    </RestrictImportingWrapper>
  );
}

interface DeleteWhenCombiningCheckboxProps {
  isRestricted: boolean;
  onChange: (e: CheckboxChangeEvent) => void;
  onManuallySetValue: (valueToSet: boolean) => void;
  checked: boolean;
}
function DeleteWhenCombiningCheckbox({
  isRestricted,
  onChange,
  onManuallySetValue,
  checked
}: DeleteWhenCombiningCheckboxProps) {
  React.useEffect(() => {
    if (checked && isRestricted) {
      onManuallySetValue(false);
    }
  }, [isRestricted, checked]);

  return (
    <Checkbox
      name="shouldDeleteWhenCombining"
      onChange={onChange}
      disabled={isRestricted}
      checked={checked}
    >
      Delete playlist when combining
    </Checkbox>
  );
}
