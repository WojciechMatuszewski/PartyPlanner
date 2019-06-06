import React from 'react';
import { Typography } from 'antd';
import { SerializedStyles } from '@emotion/css';
import styled from '@emotion/styled';

const EmptyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  img {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 12px;
    display: block;
    width: 100%;
  }
  h4 {
    margin-bottom: 0;
  }
`;

const defaultProps = Object.freeze({
  image: '/static/no-data.svg',
  title: 'No data',
  description: 'There is not data to show'
});

type Props = typeof defaultProps & {
  emotionCSS?: SerializedStyles;
  style?: React.CSSProperties;
};

function EmptySection(props: Props) {
  return (
    <EmptyWrapper css={props.emotionCSS} style={props.style}>
      <img src={props.image} />
      <div style={{ textAlign: 'center' }}>
        <Typography.Title level={4}>{props.title}</Typography.Title>
        <Typography.Paragraph type="secondary">
          {props.description}
        </Typography.Paragraph>
      </div>
    </EmptyWrapper>
  );
}

EmptySection.defaultProps = defaultProps;

export default EmptySection;
