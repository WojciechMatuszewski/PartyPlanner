import React from 'react';
import { withApolloAuth } from '@apolloSetup/withApolloAuth';
import PartiesList from '@components/Party/PartiesList/PartiesList';
import { BackTop } from 'antd';
import { MeQueryMe } from '@generated/graphql';

interface Props {
  me: MeQueryMe;
}
const PartiesPage: React.FC<Props> = ({ me }) => {
  return (
    <React.Fragment>
      <PartiesList userId={me.id} />
      <BackTop />
    </React.Fragment>
  );
};

export default withApolloAuth({ userHasToBe: 'authenticated' })(PartiesPage);
