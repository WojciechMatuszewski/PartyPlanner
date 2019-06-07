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
    width: 100%;
    height: auto;
    box-shadow: none;
    border-radius: 0;
    border: 0;
    margin-right: 24px;
  }

  @media screen and (max-width: 800px) {
    max-width: 450px;
    max-height: 450px;
    margin-right: 0;
    margin-bottom: 24px;
  }
`;

export const JoinPartyInnerWrapper = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    padding: 12px;
    width: 100%;
    min-height: 100%;
    background: white;
    border-radius: 4px;
  }
`;
