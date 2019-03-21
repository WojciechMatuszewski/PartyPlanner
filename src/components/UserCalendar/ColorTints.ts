export interface ColorTint {
  name: string;
  dotColor: string;
  weekBorderColor: string;
  weekTileColor: string;
  spanningMoreThanOneDayColor: string;
}

export const calendarTints: ColorTint[] = [
  {
    name: 'blue',
    dotColor: '#096dd9',
    weekBorderColor: '#096dd9',
    weekTileColor: 'rgba(9,109,217, 0.7)',
    spanningMoreThanOneDayColor: 'rgba(9,109,217, 0.2)'
  },
  {
    name: 'gold',
    dotColor: '#009688',
    weekBorderColor: '#009688',
    weekTileColor: 'rgba(0,150,136, 0.7)',
    spanningMoreThanOneDayColor: 'rgba(0,150,136, 0.2)'
  },
  {
    name: 'green',
    dotColor: '#5b8c00',
    weekBorderColor: '#5b8c00',
    weekTileColor: 'rgba(91,140,0, 0.7)',
    spanningMoreThanOneDayColor: 'rgba(91,140,0, 0.2)'
  }
  // {
  //   name: 'magenta',
  //   dotColor: '#EB2F96',
  //   weekBorderColor: '#EB2F96',
  //   weekTileColor: 'rgb(235,47,150,0.7)',
  //   spanningMoreThanOneDayColor: 'rgba(235,47,150,0.2)'
  // }
];

export function getCalendarColorTint() {
  return calendarTints[Math.floor(Math.random() * calendarTints.length) + 0];
}
