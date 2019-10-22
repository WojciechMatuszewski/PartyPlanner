import { FlexBoxFullCenteredStyles } from './../../../../shared/styles';
import styled from '@emotion/styled';

export const AffixedBarContainer = styled.div`
  width: 100%;
  background: white;
  ${FlexBoxFullCenteredStyles};
  padding: 12px;
  border-bottom: 1px solid rgb(232, 232, 232);
  height: 53px;
  form {
    max-width: calc(1280px - 24px);
    width: 1000%;
  }
`;
