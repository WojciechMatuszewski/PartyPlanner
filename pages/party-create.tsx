import React from 'react';
import CreateParty from '@components/Party/CreateParty/CreateParty';
import {
  withApolloAuth,
  WithApolloAuthInjectedProps
} from '@apolloSetup/withApolloAuth';

const CreatePartyPage: React.FC<WithApolloAuthInjectedProps> = ({ me }) => {
  return <CreateParty userId={me.id} />;
};

export default withApolloAuth({ userHasToBe: 'authenticated' })(
  CreatePartyPage
);
