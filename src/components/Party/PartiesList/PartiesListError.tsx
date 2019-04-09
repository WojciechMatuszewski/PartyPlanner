import React from 'react';
import { Exception } from 'ant-design-pro';
import css from '@emotion/css';
import { WithRouterProps, withRouter } from 'next/router';
import { Button } from 'antd';

const PartiesListError: React.FC<WithRouterProps> = ({ router }) => {
  return (
    <Exception
      css={css`
        @media screen and (max-width: 575px) {
          padding-bottom: 24px;
          flex: 1;
          display: flex;
          flex-direction: column;
          .antd-pro-exception-imgBlock {
            max-height: 300px;
          }
          .antd-pro-exception-content {
            display: inline;
          }
        }
      `}
      title="Oops!"
      desc="Something went wrong"
      img={'../static/warning.svg'}
      actions={
        <Button
          type="primary"
          onClick={() => router && router.push('/dashboard')}
        >
          Go back to dashboard
        </Button>
      }
    />
  );
};

export default withRouter(PartiesListError);
