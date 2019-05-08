import React from 'react';
import { withApolloAuth } from '@apolloSetup/withApolloAuth';
import { NextFunctionComponent } from 'next';

const ResetPassword: React.FC = () => {
  return <div>Works</div>;
};

const Test: any = withApolloAuth({ userHasToBe: 'authenticated' })(
  ResetPassword
);

Test.getInitialProps = async function() {
  console.log('works');
};

export default Test;
