import React from 'react';
import { debounce } from 'lodash';
import { compose } from 'ramda';

import Input, { SearchProps } from 'antd/lib/input';
import { Omit } from 'ts-essentials';

interface Props extends Omit<SearchProps, 'onChange'> {
  onChange: (value: string) => any;
}

export default function AntdSearch(props: Props) {
  const { onChange, ...restOfProps } = props;

  const debouncedOnChangeRef = React.useRef<Props['onChange']>(
    debounce(props.onChange, 300)
  );

  return (
    <Input.Search
      onChange={compose(
        debouncedOnChangeRef.current,
        onChangeTransformFunction
      )}
      {...restOfProps}
    />
  );

  function onChangeTransformFunction(e: React.ChangeEvent<HTMLInputElement>) {
    return e.currentTarget.value;
  }
}
