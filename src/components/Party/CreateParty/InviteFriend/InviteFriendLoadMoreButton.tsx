import React from 'react';
import styled from '@emotion/styled';
import { Button } from 'antd';

const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: 12px;
  height: 32px;
  line-height: 32px;
`;

interface Props {
  onLoadMoreClick: () => void;
}

const InviteFriendLoadMoreButton: React.FC<Props> = props => {
  return (
    <ButtonWrapper>
      <Button onClick={props.onLoadMoreClick}>Load More</Button>
    </ButtonWrapper>
  );
};

export default InviteFriendLoadMoreButton;
