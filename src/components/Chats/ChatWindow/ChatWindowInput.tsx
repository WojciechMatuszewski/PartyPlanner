import React from 'react';
import { Input, Form } from 'antd';
import css from '@emotion/css';
import {
  useCreateMessage,
  PaginateMessagesQueryVariables,
  PaginateMessagesQueryDocument,
  PaginateMessagesQueryQuery,
  CreateMessageMutation
} from '@generated/graphql';
import { ChatsContext } from '@pages/chats';
import { DataProxy } from 'apollo-cache';
import * as yup from 'yup';
import { Formik } from 'formik';

const InputStyles = css`
  width: 100%;
  height: 50px;
  border: 0;
  /* border-top: 2px dashed #d9d9d9; */
  box-shadow: 3px -2px 7px -2px rgba(0, 0, 0, 0.15) !important;
  border-radius: 0;
  &:focus {
    outline: none;
    /* box-shadow: none; */
  }
`;

interface ChatWindowInputForm {
  message: string | undefined;
}

const ValidationSchema = yup.object().shape<ChatWindowInputForm>({
  message: yup.string().required()
});

interface Props {
  currentQueryVariables: PaginateMessagesQueryVariables;
  onNewMessage: () => void;
}

const ChatInput: React.FC<Props> = ({
  currentQueryVariables,
  onNewMessage
}) => {
  const sendMessage = useCreateMessage({
    update: handleOptimisticUpdate
  });

  const { currentlyLoggedUserData, currentlySelectedChatId } = React.useContext(
    ChatsContext
  );

  return (
    <Formik
      initialValues={{ message: '' }}
      validationSchema={ValidationSchema}
      onSubmit={({ message }, { resetForm }) => {
        sendMessage({
          variables: getMutationVariables(message),
          optimisticResponse: getOptimisticResponse(message)
        });
        resetForm();
      }}
    >
      {({ handleSubmit, handleChange, handleBlur, values }) => (
        <Form onSubmit={handleSubmit} autoComplete={'off'}>
          <Input
            type="text"
            autoComplete="off"
            onChange={handleChange}
            onBlur={handleBlur}
            name="message"
            value={values.message}
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
        id: (Math.random() * 1000).toString(),
        author: {
          id: currentlyLoggedUserData.id,
          firstName: currentlyLoggedUserData.firstName,
          lastName: currentlyLoggedUserData.lastName,
          avatar: currentlyLoggedUserData.avatar,
          __typename: 'User'
        },
        content: messageContent,
        createdAt: String(new Date()),
        isSendByMe: true,
        __typename: 'Message'
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

    data.messagesConnection.edges.push({
      node: createMessage,
      __typename: 'MessageEdge'
    });

    proxy.writeQuery({
      query: PaginateMessagesQueryDocument,
      variables: currentQueryVariables,
      data
    });
    requestAnimationFrame(() => {
      onNewMessage();
    });
  }
};

export default ChatInput;
