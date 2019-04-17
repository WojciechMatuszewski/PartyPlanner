import React from 'react';
import { Spin } from 'antd';
import styled from '@emotion/styled';
import { FlexBoxFullCenteredStyles } from '@shared/styles';

export interface FetchMoreLoaderProps {
  style?: React.CSSProperties;
  loading: boolean;
  onLoadingChange?: () => void;
}

const LoaderWrapper = styled.div`
  width: 100%;
  padding: 12px;
  ${FlexBoxFullCenteredStyles};
`;

const FetchMoreLoader: React.FC<FetchMoreLoaderProps> = props => {
  React.useEffect(() => {
    props.onLoadingChange && props.onLoadingChange();
  }, [props.loading]);

  return (
    <div style={props.style}>
      {props.loading && (
        <LoaderWrapper>
          <Spin />
        </LoaderWrapper>
      )}
    </div>
  );
};

export default React.memo(FetchMoreLoader);
