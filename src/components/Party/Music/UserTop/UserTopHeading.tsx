import React from 'react';
import { Affix, Typography } from 'antd';
import styled from '@emotion/styled';
import posed from 'react-pose';

export const UserTopTitleInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;

  &.not-fixed {
    border-bottom: 1px dashed #e8e8e8;
  }
`;

export const UserTopTitleWrapper = styled(
  posed.div({
    fixed: {
      background: 'rgba(255,255,255, 1)'
    },
    notFixed: {
      background: 'rgba(255,255,255, 0)'
    },
    loaded: {
      opacity: 1
    },
    loading: {
      opacity: 0
    }
  })
)`
  h3 {
    margin: 0;
  }
  button {
    margin-bottom: 12px;
  }
  z-index: 10;
  height: 53px;
  display: block;
  &.fixed {
    border-bottom: 1px solid #e8e8e8;
  }
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
        className={`title-wrapper ${isFixed ? 'fixed' : ''}`}
        pose={isFixed ? 'fixed' : 'notFixed'}
      >
        <UserTopTitleInnerWrapper className={isFixed ? 'fixed' : 'not-fixed'}>
          <Typography.Title level={3}>{props.headingText}</Typography.Title>
        </UserTopTitleInnerWrapper>
      </UserTopTitleWrapper>
    </Affix>
  );
};

export default UserTopHeading;
