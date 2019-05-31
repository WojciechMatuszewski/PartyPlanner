import React from 'react';
import css from '@emotion/css';
import { Menu, Affix, Layout, Icon, Typography } from 'antd';
import SpotifyIcon from '@customIcons/spotify.svg';
import RCDrawer from 'rc-drawer';
import 'rc-drawer/dist/rc-drawer.css';
import useMedia from '@hooks/useMedia';
import Link from 'next/link';

const MenuStyles = css`
  height: 100%;
  width: 100%;
  border: 0;
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
  const isOnMobile = useMedia('(max-width:1080px)');

  if (isOnMobile)
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
      <Menu css={[MenuStyles]} mode="inline" selectedKeys={[props.routerPath]}>
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
          <Menu.Item key="/party-music-discover">
            <Link
              href={`/party-music-discover?id=${props.partyId}`}
              as={`/party/${props.partyId}/music/discover`}
            >
              <a>Discover</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="/party-music-browse">
            <Link
              href={`/party-music-browse?id=${props.partyId}`}
              as={`/party/${props.partyId}/music/browse`}
            >
              <a>Browse</a>
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
    <RCDrawer width={200} style={{ height: '100vh' }} get>
      {children}
    </RCDrawer>
  );
}

export default PartyMenu;
