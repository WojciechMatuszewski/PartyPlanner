import React from 'react';
import { PaginateChatsQueryMessages } from '@generated/graphql';
import { Typography } from 'antd';
import moment from 'moment';

interface Props {
  lastMessage: PaginateChatsQueryMessages;
  children: React.ReactNode;
}

const { Provider, Consumer } = React.createContext<Pick<Props, 'lastMessage'>>({
  lastMessage: {
    content: '',
    createdAt: 0,
    author: {
      firstName: '',
      lastName: ''
    }
  }
});

class ChatsListItemLastMessage extends React.Component<Props> {
  public static MessageTimestamp = () => (
    <Consumer>
      {({ lastMessage }) => {
        if (!lastMessage) return null;
        const parsedDate = moment(lastMessage.createdAt);
        const currentDate = moment(new Date());
        const diff = Math.abs(parsedDate.diff(currentDate, 'hours'));
        return (
          <Typography.Text type="secondary">
            {diff < 24
              ? parsedDate.format('HH:mm')
              : diff < 24 * 7
              ? parsedDate.format('ddd')
              : parsedDate.format('MMM Do')}
          </Typography.Text>
        );
      }}
    </Consumer>
  );

  public static MessageMain = () => (
    <Consumer>
      {({ lastMessage }) => {
        if (!lastMessage) return <Typography.Text>No messages</Typography.Text>;
        return (
          <Typography.Paragraph type="secondary" ellipsis={true}>
            {lastMessage.author.firstName}: {lastMessage.content}
          </Typography.Paragraph>
        );
      }}
    </Consumer>
  );
  public render() {
    return <Provider value={this.props}>{this.props.children}</Provider>;
  }
}

export default ChatsListItemLastMessage;
