import React from 'react';
import { Row, Col, Typography, Icon } from 'antd';
import { PartyFragmentAuthor } from '@generated/graphql';
import UserAvatar from '@components/UserDefaultAvatar';
import styled from '@emotion/styled';
import { FlexBoxVerticallyCenteredStyles } from '@shared/styles';
import { getCorrectTextFromPartyDates } from '@shared/graphqlUtils';
import { compose, map, addIndex } from 'ramda';
interface Props {
  description: string;
  title: string;
  author: PartyFragmentAuthor;
  partyStart: any;
  partyEnd: any;
  placeName: string;
}

const UserAvatarWrapper = styled.div`
  display: flex;
  align-items: center;

  .ant-avatar {
    margin-right: 12px;
  }
  .creator-info {
    span:nth-of-type(2) {
      margin-left: 6px;
    }
  }
  @media screen and (max-width: 992px) {
    margin-bottom: 12px;
  }
`;

const BasicInfoList = styled.ul`
  padding-left: 0;
  .anticon {
    margin-right: 12px;
    font-size: 18px;
  }
  li {
    margin-bottom: 6px;
    list-style-type: none;
    ${FlexBoxVerticallyCenteredStyles};
  }
`;

const PartyDashboardBasicInfo: React.FC<Props> = props => {
  const dateString = getCorrectTextFromPartyDates(
    props.partyStart,
    props.partyEnd
  );

  const parsePlaceName = compose(
    // ok so typescript and ramda strikes again
    // tsc shows errors, vsCode does not  👍
    // @ts-ignore
    addIndex<string>(map)(assignCorrectIconToPlaceNameFragment),
    splitPlaceName
  );

  return (
    <Row gutter={24} className="dashboard-content-item">
      <Col sm={24} lg={16}>
        <Typography.Title level={3}>Description</Typography.Title>
        <Typography.Paragraph
          ellipsis={{ rows: 4, expandable: true }}
          style={{ wordBreak: 'break-all' }}
          type={props.description ? undefined : 'secondary'}
        >
          {props.description || 'No description provided'}
        </Typography.Paragraph>
        <UserAvatarWrapper>
          <UserAvatar userData={props.author} />
          <div className="creator-info">
            <span>{props.author.firstName}</span>
            <span>{props.author.lastName}</span>
          </div>
        </UserAvatarWrapper>
      </Col>
      <Col sm={24} lg={8} style={{ paddingLeft: 24, paddingRight: 24 }}>
        <Typography.Title level={3}>Date and time</Typography.Title>
        <BasicInfoList>
          <li>
            <Icon type="calendar" />
            {dateString}
          </li>
        </BasicInfoList>
        <Typography.Title level={3}>Location</Typography.Title>
        <BasicInfoList>
          {parsePlaceName(props.placeName).map(
            ({ fragment, iconName }: any, index: number) => (
              <li key={index}>
                <Icon type={iconName} />
                {fragment}
              </li>
            )
          )}
        </BasicInfoList>
      </Col>
    </Row>
  );

  function splitPlaceName(placeName: string) {
    const arr = placeName.split(',');
    if (arr.length < 4) return arr;
    const lastTwo = arr.slice(arr.length - 2).join();
    return [...arr.slice(0, arr.length - 2), lastTwo];
  }
  function assignCorrectIconToPlaceNameFragment(
    placeNameFragment: string,
    i: number
  ) {
    return {
      fragment: placeNameFragment,
      iconName: i == 0 ? 'home' : i == 1 ? 'tag' : 'flag'
    };
  }
};

export default PartyDashboardBasicInfo;
