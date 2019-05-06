import css from '@emotion/css';

export const NotWrappingTextStyles = css`
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
`;

export const AntdSecondaryHeadingColor = 'rgba(0,0,0,0.65)';

export const FlexBoxFullCenteredStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WhiteSpotifyButtonStyles = css`
  &:hover,
  &:focus,
  &:active {
    color: rgba(0, 0, 0, 0.65);
    border-color: white;
  }
`;

export const GreenSpotifyButtonStyles = css`
  background: #1db954;
  border-color: #1db954;
  color: white;
  &:hover,
  &:focus,
  &:active {
    background: #1db954;
    color: white;
  }
  &:disabled,
  &:disabled:hover {
    background: #1db954;
    .anticon {
      color: rgba(0, 0, 0, 0.25);
    }
  }
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
