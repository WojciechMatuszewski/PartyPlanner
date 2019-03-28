import React from 'react';
import styled from '@emotion/styled';
import PartiesListPartyCard from './PartiesListPartyCard';
import { PartyFragmentFragment } from '@generated/graphql';

const GridWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-gap: 12px;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
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
      {parties.map(party => (
        <PartiesListPartyCard party={party} key={party.id} />
      ))}
    </GridWrapper>
  );
};

export default PartiesListCardGrid;
