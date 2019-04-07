import React from 'react';
import { Empty, Typography, Button } from 'antd';
import css from '@emotion/css';
import styled from '@emotion/styled';

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
  width: 100%;
  height: 100%;
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
        description={
          <React.Fragment>
            {/* {isQueryStringApplied() ? (
         
                Could not find party with title containing
                <br />
                <Typography.Text type="warning">
                  {props.queryString}
                </Typography.Text>
    
            ) : (
              <div>Could not find parties that match the applied filters</div>
            )}
            {props.hasFiltersApplied && (
              <Button
                css={[ResetFilterButtonStyles]}
                onClick={props.onClearAllFilters}
              >
                Reset All filters
              </Button>
            )} */}
          </React.Fragment>
        }
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
      <Typography.Text type="warning">{props.queryString}</Typography.Text>
    </div>
  );
};

export default PartiesListNoResults;
