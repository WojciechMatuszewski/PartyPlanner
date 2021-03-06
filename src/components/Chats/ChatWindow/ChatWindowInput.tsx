import React from 'react';
import { Input, Form, message } from 'antd';
import css from '@emotion/css';
import {
  useCreateMessage,
  PaginateMessagesQueryVariables,
  PaginateMessagesQueryDocument,
  PaginateMessagesQueryQuery,
  CreateMessageMutation,
  CreateMessageCreateMessage
} from '@generated/graphql';
import { ChatsContext } from '@pages/party-chats';
import { DataProxy } from 'apollo-cache';
import * as yup from 'yup';
import { Formik } from 'formik';
import moment from 'moment';
import { LAST_CHAT_MESSAGE_FRAGMENT } from '@graphql/fragments';

const InputStyles = css`
  width: 100%;
  height: 50px;
  border: 0;
  /* box-shadow: 3px -2px 7px -2px rgba(0, 0, 0, 0.15) !important; */
  border-top: 1px solid #d9d9d9;
  border-radius: 0;
  &:focus {
    outline: none;
  }
`;

interface ChatWindowInputForm {
  userMessage: string | undefined;
}

const ValidationSchema = yup.object().shape<ChatWindowInputForm>({
  userMessage: yup.string().required()
});

interface Props {
  currentQueryVariables: PaginateMessagesQueryVariables;
}

const ChatInput: React.FC<Props> = ({ currentQueryVariables }) => {
  const [sendMessage] = useCreateMessage({
    update: handleOptimisticUpdate
  });

  const { currentlyLoggedUserData, currentlySelectedChatId } = React.useContext(
    ChatsContext
  );

  return (
    <Formik
      initialValues={{ userMessage: '' }}
      validationSchema={ValidationSchema}
      onSubmit={async ({ userMessage }, { resetForm }) => {
        const optimisticResponse = getOptimisticResponse(userMessage);
        resetForm();
        try {
          await sendMessage({
            variables: getMutationVariables(userMessage),
            optimisticResponse
          });
        } catch (e) {
          message.error('Could not send the message');
        }
      }}
    >
      {({ handleSubmit, handleChange, handleBlur, values }) => (
        <Form
          style={{ zIndex: 20 }}
          onSubmit={handleSubmit}
          autoComplete={'off'}
        >
          <Input
            type="text"
            autoComplete="off"
            onChange={handleChange}
            onBlur={handleBlur}
            name="userMessage"
            value={values.userMessage}
            css={InputStyles}
            placeholder="Type a message here"
          />
        </Form>
      )}
    </Formik>
  );

  function getOptimisticResponse(messageContent: string) {
    return {
      __typename: 'Mutation',
      createMessage: {
        id: -Math.random() * 10000,
        author: {
          id: currentlyLoggedUserData.id,
          firstName: currentlyLoggedUserData.firstName,
          lastName: currentlyLoggedUserData.lastName,
          avatar: currentlyLoggedUserData.avatar,
          __typename: 'User'
        },
        content: messageContent,
        createdAt: moment(new Date()),
        isSendByMe: true,
        __typename: 'Message',
        optimisticallyAdded: true,
        optimisticallyCreated: false,
        hasOptimisticError: false
      }
    };
  }

  function getMutationVariables(messageContent: string) {
    return {
      data: {
        author: {
          connect: {
            id: currentlyLoggedUserData.id
          }
        },
        chat: {
          connect: {
            id: currentlySelectedChatId
          }
        },
        content: messageContent
      }
    };
  }

  function handleOptimisticUpdate(
    proxy: DataProxy,
    { data: { createMessage } }: { data: CreateMessageMutation }
  ) {
    const data = proxy.readQuery<PaginateMessagesQueryQuery>({
      query: PaginateMessagesQueryDocument,
      variables: currentQueryVariables
    });

    if (!data) return;

    const isFromServer = typeof createMessage.id == 'string';

    if (isFromServer) {
      createMessage.optimisticallyAdded = true;
      createMessage.optimisticallyCreated = true;
      createMessage.hasOptimisticError = false;
    }

    data.messagesConnection.edges.push({
      node: createMessage,
      __typename: 'MessageEdge'
    });

    updateCurrentThreadLastMessage(proxy, createMessage);

    proxy.writeQuery({
      query: PaginateMessagesQueryDocument,
      variables: currentQueryVariables,
      data
    });
    if (isFromServer) return;
  }

  function updateCurrentThreadLastMessage(
    proxy: DataProxy,
    createdMessage: CreateMessageCreateMessage
  ) {
    proxy.writeFragment({
      id: `Chat:${currentlySelectedChatId}`,
      fragment: LAST_CHAT_MESSAGE_FRAGMENT,
      data: {
        messages: [
          {
            author: createdMessage.author,
            content: createdMessage.content,
            createdAt: createdMessage.createdAt,
            __typename: 'Message'
          }
        ],
        hasUnreadMessages: false,
        __typename: 'Chat'
      }
    });
  }
};

export default ChatInput;
