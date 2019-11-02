import styled from '@emotion/styled';
import { Icon, Statistic, Typography } from 'antd';
import React from 'react';

const TopHeader = styled.header`
  display: flex;
  border-bottom: 1px solid #e8e8e8;
  .img-wrapper {
    height: 300px;
    width: 60%;
    padding: 12px;
    background: rgba(24, 144, 255, 0.1);
    img {
      display: block;
      max-height: 100%;
      width: auto;
      margin: 0 auto;
    }
  }

  @media screen and (max-width: 992px) {
    flex-direction: column;
    .img-wrapper {
      width: 100%;
    }
  }
`;

const RightSideWrapper = styled.div`
  padding: 24px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export default function PartyCartTop() {
  return (
    <TopHeader>
      <div className="img-wrapper">
        <img src="/static/wallet.svg" />
      </div>
      <RightSideWrapper>
        <Typography.Title level={3}>Part Cart</Typography.Title>
        <Statistic
          prefix={<Icon type="dollar" />}
          title="Estimated Party Cost (PLN)"
          value={112893}
          precision={2}
        />
        <div>
          <Typography.Title level={3}>People</Typography.Title>
        </div>
      </RightSideWrapper>
    </TopHeader>
  );
}
