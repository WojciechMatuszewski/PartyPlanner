import { GreenSpotifyButton } from '@components/UI/SpotifyButton';
import css from '@emotion/css';
import { Party_PlaylistsConnectionNode } from '@generated/graphql';
import { trapEvent } from '@shared/functionUtils';
import { DeepWithoutMaybe } from '@shared/graphqlUtils';
import { Avatar, Checkbox, List, Typography } from 'antd';
import { ifElse } from 'ramda';
import React from 'react';

const ListItemStyles = css`
  transition: transform 0.2s ease;
  padding-top: 0;
  padding-bottom: 0;
  height: 100%;
  display: flex;
  cursor: pointer;
  .posed-content-wrapper {
    flex: 1;
    max-width: 100%;
    min-width: 0;
  }
  &.emphasis,
  &:hover {
    background: #e6f7ff;
  }
  height: 72px;
  .ant-list-item-meta {
    max-width: 100%;
    min-width: 0;
  }

  .ant-avatar {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }

  .ant-list-item-meta-content {
    white-space: nowrap;
    min-width: 0;
    & > * {
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  .ant-list-item-action {
    align-items: center;
    display: flex;
  }

  .ant-list-item-meta-description {
    line-height: 1;
  }

  @media screen and (max-width: 680px) {
    padding-left: 12px !important;
    padding-right: 12px !important;
  }
`;

const SpotifyButtonStyles = css`
  svg {
    width: auto !important;
    height: auto !important;
  }
`;

interface Props {
  playlist: DeepWithoutMaybe<Party_PlaylistsConnectionNode>;
  isSelected: boolean;
  onSpotifyButtonClick: VoidFunction;
  onSelect: VoidFunction;
  onDeselect: VoidFunction;
}

export default function ModalPlaylistItem({
  onSpotifyButtonClick,
  isSelected,
  onSelect,
  playlist,
  onDeselect
}: Props) {
  const handleChange = () => ifElse(Boolean, onSelect, onDeselect)(!isSelected);

  const { imageUrl, name, user } = playlist;
  return (
    <List.Item
      onClick={handleChange}
      css={[ListItemStyles]}
      className={isSelected ? 'emphasis' : undefined}
      actions={[
        <GreenSpotifyButton
          shape="round"
          size="small"
          css={[SpotifyButtonStyles]}
          key={1}
          onClick={trapEvent(onSpotifyButtonClick)}
        >
          View
        </GreenSpotifyButton>,
        <Checkbox
          checked={isSelected}
          key={2}
          onChange={trapEvent(handleChange)}
        />
      ]}
    >
      <List.Item.Meta
        avatar={
          <Avatar
            style={{ width: 48, height: 48 }}
            src={imageUrl}
            shape="square"
          />
        }
        description={
          <Typography.Text ellipsis={true}>
            By: {user.firstName} {user.lastName}
          </Typography.Text>
        }
        title={name}
      />
    </List.Item>
  );
}
