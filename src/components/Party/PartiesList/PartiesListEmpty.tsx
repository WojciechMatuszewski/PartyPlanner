import React from 'react';
import { Empty } from 'antd';
import styled from '@emotion/styled';
import { FlexBoxFullCenteredStyles } from '@shared/styles';

const EmptyWrapper = styled.div`
  width: 100%;
  height: 100%;
  ${FlexBoxFullCenteredStyles};
`;

const PartiesListEmpty: React.FC = () => {
  return (
    <EmptyWrapper>
      <Empty
        description="You currently are not invited nor hosting any parties"
        image={'../static/empty.svg'}
      />
    </EmptyWrapper>
  );
};

export default PartiesListEmpty;
