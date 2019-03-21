import React from 'react';
import { Avatar } from 'antd';
import { AvatarProps } from 'antd/lib/avatar';

interface Props {
  firstName: string;
  lastName: string;
}
const UserDefaultAvatar: React.FC<Props & AvatarProps> = ({
  firstName,
  lastName,
  ...rest
}) => {
  return (
    <Avatar style={{ background: '#1890ff', color: 'white' }} {...rest}>
      {firstName[0]}
      {lastName[0]}
    </Avatar>
  );
};

export default UserDefaultAvatar;
