import React from 'react';
import { debounce } from 'lodash';
import Input, { SearchProps } from 'antd/lib/input';
import { Omit } from 'ts-essentials';
import { Form } from 'antd';
import css from '@emotion/css';
import { compose, nAry } from 'ramda';
import { callAll } from '@shared/functionUtils';

const FormStyles = css`
  .ant-form-item-control {
    line-height: 1.5;
  }
`;

type Props = Omit<SearchProps, 'onChange'> &
  typeof defaultProps & { onChange: (value: string) => any };

const defaultProps = {
  debounceOnChange: false as boolean,
  loading: false as boolean
};

let lastInputValueBeforeUnmount: string | undefined = undefined;

export default function AntdSearch(props: Props) {
  const {
    onChange,
    debounceOnChange,
    loading,
    onSearch,
    style,
    ...restOfProps
  } = props;

  const internalInputValue = React.useRef<string | undefined>(undefined);
  const debouncedOnChangeRef = React.useRef<Props['onChange']>(
    debounce(onChange, 300)
  );

  function setInternalInputValue(value: string) {
    internalInputValue.current = value;
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const controlledOnChange = debounceOnChange
      ? debouncedOnChangeRef.current
      : onChange;
    compose(
      callAll(controlledOnChange, setInternalInputValue),
      onChangeTransformFunction
    )(event);
  }

  function handleSearch(value: string) {
    const controlledOnSearch = onSearch ? onSearch : onChange;
    return callAll(controlledOnSearch, setInternalInputValue)(value);
  }

  React.useEffect(() => () =>
    void (lastInputValueBeforeUnmount = internalInputValue.current)
  );

  return (
    <Form css={[FormStyles]} style={style}>
      <Form.Item
        style={{ marginBottom: 0 }}
        validateStatus={loading ? 'validating' : undefined}
        hasFeedback={true}
      >
        <Input.Search
          defaultValue={lastInputValueBeforeUnmount}
          onChange={handleChange}
          onSearch={nAry(1, handleSearch)}
          {...restOfProps}
        />
      </Form.Item>
    </Form>
  );

  function onChangeTransformFunction(e: React.ChangeEvent<HTMLInputElement>) {
    return e.currentTarget.value;
  }
}

AntdSearch.defaultProps = defaultProps;
