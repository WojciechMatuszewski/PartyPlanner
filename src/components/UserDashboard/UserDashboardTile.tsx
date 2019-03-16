import React from 'react';
import posed from 'react-pose';
import styled from '@emotion/styled';
import { Icon, Typography } from 'antd';
import { FlexBoxVerticallyCenteredStyles } from '@shared/styles';

const PosedUserDashboardTileWrapper = styled(
  posed.div({
    enter: { y: 0, opacity: 1, delay: ({ i }: { i: number }) => i * 100 },
    exit: { y: 40, opacity: 0 },
    hoverable: true,
    init: { scale: 1 },
    hover: { scale: 1.05 }
  })
)`
  padding: 20px;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  &:hover {
    cursor: pointer;
  }
`;

const UserDashboardTileHeadingWrapper = styled.div`
  ${FlexBoxVerticallyCenteredStyles};
  h1 {
    margin: 0;
    margin-left: 12px;
  }
`;

interface TitleProps {
  iconType: string;
  text: string;
}

const UserDashboardTileTitle: React.FC<TitleProps> = props => {
  return (
    <UserDashboardTileHeadingWrapper>
      <Icon type={props.iconType} style={{ fontSize: 30 }} />
      <Typography.Title>{props.text}</Typography.Title>
    </UserDashboardTileHeadingWrapper>
  );
};

interface TextProps {
  text: string;
}
const UserDashboardTileText: React.FC<TextProps> = props => (
  <Typography.Text type="secondary">{props.text}</Typography.Text>
);

class UserDashboardTile extends React.Component<{
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  index: number;
}> {
  public static Title = (props: TitleProps) => (
    <UserDashboardTileTitle {...props} />
  );
  public static Text = (props: TextProps) => (
    <UserDashboardTileText {...props} />
  );
  public render() {
    const { children, onClick } = this.props;
    return (
      <PosedUserDashboardTileWrapper
        onClick={onClick}
        initialPose="exit"
        pose="enter"
        i={this.props.index}
      >
        {children}
      </PosedUserDashboardTileWrapper>
    );
  }
}

export default UserDashboardTile;
