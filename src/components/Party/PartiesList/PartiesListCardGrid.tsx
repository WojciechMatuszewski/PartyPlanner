import React from 'react';
import styled from '@emotion/styled';
import PartiesListPartyCard from './PartiesListPartyCard';
import { PaginatePartiesQueryEdges } from '@generated/graphql';

import { useFuzzySearch } from '@hooks/useFuzzySearch';

import posed from 'react-pose';

const PosedGridOuterWrapper = styled(
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
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  padding: 0 12px;
  @media screen and (max-width: 1050px) {
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 679px) {
    padding: 0;
    grid-template-columns: repeat(1, 1fr);
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
    <React.Fragment>
      <PosedGridOuterWrapper
        style={{ paddingBottom: filteredParties.length > 0 ? 24 : 0 }}
        initialPose="exit"
        pose="enter"
      >
        <GridWrapper>
          {filteredParties.map((party, index) => (
            <PartiesListPartyCard
              party={party}
              key={party.node.id}
              delayIndex={index}
            />
          ))}
        </GridWrapper>
      </PosedGridOuterWrapper>
      {children(filteredParties.length > 0)}
    </React.Fragment>
  );
};

export default PartiesListCardGrid;
