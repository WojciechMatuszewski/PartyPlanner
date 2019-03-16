import React from 'react';
import UserDashboard from '@components/UserDashboard/UserDashboard';
import { withApolloAuth } from '@apolloSetup/withApolloAuth';

const Dashboard: React.FC = () => {
  return <UserDashboard />;
};

export default withApolloAuth({ userHasToBe: 'authenticated' })(Dashboard);
