import React from 'react';
import { Tabs, Icon } from 'antd';
import PartyCartAddItem from './PartyCartAddItem';
import PartyCartPending from './PartyCartPending';
import css from '@emotion/css';

type TabsKeys = 'PENDING' | 'ACCEPTED' | 'REJECTED';

const TabsStyles = css`
  .ant-tabs-top-bar {
    margin-bottom: 0;
  }
`;

interface Props {
  cartId: string;
}
export default function PartyCartTabs({ cartId }: Props) {
  const [activeTab, setActiveTab] = React.useState<TabsKeys>('PENDING');

  return (
    <Tabs
      css={[TabsStyles]}
      tabBarExtraContent={<PartyCartAddItem cartId={cartId} />}
      activeKey={activeTab}
      onChange={setActiveTab}
    >
      <Tabs.TabPane
        key="PENDING"
        tab={
          <span>
            <Icon type="loading-3-quarters" />
            Pending
          </span>
        }
      >
        <PartyCartPending cartId={cartId} />
      </Tabs.TabPane>
      <Tabs.TabPane
        key="ACCEPTED"
        tab={
          <span>
            <Icon type="check" />
            Accepted
          </span>
        }
      >
        works
      </Tabs.TabPane>
      <Tabs.TabPane
        key="REJECTED"
        tab={
          <span>
            <Icon type="stop" />
            Rejected
          </span>
        }
      >
        works
      </Tabs.TabPane>
    </Tabs>
  );
}
