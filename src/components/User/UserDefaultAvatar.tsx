import React from 'react';
import { Avatar } from 'antd';
import { AvatarProps } from 'antd/lib/avatar';

export interface UserAvatarData {
  firstName?: string;
  lastName?: string;
  avatar?: string | null;
}

const UserAvatar: React.FC<{ userData: UserAvatarData } & AvatarProps> = ({
  userData: { firstName, lastName, avatar },
  style,
  ...rest
}) => {
  return avatar ? (
    <Avatar src={avatar} {...rest} style={style} />
  ) : (
    <Avatar
      style={{ background: '#1890ff', color: 'white', ...style }}
      {...rest}
    >
      {firstName ? firstName[0] : ''}
      {lastName ? lastName[0] : ''}
    </Avatar>
  );
};

export default UserAvatar;
