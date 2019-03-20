import Fuse from 'fuse.js';
import React from 'react';

export function useFuzzySearch<T>(
  filterValue: string,
  values: T[],
  options: Fuse.FuseOptions<T>
) {
  const [filteredValues, setFilteredValues] = React.useState<T[]>(values);
  const fuse = React.useMemo(() => new Fuse(values, options), [values]);

  React.useEffect(() => {
    if (filterValue.trim().length === 0) {
      setFilteredValues(values);
      return;
    }
    setFilteredValues(fuse.search(filterValue));
  }, [filterValue, values]);

  return filteredValues;
}
