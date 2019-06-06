import posed from 'react-pose';
import styled from '@emotion/styled';

const MOBILE_BREAKPOINT = '992px';

export const PartyMainContentWrapper = styled(
  posed.section({
    visible: {
      opacity: 1
    },
    hidden: {
      opacity: 0
    }
  })
)`
  margin: 24px auto 24px auto;
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  width: 100%;
  align-self: flex-start;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  background: white;
  z-index: 1;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  overflow: hidden;
  .dashboard-content-item {
    padding: 12px 24px;
  }
  .no-padding-mobile {
    @media screen and (max-width: ${MOBILE_BREAKPOINT}) {
      padding: 12px 0;
    }
  }
  @media screen and (max-width: 1500px) {
    margin-top: auto;
    margin-bottom: auto;
    border-radius: 0;
    width: 100%;
    max-width: 100%;
  }
`;
