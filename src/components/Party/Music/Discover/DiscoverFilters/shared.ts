import styled from '@emotion/styled';
import { Colors } from '@shared/styles';

export const FiltersHeading = styled.div`
  h4 {
    margin-bottom: 0;
  }
  margin-bottom: 12px;
  .icon {
    margin-right: 6px;
    color: ${Colors.AntdBlue};
  }
`;

export const FiltersBody = styled.div`
  margin-bottom: 24px;
`;

export type FilterKeys = 'genre' | 'artist';
export type FilterValue = string | undefined;
export type Filters = Record<FilterKeys, FilterValue>;
