import React from 'react';
import { debounce } from 'lodash';
import { compose } from 'ramda';
import Input, { SearchProps } from 'antd/lib/input';
import { Omit } from 'ts-essentials';

type Props = Omit<SearchProps, 'onChange'> &
  typeof defaultProps & { onChange: (value: string) => any };

const defaultProps = { debounceOnChange: false as boolean };

export default function AntdSearch(props: Props) {
  const { onChange, debounceOnChange, ...restOfProps } = props;

  const debouncedOnChangeRef = React.useRef<Props['onChange']>(
    debounce(onChange, 300)
  );

  return (
    <Input.Search
      onChange={compose(
        debounceOnChange ? debouncedOnChangeRef.current : props.onChange,
        onChangeTransformFunction
      )}
      {...restOfProps}
    />
  );

  function onChangeTransformFunction(e: React.ChangeEvent<HTMLInputElement>) {
    return e.currentTarget.value;
  }
}

AntdSearch.defaultProps = defaultProps;
