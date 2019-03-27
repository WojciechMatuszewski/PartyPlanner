import hexRgb from 'hex-rgb';

export interface ColorTint {
  dotColor: string;
  weekBorderColor: string;
  weekTileColor: string;
  spanningMoreThanOneDayColor: string;
}

export interface CalendarTints {
  [key: string]: ColorTint;
}

export const toRgba = (hex: string, alpha: number) => {
  const rgb = hexRgb(hex, { format: 'array' })
    .slice(0, -1)
    .join(',');
  return `rgba(${rgb},${alpha})`;
};

export const calendarTintsHexArray = [
  '#f44336',
  '#e91e63',
  '#9c27b0',
  '#673ab7',
  '#3f51b5',
  '#2196f3',
  '#03a9f4',
  '#00bcd4',
  '#009688',
  '#4caf50',
  '#8bc34a',
  '#cddc39',
  '#ffeb3b',
  '#ffc107',
  '#ff9800',
  '#ff5722',
  '#795548',
  '#607d8b'
];

export const calendarTints: CalendarTints = calendarTintsHexArray.reduce(
  (acc: CalendarTints, currentHexTint) => {
    acc[currentHexTint] = {
      dotColor: currentHexTint,
      weekBorderColor: toRgba(currentHexTint, 1),
      weekTileColor: toRgba(currentHexTint, 0.7),
      spanningMoreThanOneDayColor: toRgba(currentHexTint, 0.2)
    };
    return acc;
  },
  {}
);

export function getCalendarColorTint(hexColor: string): ColorTint {
  return calendarTints[hexColor];
}
