import React from 'react';
import { debounce } from 'lodash';
import Input, { SearchProps } from 'antd/lib/input';
import { Omit } from 'ts-essentials';
import { Form } from 'antd';
import css from '@emotion/css';
import { compose, nAry } from 'ramda';

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

export default function AntdSearch(props: Props) {
  const {
    onChange,
    debounceOnChange,
    loading,
    onSearch,
    style,
    ...restOfProps
  } = props;

  const debouncedOnChangeRef = React.useRef<Props['onChange']>(
    debounce(onChange, 300)
  );

  return (
    <Form css={[FormStyles]} style={style}>
      <Form.Item
        style={{ marginBottom: 0 }}
        validateStatus={loading ? 'validating' : undefined}
        hasFeedback={true}
      >
        <Input.Search
          onChange={compose(
            debounceOnChange ? debouncedOnChangeRef.current : props.onChange,
            onChangeTransformFunction
          )}
          onSearch={nAry(1, onSearch ? onSearch : onChange)}
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
