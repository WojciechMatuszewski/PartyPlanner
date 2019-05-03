import styled from '@emotion/styled';
import posed from 'react-pose';

export const UserTopWrapper = styled.section`
  width: 100%;
  padding-top: 24px;
  padding-bottom: 24px;
  .title-wrapper,
  .grid-wrapper {
    padding-left: 24px;
    padding-right: 24px;
    @media screen and (max-width: 800px) {
      padding-left: 6px;
      padding-right: 6px;
    }
  }
`;
