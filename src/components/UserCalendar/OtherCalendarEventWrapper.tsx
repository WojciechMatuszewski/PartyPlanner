import React from 'react';
import { ColorTint } from './ColorTints';
import styled from '@emotion/styled';
import { animated, useSpring } from 'react-spring';
import CalendarEventPopover from './CalendarEventPopover';
import { CorrectedEventWrapperProps } from './CalendarEventWrapper';
import { CalendarEvent } from './Events';

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
  CorrectedEventWrapperProps<CalendarEvent> & {
    parsedStyles: React.CSSProperties;
    isDay: boolean;
  }
> = props => {
  const animationProps = useSpring({ opacity: 1, from: { opacity: 0 } });

  const [clicked, setClicked] = React.useState<boolean>(false);
  function toggleClicked() {
    setClicked(!clicked);
  }

  return (
    <EventTileWrapper
      colorTint={props.event.colorTint}
      isDay={props.isDay}
      className={`rbc-event ${clicked ? 'clicked' : ''}`}
      style={{ ...props.parsedStyles, ...animationProps }}
    >
      <CalendarEventPopover onVisibilityChange={toggleClicked}>
        <EventTileWrapperInner className="calendarPopupContainer">
          <span className="title">works</span>
          <p>Title</p>
        </EventTileWrapperInner>
      </CalendarEventPopover>
    </EventTileWrapper>
  );
};

export default OtherCalendarEventWrapper;
