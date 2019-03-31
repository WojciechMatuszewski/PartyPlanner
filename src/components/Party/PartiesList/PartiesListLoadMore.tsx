import React from 'react';
import styled from '@emotion/styled';
import { FlexBoxFullCenteredStyles } from '@shared/styles';
import { Button, Spin } from 'antd';

interface Props {
  isLoadingMore: boolean;
  canLoadMore: boolean;
  onLoadMoreButtonClick: VoidFunction;
  hasResults: boolean;
}

const LoadMoreWrapper = styled.div`
  width: 100%;
  padding: 24px 0;
  ${FlexBoxFullCenteredStyles};
`;

const PartiesListLoadMore: React.FC<Props> = props => {
  return (
    <LoadMoreWrapper>
      {props.canLoadMore && !props.isLoadingMore && props.hasResults ? (
        <Button onClick={props.onLoadMoreButtonClick}>Load More</Button>
      ) : props.isLoadingMore ? (
        <Spin />
      ) : null}
    </LoadMoreWrapper>
  );
};

export default PartiesListLoadMore;
