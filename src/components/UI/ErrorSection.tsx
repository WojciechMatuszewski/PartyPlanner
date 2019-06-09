import React from 'react';

import { Typography } from 'antd';

import { SerializedStyles } from '@emotion/css';
import { UISectionWrapper } from './styles';

const defaultProps = Object.freeze({
  image: '/static/error.svg',
  title: 'Some Error Ocurred',
  description: null as string | null
});

type Props = typeof defaultProps & {
  emotionCSS?: SerializedStyles;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

function ErrorSection(props: Props) {
  return (
    <UISectionWrapper style={props.style} css={props.emotionCSS}>
      <img src={props.image} />
      <div style={{ textAlign: 'center' }}>
        <Typography.Title level={4} type="danger">
          {props.title}
        </Typography.Title>
        {props.description && (
          <Typography.Paragraph>{props.description}</Typography.Paragraph>
        )}
        {props.children}
      </div>
    </UISectionWrapper>
  );
}

ErrorSection.defaultProps = defaultProps;
export default ErrorSection;
