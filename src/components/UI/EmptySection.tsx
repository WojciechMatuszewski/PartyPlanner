import React from 'react';
import { Typography } from 'antd';
import { SerializedStyles } from '@emotion/css';
import { UISectionWrapper } from '@shared/styles';

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
    <UISectionWrapper css={props.emotionCSS} style={props.style}>
      <img src={props.image} />
      <div style={{ textAlign: 'center' }}>
        <Typography.Title level={4}>{props.title}</Typography.Title>
        <Typography.Paragraph type="secondary">
          {props.description}
        </Typography.Paragraph>
      </div>
    </UISectionWrapper>
  );
}

EmptySection.defaultProps = defaultProps;

export default EmptySection;