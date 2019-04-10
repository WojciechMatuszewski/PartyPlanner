import React from 'react';
import UserAvatar, { UserAvatarData } from '@components/UserDefaultAvatar';
import css from '@emotion/css';
import styled from '@emotion/styled';

interface Props {
  userAvatarsData: UserAvatarData[];
}

const ChatsListChatAvatarBase = styled.div`
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 50%;
  display: inline-grid;
  grid-template-columns: ${({ numOfItems }: { numOfItems: number }) =>
    numOfItems === 1 ? '1fr' : '1fr 1fr'};
  grid-gap: ${({ numOfItems }: { numOfItems: number }) =>
    numOfItems === 1 ? '0' : '1px'};
  grid-template-rows: ${({ numOfItems }: { numOfItems: number }) =>
    numOfItems < 3 ? '1fr' : '1fr 1fr'};
`;

const BaseSliceStyles = css`
  overflow: hidden;
  .ant-avatar {
    border-radius: 0;
  }
`;

const LeftSlice = styled.div`
  ${BaseSliceStyles};
  grid-row-start: 1;
  grid-row-end: ${({ numOfItems }: { numOfItems: number }) =>
    numOfItems < 3 ? '2' : '3'};
  img {
    margin-left: ${({ numOfItems }: { numOfItems: number }) =>
      numOfItems === 2 ? '-12px' : numOfItems === 3 ? '-8px' : '0'};
  }
`;

const OtherSlice = styled.div`
  ${BaseSliceStyles};
  img {
    margin-left: ${({ numOfItems }: { numOfItems: number }) =>
      numOfItems === 1 ? '-12px' : 0};
  }
`;

const ChatsListItemAvatarList: React.FC<Props> = ({ userAvatarsData }) => {
  const [firstUser, ...restOfUsers] = userAvatarsData;

  return (
    <ChatsListChatAvatarBase numOfItems={userAvatarsData.length}>
      <LeftSlice numOfItems={userAvatarsData.length}>
        <UserAvatar userData={firstUser} size={50} />
      </LeftSlice>
      {restOfUsers.map((userAvatarData, index) => (
        <OtherSlice key={index} numOfItems={restOfUsers.length}>
          <UserAvatar
            userData={userAvatarData}
            size={restOfUsers.length === 1 ? 50 : 25}
          />
        </OtherSlice>
      ))}
    </ChatsListChatAvatarBase>
  );
};

export default ChatsListItemAvatarList;
