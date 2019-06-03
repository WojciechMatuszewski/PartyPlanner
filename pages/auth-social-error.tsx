import React from 'react';
import { withApolloAuth } from '@apolloSetup/withApolloAuth';
import GraphqlException from '@components/GraphqlException';
import { Button } from 'antd';
import { isBrowser } from '@apolloSetup/initApollo';
import { compose } from 'react-apollo';
import { withRouter, WithRouterProps } from 'next/router';

function AuthSocialErrorPage(props: WithRouterProps) {
  return (
    <GraphqlException
      desc="Something went bad!"
      actions={
        <Button type="primary" onClick={handleOnErrorLick}>
          {hasWindowOpener() ? 'Close this window' : 'Go back!'}
        </Button>
      }
    />
  );

  function handleOnErrorLick() {
    if (hasWindowOpener())
      window.opener.postMessage('close', process.env.NEXT_STATIC_FRONTEND_URL);
    else props.router && props.router.back();
  }

  function hasWindowOpener() {
    return isBrowser() && window.opener;
  }
}

export default compose(
  withRouter,
  withApolloAuth({ userHasToBe: 'notAuthenticated' })
)(AuthSocialErrorPage);
