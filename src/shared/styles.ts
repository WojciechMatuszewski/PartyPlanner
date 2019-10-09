import css from '@emotion/css';

export const NotWrappingTextStyles = css`
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
`;

export const AntdSecondaryHeadingColor = 'rgba(0,0,0,0.65)';

export const CallToActionButtonStyles = css`
  box-shadow: 0 8px 16px #0554b7;
  background: linear-gradient(to right, #05cbff, #1e5aff) !important;
  height: 42px;
  line-height: 42px;
  font-size: 14px;
  border: 0;
  border-radius: 21px;
  color: #fff;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 20px #0554b7;
  }
  &:active {
    transform: translateY(4px);
    box-shadow: 0 4px 8px #0554b7;
  }
`;

export const FlexBoxFullCenteredStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TransparentButtonStyles = css`
  background: transparent;
  border: 0;
  cursor: pointer;
  display: inline-block;
`;

export const FlexBoxVerticallyCenteredStyles = css`
  display: flex;
  align-items: center;
`;

export const FlexBoxHorizontallyCenteredStyles = css`
  display: flex;
  justify-content: center;
`;

export const FlexWrapperFullHeightMinusHeaderStyles = css`
  min-height: calc(100vh - 66px);
  width: 100%;
  display: flex;
`;

export const Colors = {
  AntdBlue: '#1890ff'
};
