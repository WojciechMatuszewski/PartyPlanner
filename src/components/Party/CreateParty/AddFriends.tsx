import React from 'react';
import { connect, FormikContext } from 'formik';
import { CreatePartyForm } from '../CreateParty';
import { useMeQuery, useFriendsOfUserQuery } from '@generated/graphql';
import { Spin, Form, Input } from 'antd';

const AddFriends: React.FC<{ formik: FormikContext<CreatePartyForm> }> = () => {
  const { loading: meDataLoading, data: meData } = useMeQuery({
    fetchPolicy: 'cache-first'
  });

  // function safelyGetMeId() {
  //   return meData && meData.me ? meData.me.id : '';
  // }

  if (meDataLoading || !meData || !meData.me) return <Spin />;

  const { data, loading } = useFriendsOfUserQuery({
    variables: {
      where: {
        id_not: meData.me.id,
        friends_some: { id: meData.me.id },
        firstName_contains: 'e',
        OR: [{ firstName_starts_with: 'mat' }]
      }
    }
  });

  return (
    <React.Fragment>
      <Form.Item
        hasFeedback={true}
        validateStatus={loading ? 'validating' : undefined}
      >
        <Input
          placeholder="Search your friends"
          disabled={!data || !data.getUsers}
        />
      </Form.Item>
      {!data || !data.getUsers ? (
        <Spin />
      ) : (
        data.getUsers.map(user => (
          <h3 key={Math.random()}>{user && user.firstName}</h3>
        ))
      )}
    </React.Fragment>
  );
};

export default connect<{}, CreatePartyForm>(AddFriends);
