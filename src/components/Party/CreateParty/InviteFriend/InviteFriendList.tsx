import { PaginateUsersQueryEdges, Maybe } from '@generated/graphql';
import { ListProps, ListGridType } from 'antd/lib/list';
import { List } from 'antd';
import css from '@emotion/css';
import React from 'react';

const gridOptions: ListGridType = {
  gutter: 16,
  xs: 1,
  sm: 1,
  md: 2,
  lg: 2,
  xl: 3,
  xxl: 3
};

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

interface BaseProps {
  listItems: Maybe<PaginateUsersQueryEdges>[];
  filterValue: string | undefined;
  shouldUseGrid: boolean;
  canShowLoadMore: boolean;
}

type Props = BaseProps & Omit<ListProps, 'dataSource'>;

const InviteFriendList: React.FC<Props> = props => {
  function includesNormalized(root: string) {
    return props.filterValue && props.filterValue.length > 0
      ? root.toLocaleLowerCase().includes(props.filterValue.toLocaleLowerCase())
      : true;
  }

  function filterListItems(listItems: Maybe<PaginateUsersQueryEdges>[]) {
    return listItems.filter(
      listItem =>
        includesNormalized(listItem!.node.firstName) ||
        includesNormalized(listItem!.node.lastName)
    );
  }

  let filteredListItems = filterListItems(props.listItems);

  return (
    <List
      css={css`
        .ant-list-item-meta-title {
          margin-bottom: 0 !important;
        }
      `}
      loading={props.loading}
      loadMore={
        props.canShowLoadMore && filteredListItems.length > 0
          ? props.loadMore
          : null
      }
      grid={props.shouldUseGrid ? gridOptions : undefined}
      dataSource={filteredListItems}
      renderItem={props.renderItem}
    />
  );
};

export default InviteFriendList;
