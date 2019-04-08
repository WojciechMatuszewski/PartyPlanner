import React from 'react';
import { Empty, Typography, Button } from 'antd';
import css from '@emotion/css';
import styled from '@emotion/styled';
import { FlexBoxFullCenteredStyles } from '@shared/styles';

interface Props {
  showBeVisible: boolean;
  hasFiltersApplied: boolean;
  queryString: string;
  onClearAllFilters: VoidFunction;
}

const EmptyStyles = css`
  .ant-empty-description {
    max-width: 300px;
    margin: 0 auto !important;
    word-break: break-word;
  }
  .ant-empty-image {
    max-height: 300px;
    height: auto;
  }
`;

const EmptyContainer = styled.div`
  ${FlexBoxFullCenteredStyles};
  width: 100%;
  min-height: calc(100vh - 180px);
  padding-bottom: 24px;
`;
const ResetFilterButtonStyles = css`
  margin-top: 24px;
`;

const PartiesListNoResults: React.FC<Props> = props => {
  return props.showBeVisible ? (
    <EmptyContainer>
      <Empty
        css={[EmptyStyles]}
        children={[
          isQueryStringApplied() ? (
            <NoResultsSearchQueryApplied
              queryString={props.queryString}
              key={1}
            />
          ) : (
            <div key={1}>
              Could not find parties that match the applied filters
            </div>
          ),
          props.hasFiltersApplied ? (
            <Button
              key={2}
              css={[ResetFilterButtonStyles]}
              onClick={props.onClearAllFilters}
            >
              Reset All filters
            </Button>
          ) : null
        ]}
      />
    </EmptyContainer>
  ) : null;

  function isQueryStringApplied() {
    return props.queryString.trim().length > 0;
  }
};

const NoResultsSearchQueryApplied: React.FC<{
  queryString: string;
}> = props => {
  return (
    <div>
      Could not find party with title containing
      <br />
      <Typography.Text
        type="warning"
        style={{
          wordBreak: 'break-all',
          maxWidth: 400,
          display: 'block',
          margin: '0 auto'
        }}
      >
        {props.queryString}
      </Typography.Text>
    </div>
  );
};

export default PartiesListNoResults;
