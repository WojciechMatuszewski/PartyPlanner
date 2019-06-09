import React from 'react';
import { Anchor, Typography, Input, Button, Form } from 'antd';
import styled from '@emotion/styled';
import css from '@emotion/css';
import redirect from '@apolloSetup/redirect';
import useMedia from '@hooks/useMedia';

import { debounce } from 'lodash';
import { compose } from 'ramda';

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
  onChange: (value: string) => void;
  onDrawerOpen: () => void;
  loading: boolean;
}
const PartiesListPane: React.FC<Props> = props => {
  const debouncedOnChangeRef = React.useRef<any>(debounce(props.onChange, 300));

  const shouldButtonsHaveText = useMedia('(min-width:669px)');

  return (
    <React.Fragment>
      <Anchor showInkInFixed={false} css={[AnchorStyles]}>
        <AnchorInnerWrapper>
          <Typography.Title css={[PaneTitleStyles]} level={3}>
            Your Parties
          </Typography.Title>
          <Form style={{ width: '100%', marginBottom: 0 }}>
            <Form.Item
              style={{ marginBottom: 0 }}
              hasFeedback={true}
              validateStatus={props.loading ? 'validating' : undefined}
            >
              <Input.Search
                data-testid="paneInput"
                placeholder="Type here..."
                onChange={compose(
                  debouncedOnChangeRef.current,
                  onChangeTransformFunction
                )}
              />
            </Form.Item>
          </Form>
          <ButtonsWrapper>
            <Button
              icon="plus"
              type="primary"
              onClick={() =>
                redirect({} as any, '/party-create', '/party/create')
              }
            >
              {shouldButtonsHaveText ? 'Create new party' : null}
            </Button>
            <Button
              data-testid="onDrawerOpenBtn"
              icon="filter"
              onClick={props.onDrawerOpen}
            >
              {shouldButtonsHaveText ? 'Filters' : null}
            </Button>
          </ButtonsWrapper>
        </AnchorInnerWrapper>
      </Anchor>
    </React.Fragment>
  );

  function onChangeTransformFunction(e: React.ChangeEvent<HTMLInputElement>) {
    return e.currentTarget.value;
  }
};

export default PartiesListPane;
