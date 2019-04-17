import React from 'react';
import CreateParty from '@components/Party/CreateParty/CreateParty';
import { withApolloAuth } from '@apolloSetup/withApolloAuth';
import { MeQueryMe } from '@generated/graphql';

const CreatePartyPage: React.FC<{ me: MeQueryMe }> = ({ me }) => {
  return <CreateParty userId={me.id} />;
};

export default withApolloAuth({ userHasToBe: 'authenticated' })(
  CreatePartyPage
);
