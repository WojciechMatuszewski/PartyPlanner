export interface ColorTint {
  name: string;
  dotColor: string;
  weekBorderColor: string;
  weekTileColor: string;
  spanningMoreThanOneDayColor: string;
}

export const calendarTints: ColorTint[] = [
  {
    name: 'green',
    dotColor: '#52c41a',
    weekBorderColor: '#7cb342',
    weekTileColor: 'rgba(124,179,66,0.7)',
    spanningMoreThanOneDayColor: 'rgba(124,179,66,0.2)'
  },
  {
    name: 'purple',
    dotColor: '#8e24aa',
    weekBorderColor: '#8e24aa',
    weekTileColor: 'rgb(142,36,170, 0.7)',
    spanningMoreThanOneDayColor: 'rgb(142,36,170, 0.2)'
  },
  {
    name: 'orange',
    dotColor: '#f4511e',
    weekBorderColor: '#f4511e',
    weekTileColor: 'rgb(244,81,30, 0.7)',
    spanningMoreThanOneDayColor: 'rgb(244,81,30, 0.2)'
  },
  {
    name: 'magenta',
    dotColor: '#EB2F96',
    weekBorderColor: '#EB2F96',
    weekTileColor: 'rgb(235,47,150,0.7)',
    spanningMoreThanOneDayColor: 'rgb(235,47,150,0.2)'
  }
];

export function getCalendarColorTint() {
  return calendarTints[Math.floor(Math.random() * calendarTints.length) + 0];
}
