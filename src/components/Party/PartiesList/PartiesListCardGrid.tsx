import React from 'react';
import styled from '@emotion/styled';
import PartiesListPartyCard from './PartiesListPartyCard';
import { PaginatePartiesQueryEdges } from '@generated/graphql';

import { useFuzzySearch } from '@hooks/useFuzzySearch';
import { Empty, Typography } from 'antd';
import css from '@emotion/css';
import posed from 'react-pose';

const GridLoadMoreWrapper = styled(
  posed.div({
    enter: {
      opacity: 1,
      y: 0
    },
    exit: {
      opacity: 0,
      y: 40
    }
  })
)`
  width: 100%;
  display: block;
`;

const GridWrapper = styled.section`
  display: grid;
  max-width: 1440px;
  grid-gap: 12px;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));

  padding: 0 12px;
  @media screen and (max-width: 1120px) {
    width: 100%;
  }
  @media screen and (max-width: 679px) {
    padding: 0;
  }
  @media screen and (max-width: 330px) {
    grid-template-columns: 1fr;
  }
`;

interface Props {
  parties: PaginatePartiesQueryEdges[];
  filterInputValue: string;
  children: (hasResultsAfterFiltering: boolean) => React.ReactNode;
}

const PartiesListCardGrid: React.FC<Props> = ({
  parties,
  filterInputValue,
  children
}) => {
  const filteredParties = useFuzzySearch<PaginatePartiesQueryEdges>(
    filterInputValue,
    parties,
    {
      keys: ['node.title'] as any,
      shouldSort: true,
      tokenize: true,
      distance: 0,
      threshold: 0.0
    }
  );

  return (
    <GridLoadMoreWrapper initialPose="exit" pose="enter">
      <GridWrapper>
        {filteredParties.map((party, index) => (
          <PartiesListPartyCard
            party={party}
            key={party.node.id}
            delayIndex={index}
          />
        ))}
      </GridWrapper>
      {children(filteredParties.length > 0)}
    </GridLoadMoreWrapper>
  );
};

export default PartiesListCardGrid;
