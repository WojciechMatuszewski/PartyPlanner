import React from 'react';
import { BackTop } from 'antd';
import { usePartiesQuery } from '@generated/graphql';
import { withApolloAuth } from '@apolloSetup/withApolloAuth';
import PartiesListPane from '@components/Party/PartiesList/PartiesListPane';

import PartiesListLoading from '@components/Party/PartiesList/PartiesListLoading';

import PartiesListEmpty from '@components/Party/PartiesList/PartiesListEmpty';

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
      <PartiesListLoading isLoadingInitially={true} loading={loading} />
      {!loading && data && data.parties ? (
        <PartiesListEmpty />
      ) : // <React.Fragment>
      //   <PartiesListFilterChips />
      //   <PartiesListCardGrid
      //     parties={data.parties as PartyFragmentFragment[]}
      //   />
      // </React.Fragment>
      null}
      <BackTop />
    </div>
  );
};

export default withApolloAuth({ userHasToBe: 'authenticated' })(PartiesPage);
