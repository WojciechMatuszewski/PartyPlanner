import React from 'react';
import {
  withApolloAuth,
  WithApolloAuthInjectedProps
} from '@apolloSetup/withApolloAuth';

import { BackTop, Button } from 'antd';
import { HasPartiesQueryComponent } from '@generated/graphql';
import { NextFunctionComponent } from 'next';

import GraphqlLoading from '@components/GraphqlLoading';
import NoData from '@components/NoData';
import { withRouter, WithRouterProps } from 'next/router';
import GraphqlException from '@components/GraphqlException';
import { handleRefetch } from '@shared/graphqlUtils';
import PartiesList from '@components/Party/PartiesList/PartiesList';

const UserParties: NextFunctionComponent<
  WithApolloAuthInjectedProps & WithRouterProps
> = ({ me, router }) => {
  return (
    <HasPartiesQueryComponent>
      {({ loading, data, error, refetch }) => {
        if (error)
          return (
            <GraphqlException
              style={{ height: 'calc(100vh - 66px)' }}
              actions={
                <Button onClick={async () => await handleRefetch(refetch)}>
                  Try again
                </Button>
              }
            />
          );

        if (loading || !data)
          return (
            <GraphqlLoading
              isLoadingInitially={true}
              loading={true}
              textToDisplay="Loading your parties"
            />
          );

        if (!data.hasParties)
          return (
            <NoData
              style={{ height: 'auto' }}
              message="You currently do not have any parties"
              action={
                <Button
                  type="primary"
                  onClick={() =>
                    router && router.push('/party-create', '/party/create')
                  }
                >
                  Create new party
                </Button>
              }
            />
          );

        return (
          <React.Fragment>
            <PartiesList userId={me.id} />
            <BackTop />
          </React.Fragment>
        );
      }}
    </HasPartiesQueryComponent>
  );
};

export default withRouter(
  withApolloAuth({ userHasToBe: 'authenticated' })(UserParties)
);