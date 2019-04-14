import React from 'react';
import { Input, Form, message } from 'antd';
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
  userMessage: string | undefined;
}

const ValidationSchema = yup.object().shape<ChatWindowInputForm>({
  userMessage: yup.string().required()
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
          message.error('could not send the message');
        }
      }}
    >
      {({ handleSubmit, handleChange, handleBlur, values }) => (
        <Form onSubmit={handleSubmit} autoComplete={'off'}>
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
        createdAt: String(new Date()),
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

    if (typeof createMessage.id == 'string') {
      createMessage.optimisticallyAdded = true;
      createMessage.optimisticallyCreated = true;
      createMessage.hasOptimisticError = false;
    }

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

  // function handleInputError({ createMessage }: any) {
  //   const currentMessages = apolloClient.readQuery<PaginateMessagesQueryQuery>({
  //     query: PaginateMessagesQueryDocument,
  //     variables: currentQueryVariables
  //   });

  //   createMessage.hasOptimisticError = true;

  //   if (!currentMessages) return;
  //   currentMessages.messagesConnection.edges.push({
  //     node: createMessage,
  //     __typename: 'MessageEdge'
  //   });

  //   apolloClient.writeQuery({
  //     query: PaginateMessagesQueryDocument,
  //     variables: currentQueryVariables,
  //     data: currentMessages
  //   });
  //   requestAnimationFrame(() => {
  //     onNewMessage();
  //   });
  //   console.log(currentMessages);

  //   // apolloClient.writeQuery({
  //   //   query: PaginateMessagesQueryDocument,

  //   // })
  // }
};

export default ChatInput;
