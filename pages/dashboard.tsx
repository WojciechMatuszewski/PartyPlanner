import React from 'react';
import { withApolloAuth } from '../apolloSetup/withApolloAuth';
import { MeQueryMe } from '@generated/graphql';

const Dashboard: React.FC<MeQueryMe> = () => {
  return (
    <div>
      <h1>Protected dashboard!</h1>
    </div>
  );
};

export default withApolloAuth(Dashboard);
