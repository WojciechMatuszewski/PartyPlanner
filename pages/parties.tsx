import React from 'react';
import { BackTop } from 'antd';
import { usePartiesQuery, PartyFragmentFragment } from '@generated/graphql';
import { withApolloAuth } from '@apolloSetup/withApolloAuth';
import PartiesListPane from '@components/Party/PartiesList/PartiesListPane';

import PartiesListLoading from '@components/Party/PartiesList/PartiesListLoading';

import PartiesListFilterChips from '@components/Party/PartiesList/PartiesListFilterChips';
import PartiesListCardGrid from '@components/Party/PartiesList/PartiesListCardGrid';
import PartiesListFilterDrawer from '@components/Party/PartiesList/PartiesListFilterDrawer';

interface Props {
  userId: string;
}
const PartiesPage: React.FC<Props> = ({ userId }) => {
  const { data, loading } = usePartiesQuery({
    variables: {
      where: {
        members_some: {
          id: userId
        }
      }
    }
  });

  // if (loading || !data || !data.parties) return <Spin />;

  return (
    <div style={{ width: '100%' }}>
      <PartiesListPane />
      <PartiesListFilterDrawer />
      <PartiesListLoading isLoadingInitially={true} loading={loading} />
      {!loading && data && data.parties ? (
        <React.Fragment>
          <PartiesListFilterChips />
          <PartiesListCardGrid
            parties={data.parties as PartyFragmentFragment[]}
          />
        </React.Fragment>
      ) : // <React.Fragment>

      null}
      <BackTop />
    </div>
  );
};

export default withApolloAuth({ userHasToBe: 'authenticated' })(PartiesPage);
