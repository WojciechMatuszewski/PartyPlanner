import styled from '@emotion/styled';
import { FlexBoxFullCenteredStyles } from '../../shared/styles';
import posed from 'react-pose';

export const AuthWrapper = styled(
  posed.div({
    enter: { y: 0, opacity: 1 },
    exit: { y: 40, opacity: 0 }
  })
)`
  min-height: calc(100vh - 66px);
  padding: 0 20px;
  box-sizing: border-box;
  margin: 0 auto;

  ${FlexBoxFullCenteredStyles};

  @media screen and (max-width: 1440px) {
    padding-right: 30px;
  }

  @media screen and (max-width: 1050px) {
    align-items: flex-start;
    padding: 20px;
  }

  @media screen and (max-width: 550px) {
    padding: 10px;
    width: 100%;
  }
`;

export const AuthInnerWrapper = styled.div`
  max-width: 800px;
  width: 500px;
  text-align: left;
  h3 {
    margin-top: 30px;
  }
  h1 {
    border-bottom: 3px solid #1890ff;
    display: inline-block;
    margin-bottom: 24px;
    padding-bottom: 6px;
  }
  border-left: 2px dashed #d9d9d9;
  padding: 20px 0;
  padding-left: 100px;

  @media screen and (max-width: 1440px) {
    padding-left: 50px;
  }

  @media screen and (max-width: 1200px) {
    padding-left: 40px;
  }

  @media screen and (max-width: 1050px) {
    border: 0;
    background: white;
    padding: 40px;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    margin-top: 30px;
  }

  @media screen and (max-width: 550px) {
    width: 100%;
    padding: 20px;
    margin-top: 0;
  }
`;

export const AuthImageWrapper = styled.div`
  height: 100%;
  flex: 1;
  width: 100%;
  display: grid;
  padding-right: 100px;

  img,
  svg {
    align-self: center;
  }

  @media screen and (min-width: 1441px) {
    img,
    svg {
      width: 800px;
    }
  }

  @media screen and (max-width: 1440px) {
    img,
    svg {
      width: 100%;
    }
    padding-right: 50px;
  }

  @media screen and (max-width: 1200px) {
    padding-right: 30px;
  }

  @media screen and (max-width: 1050px) {
    display: none;
  }
`;
