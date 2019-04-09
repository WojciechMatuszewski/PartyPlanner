import React from 'react';
import styled from '@emotion/styled';
import { FlexBoxFullCenteredStyles } from '@shared/styles';
import { Button, Spin } from 'antd';

interface Props {
  isLoadingMore: boolean;
  canLoadMore: boolean;
  onLoadMoreButtonClick: () => Promise<void>;
  hasResults: boolean;
}

const LoadMoreWrapper = styled.div`
  width: 100%;
  padding-bottom: 24px;
  ${FlexBoxFullCenteredStyles};
  min-height: ${(props: { hasResults: boolean }) =>
    !props.hasResults ? ' calc(100vh - 156px)' : 'auto'};
`;

const PartiesListLoadMore: React.FC<Props> = props => {
  return props.canLoadMore || props.isLoadingMore ? (
    <LoadMoreWrapper hasResults={props.hasResults}>
      {props.canLoadMore && !props.isLoadingMore && props.hasResults && (
        <Button onClick={props.onLoadMoreButtonClick}>Load More</Button>
      )}
      {props.isLoadingMore && <Spin />}
    </LoadMoreWrapper>
  ) : null;
};

export default PartiesListLoadMore;
