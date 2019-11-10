import React from 'react';
import { useUserFriends } from '../UserPeopleProvider';
import { useUser } from '@components/User/UserProvider';
import Friend from './Friend';
import Pending from './Pending';
import NonFriend from './NonFriend';

interface Props {
  controlsUserId: string;
}
export default function UserPeopleControls({ controlsUserId }: Props) {
  const { current, pending } = useUserFriends();
  const { userId } = useUser();

  const foundPendingForThatUser = pending.find(
    ({ invitedUserId }) => invitedUserId == controlsUserId
  );

  if (current.includes(controlsUserId)) return <Friend />;

  if (foundPendingForThatUser)
    return <Pending pendingInvitationId={foundPendingForThatUser.id} />;

  return <NonFriend invitedById={userId} invitingUserId={controlsUserId} />;
}
