import React from 'react';
import 'react-testing-library/cleanup-after-each';
import { PaginateUsersQueryEdges, UserStatus } from '@generated/graphql';
import { render, fireEvent } from 'react-testing-library';
import InviteFriendListItem from '@components/Party/CreateParty/InviteFriend/InviteFriendListItem';
import 'jest-dom/extend-expect';

const fakeUser: PaginateUsersQueryEdges = {
  node: {
    id: '1',
    avatar: null,
    firstName: 'Wojtek',
    lastName: 'Matuszewski',
    lastOnline: new Date(),
    status: UserStatus.Offline
  }
};

describe('InviteFriendListItem', () => {
  it('Correctly shows user data', () => {
    const { container, getByTestId } = render(
      <InviteFriendListItem
        onRemove={() => null}
        onInvite={() => null}
        personInvited={false}
        shouldUseGrid={false}
        edge={fakeUser}
      />
    );
    expect(
      container.querySelector('.ant-list-item-meta-title')
    ).toHaveTextContent(`${fakeUser.node.firstName} ${fakeUser.node.lastName}`);
    expect(getByTestId('InviteAction')).toBeInTheDocument();
    expect(getByTestId('InviteAction')).toHaveTextContent('Invite');
  });
  it('Correctly calls invite / remove methods', () => {
    const onInvite = jest.fn(() => {});
    const onRemove = jest.fn(() => {});
    const { getByTestId, rerender, queryByTestId } = render(
      <InviteFriendListItem
        onInvite={onInvite}
        onRemove={onRemove}
        personInvited={false}
        edge={fakeUser}
        shouldUseGrid={false}
      />
    );
    const inviteAction = getByTestId('InviteAction');
    expect(inviteAction).toBeInTheDocument();
    expect(queryByTestId('RemoveAction')).toBeNull();
    fireEvent.click(inviteAction);
    expect(onInvite).toHaveBeenCalled();
    expect(onInvite).toHaveBeenCalledWith(fakeUser.node.id);
    rerender(
      <InviteFriendListItem
        onInvite={onInvite}
        onRemove={onRemove}
        personInvited={true}
        edge={fakeUser}
        shouldUseGrid={false}
      />
    );
    expect(queryByTestId('InviteAction')).toBeNull();
    const removeAction = getByTestId('RemoveAction');
    fireEvent.click(removeAction);
    expect(onRemove).toHaveBeenCalled();
    expect(onRemove).toHaveBeenCalledWith(fakeUser.node.id);
  });
});
