import React from 'react';
import { withApolloAuth } from '@apolloSetup/withApolloAuth';
import PartiesList from '@components/Party/PartiesList/PartiesList';
import { BackTop } from 'antd';
import { MeQueryMe } from '@generated/graphql';
import { NextFunctionComponent } from 'next';

interface Props {
  me: MeQueryMe;
}
const PartiesPage: NextFunctionComponent<Props> = ({ me }) => {
  return (
    <React.Fragment>
      <PartiesList userId={me.id} />
      <BackTop />
    </React.Fragment>
  );
};

export default withApolloAuth({ userHasToBe: 'authenticated' })(PartiesPage);
