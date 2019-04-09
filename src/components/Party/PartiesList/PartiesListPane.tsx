import React from 'react';
import { Anchor, Typography, Input, Button } from 'antd';
import styled from '@emotion/styled';
import css from '@emotion/css';
import redirect from '@apolloSetup/redirect';
import useMedia from '@hooks/useMedia';
import { PartiesListContext } from './PartiesList';
import {
  PartiesListDrawerActions,
  PartiesListFilterActions
} from './PartiesListReducer';
import { callAll } from '@shared/functionUtils';
import { compose } from 'react-apollo';
import { ApolloQueryResult } from 'apollo-boost';
import { PaginatePartiesQueryQuery } from '@generated/graphql';
import useBetterTypeahead from '@hooks/useBetterTypeahead';
const AnchorStyles = css`
  .ant-anchor {
    padding-left: 0;
    border-left: 0;
    .ant-anchor-ink {
      display: none;
    }
  }

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`;

const AnchorInnerWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  height: 66px;
  display: flex;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  padding: 12px;
  @media screen and (max-width: 1120px) {
    width: 100%;
  }
  @media screen and (max-width: 800px) {
    h3 {
      display: none;
    }
  }
`;

const ButtonsWrapper = styled.div`
  margin-left: 24px;
  display: flex;
  button:first-of-type {
    margin-right: 8px;
    @media screen and (max-width: 669px) {
      margin-right: 12px;
    }
  }
  @media screen and (max-width: 669px) {
    margin-left: 12px;
  }
`;

const PaneTitleStyles = css`
  margin-bottom: 0 !important;
  white-space: nowrap;
  margin-right: 24px;
`;

interface Props {
  onDataFetch: () => Promise<ApolloQueryResult<PaginatePartiesQueryQuery>>;
  onDataFetched: (data: PaginatePartiesQueryQuery) => void;
  paginationInfoUpdater: () => Promise<any>;
  inputValue: string;
  onError: VoidFunction;
}
const PartiesListPane: React.FC<Props> = props => {
  const shouldButtonsHaveText = useMedia('(min-width:669px)');
  const { dispatch } = React.useContext(PartiesListContext);
  const [typeaheadCallbackCalled, setTypeaheadCallbackCalled] = React.useState<
    boolean
  >();

  const { onChange } = useBetterTypeahead({
    fetchFunction: () => {
      setTypeaheadCallbackCalled(true);
      return props.onDataFetch();
    },
    onResult: props.onDataFetched,
    responseTransformFunction,
    onChangeTransformFunction,
    onError: props.onError
  });

  React.useEffect(() => {
    async function handleQueryRefetch() {
      await props.paginationInfoUpdater();
      setTypeaheadCallbackCalled(false);
    }
    if (props.inputValue.trim().length === 0 && typeaheadCallbackCalled) {
      handleQueryRefetch();
    }
  }, [props.inputValue, typeaheadCallbackCalled]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    compose(
      dispatch,
      PartiesListFilterActions.setInputFilterValue
    )(e.currentTarget.value);

  return (
    <React.Fragment>
      <Anchor showInkInFixed={false} css={[AnchorStyles]}>
        <AnchorInnerWrapper>
          <Typography.Title css={[PaneTitleStyles]} level={3}>
            Your Parties
          </Typography.Title>
          <Input.Search
            placeholder="Type here..."
            value={props.inputValue}
            onChange={callAll(onChange, handleOnChange)}
          />
          <ButtonsWrapper>
            <Button
              icon="plus"
              type="primary"
              onClick={() => redirect({} as any, '/create-party')}
            >
              {shouldButtonsHaveText ? 'Create new party' : null}
            </Button>
            <Button icon="filter" onClick={handleDrawerOpen}>
              {shouldButtonsHaveText ? 'Filters' : null}
            </Button>
          </ButtonsWrapper>
        </AnchorInnerWrapper>
      </Anchor>
    </React.Fragment>
  );

  function responseTransformFunction(
    fetchResponse: ApolloQueryResult<PaginatePartiesQueryQuery>
  ) {
    return fetchResponse.data;
  }
  function handleDrawerOpen() {
    dispatch(PartiesListDrawerActions.setDrawerVisible());
  }
  function onChangeTransformFunction(e: React.ChangeEvent<HTMLInputElement>) {
    return e.currentTarget.value;
  }
};

export default PartiesListPane;
