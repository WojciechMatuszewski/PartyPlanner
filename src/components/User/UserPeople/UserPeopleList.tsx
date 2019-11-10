import UserPeoplePerson from './UserPeoplePerson';
import { useUserFriends } from './UserPeopleProvider';

import css from '@emotion/css';
import { User_PeopleConnectionEdges } from '@generated/graphql';
import { DeepWithoutMaybe } from '@shared/graphqlUtils';
import { List, Button } from 'antd';
import React from 'react';
import { AutoSizer, List as VList, WindowScroller } from 'react-virtualized';

interface Props {
  users: DeepWithoutMaybe<User_PeopleConnectionEdges[]>;
  loadingMore: boolean;
  canLoadMore: boolean;
  loading: boolean;
}

const ListStyles = css`
  .ant-spin-container.ant-spin-blur > div:first-of-type {
    display: none;
  }
  flex: 1;
  //   background: white;
  //   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  //   margin-top: 12px;
  //   h4 {
  //     margin-bottom: 0;
  //   }
  //   .ant-list-item-meta {
  //     align-items: center;
  //   }
`;

const LoadMoreButtonStyles = css`
  display: block;
  margin: 0 auto;
  margin-top: 12px;
  @media screen and (max-width: 530px) {
    margin-right: auto;
    margin-left: 12px;
  }
`;

export default function UserPeopleList({
  users,
  loadingMore,
  loading,
  canLoadMore
}: Props) {
  const { pending, current } = useUserFriends();

  function isPendingInvite(userId: string) {
    return pending.includes(userId);
  }

  function isFriend(userId: string) {
    return current.includes(userId);
  }

  return (
    <WindowScroller>
      {({ isScrolling, onChildScroll, scrollTop, height }) => (
        <React.Fragment>
          <List css={[ListStyles]} renderItem={undefined} loading={loading}>
            <AutoSizer disableHeight={true}>
              {({ width }) => (
                <VList
                  autoHeight={true}
                  isScrolling={isScrolling}
                  onScroll={onChildScroll}
                  height={height}
                  rowCount={users.length}
                  overscanRowCount={15}
                  rowHeight={72}
                  width={width}
                  scrollTop={scrollTop}
                  rowRenderer={({ index, style }) => {
                    const user = users[index];
                    return (
                      <UserPeoplePerson
                        key={user.node.id}
                        isPending={isPendingInvite(user.node.id)}
                        isFriend={isFriend(user.node.id)}
                        style={style}
                        user={user}
                      />
                    );
                  }}
                />
              )}
            </AutoSizer>
          </List>
          {canLoadMore && (
            <Button css={[LoadMoreButtonStyles]} loading={loadingMore}>
              Load More
            </Button>
          )}
        </React.Fragment>
      )}
    </WindowScroller>
  );
}
