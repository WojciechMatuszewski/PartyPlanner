import React from 'react';
import { Typography } from 'antd';
import css from '@emotion/css';

interface Props {
  dividerText: string;
}
const DividerStyles = css`
  text-align: center;
  margin-top: 1.2em;
`;
const ChatMessageDivider: React.FC<Props> = ({ dividerText }) => {
  return (
    <Typography.Paragraph css={[DividerStyles]} type="secondary">
      {dividerText}
    </Typography.Paragraph>
  );
};

export default ChatMessageDivider;
