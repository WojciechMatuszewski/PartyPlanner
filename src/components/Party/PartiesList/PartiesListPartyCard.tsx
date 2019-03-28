import React from 'react';
import styled from '@emotion/styled';
import posed from 'react-pose';
import { Typography, Divider, Icon } from 'antd';
import { FlexBoxFullCenteredStyles } from '@shared/styles';
import useMedia from '@hooks/useMedia';
import { PartyFragmentFragment } from '@generated/graphql';
import moment from 'moment';

const PartiesCardWrapper = styled(
  posed.div({
    hoverable: true
  })
)`
  &:hover {
    cursor: pointer;
  }
  height: 300px;
  background: white;
  border-radius: 3px;
  @media screen and (max-width: 680px) {
    border-radius: 0px;
  }
  position: relative;
`;

const PartiesCardImageWrapper = styled.div`
  position: absolute;
  padding: 12px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    max-height: 100%;
  }
`;

const PartiesCardImageBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 3px;
  @media screen and (max-width: 680px) {
    border-radius: 0px;
  }
`;

const PartiesCardInfoInnerWrapper = styled(
  posed.div({
    init: { height: 70 },
    hover: {
      height: ({ shouldReactToHover }: { shouldReactToHover: boolean }) =>
        shouldReactToHover ? 'auto' : 70,
      staggerChildren: 150
    },
    mobileVisible: {
      height: 'auto',
      staggerChildren: 150
    }
  })
)`
  position: relative;
  overflow: hidden;
  height: 70px;
  padding: 12px;
`;

const PartiesCardInfoWrapper = styled.div`
  position: absolute;
  width: 100%;
  background: white;
  bottom: 0;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  @media screen and (max-width: 680px) {
    border-radius: 0px;
  }

  &:hover {
    cursor: pointer;
  }
  h4 {
    margin: 0;
  }
`;

const PartiesCardStateIndicator = styled(
  posed.div({
    init: { rotate: 0 },
    hover: {
      rotate: ({ shouldReactToHover }: { shouldReactToHover: boolean }) =>
        shouldReactToHover ? 180 : 0
    },
    mobileVisible: {
      rotate: 180
    }
  })
)`
  position: absolute;
  right: 12px;
  top: -20px;
  z-index: 2;
  border-radius: 50%;
  background: #1890ff;
  width: 40px;
  height: 40px;
  ${FlexBoxFullCenteredStyles}
  color:white;
  font-size: 18px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`;

const PartiesCardMoreInfoItemWrapper = posed.div({
  hover: {
    opacity: 1
  },
  init: {
    opacity: 0
  },
  mobileVisible: {
    opacity: 1
  }
});

interface Props {
  party: PartyFragmentFragment;
}
const PartiesListPartyCard: React.FC<Props> = ({ party }) => {
  const shouldUseHover = useMedia('(min-width:992px)');

  const [mobileVisible, setMobileVisible] = React.useState<boolean>(false);

  // handles mobile interaction (indicator click)
  function handleIndicatorClick() {
    if (!shouldUseHover) {
      setMobileVisible(prevVisible => !prevVisible);
    }
  }

  return (
    <PartiesCardWrapper>
      <PartiesCardImageWrapper>
        <img src="../static/having-fun.svg" />
      </PartiesCardImageWrapper>
      <PartiesCardImageBackground />
      <PartiesCardInfoWrapper>
        <PartiesCardStateIndicator
          shouldReactToHover={shouldUseHover}
          onClick={handleIndicatorClick}
          pose={mobileVisible ? 'mobileVisible' : 'init'}
        >
          <Icon type="arrow-up" />
        </PartiesCardStateIndicator>
        <PartiesCardInfoInnerWrapper
          shouldReactToHover={shouldUseHover}
          pose={mobileVisible ? 'mobileVisible' : 'init'}
        >
          <Typography.Title level={4}>{party.title}</Typography.Title>
          <Typography.Text>
            {' '}
            {moment(party.start).format('DD MMM HH:mm')} to{' '}
            {moment(party.end).format('DD MMM HH:mm')}
          </Typography.Text>
          <PartiesCardMoreInfoItemWrapper>
            <Divider
              style={{ width: '60%', marginTop: 18, marginBottom: 18 }}
              type="horizontal"
              dashed={true}
            />
          </PartiesCardMoreInfoItemWrapper>
          <PartiesCardMoreInfoItemWrapper className="description">
            <Typography.Paragraph ellipsis={{ rows: 3, expandable: false }}>
              {party.description}
            </Typography.Paragraph>
          </PartiesCardMoreInfoItemWrapper>
          <PartiesCardMoreInfoItemWrapper>
            <div
              style={{
                display: 'flex',
                fontSize: 16,
                marginBottom: 12,
                alignItems: 'center'
              }}
            >
              <Icon type="home" style={{ marginRight: 8 }} />
              {party.location.placeName}
            </div>
          </PartiesCardMoreInfoItemWrapper>
          <PartiesCardMoreInfoItemWrapper>
            <a>See more</a>
          </PartiesCardMoreInfoItemWrapper>
        </PartiesCardInfoInnerWrapper>
      </PartiesCardInfoWrapper>
    </PartiesCardWrapper>
  );
};

export default PartiesListPartyCard;
