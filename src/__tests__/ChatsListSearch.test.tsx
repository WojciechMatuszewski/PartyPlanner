import React from 'react';
import 'react-testing-library/cleanup-after-each';
import { render, fireEvent } from 'react-testing-library';
import ChatsListSearch from '@components/Chats/ChatsList/ChatsListSearch';
jest.unmock('lodash');
// require the actual module so that we can mock exports on the module
const lodash = require.requireActual('lodash');

describe('ChatsListSearch', () => {
  it('Correctly calls onChange', () => {
    lodash.debounce = jest.fn(fn => fn);
    const onChange = jest.fn();
    const { getByTestId } = render(<ChatsListSearch onChange={onChange} />);
    const input = getByTestId('chatsMenuTypeahead');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(onChange).toBeCalled();
  });
});
