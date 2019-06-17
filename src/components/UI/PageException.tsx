import React from 'react';
import {
  FlexWrapperFullHeightMinusHeaderStyles,
  FlexBoxFullCenteredStyles
} from '@shared/styles';
import css from '@emotion/css';
import { Typography, Button } from 'antd';
import { withRouter, WithRouterProps } from 'next/router';

const PageExceptionStyles = css`
  padding: 12px;
  h1 {
    margin-bottom: 0;
  }
  img {
    max-width: 600px;
    height: auto;
    padding-right: 130px;
    box-sizing: content-box;
  }
  @media screen and (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    img {
      padding: 0;
      margin-bottom: 24px;
      width: 100%;
    }
  }
`;

const defaultProps = Object.freeze({
  img: '/static/warning.svg',
  title: 'Oops!',
  desc: 'Something went wrong',
  redirectPath: '/',
  backText: 'Back to home',
  actions: null as React.ReactNode
});

type Props = typeof defaultProps & WithRouterProps;

function PageException(props: Props) {
  return (
    <div
      data-testid="page-exception"
      css={[
        FlexWrapperFullHeightMinusHeaderStyles,
        FlexBoxFullCenteredStyles,
        PageExceptionStyles
      ]}
    >
      <img src={props.img} />
      <div>
        <Typography.Title level={1}>{props.title}</Typography.Title>
        <Typography.Paragraph style={{ fontSize: 24, maxWidth: 400 }}>
          {props.desc}
        </Typography.Paragraph>
        {props.actions ? (
          props.actions
        ) : (
          <Button type="primary" onClick={handleOnBackClick}>
            {props.backText}
          </Button>
        )}
      </div>
    </div>
  );

  function handleOnBackClick() {
    props.router && props.router.push(props.redirectPath);
  }
}

PageException.defaultProps = defaultProps;

const withRouterPageException = withRouter(PageException);

// problem with default props
export default withRouterPageException as typeof PageException;
