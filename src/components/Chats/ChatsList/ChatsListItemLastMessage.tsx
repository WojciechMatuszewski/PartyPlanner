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
      {({ lastMessage: { createdAt } }) => {
        const parsedDate = moment(createdAt);
        const currentDate = moment(new Date());
        const diff = Math.abs(parsedDate.diff(currentDate, 'hours'));
        return (
          <Typography.Text type="secondary">
            {diff < 24
              ? parsedDate.format('hh:mm')
              : diff < 24 * 7
              ? parsedDate.format('dd:hh')
              : parsedDate.format('MMM Do')}
          </Typography.Text>
        );
      }}
    </Consumer>
  );

  public static MessageMain = () => (
    <Consumer>
      {({
        lastMessage: {
          content,
          author: { firstName }
        }
      }) => (
        <Typography.Paragraph type="secondary" ellipsis={true}>
          {firstName}: {content}
        </Typography.Paragraph>
      )}
    </Consumer>
  );
  public render() {
    return <Provider value={this.props}>{this.props.children}</Provider>;
  }
}

export default ChatsListItemLastMessage;
