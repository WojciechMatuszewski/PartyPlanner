import React from 'react';
import LocalizeMeButton from './LocalizeMeButton';
import styled from '@emotion/styled';
import { FlexBoxFullCenteredStyles } from '@shared/styles';
import SearchForLocation from './SearchForLocation';

const PartyLocationWrapper = styled.div`
  width: 100%;
  ${FlexBoxFullCenteredStyles};
  .ant-form-item {
    margin: 0;
    width: 100%;
  }
  button {
    margin-bottom: 1px;
  }
  margin-bottom: 24px;
`;

const CreatePartyLocation: React.FC = () => {
  function handleLocationSelected() {}

  return (
    <PartyLocationWrapper>
      <SearchForLocation onLocationSelected={handleLocationSelected} />
      <LocalizeMeButton />
    </PartyLocationWrapper>
  );
};

export default CreatePartyLocation;
