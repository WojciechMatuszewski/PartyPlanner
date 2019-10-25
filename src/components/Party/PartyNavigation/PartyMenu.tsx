import React from 'react';
import css from '@emotion/css';
import { Menu, Affix, Layout, Icon, Typography } from 'antd';
import SpotifyIcon from '@customIcons/spotify.svg';
import RCDrawer from 'rc-drawer';
import 'rc-drawer/dist/rc-drawer.css';
import useMedia from '@hooks/useMedia';
import Link from 'next/link';

const MenuStyles = css`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid transparent;
`;

const AffixStyles = css`
  display: flex;
  z-index: 10;
`;

interface Props {
  partyId: string;
  routerPath: string;
}

const PartyMenu: React.FC<Props> = (props: Props) => {
  const shouldCollapse = useMedia('(max-width:1080px)');

  if (shouldCollapse)
    return (
      <DrawerNavigation>
        <MenuContent {...props} />
      </DrawerNavigation>
    );
  else
    return (
      <SiderNavigation>
        <MenuContent {...props} />
      </SiderNavigation>
    );
};

function MenuContent(props: Props) {
  return (
    <React.Fragment>
      <Typography.Title
        style={{
          textAlign: 'center',
          margin: 0,
          padding: '12px 24px',
          borderBottom: '1px solid #e8e8e8'
        }}
        level={4}
      >
        Navigation
      </Typography.Title>
      <Menu
        css={[MenuStyles]}
        mode="inline"
        defaultOpenKeys={
          props.routerPath.includes('party-music') ? ['party-music'] : []
        }
        selectedKeys={[props.routerPath]}
      >
        <Menu.Item key="/party-dashboard">
          <Link
            href={`/party-dashboard?id=${props.partyId}`}
            as={`/party/${props.partyId}`}
          >
            <a>
              <Icon type="info-circle" />
              <span>About</span>
            </a>
          </Link>
        </Menu.Item>
        <Menu.SubMenu
          key="party-music"
          title={
            <div>
              <Icon component={SpotifyIcon} />
              <span>Music</span>
            </div>
          }
        >
          <Menu.Item key="/party-music-top">
            <Link
              href={`/party-music-top?id=${props.partyId}`}
              as={`/party/${props.partyId}/music/top`}
            >
              <a>Your Top</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="/party-music-discover">
            <Link
              href={`/party-music-discover?id=${props.partyId}`}
              as={`/party/${props.partyId}/music/discover`}
            >
              <a>Search on Spotify</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="/party-music-saved-tracks">
            <Link
              href={`/party-music-saved-tracks?id=${props.partyId}`}
              as={`/party/${props.partyId}/music/tracks`}
            >
              <a>Saved Tracks</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="/party-music-playlists">
            <Link
              href={`/party-music-playlists?id=${props.partyId}`}
              as={`/party/${props.partyId}/music/playlists`}
            >
              <a>Playlists</a>
            </Link>
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </React.Fragment>
  );
}

function SiderNavigation({ children }: { children: React.ReactNode }) {
  return (
    <Affix css={[AffixStyles]}>
      <Layout.Sider
        title="Navigation"
        theme="light"
        width={220}
        collapsible={false}
        style={{ height: '100%', borderRight: '1px solid #e8e8e8' }}
      >
        {children}
      </Layout.Sider>
    </Affix>
  );
}

function DrawerNavigation({ children }: { children: React.ReactNode }) {
  return (
    <RCDrawer width={200} style={{ height: '100vh', zIndex: 10 }}>
      {children}
    </RCDrawer>
  );
}

export default PartyMenu;
