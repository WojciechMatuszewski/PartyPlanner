import React from 'react';
import styled from '@emotion/styled';
import { FlexBoxFullCenteredStyles } from '@shared/styles';
import { Icon, Typography } from 'antd';
import { SerializedStyles } from '@emotion/css';

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 66px);
  flex-direction: column;
  ${FlexBoxFullCenteredStyles};
  span {
    margin-top: 12px;
  }
`;

const ChatSectionLoading: React.FC<{ cssProp?: SerializedStyles }> = ({
  cssProp
}) => {
  return (
    <Wrapper css={[cssProp]}>
      <Icon
        type="loading"
        spin={true}
        style={{ fontSize: 36, color: '#1890ff' }}
      />
      <Typography.Text type="secondary">Loading</Typography.Text>
    </Wrapper>
  );
};

export default ChatSectionLoading;
