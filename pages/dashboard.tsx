import React from 'react';
import { withApolloAuth } from '../apolloSetup/withApolloAuth';
import { MeQueryMe } from '@generated/graphql';

const Dashboard: React.FC<MeQueryMe> = () => {
  return <div>dashboard works</div>;
};

export default withApolloAuth({ userHasToBe: 'authenticated' })(Dashboard);
