import { css } from '@emotion/core';
import { PushNotificationScope } from '@generated/graphql';
import { Button, Checkbox, Divider, Form } from 'antd';
import { Formik } from 'formik';
import { compose } from 'ramda';
import React from 'react';

export type UserProfilePushNotificationsFormValues = {
  [PushNotificationScope.FriendInvites]: boolean;
  [PushNotificationScope.PartyInvites]: boolean;
  all: boolean;
};

const FormStyles = css`
  .ant-divider {
    margin: 0;
    margin-top: 14px;
    margin-bottom: 4px;
  }
`;

interface Props {
  onSubmit: (values: PushNotificationScope[]) => void;
  loading: boolean;
  initialScopes: PushNotificationScope[];
}

export default function UserProfilePushNotificationsForm({
  loading,
  onSubmit,
  initialScopes
}: Props) {
  function toScopes(
    values: UserProfilePushNotificationsFormValues
  ): PushNotificationScope[] {
    return (Object.entries(values) as Array<
      [keyof UserProfilePushNotificationsFormValues, boolean]
    >).reduce<PushNotificationScope[]>((acc, [scope, value]) => {
      if (value == true && scope != 'all') return acc.concat(scope);
      return acc;
    }, []);
  }

  function getInitialFormValues() {
    const obj = initialScopes.reduce<UserProfilePushNotificationsFormValues>(
      (acc, scope) => {
        acc[scope] = true;
        return acc;
      },
      {} as UserProfilePushNotificationsFormValues
    );
    if (initialScopes.length == 2) {
      obj.all = true;
    }
    return obj;
  }

  return (
    <Formik
      initialValues={getInitialFormValues()}
      onSubmit={compose(onSubmit, toScopes)}
    >
      {({
        values,
        handleChange,
        handleReset,
        handleSubmit,
        setValues,
        dirty
      }) => (
        <Form css={[FormStyles]} onSubmit={handleSubmit}>
          <Checkbox
            indeterminate={
              (values.FRIEND_INVITES || values.PARTY_INVITES) && !values.all
            }
            checked={
              values.all || (values.FRIEND_INVITES && values.PARTY_INVITES)
            }
            onChange={e => {
              if (!e.target.checked) {
                handleReset();
              }
              setValues({
                FRIEND_INVITES: true,
                PARTY_INVITES: true,
                all: true
              });
            }}
          >
            Select all
          </Checkbox>
          <Divider />
          <Form.Item style={{ marginBottom: 0 }}>
            <Checkbox
              name={PushNotificationScope.FriendInvites}
              checked={values.FRIEND_INVITES}
              onChange={handleChange(PushNotificationScope.FriendInvites)}
            >
              On friend invites
            </Checkbox>
          </Form.Item>
          <Form.Item style={{ marginBottom: 12 }}>
            <Checkbox
              name={PushNotificationScope.PartyInvites}
              checked={values.PARTY_INVITES}
              onChange={handleChange(PushNotificationScope.PartyInvites)}
            >
              On party invites
            </Checkbox>
          </Form.Item>

          <Button
            disabled={!dirty}
            loading={loading}
            htmlType="submit"
            type="primary"
          >
            Save changes
          </Button>
        </Form>
      )}
    </Formik>
  );
}
