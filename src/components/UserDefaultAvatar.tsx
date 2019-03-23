import React from 'react';
import { Avatar } from 'antd';
import { AvatarProps } from 'antd/lib/avatar';

interface UserDataObj {
  firstName?: string;
  lastName?: string;
  avatar?: string | null;
}

const UserAvatar: React.FC<{ userData: UserDataObj } & AvatarProps> = ({
  userData: { firstName, lastName, avatar },
  ...rest
}) => {
  return avatar ? (
    <Avatar src={avatar} />
  ) : (
    <Avatar style={{ background: '#1890ff', color: 'white' }} {...rest}>
      {firstName ? firstName[0] : ''}
      {lastName ? lastName[0] : ''}
    </Avatar>
  );
};

export default UserAvatar;
