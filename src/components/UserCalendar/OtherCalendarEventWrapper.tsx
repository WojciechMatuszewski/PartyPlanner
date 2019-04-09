import React from 'react';
import { ColorTint, getCalendarColorTint } from './ColorTints';
import styled from '@emotion/styled';
import { animated, useSpring } from 'react-spring';
import CalendarEventPopover from './CalendarEventPopover';
import { CorrectedEventWrapperProps } from './CalendarEventWrapper';
import { PartiesQueryParties } from '@generated/graphql';
import { Typography } from 'antd';

interface EventTileWrapperProps {
  isDay: boolean;
  colorTint: ColorTint;
}

const EventTileWrapper = styled(animated.div, {
  shouldForwardProp: prop => prop !== 'isDay' && prop !== 'colorTint'
})`
  background: ${(props: EventTileWrapperProps) =>
    props.colorTint.weekTileColor} !important;
  border-left: 3px solid
    ${(props: EventTileWrapperProps) => props.colorTint.weekBorderColor} !important;
  border-right: 0 !important;
  border-top: 0 !important;
  border-bottom: 0 !important;
  border-radius: 0 !important;
  transition: transform 0.3s ease;
  box-sizing: border-box;
  @media screen and (min-width: 800px) {
    &.clicked {
      z-index: 99;
      background: ${(props: EventTileWrapperProps) =>
        props.colorTint.weekBorderColor} !important;
      transform: scale(
        ${({ isDay }: EventTileWrapperProps) => (isDay ? 1 : 1.1)}
      );
    }
  }
`;

const EventTileWrapperInner = styled.div`
  width: 100%;
  height: 100%;
  span.title {
    font-weight: bold;
  }
`;

const OtherCalendarEventWrapper: React.FC<
  CorrectedEventWrapperProps<PartiesQueryParties> & {
    parsedStyles: React.CSSProperties;
    isDay: boolean;
    event: PartiesQueryParties;
  }
> = props => {
  const animationProps = useSpring({ opacity: 1, from: { opacity: 0 } });

  const [clicked, setClicked] = React.useState<boolean>(false);
  function toggleClicked() {
    setClicked(!clicked);
  }

  return (
    <EventTileWrapper
      colorTint={getCalendarColorTint(props.event.colorTint)}
      isDay={props.isDay}
      className={`rbc-event ${clicked ? 'clicked' : ''}`}
      style={{ ...props.parsedStyles, ...animationProps }}
    >
      <CalendarEventPopover
        onVisibilityChange={toggleClicked}
        party={props.event}
      >
        <EventTileWrapperInner className="calendarPopupContainer">
          <span className="title">{props.event.title}</span>
          <Typography.Paragraph
            ellipsis={{ rows: 4, expandable: false }}
            style={{ color: 'rgba(255,255,255, 0.8)' }}
          >
            {props.event.description}
          </Typography.Paragraph>
        </EventTileWrapperInner>
      </CalendarEventPopover>
    </EventTileWrapper>
  );
};

export default OtherCalendarEventWrapper;
