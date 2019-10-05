import css from '@emotion/css';
import styled from '@emotion/styled';
import useMedia from '@hooks/useMedia';
import usePrevious from '@hooks/usePrevious';
import { Button, Drawer, Icon, Typography } from 'antd';
import { isEqual } from 'lodash';
import { compose, head, not, split } from 'ramda';
import React from 'react';

import DiscoverFiltersArtist from './DiscoverFiltersArtist';
import DiscoverFiltersGenre from './DiscoverFiltersGenre';
import { Filters, FilterValue } from './shared';

const DrawerButtons = styled.div`
  display: flex;
  flex: 1;
  button {
    flex: 1;
  }
  button:first-of-type {
    margin-right: 24px;
  }
`;

const DrawerStyles = css`
  .ant-drawer-wrapper-body {
    display: flex;
    flex-direction: column;
  }
  .ant-drawer-body {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  button {
    margin-top: auto;
  }
`;

type Props = {
  onFiltersChange: (filters: Filters) => void;
};

function DiscoverFilters(props: Props) {
  const [filters, setFilters] = React.useState<Filters>({
    artist: undefined,
    genre: undefined
  });
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const prevOpenState = usePrevious(drawerOpen);
  const prevFilters = usePrevious(filters, drawerOpen);
  const isOnMobile = useMedia('(max-width:630px)');

  function setGenre(genreIdString: FilterValue) {
    setFilters(prev => ({ ...prev, genre: genreIdString }));
  }

  function setArtist(artistIdString: FilterValue) {
    setFilters(prev => ({ ...prev, artist: artistIdString }));
  }

  function isClosingDrawer() {
    return prevOpenState == true && drawerOpen == false;
  }

  function areFiltersTheSame() {
    return isEqual(filters, prevFilters);
  }

  function hasFiltersApplied() {
    return Object.values(filters).some(Boolean);
  }

  function pluckValueFromCombinedFilterValue(valueIdString: string) {
    return compose(
      head,
      split('_')
    )(valueIdString);
  }

  function notifyAboutFilters() {
    props.onFiltersChange({
      artist: filters.artist
        ? pluckValueFromCombinedFilterValue(filters.artist)
        : undefined,
      genre: filters.genre
        ? pluckValueFromCombinedFilterValue(filters.genre)
        : undefined
    });
  }

  const toggleDrawer = () => setDrawerOpen(not);

  function onClearFilters() {
    setGenre(undefined);
    setArtist(undefined);
    setDrawerOpen(false);
  }

  React.useEffect(() => {
    if (isClosingDrawer() && !areFiltersTheSame()) notifyAboutFilters();
  }, [drawerOpen]);

  return (
    <React.Fragment>
      <Button
        type={hasFiltersApplied() ? 'primary' : 'default'}
        style={{ marginLeft: 8 }}
        onClick={toggleDrawer}
      >
        <Icon type="filter" />
        Filters
      </Button>
      <Drawer
        css={DrawerStyles}
        onClose={toggleDrawer}
        mask={true}
        maskClosable={true}
        closable={true}
        visible={drawerOpen}
        width={isOnMobile ? '100% ' : 500}
        title={
          <Typography.Title level={3} style={{ marginBottom: 0 }}>
            Filters
          </Typography.Title>
        }
      >
        <DiscoverFiltersArtist
          onChange={setArtist}
          currentArtist={filters.artist}
        />
        <DiscoverFiltersGenre
          onChange={setGenre}
          currentGenre={filters.genre}
        />
        <DrawerButtons>
          <Button
            type="primary"
            disabled={areFiltersTheSame()}
            onClick={toggleDrawer}
          >
            Save
          </Button>
          <Button
            type="danger"
            disabled={!hasFiltersApplied()}
            onClick={onClearFilters}
          >
            Clear all
          </Button>
        </DrawerButtons>
      </Drawer>
    </React.Fragment>
  );
}

export default DiscoverFilters;
