import React from 'react';
import { Affix, Typography, Button } from 'antd';
import styled from '@emotion/styled';
import posed from 'react-pose';

export const UserTopTitleInnerWrapper = styled(
  posed.div({
    fixed: {
      borderBottom: '0px dashed #e8e8e8'
    },
    notFixed: {
      borderBottom: '1px dashed #e8e8e8'
    }
  })
)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserTopTitleWrapper = styled(
  posed.div({
    fixed: {
      background: 'rgba(255,255,255, 1)'
    },
    notFixed: {
      background: 'rgba(255,255,255, 0)'
    }
  })
)`
  h3 {
    margin-bottom: 12px;
  }
  button {
    margin-bottom: 12px;
  }
  margin-bottom: 20px;
  z-index: 10;
  padding-top: 12px;
`;

interface Props {
  headingText: string;
  onMoreClick: () => void;
}
const UserTopHeading: React.FC<Props> = props => {
  const [isFixed, setIsFixed] = React.useState<boolean>(false);
  return (
    <Affix
      offsetTop={0}
      onChange={isFixed => setIsFixed(isFixed ? isFixed : false)}
      style={{ width: '100%' }}
    >
      <UserTopTitleWrapper
        className="title-wrapper"
        pose={isFixed ? 'fixed' : 'notFixed'}
      >
        <UserTopTitleInnerWrapper>
          <Typography.Title level={3}>{props.headingText}</Typography.Title>
          <Button shape="round" type="primary" onClick={props.onMoreClick}>
            Show more
          </Button>
        </UserTopTitleInnerWrapper>
      </UserTopTitleWrapper>
    </Affix>
  );
};

export default UserTopHeading;
