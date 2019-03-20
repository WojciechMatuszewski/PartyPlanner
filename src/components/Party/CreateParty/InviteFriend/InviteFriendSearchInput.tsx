import React from 'react';
import { Form, Input } from 'antd';
import { useRxjsTypeahead } from '@hooks/useRxjsTypeahead';

interface Props {
  typeaheadCallback: () => Promise<any>;
  onChangeHandler: (value: string) => void;
  fetchQueryUpdater: () => void;
  inputDisabled: boolean;
  inputLoading: boolean;
}

const InviteFriendSearchInput: React.FC<Props> = props => {
  const [typeaheadCallbackCalled, setTypeaheadCallbackCalled] = React.useState<
    boolean
  >();

  const { inputProps } = useRxjsTypeahead(
    async () => {
      props.typeaheadCallback();
      setTypeaheadCallbackCalled(true);
    },
    () => []
  );

  React.useEffect(() => {
    async function handleQueryRefetch() {
      await props.fetchQueryUpdater();
      setTypeaheadCallbackCalled(false);
    }
    if (inputProps.value.trim().length === 0 && typeaheadCallbackCalled) {
      handleQueryRefetch();
    }
  }, [inputProps.value, typeaheadCallbackCalled]);

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    props.onChangeHandler(e.currentTarget.value);
    inputProps.onChange(e.currentTarget.value);
  }

  return (
    <Form.Item
      hasFeedback={true}
      validateStatus={props.inputLoading ? 'validating' : undefined}
    >
      <Input.Search
        data-testid="InviteFriendSearchInput"
        disabled={props.inputDisabled}
        onChange={handleOnChange}
        value={inputProps.value}
        placeholder={'Search through your friends'}
      />
    </Form.Item>
  );
};

export default InviteFriendSearchInput;
