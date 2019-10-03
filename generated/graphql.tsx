import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  DateTime: any,
  Long: any,
};

export type AggregateAlbum = {
   __typename?: 'AggregateAlbum',
  count: Scalars['Int'],
};

export type AggregateArtist = {
   __typename?: 'AggregateArtist',
  count: Scalars['Int'],
};

export type AggregateChat = {
   __typename?: 'AggregateChat',
  count: Scalars['Int'],
};

export type AggregateGame = {
   __typename?: 'AggregateGame',
  count: Scalars['Int'],
};

export type AggregateImage = {
   __typename?: 'AggregateImage',
  count: Scalars['Int'],
};

export type AggregateLocation = {
   __typename?: 'AggregateLocation',
  count: Scalars['Int'],
};

export type AggregateMessage = {
   __typename?: 'AggregateMessage',
  count: Scalars['Int'],
};

export type AggregateParty = {
   __typename?: 'AggregateParty',
  count: Scalars['Int'],
};

export type AggregatePartyCart = {
   __typename?: 'AggregatePartyCart',
  count: Scalars['Int'],
};

export type AggregatePartyCartItem = {
   __typename?: 'AggregatePartyCartItem',
  count: Scalars['Int'],
};

export type AggregatePartyInvitation = {
   __typename?: 'AggregatePartyInvitation',
  count: Scalars['Int'],
};

export type AggregatePlaylist = {
   __typename?: 'AggregatePlaylist',
  count: Scalars['Int'],
};

export type AggregateTrack = {
   __typename?: 'AggregateTrack',
  count: Scalars['Int'],
};

export type AggregateUser = {
   __typename?: 'AggregateUser',
  count: Scalars['Int'],
};

export type Album = {
   __typename?: 'Album',
  id: Scalars['ID'],
  images?: Maybe<Array<Image>>,
  artists?: Maybe<Array<Artist>>,
};


export type AlbumImagesArgs = {
  where?: Maybe<ImageWhereInput>,
  orderBy?: Maybe<ImageOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type AlbumArtistsArgs = {
  where?: Maybe<ArtistWhereInput>,
  orderBy?: Maybe<ArtistOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type AlbumConnection = {
   __typename?: 'AlbumConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<AlbumEdge>>,
  aggregate: AggregateAlbum,
};

export type AlbumCreateInput = {
  id?: Maybe<Scalars['ID']>,
  images?: Maybe<ImageCreateManyInput>,
  artists?: Maybe<ArtistCreateManyInput>,
};

export type AlbumCreateOneInput = {
  create?: Maybe<AlbumCreateInput>,
  connect?: Maybe<AlbumWhereUniqueInput>,
};

export type AlbumEdge = {
   __typename?: 'AlbumEdge',
  node: Album,
  cursor: Scalars['String'],
};

export enum AlbumOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type AlbumPreviousValues = {
   __typename?: 'AlbumPreviousValues',
  id: Scalars['ID'],
};

export type AlbumSubscriptionPayload = {
   __typename?: 'AlbumSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Album>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<AlbumPreviousValues>,
};

export type AlbumSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<AlbumWhereInput>,
  AND?: Maybe<Array<AlbumSubscriptionWhereInput>>,
  OR?: Maybe<Array<AlbumSubscriptionWhereInput>>,
  NOT?: Maybe<Array<AlbumSubscriptionWhereInput>>,
};

export type AlbumUpdateDataInput = {
  images?: Maybe<ImageUpdateManyInput>,
  artists?: Maybe<ArtistUpdateManyInput>,
};

export type AlbumUpdateInput = {
  images?: Maybe<ImageUpdateManyInput>,
  artists?: Maybe<ArtistUpdateManyInput>,
};

export type AlbumUpdateOneRequiredInput = {
  create?: Maybe<AlbumCreateInput>,
  update?: Maybe<AlbumUpdateDataInput>,
  upsert?: Maybe<AlbumUpsertNestedInput>,
  connect?: Maybe<AlbumWhereUniqueInput>,
};

export type AlbumUpsertNestedInput = {
  update: AlbumUpdateDataInput,
  create: AlbumCreateInput,
};

export type AlbumWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  images_every?: Maybe<ImageWhereInput>,
  images_some?: Maybe<ImageWhereInput>,
  images_none?: Maybe<ImageWhereInput>,
  artists_every?: Maybe<ArtistWhereInput>,
  artists_some?: Maybe<ArtistWhereInput>,
  artists_none?: Maybe<ArtistWhereInput>,
  AND?: Maybe<Array<AlbumWhereInput>>,
  OR?: Maybe<Array<AlbumWhereInput>>,
  NOT?: Maybe<Array<AlbumWhereInput>>,
};

export type AlbumWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Artist = {
   __typename?: 'Artist',
  id: Scalars['ID'],
  name: Scalars['String'],
};

export type ArtistConnection = {
   __typename?: 'ArtistConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<ArtistEdge>>,
  aggregate: AggregateArtist,
};

export type ArtistCreateInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
};

export type ArtistCreateManyInput = {
  create?: Maybe<Array<ArtistCreateInput>>,
  connect?: Maybe<Array<ArtistWhereUniqueInput>>,
};

export type ArtistEdge = {
   __typename?: 'ArtistEdge',
  node: Artist,
  cursor: Scalars['String'],
};

export enum ArtistOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

export type ArtistPreviousValues = {
   __typename?: 'ArtistPreviousValues',
  id: Scalars['ID'],
  name: Scalars['String'],
};

export type ArtistScalarWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  AND?: Maybe<Array<ArtistScalarWhereInput>>,
  OR?: Maybe<Array<ArtistScalarWhereInput>>,
  NOT?: Maybe<Array<ArtistScalarWhereInput>>,
};

export type ArtistSubscriptionPayload = {
   __typename?: 'ArtistSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Artist>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<ArtistPreviousValues>,
};

export type ArtistSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<ArtistWhereInput>,
  AND?: Maybe<Array<ArtistSubscriptionWhereInput>>,
  OR?: Maybe<Array<ArtistSubscriptionWhereInput>>,
  NOT?: Maybe<Array<ArtistSubscriptionWhereInput>>,
};

export type ArtistUpdateDataInput = {
  name?: Maybe<Scalars['String']>,
};

export type ArtistUpdateInput = {
  name?: Maybe<Scalars['String']>,
};

export type ArtistUpdateManyDataInput = {
  name?: Maybe<Scalars['String']>,
};

export type ArtistUpdateManyInput = {
  create?: Maybe<Array<ArtistCreateInput>>,
  update?: Maybe<Array<ArtistUpdateWithWhereUniqueNestedInput>>,
  upsert?: Maybe<Array<ArtistUpsertWithWhereUniqueNestedInput>>,
  delete?: Maybe<Array<ArtistWhereUniqueInput>>,
  connect?: Maybe<Array<ArtistWhereUniqueInput>>,
  set?: Maybe<Array<ArtistWhereUniqueInput>>,
  disconnect?: Maybe<Array<ArtistWhereUniqueInput>>,
  deleteMany?: Maybe<Array<ArtistScalarWhereInput>>,
  updateMany?: Maybe<Array<ArtistUpdateManyWithWhereNestedInput>>,
};

export type ArtistUpdateManyMutationInput = {
  name?: Maybe<Scalars['String']>,
};

export type ArtistUpdateManyWithWhereNestedInput = {
  where: ArtistScalarWhereInput,
  data: ArtistUpdateManyDataInput,
};

export type ArtistUpdateWithWhereUniqueNestedInput = {
  where: ArtistWhereUniqueInput,
  data: ArtistUpdateDataInput,
};

export type ArtistUpsertWithWhereUniqueNestedInput = {
  where: ArtistWhereUniqueInput,
  update: ArtistUpdateDataInput,
  create: ArtistCreateInput,
};

export type ArtistWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  AND?: Maybe<Array<ArtistWhereInput>>,
  OR?: Maybe<Array<ArtistWhereInput>>,
  NOT?: Maybe<Array<ArtistWhereInput>>,
};

export type ArtistWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type AuthPayload = {
   __typename?: 'AuthPayload',
  token: Scalars['String'],
  user: User,
};

export type BatchPayload = {
   __typename?: 'BatchPayload',
  count: Scalars['Long'],
};

export type Chat = {
   __typename?: 'Chat',
  id: Scalars['ID'],
  party: Party,
  members?: Maybe<Array<User>>,
  messages?: Maybe<Array<Message>>,
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  hasUnreadMessages: Scalars['Boolean'],
};


export type ChatMembersArgs = {
  where?: Maybe<UserWhereInput>,
  orderBy?: Maybe<UserOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type ChatMessagesArgs = {
  where?: Maybe<MessageWhereInput>,
  orderBy?: Maybe<MessageOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type ChatConnection = {
   __typename?: 'ChatConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<ChatEdge>>,
  aggregate: AggregateChat,
};

export type ChatCreateInput = {
  id?: Maybe<Scalars['ID']>,
  party: PartyCreateOneInput,
  members?: Maybe<UserCreateManyWithoutChatsInput>,
  messages?: Maybe<MessageCreateManyWithoutChatInput>,
};

export type ChatCreateManyWithoutMembersInput = {
  create?: Maybe<Array<ChatCreateWithoutMembersInput>>,
  connect?: Maybe<Array<ChatWhereUniqueInput>>,
};

export type ChatCreateOneWithoutMessagesInput = {
  create?: Maybe<ChatCreateWithoutMessagesInput>,
  connect?: Maybe<ChatWhereUniqueInput>,
};

export type ChatCreateWithoutMembersInput = {
  id?: Maybe<Scalars['ID']>,
  party: PartyCreateOneInput,
  messages?: Maybe<MessageCreateManyWithoutChatInput>,
};

export type ChatCreateWithoutMessagesInput = {
  id?: Maybe<Scalars['ID']>,
  party: PartyCreateOneInput,
  members?: Maybe<UserCreateManyWithoutChatsInput>,
};

export type ChatEdge = {
   __typename?: 'ChatEdge',
  node: Chat,
  cursor: Scalars['String'],
};

export enum ChatOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ChatPreviousValues = {
   __typename?: 'ChatPreviousValues',
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};

export type ChatScalarWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  AND?: Maybe<Array<ChatScalarWhereInput>>,
  OR?: Maybe<Array<ChatScalarWhereInput>>,
  NOT?: Maybe<Array<ChatScalarWhereInput>>,
};

export type ChatSubscriptionPayload = {
   __typename?: 'ChatSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Chat>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<ChatPreviousValues>,
};

export type ChatSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<ChatWhereInput>,
  AND?: Maybe<Array<ChatSubscriptionWhereInput>>,
  OR?: Maybe<Array<ChatSubscriptionWhereInput>>,
  NOT?: Maybe<Array<ChatSubscriptionWhereInput>>,
};

export type ChatUpdateInput = {
  party?: Maybe<PartyUpdateOneRequiredInput>,
  members?: Maybe<UserUpdateManyWithoutChatsInput>,
  messages?: Maybe<MessageUpdateManyWithoutChatInput>,
};

export type ChatUpdateManyWithoutMembersInput = {
  create?: Maybe<Array<ChatCreateWithoutMembersInput>>,
  delete?: Maybe<Array<ChatWhereUniqueInput>>,
  connect?: Maybe<Array<ChatWhereUniqueInput>>,
  set?: Maybe<Array<ChatWhereUniqueInput>>,
  disconnect?: Maybe<Array<ChatWhereUniqueInput>>,
  update?: Maybe<Array<ChatUpdateWithWhereUniqueWithoutMembersInput>>,
  upsert?: Maybe<Array<ChatUpsertWithWhereUniqueWithoutMembersInput>>,
  deleteMany?: Maybe<Array<ChatScalarWhereInput>>,
};

export type ChatUpdateOneRequiredWithoutMessagesInput = {
  create?: Maybe<ChatCreateWithoutMessagesInput>,
  update?: Maybe<ChatUpdateWithoutMessagesDataInput>,
  upsert?: Maybe<ChatUpsertWithoutMessagesInput>,
  connect?: Maybe<ChatWhereUniqueInput>,
};

export type ChatUpdateWithoutMembersDataInput = {
  party?: Maybe<PartyUpdateOneRequiredInput>,
  messages?: Maybe<MessageUpdateManyWithoutChatInput>,
};

export type ChatUpdateWithoutMessagesDataInput = {
  party?: Maybe<PartyUpdateOneRequiredInput>,
  members?: Maybe<UserUpdateManyWithoutChatsInput>,
};

export type ChatUpdateWithWhereUniqueWithoutMembersInput = {
  where: ChatWhereUniqueInput,
  data: ChatUpdateWithoutMembersDataInput,
};

export type ChatUpsertWithoutMessagesInput = {
  update: ChatUpdateWithoutMessagesDataInput,
  create: ChatCreateWithoutMessagesInput,
};

export type ChatUpsertWithWhereUniqueWithoutMembersInput = {
  where: ChatWhereUniqueInput,
  update: ChatUpdateWithoutMembersDataInput,
  create: ChatCreateWithoutMembersInput,
};

export type ChatWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  party?: Maybe<PartyWhereInput>,
  members_every?: Maybe<UserWhereInput>,
  members_some?: Maybe<UserWhereInput>,
  members_none?: Maybe<UserWhereInput>,
  messages_every?: Maybe<MessageWhereInput>,
  messages_some?: Maybe<MessageWhereInput>,
  messages_none?: Maybe<MessageWhereInput>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  AND?: Maybe<Array<ChatWhereInput>>,
  OR?: Maybe<Array<ChatWhereInput>>,
  NOT?: Maybe<Array<ChatWhereInput>>,
};

export type ChatWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};


export type Game = {
   __typename?: 'Game',
  id: Scalars['ID'],
  title: Scalars['String'],
  cover?: Maybe<Scalars['String']>,
  type: GameType,
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};

export type GameConnection = {
   __typename?: 'GameConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<GameEdge>>,
  aggregate: AggregateGame,
};

export type GameCreateInput = {
  id?: Maybe<Scalars['ID']>,
  title: Scalars['String'],
  cover?: Maybe<Scalars['String']>,
  type: GameType,
};

export type GameCreateManyInput = {
  create?: Maybe<Array<GameCreateInput>>,
  connect?: Maybe<Array<GameWhereUniqueInput>>,
};

export type GameEdge = {
   __typename?: 'GameEdge',
  node: Game,
  cursor: Scalars['String'],
};

export enum GameOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  CoverAsc = 'cover_ASC',
  CoverDesc = 'cover_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type GamePreviousValues = {
   __typename?: 'GamePreviousValues',
  id: Scalars['ID'],
  title: Scalars['String'],
  cover?: Maybe<Scalars['String']>,
  type: GameType,
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};

export type GameScalarWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
  title_not?: Maybe<Scalars['String']>,
  title_in?: Maybe<Array<Scalars['String']>>,
  title_not_in?: Maybe<Array<Scalars['String']>>,
  title_lt?: Maybe<Scalars['String']>,
  title_lte?: Maybe<Scalars['String']>,
  title_gt?: Maybe<Scalars['String']>,
  title_gte?: Maybe<Scalars['String']>,
  title_contains?: Maybe<Scalars['String']>,
  title_not_contains?: Maybe<Scalars['String']>,
  title_starts_with?: Maybe<Scalars['String']>,
  title_not_starts_with?: Maybe<Scalars['String']>,
  title_ends_with?: Maybe<Scalars['String']>,
  title_not_ends_with?: Maybe<Scalars['String']>,
  cover?: Maybe<Scalars['String']>,
  cover_not?: Maybe<Scalars['String']>,
  cover_in?: Maybe<Array<Scalars['String']>>,
  cover_not_in?: Maybe<Array<Scalars['String']>>,
  cover_lt?: Maybe<Scalars['String']>,
  cover_lte?: Maybe<Scalars['String']>,
  cover_gt?: Maybe<Scalars['String']>,
  cover_gte?: Maybe<Scalars['String']>,
  cover_contains?: Maybe<Scalars['String']>,
  cover_not_contains?: Maybe<Scalars['String']>,
  cover_starts_with?: Maybe<Scalars['String']>,
  cover_not_starts_with?: Maybe<Scalars['String']>,
  cover_ends_with?: Maybe<Scalars['String']>,
  cover_not_ends_with?: Maybe<Scalars['String']>,
  type?: Maybe<GameType>,
  type_not?: Maybe<GameType>,
  type_in?: Maybe<Array<GameType>>,
  type_not_in?: Maybe<Array<GameType>>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  AND?: Maybe<Array<GameScalarWhereInput>>,
  OR?: Maybe<Array<GameScalarWhereInput>>,
  NOT?: Maybe<Array<GameScalarWhereInput>>,
};

export type GameSubscriptionPayload = {
   __typename?: 'GameSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Game>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<GamePreviousValues>,
};

export type GameSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<GameWhereInput>,
  AND?: Maybe<Array<GameSubscriptionWhereInput>>,
  OR?: Maybe<Array<GameSubscriptionWhereInput>>,
  NOT?: Maybe<Array<GameSubscriptionWhereInput>>,
};

export enum GameType {
  Board = 'BOARD',
  Pc = 'PC',
  Console = 'CONSOLE'
}

export type GameUpdateDataInput = {
  title?: Maybe<Scalars['String']>,
  cover?: Maybe<Scalars['String']>,
  type?: Maybe<GameType>,
};

export type GameUpdateInput = {
  title?: Maybe<Scalars['String']>,
  cover?: Maybe<Scalars['String']>,
  type?: Maybe<GameType>,
};

export type GameUpdateManyDataInput = {
  title?: Maybe<Scalars['String']>,
  cover?: Maybe<Scalars['String']>,
  type?: Maybe<GameType>,
};

export type GameUpdateManyInput = {
  create?: Maybe<Array<GameCreateInput>>,
  update?: Maybe<Array<GameUpdateWithWhereUniqueNestedInput>>,
  upsert?: Maybe<Array<GameUpsertWithWhereUniqueNestedInput>>,
  delete?: Maybe<Array<GameWhereUniqueInput>>,
  connect?: Maybe<Array<GameWhereUniqueInput>>,
  set?: Maybe<Array<GameWhereUniqueInput>>,
  disconnect?: Maybe<Array<GameWhereUniqueInput>>,
  deleteMany?: Maybe<Array<GameScalarWhereInput>>,
  updateMany?: Maybe<Array<GameUpdateManyWithWhereNestedInput>>,
};

export type GameUpdateManyMutationInput = {
  title?: Maybe<Scalars['String']>,
  cover?: Maybe<Scalars['String']>,
  type?: Maybe<GameType>,
};

export type GameUpdateManyWithWhereNestedInput = {
  where: GameScalarWhereInput,
  data: GameUpdateManyDataInput,
};

export type GameUpdateWithWhereUniqueNestedInput = {
  where: GameWhereUniqueInput,
  data: GameUpdateDataInput,
};

export type GameUpsertWithWhereUniqueNestedInput = {
  where: GameWhereUniqueInput,
  update: GameUpdateDataInput,
  create: GameCreateInput,
};

export type GameWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
  title_not?: Maybe<Scalars['String']>,
  title_in?: Maybe<Array<Scalars['String']>>,
  title_not_in?: Maybe<Array<Scalars['String']>>,
  title_lt?: Maybe<Scalars['String']>,
  title_lte?: Maybe<Scalars['String']>,
  title_gt?: Maybe<Scalars['String']>,
  title_gte?: Maybe<Scalars['String']>,
  title_contains?: Maybe<Scalars['String']>,
  title_not_contains?: Maybe<Scalars['String']>,
  title_starts_with?: Maybe<Scalars['String']>,
  title_not_starts_with?: Maybe<Scalars['String']>,
  title_ends_with?: Maybe<Scalars['String']>,
  title_not_ends_with?: Maybe<Scalars['String']>,
  cover?: Maybe<Scalars['String']>,
  cover_not?: Maybe<Scalars['String']>,
  cover_in?: Maybe<Array<Scalars['String']>>,
  cover_not_in?: Maybe<Array<Scalars['String']>>,
  cover_lt?: Maybe<Scalars['String']>,
  cover_lte?: Maybe<Scalars['String']>,
  cover_gt?: Maybe<Scalars['String']>,
  cover_gte?: Maybe<Scalars['String']>,
  cover_contains?: Maybe<Scalars['String']>,
  cover_not_contains?: Maybe<Scalars['String']>,
  cover_starts_with?: Maybe<Scalars['String']>,
  cover_not_starts_with?: Maybe<Scalars['String']>,
  cover_ends_with?: Maybe<Scalars['String']>,
  cover_not_ends_with?: Maybe<Scalars['String']>,
  type?: Maybe<GameType>,
  type_not?: Maybe<GameType>,
  type_in?: Maybe<Array<GameType>>,
  type_not_in?: Maybe<Array<GameType>>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  AND?: Maybe<Array<GameWhereInput>>,
  OR?: Maybe<Array<GameWhereInput>>,
  NOT?: Maybe<Array<GameWhereInput>>,
};

export type GameWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
};

export type Image = {
   __typename?: 'Image',
  id: Scalars['ID'],
  height: Scalars['Int'],
  width: Scalars['Int'],
  url: Scalars['String'],
};

export type ImageConnection = {
   __typename?: 'ImageConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<ImageEdge>>,
  aggregate: AggregateImage,
};

export type ImageCreateInput = {
  id?: Maybe<Scalars['ID']>,
  height: Scalars['Int'],
  width: Scalars['Int'],
  url: Scalars['String'],
};

export type ImageCreateManyInput = {
  create?: Maybe<Array<ImageCreateInput>>,
  connect?: Maybe<Array<ImageWhereUniqueInput>>,
};

export type ImageEdge = {
   __typename?: 'ImageEdge',
  node: Image,
  cursor: Scalars['String'],
};

export enum ImageOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export type ImagePreviousValues = {
   __typename?: 'ImagePreviousValues',
  id: Scalars['ID'],
  height: Scalars['Int'],
  width: Scalars['Int'],
  url: Scalars['String'],
};

export type ImageScalarWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  height?: Maybe<Scalars['Int']>,
  height_not?: Maybe<Scalars['Int']>,
  height_in?: Maybe<Array<Scalars['Int']>>,
  height_not_in?: Maybe<Array<Scalars['Int']>>,
  height_lt?: Maybe<Scalars['Int']>,
  height_lte?: Maybe<Scalars['Int']>,
  height_gt?: Maybe<Scalars['Int']>,
  height_gte?: Maybe<Scalars['Int']>,
  width?: Maybe<Scalars['Int']>,
  width_not?: Maybe<Scalars['Int']>,
  width_in?: Maybe<Array<Scalars['Int']>>,
  width_not_in?: Maybe<Array<Scalars['Int']>>,
  width_lt?: Maybe<Scalars['Int']>,
  width_lte?: Maybe<Scalars['Int']>,
  width_gt?: Maybe<Scalars['Int']>,
  width_gte?: Maybe<Scalars['Int']>,
  url?: Maybe<Scalars['String']>,
  url_not?: Maybe<Scalars['String']>,
  url_in?: Maybe<Array<Scalars['String']>>,
  url_not_in?: Maybe<Array<Scalars['String']>>,
  url_lt?: Maybe<Scalars['String']>,
  url_lte?: Maybe<Scalars['String']>,
  url_gt?: Maybe<Scalars['String']>,
  url_gte?: Maybe<Scalars['String']>,
  url_contains?: Maybe<Scalars['String']>,
  url_not_contains?: Maybe<Scalars['String']>,
  url_starts_with?: Maybe<Scalars['String']>,
  url_not_starts_with?: Maybe<Scalars['String']>,
  url_ends_with?: Maybe<Scalars['String']>,
  url_not_ends_with?: Maybe<Scalars['String']>,
  AND?: Maybe<Array<ImageScalarWhereInput>>,
  OR?: Maybe<Array<ImageScalarWhereInput>>,
  NOT?: Maybe<Array<ImageScalarWhereInput>>,
};

export type ImageSubscriptionPayload = {
   __typename?: 'ImageSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Image>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<ImagePreviousValues>,
};

export type ImageSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<ImageWhereInput>,
  AND?: Maybe<Array<ImageSubscriptionWhereInput>>,
  OR?: Maybe<Array<ImageSubscriptionWhereInput>>,
  NOT?: Maybe<Array<ImageSubscriptionWhereInput>>,
};

export type ImageUpdateDataInput = {
  height?: Maybe<Scalars['Int']>,
  width?: Maybe<Scalars['Int']>,
  url?: Maybe<Scalars['String']>,
};

export type ImageUpdateInput = {
  height?: Maybe<Scalars['Int']>,
  width?: Maybe<Scalars['Int']>,
  url?: Maybe<Scalars['String']>,
};

export type ImageUpdateManyDataInput = {
  height?: Maybe<Scalars['Int']>,
  width?: Maybe<Scalars['Int']>,
  url?: Maybe<Scalars['String']>,
};

export type ImageUpdateManyInput = {
  create?: Maybe<Array<ImageCreateInput>>,
  update?: Maybe<Array<ImageUpdateWithWhereUniqueNestedInput>>,
  upsert?: Maybe<Array<ImageUpsertWithWhereUniqueNestedInput>>,
  delete?: Maybe<Array<ImageWhereUniqueInput>>,
  connect?: Maybe<Array<ImageWhereUniqueInput>>,
  set?: Maybe<Array<ImageWhereUniqueInput>>,
  disconnect?: Maybe<Array<ImageWhereUniqueInput>>,
  deleteMany?: Maybe<Array<ImageScalarWhereInput>>,
  updateMany?: Maybe<Array<ImageUpdateManyWithWhereNestedInput>>,
};

export type ImageUpdateManyMutationInput = {
  height?: Maybe<Scalars['Int']>,
  width?: Maybe<Scalars['Int']>,
  url?: Maybe<Scalars['String']>,
};

export type ImageUpdateManyWithWhereNestedInput = {
  where: ImageScalarWhereInput,
  data: ImageUpdateManyDataInput,
};

export type ImageUpdateWithWhereUniqueNestedInput = {
  where: ImageWhereUniqueInput,
  data: ImageUpdateDataInput,
};

export type ImageUpsertWithWhereUniqueNestedInput = {
  where: ImageWhereUniqueInput,
  update: ImageUpdateDataInput,
  create: ImageCreateInput,
};

export type ImageWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  height?: Maybe<Scalars['Int']>,
  height_not?: Maybe<Scalars['Int']>,
  height_in?: Maybe<Array<Scalars['Int']>>,
  height_not_in?: Maybe<Array<Scalars['Int']>>,
  height_lt?: Maybe<Scalars['Int']>,
  height_lte?: Maybe<Scalars['Int']>,
  height_gt?: Maybe<Scalars['Int']>,
  height_gte?: Maybe<Scalars['Int']>,
  width?: Maybe<Scalars['Int']>,
  width_not?: Maybe<Scalars['Int']>,
  width_in?: Maybe<Array<Scalars['Int']>>,
  width_not_in?: Maybe<Array<Scalars['Int']>>,
  width_lt?: Maybe<Scalars['Int']>,
  width_lte?: Maybe<Scalars['Int']>,
  width_gt?: Maybe<Scalars['Int']>,
  width_gte?: Maybe<Scalars['Int']>,
  url?: Maybe<Scalars['String']>,
  url_not?: Maybe<Scalars['String']>,
  url_in?: Maybe<Array<Scalars['String']>>,
  url_not_in?: Maybe<Array<Scalars['String']>>,
  url_lt?: Maybe<Scalars['String']>,
  url_lte?: Maybe<Scalars['String']>,
  url_gt?: Maybe<Scalars['String']>,
  url_gte?: Maybe<Scalars['String']>,
  url_contains?: Maybe<Scalars['String']>,
  url_not_contains?: Maybe<Scalars['String']>,
  url_starts_with?: Maybe<Scalars['String']>,
  url_not_starts_with?: Maybe<Scalars['String']>,
  url_ends_with?: Maybe<Scalars['String']>,
  url_not_ends_with?: Maybe<Scalars['String']>,
  AND?: Maybe<Array<ImageWhereInput>>,
  OR?: Maybe<Array<ImageWhereInput>>,
  NOT?: Maybe<Array<ImageWhereInput>>,
};

export type ImageWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Location = {
   __typename?: 'Location',
  id: Scalars['ID'],
  placeName: Scalars['String'],
  latitude: Scalars['Float'],
  longitude: Scalars['Float'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};

export type LocationConnection = {
   __typename?: 'LocationConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<LocationEdge>>,
  aggregate: AggregateLocation,
};

export type LocationCreateInput = {
  id?: Maybe<Scalars['ID']>,
  placeName: Scalars['String'],
  latitude: Scalars['Float'],
  longitude: Scalars['Float'],
};

export type LocationCreateOneInput = {
  create?: Maybe<LocationCreateInput>,
  connect?: Maybe<LocationWhereUniqueInput>,
};

export type LocationEdge = {
   __typename?: 'LocationEdge',
  node: Location,
  cursor: Scalars['String'],
};

export enum LocationOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PlaceNameAsc = 'placeName_ASC',
  PlaceNameDesc = 'placeName_DESC',
  LatitudeAsc = 'latitude_ASC',
  LatitudeDesc = 'latitude_DESC',
  LongitudeAsc = 'longitude_ASC',
  LongitudeDesc = 'longitude_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type LocationPreviousValues = {
   __typename?: 'LocationPreviousValues',
  id: Scalars['ID'],
  placeName: Scalars['String'],
  latitude: Scalars['Float'],
  longitude: Scalars['Float'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};

export type LocationSubscriptionPayload = {
   __typename?: 'LocationSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Location>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<LocationPreviousValues>,
};

export type LocationSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<LocationWhereInput>,
  AND?: Maybe<Array<LocationSubscriptionWhereInput>>,
  OR?: Maybe<Array<LocationSubscriptionWhereInput>>,
  NOT?: Maybe<Array<LocationSubscriptionWhereInput>>,
};

export type LocationUpdateDataInput = {
  placeName?: Maybe<Scalars['String']>,
  latitude?: Maybe<Scalars['Float']>,
  longitude?: Maybe<Scalars['Float']>,
};

export type LocationUpdateInput = {
  placeName?: Maybe<Scalars['String']>,
  latitude?: Maybe<Scalars['Float']>,
  longitude?: Maybe<Scalars['Float']>,
};

export type LocationUpdateManyMutationInput = {
  placeName?: Maybe<Scalars['String']>,
  latitude?: Maybe<Scalars['Float']>,
  longitude?: Maybe<Scalars['Float']>,
};

export type LocationUpdateOneRequiredInput = {
  create?: Maybe<LocationCreateInput>,
  update?: Maybe<LocationUpdateDataInput>,
  upsert?: Maybe<LocationUpsertNestedInput>,
  connect?: Maybe<LocationWhereUniqueInput>,
};

export type LocationUpsertNestedInput = {
  update: LocationUpdateDataInput,
  create: LocationCreateInput,
};

export type LocationWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  placeName?: Maybe<Scalars['String']>,
  placeName_not?: Maybe<Scalars['String']>,
  placeName_in?: Maybe<Array<Scalars['String']>>,
  placeName_not_in?: Maybe<Array<Scalars['String']>>,
  placeName_lt?: Maybe<Scalars['String']>,
  placeName_lte?: Maybe<Scalars['String']>,
  placeName_gt?: Maybe<Scalars['String']>,
  placeName_gte?: Maybe<Scalars['String']>,
  placeName_contains?: Maybe<Scalars['String']>,
  placeName_not_contains?: Maybe<Scalars['String']>,
  placeName_starts_with?: Maybe<Scalars['String']>,
  placeName_not_starts_with?: Maybe<Scalars['String']>,
  placeName_ends_with?: Maybe<Scalars['String']>,
  placeName_not_ends_with?: Maybe<Scalars['String']>,
  latitude?: Maybe<Scalars['Float']>,
  latitude_not?: Maybe<Scalars['Float']>,
  latitude_in?: Maybe<Array<Scalars['Float']>>,
  latitude_not_in?: Maybe<Array<Scalars['Float']>>,
  latitude_lt?: Maybe<Scalars['Float']>,
  latitude_lte?: Maybe<Scalars['Float']>,
  latitude_gt?: Maybe<Scalars['Float']>,
  latitude_gte?: Maybe<Scalars['Float']>,
  longitude?: Maybe<Scalars['Float']>,
  longitude_not?: Maybe<Scalars['Float']>,
  longitude_in?: Maybe<Array<Scalars['Float']>>,
  longitude_not_in?: Maybe<Array<Scalars['Float']>>,
  longitude_lt?: Maybe<Scalars['Float']>,
  longitude_lte?: Maybe<Scalars['Float']>,
  longitude_gt?: Maybe<Scalars['Float']>,
  longitude_gte?: Maybe<Scalars['Float']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  AND?: Maybe<Array<LocationWhereInput>>,
  OR?: Maybe<Array<LocationWhereInput>>,
  NOT?: Maybe<Array<LocationWhereInput>>,
};

export type LocationWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};


export type Message = {
   __typename?: 'Message',
  id: Scalars['ID'],
  author: User,
  chat: Chat,
  content: Scalars['String'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  isSendByMe: Scalars['Boolean'],
  optimisticallyAdded: Scalars['Boolean'],
  optimisticallyCreated: Scalars['Boolean'],
  hasOptimisticError: Scalars['Boolean'],
};

export type MessageConnection = {
   __typename?: 'MessageConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<MessageEdge>>,
  aggregate: AggregateMessage,
};

export type MessageCreateInput = {
  id?: Maybe<Scalars['ID']>,
  author: UserCreateOneInput,
  chat: ChatCreateOneWithoutMessagesInput,
  content: Scalars['String'],
};

export type MessageCreateManyWithoutChatInput = {
  create?: Maybe<Array<MessageCreateWithoutChatInput>>,
  connect?: Maybe<Array<MessageWhereUniqueInput>>,
};

export type MessageCreateWithoutChatInput = {
  id?: Maybe<Scalars['ID']>,
  author: UserCreateOneInput,
  content: Scalars['String'],
};

export type MessageEdge = {
   __typename?: 'MessageEdge',
  node: Message,
  cursor: Scalars['String'],
};

export enum MessageOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ContentAsc = 'content_ASC',
  ContentDesc = 'content_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type MessagePreviousValues = {
   __typename?: 'MessagePreviousValues',
  id: Scalars['ID'],
  content: Scalars['String'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};

export type MessageScalarWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  content?: Maybe<Scalars['String']>,
  content_not?: Maybe<Scalars['String']>,
  content_in?: Maybe<Array<Scalars['String']>>,
  content_not_in?: Maybe<Array<Scalars['String']>>,
  content_lt?: Maybe<Scalars['String']>,
  content_lte?: Maybe<Scalars['String']>,
  content_gt?: Maybe<Scalars['String']>,
  content_gte?: Maybe<Scalars['String']>,
  content_contains?: Maybe<Scalars['String']>,
  content_not_contains?: Maybe<Scalars['String']>,
  content_starts_with?: Maybe<Scalars['String']>,
  content_not_starts_with?: Maybe<Scalars['String']>,
  content_ends_with?: Maybe<Scalars['String']>,
  content_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  AND?: Maybe<Array<MessageScalarWhereInput>>,
  OR?: Maybe<Array<MessageScalarWhereInput>>,
  NOT?: Maybe<Array<MessageScalarWhereInput>>,
};

export type MessageSubscriptionPayload = {
   __typename?: 'MessageSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Message>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<MessagePreviousValues>,
};

export type MessageSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<MessageWhereInput>,
  AND?: Maybe<Array<MessageSubscriptionWhereInput>>,
  OR?: Maybe<Array<MessageSubscriptionWhereInput>>,
  NOT?: Maybe<Array<MessageSubscriptionWhereInput>>,
};

export type MessageUpdateInput = {
  author?: Maybe<UserUpdateOneRequiredInput>,
  chat?: Maybe<ChatUpdateOneRequiredWithoutMessagesInput>,
  content?: Maybe<Scalars['String']>,
};

export type MessageUpdateManyDataInput = {
  content?: Maybe<Scalars['String']>,
};

export type MessageUpdateManyMutationInput = {
  content?: Maybe<Scalars['String']>,
};

export type MessageUpdateManyWithoutChatInput = {
  create?: Maybe<Array<MessageCreateWithoutChatInput>>,
  delete?: Maybe<Array<MessageWhereUniqueInput>>,
  connect?: Maybe<Array<MessageWhereUniqueInput>>,
  set?: Maybe<Array<MessageWhereUniqueInput>>,
  disconnect?: Maybe<Array<MessageWhereUniqueInput>>,
  update?: Maybe<Array<MessageUpdateWithWhereUniqueWithoutChatInput>>,
  upsert?: Maybe<Array<MessageUpsertWithWhereUniqueWithoutChatInput>>,
  deleteMany?: Maybe<Array<MessageScalarWhereInput>>,
  updateMany?: Maybe<Array<MessageUpdateManyWithWhereNestedInput>>,
};

export type MessageUpdateManyWithWhereNestedInput = {
  where: MessageScalarWhereInput,
  data: MessageUpdateManyDataInput,
};

export type MessageUpdateWithoutChatDataInput = {
  author?: Maybe<UserUpdateOneRequiredInput>,
  content?: Maybe<Scalars['String']>,
};

export type MessageUpdateWithWhereUniqueWithoutChatInput = {
  where: MessageWhereUniqueInput,
  data: MessageUpdateWithoutChatDataInput,
};

export type MessageUpsertWithWhereUniqueWithoutChatInput = {
  where: MessageWhereUniqueInput,
  update: MessageUpdateWithoutChatDataInput,
  create: MessageCreateWithoutChatInput,
};

export type MessageWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  author?: Maybe<UserWhereInput>,
  chat?: Maybe<ChatWhereInput>,
  content?: Maybe<Scalars['String']>,
  content_not?: Maybe<Scalars['String']>,
  content_in?: Maybe<Array<Scalars['String']>>,
  content_not_in?: Maybe<Array<Scalars['String']>>,
  content_lt?: Maybe<Scalars['String']>,
  content_lte?: Maybe<Scalars['String']>,
  content_gt?: Maybe<Scalars['String']>,
  content_gte?: Maybe<Scalars['String']>,
  content_contains?: Maybe<Scalars['String']>,
  content_not_contains?: Maybe<Scalars['String']>,
  content_starts_with?: Maybe<Scalars['String']>,
  content_not_starts_with?: Maybe<Scalars['String']>,
  content_ends_with?: Maybe<Scalars['String']>,
  content_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  AND?: Maybe<Array<MessageWhereInput>>,
  OR?: Maybe<Array<MessageWhereInput>>,
  NOT?: Maybe<Array<MessageWhereInput>>,
};

export type MessageWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Mutation = {
   __typename?: 'Mutation',
  createAlbum: Album,
  updateAlbum?: Maybe<Album>,
  upsertAlbum: Album,
  deleteAlbum?: Maybe<Album>,
  deleteManyAlbums: BatchPayload,
  createArtist: Artist,
  updateArtist?: Maybe<Artist>,
  updateManyArtists: BatchPayload,
  upsertArtist: Artist,
  deleteArtist?: Maybe<Artist>,
  deleteManyArtists: BatchPayload,
  createChat: Chat,
  updateChat?: Maybe<Chat>,
  upsertChat: Chat,
  deleteChat?: Maybe<Chat>,
  deleteManyChats: BatchPayload,
  createGame: Game,
  updateGame?: Maybe<Game>,
  updateManyGames: BatchPayload,
  upsertGame: Game,
  deleteGame?: Maybe<Game>,
  deleteManyGames: BatchPayload,
  createImage: Image,
  updateImage?: Maybe<Image>,
  updateManyImages: BatchPayload,
  upsertImage: Image,
  deleteImage?: Maybe<Image>,
  deleteManyImages: BatchPayload,
  createLocation: Location,
  updateLocation?: Maybe<Location>,
  updateManyLocations: BatchPayload,
  upsertLocation: Location,
  deleteLocation?: Maybe<Location>,
  deleteManyLocations: BatchPayload,
  createMessage: Message,
  updateMessage?: Maybe<Message>,
  updateManyMessages: BatchPayload,
  upsertMessage: Message,
  deleteMessage?: Maybe<Message>,
  deleteManyMessages: BatchPayload,
  createParty: Party,
  updateParty?: Maybe<Party>,
  updateManyParties: BatchPayload,
  upsertParty: Party,
  deleteParty?: Maybe<Party>,
  deleteManyParties: BatchPayload,
  createPartyCart: PartyCart,
  updatePartyCart?: Maybe<PartyCart>,
  upsertPartyCart: PartyCart,
  deletePartyCart?: Maybe<PartyCart>,
  deleteManyPartyCarts: BatchPayload,
  createPartyCartItem: PartyCartItem,
  updatePartyCartItem?: Maybe<PartyCartItem>,
  updateManyPartyCartItems: BatchPayload,
  upsertPartyCartItem: PartyCartItem,
  deletePartyCartItem?: Maybe<PartyCartItem>,
  deleteManyPartyCartItems: BatchPayload,
  createPartyInvitation: PartyInvitation,
  updatePartyInvitation?: Maybe<PartyInvitation>,
  updateManyPartyInvitations: BatchPayload,
  upsertPartyInvitation: PartyInvitation,
  deletePartyInvitation?: Maybe<PartyInvitation>,
  deleteManyPartyInvitations: BatchPayload,
  createPlaylist: Playlist,
  updatePlaylist?: Maybe<Playlist>,
  updateManyPlaylists: BatchPayload,
  upsertPlaylist: Playlist,
  deletePlaylist?: Maybe<Playlist>,
  deleteManyPlaylists: BatchPayload,
  createTrack: Track,
  updateTrack?: Maybe<Track>,
  updateManyTracks: BatchPayload,
  upsertTrack: Track,
  deleteTrack?: Maybe<Track>,
  deleteManyTracks: BatchPayload,
  createUser: User,
  updateUser?: Maybe<User>,
  updateManyUsers: BatchPayload,
  upsertUser: User,
  deleteUser?: Maybe<User>,
  deleteManyUsers: BatchPayload,
  joinParty?: Maybe<Scalars['Boolean']>,
  signup: AuthPayload,
  login: AuthPayload,
  updateMe: User,
  inviteToFriends: User,
  requestReset?: Maybe<SuccessMessage>,
  resetPassword?: Maybe<AuthPayload>,
};


export type MutationCreateAlbumArgs = {
  data: AlbumCreateInput
};


export type MutationUpdateAlbumArgs = {
  data: AlbumUpdateInput,
  where: AlbumWhereUniqueInput
};


export type MutationUpsertAlbumArgs = {
  where: AlbumWhereUniqueInput,
  create: AlbumCreateInput,
  update: AlbumUpdateInput
};


export type MutationDeleteAlbumArgs = {
  where: AlbumWhereUniqueInput
};


export type MutationDeleteManyAlbumsArgs = {
  where?: Maybe<AlbumWhereInput>
};


export type MutationCreateArtistArgs = {
  data: ArtistCreateInput
};


export type MutationUpdateArtistArgs = {
  data: ArtistUpdateInput,
  where: ArtistWhereUniqueInput
};


export type MutationUpdateManyArtistsArgs = {
  data: ArtistUpdateManyMutationInput,
  where?: Maybe<ArtistWhereInput>
};


export type MutationUpsertArtistArgs = {
  where: ArtistWhereUniqueInput,
  create: ArtistCreateInput,
  update: ArtistUpdateInput
};


export type MutationDeleteArtistArgs = {
  where: ArtistWhereUniqueInput
};


export type MutationDeleteManyArtistsArgs = {
  where?: Maybe<ArtistWhereInput>
};


export type MutationCreateChatArgs = {
  data: ChatCreateInput
};


export type MutationUpdateChatArgs = {
  data: ChatUpdateInput,
  where: ChatWhereUniqueInput
};


export type MutationUpsertChatArgs = {
  where: ChatWhereUniqueInput,
  create: ChatCreateInput,
  update: ChatUpdateInput
};


export type MutationDeleteChatArgs = {
  where: ChatWhereUniqueInput
};


export type MutationDeleteManyChatsArgs = {
  where?: Maybe<ChatWhereInput>
};


export type MutationCreateGameArgs = {
  data: GameCreateInput
};


export type MutationUpdateGameArgs = {
  data: GameUpdateInput,
  where: GameWhereUniqueInput
};


export type MutationUpdateManyGamesArgs = {
  data: GameUpdateManyMutationInput,
  where?: Maybe<GameWhereInput>
};


export type MutationUpsertGameArgs = {
  where: GameWhereUniqueInput,
  create: GameCreateInput,
  update: GameUpdateInput
};


export type MutationDeleteGameArgs = {
  where: GameWhereUniqueInput
};


export type MutationDeleteManyGamesArgs = {
  where?: Maybe<GameWhereInput>
};


export type MutationCreateImageArgs = {
  data: ImageCreateInput
};


export type MutationUpdateImageArgs = {
  data: ImageUpdateInput,
  where: ImageWhereUniqueInput
};


export type MutationUpdateManyImagesArgs = {
  data: ImageUpdateManyMutationInput,
  where?: Maybe<ImageWhereInput>
};


export type MutationUpsertImageArgs = {
  where: ImageWhereUniqueInput,
  create: ImageCreateInput,
  update: ImageUpdateInput
};


export type MutationDeleteImageArgs = {
  where: ImageWhereUniqueInput
};


export type MutationDeleteManyImagesArgs = {
  where?: Maybe<ImageWhereInput>
};


export type MutationCreateLocationArgs = {
  data: LocationCreateInput
};


export type MutationUpdateLocationArgs = {
  data: LocationUpdateInput,
  where: LocationWhereUniqueInput
};


export type MutationUpdateManyLocationsArgs = {
  data: LocationUpdateManyMutationInput,
  where?: Maybe<LocationWhereInput>
};


export type MutationUpsertLocationArgs = {
  where: LocationWhereUniqueInput,
  create: LocationCreateInput,
  update: LocationUpdateInput
};


export type MutationDeleteLocationArgs = {
  where: LocationWhereUniqueInput
};


export type MutationDeleteManyLocationsArgs = {
  where?: Maybe<LocationWhereInput>
};


export type MutationCreateMessageArgs = {
  data: MessageCreateInput
};


export type MutationUpdateMessageArgs = {
  data: MessageUpdateInput,
  where: MessageWhereUniqueInput
};


export type MutationUpdateManyMessagesArgs = {
  data: MessageUpdateManyMutationInput,
  where?: Maybe<MessageWhereInput>
};


export type MutationUpsertMessageArgs = {
  where: MessageWhereUniqueInput,
  create: MessageCreateInput,
  update: MessageUpdateInput
};


export type MutationDeleteMessageArgs = {
  where: MessageWhereUniqueInput
};


export type MutationDeleteManyMessagesArgs = {
  where?: Maybe<MessageWhereInput>
};


export type MutationCreatePartyArgs = {
  data: PartyCreateInput
};


export type MutationUpdatePartyArgs = {
  data: PartyUpdateInput,
  where: PartyWhereUniqueInput
};


export type MutationUpdateManyPartiesArgs = {
  data: PartyUpdateManyMutationInput,
  where?: Maybe<PartyWhereInput>
};


export type MutationUpsertPartyArgs = {
  where: PartyWhereUniqueInput,
  create: PartyCreateInput,
  update: PartyUpdateInput
};


export type MutationDeletePartyArgs = {
  where: PartyWhereUniqueInput
};


export type MutationDeleteManyPartiesArgs = {
  where?: Maybe<PartyWhereInput>
};


export type MutationCreatePartyCartArgs = {
  data: PartyCartCreateInput
};


export type MutationUpdatePartyCartArgs = {
  data: PartyCartUpdateInput,
  where: PartyCartWhereUniqueInput
};


export type MutationUpsertPartyCartArgs = {
  where: PartyCartWhereUniqueInput,
  create: PartyCartCreateInput,
  update: PartyCartUpdateInput
};


export type MutationDeletePartyCartArgs = {
  where: PartyCartWhereUniqueInput
};


export type MutationDeleteManyPartyCartsArgs = {
  where?: Maybe<PartyCartWhereInput>
};


export type MutationCreatePartyCartItemArgs = {
  data: PartyCartItemCreateInput
};


export type MutationUpdatePartyCartItemArgs = {
  data: PartyCartItemUpdateInput,
  where: PartyCartItemWhereUniqueInput
};


export type MutationUpdateManyPartyCartItemsArgs = {
  data: PartyCartItemUpdateManyMutationInput,
  where?: Maybe<PartyCartItemWhereInput>
};


export type MutationUpsertPartyCartItemArgs = {
  where: PartyCartItemWhereUniqueInput,
  create: PartyCartItemCreateInput,
  update: PartyCartItemUpdateInput
};


export type MutationDeletePartyCartItemArgs = {
  where: PartyCartItemWhereUniqueInput
};


export type MutationDeleteManyPartyCartItemsArgs = {
  where?: Maybe<PartyCartItemWhereInput>
};


export type MutationCreatePartyInvitationArgs = {
  data: PartyInvitationCreateInput
};


export type MutationUpdatePartyInvitationArgs = {
  data: PartyInvitationUpdateInput,
  where: PartyInvitationWhereUniqueInput
};


export type MutationUpdateManyPartyInvitationsArgs = {
  data: PartyInvitationUpdateManyMutationInput,
  where?: Maybe<PartyInvitationWhereInput>
};


export type MutationUpsertPartyInvitationArgs = {
  where: PartyInvitationWhereUniqueInput,
  create: PartyInvitationCreateInput,
  update: PartyInvitationUpdateInput
};


export type MutationDeletePartyInvitationArgs = {
  where: PartyInvitationWhereUniqueInput
};


export type MutationDeleteManyPartyInvitationsArgs = {
  where?: Maybe<PartyInvitationWhereInput>
};


export type MutationCreatePlaylistArgs = {
  data: PlaylistCreateInput
};


export type MutationUpdatePlaylistArgs = {
  data: PlaylistUpdateInput,
  where: PlaylistWhereUniqueInput
};


export type MutationUpdateManyPlaylistsArgs = {
  data: PlaylistUpdateManyMutationInput,
  where?: Maybe<PlaylistWhereInput>
};


export type MutationUpsertPlaylistArgs = {
  where: PlaylistWhereUniqueInput,
  create: PlaylistCreateInput,
  update: PlaylistUpdateInput
};


export type MutationDeletePlaylistArgs = {
  where: PlaylistWhereUniqueInput
};


export type MutationDeleteManyPlaylistsArgs = {
  where?: Maybe<PlaylistWhereInput>
};


export type MutationCreateTrackArgs = {
  data: TrackCreateInput
};


export type MutationUpdateTrackArgs = {
  data: TrackUpdateInput,
  where: TrackWhereUniqueInput
};


export type MutationUpdateManyTracksArgs = {
  data: TrackUpdateManyMutationInput,
  where?: Maybe<TrackWhereInput>
};


export type MutationUpsertTrackArgs = {
  where: TrackWhereUniqueInput,
  create: TrackCreateInput,
  update: TrackUpdateInput
};


export type MutationDeleteTrackArgs = {
  where: TrackWhereUniqueInput
};


export type MutationDeleteManyTracksArgs = {
  where?: Maybe<TrackWhereInput>
};


export type MutationCreateUserArgs = {
  data: UserCreateInput
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput,
  where: UserWhereUniqueInput
};


export type MutationUpdateManyUsersArgs = {
  data: UserUpdateManyMutationInput,
  where?: Maybe<UserWhereInput>
};


export type MutationUpsertUserArgs = {
  where: UserWhereUniqueInput,
  create: UserCreateInput,
  update: UserUpdateInput
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput
};


export type MutationDeleteManyUsersArgs = {
  where?: Maybe<UserWhereInput>
};


export type MutationJoinPartyArgs = {
  partyId: Scalars['ID']
};


export type MutationSignupArgs = {
  email: Scalars['String'],
  password: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String']
};


export type MutationLoginArgs = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type MutationUpdateMeArgs = {
  name?: Maybe<Scalars['String']>
};


export type MutationInviteToFriendsArgs = {
  sender: Scalars['ID'],
  receiver: Scalars['ID']
};


export type MutationRequestResetArgs = {
  email: Scalars['String']
};


export type MutationResetPasswordArgs = {
  resetToken: Scalars['String'],
  password: Scalars['String'],
  confirmPassword: Scalars['String']
};

export enum MutationType {
  Created = 'CREATED',
  Updated = 'UPDATED',
  Deleted = 'DELETED'
}

export type Node = {
  id: Scalars['ID'],
};

export type PageInfo = {
   __typename?: 'PageInfo',
  hasNextPage: Scalars['Boolean'],
  hasPreviousPage: Scalars['Boolean'],
  startCursor?: Maybe<Scalars['String']>,
  endCursor?: Maybe<Scalars['String']>,
};

export type Party = {
   __typename?: 'Party',
  id: Scalars['ID'],
  title: Scalars['String'],
  normalizedTitle: Scalars['String'],
  description: Scalars['String'],
  author: User,
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  location: Location,
  games?: Maybe<Array<Game>>,
  colorTint: Scalars['String'],
  isPublic?: Maybe<Scalars['Boolean']>,
  members?: Maybe<Array<User>>,
  start: Scalars['DateTime'],
  end: Scalars['DateTime'],
  inviteSecret: Scalars['String'],
  playlist?: Maybe<Playlist>,
  cart?: Maybe<PartyCart>,
};


export type PartyGamesArgs = {
  where?: Maybe<GameWhereInput>,
  orderBy?: Maybe<GameOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type PartyMembersArgs = {
  where?: Maybe<UserWhereInput>,
  orderBy?: Maybe<UserOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type PartyCart = {
   __typename?: 'PartyCart',
  id: Scalars['ID'],
  party: Party,
  items?: Maybe<Array<PartyCartItem>>,
};


export type PartyCartItemsArgs = {
  where?: Maybe<PartyCartItemWhereInput>,
  orderBy?: Maybe<PartyCartItemOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type PartyCartConnection = {
   __typename?: 'PartyCartConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<PartyCartEdge>>,
  aggregate: AggregatePartyCart,
};

export type PartyCartCreateInput = {
  id?: Maybe<Scalars['ID']>,
  party: PartyCreateOneWithoutCartInput,
  items?: Maybe<PartyCartItemCreateManyWithoutCartInput>,
};

export type PartyCartCreateOneWithoutItemsInput = {
  create?: Maybe<PartyCartCreateWithoutItemsInput>,
  connect?: Maybe<PartyCartWhereUniqueInput>,
};

export type PartyCartCreateOneWithoutPartyInput = {
  create?: Maybe<PartyCartCreateWithoutPartyInput>,
  connect?: Maybe<PartyCartWhereUniqueInput>,
};

export type PartyCartCreateWithoutItemsInput = {
  id?: Maybe<Scalars['ID']>,
  party: PartyCreateOneWithoutCartInput,
};

export type PartyCartCreateWithoutPartyInput = {
  id?: Maybe<Scalars['ID']>,
  items?: Maybe<PartyCartItemCreateManyWithoutCartInput>,
};

export type PartyCartEdge = {
   __typename?: 'PartyCartEdge',
  node: PartyCart,
  cursor: Scalars['String'],
};

export type PartyCartItem = {
   __typename?: 'PartyCartItem',
  id: Scalars['ID'],
  cart: PartyCart,
  user?: Maybe<User>,
  name: Scalars['String'],
  description: Scalars['String'],
  price: Scalars['Float'],
  quantity: Scalars['Int'],
};

export type PartyCartItemConnection = {
   __typename?: 'PartyCartItemConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<PartyCartItemEdge>>,
  aggregate: AggregatePartyCartItem,
};

export type PartyCartItemCreateInput = {
  id?: Maybe<Scalars['ID']>,
  cart: PartyCartCreateOneWithoutItemsInput,
  user?: Maybe<UserCreateOneInput>,
  name: Scalars['String'],
  description: Scalars['String'],
  price: Scalars['Float'],
  quantity?: Maybe<Scalars['Int']>,
};

export type PartyCartItemCreateManyWithoutCartInput = {
  create?: Maybe<Array<PartyCartItemCreateWithoutCartInput>>,
  connect?: Maybe<Array<PartyCartItemWhereUniqueInput>>,
};

export type PartyCartItemCreateWithoutCartInput = {
  id?: Maybe<Scalars['ID']>,
  user?: Maybe<UserCreateOneInput>,
  name: Scalars['String'],
  description: Scalars['String'],
  price: Scalars['Float'],
  quantity?: Maybe<Scalars['Int']>,
};

export type PartyCartItemEdge = {
   __typename?: 'PartyCartItemEdge',
  node: PartyCartItem,
  cursor: Scalars['String'],
};

export enum PartyCartItemOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  QuantityAsc = 'quantity_ASC',
  QuantityDesc = 'quantity_DESC'
}

export type PartyCartItemPreviousValues = {
   __typename?: 'PartyCartItemPreviousValues',
  id: Scalars['ID'],
  name: Scalars['String'],
  description: Scalars['String'],
  price: Scalars['Float'],
  quantity: Scalars['Int'],
};

export type PartyCartItemScalarWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  description_not?: Maybe<Scalars['String']>,
  description_in?: Maybe<Array<Scalars['String']>>,
  description_not_in?: Maybe<Array<Scalars['String']>>,
  description_lt?: Maybe<Scalars['String']>,
  description_lte?: Maybe<Scalars['String']>,
  description_gt?: Maybe<Scalars['String']>,
  description_gte?: Maybe<Scalars['String']>,
  description_contains?: Maybe<Scalars['String']>,
  description_not_contains?: Maybe<Scalars['String']>,
  description_starts_with?: Maybe<Scalars['String']>,
  description_not_starts_with?: Maybe<Scalars['String']>,
  description_ends_with?: Maybe<Scalars['String']>,
  description_not_ends_with?: Maybe<Scalars['String']>,
  price?: Maybe<Scalars['Float']>,
  price_not?: Maybe<Scalars['Float']>,
  price_in?: Maybe<Array<Scalars['Float']>>,
  price_not_in?: Maybe<Array<Scalars['Float']>>,
  price_lt?: Maybe<Scalars['Float']>,
  price_lte?: Maybe<Scalars['Float']>,
  price_gt?: Maybe<Scalars['Float']>,
  price_gte?: Maybe<Scalars['Float']>,
  quantity?: Maybe<Scalars['Int']>,
  quantity_not?: Maybe<Scalars['Int']>,
  quantity_in?: Maybe<Array<Scalars['Int']>>,
  quantity_not_in?: Maybe<Array<Scalars['Int']>>,
  quantity_lt?: Maybe<Scalars['Int']>,
  quantity_lte?: Maybe<Scalars['Int']>,
  quantity_gt?: Maybe<Scalars['Int']>,
  quantity_gte?: Maybe<Scalars['Int']>,
  AND?: Maybe<Array<PartyCartItemScalarWhereInput>>,
  OR?: Maybe<Array<PartyCartItemScalarWhereInput>>,
  NOT?: Maybe<Array<PartyCartItemScalarWhereInput>>,
};

export type PartyCartItemSubscriptionPayload = {
   __typename?: 'PartyCartItemSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<PartyCartItem>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<PartyCartItemPreviousValues>,
};

export type PartyCartItemSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<PartyCartItemWhereInput>,
  AND?: Maybe<Array<PartyCartItemSubscriptionWhereInput>>,
  OR?: Maybe<Array<PartyCartItemSubscriptionWhereInput>>,
  NOT?: Maybe<Array<PartyCartItemSubscriptionWhereInput>>,
};

export type PartyCartItemUpdateInput = {
  cart?: Maybe<PartyCartUpdateOneRequiredWithoutItemsInput>,
  user?: Maybe<UserUpdateOneInput>,
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  price?: Maybe<Scalars['Float']>,
  quantity?: Maybe<Scalars['Int']>,
};

export type PartyCartItemUpdateManyDataInput = {
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  price?: Maybe<Scalars['Float']>,
  quantity?: Maybe<Scalars['Int']>,
};

export type PartyCartItemUpdateManyMutationInput = {
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  price?: Maybe<Scalars['Float']>,
  quantity?: Maybe<Scalars['Int']>,
};

export type PartyCartItemUpdateManyWithoutCartInput = {
  create?: Maybe<Array<PartyCartItemCreateWithoutCartInput>>,
  delete?: Maybe<Array<PartyCartItemWhereUniqueInput>>,
  connect?: Maybe<Array<PartyCartItemWhereUniqueInput>>,
  set?: Maybe<Array<PartyCartItemWhereUniqueInput>>,
  disconnect?: Maybe<Array<PartyCartItemWhereUniqueInput>>,
  update?: Maybe<Array<PartyCartItemUpdateWithWhereUniqueWithoutCartInput>>,
  upsert?: Maybe<Array<PartyCartItemUpsertWithWhereUniqueWithoutCartInput>>,
  deleteMany?: Maybe<Array<PartyCartItemScalarWhereInput>>,
  updateMany?: Maybe<Array<PartyCartItemUpdateManyWithWhereNestedInput>>,
};

export type PartyCartItemUpdateManyWithWhereNestedInput = {
  where: PartyCartItemScalarWhereInput,
  data: PartyCartItemUpdateManyDataInput,
};

export type PartyCartItemUpdateWithoutCartDataInput = {
  user?: Maybe<UserUpdateOneInput>,
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  price?: Maybe<Scalars['Float']>,
  quantity?: Maybe<Scalars['Int']>,
};

export type PartyCartItemUpdateWithWhereUniqueWithoutCartInput = {
  where: PartyCartItemWhereUniqueInput,
  data: PartyCartItemUpdateWithoutCartDataInput,
};

export type PartyCartItemUpsertWithWhereUniqueWithoutCartInput = {
  where: PartyCartItemWhereUniqueInput,
  update: PartyCartItemUpdateWithoutCartDataInput,
  create: PartyCartItemCreateWithoutCartInput,
};

export type PartyCartItemWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  cart?: Maybe<PartyCartWhereInput>,
  user?: Maybe<UserWhereInput>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  description_not?: Maybe<Scalars['String']>,
  description_in?: Maybe<Array<Scalars['String']>>,
  description_not_in?: Maybe<Array<Scalars['String']>>,
  description_lt?: Maybe<Scalars['String']>,
  description_lte?: Maybe<Scalars['String']>,
  description_gt?: Maybe<Scalars['String']>,
  description_gte?: Maybe<Scalars['String']>,
  description_contains?: Maybe<Scalars['String']>,
  description_not_contains?: Maybe<Scalars['String']>,
  description_starts_with?: Maybe<Scalars['String']>,
  description_not_starts_with?: Maybe<Scalars['String']>,
  description_ends_with?: Maybe<Scalars['String']>,
  description_not_ends_with?: Maybe<Scalars['String']>,
  price?: Maybe<Scalars['Float']>,
  price_not?: Maybe<Scalars['Float']>,
  price_in?: Maybe<Array<Scalars['Float']>>,
  price_not_in?: Maybe<Array<Scalars['Float']>>,
  price_lt?: Maybe<Scalars['Float']>,
  price_lte?: Maybe<Scalars['Float']>,
  price_gt?: Maybe<Scalars['Float']>,
  price_gte?: Maybe<Scalars['Float']>,
  quantity?: Maybe<Scalars['Int']>,
  quantity_not?: Maybe<Scalars['Int']>,
  quantity_in?: Maybe<Array<Scalars['Int']>>,
  quantity_not_in?: Maybe<Array<Scalars['Int']>>,
  quantity_lt?: Maybe<Scalars['Int']>,
  quantity_lte?: Maybe<Scalars['Int']>,
  quantity_gt?: Maybe<Scalars['Int']>,
  quantity_gte?: Maybe<Scalars['Int']>,
  AND?: Maybe<Array<PartyCartItemWhereInput>>,
  OR?: Maybe<Array<PartyCartItemWhereInput>>,
  NOT?: Maybe<Array<PartyCartItemWhereInput>>,
};

export type PartyCartItemWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export enum PartyCartOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type PartyCartPreviousValues = {
   __typename?: 'PartyCartPreviousValues',
  id: Scalars['ID'],
};

export type PartyCartSubscriptionPayload = {
   __typename?: 'PartyCartSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<PartyCart>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<PartyCartPreviousValues>,
};

export type PartyCartSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<PartyCartWhereInput>,
  AND?: Maybe<Array<PartyCartSubscriptionWhereInput>>,
  OR?: Maybe<Array<PartyCartSubscriptionWhereInput>>,
  NOT?: Maybe<Array<PartyCartSubscriptionWhereInput>>,
};

export type PartyCartUpdateInput = {
  party?: Maybe<PartyUpdateOneRequiredWithoutCartInput>,
  items?: Maybe<PartyCartItemUpdateManyWithoutCartInput>,
};

export type PartyCartUpdateOneRequiredWithoutItemsInput = {
  create?: Maybe<PartyCartCreateWithoutItemsInput>,
  update?: Maybe<PartyCartUpdateWithoutItemsDataInput>,
  upsert?: Maybe<PartyCartUpsertWithoutItemsInput>,
  connect?: Maybe<PartyCartWhereUniqueInput>,
};

export type PartyCartUpdateOneWithoutPartyInput = {
  create?: Maybe<PartyCartCreateWithoutPartyInput>,
  update?: Maybe<PartyCartUpdateWithoutPartyDataInput>,
  upsert?: Maybe<PartyCartUpsertWithoutPartyInput>,
  delete?: Maybe<Scalars['Boolean']>,
  disconnect?: Maybe<Scalars['Boolean']>,
  connect?: Maybe<PartyCartWhereUniqueInput>,
};

export type PartyCartUpdateWithoutItemsDataInput = {
  party?: Maybe<PartyUpdateOneRequiredWithoutCartInput>,
};

export type PartyCartUpdateWithoutPartyDataInput = {
  items?: Maybe<PartyCartItemUpdateManyWithoutCartInput>,
};

export type PartyCartUpsertWithoutItemsInput = {
  update: PartyCartUpdateWithoutItemsDataInput,
  create: PartyCartCreateWithoutItemsInput,
};

export type PartyCartUpsertWithoutPartyInput = {
  update: PartyCartUpdateWithoutPartyDataInput,
  create: PartyCartCreateWithoutPartyInput,
};

export type PartyCartWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  party?: Maybe<PartyWhereInput>,
  items_every?: Maybe<PartyCartItemWhereInput>,
  items_some?: Maybe<PartyCartItemWhereInput>,
  items_none?: Maybe<PartyCartItemWhereInput>,
  AND?: Maybe<Array<PartyCartWhereInput>>,
  OR?: Maybe<Array<PartyCartWhereInput>>,
  NOT?: Maybe<Array<PartyCartWhereInput>>,
};

export type PartyCartWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type PartyConnection = {
   __typename?: 'PartyConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<PartyEdge>>,
  aggregate: AggregateParty,
};

export type PartyCreateInput = {
  id?: Maybe<Scalars['ID']>,
  title: Scalars['String'],
  normalizedTitle: Scalars['String'],
  description: Scalars['String'],
  author: UserCreateOneInput,
  location: LocationCreateOneInput,
  games?: Maybe<GameCreateManyInput>,
  colorTint: Scalars['String'],
  isPublic?: Maybe<Scalars['Boolean']>,
  members?: Maybe<UserCreateManyWithoutPartiesInput>,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  inviteSecret: Scalars['String'],
  playlist?: Maybe<PlaylistCreateOneWithoutPartiesInput>,
  cart?: Maybe<PartyCartCreateOneWithoutPartyInput>,
};

export type PartyCreateManyWithoutMembersInput = {
  create?: Maybe<Array<PartyCreateWithoutMembersInput>>,
  connect?: Maybe<Array<PartyWhereUniqueInput>>,
};

export type PartyCreateManyWithoutPlaylistInput = {
  create?: Maybe<Array<PartyCreateWithoutPlaylistInput>>,
  connect?: Maybe<Array<PartyWhereUniqueInput>>,
};

export type PartyCreateOneInput = {
  create?: Maybe<PartyCreateInput>,
  connect?: Maybe<PartyWhereUniqueInput>,
};

export type PartyCreateOneWithoutCartInput = {
  create?: Maybe<PartyCreateWithoutCartInput>,
  connect?: Maybe<PartyWhereUniqueInput>,
};

export type PartyCreateWithoutCartInput = {
  id?: Maybe<Scalars['ID']>,
  title: Scalars['String'],
  normalizedTitle: Scalars['String'],
  description: Scalars['String'],
  author: UserCreateOneInput,
  location: LocationCreateOneInput,
  games?: Maybe<GameCreateManyInput>,
  colorTint: Scalars['String'],
  isPublic?: Maybe<Scalars['Boolean']>,
  members?: Maybe<UserCreateManyWithoutPartiesInput>,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  inviteSecret: Scalars['String'],
  playlist?: Maybe<PlaylistCreateOneWithoutPartiesInput>,
};

export type PartyCreateWithoutMembersInput = {
  id?: Maybe<Scalars['ID']>,
  title: Scalars['String'],
  normalizedTitle: Scalars['String'],
  description: Scalars['String'],
  author: UserCreateOneInput,
  location: LocationCreateOneInput,
  games?: Maybe<GameCreateManyInput>,
  colorTint: Scalars['String'],
  isPublic?: Maybe<Scalars['Boolean']>,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  inviteSecret: Scalars['String'],
  playlist?: Maybe<PlaylistCreateOneWithoutPartiesInput>,
  cart?: Maybe<PartyCartCreateOneWithoutPartyInput>,
};

export type PartyCreateWithoutPlaylistInput = {
  id?: Maybe<Scalars['ID']>,
  title: Scalars['String'],
  normalizedTitle: Scalars['String'],
  description: Scalars['String'],
  author: UserCreateOneInput,
  location: LocationCreateOneInput,
  games?: Maybe<GameCreateManyInput>,
  colorTint: Scalars['String'],
  isPublic?: Maybe<Scalars['Boolean']>,
  members?: Maybe<UserCreateManyWithoutPartiesInput>,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  inviteSecret: Scalars['String'],
  cart?: Maybe<PartyCartCreateOneWithoutPartyInput>,
};

export type PartyEdge = {
   __typename?: 'PartyEdge',
  node: Party,
  cursor: Scalars['String'],
};

export type PartyInvitation = {
   __typename?: 'PartyInvitation',
  id: Scalars['ID'],
  invitedBy: User,
  user: User,
  party: Party,
  invitedUserId: Scalars['String'],
  partyId: Scalars['String'],
  createdAt: Scalars['DateTime'],
};

export type PartyInvitationConnection = {
   __typename?: 'PartyInvitationConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<PartyInvitationEdge>>,
  aggregate: AggregatePartyInvitation,
};

export type PartyInvitationCreateInput = {
  id?: Maybe<Scalars['ID']>,
  invitedBy: UserCreateOneInput,
  user: UserCreateOneWithoutPendingPartyInvitationsInput,
  party: PartyCreateOneInput,
  invitedUserId: Scalars['String'],
  partyId: Scalars['String'],
};

export type PartyInvitationCreateManyWithoutUserInput = {
  create?: Maybe<Array<PartyInvitationCreateWithoutUserInput>>,
  connect?: Maybe<Array<PartyInvitationWhereUniqueInput>>,
};

export type PartyInvitationCreateWithoutUserInput = {
  id?: Maybe<Scalars['ID']>,
  invitedBy: UserCreateOneInput,
  party: PartyCreateOneInput,
  invitedUserId: Scalars['String'],
  partyId: Scalars['String'],
};

export type PartyInvitationEdge = {
   __typename?: 'PartyInvitationEdge',
  node: PartyInvitation,
  cursor: Scalars['String'],
};

export enum PartyInvitationOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InvitedUserIdAsc = 'invitedUserId_ASC',
  InvitedUserIdDesc = 'invitedUserId_DESC',
  PartyIdAsc = 'partyId_ASC',
  PartyIdDesc = 'partyId_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC'
}

export type PartyInvitationPreviousValues = {
   __typename?: 'PartyInvitationPreviousValues',
  id: Scalars['ID'],
  invitedUserId: Scalars['String'],
  partyId: Scalars['String'],
  createdAt: Scalars['DateTime'],
};

export type PartyInvitationScalarWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  invitedUserId?: Maybe<Scalars['String']>,
  invitedUserId_not?: Maybe<Scalars['String']>,
  invitedUserId_in?: Maybe<Array<Scalars['String']>>,
  invitedUserId_not_in?: Maybe<Array<Scalars['String']>>,
  invitedUserId_lt?: Maybe<Scalars['String']>,
  invitedUserId_lte?: Maybe<Scalars['String']>,
  invitedUserId_gt?: Maybe<Scalars['String']>,
  invitedUserId_gte?: Maybe<Scalars['String']>,
  invitedUserId_contains?: Maybe<Scalars['String']>,
  invitedUserId_not_contains?: Maybe<Scalars['String']>,
  invitedUserId_starts_with?: Maybe<Scalars['String']>,
  invitedUserId_not_starts_with?: Maybe<Scalars['String']>,
  invitedUserId_ends_with?: Maybe<Scalars['String']>,
  invitedUserId_not_ends_with?: Maybe<Scalars['String']>,
  partyId?: Maybe<Scalars['String']>,
  partyId_not?: Maybe<Scalars['String']>,
  partyId_in?: Maybe<Array<Scalars['String']>>,
  partyId_not_in?: Maybe<Array<Scalars['String']>>,
  partyId_lt?: Maybe<Scalars['String']>,
  partyId_lte?: Maybe<Scalars['String']>,
  partyId_gt?: Maybe<Scalars['String']>,
  partyId_gte?: Maybe<Scalars['String']>,
  partyId_contains?: Maybe<Scalars['String']>,
  partyId_not_contains?: Maybe<Scalars['String']>,
  partyId_starts_with?: Maybe<Scalars['String']>,
  partyId_not_starts_with?: Maybe<Scalars['String']>,
  partyId_ends_with?: Maybe<Scalars['String']>,
  partyId_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  AND?: Maybe<Array<PartyInvitationScalarWhereInput>>,
  OR?: Maybe<Array<PartyInvitationScalarWhereInput>>,
  NOT?: Maybe<Array<PartyInvitationScalarWhereInput>>,
};

export type PartyInvitationSubscriptionPayload = {
   __typename?: 'PartyInvitationSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<PartyInvitation>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<PartyInvitationPreviousValues>,
};

export type PartyInvitationSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<PartyInvitationWhereInput>,
  AND?: Maybe<Array<PartyInvitationSubscriptionWhereInput>>,
  OR?: Maybe<Array<PartyInvitationSubscriptionWhereInput>>,
  NOT?: Maybe<Array<PartyInvitationSubscriptionWhereInput>>,
};

export type PartyInvitationUpdateInput = {
  invitedBy?: Maybe<UserUpdateOneRequiredInput>,
  user?: Maybe<UserUpdateOneRequiredWithoutPendingPartyInvitationsInput>,
  party?: Maybe<PartyUpdateOneRequiredInput>,
  invitedUserId?: Maybe<Scalars['String']>,
  partyId?: Maybe<Scalars['String']>,
};

export type PartyInvitationUpdateManyDataInput = {
  invitedUserId?: Maybe<Scalars['String']>,
  partyId?: Maybe<Scalars['String']>,
};

export type PartyInvitationUpdateManyMutationInput = {
  invitedUserId?: Maybe<Scalars['String']>,
  partyId?: Maybe<Scalars['String']>,
};

export type PartyInvitationUpdateManyWithoutUserInput = {
  create?: Maybe<Array<PartyInvitationCreateWithoutUserInput>>,
  delete?: Maybe<Array<PartyInvitationWhereUniqueInput>>,
  connect?: Maybe<Array<PartyInvitationWhereUniqueInput>>,
  set?: Maybe<Array<PartyInvitationWhereUniqueInput>>,
  disconnect?: Maybe<Array<PartyInvitationWhereUniqueInput>>,
  update?: Maybe<Array<PartyInvitationUpdateWithWhereUniqueWithoutUserInput>>,
  upsert?: Maybe<Array<PartyInvitationUpsertWithWhereUniqueWithoutUserInput>>,
  deleteMany?: Maybe<Array<PartyInvitationScalarWhereInput>>,
  updateMany?: Maybe<Array<PartyInvitationUpdateManyWithWhereNestedInput>>,
};

export type PartyInvitationUpdateManyWithWhereNestedInput = {
  where: PartyInvitationScalarWhereInput,
  data: PartyInvitationUpdateManyDataInput,
};

export type PartyInvitationUpdateWithoutUserDataInput = {
  invitedBy?: Maybe<UserUpdateOneRequiredInput>,
  party?: Maybe<PartyUpdateOneRequiredInput>,
  invitedUserId?: Maybe<Scalars['String']>,
  partyId?: Maybe<Scalars['String']>,
};

export type PartyInvitationUpdateWithWhereUniqueWithoutUserInput = {
  where: PartyInvitationWhereUniqueInput,
  data: PartyInvitationUpdateWithoutUserDataInput,
};

export type PartyInvitationUpsertWithWhereUniqueWithoutUserInput = {
  where: PartyInvitationWhereUniqueInput,
  update: PartyInvitationUpdateWithoutUserDataInput,
  create: PartyInvitationCreateWithoutUserInput,
};

export type PartyInvitationWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  invitedBy?: Maybe<UserWhereInput>,
  user?: Maybe<UserWhereInput>,
  party?: Maybe<PartyWhereInput>,
  invitedUserId?: Maybe<Scalars['String']>,
  invitedUserId_not?: Maybe<Scalars['String']>,
  invitedUserId_in?: Maybe<Array<Scalars['String']>>,
  invitedUserId_not_in?: Maybe<Array<Scalars['String']>>,
  invitedUserId_lt?: Maybe<Scalars['String']>,
  invitedUserId_lte?: Maybe<Scalars['String']>,
  invitedUserId_gt?: Maybe<Scalars['String']>,
  invitedUserId_gte?: Maybe<Scalars['String']>,
  invitedUserId_contains?: Maybe<Scalars['String']>,
  invitedUserId_not_contains?: Maybe<Scalars['String']>,
  invitedUserId_starts_with?: Maybe<Scalars['String']>,
  invitedUserId_not_starts_with?: Maybe<Scalars['String']>,
  invitedUserId_ends_with?: Maybe<Scalars['String']>,
  invitedUserId_not_ends_with?: Maybe<Scalars['String']>,
  partyId?: Maybe<Scalars['String']>,
  partyId_not?: Maybe<Scalars['String']>,
  partyId_in?: Maybe<Array<Scalars['String']>>,
  partyId_not_in?: Maybe<Array<Scalars['String']>>,
  partyId_lt?: Maybe<Scalars['String']>,
  partyId_lte?: Maybe<Scalars['String']>,
  partyId_gt?: Maybe<Scalars['String']>,
  partyId_gte?: Maybe<Scalars['String']>,
  partyId_contains?: Maybe<Scalars['String']>,
  partyId_not_contains?: Maybe<Scalars['String']>,
  partyId_starts_with?: Maybe<Scalars['String']>,
  partyId_not_starts_with?: Maybe<Scalars['String']>,
  partyId_ends_with?: Maybe<Scalars['String']>,
  partyId_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  AND?: Maybe<Array<PartyInvitationWhereInput>>,
  OR?: Maybe<Array<PartyInvitationWhereInput>>,
  NOT?: Maybe<Array<PartyInvitationWhereInput>>,
};

export type PartyInvitationWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export enum PartyOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  NormalizedTitleAsc = 'normalizedTitle_ASC',
  NormalizedTitleDesc = 'normalizedTitle_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  ColorTintAsc = 'colorTint_ASC',
  ColorTintDesc = 'colorTint_DESC',
  IsPublicAsc = 'isPublic_ASC',
  IsPublicDesc = 'isPublic_DESC',
  StartAsc = 'start_ASC',
  StartDesc = 'start_DESC',
  EndAsc = 'end_ASC',
  EndDesc = 'end_DESC',
  InviteSecretAsc = 'inviteSecret_ASC',
  InviteSecretDesc = 'inviteSecret_DESC'
}

export type PartyPreviousValues = {
   __typename?: 'PartyPreviousValues',
  id: Scalars['ID'],
  title: Scalars['String'],
  normalizedTitle: Scalars['String'],
  description: Scalars['String'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  colorTint: Scalars['String'],
  isPublic?: Maybe<Scalars['Boolean']>,
  start: Scalars['DateTime'],
  end: Scalars['DateTime'],
  inviteSecret: Scalars['String'],
};

export type PartyScalarWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
  title_not?: Maybe<Scalars['String']>,
  title_in?: Maybe<Array<Scalars['String']>>,
  title_not_in?: Maybe<Array<Scalars['String']>>,
  title_lt?: Maybe<Scalars['String']>,
  title_lte?: Maybe<Scalars['String']>,
  title_gt?: Maybe<Scalars['String']>,
  title_gte?: Maybe<Scalars['String']>,
  title_contains?: Maybe<Scalars['String']>,
  title_not_contains?: Maybe<Scalars['String']>,
  title_starts_with?: Maybe<Scalars['String']>,
  title_not_starts_with?: Maybe<Scalars['String']>,
  title_ends_with?: Maybe<Scalars['String']>,
  title_not_ends_with?: Maybe<Scalars['String']>,
  normalizedTitle?: Maybe<Scalars['String']>,
  normalizedTitle_not?: Maybe<Scalars['String']>,
  normalizedTitle_in?: Maybe<Array<Scalars['String']>>,
  normalizedTitle_not_in?: Maybe<Array<Scalars['String']>>,
  normalizedTitle_lt?: Maybe<Scalars['String']>,
  normalizedTitle_lte?: Maybe<Scalars['String']>,
  normalizedTitle_gt?: Maybe<Scalars['String']>,
  normalizedTitle_gte?: Maybe<Scalars['String']>,
  normalizedTitle_contains?: Maybe<Scalars['String']>,
  normalizedTitle_not_contains?: Maybe<Scalars['String']>,
  normalizedTitle_starts_with?: Maybe<Scalars['String']>,
  normalizedTitle_not_starts_with?: Maybe<Scalars['String']>,
  normalizedTitle_ends_with?: Maybe<Scalars['String']>,
  normalizedTitle_not_ends_with?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  description_not?: Maybe<Scalars['String']>,
  description_in?: Maybe<Array<Scalars['String']>>,
  description_not_in?: Maybe<Array<Scalars['String']>>,
  description_lt?: Maybe<Scalars['String']>,
  description_lte?: Maybe<Scalars['String']>,
  description_gt?: Maybe<Scalars['String']>,
  description_gte?: Maybe<Scalars['String']>,
  description_contains?: Maybe<Scalars['String']>,
  description_not_contains?: Maybe<Scalars['String']>,
  description_starts_with?: Maybe<Scalars['String']>,
  description_not_starts_with?: Maybe<Scalars['String']>,
  description_ends_with?: Maybe<Scalars['String']>,
  description_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  colorTint?: Maybe<Scalars['String']>,
  colorTint_not?: Maybe<Scalars['String']>,
  colorTint_in?: Maybe<Array<Scalars['String']>>,
  colorTint_not_in?: Maybe<Array<Scalars['String']>>,
  colorTint_lt?: Maybe<Scalars['String']>,
  colorTint_lte?: Maybe<Scalars['String']>,
  colorTint_gt?: Maybe<Scalars['String']>,
  colorTint_gte?: Maybe<Scalars['String']>,
  colorTint_contains?: Maybe<Scalars['String']>,
  colorTint_not_contains?: Maybe<Scalars['String']>,
  colorTint_starts_with?: Maybe<Scalars['String']>,
  colorTint_not_starts_with?: Maybe<Scalars['String']>,
  colorTint_ends_with?: Maybe<Scalars['String']>,
  colorTint_not_ends_with?: Maybe<Scalars['String']>,
  isPublic?: Maybe<Scalars['Boolean']>,
  isPublic_not?: Maybe<Scalars['Boolean']>,
  start?: Maybe<Scalars['DateTime']>,
  start_not?: Maybe<Scalars['DateTime']>,
  start_in?: Maybe<Array<Scalars['DateTime']>>,
  start_not_in?: Maybe<Array<Scalars['DateTime']>>,
  start_lt?: Maybe<Scalars['DateTime']>,
  start_lte?: Maybe<Scalars['DateTime']>,
  start_gt?: Maybe<Scalars['DateTime']>,
  start_gte?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  end_not?: Maybe<Scalars['DateTime']>,
  end_in?: Maybe<Array<Scalars['DateTime']>>,
  end_not_in?: Maybe<Array<Scalars['DateTime']>>,
  end_lt?: Maybe<Scalars['DateTime']>,
  end_lte?: Maybe<Scalars['DateTime']>,
  end_gt?: Maybe<Scalars['DateTime']>,
  end_gte?: Maybe<Scalars['DateTime']>,
  inviteSecret?: Maybe<Scalars['String']>,
  inviteSecret_not?: Maybe<Scalars['String']>,
  inviteSecret_in?: Maybe<Array<Scalars['String']>>,
  inviteSecret_not_in?: Maybe<Array<Scalars['String']>>,
  inviteSecret_lt?: Maybe<Scalars['String']>,
  inviteSecret_lte?: Maybe<Scalars['String']>,
  inviteSecret_gt?: Maybe<Scalars['String']>,
  inviteSecret_gte?: Maybe<Scalars['String']>,
  inviteSecret_contains?: Maybe<Scalars['String']>,
  inviteSecret_not_contains?: Maybe<Scalars['String']>,
  inviteSecret_starts_with?: Maybe<Scalars['String']>,
  inviteSecret_not_starts_with?: Maybe<Scalars['String']>,
  inviteSecret_ends_with?: Maybe<Scalars['String']>,
  inviteSecret_not_ends_with?: Maybe<Scalars['String']>,
  AND?: Maybe<Array<PartyScalarWhereInput>>,
  OR?: Maybe<Array<PartyScalarWhereInput>>,
  NOT?: Maybe<Array<PartyScalarWhereInput>>,
};

export type PartySubscriptionPayload = {
   __typename?: 'PartySubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Party>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<PartyPreviousValues>,
};

export type PartySubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<PartyWhereInput>,
  AND?: Maybe<Array<PartySubscriptionWhereInput>>,
  OR?: Maybe<Array<PartySubscriptionWhereInput>>,
  NOT?: Maybe<Array<PartySubscriptionWhereInput>>,
};

export type PartyUpdateDataInput = {
  title?: Maybe<Scalars['String']>,
  normalizedTitle?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  author?: Maybe<UserUpdateOneRequiredInput>,
  location?: Maybe<LocationUpdateOneRequiredInput>,
  games?: Maybe<GameUpdateManyInput>,
  colorTint?: Maybe<Scalars['String']>,
  isPublic?: Maybe<Scalars['Boolean']>,
  members?: Maybe<UserUpdateManyWithoutPartiesInput>,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  inviteSecret?: Maybe<Scalars['String']>,
  playlist?: Maybe<PlaylistUpdateOneWithoutPartiesInput>,
  cart?: Maybe<PartyCartUpdateOneWithoutPartyInput>,
};

export type PartyUpdateInput = {
  title?: Maybe<Scalars['String']>,
  normalizedTitle?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  author?: Maybe<UserUpdateOneRequiredInput>,
  location?: Maybe<LocationUpdateOneRequiredInput>,
  games?: Maybe<GameUpdateManyInput>,
  colorTint?: Maybe<Scalars['String']>,
  isPublic?: Maybe<Scalars['Boolean']>,
  members?: Maybe<UserUpdateManyWithoutPartiesInput>,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  inviteSecret?: Maybe<Scalars['String']>,
  playlist?: Maybe<PlaylistUpdateOneWithoutPartiesInput>,
  cart?: Maybe<PartyCartUpdateOneWithoutPartyInput>,
};

export type PartyUpdateManyDataInput = {
  title?: Maybe<Scalars['String']>,
  normalizedTitle?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  colorTint?: Maybe<Scalars['String']>,
  isPublic?: Maybe<Scalars['Boolean']>,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  inviteSecret?: Maybe<Scalars['String']>,
};

export type PartyUpdateManyMutationInput = {
  title?: Maybe<Scalars['String']>,
  normalizedTitle?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  colorTint?: Maybe<Scalars['String']>,
  isPublic?: Maybe<Scalars['Boolean']>,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  inviteSecret?: Maybe<Scalars['String']>,
};

export type PartyUpdateManyWithoutMembersInput = {
  create?: Maybe<Array<PartyCreateWithoutMembersInput>>,
  delete?: Maybe<Array<PartyWhereUniqueInput>>,
  connect?: Maybe<Array<PartyWhereUniqueInput>>,
  set?: Maybe<Array<PartyWhereUniqueInput>>,
  disconnect?: Maybe<Array<PartyWhereUniqueInput>>,
  update?: Maybe<Array<PartyUpdateWithWhereUniqueWithoutMembersInput>>,
  upsert?: Maybe<Array<PartyUpsertWithWhereUniqueWithoutMembersInput>>,
  deleteMany?: Maybe<Array<PartyScalarWhereInput>>,
  updateMany?: Maybe<Array<PartyUpdateManyWithWhereNestedInput>>,
};

export type PartyUpdateManyWithoutPlaylistInput = {
  create?: Maybe<Array<PartyCreateWithoutPlaylistInput>>,
  delete?: Maybe<Array<PartyWhereUniqueInput>>,
  connect?: Maybe<Array<PartyWhereUniqueInput>>,
  set?: Maybe<Array<PartyWhereUniqueInput>>,
  disconnect?: Maybe<Array<PartyWhereUniqueInput>>,
  update?: Maybe<Array<PartyUpdateWithWhereUniqueWithoutPlaylistInput>>,
  upsert?: Maybe<Array<PartyUpsertWithWhereUniqueWithoutPlaylistInput>>,
  deleteMany?: Maybe<Array<PartyScalarWhereInput>>,
  updateMany?: Maybe<Array<PartyUpdateManyWithWhereNestedInput>>,
};

export type PartyUpdateManyWithWhereNestedInput = {
  where: PartyScalarWhereInput,
  data: PartyUpdateManyDataInput,
};

export type PartyUpdateOneRequiredInput = {
  create?: Maybe<PartyCreateInput>,
  update?: Maybe<PartyUpdateDataInput>,
  upsert?: Maybe<PartyUpsertNestedInput>,
  connect?: Maybe<PartyWhereUniqueInput>,
};

export type PartyUpdateOneRequiredWithoutCartInput = {
  create?: Maybe<PartyCreateWithoutCartInput>,
  update?: Maybe<PartyUpdateWithoutCartDataInput>,
  upsert?: Maybe<PartyUpsertWithoutCartInput>,
  connect?: Maybe<PartyWhereUniqueInput>,
};

export type PartyUpdateWithoutCartDataInput = {
  title?: Maybe<Scalars['String']>,
  normalizedTitle?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  author?: Maybe<UserUpdateOneRequiredInput>,
  location?: Maybe<LocationUpdateOneRequiredInput>,
  games?: Maybe<GameUpdateManyInput>,
  colorTint?: Maybe<Scalars['String']>,
  isPublic?: Maybe<Scalars['Boolean']>,
  members?: Maybe<UserUpdateManyWithoutPartiesInput>,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  inviteSecret?: Maybe<Scalars['String']>,
  playlist?: Maybe<PlaylistUpdateOneWithoutPartiesInput>,
};

export type PartyUpdateWithoutMembersDataInput = {
  title?: Maybe<Scalars['String']>,
  normalizedTitle?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  author?: Maybe<UserUpdateOneRequiredInput>,
  location?: Maybe<LocationUpdateOneRequiredInput>,
  games?: Maybe<GameUpdateManyInput>,
  colorTint?: Maybe<Scalars['String']>,
  isPublic?: Maybe<Scalars['Boolean']>,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  inviteSecret?: Maybe<Scalars['String']>,
  playlist?: Maybe<PlaylistUpdateOneWithoutPartiesInput>,
  cart?: Maybe<PartyCartUpdateOneWithoutPartyInput>,
};

export type PartyUpdateWithoutPlaylistDataInput = {
  title?: Maybe<Scalars['String']>,
  normalizedTitle?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  author?: Maybe<UserUpdateOneRequiredInput>,
  location?: Maybe<LocationUpdateOneRequiredInput>,
  games?: Maybe<GameUpdateManyInput>,
  colorTint?: Maybe<Scalars['String']>,
  isPublic?: Maybe<Scalars['Boolean']>,
  members?: Maybe<UserUpdateManyWithoutPartiesInput>,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  inviteSecret?: Maybe<Scalars['String']>,
  cart?: Maybe<PartyCartUpdateOneWithoutPartyInput>,
};

export type PartyUpdateWithWhereUniqueWithoutMembersInput = {
  where: PartyWhereUniqueInput,
  data: PartyUpdateWithoutMembersDataInput,
};

export type PartyUpdateWithWhereUniqueWithoutPlaylistInput = {
  where: PartyWhereUniqueInput,
  data: PartyUpdateWithoutPlaylistDataInput,
};

export type PartyUpsertNestedInput = {
  update: PartyUpdateDataInput,
  create: PartyCreateInput,
};

export type PartyUpsertWithoutCartInput = {
  update: PartyUpdateWithoutCartDataInput,
  create: PartyCreateWithoutCartInput,
};

export type PartyUpsertWithWhereUniqueWithoutMembersInput = {
  where: PartyWhereUniqueInput,
  update: PartyUpdateWithoutMembersDataInput,
  create: PartyCreateWithoutMembersInput,
};

export type PartyUpsertWithWhereUniqueWithoutPlaylistInput = {
  where: PartyWhereUniqueInput,
  update: PartyUpdateWithoutPlaylistDataInput,
  create: PartyCreateWithoutPlaylistInput,
};

export type PartyUserInviteInput = {
   __typename?: 'PartyUserInviteInput',
  inviteSecret: Scalars['String'],
  user: User,
};

export type PartyWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
  title_not?: Maybe<Scalars['String']>,
  title_in?: Maybe<Array<Scalars['String']>>,
  title_not_in?: Maybe<Array<Scalars['String']>>,
  title_lt?: Maybe<Scalars['String']>,
  title_lte?: Maybe<Scalars['String']>,
  title_gt?: Maybe<Scalars['String']>,
  title_gte?: Maybe<Scalars['String']>,
  title_contains?: Maybe<Scalars['String']>,
  title_not_contains?: Maybe<Scalars['String']>,
  title_starts_with?: Maybe<Scalars['String']>,
  title_not_starts_with?: Maybe<Scalars['String']>,
  title_ends_with?: Maybe<Scalars['String']>,
  title_not_ends_with?: Maybe<Scalars['String']>,
  normalizedTitle?: Maybe<Scalars['String']>,
  normalizedTitle_not?: Maybe<Scalars['String']>,
  normalizedTitle_in?: Maybe<Array<Scalars['String']>>,
  normalizedTitle_not_in?: Maybe<Array<Scalars['String']>>,
  normalizedTitle_lt?: Maybe<Scalars['String']>,
  normalizedTitle_lte?: Maybe<Scalars['String']>,
  normalizedTitle_gt?: Maybe<Scalars['String']>,
  normalizedTitle_gte?: Maybe<Scalars['String']>,
  normalizedTitle_contains?: Maybe<Scalars['String']>,
  normalizedTitle_not_contains?: Maybe<Scalars['String']>,
  normalizedTitle_starts_with?: Maybe<Scalars['String']>,
  normalizedTitle_not_starts_with?: Maybe<Scalars['String']>,
  normalizedTitle_ends_with?: Maybe<Scalars['String']>,
  normalizedTitle_not_ends_with?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  description_not?: Maybe<Scalars['String']>,
  description_in?: Maybe<Array<Scalars['String']>>,
  description_not_in?: Maybe<Array<Scalars['String']>>,
  description_lt?: Maybe<Scalars['String']>,
  description_lte?: Maybe<Scalars['String']>,
  description_gt?: Maybe<Scalars['String']>,
  description_gte?: Maybe<Scalars['String']>,
  description_contains?: Maybe<Scalars['String']>,
  description_not_contains?: Maybe<Scalars['String']>,
  description_starts_with?: Maybe<Scalars['String']>,
  description_not_starts_with?: Maybe<Scalars['String']>,
  description_ends_with?: Maybe<Scalars['String']>,
  description_not_ends_with?: Maybe<Scalars['String']>,
  author?: Maybe<UserWhereInput>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  location?: Maybe<LocationWhereInput>,
  games_every?: Maybe<GameWhereInput>,
  games_some?: Maybe<GameWhereInput>,
  games_none?: Maybe<GameWhereInput>,
  colorTint?: Maybe<Scalars['String']>,
  colorTint_not?: Maybe<Scalars['String']>,
  colorTint_in?: Maybe<Array<Scalars['String']>>,
  colorTint_not_in?: Maybe<Array<Scalars['String']>>,
  colorTint_lt?: Maybe<Scalars['String']>,
  colorTint_lte?: Maybe<Scalars['String']>,
  colorTint_gt?: Maybe<Scalars['String']>,
  colorTint_gte?: Maybe<Scalars['String']>,
  colorTint_contains?: Maybe<Scalars['String']>,
  colorTint_not_contains?: Maybe<Scalars['String']>,
  colorTint_starts_with?: Maybe<Scalars['String']>,
  colorTint_not_starts_with?: Maybe<Scalars['String']>,
  colorTint_ends_with?: Maybe<Scalars['String']>,
  colorTint_not_ends_with?: Maybe<Scalars['String']>,
  isPublic?: Maybe<Scalars['Boolean']>,
  isPublic_not?: Maybe<Scalars['Boolean']>,
  members_every?: Maybe<UserWhereInput>,
  members_some?: Maybe<UserWhereInput>,
  members_none?: Maybe<UserWhereInput>,
  start?: Maybe<Scalars['DateTime']>,
  start_not?: Maybe<Scalars['DateTime']>,
  start_in?: Maybe<Array<Scalars['DateTime']>>,
  start_not_in?: Maybe<Array<Scalars['DateTime']>>,
  start_lt?: Maybe<Scalars['DateTime']>,
  start_lte?: Maybe<Scalars['DateTime']>,
  start_gt?: Maybe<Scalars['DateTime']>,
  start_gte?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  end_not?: Maybe<Scalars['DateTime']>,
  end_in?: Maybe<Array<Scalars['DateTime']>>,
  end_not_in?: Maybe<Array<Scalars['DateTime']>>,
  end_lt?: Maybe<Scalars['DateTime']>,
  end_lte?: Maybe<Scalars['DateTime']>,
  end_gt?: Maybe<Scalars['DateTime']>,
  end_gte?: Maybe<Scalars['DateTime']>,
  inviteSecret?: Maybe<Scalars['String']>,
  inviteSecret_not?: Maybe<Scalars['String']>,
  inviteSecret_in?: Maybe<Array<Scalars['String']>>,
  inviteSecret_not_in?: Maybe<Array<Scalars['String']>>,
  inviteSecret_lt?: Maybe<Scalars['String']>,
  inviteSecret_lte?: Maybe<Scalars['String']>,
  inviteSecret_gt?: Maybe<Scalars['String']>,
  inviteSecret_gte?: Maybe<Scalars['String']>,
  inviteSecret_contains?: Maybe<Scalars['String']>,
  inviteSecret_not_contains?: Maybe<Scalars['String']>,
  inviteSecret_starts_with?: Maybe<Scalars['String']>,
  inviteSecret_not_starts_with?: Maybe<Scalars['String']>,
  inviteSecret_ends_with?: Maybe<Scalars['String']>,
  inviteSecret_not_ends_with?: Maybe<Scalars['String']>,
  playlist?: Maybe<PlaylistWhereInput>,
  cart?: Maybe<PartyCartWhereInput>,
  AND?: Maybe<Array<PartyWhereInput>>,
  OR?: Maybe<Array<PartyWhereInput>>,
  NOT?: Maybe<Array<PartyWhereInput>>,
};

export type PartyWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
  inviteSecret?: Maybe<Scalars['String']>,
};

export type Playlist = {
   __typename?: 'Playlist',
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  playlist_id?: Maybe<Scalars['String']>,
  user: User,
  parties?: Maybe<Array<Party>>,
  name: Scalars['String'],
  tracks?: Maybe<Array<Track>>,
  isTemporary?: Maybe<Scalars['Boolean']>,
};


export type PlaylistPartiesArgs = {
  where?: Maybe<PartyWhereInput>,
  orderBy?: Maybe<PartyOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type PlaylistTracksArgs = {
  where?: Maybe<TrackWhereInput>,
  orderBy?: Maybe<TrackOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type PlaylistConnection = {
   __typename?: 'PlaylistConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<PlaylistEdge>>,
  aggregate: AggregatePlaylist,
};

export type PlaylistCreateInput = {
  id?: Maybe<Scalars['ID']>,
  playlist_id?: Maybe<Scalars['String']>,
  user: UserCreateOneInput,
  parties?: Maybe<PartyCreateManyWithoutPlaylistInput>,
  name: Scalars['String'],
  tracks?: Maybe<TrackCreateManyInput>,
  isTemporary?: Maybe<Scalars['Boolean']>,
};

export type PlaylistCreateOneWithoutPartiesInput = {
  create?: Maybe<PlaylistCreateWithoutPartiesInput>,
  connect?: Maybe<PlaylistWhereUniqueInput>,
};

export type PlaylistCreateWithoutPartiesInput = {
  id?: Maybe<Scalars['ID']>,
  playlist_id?: Maybe<Scalars['String']>,
  user: UserCreateOneInput,
  name: Scalars['String'],
  tracks?: Maybe<TrackCreateManyInput>,
  isTemporary?: Maybe<Scalars['Boolean']>,
};

export type PlaylistEdge = {
   __typename?: 'PlaylistEdge',
  node: Playlist,
  cursor: Scalars['String'],
};

export enum PlaylistOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PlaylistIdAsc = 'playlist_id_ASC',
  PlaylistIdDesc = 'playlist_id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  IsTemporaryAsc = 'isTemporary_ASC',
  IsTemporaryDesc = 'isTemporary_DESC'
}

export type PlaylistPreviousValues = {
   __typename?: 'PlaylistPreviousValues',
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  playlist_id?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  isTemporary?: Maybe<Scalars['Boolean']>,
};

export type PlaylistSubscriptionPayload = {
   __typename?: 'PlaylistSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Playlist>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<PlaylistPreviousValues>,
};

export type PlaylistSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<PlaylistWhereInput>,
  AND?: Maybe<Array<PlaylistSubscriptionWhereInput>>,
  OR?: Maybe<Array<PlaylistSubscriptionWhereInput>>,
  NOT?: Maybe<Array<PlaylistSubscriptionWhereInput>>,
};

export type PlaylistUpdateInput = {
  playlist_id?: Maybe<Scalars['String']>,
  user?: Maybe<UserUpdateOneRequiredInput>,
  parties?: Maybe<PartyUpdateManyWithoutPlaylistInput>,
  name?: Maybe<Scalars['String']>,
  tracks?: Maybe<TrackUpdateManyInput>,
  isTemporary?: Maybe<Scalars['Boolean']>,
};

export type PlaylistUpdateManyMutationInput = {
  playlist_id?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  isTemporary?: Maybe<Scalars['Boolean']>,
};

export type PlaylistUpdateOneWithoutPartiesInput = {
  create?: Maybe<PlaylistCreateWithoutPartiesInput>,
  update?: Maybe<PlaylistUpdateWithoutPartiesDataInput>,
  upsert?: Maybe<PlaylistUpsertWithoutPartiesInput>,
  delete?: Maybe<Scalars['Boolean']>,
  disconnect?: Maybe<Scalars['Boolean']>,
  connect?: Maybe<PlaylistWhereUniqueInput>,
};

export type PlaylistUpdateWithoutPartiesDataInput = {
  playlist_id?: Maybe<Scalars['String']>,
  user?: Maybe<UserUpdateOneRequiredInput>,
  name?: Maybe<Scalars['String']>,
  tracks?: Maybe<TrackUpdateManyInput>,
  isTemporary?: Maybe<Scalars['Boolean']>,
};

export type PlaylistUpsertWithoutPartiesInput = {
  update: PlaylistUpdateWithoutPartiesDataInput,
  create: PlaylistCreateWithoutPartiesInput,
};

export type PlaylistWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  playlist_id?: Maybe<Scalars['String']>,
  playlist_id_not?: Maybe<Scalars['String']>,
  playlist_id_in?: Maybe<Array<Scalars['String']>>,
  playlist_id_not_in?: Maybe<Array<Scalars['String']>>,
  playlist_id_lt?: Maybe<Scalars['String']>,
  playlist_id_lte?: Maybe<Scalars['String']>,
  playlist_id_gt?: Maybe<Scalars['String']>,
  playlist_id_gte?: Maybe<Scalars['String']>,
  playlist_id_contains?: Maybe<Scalars['String']>,
  playlist_id_not_contains?: Maybe<Scalars['String']>,
  playlist_id_starts_with?: Maybe<Scalars['String']>,
  playlist_id_not_starts_with?: Maybe<Scalars['String']>,
  playlist_id_ends_with?: Maybe<Scalars['String']>,
  playlist_id_not_ends_with?: Maybe<Scalars['String']>,
  user?: Maybe<UserWhereInput>,
  parties_every?: Maybe<PartyWhereInput>,
  parties_some?: Maybe<PartyWhereInput>,
  parties_none?: Maybe<PartyWhereInput>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  tracks_every?: Maybe<TrackWhereInput>,
  tracks_some?: Maybe<TrackWhereInput>,
  tracks_none?: Maybe<TrackWhereInput>,
  isTemporary?: Maybe<Scalars['Boolean']>,
  isTemporary_not?: Maybe<Scalars['Boolean']>,
  AND?: Maybe<Array<PlaylistWhereInput>>,
  OR?: Maybe<Array<PlaylistWhereInput>>,
  NOT?: Maybe<Array<PlaylistWhereInput>>,
};

export type PlaylistWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
  playlist_id?: Maybe<Scalars['String']>,
};

export type Query = {
   __typename?: 'Query',
  album?: Maybe<Album>,
  albums: Array<Maybe<Album>>,
  albumsConnection: AlbumConnection,
  artist?: Maybe<Artist>,
  artists: Array<Maybe<Artist>>,
  artistsConnection: ArtistConnection,
  chat?: Maybe<Chat>,
  chats: Array<Maybe<Chat>>,
  chatsConnection: ChatConnection,
  game?: Maybe<Game>,
  games: Array<Maybe<Game>>,
  gamesConnection: GameConnection,
  image?: Maybe<Image>,
  images: Array<Maybe<Image>>,
  imagesConnection: ImageConnection,
  location?: Maybe<Location>,
  locations: Array<Maybe<Location>>,
  locationsConnection: LocationConnection,
  message?: Maybe<Message>,
  messages: Array<Maybe<Message>>,
  messagesConnection: MessageConnection,
  party?: Maybe<Party>,
  parties: Array<Maybe<Party>>,
  partiesConnection: PartyConnection,
  partyCart?: Maybe<PartyCart>,
  partyCarts: Array<Maybe<PartyCart>>,
  partyCartsConnection: PartyCartConnection,
  partyCartItem?: Maybe<PartyCartItem>,
  partyCartItems: Array<Maybe<PartyCartItem>>,
  partyCartItemsConnection: PartyCartItemConnection,
  partyInvitation?: Maybe<PartyInvitation>,
  partyInvitations: Array<Maybe<PartyInvitation>>,
  partyInvitationsConnection: PartyInvitationConnection,
  playlist?: Maybe<Playlist>,
  playlists: Array<Maybe<Playlist>>,
  playlistsConnection: PlaylistConnection,
  track?: Maybe<Track>,
  tracks: Array<Maybe<Track>>,
  tracksConnection: TrackConnection,
  user?: Maybe<User>,
  users: Array<Maybe<User>>,
  usersConnection: UserConnection,
  node?: Maybe<Node>,
  hasChats: Scalars['Boolean'],
  hasParties: Scalars['Boolean'],
  canJoinParty?: Maybe<Scalars['Boolean']>,
  me?: Maybe<User>,
  getUsers: Array<Maybe<User>>,
  paginateUsers: UserConnection,
  temp__?: Maybe<Scalars['Boolean']>,
};


export type QueryAlbumArgs = {
  where: AlbumWhereUniqueInput
};


export type QueryAlbumsArgs = {
  where?: Maybe<AlbumWhereInput>,
  orderBy?: Maybe<AlbumOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryAlbumsConnectionArgs = {
  where?: Maybe<AlbumWhereInput>,
  orderBy?: Maybe<AlbumOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryArtistArgs = {
  where: ArtistWhereUniqueInput
};


export type QueryArtistsArgs = {
  where?: Maybe<ArtistWhereInput>,
  orderBy?: Maybe<ArtistOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryArtistsConnectionArgs = {
  where?: Maybe<ArtistWhereInput>,
  orderBy?: Maybe<ArtistOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryChatArgs = {
  where: ChatWhereUniqueInput
};


export type QueryChatsArgs = {
  where?: Maybe<ChatWhereInput>,
  orderBy?: Maybe<ChatOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryChatsConnectionArgs = {
  where?: Maybe<ChatWhereInput>,
  orderBy?: Maybe<ChatOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryGameArgs = {
  where: GameWhereUniqueInput
};


export type QueryGamesArgs = {
  where?: Maybe<GameWhereInput>,
  orderBy?: Maybe<GameOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryGamesConnectionArgs = {
  where?: Maybe<GameWhereInput>,
  orderBy?: Maybe<GameOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryImageArgs = {
  where: ImageWhereUniqueInput
};


export type QueryImagesArgs = {
  where?: Maybe<ImageWhereInput>,
  orderBy?: Maybe<ImageOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryImagesConnectionArgs = {
  where?: Maybe<ImageWhereInput>,
  orderBy?: Maybe<ImageOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryLocationArgs = {
  where: LocationWhereUniqueInput
};


export type QueryLocationsArgs = {
  where?: Maybe<LocationWhereInput>,
  orderBy?: Maybe<LocationOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryLocationsConnectionArgs = {
  where?: Maybe<LocationWhereInput>,
  orderBy?: Maybe<LocationOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryMessageArgs = {
  where: MessageWhereUniqueInput
};


export type QueryMessagesArgs = {
  where?: Maybe<MessageWhereInput>,
  orderBy?: Maybe<MessageOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryMessagesConnectionArgs = {
  where?: Maybe<MessageWhereInput>,
  orderBy?: Maybe<MessageOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryPartyArgs = {
  where: PartyWhereUniqueInput
};


export type QueryPartiesArgs = {
  where?: Maybe<PartyWhereInput>,
  orderBy?: Maybe<PartyOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryPartiesConnectionArgs = {
  where?: Maybe<PartyWhereInput>,
  orderBy?: Maybe<PartyOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryPartyCartArgs = {
  where: PartyCartWhereUniqueInput
};


export type QueryPartyCartsArgs = {
  where?: Maybe<PartyCartWhereInput>,
  orderBy?: Maybe<PartyCartOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryPartyCartsConnectionArgs = {
  where?: Maybe<PartyCartWhereInput>,
  orderBy?: Maybe<PartyCartOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryPartyCartItemArgs = {
  where: PartyCartItemWhereUniqueInput
};


export type QueryPartyCartItemsArgs = {
  where?: Maybe<PartyCartItemWhereInput>,
  orderBy?: Maybe<PartyCartItemOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryPartyCartItemsConnectionArgs = {
  where?: Maybe<PartyCartItemWhereInput>,
  orderBy?: Maybe<PartyCartItemOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryPartyInvitationArgs = {
  where: PartyInvitationWhereUniqueInput
};


export type QueryPartyInvitationsArgs = {
  where?: Maybe<PartyInvitationWhereInput>,
  orderBy?: Maybe<PartyInvitationOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryPartyInvitationsConnectionArgs = {
  where?: Maybe<PartyInvitationWhereInput>,
  orderBy?: Maybe<PartyInvitationOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryPlaylistArgs = {
  where: PlaylistWhereUniqueInput
};


export type QueryPlaylistsArgs = {
  where?: Maybe<PlaylistWhereInput>,
  orderBy?: Maybe<PlaylistOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryPlaylistsConnectionArgs = {
  where?: Maybe<PlaylistWhereInput>,
  orderBy?: Maybe<PlaylistOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryTrackArgs = {
  where: TrackWhereUniqueInput
};


export type QueryTracksArgs = {
  where?: Maybe<TrackWhereInput>,
  orderBy?: Maybe<TrackOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryTracksConnectionArgs = {
  where?: Maybe<TrackWhereInput>,
  orderBy?: Maybe<TrackOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput
};


export type QueryUsersArgs = {
  where?: Maybe<UserWhereInput>,
  orderBy?: Maybe<UserOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryUsersConnectionArgs = {
  where?: Maybe<UserWhereInput>,
  orderBy?: Maybe<UserOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryNodeArgs = {
  id: Scalars['ID']
};


export type QueryHasChatsArgs = {
  where?: Maybe<ChatWhereInput>
};


export type QueryHasPartiesArgs = {
  where?: Maybe<PartyWhereInput>
};


export type QueryCanJoinPartyArgs = {
  userId: Scalars['String'],
  inviteSecret: Scalars['String'],
  partyId: Scalars['String']
};


export type QueryGetUsersArgs = {
  where?: Maybe<UserWhereInput>,
  orderBy?: Maybe<UserOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryPaginateUsersArgs = {
  where?: Maybe<UserWhereInput>,
  orderBy?: Maybe<UserOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export enum SocialMediaType {
  Facebook = 'FACEBOOK',
  Spotify = 'SPOTIFY',
  Twitter = 'TWITTER'
}

export type Subscription = {
   __typename?: 'Subscription',
  album?: Maybe<AlbumSubscriptionPayload>,
  artist?: Maybe<ArtistSubscriptionPayload>,
  chat?: Maybe<ChatSubscriptionPayload>,
  game?: Maybe<GameSubscriptionPayload>,
  image?: Maybe<ImageSubscriptionPayload>,
  location?: Maybe<LocationSubscriptionPayload>,
  message?: Maybe<MessageSubscriptionPayload>,
  party?: Maybe<PartySubscriptionPayload>,
  partyCart?: Maybe<PartyCartSubscriptionPayload>,
  partyCartItem?: Maybe<PartyCartItemSubscriptionPayload>,
  partyInvitation?: Maybe<PartyInvitationSubscriptionPayload>,
  playlist?: Maybe<PlaylistSubscriptionPayload>,
  track?: Maybe<TrackSubscriptionPayload>,
  user?: Maybe<UserSubscriptionPayload>,
};


export type SubscriptionAlbumArgs = {
  where?: Maybe<AlbumSubscriptionWhereInput>
};


export type SubscriptionArtistArgs = {
  where?: Maybe<ArtistSubscriptionWhereInput>
};


export type SubscriptionChatArgs = {
  where?: Maybe<ChatSubscriptionWhereInput>
};


export type SubscriptionGameArgs = {
  where?: Maybe<GameSubscriptionWhereInput>
};


export type SubscriptionImageArgs = {
  where?: Maybe<ImageSubscriptionWhereInput>
};


export type SubscriptionLocationArgs = {
  where?: Maybe<LocationSubscriptionWhereInput>
};


export type SubscriptionMessageArgs = {
  where?: Maybe<MessageSubscriptionWhereInput>
};


export type SubscriptionPartyArgs = {
  where?: Maybe<PartySubscriptionWhereInput>
};


export type SubscriptionPartyCartArgs = {
  where?: Maybe<PartyCartSubscriptionWhereInput>
};


export type SubscriptionPartyCartItemArgs = {
  where?: Maybe<PartyCartItemSubscriptionWhereInput>
};


export type SubscriptionPartyInvitationArgs = {
  where?: Maybe<PartyInvitationSubscriptionWhereInput>
};


export type SubscriptionPlaylistArgs = {
  where?: Maybe<PlaylistSubscriptionWhereInput>
};


export type SubscriptionTrackArgs = {
  where?: Maybe<TrackSubscriptionWhereInput>
};


export type SubscriptionUserArgs = {
  where?: Maybe<UserSubscriptionWhereInput>
};

export type SuccessMessage = {
   __typename?: 'SuccessMessage',
  message: Scalars['String'],
};

export type Track = {
   __typename?: 'Track',
  id: Scalars['ID'],
  name: Scalars['String'],
  album: Album,
  artists?: Maybe<Array<Artist>>,
  duration: Scalars['Int'],
  preview_url: Scalars['String'],
};


export type TrackArtistsArgs = {
  where?: Maybe<ArtistWhereInput>,
  orderBy?: Maybe<ArtistOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type TrackConnection = {
   __typename?: 'TrackConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<TrackEdge>>,
  aggregate: AggregateTrack,
};

export type TrackCreateInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  album: AlbumCreateOneInput,
  artists?: Maybe<ArtistCreateManyInput>,
  duration: Scalars['Int'],
  preview_url: Scalars['String'],
};

export type TrackCreateManyInput = {
  create?: Maybe<Array<TrackCreateInput>>,
  connect?: Maybe<Array<TrackWhereUniqueInput>>,
};

export type TrackEdge = {
   __typename?: 'TrackEdge',
  node: Track,
  cursor: Scalars['String'],
};

export enum TrackOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  DurationAsc = 'duration_ASC',
  DurationDesc = 'duration_DESC',
  PreviewUrlAsc = 'preview_url_ASC',
  PreviewUrlDesc = 'preview_url_DESC'
}

export type TrackPreviousValues = {
   __typename?: 'TrackPreviousValues',
  id: Scalars['ID'],
  name: Scalars['String'],
  duration: Scalars['Int'],
  preview_url: Scalars['String'],
};

export type TrackScalarWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  duration?: Maybe<Scalars['Int']>,
  duration_not?: Maybe<Scalars['Int']>,
  duration_in?: Maybe<Array<Scalars['Int']>>,
  duration_not_in?: Maybe<Array<Scalars['Int']>>,
  duration_lt?: Maybe<Scalars['Int']>,
  duration_lte?: Maybe<Scalars['Int']>,
  duration_gt?: Maybe<Scalars['Int']>,
  duration_gte?: Maybe<Scalars['Int']>,
  preview_url?: Maybe<Scalars['String']>,
  preview_url_not?: Maybe<Scalars['String']>,
  preview_url_in?: Maybe<Array<Scalars['String']>>,
  preview_url_not_in?: Maybe<Array<Scalars['String']>>,
  preview_url_lt?: Maybe<Scalars['String']>,
  preview_url_lte?: Maybe<Scalars['String']>,
  preview_url_gt?: Maybe<Scalars['String']>,
  preview_url_gte?: Maybe<Scalars['String']>,
  preview_url_contains?: Maybe<Scalars['String']>,
  preview_url_not_contains?: Maybe<Scalars['String']>,
  preview_url_starts_with?: Maybe<Scalars['String']>,
  preview_url_not_starts_with?: Maybe<Scalars['String']>,
  preview_url_ends_with?: Maybe<Scalars['String']>,
  preview_url_not_ends_with?: Maybe<Scalars['String']>,
  AND?: Maybe<Array<TrackScalarWhereInput>>,
  OR?: Maybe<Array<TrackScalarWhereInput>>,
  NOT?: Maybe<Array<TrackScalarWhereInput>>,
};

export type TrackSubscriptionPayload = {
   __typename?: 'TrackSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Track>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<TrackPreviousValues>,
};

export type TrackSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<TrackWhereInput>,
  AND?: Maybe<Array<TrackSubscriptionWhereInput>>,
  OR?: Maybe<Array<TrackSubscriptionWhereInput>>,
  NOT?: Maybe<Array<TrackSubscriptionWhereInput>>,
};

export type TrackUpdateDataInput = {
  name?: Maybe<Scalars['String']>,
  album?: Maybe<AlbumUpdateOneRequiredInput>,
  artists?: Maybe<ArtistUpdateManyInput>,
  duration?: Maybe<Scalars['Int']>,
  preview_url?: Maybe<Scalars['String']>,
};

export type TrackUpdateInput = {
  name?: Maybe<Scalars['String']>,
  album?: Maybe<AlbumUpdateOneRequiredInput>,
  artists?: Maybe<ArtistUpdateManyInput>,
  duration?: Maybe<Scalars['Int']>,
  preview_url?: Maybe<Scalars['String']>,
};

export type TrackUpdateManyDataInput = {
  name?: Maybe<Scalars['String']>,
  duration?: Maybe<Scalars['Int']>,
  preview_url?: Maybe<Scalars['String']>,
};

export type TrackUpdateManyInput = {
  create?: Maybe<Array<TrackCreateInput>>,
  update?: Maybe<Array<TrackUpdateWithWhereUniqueNestedInput>>,
  upsert?: Maybe<Array<TrackUpsertWithWhereUniqueNestedInput>>,
  delete?: Maybe<Array<TrackWhereUniqueInput>>,
  connect?: Maybe<Array<TrackWhereUniqueInput>>,
  set?: Maybe<Array<TrackWhereUniqueInput>>,
  disconnect?: Maybe<Array<TrackWhereUniqueInput>>,
  deleteMany?: Maybe<Array<TrackScalarWhereInput>>,
  updateMany?: Maybe<Array<TrackUpdateManyWithWhereNestedInput>>,
};

export type TrackUpdateManyMutationInput = {
  name?: Maybe<Scalars['String']>,
  duration?: Maybe<Scalars['Int']>,
  preview_url?: Maybe<Scalars['String']>,
};

export type TrackUpdateManyWithWhereNestedInput = {
  where: TrackScalarWhereInput,
  data: TrackUpdateManyDataInput,
};

export type TrackUpdateWithWhereUniqueNestedInput = {
  where: TrackWhereUniqueInput,
  data: TrackUpdateDataInput,
};

export type TrackUpsertWithWhereUniqueNestedInput = {
  where: TrackWhereUniqueInput,
  update: TrackUpdateDataInput,
  create: TrackCreateInput,
};

export type TrackWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  album?: Maybe<AlbumWhereInput>,
  artists_every?: Maybe<ArtistWhereInput>,
  artists_some?: Maybe<ArtistWhereInput>,
  artists_none?: Maybe<ArtistWhereInput>,
  duration?: Maybe<Scalars['Int']>,
  duration_not?: Maybe<Scalars['Int']>,
  duration_in?: Maybe<Array<Scalars['Int']>>,
  duration_not_in?: Maybe<Array<Scalars['Int']>>,
  duration_lt?: Maybe<Scalars['Int']>,
  duration_lte?: Maybe<Scalars['Int']>,
  duration_gt?: Maybe<Scalars['Int']>,
  duration_gte?: Maybe<Scalars['Int']>,
  preview_url?: Maybe<Scalars['String']>,
  preview_url_not?: Maybe<Scalars['String']>,
  preview_url_in?: Maybe<Array<Scalars['String']>>,
  preview_url_not_in?: Maybe<Array<Scalars['String']>>,
  preview_url_lt?: Maybe<Scalars['String']>,
  preview_url_lte?: Maybe<Scalars['String']>,
  preview_url_gt?: Maybe<Scalars['String']>,
  preview_url_gte?: Maybe<Scalars['String']>,
  preview_url_contains?: Maybe<Scalars['String']>,
  preview_url_not_contains?: Maybe<Scalars['String']>,
  preview_url_starts_with?: Maybe<Scalars['String']>,
  preview_url_not_starts_with?: Maybe<Scalars['String']>,
  preview_url_ends_with?: Maybe<Scalars['String']>,
  preview_url_not_ends_with?: Maybe<Scalars['String']>,
  AND?: Maybe<Array<TrackWhereInput>>,
  OR?: Maybe<Array<TrackWhereInput>>,
  NOT?: Maybe<Array<TrackWhereInput>>,
};

export type TrackWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  email: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  password: Scalars['String'],
  parties?: Maybe<Array<Party>>,
  friends?: Maybe<Array<User>>,
  pendingFriendInvitations?: Maybe<Array<User>>,
  pendingPartyInvitations?: Maybe<Array<PartyInvitation>>,
  chats?: Maybe<Array<Chat>>,
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  lastOnline?: Maybe<Scalars['DateTime']>,
  deleted: Scalars['Boolean'],
  provider?: Maybe<SocialMediaType>,
  avatar?: Maybe<Scalars['String']>,
  thirdPartyId?: Maybe<Scalars['String']>,
  resetToken?: Maybe<Scalars['String']>,
  resetTokenExpiry?: Maybe<Scalars['DateTime']>,
  pendingInvitations?: Maybe<Array<User>>,
  status: UserStatus,
};


export type UserPartiesArgs = {
  where?: Maybe<PartyWhereInput>,
  orderBy?: Maybe<PartyOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type UserFriendsArgs = {
  where?: Maybe<UserWhereInput>,
  orderBy?: Maybe<UserOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type UserPendingFriendInvitationsArgs = {
  where?: Maybe<UserWhereInput>,
  orderBy?: Maybe<UserOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type UserPendingPartyInvitationsArgs = {
  where?: Maybe<PartyInvitationWhereInput>,
  orderBy?: Maybe<PartyInvitationOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type UserChatsArgs = {
  where?: Maybe<ChatWhereInput>,
  orderBy?: Maybe<ChatOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type UserPendingInvitationsArgs = {
  where?: Maybe<UserWhereInput>,
  orderBy?: Maybe<UserOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type UserConnection = {
   __typename?: 'UserConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<UserEdge>>,
  aggregate: AggregateUser,
};

export type UserCreateInput = {
  id?: Maybe<Scalars['ID']>,
  email: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  password: Scalars['String'],
  parties?: Maybe<PartyCreateManyWithoutMembersInput>,
  friends?: Maybe<UserCreateManyWithoutFriendsInput>,
  pendingFriendInvitations?: Maybe<UserCreateManyWithoutPendingFriendInvitationsInput>,
  pendingPartyInvitations?: Maybe<PartyInvitationCreateManyWithoutUserInput>,
  chats?: Maybe<ChatCreateManyWithoutMembersInput>,
  lastOnline?: Maybe<Scalars['DateTime']>,
  deleted?: Maybe<Scalars['Boolean']>,
  provider?: Maybe<SocialMediaType>,
  avatar?: Maybe<Scalars['String']>,
  thirdPartyId?: Maybe<Scalars['String']>,
  resetToken?: Maybe<Scalars['String']>,
  resetTokenExpiry?: Maybe<Scalars['DateTime']>,
};

export type UserCreateManyWithoutChatsInput = {
  create?: Maybe<Array<UserCreateWithoutChatsInput>>,
  connect?: Maybe<Array<UserWhereUniqueInput>>,
};

export type UserCreateManyWithoutFriendsInput = {
  create?: Maybe<Array<UserCreateWithoutFriendsInput>>,
  connect?: Maybe<Array<UserWhereUniqueInput>>,
};

export type UserCreateManyWithoutPartiesInput = {
  create?: Maybe<Array<UserCreateWithoutPartiesInput>>,
  connect?: Maybe<Array<UserWhereUniqueInput>>,
};

export type UserCreateManyWithoutPendingFriendInvitationsInput = {
  create?: Maybe<Array<UserCreateWithoutPendingFriendInvitationsInput>>,
  connect?: Maybe<Array<UserWhereUniqueInput>>,
};

export type UserCreateOneInput = {
  create?: Maybe<UserCreateInput>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserCreateOneWithoutPendingPartyInvitationsInput = {
  create?: Maybe<UserCreateWithoutPendingPartyInvitationsInput>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserCreateWithoutChatsInput = {
  id?: Maybe<Scalars['ID']>,
  email: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  password: Scalars['String'],
  parties?: Maybe<PartyCreateManyWithoutMembersInput>,
  friends?: Maybe<UserCreateManyWithoutFriendsInput>,
  pendingFriendInvitations?: Maybe<UserCreateManyWithoutPendingFriendInvitationsInput>,
  pendingPartyInvitations?: Maybe<PartyInvitationCreateManyWithoutUserInput>,
  lastOnline?: Maybe<Scalars['DateTime']>,
  deleted?: Maybe<Scalars['Boolean']>,
  provider?: Maybe<SocialMediaType>,
  avatar?: Maybe<Scalars['String']>,
  thirdPartyId?: Maybe<Scalars['String']>,
  resetToken?: Maybe<Scalars['String']>,
  resetTokenExpiry?: Maybe<Scalars['DateTime']>,
};

export type UserCreateWithoutFriendsInput = {
  id?: Maybe<Scalars['ID']>,
  email: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  password: Scalars['String'],
  parties?: Maybe<PartyCreateManyWithoutMembersInput>,
  pendingFriendInvitations?: Maybe<UserCreateManyWithoutPendingFriendInvitationsInput>,
  pendingPartyInvitations?: Maybe<PartyInvitationCreateManyWithoutUserInput>,
  chats?: Maybe<ChatCreateManyWithoutMembersInput>,
  lastOnline?: Maybe<Scalars['DateTime']>,
  deleted?: Maybe<Scalars['Boolean']>,
  provider?: Maybe<SocialMediaType>,
  avatar?: Maybe<Scalars['String']>,
  thirdPartyId?: Maybe<Scalars['String']>,
  resetToken?: Maybe<Scalars['String']>,
  resetTokenExpiry?: Maybe<Scalars['DateTime']>,
};

export type UserCreateWithoutPartiesInput = {
  id?: Maybe<Scalars['ID']>,
  email: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  password: Scalars['String'],
  friends?: Maybe<UserCreateManyWithoutFriendsInput>,
  pendingFriendInvitations?: Maybe<UserCreateManyWithoutPendingFriendInvitationsInput>,
  pendingPartyInvitations?: Maybe<PartyInvitationCreateManyWithoutUserInput>,
  chats?: Maybe<ChatCreateManyWithoutMembersInput>,
  lastOnline?: Maybe<Scalars['DateTime']>,
  deleted?: Maybe<Scalars['Boolean']>,
  provider?: Maybe<SocialMediaType>,
  avatar?: Maybe<Scalars['String']>,
  thirdPartyId?: Maybe<Scalars['String']>,
  resetToken?: Maybe<Scalars['String']>,
  resetTokenExpiry?: Maybe<Scalars['DateTime']>,
};

export type UserCreateWithoutPendingFriendInvitationsInput = {
  id?: Maybe<Scalars['ID']>,
  email: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  password: Scalars['String'],
  parties?: Maybe<PartyCreateManyWithoutMembersInput>,
  friends?: Maybe<UserCreateManyWithoutFriendsInput>,
  pendingPartyInvitations?: Maybe<PartyInvitationCreateManyWithoutUserInput>,
  chats?: Maybe<ChatCreateManyWithoutMembersInput>,
  lastOnline?: Maybe<Scalars['DateTime']>,
  deleted?: Maybe<Scalars['Boolean']>,
  provider?: Maybe<SocialMediaType>,
  avatar?: Maybe<Scalars['String']>,
  thirdPartyId?: Maybe<Scalars['String']>,
  resetToken?: Maybe<Scalars['String']>,
  resetTokenExpiry?: Maybe<Scalars['DateTime']>,
};

export type UserCreateWithoutPendingPartyInvitationsInput = {
  id?: Maybe<Scalars['ID']>,
  email: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  password: Scalars['String'],
  parties?: Maybe<PartyCreateManyWithoutMembersInput>,
  friends?: Maybe<UserCreateManyWithoutFriendsInput>,
  pendingFriendInvitations?: Maybe<UserCreateManyWithoutPendingFriendInvitationsInput>,
  chats?: Maybe<ChatCreateManyWithoutMembersInput>,
  lastOnline?: Maybe<Scalars['DateTime']>,
  deleted?: Maybe<Scalars['Boolean']>,
  provider?: Maybe<SocialMediaType>,
  avatar?: Maybe<Scalars['String']>,
  thirdPartyId?: Maybe<Scalars['String']>,
  resetToken?: Maybe<Scalars['String']>,
  resetTokenExpiry?: Maybe<Scalars['DateTime']>,
};

export type UserEdge = {
   __typename?: 'UserEdge',
  node: User,
  cursor: Scalars['String'],
};

export enum UserOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  FirstNameAsc = 'firstName_ASC',
  FirstNameDesc = 'firstName_DESC',
  LastNameAsc = 'lastName_ASC',
  LastNameDesc = 'lastName_DESC',
  PasswordAsc = 'password_ASC',
  PasswordDesc = 'password_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  LastOnlineAsc = 'lastOnline_ASC',
  LastOnlineDesc = 'lastOnline_DESC',
  DeletedAsc = 'deleted_ASC',
  DeletedDesc = 'deleted_DESC',
  ProviderAsc = 'provider_ASC',
  ProviderDesc = 'provider_DESC',
  AvatarAsc = 'avatar_ASC',
  AvatarDesc = 'avatar_DESC',
  ThirdPartyIdAsc = 'thirdPartyId_ASC',
  ThirdPartyIdDesc = 'thirdPartyId_DESC',
  ResetTokenAsc = 'resetToken_ASC',
  ResetTokenDesc = 'resetToken_DESC',
  ResetTokenExpiryAsc = 'resetTokenExpiry_ASC',
  ResetTokenExpiryDesc = 'resetTokenExpiry_DESC'
}

export type UserPreviousValues = {
   __typename?: 'UserPreviousValues',
  id: Scalars['ID'],
  email: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  password: Scalars['String'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  lastOnline?: Maybe<Scalars['DateTime']>,
  deleted: Scalars['Boolean'],
  provider?: Maybe<SocialMediaType>,
  avatar?: Maybe<Scalars['String']>,
  thirdPartyId?: Maybe<Scalars['String']>,
  resetToken?: Maybe<Scalars['String']>,
  resetTokenExpiry?: Maybe<Scalars['DateTime']>,
};

export type UserScalarWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  email?: Maybe<Scalars['String']>,
  email_not?: Maybe<Scalars['String']>,
  email_in?: Maybe<Array<Scalars['String']>>,
  email_not_in?: Maybe<Array<Scalars['String']>>,
  email_lt?: Maybe<Scalars['String']>,
  email_lte?: Maybe<Scalars['String']>,
  email_gt?: Maybe<Scalars['String']>,
  email_gte?: Maybe<Scalars['String']>,
  email_contains?: Maybe<Scalars['String']>,
  email_not_contains?: Maybe<Scalars['String']>,
  email_starts_with?: Maybe<Scalars['String']>,
  email_not_starts_with?: Maybe<Scalars['String']>,
  email_ends_with?: Maybe<Scalars['String']>,
  email_not_ends_with?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  firstName_not?: Maybe<Scalars['String']>,
  firstName_in?: Maybe<Array<Scalars['String']>>,
  firstName_not_in?: Maybe<Array<Scalars['String']>>,
  firstName_lt?: Maybe<Scalars['String']>,
  firstName_lte?: Maybe<Scalars['String']>,
  firstName_gt?: Maybe<Scalars['String']>,
  firstName_gte?: Maybe<Scalars['String']>,
  firstName_contains?: Maybe<Scalars['String']>,
  firstName_not_contains?: Maybe<Scalars['String']>,
  firstName_starts_with?: Maybe<Scalars['String']>,
  firstName_not_starts_with?: Maybe<Scalars['String']>,
  firstName_ends_with?: Maybe<Scalars['String']>,
  firstName_not_ends_with?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  lastName_not?: Maybe<Scalars['String']>,
  lastName_in?: Maybe<Array<Scalars['String']>>,
  lastName_not_in?: Maybe<Array<Scalars['String']>>,
  lastName_lt?: Maybe<Scalars['String']>,
  lastName_lte?: Maybe<Scalars['String']>,
  lastName_gt?: Maybe<Scalars['String']>,
  lastName_gte?: Maybe<Scalars['String']>,
  lastName_contains?: Maybe<Scalars['String']>,
  lastName_not_contains?: Maybe<Scalars['String']>,
  lastName_starts_with?: Maybe<Scalars['String']>,
  lastName_not_starts_with?: Maybe<Scalars['String']>,
  lastName_ends_with?: Maybe<Scalars['String']>,
  lastName_not_ends_with?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  password_not?: Maybe<Scalars['String']>,
  password_in?: Maybe<Array<Scalars['String']>>,
  password_not_in?: Maybe<Array<Scalars['String']>>,
  password_lt?: Maybe<Scalars['String']>,
  password_lte?: Maybe<Scalars['String']>,
  password_gt?: Maybe<Scalars['String']>,
  password_gte?: Maybe<Scalars['String']>,
  password_contains?: Maybe<Scalars['String']>,
  password_not_contains?: Maybe<Scalars['String']>,
  password_starts_with?: Maybe<Scalars['String']>,
  password_not_starts_with?: Maybe<Scalars['String']>,
  password_ends_with?: Maybe<Scalars['String']>,
  password_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  lastOnline?: Maybe<Scalars['DateTime']>,
  lastOnline_not?: Maybe<Scalars['DateTime']>,
  lastOnline_in?: Maybe<Array<Scalars['DateTime']>>,
  lastOnline_not_in?: Maybe<Array<Scalars['DateTime']>>,
  lastOnline_lt?: Maybe<Scalars['DateTime']>,
  lastOnline_lte?: Maybe<Scalars['DateTime']>,
  lastOnline_gt?: Maybe<Scalars['DateTime']>,
  lastOnline_gte?: Maybe<Scalars['DateTime']>,
  deleted?: Maybe<Scalars['Boolean']>,
  deleted_not?: Maybe<Scalars['Boolean']>,
  provider?: Maybe<SocialMediaType>,
  provider_not?: Maybe<SocialMediaType>,
  provider_in?: Maybe<Array<SocialMediaType>>,
  provider_not_in?: Maybe<Array<SocialMediaType>>,
  avatar?: Maybe<Scalars['String']>,
  avatar_not?: Maybe<Scalars['String']>,
  avatar_in?: Maybe<Array<Scalars['String']>>,
  avatar_not_in?: Maybe<Array<Scalars['String']>>,
  avatar_lt?: Maybe<Scalars['String']>,
  avatar_lte?: Maybe<Scalars['String']>,
  avatar_gt?: Maybe<Scalars['String']>,
  avatar_gte?: Maybe<Scalars['String']>,
  avatar_contains?: Maybe<Scalars['String']>,
  avatar_not_contains?: Maybe<Scalars['String']>,
  avatar_starts_with?: Maybe<Scalars['String']>,
  avatar_not_starts_with?: Maybe<Scalars['String']>,
  avatar_ends_with?: Maybe<Scalars['String']>,
  avatar_not_ends_with?: Maybe<Scalars['String']>,
  thirdPartyId?: Maybe<Scalars['String']>,
  thirdPartyId_not?: Maybe<Scalars['String']>,
  thirdPartyId_in?: Maybe<Array<Scalars['String']>>,
  thirdPartyId_not_in?: Maybe<Array<Scalars['String']>>,
  thirdPartyId_lt?: Maybe<Scalars['String']>,
  thirdPartyId_lte?: Maybe<Scalars['String']>,
  thirdPartyId_gt?: Maybe<Scalars['String']>,
  thirdPartyId_gte?: Maybe<Scalars['String']>,
  thirdPartyId_contains?: Maybe<Scalars['String']>,
  thirdPartyId_not_contains?: Maybe<Scalars['String']>,
  thirdPartyId_starts_with?: Maybe<Scalars['String']>,
  thirdPartyId_not_starts_with?: Maybe<Scalars['String']>,
  thirdPartyId_ends_with?: Maybe<Scalars['String']>,
  thirdPartyId_not_ends_with?: Maybe<Scalars['String']>,
  resetToken?: Maybe<Scalars['String']>,
  resetToken_not?: Maybe<Scalars['String']>,
  resetToken_in?: Maybe<Array<Scalars['String']>>,
  resetToken_not_in?: Maybe<Array<Scalars['String']>>,
  resetToken_lt?: Maybe<Scalars['String']>,
  resetToken_lte?: Maybe<Scalars['String']>,
  resetToken_gt?: Maybe<Scalars['String']>,
  resetToken_gte?: Maybe<Scalars['String']>,
  resetToken_contains?: Maybe<Scalars['String']>,
  resetToken_not_contains?: Maybe<Scalars['String']>,
  resetToken_starts_with?: Maybe<Scalars['String']>,
  resetToken_not_starts_with?: Maybe<Scalars['String']>,
  resetToken_ends_with?: Maybe<Scalars['String']>,
  resetToken_not_ends_with?: Maybe<Scalars['String']>,
  resetTokenExpiry?: Maybe<Scalars['DateTime']>,
  resetTokenExpiry_not?: Maybe<Scalars['DateTime']>,
  resetTokenExpiry_in?: Maybe<Array<Scalars['DateTime']>>,
  resetTokenExpiry_not_in?: Maybe<Array<Scalars['DateTime']>>,
  resetTokenExpiry_lt?: Maybe<Scalars['DateTime']>,
  resetTokenExpiry_lte?: Maybe<Scalars['DateTime']>,
  resetTokenExpiry_gt?: Maybe<Scalars['DateTime']>,
  resetTokenExpiry_gte?: Maybe<Scalars['DateTime']>,
  AND?: Maybe<Array<UserScalarWhereInput>>,
  OR?: Maybe<Array<UserScalarWhereInput>>,
  NOT?: Maybe<Array<UserScalarWhereInput>>,
};

export enum UserStatus {
  Offline = 'OFFLINE',
  Online = 'ONLINE'
}

export type UserSubscriptionPayload = {
   __typename?: 'UserSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<User>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<UserPreviousValues>,
};

export type UserSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<UserWhereInput>,
  AND?: Maybe<Array<UserSubscriptionWhereInput>>,
  OR?: Maybe<Array<UserSubscriptionWhereInput>>,
  NOT?: Maybe<Array<UserSubscriptionWhereInput>>,
};

export type UserUpdateDataInput = {
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  parties?: Maybe<PartyUpdateManyWithoutMembersInput>,
  friends?: Maybe<UserUpdateManyWithoutFriendsInput>,
  pendingFriendInvitations?: Maybe<UserUpdateManyWithoutPendingFriendInvitationsInput>,
  pendingPartyInvitations?: Maybe<PartyInvitationUpdateManyWithoutUserInput>,
  chats?: Maybe<ChatUpdateManyWithoutMembersInput>,
  lastOnline?: Maybe<Scalars['DateTime']>,
  deleted?: Maybe<Scalars['Boolean']>,
  provider?: Maybe<SocialMediaType>,
  avatar?: Maybe<Scalars['String']>,
  thirdPartyId?: Maybe<Scalars['String']>,
  resetToken?: Maybe<Scalars['String']>,
  resetTokenExpiry?: Maybe<Scalars['DateTime']>,
};

export type UserUpdateInput = {
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  parties?: Maybe<PartyUpdateManyWithoutMembersInput>,
  friends?: Maybe<UserUpdateManyWithoutFriendsInput>,
  pendingFriendInvitations?: Maybe<UserUpdateManyWithoutPendingFriendInvitationsInput>,
  pendingPartyInvitations?: Maybe<PartyInvitationUpdateManyWithoutUserInput>,
  chats?: Maybe<ChatUpdateManyWithoutMembersInput>,
  lastOnline?: Maybe<Scalars['DateTime']>,
  deleted?: Maybe<Scalars['Boolean']>,
  provider?: Maybe<SocialMediaType>,
  avatar?: Maybe<Scalars['String']>,
  thirdPartyId?: Maybe<Scalars['String']>,
  resetToken?: Maybe<Scalars['String']>,
  resetTokenExpiry?: Maybe<Scalars['DateTime']>,
};

export type UserUpdateManyDataInput = {
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  lastOnline?: Maybe<Scalars['DateTime']>,
  deleted?: Maybe<Scalars['Boolean']>,
  provider?: Maybe<SocialMediaType>,
  avatar?: Maybe<Scalars['String']>,
  thirdPartyId?: Maybe<Scalars['String']>,
  resetToken?: Maybe<Scalars['String']>,
  resetTokenExpiry?: Maybe<Scalars['DateTime']>,
};

export type UserUpdateManyMutationInput = {
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  lastOnline?: Maybe<Scalars['DateTime']>,
  deleted?: Maybe<Scalars['Boolean']>,
  provider?: Maybe<SocialMediaType>,
  avatar?: Maybe<Scalars['String']>,
  thirdPartyId?: Maybe<Scalars['String']>,
  resetToken?: Maybe<Scalars['String']>,
  resetTokenExpiry?: Maybe<Scalars['DateTime']>,
};

export type UserUpdateManyWithoutChatsInput = {
  create?: Maybe<Array<UserCreateWithoutChatsInput>>,
  delete?: Maybe<Array<UserWhereUniqueInput>>,
  connect?: Maybe<Array<UserWhereUniqueInput>>,
  set?: Maybe<Array<UserWhereUniqueInput>>,
  disconnect?: Maybe<Array<UserWhereUniqueInput>>,
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutChatsInput>>,
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutChatsInput>>,
  deleteMany?: Maybe<Array<UserScalarWhereInput>>,
  updateMany?: Maybe<Array<UserUpdateManyWithWhereNestedInput>>,
};

export type UserUpdateManyWithoutFriendsInput = {
  create?: Maybe<Array<UserCreateWithoutFriendsInput>>,
  delete?: Maybe<Array<UserWhereUniqueInput>>,
  connect?: Maybe<Array<UserWhereUniqueInput>>,
  set?: Maybe<Array<UserWhereUniqueInput>>,
  disconnect?: Maybe<Array<UserWhereUniqueInput>>,
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutFriendsInput>>,
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutFriendsInput>>,
  deleteMany?: Maybe<Array<UserScalarWhereInput>>,
  updateMany?: Maybe<Array<UserUpdateManyWithWhereNestedInput>>,
};

export type UserUpdateManyWithoutPartiesInput = {
  create?: Maybe<Array<UserCreateWithoutPartiesInput>>,
  delete?: Maybe<Array<UserWhereUniqueInput>>,
  connect?: Maybe<Array<UserWhereUniqueInput>>,
  set?: Maybe<Array<UserWhereUniqueInput>>,
  disconnect?: Maybe<Array<UserWhereUniqueInput>>,
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutPartiesInput>>,
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutPartiesInput>>,
  deleteMany?: Maybe<Array<UserScalarWhereInput>>,
  updateMany?: Maybe<Array<UserUpdateManyWithWhereNestedInput>>,
};

export type UserUpdateManyWithoutPendingFriendInvitationsInput = {
  create?: Maybe<Array<UserCreateWithoutPendingFriendInvitationsInput>>,
  delete?: Maybe<Array<UserWhereUniqueInput>>,
  connect?: Maybe<Array<UserWhereUniqueInput>>,
  set?: Maybe<Array<UserWhereUniqueInput>>,
  disconnect?: Maybe<Array<UserWhereUniqueInput>>,
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutPendingFriendInvitationsInput>>,
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutPendingFriendInvitationsInput>>,
  deleteMany?: Maybe<Array<UserScalarWhereInput>>,
  updateMany?: Maybe<Array<UserUpdateManyWithWhereNestedInput>>,
};

export type UserUpdateManyWithWhereNestedInput = {
  where: UserScalarWhereInput,
  data: UserUpdateManyDataInput,
};

export type UserUpdateOneInput = {
  create?: Maybe<UserCreateInput>,
  update?: Maybe<UserUpdateDataInput>,
  upsert?: Maybe<UserUpsertNestedInput>,
  delete?: Maybe<Scalars['Boolean']>,
  disconnect?: Maybe<Scalars['Boolean']>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserUpdateOneRequiredInput = {
  create?: Maybe<UserCreateInput>,
  update?: Maybe<UserUpdateDataInput>,
  upsert?: Maybe<UserUpsertNestedInput>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserUpdateOneRequiredWithoutPendingPartyInvitationsInput = {
  create?: Maybe<UserCreateWithoutPendingPartyInvitationsInput>,
  update?: Maybe<UserUpdateWithoutPendingPartyInvitationsDataInput>,
  upsert?: Maybe<UserUpsertWithoutPendingPartyInvitationsInput>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserUpdateWithoutChatsDataInput = {
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  parties?: Maybe<PartyUpdateManyWithoutMembersInput>,
  friends?: Maybe<UserUpdateManyWithoutFriendsInput>,
  pendingFriendInvitations?: Maybe<UserUpdateManyWithoutPendingFriendInvitationsInput>,
  pendingPartyInvitations?: Maybe<PartyInvitationUpdateManyWithoutUserInput>,
  lastOnline?: Maybe<Scalars['DateTime']>,
  deleted?: Maybe<Scalars['Boolean']>,
  provider?: Maybe<SocialMediaType>,
  avatar?: Maybe<Scalars['String']>,
  thirdPartyId?: Maybe<Scalars['String']>,
  resetToken?: Maybe<Scalars['String']>,
  resetTokenExpiry?: Maybe<Scalars['DateTime']>,
};

export type UserUpdateWithoutFriendsDataInput = {
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  parties?: Maybe<PartyUpdateManyWithoutMembersInput>,
  pendingFriendInvitations?: Maybe<UserUpdateManyWithoutPendingFriendInvitationsInput>,
  pendingPartyInvitations?: Maybe<PartyInvitationUpdateManyWithoutUserInput>,
  chats?: Maybe<ChatUpdateManyWithoutMembersInput>,
  lastOnline?: Maybe<Scalars['DateTime']>,
  deleted?: Maybe<Scalars['Boolean']>,
  provider?: Maybe<SocialMediaType>,
  avatar?: Maybe<Scalars['String']>,
  thirdPartyId?: Maybe<Scalars['String']>,
  resetToken?: Maybe<Scalars['String']>,
  resetTokenExpiry?: Maybe<Scalars['DateTime']>,
};

export type UserUpdateWithoutPartiesDataInput = {
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  friends?: Maybe<UserUpdateManyWithoutFriendsInput>,
  pendingFriendInvitations?: Maybe<UserUpdateManyWithoutPendingFriendInvitationsInput>,
  pendingPartyInvitations?: Maybe<PartyInvitationUpdateManyWithoutUserInput>,
  chats?: Maybe<ChatUpdateManyWithoutMembersInput>,
  lastOnline?: Maybe<Scalars['DateTime']>,
  deleted?: Maybe<Scalars['Boolean']>,
  provider?: Maybe<SocialMediaType>,
  avatar?: Maybe<Scalars['String']>,
  thirdPartyId?: Maybe<Scalars['String']>,
  resetToken?: Maybe<Scalars['String']>,
  resetTokenExpiry?: Maybe<Scalars['DateTime']>,
};

export type UserUpdateWithoutPendingFriendInvitationsDataInput = {
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  parties?: Maybe<PartyUpdateManyWithoutMembersInput>,
  friends?: Maybe<UserUpdateManyWithoutFriendsInput>,
  pendingPartyInvitations?: Maybe<PartyInvitationUpdateManyWithoutUserInput>,
  chats?: Maybe<ChatUpdateManyWithoutMembersInput>,
  lastOnline?: Maybe<Scalars['DateTime']>,
  deleted?: Maybe<Scalars['Boolean']>,
  provider?: Maybe<SocialMediaType>,
  avatar?: Maybe<Scalars['String']>,
  thirdPartyId?: Maybe<Scalars['String']>,
  resetToken?: Maybe<Scalars['String']>,
  resetTokenExpiry?: Maybe<Scalars['DateTime']>,
};

export type UserUpdateWithoutPendingPartyInvitationsDataInput = {
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  parties?: Maybe<PartyUpdateManyWithoutMembersInput>,
  friends?: Maybe<UserUpdateManyWithoutFriendsInput>,
  pendingFriendInvitations?: Maybe<UserUpdateManyWithoutPendingFriendInvitationsInput>,
  chats?: Maybe<ChatUpdateManyWithoutMembersInput>,
  lastOnline?: Maybe<Scalars['DateTime']>,
  deleted?: Maybe<Scalars['Boolean']>,
  provider?: Maybe<SocialMediaType>,
  avatar?: Maybe<Scalars['String']>,
  thirdPartyId?: Maybe<Scalars['String']>,
  resetToken?: Maybe<Scalars['String']>,
  resetTokenExpiry?: Maybe<Scalars['DateTime']>,
};

export type UserUpdateWithWhereUniqueWithoutChatsInput = {
  where: UserWhereUniqueInput,
  data: UserUpdateWithoutChatsDataInput,
};

export type UserUpdateWithWhereUniqueWithoutFriendsInput = {
  where: UserWhereUniqueInput,
  data: UserUpdateWithoutFriendsDataInput,
};

export type UserUpdateWithWhereUniqueWithoutPartiesInput = {
  where: UserWhereUniqueInput,
  data: UserUpdateWithoutPartiesDataInput,
};

export type UserUpdateWithWhereUniqueWithoutPendingFriendInvitationsInput = {
  where: UserWhereUniqueInput,
  data: UserUpdateWithoutPendingFriendInvitationsDataInput,
};

export type UserUpsertNestedInput = {
  update: UserUpdateDataInput,
  create: UserCreateInput,
};

export type UserUpsertWithoutPendingPartyInvitationsInput = {
  update: UserUpdateWithoutPendingPartyInvitationsDataInput,
  create: UserCreateWithoutPendingPartyInvitationsInput,
};

export type UserUpsertWithWhereUniqueWithoutChatsInput = {
  where: UserWhereUniqueInput,
  update: UserUpdateWithoutChatsDataInput,
  create: UserCreateWithoutChatsInput,
};

export type UserUpsertWithWhereUniqueWithoutFriendsInput = {
  where: UserWhereUniqueInput,
  update: UserUpdateWithoutFriendsDataInput,
  create: UserCreateWithoutFriendsInput,
};

export type UserUpsertWithWhereUniqueWithoutPartiesInput = {
  where: UserWhereUniqueInput,
  update: UserUpdateWithoutPartiesDataInput,
  create: UserCreateWithoutPartiesInput,
};

export type UserUpsertWithWhereUniqueWithoutPendingFriendInvitationsInput = {
  where: UserWhereUniqueInput,
  update: UserUpdateWithoutPendingFriendInvitationsDataInput,
  create: UserCreateWithoutPendingFriendInvitationsInput,
};

export type UserWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  email?: Maybe<Scalars['String']>,
  email_not?: Maybe<Scalars['String']>,
  email_in?: Maybe<Array<Scalars['String']>>,
  email_not_in?: Maybe<Array<Scalars['String']>>,
  email_lt?: Maybe<Scalars['String']>,
  email_lte?: Maybe<Scalars['String']>,
  email_gt?: Maybe<Scalars['String']>,
  email_gte?: Maybe<Scalars['String']>,
  email_contains?: Maybe<Scalars['String']>,
  email_not_contains?: Maybe<Scalars['String']>,
  email_starts_with?: Maybe<Scalars['String']>,
  email_not_starts_with?: Maybe<Scalars['String']>,
  email_ends_with?: Maybe<Scalars['String']>,
  email_not_ends_with?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  firstName_not?: Maybe<Scalars['String']>,
  firstName_in?: Maybe<Array<Scalars['String']>>,
  firstName_not_in?: Maybe<Array<Scalars['String']>>,
  firstName_lt?: Maybe<Scalars['String']>,
  firstName_lte?: Maybe<Scalars['String']>,
  firstName_gt?: Maybe<Scalars['String']>,
  firstName_gte?: Maybe<Scalars['String']>,
  firstName_contains?: Maybe<Scalars['String']>,
  firstName_not_contains?: Maybe<Scalars['String']>,
  firstName_starts_with?: Maybe<Scalars['String']>,
  firstName_not_starts_with?: Maybe<Scalars['String']>,
  firstName_ends_with?: Maybe<Scalars['String']>,
  firstName_not_ends_with?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  lastName_not?: Maybe<Scalars['String']>,
  lastName_in?: Maybe<Array<Scalars['String']>>,
  lastName_not_in?: Maybe<Array<Scalars['String']>>,
  lastName_lt?: Maybe<Scalars['String']>,
  lastName_lte?: Maybe<Scalars['String']>,
  lastName_gt?: Maybe<Scalars['String']>,
  lastName_gte?: Maybe<Scalars['String']>,
  lastName_contains?: Maybe<Scalars['String']>,
  lastName_not_contains?: Maybe<Scalars['String']>,
  lastName_starts_with?: Maybe<Scalars['String']>,
  lastName_not_starts_with?: Maybe<Scalars['String']>,
  lastName_ends_with?: Maybe<Scalars['String']>,
  lastName_not_ends_with?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  password_not?: Maybe<Scalars['String']>,
  password_in?: Maybe<Array<Scalars['String']>>,
  password_not_in?: Maybe<Array<Scalars['String']>>,
  password_lt?: Maybe<Scalars['String']>,
  password_lte?: Maybe<Scalars['String']>,
  password_gt?: Maybe<Scalars['String']>,
  password_gte?: Maybe<Scalars['String']>,
  password_contains?: Maybe<Scalars['String']>,
  password_not_contains?: Maybe<Scalars['String']>,
  password_starts_with?: Maybe<Scalars['String']>,
  password_not_starts_with?: Maybe<Scalars['String']>,
  password_ends_with?: Maybe<Scalars['String']>,
  password_not_ends_with?: Maybe<Scalars['String']>,
  parties_every?: Maybe<PartyWhereInput>,
  parties_some?: Maybe<PartyWhereInput>,
  parties_none?: Maybe<PartyWhereInput>,
  friends_every?: Maybe<UserWhereInput>,
  friends_some?: Maybe<UserWhereInput>,
  friends_none?: Maybe<UserWhereInput>,
  pendingFriendInvitations_every?: Maybe<UserWhereInput>,
  pendingFriendInvitations_some?: Maybe<UserWhereInput>,
  pendingFriendInvitations_none?: Maybe<UserWhereInput>,
  pendingPartyInvitations_every?: Maybe<PartyInvitationWhereInput>,
  pendingPartyInvitations_some?: Maybe<PartyInvitationWhereInput>,
  pendingPartyInvitations_none?: Maybe<PartyInvitationWhereInput>,
  chats_every?: Maybe<ChatWhereInput>,
  chats_some?: Maybe<ChatWhereInput>,
  chats_none?: Maybe<ChatWhereInput>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  lastOnline?: Maybe<Scalars['DateTime']>,
  lastOnline_not?: Maybe<Scalars['DateTime']>,
  lastOnline_in?: Maybe<Array<Scalars['DateTime']>>,
  lastOnline_not_in?: Maybe<Array<Scalars['DateTime']>>,
  lastOnline_lt?: Maybe<Scalars['DateTime']>,
  lastOnline_lte?: Maybe<Scalars['DateTime']>,
  lastOnline_gt?: Maybe<Scalars['DateTime']>,
  lastOnline_gte?: Maybe<Scalars['DateTime']>,
  deleted?: Maybe<Scalars['Boolean']>,
  deleted_not?: Maybe<Scalars['Boolean']>,
  provider?: Maybe<SocialMediaType>,
  provider_not?: Maybe<SocialMediaType>,
  provider_in?: Maybe<Array<SocialMediaType>>,
  provider_not_in?: Maybe<Array<SocialMediaType>>,
  avatar?: Maybe<Scalars['String']>,
  avatar_not?: Maybe<Scalars['String']>,
  avatar_in?: Maybe<Array<Scalars['String']>>,
  avatar_not_in?: Maybe<Array<Scalars['String']>>,
  avatar_lt?: Maybe<Scalars['String']>,
  avatar_lte?: Maybe<Scalars['String']>,
  avatar_gt?: Maybe<Scalars['String']>,
  avatar_gte?: Maybe<Scalars['String']>,
  avatar_contains?: Maybe<Scalars['String']>,
  avatar_not_contains?: Maybe<Scalars['String']>,
  avatar_starts_with?: Maybe<Scalars['String']>,
  avatar_not_starts_with?: Maybe<Scalars['String']>,
  avatar_ends_with?: Maybe<Scalars['String']>,
  avatar_not_ends_with?: Maybe<Scalars['String']>,
  thirdPartyId?: Maybe<Scalars['String']>,
  thirdPartyId_not?: Maybe<Scalars['String']>,
  thirdPartyId_in?: Maybe<Array<Scalars['String']>>,
  thirdPartyId_not_in?: Maybe<Array<Scalars['String']>>,
  thirdPartyId_lt?: Maybe<Scalars['String']>,
  thirdPartyId_lte?: Maybe<Scalars['String']>,
  thirdPartyId_gt?: Maybe<Scalars['String']>,
  thirdPartyId_gte?: Maybe<Scalars['String']>,
  thirdPartyId_contains?: Maybe<Scalars['String']>,
  thirdPartyId_not_contains?: Maybe<Scalars['String']>,
  thirdPartyId_starts_with?: Maybe<Scalars['String']>,
  thirdPartyId_not_starts_with?: Maybe<Scalars['String']>,
  thirdPartyId_ends_with?: Maybe<Scalars['String']>,
  thirdPartyId_not_ends_with?: Maybe<Scalars['String']>,
  resetToken?: Maybe<Scalars['String']>,
  resetToken_not?: Maybe<Scalars['String']>,
  resetToken_in?: Maybe<Array<Scalars['String']>>,
  resetToken_not_in?: Maybe<Array<Scalars['String']>>,
  resetToken_lt?: Maybe<Scalars['String']>,
  resetToken_lte?: Maybe<Scalars['String']>,
  resetToken_gt?: Maybe<Scalars['String']>,
  resetToken_gte?: Maybe<Scalars['String']>,
  resetToken_contains?: Maybe<Scalars['String']>,
  resetToken_not_contains?: Maybe<Scalars['String']>,
  resetToken_starts_with?: Maybe<Scalars['String']>,
  resetToken_not_starts_with?: Maybe<Scalars['String']>,
  resetToken_ends_with?: Maybe<Scalars['String']>,
  resetToken_not_ends_with?: Maybe<Scalars['String']>,
  resetTokenExpiry?: Maybe<Scalars['DateTime']>,
  resetTokenExpiry_not?: Maybe<Scalars['DateTime']>,
  resetTokenExpiry_in?: Maybe<Array<Scalars['DateTime']>>,
  resetTokenExpiry_not_in?: Maybe<Array<Scalars['DateTime']>>,
  resetTokenExpiry_lt?: Maybe<Scalars['DateTime']>,
  resetTokenExpiry_lte?: Maybe<Scalars['DateTime']>,
  resetTokenExpiry_gt?: Maybe<Scalars['DateTime']>,
  resetTokenExpiry_gte?: Maybe<Scalars['DateTime']>,
  AND?: Maybe<Array<UserWhereInput>>,
  OR?: Maybe<Array<UserWhereInput>>,
  NOT?: Maybe<Array<UserWhereInput>>,
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
  email?: Maybe<Scalars['String']>,
};
export type Party_FragmentFragment = (
  { __typename?: 'Party' }
  & Pick<Party, 'id' | 'title' | 'description' | 'colorTint' | 'start' | 'end' | 'isPublic' | 'inviteSecret'>
  & { location: (
    { __typename?: 'Location' }
    & Pick<Location, 'placeName'>
  ), author: (
    { __typename?: 'User' }
    & Pick<User, 'firstName' | 'lastName' | 'id'>
  ), members: Maybe<Array<(
    { __typename?: 'User' }
    & Pick<User, 'avatar' | 'firstName' | 'lastName' | 'id'>
  )>> }
);

export type Message_FragmentFragment = (
  { __typename?: 'Message' }
  & Pick<Message, 'id' | 'isSendByMe' | 'optimisticallyAdded' | 'optimisticallyCreated' | 'hasOptimisticError' | 'content' | 'createdAt'>
  & { author: (
    { __typename?: 'User' }
    & Pick<User, 'firstName' | 'lastName' | 'avatar' | 'id'>
  ) }
);

export type Party_Invitation_FragmentFragment = (
  { __typename?: 'PartyInvitation' }
  & Pick<PartyInvitation, 'id' | 'createdAt'>
  & { invitedBy: (
    { __typename?: 'User' }
    & Pick<User, 'firstName' | 'lastName' | 'avatar'>
  ), user: (
    { __typename?: 'User' }
    & Pick<User, 'id'>
  ), party: (
    { __typename?: 'Party' }
    & Pick<Party, 'title' | 'id'>
  ) }
);

export type Last_Chat_Message_FragmentFragment = (
  { __typename?: 'Chat' }
  & Pick<Chat, 'hasUnreadMessages'>
  & { messages: Maybe<Array<(
    { __typename?: 'Message' }
    & Pick<Message, 'createdAt' | 'content'>
    & { author: (
      { __typename?: 'User' }
      & Pick<User, 'firstName' | 'lastName'>
    ) }
  )>> }
);

export type SignupMutationVariables = {
  email: Scalars['String'],
  password: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String']
};


export type SignupMutation = (
  { __typename?: 'Mutation' }
  & { signup: (
    { __typename?: 'AuthPayload' }
    & Pick<AuthPayload, 'token'>
  ) }
);

export type LoginMutationVariables = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'AuthPayload' }
    & Pick<AuthPayload, 'token'>
  ) }
);

export type CreatePartyMutationVariables = {
  data: PartyCreateInput
};


export type CreatePartyMutation = (
  { __typename?: 'Mutation' }
  & { createParty: { __typename?: 'Party' }
    & Party_FragmentFragment
   }
);

export type CreateMessageMutationVariables = {
  data: MessageCreateInput
};


export type CreateMessageMutation = (
  { __typename?: 'Mutation' }
  & { createMessage: (
    { __typename?: 'Message' }
    & Pick<Message, 'id' | 'isSendByMe' | 'optimisticallyAdded' | 'optimisticallyCreated' | 'hasOptimisticError' | 'content' | 'createdAt'>
    & { author: (
      { __typename?: 'User' }
      & Pick<User, 'firstName' | 'lastName' | 'avatar' | 'id'>
    ) }
  ) }
);

export type RequestPasswordResetMutationVariables = {
  email: Scalars['String']
};


export type RequestPasswordResetMutation = (
  { __typename?: 'Mutation' }
  & { requestReset: Maybe<(
    { __typename?: 'SuccessMessage' }
    & Pick<SuccessMessage, 'message'>
  )> }
);

export type ResetPasswordMutationVariables = {
  password: Scalars['String'],
  confirmPassword: Scalars['String'],
  resetToken: Scalars['String']
};


export type ResetPasswordMutation = (
  { __typename?: 'Mutation' }
  & { resetPassword: Maybe<(
    { __typename?: 'AuthPayload' }
    & Pick<AuthPayload, 'token'>
  )> }
);

export type UpdateUserMutationVariables = {
  data: UserUpdateInput,
  where: UserWhereUniqueInput
};


export type UpdateUserMutation = (
  { __typename?: 'Mutation' }
  & { updateUser: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
  )> }
);

export type CreatePartyInvitationMutationVariables = {
  data: PartyInvitationCreateInput
};


export type CreatePartyInvitationMutation = (
  { __typename?: 'Mutation' }
  & { createPartyInvitation: (
    { __typename?: 'PartyInvitation' }
    & Pick<PartyInvitation, 'id'>
  ) }
);

export type DeleteManyPartyInvitationsMutationVariables = {
  where?: Maybe<PartyInvitationWhereInput>
};


export type DeleteManyPartyInvitationsMutation = (
  { __typename?: 'Mutation' }
  & { deleteManyPartyInvitations: (
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  ) }
);

export type DeletePartyInvitationMutationMutationVariables = {
  where: PartyInvitationWhereUniqueInput
};


export type DeletePartyInvitationMutationMutation = (
  { __typename?: 'Mutation' }
  & { deletePartyInvitation: Maybe<(
    { __typename?: 'PartyInvitation' }
    & Pick<PartyInvitation, 'id'>
  )> }
);

export type JoinPartyMutationMutationVariables = {
  partyId: Scalars['ID']
};


export type JoinPartyMutationMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'joinParty'>
);

export type MeQueryQueryVariables = {};


export type MeQueryQuery = (
  { __typename?: 'Query' }
  & { me: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'firstName' | 'lastName' | 'avatar'>
  )> }
);

export type PaginateUsersQueryQueryVariables = {
  where?: Maybe<UserWhereInput>,
  orderBy?: Maybe<UserOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type PaginateUsersQueryQuery = (
  { __typename?: 'Query' }
  & { paginateUsers: (
    { __typename?: 'UserConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'UserEdge' }
      & { node: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'firstName' | 'lastName' | 'avatar' | 'lastOnline' | 'status'>
      ) }
    )>>, pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'hasNextPage' | 'endCursor'>
    ) }
  ) }
);

export type PartiesQueryQueryVariables = {
  where?: Maybe<PartyWhereInput>,
  orderBy?: Maybe<PartyOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type PartiesQueryQuery = (
  { __typename?: 'Query' }
  & { parties: Array<Maybe<(
    { __typename?: 'Party' }
    & { location: (
      { __typename?: 'Location' }
      & Pick<Location, 'placeName' | 'latitude' | 'longitude'>
    ) }
  )
    & Party_FragmentFragment
  >> }
);

export type PaginatePartiesQueryQueryVariables = {
  where?: Maybe<PartyWhereInput>,
  orderBy?: Maybe<PartyOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type PaginatePartiesQueryQuery = (
  { __typename?: 'Query' }
  & { partiesConnection: (
    { __typename?: 'PartyConnection' }
    & { pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'hasNextPage' | 'endCursor'>
    ), edges: Array<Maybe<(
      { __typename?: 'PartyEdge' }
      & { node: { __typename?: 'Party' }
        & Party_FragmentFragment
       }
    )>> }
  ) }
);

export type PaginateChatsQueryQueryVariables = {
  where?: Maybe<ChatWhereInput>,
  orderBy?: Maybe<ChatOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type PaginateChatsQueryQuery = (
  { __typename?: 'Query' }
  & { chatsConnection: (
    { __typename?: 'ChatConnection' }
    & { pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'hasNextPage' | 'endCursor'>
    ), edges: Array<Maybe<(
      { __typename?: 'ChatEdge' }
      & { node: (
        { __typename?: 'Chat' }
        & Pick<Chat, 'id' | 'hasUnreadMessages'>
        & { party: (
          { __typename?: 'Party' }
          & Pick<Party, 'title'>
        ), members: Maybe<Array<(
          { __typename?: 'User' }
          & Pick<User, 'avatar' | 'firstName' | 'lastName'>
        )>>, messages: Maybe<Array<(
          { __typename?: 'Message' }
          & Pick<Message, 'createdAt' | 'content'>
          & { author: (
            { __typename?: 'User' }
            & Pick<User, 'firstName' | 'lastName'>
          ) }
        )>> }
      ) }
    )>> }
  ) }
);

export type PaginateMessagesQueryQueryVariables = {
  where?: Maybe<MessageWhereInput>,
  orderBy?: Maybe<MessageOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type PaginateMessagesQueryQuery = (
  { __typename?: 'Query' }
  & { messagesConnection: (
    { __typename?: 'MessageConnection' }
    & { pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'startCursor' | 'hasPreviousPage'>
    ), edges: Array<Maybe<(
      { __typename?: 'MessageEdge' }
      & { node: { __typename?: 'Message' }
        & Message_FragmentFragment
       }
    )>> }
  ) }
);

export type PaginateUsersInviteToPartyQueryQueryVariables = {
  where?: Maybe<UserWhereInput>,
  orderBy?: Maybe<UserOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  partyInvitationWhere?: Maybe<PartyInvitationWhereInput>
};


export type PaginateUsersInviteToPartyQueryQuery = (
  { __typename?: 'Query' }
  & { paginateUsers: (
    { __typename?: 'UserConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'UserEdge' }
      & { node: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'firstName' | 'lastName' | 'avatar' | 'lastOnline' | 'status'>
        & { pendingPartyInvitations: Maybe<Array<(
          { __typename?: 'PartyInvitation' }
          & Pick<PartyInvitation, 'id'>
          & { invitedBy: (
            { __typename?: 'User' }
            & Pick<User, 'id'>
          ), party: (
            { __typename?: 'Party' }
            & Pick<Party, 'id'>
          ) }
        )>> }
      ) }
    )>>, pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'hasNextPage' | 'endCursor'>
    ) }
  ) }
);

export type PartyInvitationsConnectionQueryQueryVariables = {
  where?: Maybe<PartyInvitationWhereInput>,
  orderBy?: Maybe<PartyInvitationOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type PartyInvitationsConnectionQueryQuery = (
  { __typename?: 'Query' }
  & { partyInvitationsConnection: (
    { __typename?: 'PartyInvitationConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'PartyInvitationEdge' }
      & { node: { __typename?: 'PartyInvitation' }
        & Party_Invitation_FragmentFragment
       }
    )>>, pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'hasNextPage' | 'endCursor'>
    ) }
  ), full: (
    { __typename?: 'PartyInvitationConnection' }
    & { aggregate: (
      { __typename?: 'AggregatePartyInvitation' }
      & Pick<AggregatePartyInvitation, 'count'>
    ) }
  ) }
);

export type HasChatsQueryQueryVariables = {
  where?: Maybe<ChatWhereInput>
};


export type HasChatsQueryQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'hasChats'>
);

export type HasPartiesQueryQueryVariables = {
  where?: Maybe<PartyWhereInput>
};


export type HasPartiesQueryQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'hasParties'>
);

export type PartyInvitationsQueryQueryVariables = {
  where?: Maybe<PartyInvitationWhereInput>,
  orderBy?: Maybe<PartyInvitationOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type PartyInvitationsQueryQuery = (
  { __typename?: 'Query' }
  & { partyInvitations: Array<Maybe<(
    { __typename?: 'PartyInvitation' }
    & Pick<PartyInvitation, 'id'>
  )>> }
);

export type CanJoinPartyQueryQueryVariables = {
  userId: Scalars['String'],
  inviteSecret: Scalars['String'],
  partyId: Scalars['String']
};


export type CanJoinPartyQueryQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'canJoinParty'>
);

export type ChatMessagesSubscriptionSubscriptionVariables = {
  where?: Maybe<MessageSubscriptionWhereInput>
};


export type ChatMessagesSubscriptionSubscription = (
  { __typename?: 'Subscription' }
  & { message: Maybe<(
    { __typename?: 'MessageSubscriptionPayload' }
    & { node: Maybe<(
      { __typename?: 'Message' }
      & Pick<Message, 'id' | 'isSendByMe' | 'optimisticallyAdded' | 'optimisticallyCreated' | 'hasOptimisticError' | 'content' | 'createdAt'>
      & { author: (
        { __typename?: 'User' }
        & Pick<User, 'firstName' | 'lastName' | 'avatar' | 'id'>
      ), chat: (
        { __typename?: 'Chat' }
        & Pick<Chat, 'id'>
      ) }
    )> }
  )> }
);

export type PartyInvitationSubscriptionSubscriptionVariables = {
  where?: Maybe<PartyInvitationSubscriptionWhereInput>
};


export type PartyInvitationSubscriptionSubscription = (
  { __typename?: 'Subscription' }
  & { partyInvitation: Maybe<(
    { __typename?: 'PartyInvitationSubscriptionPayload' }
    & Pick<PartyInvitationSubscriptionPayload, 'mutation'>
    & { node: Maybe<{ __typename?: 'PartyInvitation' }
      & Party_Invitation_FragmentFragment
    >, previousValues: Maybe<(
      { __typename?: 'PartyInvitationPreviousValues' }
      & Pick<PartyInvitationPreviousValues, 'id' | 'invitedUserId' | 'partyId'>
    )> }
  )> }
);

export type JoinPartyFindQueryVariables = {
  inviteSecret: Scalars['String'],
  userId: Scalars['ID']
};


export type JoinPartyFindQuery = (
  { __typename?: 'Query' }
  & { parties: Array<Maybe<(
    { __typename?: 'Party' }
    & Pick<Party, 'id' | 'title'>
    & { members: Maybe<Array<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'firstName' | 'lastName' | 'avatar'>
    )>> }
  )>>, membersCount: (
    { __typename?: 'UserConnection' }
    & { aggregate: (
      { __typename?: 'AggregateUser' }
      & Pick<AggregateUser, 'count'>
    ) }
  ) }
);

export type Is_Unread_ThreadFragment = (
  { __typename?: 'Chat' }
  & Pick<Chat, 'hasUnreadMessages'>
);

export type PartyDashboardParticipantsQueryQueryVariables = {
  where?: Maybe<UserWhereInput>,
  orderBy?: Maybe<UserOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type PartyDashboardParticipantsQueryQuery = (
  { __typename?: 'Query' }
  & { usersConnection: (
    { __typename?: 'UserConnection' }
    & { pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'hasNextPage' | 'endCursor'>
    ), edges: Array<Maybe<(
      { __typename?: 'UserEdge' }
      & { node: (
        { __typename?: 'User' }
        & Pick<User, 'firstName' | 'lastName' | 'avatar'>
      ) }
    )>> }
  ), aggregated: (
    { __typename?: 'UserConnection' }
    & { aggregate: (
      { __typename?: 'AggregateUser' }
      & Pick<AggregateUser, 'count'>
    ) }
  ) }
);
export type Party_FragmentLocation = Party_FragmentFragment['location'];
export type Party_FragmentAuthor = Party_FragmentFragment['author'];
export type Party_FragmentMembers = Party_FragmentFragment['members'][0];
export type Message_FragmentAuthor = Message_FragmentFragment['author'];
export type Party_Invitation_FragmentInvitedBy = Party_Invitation_FragmentFragment['invitedBy'];
export type Party_Invitation_FragmentUser = Party_Invitation_FragmentFragment['user'];
export type Party_Invitation_FragmentParty = Party_Invitation_FragmentFragment['party'];
export type Last_Chat_Message_FragmentMessages = Last_Chat_Message_FragmentFragment['messages'][0];
export type Last_Chat_Message_FragmentAuthor = Last_Chat_Message_FragmentFragment['messages'][0]['author'];
export type SignupVariables = SignupMutationVariables;
export type SignupSignup = SignupMutation['signup'];
export const useSignup = useSignupMutation;
export type LoginVariables = LoginMutationVariables;
export type LoginLogin = LoginMutation['login'];
export const useLogin = useLoginMutation;
export type CreatePartyVariables = CreatePartyMutationVariables;
export type CreatePartyCreateParty = Party_FragmentFragment;
export const useCreateParty = useCreatePartyMutation;
export type CreateMessageVariables = CreateMessageMutationVariables;
export type CreateMessageCreateMessage = CreateMessageMutation['createMessage'];
export type CreateMessageAuthor = CreateMessageMutation['createMessage']['author'];
export const useCreateMessage = useCreateMessageMutation;
export type RequestPasswordResetVariables = RequestPasswordResetMutationVariables;
export type RequestPasswordResetRequestReset = RequestPasswordResetMutation['requestReset'];
export const useRequestPasswordReset = useRequestPasswordResetMutation;
export type ResetPasswordVariables = ResetPasswordMutationVariables;
export type ResetPasswordResetPassword = ResetPasswordMutation['resetPassword'];
export const useResetPassword = useResetPasswordMutation;
export type UpdateUserVariables = UpdateUserMutationVariables;
export type UpdateUserUpdateUser = UpdateUserMutation['updateUser'];
export const useUpdateUser = useUpdateUserMutation;
export type CreatePartyInvitationVariables = CreatePartyInvitationMutationVariables;
export type CreatePartyInvitationCreatePartyInvitation = CreatePartyInvitationMutation['createPartyInvitation'];
export const useCreatePartyInvitation = useCreatePartyInvitationMutation;
export type DeleteManyPartyInvitationsVariables = DeleteManyPartyInvitationsMutationVariables;
export type DeleteManyPartyInvitationsDeleteManyPartyInvitations = DeleteManyPartyInvitationsMutation['deleteManyPartyInvitations'];
export const useDeleteManyPartyInvitations = useDeleteManyPartyInvitationsMutation;
export type DeletePartyInvitationMutationVariables = DeletePartyInvitationMutationMutationVariables;
export type DeletePartyInvitationMutationDeletePartyInvitation = DeletePartyInvitationMutationMutation['deletePartyInvitation'];
export const useDeletePartyInvitationMutation = useDeletePartyInvitationMutationMutation;
export type JoinPartyMutationVariables = JoinPartyMutationMutationVariables;
export const useJoinPartyMutation = useJoinPartyMutationMutation;
export type MeQueryVariables = MeQueryQueryVariables;
export type MeQueryMe = MeQueryQuery['me'];
export const useMeQuery = useMeQueryQuery;
export type PaginateUsersQueryVariables = PaginateUsersQueryQueryVariables;
export type PaginateUsersQueryPaginateUsers = PaginateUsersQueryQuery['paginateUsers'];
export type PaginateUsersQueryEdges = PaginateUsersQueryQuery['paginateUsers']['edges'][0];
export type PaginateUsersQueryNode = PaginateUsersQueryQuery['paginateUsers']['edges'][0]['node'];
export type PaginateUsersQueryPageInfo = PaginateUsersQueryQuery['paginateUsers']['pageInfo'];
export const usePaginateUsersQuery = usePaginateUsersQueryQuery;
export type PartiesQueryVariables = PartiesQueryQueryVariables;
export type PartiesQueryParties = Party_FragmentFragment;
export type PartiesQueryLocation = PartiesQueryQuery['parties'][0]['location'];
export const usePartiesQuery = usePartiesQueryQuery;
export type PaginatePartiesQueryVariables = PaginatePartiesQueryQueryVariables;
export type PaginatePartiesQueryPartiesConnection = PaginatePartiesQueryQuery['partiesConnection'];
export type PaginatePartiesQueryPageInfo = PaginatePartiesQueryQuery['partiesConnection']['pageInfo'];
export type PaginatePartiesQueryEdges = PaginatePartiesQueryQuery['partiesConnection']['edges'][0];
export type PaginatePartiesQueryNode = Party_FragmentFragment;
export const usePaginatePartiesQuery = usePaginatePartiesQueryQuery;
export type PaginateChatsQueryVariables = PaginateChatsQueryQueryVariables;
export type PaginateChatsQueryChatsConnection = PaginateChatsQueryQuery['chatsConnection'];
export type PaginateChatsQueryPageInfo = PaginateChatsQueryQuery['chatsConnection']['pageInfo'];
export type PaginateChatsQueryEdges = PaginateChatsQueryQuery['chatsConnection']['edges'][0];
export type PaginateChatsQueryNode = PaginateChatsQueryQuery['chatsConnection']['edges'][0]['node'];
export type PaginateChatsQueryParty = PaginateChatsQueryQuery['chatsConnection']['edges'][0]['node']['party'];
export type PaginateChatsQueryMembers = PaginateChatsQueryQuery['chatsConnection']['edges'][0]['node']['members'][0];
export type PaginateChatsQueryMessages = PaginateChatsQueryQuery['chatsConnection']['edges'][0]['node']['messages'][0];
export type PaginateChatsQueryAuthor = PaginateChatsQueryQuery['chatsConnection']['edges'][0]['node']['messages'][0]['author'];
export const usePaginateChatsQuery = usePaginateChatsQueryQuery;
export type PaginateMessagesQueryVariables = PaginateMessagesQueryQueryVariables;
export type PaginateMessagesQueryMessagesConnection = PaginateMessagesQueryQuery['messagesConnection'];
export type PaginateMessagesQueryPageInfo = PaginateMessagesQueryQuery['messagesConnection']['pageInfo'];
export type PaginateMessagesQueryEdges = PaginateMessagesQueryQuery['messagesConnection']['edges'][0];
export type PaginateMessagesQueryNode = Message_FragmentFragment;
export const usePaginateMessagesQuery = usePaginateMessagesQueryQuery;
export type PaginateUsersInviteToPartyQueryVariables = PaginateUsersInviteToPartyQueryQueryVariables;
export type PaginateUsersInviteToPartyQueryPaginateUsers = PaginateUsersInviteToPartyQueryQuery['paginateUsers'];
export type PaginateUsersInviteToPartyQueryEdges = PaginateUsersInviteToPartyQueryQuery['paginateUsers']['edges'][0];
export type PaginateUsersInviteToPartyQueryNode = PaginateUsersInviteToPartyQueryQuery['paginateUsers']['edges'][0]['node'];
export type PaginateUsersInviteToPartyQueryPendingPartyInvitations = PaginateUsersInviteToPartyQueryQuery['paginateUsers']['edges'][0]['node']['pendingPartyInvitations'][0];
export type PaginateUsersInviteToPartyQueryInvitedBy = PaginateUsersInviteToPartyQueryQuery['paginateUsers']['edges'][0]['node']['pendingPartyInvitations'][0]['invitedBy'];
export type PaginateUsersInviteToPartyQueryParty = PaginateUsersInviteToPartyQueryQuery['paginateUsers']['edges'][0]['node']['pendingPartyInvitations'][0]['party'];
export type PaginateUsersInviteToPartyQueryPageInfo = PaginateUsersInviteToPartyQueryQuery['paginateUsers']['pageInfo'];
export const usePaginateUsersInviteToPartyQuery = usePaginateUsersInviteToPartyQueryQuery;
export type PartyInvitationsConnectionQueryVariables = PartyInvitationsConnectionQueryQueryVariables;
export type PartyInvitationsConnectionQueryPartyInvitationsConnection = PartyInvitationsConnectionQueryQuery['partyInvitationsConnection'];
export type PartyInvitationsConnectionQueryEdges = PartyInvitationsConnectionQueryQuery['partyInvitationsConnection']['edges'][0];
export type PartyInvitationsConnectionQueryNode = Party_Invitation_FragmentFragment;
export type PartyInvitationsConnectionQueryPageInfo = PartyInvitationsConnectionQueryQuery['partyInvitationsConnection']['pageInfo'];
export type PartyInvitationsConnectionQueryFull = PartyInvitationsConnectionQueryQuery['full'];
export type PartyInvitationsConnectionQueryAggregate = PartyInvitationsConnectionQueryQuery['full']['aggregate'];
export const usePartyInvitationsConnectionQuery = usePartyInvitationsConnectionQueryQuery;
export type HasChatsQueryVariables = HasChatsQueryQueryVariables;
export const useHasChatsQuery = useHasChatsQueryQuery;
export type HasPartiesQueryVariables = HasPartiesQueryQueryVariables;
export const useHasPartiesQuery = useHasPartiesQueryQuery;
export type PartyInvitationsQueryVariables = PartyInvitationsQueryQueryVariables;
export type PartyInvitationsQueryPartyInvitations = PartyInvitationsQueryQuery['partyInvitations'][0];
export const usePartyInvitationsQuery = usePartyInvitationsQueryQuery;
export type CanJoinPartyQueryVariables = CanJoinPartyQueryQueryVariables;
export const useCanJoinPartyQuery = useCanJoinPartyQueryQuery;
export type ChatMessagesSubscriptionVariables = ChatMessagesSubscriptionSubscriptionVariables;
export type ChatMessagesSubscriptionMessage = ChatMessagesSubscriptionSubscription['message'];
export type ChatMessagesSubscriptionNode = ChatMessagesSubscriptionSubscription['message']['node'];
export type ChatMessagesSubscriptionAuthor = ChatMessagesSubscriptionSubscription['message']['node']['author'];
export type ChatMessagesSubscriptionChat = ChatMessagesSubscriptionSubscription['message']['node']['chat'];
export const useChatMessagesSubscription = useChatMessagesSubscriptionSubscription;
export type PartyInvitationSubscriptionVariables = PartyInvitationSubscriptionSubscriptionVariables;
export type PartyInvitationSubscriptionPartyInvitation = PartyInvitationSubscriptionSubscription['partyInvitation'];
export type PartyInvitationSubscriptionNode = Party_Invitation_FragmentFragment;
export type PartyInvitationSubscriptionPreviousValues = PartyInvitationSubscriptionSubscription['partyInvitation']['previousValues'];
export const usePartyInvitationSubscription = usePartyInvitationSubscriptionSubscription;
export type JoinPartyFindVariables = JoinPartyFindQueryVariables;
export type JoinPartyFindParties = JoinPartyFindQuery['parties'][0];
export type JoinPartyFindMembers = JoinPartyFindQuery['parties'][0]['members'][0];
export type JoinPartyFindMembersCount = JoinPartyFindQuery['membersCount'];
export type JoinPartyFindAggregate = JoinPartyFindQuery['membersCount']['aggregate'];
export const useJoinPartyFind = useJoinPartyFindQuery;
export type PartyDashboardParticipantsQueryVariables = PartyDashboardParticipantsQueryQueryVariables;
export type PartyDashboardParticipantsQueryUsersConnection = PartyDashboardParticipantsQueryQuery['usersConnection'];
export type PartyDashboardParticipantsQueryPageInfo = PartyDashboardParticipantsQueryQuery['usersConnection']['pageInfo'];
export type PartyDashboardParticipantsQueryEdges = PartyDashboardParticipantsQueryQuery['usersConnection']['edges'][0];
export type PartyDashboardParticipantsQueryNode = PartyDashboardParticipantsQueryQuery['usersConnection']['edges'][0]['node'];
export type PartyDashboardParticipantsQueryAggregated = PartyDashboardParticipantsQueryQuery['aggregated'];
export type PartyDashboardParticipantsQueryAggregate = PartyDashboardParticipantsQueryQuery['aggregated']['aggregate'];
export const usePartyDashboardParticipantsQuery = usePartyDashboardParticipantsQueryQuery;export const Party_FragmentFragmentDoc = gql`
    fragment PARTY_FRAGMENT on Party {
  id
  title
  description
  location {
    placeName
  }
  author {
    firstName
    lastName
    id
  }
  members {
    avatar
    firstName
    lastName
    id
  }
  colorTint
  start
  end
  isPublic
  inviteSecret
}
    `;
export const Message_FragmentFragmentDoc = gql`
    fragment MESSAGE_FRAGMENT on Message {
  id
  author {
    firstName
    lastName
    avatar
    id
  }
  isSendByMe @client
  optimisticallyAdded @client
  optimisticallyCreated @client
  hasOptimisticError @client
  content
  createdAt
}
    `;
export const Party_Invitation_FragmentFragmentDoc = gql`
    fragment PARTY_INVITATION_FRAGMENT on PartyInvitation {
  id
  createdAt
  invitedBy {
    firstName
    lastName
    avatar
  }
  user {
    id
  }
  party {
    title
    id
  }
}
    `;
export const Last_Chat_Message_FragmentFragmentDoc = gql`
    fragment LAST_CHAT_MESSAGE_FRAGMENT on Chat {
  messages(last: 1) {
    createdAt
    content
    author {
      firstName
      lastName
    }
  }
  hasUnreadMessages @client
}
    `;
export const Is_Unread_ThreadFragmentDoc = gql`
    fragment IS_UNREAD_THREAD on Chat {
  hasUnreadMessages @client
}
    `;
export const SignupDocument = gql`
    mutation Signup($email: String!, $password: String!, $firstName: String!, $lastName: String!) {
  signup(email: $email, password: $password, firstName: $firstName, lastName: $lastName) {
    token
  }
}
    `;
export type SignupMutationFn = ApolloReactCommon.MutationFunction<SignupMutation, SignupMutationVariables>;
export type SignupComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<SignupMutation, SignupMutationVariables>, 'mutation'>;

    export const SignupComponent = (props: SignupComponentProps) => (
      <ApolloReactComponents.Mutation<SignupMutation, SignupMutationVariables> mutation={SignupDocument} {...props} />
    );
    

    export function useSignupMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
      return ApolloReactHooks.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, baseOptions);
    }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = ApolloReactCommon.MutationResult<SignupMutation>;
export type SignupMutationOptions = ApolloReactCommon.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
  }
}
    `;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;
export type LoginComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<LoginMutation, LoginMutationVariables>, 'mutation'>;

    export const LoginComponent = (props: LoginComponentProps) => (
      <ApolloReactComponents.Mutation<LoginMutation, LoginMutationVariables> mutation={LoginDocument} {...props} />
    );
    

    export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
      return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
    }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const CreatePartyDocument = gql`
    mutation CreateParty($data: PartyCreateInput!) {
  createParty(data: $data) {
    ...PARTY_FRAGMENT
  }
}
    ${Party_FragmentFragmentDoc}`;
export type CreatePartyMutationFn = ApolloReactCommon.MutationFunction<CreatePartyMutation, CreatePartyMutationVariables>;
export type CreatePartyComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreatePartyMutation, CreatePartyMutationVariables>, 'mutation'>;

    export const CreatePartyComponent = (props: CreatePartyComponentProps) => (
      <ApolloReactComponents.Mutation<CreatePartyMutation, CreatePartyMutationVariables> mutation={CreatePartyDocument} {...props} />
    );
    

    export function useCreatePartyMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreatePartyMutation, CreatePartyMutationVariables>) {
      return ApolloReactHooks.useMutation<CreatePartyMutation, CreatePartyMutationVariables>(CreatePartyDocument, baseOptions);
    }
export type CreatePartyMutationHookResult = ReturnType<typeof useCreatePartyMutation>;
export type CreatePartyMutationResult = ApolloReactCommon.MutationResult<CreatePartyMutation>;
export type CreatePartyMutationOptions = ApolloReactCommon.BaseMutationOptions<CreatePartyMutation, CreatePartyMutationVariables>;
export const CreateMessageDocument = gql`
    mutation CreateMessage($data: MessageCreateInput!) {
  createMessage(data: $data) {
    id
    author {
      firstName
      lastName
      avatar
      id
    }
    isSendByMe @client
    optimisticallyAdded @client
    optimisticallyCreated @client
    hasOptimisticError @client
    content
    createdAt
  }
}
    `;
export type CreateMessageMutationFn = ApolloReactCommon.MutationFunction<CreateMessageMutation, CreateMessageMutationVariables>;
export type CreateMessageComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateMessageMutation, CreateMessageMutationVariables>, 'mutation'>;

    export const CreateMessageComponent = (props: CreateMessageComponentProps) => (
      <ApolloReactComponents.Mutation<CreateMessageMutation, CreateMessageMutationVariables> mutation={CreateMessageDocument} {...props} />
    );
    

    export function useCreateMessageMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateMessageMutation, CreateMessageMutationVariables>) {
      return ApolloReactHooks.useMutation<CreateMessageMutation, CreateMessageMutationVariables>(CreateMessageDocument, baseOptions);
    }
export type CreateMessageMutationHookResult = ReturnType<typeof useCreateMessageMutation>;
export type CreateMessageMutationResult = ApolloReactCommon.MutationResult<CreateMessageMutation>;
export type CreateMessageMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateMessageMutation, CreateMessageMutationVariables>;
export const RequestPasswordResetDocument = gql`
    mutation RequestPasswordReset($email: String!) {
  requestReset(email: $email) {
    message
  }
}
    `;
export type RequestPasswordResetMutationFn = ApolloReactCommon.MutationFunction<RequestPasswordResetMutation, RequestPasswordResetMutationVariables>;
export type RequestPasswordResetComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<RequestPasswordResetMutation, RequestPasswordResetMutationVariables>, 'mutation'>;

    export const RequestPasswordResetComponent = (props: RequestPasswordResetComponentProps) => (
      <ApolloReactComponents.Mutation<RequestPasswordResetMutation, RequestPasswordResetMutationVariables> mutation={RequestPasswordResetDocument} {...props} />
    );
    

    export function useRequestPasswordResetMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RequestPasswordResetMutation, RequestPasswordResetMutationVariables>) {
      return ApolloReactHooks.useMutation<RequestPasswordResetMutation, RequestPasswordResetMutationVariables>(RequestPasswordResetDocument, baseOptions);
    }
export type RequestPasswordResetMutationHookResult = ReturnType<typeof useRequestPasswordResetMutation>;
export type RequestPasswordResetMutationResult = ApolloReactCommon.MutationResult<RequestPasswordResetMutation>;
export type RequestPasswordResetMutationOptions = ApolloReactCommon.BaseMutationOptions<RequestPasswordResetMutation, RequestPasswordResetMutationVariables>;
export const ResetPasswordDocument = gql`
    mutation ResetPassword($password: String!, $confirmPassword: String!, $resetToken: String!) {
  resetPassword(password: $password, confirmPassword: $confirmPassword, resetToken: $resetToken) {
    token
  }
}
    `;
export type ResetPasswordMutationFn = ApolloReactCommon.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>;
export type ResetPasswordComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<ResetPasswordMutation, ResetPasswordMutationVariables>, 'mutation'>;

    export const ResetPasswordComponent = (props: ResetPasswordComponentProps) => (
      <ApolloReactComponents.Mutation<ResetPasswordMutation, ResetPasswordMutationVariables> mutation={ResetPasswordDocument} {...props} />
    );
    

    export function useResetPasswordMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
      return ApolloReactHooks.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, baseOptions);
    }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = ApolloReactCommon.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
  updateUser(data: $data, where: $where) {
    id
  }
}
    `;
export type UpdateUserMutationFn = ApolloReactCommon.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;
export type UpdateUserComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateUserMutation, UpdateUserMutationVariables>, 'mutation'>;

    export const UpdateUserComponent = (props: UpdateUserComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateUserMutation, UpdateUserMutationVariables> mutation={UpdateUserDocument} {...props} />
    );
    

    export function useUpdateUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
      return ApolloReactHooks.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, baseOptions);
    }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = ApolloReactCommon.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const CreatePartyInvitationDocument = gql`
    mutation CreatePartyInvitation($data: PartyInvitationCreateInput!) {
  createPartyInvitation(data: $data) {
    id
  }
}
    `;
export type CreatePartyInvitationMutationFn = ApolloReactCommon.MutationFunction<CreatePartyInvitationMutation, CreatePartyInvitationMutationVariables>;
export type CreatePartyInvitationComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreatePartyInvitationMutation, CreatePartyInvitationMutationVariables>, 'mutation'>;

    export const CreatePartyInvitationComponent = (props: CreatePartyInvitationComponentProps) => (
      <ApolloReactComponents.Mutation<CreatePartyInvitationMutation, CreatePartyInvitationMutationVariables> mutation={CreatePartyInvitationDocument} {...props} />
    );
    

    export function useCreatePartyInvitationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreatePartyInvitationMutation, CreatePartyInvitationMutationVariables>) {
      return ApolloReactHooks.useMutation<CreatePartyInvitationMutation, CreatePartyInvitationMutationVariables>(CreatePartyInvitationDocument, baseOptions);
    }
export type CreatePartyInvitationMutationHookResult = ReturnType<typeof useCreatePartyInvitationMutation>;
export type CreatePartyInvitationMutationResult = ApolloReactCommon.MutationResult<CreatePartyInvitationMutation>;
export type CreatePartyInvitationMutationOptions = ApolloReactCommon.BaseMutationOptions<CreatePartyInvitationMutation, CreatePartyInvitationMutationVariables>;
export const DeleteManyPartyInvitationsDocument = gql`
    mutation DeleteManyPartyInvitations($where: PartyInvitationWhereInput) {
  deleteManyPartyInvitations(where: $where) {
    count
  }
}
    `;
export type DeleteManyPartyInvitationsMutationFn = ApolloReactCommon.MutationFunction<DeleteManyPartyInvitationsMutation, DeleteManyPartyInvitationsMutationVariables>;
export type DeleteManyPartyInvitationsComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteManyPartyInvitationsMutation, DeleteManyPartyInvitationsMutationVariables>, 'mutation'>;

    export const DeleteManyPartyInvitationsComponent = (props: DeleteManyPartyInvitationsComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteManyPartyInvitationsMutation, DeleteManyPartyInvitationsMutationVariables> mutation={DeleteManyPartyInvitationsDocument} {...props} />
    );
    

    export function useDeleteManyPartyInvitationsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteManyPartyInvitationsMutation, DeleteManyPartyInvitationsMutationVariables>) {
      return ApolloReactHooks.useMutation<DeleteManyPartyInvitationsMutation, DeleteManyPartyInvitationsMutationVariables>(DeleteManyPartyInvitationsDocument, baseOptions);
    }
export type DeleteManyPartyInvitationsMutationHookResult = ReturnType<typeof useDeleteManyPartyInvitationsMutation>;
export type DeleteManyPartyInvitationsMutationResult = ApolloReactCommon.MutationResult<DeleteManyPartyInvitationsMutation>;
export type DeleteManyPartyInvitationsMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteManyPartyInvitationsMutation, DeleteManyPartyInvitationsMutationVariables>;
export const DeletePartyInvitationMutationDocument = gql`
    mutation DeletePartyInvitationMutation($where: PartyInvitationWhereUniqueInput!) {
  deletePartyInvitation(where: $where) {
    id
  }
}
    `;
export type DeletePartyInvitationMutationMutationFn = ApolloReactCommon.MutationFunction<DeletePartyInvitationMutationMutation, DeletePartyInvitationMutationMutationVariables>;
export type DeletePartyInvitationMutationComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeletePartyInvitationMutationMutation, DeletePartyInvitationMutationMutationVariables>, 'mutation'>;

    export const DeletePartyInvitationMutationComponent = (props: DeletePartyInvitationMutationComponentProps) => (
      <ApolloReactComponents.Mutation<DeletePartyInvitationMutationMutation, DeletePartyInvitationMutationMutationVariables> mutation={DeletePartyInvitationMutationDocument} {...props} />
    );
    

    export function useDeletePartyInvitationMutationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeletePartyInvitationMutationMutation, DeletePartyInvitationMutationMutationVariables>) {
      return ApolloReactHooks.useMutation<DeletePartyInvitationMutationMutation, DeletePartyInvitationMutationMutationVariables>(DeletePartyInvitationMutationDocument, baseOptions);
    }
export type DeletePartyInvitationMutationMutationHookResult = ReturnType<typeof useDeletePartyInvitationMutationMutation>;
export type DeletePartyInvitationMutationMutationResult = ApolloReactCommon.MutationResult<DeletePartyInvitationMutationMutation>;
export type DeletePartyInvitationMutationMutationOptions = ApolloReactCommon.BaseMutationOptions<DeletePartyInvitationMutationMutation, DeletePartyInvitationMutationMutationVariables>;
export const JoinPartyMutationDocument = gql`
    mutation JoinPartyMutation($partyId: ID!) {
  joinParty(partyId: $partyId)
}
    `;
export type JoinPartyMutationMutationFn = ApolloReactCommon.MutationFunction<JoinPartyMutationMutation, JoinPartyMutationMutationVariables>;
export type JoinPartyMutationComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<JoinPartyMutationMutation, JoinPartyMutationMutationVariables>, 'mutation'>;

    export const JoinPartyMutationComponent = (props: JoinPartyMutationComponentProps) => (
      <ApolloReactComponents.Mutation<JoinPartyMutationMutation, JoinPartyMutationMutationVariables> mutation={JoinPartyMutationDocument} {...props} />
    );
    

    export function useJoinPartyMutationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<JoinPartyMutationMutation, JoinPartyMutationMutationVariables>) {
      return ApolloReactHooks.useMutation<JoinPartyMutationMutation, JoinPartyMutationMutationVariables>(JoinPartyMutationDocument, baseOptions);
    }
export type JoinPartyMutationMutationHookResult = ReturnType<typeof useJoinPartyMutationMutation>;
export type JoinPartyMutationMutationResult = ApolloReactCommon.MutationResult<JoinPartyMutationMutation>;
export type JoinPartyMutationMutationOptions = ApolloReactCommon.BaseMutationOptions<JoinPartyMutationMutation, JoinPartyMutationMutationVariables>;
export const MeQueryDocument = gql`
    query MeQuery {
  me {
    id
    email
    firstName
    lastName
    avatar
  }
}
    `;
export type MeQueryComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<MeQueryQuery, MeQueryQueryVariables>, 'query'>;

    export const MeQueryComponent = (props: MeQueryComponentProps) => (
      <ApolloReactComponents.Query<MeQueryQuery, MeQueryQueryVariables> query={MeQueryDocument} {...props} />
    );
    

    export function useMeQueryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MeQueryQuery, MeQueryQueryVariables>) {
      return ApolloReactHooks.useQuery<MeQueryQuery, MeQueryQueryVariables>(MeQueryDocument, baseOptions);
    }
      export function useMeQueryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MeQueryQuery, MeQueryQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<MeQueryQuery, MeQueryQueryVariables>(MeQueryDocument, baseOptions);
      }
      
export type MeQueryQueryHookResult = ReturnType<typeof useMeQueryQuery>;
export type MeQueryQueryResult = ApolloReactCommon.QueryResult<MeQueryQuery, MeQueryQueryVariables>;
export const PaginateUsersQueryDocument = gql`
    query PaginateUsersQuery($where: UserWhereInput, $orderBy: UserOrderByInput, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) {
  paginateUsers(where: $where, skip: $skip, after: $after, before: $before, first: $first, last: $last, orderBy: $orderBy) {
    edges {
      node {
        id
        firstName
        lastName
        avatar
        lastOnline
        status @client
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
    `;
export type PaginateUsersQueryComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<PaginateUsersQueryQuery, PaginateUsersQueryQueryVariables>, 'query'>;

    export const PaginateUsersQueryComponent = (props: PaginateUsersQueryComponentProps) => (
      <ApolloReactComponents.Query<PaginateUsersQueryQuery, PaginateUsersQueryQueryVariables> query={PaginateUsersQueryDocument} {...props} />
    );
    

    export function usePaginateUsersQueryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PaginateUsersQueryQuery, PaginateUsersQueryQueryVariables>) {
      return ApolloReactHooks.useQuery<PaginateUsersQueryQuery, PaginateUsersQueryQueryVariables>(PaginateUsersQueryDocument, baseOptions);
    }
      export function usePaginateUsersQueryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PaginateUsersQueryQuery, PaginateUsersQueryQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<PaginateUsersQueryQuery, PaginateUsersQueryQueryVariables>(PaginateUsersQueryDocument, baseOptions);
      }
      
export type PaginateUsersQueryQueryHookResult = ReturnType<typeof usePaginateUsersQueryQuery>;
export type PaginateUsersQueryQueryResult = ApolloReactCommon.QueryResult<PaginateUsersQueryQuery, PaginateUsersQueryQueryVariables>;
export const PartiesQueryDocument = gql`
    query PartiesQuery($where: PartyWhereInput, $orderBy: PartyOrderByInput, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) {
  parties(where: $where, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) {
    location {
      placeName
      latitude
      longitude
    }
    ...PARTY_FRAGMENT
  }
}
    ${Party_FragmentFragmentDoc}`;
export type PartiesQueryComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<PartiesQueryQuery, PartiesQueryQueryVariables>, 'query'>;

    export const PartiesQueryComponent = (props: PartiesQueryComponentProps) => (
      <ApolloReactComponents.Query<PartiesQueryQuery, PartiesQueryQueryVariables> query={PartiesQueryDocument} {...props} />
    );
    

    export function usePartiesQueryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PartiesQueryQuery, PartiesQueryQueryVariables>) {
      return ApolloReactHooks.useQuery<PartiesQueryQuery, PartiesQueryQueryVariables>(PartiesQueryDocument, baseOptions);
    }
      export function usePartiesQueryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PartiesQueryQuery, PartiesQueryQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<PartiesQueryQuery, PartiesQueryQueryVariables>(PartiesQueryDocument, baseOptions);
      }
      
export type PartiesQueryQueryHookResult = ReturnType<typeof usePartiesQueryQuery>;
export type PartiesQueryQueryResult = ApolloReactCommon.QueryResult<PartiesQueryQuery, PartiesQueryQueryVariables>;
export const PaginatePartiesQueryDocument = gql`
    query PaginatePartiesQuery($where: PartyWhereInput, $orderBy: PartyOrderByInput, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) {
  partiesConnection(where: $where, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) {
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      node {
        ...PARTY_FRAGMENT
      }
    }
  }
}
    ${Party_FragmentFragmentDoc}`;
export type PaginatePartiesQueryComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<PaginatePartiesQueryQuery, PaginatePartiesQueryQueryVariables>, 'query'>;

    export const PaginatePartiesQueryComponent = (props: PaginatePartiesQueryComponentProps) => (
      <ApolloReactComponents.Query<PaginatePartiesQueryQuery, PaginatePartiesQueryQueryVariables> query={PaginatePartiesQueryDocument} {...props} />
    );
    

    export function usePaginatePartiesQueryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PaginatePartiesQueryQuery, PaginatePartiesQueryQueryVariables>) {
      return ApolloReactHooks.useQuery<PaginatePartiesQueryQuery, PaginatePartiesQueryQueryVariables>(PaginatePartiesQueryDocument, baseOptions);
    }
      export function usePaginatePartiesQueryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PaginatePartiesQueryQuery, PaginatePartiesQueryQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<PaginatePartiesQueryQuery, PaginatePartiesQueryQueryVariables>(PaginatePartiesQueryDocument, baseOptions);
      }
      
export type PaginatePartiesQueryQueryHookResult = ReturnType<typeof usePaginatePartiesQueryQuery>;
export type PaginatePartiesQueryQueryResult = ApolloReactCommon.QueryResult<PaginatePartiesQueryQuery, PaginatePartiesQueryQueryVariables>;
export const PaginateChatsQueryDocument = gql`
    query PaginateChatsQuery($where: ChatWhereInput, $orderBy: ChatOrderByInput, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) {
  chatsConnection(where: $where, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) {
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      node {
        id
        party {
          title
        }
        members(first: 3) {
          avatar
          firstName
          lastName
        }
        messages(last: 1) {
          createdAt
          content
          author {
            firstName
            lastName
          }
        }
        hasUnreadMessages @client
      }
    }
  }
}
    `;
export type PaginateChatsQueryComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<PaginateChatsQueryQuery, PaginateChatsQueryQueryVariables>, 'query'>;

    export const PaginateChatsQueryComponent = (props: PaginateChatsQueryComponentProps) => (
      <ApolloReactComponents.Query<PaginateChatsQueryQuery, PaginateChatsQueryQueryVariables> query={PaginateChatsQueryDocument} {...props} />
    );
    

    export function usePaginateChatsQueryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PaginateChatsQueryQuery, PaginateChatsQueryQueryVariables>) {
      return ApolloReactHooks.useQuery<PaginateChatsQueryQuery, PaginateChatsQueryQueryVariables>(PaginateChatsQueryDocument, baseOptions);
    }
      export function usePaginateChatsQueryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PaginateChatsQueryQuery, PaginateChatsQueryQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<PaginateChatsQueryQuery, PaginateChatsQueryQueryVariables>(PaginateChatsQueryDocument, baseOptions);
      }
      
export type PaginateChatsQueryQueryHookResult = ReturnType<typeof usePaginateChatsQueryQuery>;
export type PaginateChatsQueryQueryResult = ApolloReactCommon.QueryResult<PaginateChatsQueryQuery, PaginateChatsQueryQueryVariables>;
export const PaginateMessagesQueryDocument = gql`
    query PaginateMessagesQuery($where: MessageWhereInput, $orderBy: MessageOrderByInput, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) {
  messagesConnection(where: $where, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) {
    pageInfo {
      startCursor
      hasPreviousPage
    }
    edges {
      node {
        ...MESSAGE_FRAGMENT
      }
    }
  }
}
    ${Message_FragmentFragmentDoc}`;
export type PaginateMessagesQueryComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<PaginateMessagesQueryQuery, PaginateMessagesQueryQueryVariables>, 'query'>;

    export const PaginateMessagesQueryComponent = (props: PaginateMessagesQueryComponentProps) => (
      <ApolloReactComponents.Query<PaginateMessagesQueryQuery, PaginateMessagesQueryQueryVariables> query={PaginateMessagesQueryDocument} {...props} />
    );
    

    export function usePaginateMessagesQueryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PaginateMessagesQueryQuery, PaginateMessagesQueryQueryVariables>) {
      return ApolloReactHooks.useQuery<PaginateMessagesQueryQuery, PaginateMessagesQueryQueryVariables>(PaginateMessagesQueryDocument, baseOptions);
    }
      export function usePaginateMessagesQueryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PaginateMessagesQueryQuery, PaginateMessagesQueryQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<PaginateMessagesQueryQuery, PaginateMessagesQueryQueryVariables>(PaginateMessagesQueryDocument, baseOptions);
      }
      
export type PaginateMessagesQueryQueryHookResult = ReturnType<typeof usePaginateMessagesQueryQuery>;
export type PaginateMessagesQueryQueryResult = ApolloReactCommon.QueryResult<PaginateMessagesQueryQuery, PaginateMessagesQueryQueryVariables>;
export const PaginateUsersInviteToPartyQueryDocument = gql`
    query PaginateUsersInviteToPartyQuery($where: UserWhereInput, $orderBy: UserOrderByInput, $skip: Int, $after: String, $before: String, $first: Int, $last: Int, $partyInvitationWhere: PartyInvitationWhereInput) {
  paginateUsers(where: $where, skip: $skip, after: $after, before: $before, first: $first, last: $last, orderBy: $orderBy) {
    edges {
      node {
        id
        firstName
        lastName
        avatar
        lastOnline
        status @client
        pendingPartyInvitations(where: $partyInvitationWhere) {
          id
          invitedBy {
            id
          }
          party {
            id
          }
        }
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
    `;
export type PaginateUsersInviteToPartyQueryComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<PaginateUsersInviteToPartyQueryQuery, PaginateUsersInviteToPartyQueryQueryVariables>, 'query'>;

    export const PaginateUsersInviteToPartyQueryComponent = (props: PaginateUsersInviteToPartyQueryComponentProps) => (
      <ApolloReactComponents.Query<PaginateUsersInviteToPartyQueryQuery, PaginateUsersInviteToPartyQueryQueryVariables> query={PaginateUsersInviteToPartyQueryDocument} {...props} />
    );
    

    export function usePaginateUsersInviteToPartyQueryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PaginateUsersInviteToPartyQueryQuery, PaginateUsersInviteToPartyQueryQueryVariables>) {
      return ApolloReactHooks.useQuery<PaginateUsersInviteToPartyQueryQuery, PaginateUsersInviteToPartyQueryQueryVariables>(PaginateUsersInviteToPartyQueryDocument, baseOptions);
    }
      export function usePaginateUsersInviteToPartyQueryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PaginateUsersInviteToPartyQueryQuery, PaginateUsersInviteToPartyQueryQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<PaginateUsersInviteToPartyQueryQuery, PaginateUsersInviteToPartyQueryQueryVariables>(PaginateUsersInviteToPartyQueryDocument, baseOptions);
      }
      
export type PaginateUsersInviteToPartyQueryQueryHookResult = ReturnType<typeof usePaginateUsersInviteToPartyQueryQuery>;
export type PaginateUsersInviteToPartyQueryQueryResult = ApolloReactCommon.QueryResult<PaginateUsersInviteToPartyQueryQuery, PaginateUsersInviteToPartyQueryQueryVariables>;
export const PartyInvitationsConnectionQueryDocument = gql`
    query PartyInvitationsConnectionQuery($where: PartyInvitationWhereInput, $orderBy: PartyInvitationOrderByInput, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) {
  partyInvitationsConnection(where: $where, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) {
    edges {
      node {
        ...PARTY_INVITATION_FRAGMENT
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
  full: partyInvitationsConnection(where: $where) {
    aggregate {
      count
    }
  }
}
    ${Party_Invitation_FragmentFragmentDoc}`;
export type PartyInvitationsConnectionQueryComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<PartyInvitationsConnectionQueryQuery, PartyInvitationsConnectionQueryQueryVariables>, 'query'>;

    export const PartyInvitationsConnectionQueryComponent = (props: PartyInvitationsConnectionQueryComponentProps) => (
      <ApolloReactComponents.Query<PartyInvitationsConnectionQueryQuery, PartyInvitationsConnectionQueryQueryVariables> query={PartyInvitationsConnectionQueryDocument} {...props} />
    );
    

    export function usePartyInvitationsConnectionQueryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PartyInvitationsConnectionQueryQuery, PartyInvitationsConnectionQueryQueryVariables>) {
      return ApolloReactHooks.useQuery<PartyInvitationsConnectionQueryQuery, PartyInvitationsConnectionQueryQueryVariables>(PartyInvitationsConnectionQueryDocument, baseOptions);
    }
      export function usePartyInvitationsConnectionQueryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PartyInvitationsConnectionQueryQuery, PartyInvitationsConnectionQueryQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<PartyInvitationsConnectionQueryQuery, PartyInvitationsConnectionQueryQueryVariables>(PartyInvitationsConnectionQueryDocument, baseOptions);
      }
      
export type PartyInvitationsConnectionQueryQueryHookResult = ReturnType<typeof usePartyInvitationsConnectionQueryQuery>;
export type PartyInvitationsConnectionQueryQueryResult = ApolloReactCommon.QueryResult<PartyInvitationsConnectionQueryQuery, PartyInvitationsConnectionQueryQueryVariables>;
export const HasChatsQueryDocument = gql`
    query hasChatsQuery($where: ChatWhereInput) {
  hasChats(where: $where)
}
    `;
export type HasChatsQueryComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<HasChatsQueryQuery, HasChatsQueryQueryVariables>, 'query'>;

    export const HasChatsQueryComponent = (props: HasChatsQueryComponentProps) => (
      <ApolloReactComponents.Query<HasChatsQueryQuery, HasChatsQueryQueryVariables> query={HasChatsQueryDocument} {...props} />
    );
    

    export function useHasChatsQueryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<HasChatsQueryQuery, HasChatsQueryQueryVariables>) {
      return ApolloReactHooks.useQuery<HasChatsQueryQuery, HasChatsQueryQueryVariables>(HasChatsQueryDocument, baseOptions);
    }
      export function useHasChatsQueryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<HasChatsQueryQuery, HasChatsQueryQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<HasChatsQueryQuery, HasChatsQueryQueryVariables>(HasChatsQueryDocument, baseOptions);
      }
      
export type HasChatsQueryQueryHookResult = ReturnType<typeof useHasChatsQueryQuery>;
export type HasChatsQueryQueryResult = ApolloReactCommon.QueryResult<HasChatsQueryQuery, HasChatsQueryQueryVariables>;
export const HasPartiesQueryDocument = gql`
    query hasPartiesQuery($where: PartyWhereInput) {
  hasParties(where: $where)
}
    `;
export type HasPartiesQueryComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<HasPartiesQueryQuery, HasPartiesQueryQueryVariables>, 'query'>;

    export const HasPartiesQueryComponent = (props: HasPartiesQueryComponentProps) => (
      <ApolloReactComponents.Query<HasPartiesQueryQuery, HasPartiesQueryQueryVariables> query={HasPartiesQueryDocument} {...props} />
    );
    

    export function useHasPartiesQueryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<HasPartiesQueryQuery, HasPartiesQueryQueryVariables>) {
      return ApolloReactHooks.useQuery<HasPartiesQueryQuery, HasPartiesQueryQueryVariables>(HasPartiesQueryDocument, baseOptions);
    }
      export function useHasPartiesQueryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<HasPartiesQueryQuery, HasPartiesQueryQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<HasPartiesQueryQuery, HasPartiesQueryQueryVariables>(HasPartiesQueryDocument, baseOptions);
      }
      
export type HasPartiesQueryQueryHookResult = ReturnType<typeof useHasPartiesQueryQuery>;
export type HasPartiesQueryQueryResult = ApolloReactCommon.QueryResult<HasPartiesQueryQuery, HasPartiesQueryQueryVariables>;
export const PartyInvitationsQueryDocument = gql`
    query PartyInvitationsQuery($where: PartyInvitationWhereInput, $orderBy: PartyInvitationOrderByInput, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) {
  partyInvitations(where: $where, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) {
    id
  }
}
    `;
export type PartyInvitationsQueryComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<PartyInvitationsQueryQuery, PartyInvitationsQueryQueryVariables>, 'query'>;

    export const PartyInvitationsQueryComponent = (props: PartyInvitationsQueryComponentProps) => (
      <ApolloReactComponents.Query<PartyInvitationsQueryQuery, PartyInvitationsQueryQueryVariables> query={PartyInvitationsQueryDocument} {...props} />
    );
    

    export function usePartyInvitationsQueryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PartyInvitationsQueryQuery, PartyInvitationsQueryQueryVariables>) {
      return ApolloReactHooks.useQuery<PartyInvitationsQueryQuery, PartyInvitationsQueryQueryVariables>(PartyInvitationsQueryDocument, baseOptions);
    }
      export function usePartyInvitationsQueryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PartyInvitationsQueryQuery, PartyInvitationsQueryQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<PartyInvitationsQueryQuery, PartyInvitationsQueryQueryVariables>(PartyInvitationsQueryDocument, baseOptions);
      }
      
export type PartyInvitationsQueryQueryHookResult = ReturnType<typeof usePartyInvitationsQueryQuery>;
export type PartyInvitationsQueryQueryResult = ApolloReactCommon.QueryResult<PartyInvitationsQueryQuery, PartyInvitationsQueryQueryVariables>;
export const CanJoinPartyQueryDocument = gql`
    query CanJoinPartyQuery($userId: String!, $inviteSecret: String!, $partyId: String!) {
  canJoinParty(userId: $userId, inviteSecret: $inviteSecret, partyId: $partyId)
}
    `;
export type CanJoinPartyQueryComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CanJoinPartyQueryQuery, CanJoinPartyQueryQueryVariables>, 'query'> & ({ variables: CanJoinPartyQueryQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const CanJoinPartyQueryComponent = (props: CanJoinPartyQueryComponentProps) => (
      <ApolloReactComponents.Query<CanJoinPartyQueryQuery, CanJoinPartyQueryQueryVariables> query={CanJoinPartyQueryDocument} {...props} />
    );
    

    export function useCanJoinPartyQueryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CanJoinPartyQueryQuery, CanJoinPartyQueryQueryVariables>) {
      return ApolloReactHooks.useQuery<CanJoinPartyQueryQuery, CanJoinPartyQueryQueryVariables>(CanJoinPartyQueryDocument, baseOptions);
    }
      export function useCanJoinPartyQueryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CanJoinPartyQueryQuery, CanJoinPartyQueryQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<CanJoinPartyQueryQuery, CanJoinPartyQueryQueryVariables>(CanJoinPartyQueryDocument, baseOptions);
      }
      
export type CanJoinPartyQueryQueryHookResult = ReturnType<typeof useCanJoinPartyQueryQuery>;
export type CanJoinPartyQueryQueryResult = ApolloReactCommon.QueryResult<CanJoinPartyQueryQuery, CanJoinPartyQueryQueryVariables>;
export const ChatMessagesSubscriptionDocument = gql`
    subscription ChatMessagesSubscription($where: MessageSubscriptionWhereInput) {
  message(where: $where) {
    node {
      id
      author {
        firstName
        lastName
        avatar
        id
      }
      isSendByMe @client
      optimisticallyAdded @client
      optimisticallyCreated @client
      hasOptimisticError @client
      content
      createdAt
      chat {
        id
      }
    }
  }
}
    `;
export type ChatMessagesSubscriptionComponentProps = Omit<ApolloReactComponents.SubscriptionComponentOptions<ChatMessagesSubscriptionSubscription, ChatMessagesSubscriptionSubscriptionVariables>, 'subscription'>;

    export const ChatMessagesSubscriptionComponent = (props: ChatMessagesSubscriptionComponentProps) => (
      <ApolloReactComponents.Subscription<ChatMessagesSubscriptionSubscription, ChatMessagesSubscriptionSubscriptionVariables> subscription={ChatMessagesSubscriptionDocument} {...props} />
    );
    

    export function useChatMessagesSubscriptionSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<ChatMessagesSubscriptionSubscription, ChatMessagesSubscriptionSubscriptionVariables>) {
      return ApolloReactHooks.useSubscription<ChatMessagesSubscriptionSubscription, ChatMessagesSubscriptionSubscriptionVariables>(ChatMessagesSubscriptionDocument, baseOptions);
    }
export type ChatMessagesSubscriptionSubscriptionHookResult = ReturnType<typeof useChatMessagesSubscriptionSubscription>;
export type ChatMessagesSubscriptionSubscriptionResult = ApolloReactCommon.SubscriptionResult<ChatMessagesSubscriptionSubscription>;
export const PartyInvitationSubscriptionDocument = gql`
    subscription PartyInvitationSubscription($where: PartyInvitationSubscriptionWhereInput) {
  partyInvitation(where: $where) {
    node {
      ...PARTY_INVITATION_FRAGMENT
    }
    previousValues {
      id
      invitedUserId
      partyId
    }
    mutation
  }
}
    ${Party_Invitation_FragmentFragmentDoc}`;
export type PartyInvitationSubscriptionComponentProps = Omit<ApolloReactComponents.SubscriptionComponentOptions<PartyInvitationSubscriptionSubscription, PartyInvitationSubscriptionSubscriptionVariables>, 'subscription'>;

    export const PartyInvitationSubscriptionComponent = (props: PartyInvitationSubscriptionComponentProps) => (
      <ApolloReactComponents.Subscription<PartyInvitationSubscriptionSubscription, PartyInvitationSubscriptionSubscriptionVariables> subscription={PartyInvitationSubscriptionDocument} {...props} />
    );
    

    export function usePartyInvitationSubscriptionSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<PartyInvitationSubscriptionSubscription, PartyInvitationSubscriptionSubscriptionVariables>) {
      return ApolloReactHooks.useSubscription<PartyInvitationSubscriptionSubscription, PartyInvitationSubscriptionSubscriptionVariables>(PartyInvitationSubscriptionDocument, baseOptions);
    }
export type PartyInvitationSubscriptionSubscriptionHookResult = ReturnType<typeof usePartyInvitationSubscriptionSubscription>;
export type PartyInvitationSubscriptionSubscriptionResult = ApolloReactCommon.SubscriptionResult<PartyInvitationSubscriptionSubscription>;
export const JoinPartyFindDocument = gql`
    query JoinPartyFind($inviteSecret: String!, $userId: ID!) {
  parties(where: {inviteSecret: $inviteSecret, members_none: {id: $userId}}) {
    id
    members(first: 3) {
      id
      firstName
      lastName
      avatar
    }
    title
  }
  membersCount: paginateUsers(where: {parties_some: {inviteSecret: $inviteSecret}}) {
    aggregate {
      count
    }
  }
}
    `;
export type JoinPartyFindComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<JoinPartyFindQuery, JoinPartyFindQueryVariables>, 'query'> & ({ variables: JoinPartyFindQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const JoinPartyFindComponent = (props: JoinPartyFindComponentProps) => (
      <ApolloReactComponents.Query<JoinPartyFindQuery, JoinPartyFindQueryVariables> query={JoinPartyFindDocument} {...props} />
    );
    

    export function useJoinPartyFindQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<JoinPartyFindQuery, JoinPartyFindQueryVariables>) {
      return ApolloReactHooks.useQuery<JoinPartyFindQuery, JoinPartyFindQueryVariables>(JoinPartyFindDocument, baseOptions);
    }
      export function useJoinPartyFindLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<JoinPartyFindQuery, JoinPartyFindQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<JoinPartyFindQuery, JoinPartyFindQueryVariables>(JoinPartyFindDocument, baseOptions);
      }
      
export type JoinPartyFindQueryHookResult = ReturnType<typeof useJoinPartyFindQuery>;
export type JoinPartyFindQueryResult = ApolloReactCommon.QueryResult<JoinPartyFindQuery, JoinPartyFindQueryVariables>;
export const PartyDashboardParticipantsQueryDocument = gql`
    query partyDashboardParticipantsQuery($where: UserWhereInput, $orderBy: UserOrderByInput, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) {
  usersConnection(where: $where, orderBy: $orderBy, skip: $skip, before: $before, first: $first, last: $last, after: $after) {
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      node {
        firstName
        lastName
        avatar
      }
    }
  }
  aggregated: usersConnection(where: $where) {
    aggregate {
      count
    }
  }
}
    `;
export type PartyDashboardParticipantsQueryComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<PartyDashboardParticipantsQueryQuery, PartyDashboardParticipantsQueryQueryVariables>, 'query'>;

    export const PartyDashboardParticipantsQueryComponent = (props: PartyDashboardParticipantsQueryComponentProps) => (
      <ApolloReactComponents.Query<PartyDashboardParticipantsQueryQuery, PartyDashboardParticipantsQueryQueryVariables> query={PartyDashboardParticipantsQueryDocument} {...props} />
    );
    

    export function usePartyDashboardParticipantsQueryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PartyDashboardParticipantsQueryQuery, PartyDashboardParticipantsQueryQueryVariables>) {
      return ApolloReactHooks.useQuery<PartyDashboardParticipantsQueryQuery, PartyDashboardParticipantsQueryQueryVariables>(PartyDashboardParticipantsQueryDocument, baseOptions);
    }
      export function usePartyDashboardParticipantsQueryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PartyDashboardParticipantsQueryQuery, PartyDashboardParticipantsQueryQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<PartyDashboardParticipantsQueryQuery, PartyDashboardParticipantsQueryQueryVariables>(PartyDashboardParticipantsQueryDocument, baseOptions);
      }
      
export type PartyDashboardParticipantsQueryQueryHookResult = ReturnType<typeof usePartyDashboardParticipantsQueryQuery>;
export type PartyDashboardParticipantsQueryQueryResult = ApolloReactCommon.QueryResult<PartyDashboardParticipantsQueryQuery, PartyDashboardParticipantsQueryQueryVariables>;