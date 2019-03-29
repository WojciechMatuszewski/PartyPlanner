import React from 'react';
import styled from '@emotion/styled';
import PartiesListPartyCard from './PartiesListPartyCard';
import { PartyFragmentFragment } from '@generated/graphql';
import { PoseGroup } from 'react-pose';

const GridWrapper = styled.section`
  display: grid;
  max-width: 1100px;
  grid-gap: 12px;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  margin: 0 auto;
  @media screen and (max-width: 1120px) {
    width: 100%;
    padding: 0 12px;
  }
  @media screen and (max-width: 679px) {
    padding: 0;
  }
  @media screen and (max-width: 330px) {
    grid-template-columns: 1fr;
  }
`;

interface Props {
  parties: PartyFragmentFragment[];
}

const PartiesListCardGrid: React.FC<Props> = ({ parties }) => {
  return (
    <GridWrapper>
      <PoseGroup flipMove={true}>
        {parties.map((party, index) => (
          <PartiesListPartyCard
            party={party}
            key={party.id}
            delayIndex={index}
          />
        ))}
      </PoseGroup>
    </GridWrapper>
  );
};

export default PartiesListCardGrid;
