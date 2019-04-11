import React from 'react';
import css from '@emotion/css';
import Exception, { IExceptionProps } from 'ant-design-pro/lib/Exception';

const ExceptionStyles = css`
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
`;

const GraphqlException: React.FC<IExceptionProps> = props => {
  return <Exception css={[ExceptionStyles]} {...props} />;
};

GraphqlException.defaultProps = {
  img: '../static/warning.svg',
  title: 'Oops!',
  desc: 'Something went wrong'
};

export default GraphqlException;
