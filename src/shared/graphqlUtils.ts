import { PartiesQueryVariables } from '@generated/graphql';
import moment from 'moment';

export function getPartiesDateVariables(
  dateToGetVariablesFor: Date,
  userId: string
): Partial<PartiesQueryVariables> {
  return {
    where: {
      start_gte: moment(dateToGetVariablesFor)
        .startOf('month')
        .subtract(7, 'days')
        .format(),
      end_lte: moment(dateToGetVariablesFor)
        .endOf('month')
        .add(7, 'days')
        .format(),
      members_some: {
        id: userId
      }
    }
  };
}
