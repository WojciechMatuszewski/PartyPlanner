import React from 'react';
import 'react-testing-library/cleanup-after-each';
import { render, fireEvent } from 'react-testing-library';
import InviteFriendLoadMoreButton from '@components/Party/CreateParty/InviteFriend/InviteFriendLoadMoreButton';

describe('InviteFriendLoadMoreButton', () => {
  it('Calls a function on button click', () => {
    const onLoadMore = jest.fn(() => {});
    const { getByTestId } = render(
      <InviteFriendLoadMoreButton onLoadMoreClick={onLoadMore} />
    );
    const button = getByTestId('InviteFriendLoadMoreButton');
    fireEvent.click(button);
    expect(onLoadMore).toHaveBeenCalled();
    expect(onLoadMore).toHaveBeenCalledTimes(1);
  });
});
