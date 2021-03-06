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
    }
  })
)<{ isLoadingInitially: boolean }>`
  ${FlexBoxFullCenteredStyles};
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 10;
  top: 66px;
  z-index: 3;
  span {
    margin-top: 12px;
  }
`;

interface Props {
  isLoadingInitially: boolean;
  loading: boolean;
  textToDisplay?: string;
  height?: string;
}

const GraphqlLoading: React.FC<Props> = ({
  isLoadingInitially,
  loading,
  textToDisplay = null,
  height
}) => {
  return (
    <PoseGroup>
      {loading && (
        <LoaderWrapper
          isLoadingInitially={isLoadingInitially}
          key={1}
          style={{ height: height ? height : 'calc(100vh - 66px)' }}
        >
          <Spin size="large" />
          {isLoadingInitially && (
            <Typography.Title
              level={4}
              style={{ marginBottom: 0, marginTop: 12 }}
            >
              {textToDisplay}
            </Typography.Title>
          )}
        </LoaderWrapper>
      )}
    </PoseGroup>
  );
};

export default GraphqlLoading;
