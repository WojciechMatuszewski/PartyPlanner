import React from 'react';
import styled from '@emotion/styled';
import PartiesListPartyCard from './PartiesListPartyCard';

import posed from 'react-pose';
import { PaginatePartiesQueryQuery } from '@generated/graphql';

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
  parties: PaginatePartiesQueryQuery['partiesConnection']['edges'];
  filterInputValue: string;
  children: (hasResults: boolean) => React.ReactNode;
}

const PartiesListCardGrid: React.FC<Props> = ({ parties, children }) => {
  return (
    <React.Fragment>
      <PosedGridOuterWrapper
        style={{ paddingBottom: parties.length > 0 ? 24 : 0 }}
        initialPose="exit"
        pose="enter"
      >
        <GridWrapper data-testid="partiesListGrid">
          {parties.map((party: any, index) => (
            <PartiesListPartyCard
              party={party}
              key={party.node.id}
              delayIndex={index}
            />
          ))}
        </GridWrapper>
      </PosedGridOuterWrapper>
      {children(parties.length > 0)}
    </React.Fragment>
  );
};

export default PartiesListCardGrid;
