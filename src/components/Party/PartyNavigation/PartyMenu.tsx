import React from 'react';
import css from '@emotion/css';
import { Menu, Affix, Layout, Icon, Typography, Divider } from 'antd';
import SpotifyIcon from '@customIcons/spotify.svg';
import RCDrawer from 'rc-drawer';
import 'rc-drawer/dist/rc-drawer.css';
import useMedia from '@hooks/useMedia';

const MenuStyles = css`
  height: 100%;
  width: 100%;
  border: 0;
`;

const AffixStyles = css`
  display: flex;
  z-index: 10;
`;

const PartyMenu: React.FC = () => {
  const isOnMobile = useMedia('(max-width:1080px)');

  if (isOnMobile)
    return (
      <DrawerNavigation>
        <MenuContent />
      </DrawerNavigation>
    );
  else
    return (
      <SiderNavigation>
        <MenuContent />
      </SiderNavigation>
    );
};

function MenuContent() {
  return (
    <React.Fragment>
      <Typography.Title
        style={{ textAlign: 'center', marginTop: 12 }}
        level={4}
      >
        Navigation
      </Typography.Title>
      <Divider style={{ marginTop: 12, marginBottom: 0 }} />
      <Menu css={[MenuStyles]} mode="inline">
        <Menu.Item>
          <div>
            <Icon type="info-circle" />
            <span>About</span>
          </div>
        </Menu.Item>
        <Menu.SubMenu
          key="sub1"
          title={
            <div>
              <Icon component={SpotifyIcon} />
              <span>Music</span>
            </div>
          }
        >
          <Menu.Item key="1">Discover</Menu.Item>
          <Menu.Item key="2">Browse</Menu.Item>
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
