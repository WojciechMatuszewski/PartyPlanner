import React from 'react';
import { Formik } from 'formik';
import {
  Form,
  Checkbox,
  Button,
  message,
  Tooltip,
  Icon,
  Typography
} from 'antd';
import gql from 'graphql-tag';
import { useUser_UpdatePrivacy } from '@generated/graphql';
import * as yup from 'yup';
import styled from '@emotion/styled';

const CheckboxTooltipWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const UPDATE_USER_PRIVACY_MUTATION = gql`
  mutation User_UpdatePrivacy(
    $data: UserUpdateInput!
    $where: UserWhereUniqueInput!
  ) {
    updateUser(where: $where, data: $data) {
      id
    }
  }
`;

const USER_PRIVACY_FRAGMENT = gql`
  fragment USER_PRIVACY_FRAGMENT on User {
    isPrivate
  }
`;

interface FormValues {
  isNotPrivate: boolean;
}

const validationSchema = yup.object().shape<FormValues>({
  isNotPrivate: yup.boolean()
});

interface Props {
  userId: string;
  isPrivate: boolean;
}
export default function UserProfilePrivacy({ userId, isPrivate }: Props) {
  const [updateUserPrivacy, { loading }] = useUser_UpdatePrivacy({
    onCompleted: () => message.success('Setting updated successfully'),
    onError: () => message.error('Something went wrong, try again!')
  });

  return (
    <Formik
      initialValues={{ isNotPrivate: !isPrivate }}
      validationSchema={validationSchema}
      onSubmit={formValues =>
        updateUserPrivacy({
          variables: {
            where: { id: userId },
            data: { isPrivate: !formValues.isNotPrivate }
          },
          update: proxy => {
            proxy.writeFragment({
              fragment: USER_PRIVACY_FRAGMENT,
              id: `User:${userId}`,
              data: {
                isPrivate: !formValues.isNotPrivate,
                __typename: 'User'
              }
            });
          }
        })
      }
    >
      {({ handleSubmit, dirty, handleChange, values }) => (
        <Form onSubmit={handleSubmit}>
          <Form.Item style={{ marginBottom: 12 }}>
            <CheckboxTooltipWrapper>
              <Checkbox
                name="isNotPrivate"
                onChange={handleChange('isNotPrivate')}
                checked={values.isNotPrivate}
              >
                I want to be visible on{' '}
                <Typography.Text strong={true}>People</Typography.Text> tab
              </Checkbox>
              <Tooltip
                title="When checked, other users will be able to find you on People tab."
                trigger="click"
              >
                <Icon type="question-circle" theme="twoTone" />
              </Tooltip>
            </CheckboxTooltipWrapper>
          </Form.Item>
          <Button
            loading={loading}
            type="primary"
            htmlType="submit"
            disabled={!dirty}
          >
            Save changes
          </Button>
        </Form>
      )}
    </Formik>
  );
}
