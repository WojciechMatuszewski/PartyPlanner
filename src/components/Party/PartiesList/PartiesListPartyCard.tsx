import React from 'react';
import styled from '@emotion/styled';
import posed from 'react-pose';
import { Typography, Divider, Icon } from 'antd';
import { FlexBoxFullCenteredStyles } from '@shared/styles';
import useMedia from '@hooks/useMedia';
import { PaginatePartiesQueryEdges } from '@generated/graphql';
import { getCorrectTextFromPartyDates } from '@shared/graphqlUtils';

const PartiesCardWrapper = styled(
  posed.div({
    hoverable: true
  })
)`
  &:hover {
    cursor: pointer;
  }
  height: 300px;
  max-height: 300px;
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
    init: { height: 93 },
    hover: {
      height: ({ shouldReactToHover }: { shouldReactToHover: boolean }) =>
        shouldReactToHover ? 'auto' : undefined,
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
  height: 93px;
  max-width: 100%;
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
    /* color: #595959; */
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

const PartyCardLocationWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  font-size: 14px;
  .anticon {
    margin-top: 3px;
  }
  margin-bottom: 14px;
`;

interface Props {
  party: PaginatePartiesQueryEdges;
  delayIndex: number;
}
const PartiesListPartyCard: React.FC<Props> = ({ party, delayIndex }) => {
  const shouldUseHover = useMedia('(min-width:992px)');
  const [mobileVisible, setMobileVisible] = React.useState<boolean>(false);

  const dateString = React.useMemo(
    () => getCorrectTextFromPartyDates(party.node.start, party.node.end),
    []
  );

  // handles mobile interaction (indicator click)
  const handleIndicatorClick = React.useCallback(() => {
    if (!shouldUseHover) {
      setMobileVisible(!mobileVisible);
    }
  }, [mobileVisible, shouldUseHover]);

  return (
    <PartiesCardWrapper initialPose="exit" pose="enter" delayIndex={delayIndex}>
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
          <Typography.Title level={4}>{party.node.title}</Typography.Title>
          <Typography.Paragraph style={{ margin: 0 }}>
            <Icon type="user" style={{ marginRight: 8 }} />
            {party.node.author.firstName} {party.node.author.lastName}
          </Typography.Paragraph>
          <Typography.Text>
            <Icon type="clock-circle" style={{ marginRight: 8 }} />
            {dateString}
          </Typography.Text>
          <PartiesCardMoreInfoItemWrapper>
            <Divider
              style={{ marginTop: 18, marginBottom: 14 }}
              type="horizontal"
              dashed={true}
            />
          </PartiesCardMoreInfoItemWrapper>
          <PartiesCardMoreInfoItemWrapper className="description">
            <Typography.Paragraph
              type="secondary"
              ellipsis={{ rows: 3, expandable: false }}
            >
              {party.node.description.trim().length > 0
                ? party.node.description
                : 'No description given'}
            </Typography.Paragraph>
          </PartiesCardMoreInfoItemWrapper>
          <PartiesCardMoreInfoItemWrapper>
            <PartyCardLocationWrapper>
              <Icon type="home" style={{ marginRight: 8 }} />
              {party.node.location.placeName}
            </PartyCardLocationWrapper>
          </PartiesCardMoreInfoItemWrapper>
          <PartiesCardMoreInfoItemWrapper>
            <a>Go to party dashboard</a>
          </PartiesCardMoreInfoItemWrapper>
        </PartiesCardInfoInnerWrapper>
      </PartiesCardInfoWrapper>
    </PartiesCardWrapper>
  );
};

export default PartiesListPartyCard;
