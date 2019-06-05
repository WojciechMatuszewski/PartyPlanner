import React from 'react';
import { Typography } from 'antd';
import { SerializedStyles } from '@emotion/css';

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
    <div css={props.emotionCSS} style={props.style}>
      <div>
        <img src={props.image} />
        <div style={{ textAlign: 'center' }}>
          <Typography.Title level={4}>{props.title}</Typography.Title>
          <Typography.Paragraph type="secondary">
            {props.description}
          </Typography.Paragraph>
        </div>
      </div>
    </div>
  );
}

EmptySection.defaultProps = defaultProps;

export default EmptySection;
