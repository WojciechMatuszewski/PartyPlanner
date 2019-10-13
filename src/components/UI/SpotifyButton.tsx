import React from 'react';
import { ButtonProps } from 'antd/lib/button';
import { Button, Icon } from 'antd';
import css from '@emotion/css';
import { FlexBoxFullCenteredStyles } from '@shared/styles';
import SpotifyIcon from '@customIcons/spotify.svg';

const BaseSpotifyButtonStyles = css`
  .anticon + span,
  span + .anticon {
    margin-bottom: 3px;
  }
`;

const BaseSpotifyIconStyles = css`
  svg {
    width: 24px;
    height: 24px;
  }
`;

const WhiteSpotifyButtonIconStyles = css`
  ${BaseSpotifyIconStyles};
  color: #1db954;
`;

const GreenSpotifyButtonIconStyles = css`
  ${BaseSpotifyIconStyles};
  color: white;
`;

const SpotifyIconStyles = css`
  ${BaseSpotifyIconStyles};
  ${WhiteSpotifyButtonIconStyles};
  @media screen and (max-width: 1050px) {
    ${GreenSpotifyButtonIconStyles}
  }
`;

const WhiteSpotifyButtonStyles = css`
  ${BaseSpotifyButtonStyles};
  ${FlexBoxFullCenteredStyles};
  &:hover,
  &:focus,
  &:active {
    color: rgba(0, 0, 0, 0.65);
    border-color: white;
  }
`;

const GreenSpotifyButtonStyles = css`
  ${FlexBoxFullCenteredStyles};
  ${BaseSpotifyButtonStyles};
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
    background: white;
    color: rgba(0, 0, 0, 0.25);
    .anticon {
      color: rgba(0, 0, 0, 0.25);
    }
  }
`;

const SpotifyButtonStyles = css`
  ${WhiteSpotifyButtonStyles};
  ${FlexBoxFullCenteredStyles};
  @media screen and (max-width: 1050px) {
    ${GreenSpotifyButtonStyles};
  }
`;

export default function SpotifyButton(props: ButtonProps) {
  const { children, ...restOfProps } = props;
  return (
    <Button {...restOfProps} css={[SpotifyButtonStyles]}>
      <Icon component={SpotifyIcon} css={[SpotifyIconStyles]} />
      {children}
    </Button>
  );
}

export function GreenSpotifyButton(props: ButtonProps) {
  const { children, ...restOfProps } = props;
  return (
    <Button {...restOfProps} css={[GreenSpotifyButtonStyles]}>
      <Icon component={SpotifyIcon} css={[GreenSpotifyButtonIconStyles]} />
      {children}
    </Button>
  );
}

export function WhiteSpotifyButton(props: ButtonProps) {
  const { children, ...restOfProps } = props;
  return (
    <Button {...restOfProps} css={[WhiteSpotifyButtonStyles]}>
      <Icon component={SpotifyIcon} css={[WhiteSpotifyButtonIconStyles]} />
      {children}
    </Button>
  );
}
