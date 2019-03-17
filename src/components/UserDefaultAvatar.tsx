import React from 'react';
import { Avatar } from 'antd';

interface Props {
  firstName: string;
  lastName: string;
}
const UserDefaultAvatar: React.FC<Props> = props => {
  return (
    <Avatar style={{ background: '#1890ff', color: 'white' }}>
      {props.firstName[0]}
      {props.lastName[0]}
    </Avatar>
  );
};

export default UserDefaultAvatar;
