import styled from '@emotion/styled';
import { FlexBoxFullCenteredStyles } from '@shared/styles';

export const JoinPartySection = styled.section`
  flex: 1;
  ${FlexBoxFullCenteredStyles};
  flex-direction: column;
  padding: 12px;
  .antd-pro-avatar-list-avatarList ul {
    padding-left: 8px;
    margin-left: 0;
    margin-bottom: 24px;
  }
  h1 {
    max-width: 400px;
  }

  @media screen and (max-width: 800px) {
    text-align: center;
    h1 {
      max-width: 100%;
    }
    justify-content: flex-start;

    .join-party-info {
      padding-left: 12px;
      padding-right: 12px;
    }
  }
`;

export const JoinPartyImageWrapper = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 50%;
  border: 1px solid #d9d9d9;
  box-shadow: 0 3px 8px #d3ddeb;
  overflow: hidden;
  margin-right: 42px;
  ${FlexBoxFullCenteredStyles};
  img {
    width: 70%;
    height: 70%;
  }

  @media screen and (max-width: 1000px) {
    /* width: 100%; */
    height: auto;
    box-shadow: none;
    border-radius: 0;
    border: 0;
    margin-right: 24px;
    border-right: 2px dashed #d9d9d9;
  }

  @media screen and (max-width: 800px) {
    border: 0;
    width: 100%;
    max-height: 450px;
    margin-right: 0;
    margin-bottom: 24px;
    background: rgba(24, 144, 255, 0.1);

    img {
      max-width: 100%;
      max-height: 100%;
      height: auto;
    }
  }
`;

export const JoinPartyInnerWrapper = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: 100%;
    /* min-height: 100%; */
    padding-bottom: 24px;
    background: white;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }
`;
