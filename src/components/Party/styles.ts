import css from '@emotion/css';
import styled from '@emotion/styled';
import { FlexWrapperFullHeightMinusHeaderStyles } from '@shared/styles';

export const WithSideMenuPartyContentStyles = css`
  width: calc(100vw - 220px);
  @media screen and (max-width: 1080px) {
    width: 100%;
  }
`;

export const PartyContentWrapper = styled.section`
  ${FlexWrapperFullHeightMinusHeaderStyles};
  ${WithSideMenuPartyContentStyles};
  flex-direction: column;
`;

export const PartyContentInnerWrapper = styled.div`
  max-width: 1280px;
  padding: 0 12px;
  width: 100%;
  height: 100%;
`;
