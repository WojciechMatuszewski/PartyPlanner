import { PaginateUsersQueryEdges, Maybe } from '@generated/graphql';
import { ListProps, ListGridType } from 'antd/lib/list';
import { List, Empty, Typography } from 'antd';
import css from '@emotion/css';
import React from 'react';
import { useFuzzySearch } from '@hooks/useFuzzySearch';

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

const ListStyles = css`
  .ant-list-item-meta-title {
    margin-bottom: 0 !important;
  }
`;

type Props = BaseProps & Omit<ListProps, 'dataSource'>;

const InviteFriendList: React.FC<Props> = props => {
  const filteredListItems = useFuzzySearch<PaginateUsersQueryEdges>(
    props.filterValue || '',
    props.listItems as PaginateUsersQueryEdges[],
    {
      keys: ['node.firstName', 'node.lastName'] as any,
      shouldSort: true,
      tokenize: true
    }
  );

  const isFilterValueEmpty =
    props.filterValue == undefined || props.filterValue.trim().length <= 0;

  const ListEmptyText = isFilterValueEmpty ? (
    <ListEmptyNoData />
  ) : (
    <ListEmptyFilter filterValue={props.filterValue} />
  );

  return (
    <List
      locale={{ emptyText: ListEmptyText as any }}
      css={[ListStyles]}
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

const ListEmptyNoData: React.FC = () => (
  <Empty
    image="../static/person.png"
    description="Your friends list is empty"
  />
);

const ListEmptyFilter: React.FC<{ filterValue: string | undefined }> = ({
  filterValue
}) => (
  <Empty
    description={
      <span>
        Could not find anyone on your friends list who's first name or last name
        contains
        <br />
        <Typography.Text type="warning">{filterValue}</Typography.Text>
      </span>
    }
  />
);

export default InviteFriendList;
