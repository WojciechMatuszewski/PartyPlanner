import UserPeoplePerson from './UserPeoplePerson';

import css from '@emotion/css';
import { User_PeopleConnectionEdges } from '@generated/graphql';
import { DeepWithoutMaybe } from '@shared/graphqlUtils';
import { Button, List } from 'antd';
import React from 'react';
import { AutoSizer, List as VList, WindowScroller } from 'react-virtualized';

interface Props {
  users: DeepWithoutMaybe<User_PeopleConnectionEdges[]>;
  loadingMore: boolean;
  canLoadMore: boolean;
  loading: boolean;
  onLoadMore: VoidFunction;
}

const ListStyles = css`
  .ant-spin-container.ant-spin-blur > div:first-of-type {
    display: none;
  }
  flex: 1;
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
  canLoadMore,
  onLoadMore
}: Props) {
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
            <Button
              css={[LoadMoreButtonStyles]}
              loading={loadingMore}
              onClick={onLoadMore}
            >
              Load More
            </Button>
          )}
        </React.Fragment>
      )}
    </WindowScroller>
  );
}
