import React from 'react';
import styled from '@emotion/styled';
import { FlexBoxFullCenteredStyles } from '@shared/styles';
import { Spin, Typography } from 'antd';
import posed, { PoseGroup } from 'react-pose';

const LoaderWrapper = styled(
  posed.div({
    enter: {
      opacity: 1
    },
    exit: {
      opacity: 0

      // transition: {
      //   duration: 0
      // }
    }
  })
)`
  ${FlexBoxFullCenteredStyles};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 10;
  top: 66px;
  z-index: 3;
  background: ${({ isLoadingInitially }: { isLoadingInitially: boolean }) =>
    isLoadingInitially ? 'transparent' : 'rgba(255,255,255,0.7)'};
  span {
    margin-top: 12px;
  }
`;

interface Props {
  isLoadingInitially: boolean;
  loading: boolean;
}

const PartiesListLoading: React.FC<Props> = ({
  isLoadingInitially,
  loading
}) => {
  return (
    <PoseGroup>
      {loading && (
        <LoaderWrapper isLoadingInitially={isLoadingInitially} key={1}>
          <Spin size="large" />
          {isLoadingInitially && (
            <Typography.Text>Loading your parties</Typography.Text>
          )}
        </LoaderWrapper>
      )}
    </PoseGroup>
  );
};

export default PartiesListLoading;
