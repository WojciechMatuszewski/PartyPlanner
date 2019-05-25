import React from 'react';
import {
  JoinPartySection,
  JoinPartyImageWrapper,
  JoinPartyInnerWrapper
} from './styles';
import { Typography, Button } from 'antd';

interface Props {
  onGoBackClick: VoidFunction;
}
const JoinPartyCannotJoin: React.FC<Props> = props => {
  return (
    <JoinPartySection style={{ textAlign: 'left' }}>
      <JoinPartyInnerWrapper>
        <JoinPartyImageWrapper>
          <img src="./static/lost.svg" />
        </JoinPartyImageWrapper>
        <div>
          <Typography.Title
            style={{
              color: '#1890ff',
              marginBottom: 0,
              marginTop: 0,
              textAlign: 'left'
            }}
            level={1}
          >
            Hey!
          </Typography.Title>
          <Typography.Paragraph style={{ fontSize: 18 }}>
            Your invitation link is invalid or you already are in that party.
          </Typography.Paragraph>
          <Button size="large" onClick={props.onGoBackClick}>
            Go back
          </Button>
        </div>
      </JoinPartyInnerWrapper>
    </JoinPartySection>
  );
};

export default JoinPartyCannotJoin;
