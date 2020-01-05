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

export type AggregateFriendInvitation = {
   __typename?: 'AggregateFriendInvitation',
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

export type AggregatePartySavedTrack = {
   __typename?: 'AggregatePartySavedTrack',
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
  spotifyId: Scalars['ID'],
  uri: Scalars['String'],
  name: Scalars['String'],
  releaseDate: Scalars['String'],
  imageUrl: Scalars['String'],
};

export type AlbumConnection = {
   __typename?: 'AlbumConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<AlbumEdge>>,
  aggregate: AggregateAlbum,
};

export type AlbumCreateInput = {
  id?: Maybe<Scalars['ID']>,
  spotifyId: Scalars['ID'],
  uri: Scalars['String'],
  name: Scalars['String'],
  releaseDate: Scalars['String'],
  imageUrl: Scalars['String'],
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
  IdDesc = 'id_DESC',
  SpotifyIdAsc = 'spotifyId_ASC',
  SpotifyIdDesc = 'spotifyId_DESC',
  UriAsc = 'uri_ASC',
  UriDesc = 'uri_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  ReleaseDateAsc = 'releaseDate_ASC',
  ReleaseDateDesc = 'releaseDate_DESC',
  ImageUrlAsc = 'imageUrl_ASC',
  ImageUrlDesc = 'imageUrl_DESC'
}

export type AlbumPreviousValues = {
   __typename?: 'AlbumPreviousValues',
  id: Scalars['ID'],
  spotifyId: Scalars['ID'],
  uri: Scalars['String'],
  name: Scalars['String'],
  releaseDate: Scalars['String'],
  imageUrl: Scalars['String'],
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
  spotifyId?: Maybe<Scalars['ID']>,
  uri?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  releaseDate?: Maybe<Scalars['String']>,
  imageUrl?: Maybe<Scalars['String']>,
};

export type AlbumUpdateInput = {
  spotifyId?: Maybe<Scalars['ID']>,
  uri?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  releaseDate?: Maybe<Scalars['String']>,
  imageUrl?: Maybe<Scalars['String']>,
};

export type AlbumUpdateManyMutationInput = {
  spotifyId?: Maybe<Scalars['ID']>,
  uri?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  releaseDate?: Maybe<Scalars['String']>,
  imageUrl?: Maybe<Scalars['String']>,
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
  spotifyId?: Maybe<Scalars['ID']>,
  spotifyId_not?: Maybe<Scalars['ID']>,
  spotifyId_in?: Maybe<Array<Scalars['ID']>>,
  spotifyId_not_in?: Maybe<Array<Scalars['ID']>>,
  spotifyId_lt?: Maybe<Scalars['ID']>,
  spotifyId_lte?: Maybe<Scalars['ID']>,
  spotifyId_gt?: Maybe<Scalars['ID']>,
  spotifyId_gte?: Maybe<Scalars['ID']>,
  spotifyId_contains?: Maybe<Scalars['ID']>,
  spotifyId_not_contains?: Maybe<Scalars['ID']>,
  spotifyId_starts_with?: Maybe<Scalars['ID']>,
  spotifyId_not_starts_with?: Maybe<Scalars['ID']>,
  spotifyId_ends_with?: Maybe<Scalars['ID']>,
  spotifyId_not_ends_with?: Maybe<Scalars['ID']>,
  uri?: Maybe<Scalars['String']>,
  uri_not?: Maybe<Scalars['String']>,
  uri_in?: Maybe<Array<Scalars['String']>>,
  uri_not_in?: Maybe<Array<Scalars['String']>>,
  uri_lt?: Maybe<Scalars['String']>,
  uri_lte?: Maybe<Scalars['String']>,
  uri_gt?: Maybe<Scalars['String']>,
  uri_gte?: Maybe<Scalars['String']>,
  uri_contains?: Maybe<Scalars['String']>,
  uri_not_contains?: Maybe<Scalars['String']>,
  uri_starts_with?: Maybe<Scalars['String']>,
  uri_not_starts_with?: Maybe<Scalars['String']>,
  uri_ends_with?: Maybe<Scalars['String']>,
  uri_not_ends_with?: Maybe<Scalars['String']>,
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
  releaseDate?: Maybe<Scalars['String']>,
  releaseDate_not?: Maybe<Scalars['String']>,
  releaseDate_in?: Maybe<Array<Scalars['String']>>,
  releaseDate_not_in?: Maybe<Array<Scalars['String']>>,
  releaseDate_lt?: Maybe<Scalars['String']>,
  releaseDate_lte?: Maybe<Scalars['String']>,
  releaseDate_gt?: Maybe<Scalars['String']>,
  releaseDate_gte?: Maybe<Scalars['String']>,
  releaseDate_contains?: Maybe<Scalars['String']>,
  releaseDate_not_contains?: Maybe<Scalars['String']>,
  releaseDate_starts_with?: Maybe<Scalars['String']>,
  releaseDate_not_starts_with?: Maybe<Scalars['String']>,
  releaseDate_ends_with?: Maybe<Scalars['String']>,
  releaseDate_not_ends_with?: Maybe<Scalars['String']>,
  imageUrl?: Maybe<Scalars['String']>,
  imageUrl_not?: Maybe<Scalars['String']>,
  imageUrl_in?: Maybe<Array<Scalars['String']>>,
  imageUrl_not_in?: Maybe<Array<Scalars['String']>>,
  imageUrl_lt?: Maybe<Scalars['String']>,
  imageUrl_lte?: Maybe<Scalars['String']>,
  imageUrl_gt?: Maybe<Scalars['String']>,
  imageUrl_gte?: Maybe<Scalars['String']>,
  imageUrl_contains?: Maybe<Scalars['String']>,
  imageUrl_not_contains?: Maybe<Scalars['String']>,
  imageUrl_starts_with?: Maybe<Scalars['String']>,
  imageUrl_not_starts_with?: Maybe<Scalars['String']>,
  imageUrl_ends_with?: Maybe<Scalars['String']>,
  imageUrl_not_ends_with?: Maybe<Scalars['String']>,
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
  spotifyId: Scalars['ID'],
  uri: Scalars['String'],
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
  spotifyId: Scalars['ID'],
  uri: Scalars['String'],
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
  SpotifyIdAsc = 'spotifyId_ASC',
  SpotifyIdDesc = 'spotifyId_DESC',
  UriAsc = 'uri_ASC',
  UriDesc = 'uri_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

export type ArtistPreviousValues = {
   __typename?: 'ArtistPreviousValues',
  id: Scalars['ID'],
  spotifyId: Scalars['ID'],
  uri: Scalars['String'],
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
  spotifyId?: Maybe<Scalars['ID']>,
  spotifyId_not?: Maybe<Scalars['ID']>,
  spotifyId_in?: Maybe<Array<Scalars['ID']>>,
  spotifyId_not_in?: Maybe<Array<Scalars['ID']>>,
  spotifyId_lt?: Maybe<Scalars['ID']>,
  spotifyId_lte?: Maybe<Scalars['ID']>,
  spotifyId_gt?: Maybe<Scalars['ID']>,
  spotifyId_gte?: Maybe<Scalars['ID']>,
  spotifyId_contains?: Maybe<Scalars['ID']>,
  spotifyId_not_contains?: Maybe<Scalars['ID']>,
  spotifyId_starts_with?: Maybe<Scalars['ID']>,
  spotifyId_not_starts_with?: Maybe<Scalars['ID']>,
  spotifyId_ends_with?: Maybe<Scalars['ID']>,
  spotifyId_not_ends_with?: Maybe<Scalars['ID']>,
  uri?: Maybe<Scalars['String']>,
  uri_not?: Maybe<Scalars['String']>,
  uri_in?: Maybe<Array<Scalars['String']>>,
  uri_not_in?: Maybe<Array<Scalars['String']>>,
  uri_lt?: Maybe<Scalars['String']>,
  uri_lte?: Maybe<Scalars['String']>,
  uri_gt?: Maybe<Scalars['String']>,
  uri_gte?: Maybe<Scalars['String']>,
  uri_contains?: Maybe<Scalars['String']>,
  uri_not_contains?: Maybe<Scalars['String']>,
  uri_starts_with?: Maybe<Scalars['String']>,
  uri_not_starts_with?: Maybe<Scalars['String']>,
  uri_ends_with?: Maybe<Scalars['String']>,
  uri_not_ends_with?: Maybe<Scalars['String']>,
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
  spotifyId?: Maybe<Scalars['ID']>,
  uri?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
};

export type ArtistUpdateInput = {
  spotifyId?: Maybe<Scalars['ID']>,
  uri?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
};

export type ArtistUpdateManyDataInput = {
  spotifyId?: Maybe<Scalars['ID']>,
  uri?: Maybe<Scalars['String']>,
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
  spotifyId?: Maybe<Scalars['ID']>,
  uri?: Maybe<Scalars['String']>,
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
  spotifyId?: Maybe<Scalars['ID']>,
  spotifyId_not?: Maybe<Scalars['ID']>,
  spotifyId_in?: Maybe<Array<Scalars['ID']>>,
  spotifyId_not_in?: Maybe<Array<Scalars['ID']>>,
  spotifyId_lt?: Maybe<Scalars['ID']>,
  spotifyId_lte?: Maybe<Scalars['ID']>,
  spotifyId_gt?: Maybe<Scalars['ID']>,
  spotifyId_gte?: Maybe<Scalars['ID']>,
  spotifyId_contains?: Maybe<Scalars['ID']>,
  spotifyId_not_contains?: Maybe<Scalars['ID']>,
  spotifyId_starts_with?: Maybe<Scalars['ID']>,
  spotifyId_not_starts_with?: Maybe<Scalars['ID']>,
  spotifyId_ends_with?: Maybe<Scalars['ID']>,
  spotifyId_not_ends_with?: Maybe<Scalars['ID']>,
  uri?: Maybe<Scalars['String']>,
  uri_not?: Maybe<Scalars['String']>,
  uri_in?: Maybe<Array<Scalars['String']>>,
  uri_not_in?: Maybe<Array<Scalars['String']>>,
  uri_lt?: Maybe<Scalars['String']>,
  uri_lte?: Maybe<Scalars['String']>,
  uri_gt?: Maybe<Scalars['String']>,
  uri_gte?: Maybe<Scalars['String']>,
  uri_contains?: Maybe<Scalars['String']>,
  uri_not_contains?: Maybe<Scalars['String']>,
  uri_starts_with?: Maybe<Scalars['String']>,
  uri_not_starts_with?: Maybe<Scalars['String']>,
  uri_ends_with?: Maybe<Scalars['String']>,
  uri_not_ends_with?: Maybe<Scalars['String']>,
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

export type CombinePlaylistCreatedSpotifyPlaylistInput = {
  spotifyId: Scalars['ID'],
  uri: Scalars['String'],
  name: Scalars['String'],
  imageUrl: Scalars['String'],
  spotifyExternalUrl: Scalars['String'],
};

export type CombinePlaylistPartyPlannerData = {
  playlists: Scalars['String'],
  partyId: Scalars['ID'],
  userId: Scalars['ID'],
  deleteAffected: Scalars['Boolean'],
  importable: Scalars['Boolean'],
};


export type FriendInvitation = {
   __typename?: 'FriendInvitation',
  id: Scalars['ID'],
  invitedBy: User,
  user: User,
  createdAt: Scalars['DateTime'],
  invitedUserId: Scalars['String'],
};

export type FriendInvitationConnection = {
   __typename?: 'FriendInvitationConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<FriendInvitationEdge>>,
  aggregate: AggregateFriendInvitation,
};

export type FriendInvitationCreateInput = {
  id?: Maybe<Scalars['ID']>,
  invitedBy: UserCreateOneInput,
  user: UserCreateOneWithoutPendingFriendInvitationsInput,
  invitedUserId: Scalars['String'],
};

export type FriendInvitationCreateManyWithoutUserInput = {
  create?: Maybe<Array<FriendInvitationCreateWithoutUserInput>>,
  connect?: Maybe<Array<FriendInvitationWhereUniqueInput>>,
};

export type FriendInvitationCreateWithoutUserInput = {
  id?: Maybe<Scalars['ID']>,
  invitedBy: UserCreateOneInput,
  invitedUserId: Scalars['String'],
};

export type FriendInvitationEdge = {
   __typename?: 'FriendInvitationEdge',
  node: FriendInvitation,
  cursor: Scalars['String'],
};

export enum FriendInvitationOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  InvitedUserIdAsc = 'invitedUserId_ASC',
  InvitedUserIdDesc = 'invitedUserId_DESC'
}

export type FriendInvitationPreviousValues = {
   __typename?: 'FriendInvitationPreviousValues',
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  invitedUserId: Scalars['String'],
};

export type FriendInvitationScalarWhereInput = {
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
  AND?: Maybe<Array<FriendInvitationScalarWhereInput>>,
  OR?: Maybe<Array<FriendInvitationScalarWhereInput>>,
  NOT?: Maybe<Array<FriendInvitationScalarWhereInput>>,
};

export type FriendInvitationSubscriptionPayload = {
   __typename?: 'FriendInvitationSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<FriendInvitation>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<FriendInvitationPreviousValues>,
};

export type FriendInvitationSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<FriendInvitationWhereInput>,
  AND?: Maybe<Array<FriendInvitationSubscriptionWhereInput>>,
  OR?: Maybe<Array<FriendInvitationSubscriptionWhereInput>>,
  NOT?: Maybe<Array<FriendInvitationSubscriptionWhereInput>>,
};

export type FriendInvitationUpdateInput = {
  invitedBy?: Maybe<UserUpdateOneRequiredInput>,
  user?: Maybe<UserUpdateOneRequiredWithoutPendingFriendInvitationsInput>,
  invitedUserId?: Maybe<Scalars['String']>,
};

export type FriendInvitationUpdateManyDataInput = {
  invitedUserId?: Maybe<Scalars['String']>,
};

export type FriendInvitationUpdateManyMutationInput = {
  invitedUserId?: Maybe<Scalars['String']>,
};

export type FriendInvitationUpdateManyWithoutUserInput = {
  create?: Maybe<Array<FriendInvitationCreateWithoutUserInput>>,
  delete?: Maybe<Array<FriendInvitationWhereUniqueInput>>,
  connect?: Maybe<Array<FriendInvitationWhereUniqueInput>>,
  set?: Maybe<Array<FriendInvitationWhereUniqueInput>>,
  disconnect?: Maybe<Array<FriendInvitationWhereUniqueInput>>,
  update?: Maybe<Array<FriendInvitationUpdateWithWhereUniqueWithoutUserInput>>,
  upsert?: Maybe<Array<FriendInvitationUpsertWithWhereUniqueWithoutUserInput>>,
  deleteMany?: Maybe<Array<FriendInvitationScalarWhereInput>>,
  updateMany?: Maybe<Array<FriendInvitationUpdateManyWithWhereNestedInput>>,
};

export type FriendInvitationUpdateManyWithWhereNestedInput = {
  where: FriendInvitationScalarWhereInput,
  data: FriendInvitationUpdateManyDataInput,
};

export type FriendInvitationUpdateWithoutUserDataInput = {
  invitedBy?: Maybe<UserUpdateOneRequiredInput>,
  invitedUserId?: Maybe<Scalars['String']>,
};

export type FriendInvitationUpdateWithWhereUniqueWithoutUserInput = {
  where: FriendInvitationWhereUniqueInput,
  data: FriendInvitationUpdateWithoutUserDataInput,
};

export type FriendInvitationUpsertWithWhereUniqueWithoutUserInput = {
  where: FriendInvitationWhereUniqueInput,
  update: FriendInvitationUpdateWithoutUserDataInput,
  create: FriendInvitationCreateWithoutUserInput,
};

export type FriendInvitationWhereInput = {
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
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
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
  AND?: Maybe<Array<FriendInvitationWhereInput>>,
  OR?: Maybe<Array<FriendInvitationWhereInput>>,
  NOT?: Maybe<Array<FriendInvitationWhereInput>>,
};

export type FriendInvitationWhereUniqueInput = {
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
  updateManyAlbums: BatchPayload,
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
  createFriendInvitation: FriendInvitation,
  updateFriendInvitation?: Maybe<FriendInvitation>,
  updateManyFriendInvitations: BatchPayload,
  upsertFriendInvitation: FriendInvitation,
  deleteFriendInvitation?: Maybe<FriendInvitation>,
  deleteManyFriendInvitations: BatchPayload,
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
  createPartySavedTrack: PartySavedTrack,
  updatePartySavedTrack?: Maybe<PartySavedTrack>,
  updateManyPartySavedTracks: BatchPayload,
  upsertPartySavedTrack: PartySavedTrack,
  deletePartySavedTrack?: Maybe<PartySavedTrack>,
  deleteManyPartySavedTracks: BatchPayload,
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
  importPlaylistsToParty: Scalars['Boolean'],
  combinePlaylists: Playlist,
  joinParty?: Maybe<Scalars['Boolean']>,
  signup: AuthPayload,
  login: AuthPayload,
  socialLogin: AuthPayload,
  updateMe: User,
  requestReset?: Maybe<SuccessMessage>,
  acceptFriendInvitation?: Maybe<Scalars['Boolean']>,
  unfriendPerson?: Maybe<Scalars['Boolean']>,
  resetPassword?: Maybe<AuthPayload>,
};


export type MutationCreateAlbumArgs = {
  data: AlbumCreateInput
};


export type MutationUpdateAlbumArgs = {
  data: AlbumUpdateInput,
  where: AlbumWhereUniqueInput
};


export type MutationUpdateManyAlbumsArgs = {
  data: AlbumUpdateManyMutationInput,
  where?: Maybe<AlbumWhereInput>
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


export type MutationCreateFriendInvitationArgs = {
  data: FriendInvitationCreateInput
};


export type MutationUpdateFriendInvitationArgs = {
  data: FriendInvitationUpdateInput,
  where: FriendInvitationWhereUniqueInput
};


export type MutationUpdateManyFriendInvitationsArgs = {
  data: FriendInvitationUpdateManyMutationInput,
  where?: Maybe<FriendInvitationWhereInput>
};


export type MutationUpsertFriendInvitationArgs = {
  where: FriendInvitationWhereUniqueInput,
  create: FriendInvitationCreateInput,
  update: FriendInvitationUpdateInput
};


export type MutationDeleteFriendInvitationArgs = {
  where: FriendInvitationWhereUniqueInput
};


export type MutationDeleteManyFriendInvitationsArgs = {
  where?: Maybe<FriendInvitationWhereInput>
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


export type MutationCreatePartySavedTrackArgs = {
  data: PartySavedTrackCreateInput
};


export type MutationUpdatePartySavedTrackArgs = {
  data: PartySavedTrackUpdateInput,
  where: PartySavedTrackWhereUniqueInput
};


export type MutationUpdateManyPartySavedTracksArgs = {
  data: PartySavedTrackUpdateManyMutationInput,
  where?: Maybe<PartySavedTrackWhereInput>
};


export type MutationUpsertPartySavedTrackArgs = {
  where: PartySavedTrackWhereUniqueInput,
  create: PartySavedTrackCreateInput,
  update: PartySavedTrackUpdateInput
};


export type MutationDeletePartySavedTrackArgs = {
  where: PartySavedTrackWhereUniqueInput
};


export type MutationDeleteManyPartySavedTracksArgs = {
  where?: Maybe<PartySavedTrackWhereInput>
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


export type MutationImportPlaylistsToPartyArgs = {
  playlists: Scalars['String'],
  partyId: Scalars['ID']
};


export type MutationCombinePlaylistsArgs = {
  partyPlannerData: CombinePlaylistPartyPlannerData,
  spotifyData: CombinePlaylistCreatedSpotifyPlaylistInput
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


export type MutationSocialLoginArgs = {
  id: Scalars['String'],
  email: Scalars['String'],
  avatar?: Maybe<Scalars['String']>,
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  provider: SocialMediaType
};


export type MutationUpdateMeArgs = {
  name?: Maybe<Scalars['String']>
};


export type MutationRequestResetArgs = {
  email: Scalars['String']
};


export type MutationAcceptFriendInvitationArgs = {
  invitationId: Scalars['ID'],
  invitingUserId: Scalars['ID']
};


export type MutationUnfriendPersonArgs = {
  personToUnfriendId: Scalars['ID']
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
  colorTint: Scalars['String'],
  isPublic?: Maybe<Scalars['Boolean']>,
  members?: Maybe<Array<User>>,
  start: Scalars['DateTime'],
  end: Scalars['DateTime'],
  inviteSecret: Scalars['String'],
  playlist?: Maybe<Array<Playlist>>,
  savedTracks?: Maybe<Array<PartySavedTrack>>,
  cart: PartyCart,
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


export type PartyPlaylistArgs = {
  where?: Maybe<PlaylistWhereInput>,
  orderBy?: Maybe<PlaylistOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type PartySavedTracksArgs = {
  where?: Maybe<PartySavedTrackWhereInput>,
  orderBy?: Maybe<PartySavedTrackOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type PartyAuthenticationResult = {
   __typename?: 'PartyAuthenticationResult',
  canJoin: Scalars['Boolean'],
  isMember: Scalars['Boolean'],
  party?: Maybe<Party>,
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
  user: User,
  name: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  price: Scalars['Float'],
  status: PartyCartItemStatus,
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
  user: UserCreateOneWithoutCartItemsInput,
  name: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  price: Scalars['Float'],
  status: PartyCartItemStatus,
  quantity?: Maybe<Scalars['Int']>,
};

export type PartyCartItemCreateManyWithoutCartInput = {
  create?: Maybe<Array<PartyCartItemCreateWithoutCartInput>>,
  connect?: Maybe<Array<PartyCartItemWhereUniqueInput>>,
};

export type PartyCartItemCreateManyWithoutUserInput = {
  create?: Maybe<Array<PartyCartItemCreateWithoutUserInput>>,
  connect?: Maybe<Array<PartyCartItemWhereUniqueInput>>,
};

export type PartyCartItemCreateWithoutCartInput = {
  id?: Maybe<Scalars['ID']>,
  user: UserCreateOneWithoutCartItemsInput,
  name: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  price: Scalars['Float'],
  status: PartyCartItemStatus,
  quantity?: Maybe<Scalars['Int']>,
};

export type PartyCartItemCreateWithoutUserInput = {
  id?: Maybe<Scalars['ID']>,
  cart: PartyCartCreateOneWithoutItemsInput,
  name: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  price: Scalars['Float'],
  status: PartyCartItemStatus,
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
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  QuantityAsc = 'quantity_ASC',
  QuantityDesc = 'quantity_DESC'
}

export type PartyCartItemPreviousValues = {
   __typename?: 'PartyCartItemPreviousValues',
  id: Scalars['ID'],
  name: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  price: Scalars['Float'],
  status: PartyCartItemStatus,
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
  status?: Maybe<PartyCartItemStatus>,
  status_not?: Maybe<PartyCartItemStatus>,
  status_in?: Maybe<Array<PartyCartItemStatus>>,
  status_not_in?: Maybe<Array<PartyCartItemStatus>>,
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

export enum PartyCartItemStatus {
  Pending = 'PENDING',
  Accepted = 'ACCEPTED',
  Rejected = 'REJECTED'
}

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
  user?: Maybe<UserUpdateOneRequiredWithoutCartItemsInput>,
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  price?: Maybe<Scalars['Float']>,
  status?: Maybe<PartyCartItemStatus>,
  quantity?: Maybe<Scalars['Int']>,
};

export type PartyCartItemUpdateManyDataInput = {
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  price?: Maybe<Scalars['Float']>,
  status?: Maybe<PartyCartItemStatus>,
  quantity?: Maybe<Scalars['Int']>,
};

export type PartyCartItemUpdateManyMutationInput = {
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  price?: Maybe<Scalars['Float']>,
  status?: Maybe<PartyCartItemStatus>,
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

export type PartyCartItemUpdateManyWithoutUserInput = {
  create?: Maybe<Array<PartyCartItemCreateWithoutUserInput>>,
  delete?: Maybe<Array<PartyCartItemWhereUniqueInput>>,
  connect?: Maybe<Array<PartyCartItemWhereUniqueInput>>,
  set?: Maybe<Array<PartyCartItemWhereUniqueInput>>,
  disconnect?: Maybe<Array<PartyCartItemWhereUniqueInput>>,
  update?: Maybe<Array<PartyCartItemUpdateWithWhereUniqueWithoutUserInput>>,
  upsert?: Maybe<Array<PartyCartItemUpsertWithWhereUniqueWithoutUserInput>>,
  deleteMany?: Maybe<Array<PartyCartItemScalarWhereInput>>,
  updateMany?: Maybe<Array<PartyCartItemUpdateManyWithWhereNestedInput>>,
};

export type PartyCartItemUpdateManyWithWhereNestedInput = {
  where: PartyCartItemScalarWhereInput,
  data: PartyCartItemUpdateManyDataInput,
};

export type PartyCartItemUpdateWithoutCartDataInput = {
  user?: Maybe<UserUpdateOneRequiredWithoutCartItemsInput>,
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  price?: Maybe<Scalars['Float']>,
  status?: Maybe<PartyCartItemStatus>,
  quantity?: Maybe<Scalars['Int']>,
};

export type PartyCartItemUpdateWithoutUserDataInput = {
  cart?: Maybe<PartyCartUpdateOneRequiredWithoutItemsInput>,
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  price?: Maybe<Scalars['Float']>,
  status?: Maybe<PartyCartItemStatus>,
  quantity?: Maybe<Scalars['Int']>,
};

export type PartyCartItemUpdateWithWhereUniqueWithoutCartInput = {
  where: PartyCartItemWhereUniqueInput,
  data: PartyCartItemUpdateWithoutCartDataInput,
};

export type PartyCartItemUpdateWithWhereUniqueWithoutUserInput = {
  where: PartyCartItemWhereUniqueInput,
  data: PartyCartItemUpdateWithoutUserDataInput,
};

export type PartyCartItemUpsertWithWhereUniqueWithoutCartInput = {
  where: PartyCartItemWhereUniqueInput,
  update: PartyCartItemUpdateWithoutCartDataInput,
  create: PartyCartItemCreateWithoutCartInput,
};

export type PartyCartItemUpsertWithWhereUniqueWithoutUserInput = {
  where: PartyCartItemWhereUniqueInput,
  update: PartyCartItemUpdateWithoutUserDataInput,
  create: PartyCartItemCreateWithoutUserInput,
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
  status?: Maybe<PartyCartItemStatus>,
  status_not?: Maybe<PartyCartItemStatus>,
  status_in?: Maybe<Array<PartyCartItemStatus>>,
  status_not_in?: Maybe<Array<PartyCartItemStatus>>,
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

export type PartyCartUpdateOneRequiredWithoutPartyInput = {
  create?: Maybe<PartyCartCreateWithoutPartyInput>,
  update?: Maybe<PartyCartUpdateWithoutPartyDataInput>,
  upsert?: Maybe<PartyCartUpsertWithoutPartyInput>,
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
  colorTint: Scalars['String'],
  isPublic?: Maybe<Scalars['Boolean']>,
  members?: Maybe<UserCreateManyWithoutPartiesInput>,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  inviteSecret: Scalars['String'],
  playlist?: Maybe<PlaylistCreateManyWithoutPartiesInput>,
  savedTracks?: Maybe<PartySavedTrackCreateManyWithoutPartyInput>,
  cart: PartyCartCreateOneWithoutPartyInput,
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

export type PartyCreateOneWithoutSavedTracksInput = {
  create?: Maybe<PartyCreateWithoutSavedTracksInput>,
  connect?: Maybe<PartyWhereUniqueInput>,
};

export type PartyCreateWithoutCartInput = {
  id?: Maybe<Scalars['ID']>,
  title: Scalars['String'],
  normalizedTitle: Scalars['String'],
  description: Scalars['String'],
  author: UserCreateOneInput,
  location: LocationCreateOneInput,
  colorTint: Scalars['String'],
  isPublic?: Maybe<Scalars['Boolean']>,
  members?: Maybe<UserCreateManyWithoutPartiesInput>,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  inviteSecret: Scalars['String'],
  playlist?: Maybe<PlaylistCreateManyWithoutPartiesInput>,
  savedTracks?: Maybe<PartySavedTrackCreateManyWithoutPartyInput>,
};

export type PartyCreateWithoutMembersInput = {
  id?: Maybe<Scalars['ID']>,
  title: Scalars['String'],
  normalizedTitle: Scalars['String'],
  description: Scalars['String'],
  author: UserCreateOneInput,
  location: LocationCreateOneInput,
  colorTint: Scalars['String'],
  isPublic?: Maybe<Scalars['Boolean']>,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  inviteSecret: Scalars['String'],
  playlist?: Maybe<PlaylistCreateManyWithoutPartiesInput>,
  savedTracks?: Maybe<PartySavedTrackCreateManyWithoutPartyInput>,
  cart: PartyCartCreateOneWithoutPartyInput,
};

export type PartyCreateWithoutPlaylistInput = {
  id?: Maybe<Scalars['ID']>,
  title: Scalars['String'],
  normalizedTitle: Scalars['String'],
  description: Scalars['String'],
  author: UserCreateOneInput,
  location: LocationCreateOneInput,
  colorTint: Scalars['String'],
  isPublic?: Maybe<Scalars['Boolean']>,
  members?: Maybe<UserCreateManyWithoutPartiesInput>,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  inviteSecret: Scalars['String'],
  savedTracks?: Maybe<PartySavedTrackCreateManyWithoutPartyInput>,
  cart: PartyCartCreateOneWithoutPartyInput,
};

export type PartyCreateWithoutSavedTracksInput = {
  id?: Maybe<Scalars['ID']>,
  title: Scalars['String'],
  normalizedTitle: Scalars['String'],
  description: Scalars['String'],
  author: UserCreateOneInput,
  location: LocationCreateOneInput,
  colorTint: Scalars['String'],
  isPublic?: Maybe<Scalars['Boolean']>,
  members?: Maybe<UserCreateManyWithoutPartiesInput>,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  inviteSecret: Scalars['String'],
  playlist?: Maybe<PlaylistCreateManyWithoutPartiesInput>,
  cart: PartyCartCreateOneWithoutPartyInput,
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

export type PartySavedTrack = {
   __typename?: 'PartySavedTrack',
  id: Scalars['ID'],
  spotifyId: Scalars['String'],
  durationMs: Scalars['Int'],
  explicit: Scalars['Boolean'],
  name: Scalars['String'],
  previewUrl?: Maybe<Scalars['String']>,
  uri: Scalars['String'],
  party: Party,
  stringArtists: Scalars['String'],
  length: Scalars['String'],
  popularity: Scalars['Int'],
  album: Album,
};

export type PartySavedTrackConnection = {
   __typename?: 'PartySavedTrackConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<PartySavedTrackEdge>>,
  aggregate: AggregatePartySavedTrack,
};

export type PartySavedTrackCreateInput = {
  id?: Maybe<Scalars['ID']>,
  spotifyId: Scalars['String'],
  durationMs: Scalars['Int'],
  explicit: Scalars['Boolean'],
  name: Scalars['String'],
  previewUrl?: Maybe<Scalars['String']>,
  uri: Scalars['String'],
  party: PartyCreateOneWithoutSavedTracksInput,
  stringArtists: Scalars['String'],
  length: Scalars['String'],
  popularity: Scalars['Int'],
  album: AlbumCreateOneInput,
};

export type PartySavedTrackCreateManyInput = {
  create?: Maybe<Array<PartySavedTrackCreateInput>>,
  connect?: Maybe<Array<PartySavedTrackWhereUniqueInput>>,
};

export type PartySavedTrackCreateManyWithoutPartyInput = {
  create?: Maybe<Array<PartySavedTrackCreateWithoutPartyInput>>,
  connect?: Maybe<Array<PartySavedTrackWhereUniqueInput>>,
};

export type PartySavedTrackCreateWithoutPartyInput = {
  id?: Maybe<Scalars['ID']>,
  spotifyId: Scalars['String'],
  durationMs: Scalars['Int'],
  explicit: Scalars['Boolean'],
  name: Scalars['String'],
  previewUrl?: Maybe<Scalars['String']>,
  uri: Scalars['String'],
  stringArtists: Scalars['String'],
  length: Scalars['String'],
  popularity: Scalars['Int'],
  album: AlbumCreateOneInput,
};

export type PartySavedTrackEdge = {
   __typename?: 'PartySavedTrackEdge',
  node: PartySavedTrack,
  cursor: Scalars['String'],
};

export enum PartySavedTrackOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  SpotifyIdAsc = 'spotifyId_ASC',
  SpotifyIdDesc = 'spotifyId_DESC',
  DurationMsAsc = 'durationMs_ASC',
  DurationMsDesc = 'durationMs_DESC',
  ExplicitAsc = 'explicit_ASC',
  ExplicitDesc = 'explicit_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PreviewUrlAsc = 'previewUrl_ASC',
  PreviewUrlDesc = 'previewUrl_DESC',
  UriAsc = 'uri_ASC',
  UriDesc = 'uri_DESC',
  StringArtistsAsc = 'stringArtists_ASC',
  StringArtistsDesc = 'stringArtists_DESC',
  LengthAsc = 'length_ASC',
  LengthDesc = 'length_DESC',
  PopularityAsc = 'popularity_ASC',
  PopularityDesc = 'popularity_DESC'
}

export type PartySavedTrackPreviousValues = {
   __typename?: 'PartySavedTrackPreviousValues',
  id: Scalars['ID'],
  spotifyId: Scalars['String'],
  durationMs: Scalars['Int'],
  explicit: Scalars['Boolean'],
  name: Scalars['String'],
  previewUrl?: Maybe<Scalars['String']>,
  uri: Scalars['String'],
  stringArtists: Scalars['String'],
  length: Scalars['String'],
  popularity: Scalars['Int'],
};

export type PartySavedTrackScalarWhereInput = {
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
  spotifyId?: Maybe<Scalars['String']>,
  spotifyId_not?: Maybe<Scalars['String']>,
  spotifyId_in?: Maybe<Array<Scalars['String']>>,
  spotifyId_not_in?: Maybe<Array<Scalars['String']>>,
  spotifyId_lt?: Maybe<Scalars['String']>,
  spotifyId_lte?: Maybe<Scalars['String']>,
  spotifyId_gt?: Maybe<Scalars['String']>,
  spotifyId_gte?: Maybe<Scalars['String']>,
  spotifyId_contains?: Maybe<Scalars['String']>,
  spotifyId_not_contains?: Maybe<Scalars['String']>,
  spotifyId_starts_with?: Maybe<Scalars['String']>,
  spotifyId_not_starts_with?: Maybe<Scalars['String']>,
  spotifyId_ends_with?: Maybe<Scalars['String']>,
  spotifyId_not_ends_with?: Maybe<Scalars['String']>,
  durationMs?: Maybe<Scalars['Int']>,
  durationMs_not?: Maybe<Scalars['Int']>,
  durationMs_in?: Maybe<Array<Scalars['Int']>>,
  durationMs_not_in?: Maybe<Array<Scalars['Int']>>,
  durationMs_lt?: Maybe<Scalars['Int']>,
  durationMs_lte?: Maybe<Scalars['Int']>,
  durationMs_gt?: Maybe<Scalars['Int']>,
  durationMs_gte?: Maybe<Scalars['Int']>,
  explicit?: Maybe<Scalars['Boolean']>,
  explicit_not?: Maybe<Scalars['Boolean']>,
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
  previewUrl?: Maybe<Scalars['String']>,
  previewUrl_not?: Maybe<Scalars['String']>,
  previewUrl_in?: Maybe<Array<Scalars['String']>>,
  previewUrl_not_in?: Maybe<Array<Scalars['String']>>,
  previewUrl_lt?: Maybe<Scalars['String']>,
  previewUrl_lte?: Maybe<Scalars['String']>,
  previewUrl_gt?: Maybe<Scalars['String']>,
  previewUrl_gte?: Maybe<Scalars['String']>,
  previewUrl_contains?: Maybe<Scalars['String']>,
  previewUrl_not_contains?: Maybe<Scalars['String']>,
  previewUrl_starts_with?: Maybe<Scalars['String']>,
  previewUrl_not_starts_with?: Maybe<Scalars['String']>,
  previewUrl_ends_with?: Maybe<Scalars['String']>,
  previewUrl_not_ends_with?: Maybe<Scalars['String']>,
  uri?: Maybe<Scalars['String']>,
  uri_not?: Maybe<Scalars['String']>,
  uri_in?: Maybe<Array<Scalars['String']>>,
  uri_not_in?: Maybe<Array<Scalars['String']>>,
  uri_lt?: Maybe<Scalars['String']>,
  uri_lte?: Maybe<Scalars['String']>,
  uri_gt?: Maybe<Scalars['String']>,
  uri_gte?: Maybe<Scalars['String']>,
  uri_contains?: Maybe<Scalars['String']>,
  uri_not_contains?: Maybe<Scalars['String']>,
  uri_starts_with?: Maybe<Scalars['String']>,
  uri_not_starts_with?: Maybe<Scalars['String']>,
  uri_ends_with?: Maybe<Scalars['String']>,
  uri_not_ends_with?: Maybe<Scalars['String']>,
  stringArtists?: Maybe<Scalars['String']>,
  stringArtists_not?: Maybe<Scalars['String']>,
  stringArtists_in?: Maybe<Array<Scalars['String']>>,
  stringArtists_not_in?: Maybe<Array<Scalars['String']>>,
  stringArtists_lt?: Maybe<Scalars['String']>,
  stringArtists_lte?: Maybe<Scalars['String']>,
  stringArtists_gt?: Maybe<Scalars['String']>,
  stringArtists_gte?: Maybe<Scalars['String']>,
  stringArtists_contains?: Maybe<Scalars['String']>,
  stringArtists_not_contains?: Maybe<Scalars['String']>,
  stringArtists_starts_with?: Maybe<Scalars['String']>,
  stringArtists_not_starts_with?: Maybe<Scalars['String']>,
  stringArtists_ends_with?: Maybe<Scalars['String']>,
  stringArtists_not_ends_with?: Maybe<Scalars['String']>,
  length?: Maybe<Scalars['String']>,
  length_not?: Maybe<Scalars['String']>,
  length_in?: Maybe<Array<Scalars['String']>>,
  length_not_in?: Maybe<Array<Scalars['String']>>,
  length_lt?: Maybe<Scalars['String']>,
  length_lte?: Maybe<Scalars['String']>,
  length_gt?: Maybe<Scalars['String']>,
  length_gte?: Maybe<Scalars['String']>,
  length_contains?: Maybe<Scalars['String']>,
  length_not_contains?: Maybe<Scalars['String']>,
  length_starts_with?: Maybe<Scalars['String']>,
  length_not_starts_with?: Maybe<Scalars['String']>,
  length_ends_with?: Maybe<Scalars['String']>,
  length_not_ends_with?: Maybe<Scalars['String']>,
  popularity?: Maybe<Scalars['Int']>,
  popularity_not?: Maybe<Scalars['Int']>,
  popularity_in?: Maybe<Array<Scalars['Int']>>,
  popularity_not_in?: Maybe<Array<Scalars['Int']>>,
  popularity_lt?: Maybe<Scalars['Int']>,
  popularity_lte?: Maybe<Scalars['Int']>,
  popularity_gt?: Maybe<Scalars['Int']>,
  popularity_gte?: Maybe<Scalars['Int']>,
  AND?: Maybe<Array<PartySavedTrackScalarWhereInput>>,
  OR?: Maybe<Array<PartySavedTrackScalarWhereInput>>,
  NOT?: Maybe<Array<PartySavedTrackScalarWhereInput>>,
};

export type PartySavedTrackSubscriptionPayload = {
   __typename?: 'PartySavedTrackSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<PartySavedTrack>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<PartySavedTrackPreviousValues>,
};

export type PartySavedTrackSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<PartySavedTrackWhereInput>,
  AND?: Maybe<Array<PartySavedTrackSubscriptionWhereInput>>,
  OR?: Maybe<Array<PartySavedTrackSubscriptionWhereInput>>,
  NOT?: Maybe<Array<PartySavedTrackSubscriptionWhereInput>>,
};

export type PartySavedTrackUpdateDataInput = {
  spotifyId?: Maybe<Scalars['String']>,
  durationMs?: Maybe<Scalars['Int']>,
  explicit?: Maybe<Scalars['Boolean']>,
  name?: Maybe<Scalars['String']>,
  previewUrl?: Maybe<Scalars['String']>,
  uri?: Maybe<Scalars['String']>,
  party?: Maybe<PartyUpdateOneRequiredWithoutSavedTracksInput>,
  stringArtists?: Maybe<Scalars['String']>,
  length?: Maybe<Scalars['String']>,
  popularity?: Maybe<Scalars['Int']>,
  album?: Maybe<AlbumUpdateOneRequiredInput>,
};

export type PartySavedTrackUpdateInput = {
  spotifyId?: Maybe<Scalars['String']>,
  durationMs?: Maybe<Scalars['Int']>,
  explicit?: Maybe<Scalars['Boolean']>,
  name?: Maybe<Scalars['String']>,
  previewUrl?: Maybe<Scalars['String']>,
  uri?: Maybe<Scalars['String']>,
  party?: Maybe<PartyUpdateOneRequiredWithoutSavedTracksInput>,
  stringArtists?: Maybe<Scalars['String']>,
  length?: Maybe<Scalars['String']>,
  popularity?: Maybe<Scalars['Int']>,
  album?: Maybe<AlbumUpdateOneRequiredInput>,
};

export type PartySavedTrackUpdateManyDataInput = {
  spotifyId?: Maybe<Scalars['String']>,
  durationMs?: Maybe<Scalars['Int']>,
  explicit?: Maybe<Scalars['Boolean']>,
  name?: Maybe<Scalars['String']>,
  previewUrl?: Maybe<Scalars['String']>,
  uri?: Maybe<Scalars['String']>,
  stringArtists?: Maybe<Scalars['String']>,
  length?: Maybe<Scalars['String']>,
  popularity?: Maybe<Scalars['Int']>,
};

export type PartySavedTrackUpdateManyInput = {
  create?: Maybe<Array<PartySavedTrackCreateInput>>,
  update?: Maybe<Array<PartySavedTrackUpdateWithWhereUniqueNestedInput>>,
  upsert?: Maybe<Array<PartySavedTrackUpsertWithWhereUniqueNestedInput>>,
  delete?: Maybe<Array<PartySavedTrackWhereUniqueInput>>,
  connect?: Maybe<Array<PartySavedTrackWhereUniqueInput>>,
  set?: Maybe<Array<PartySavedTrackWhereUniqueInput>>,
  disconnect?: Maybe<Array<PartySavedTrackWhereUniqueInput>>,
  deleteMany?: Maybe<Array<PartySavedTrackScalarWhereInput>>,
  updateMany?: Maybe<Array<PartySavedTrackUpdateManyWithWhereNestedInput>>,
};

export type PartySavedTrackUpdateManyMutationInput = {
  spotifyId?: Maybe<Scalars['String']>,
  durationMs?: Maybe<Scalars['Int']>,
  explicit?: Maybe<Scalars['Boolean']>,
  name?: Maybe<Scalars['String']>,
  previewUrl?: Maybe<Scalars['String']>,
  uri?: Maybe<Scalars['String']>,
  stringArtists?: Maybe<Scalars['String']>,
  length?: Maybe<Scalars['String']>,
  popularity?: Maybe<Scalars['Int']>,
};

export type PartySavedTrackUpdateManyWithoutPartyInput = {
  create?: Maybe<Array<PartySavedTrackCreateWithoutPartyInput>>,
  delete?: Maybe<Array<PartySavedTrackWhereUniqueInput>>,
  connect?: Maybe<Array<PartySavedTrackWhereUniqueInput>>,
  set?: Maybe<Array<PartySavedTrackWhereUniqueInput>>,
  disconnect?: Maybe<Array<PartySavedTrackWhereUniqueInput>>,
  update?: Maybe<Array<PartySavedTrackUpdateWithWhereUniqueWithoutPartyInput>>,
  upsert?: Maybe<Array<PartySavedTrackUpsertWithWhereUniqueWithoutPartyInput>>,
  deleteMany?: Maybe<Array<PartySavedTrackScalarWhereInput>>,
  updateMany?: Maybe<Array<PartySavedTrackUpdateManyWithWhereNestedInput>>,
};

export type PartySavedTrackUpdateManyWithWhereNestedInput = {
  where: PartySavedTrackScalarWhereInput,
  data: PartySavedTrackUpdateManyDataInput,
};

export type PartySavedTrackUpdateWithoutPartyDataInput = {
  spotifyId?: Maybe<Scalars['String']>,
  durationMs?: Maybe<Scalars['Int']>,
  explicit?: Maybe<Scalars['Boolean']>,
  name?: Maybe<Scalars['String']>,
  previewUrl?: Maybe<Scalars['String']>,
  uri?: Maybe<Scalars['String']>,
  stringArtists?: Maybe<Scalars['String']>,
  length?: Maybe<Scalars['String']>,
  popularity?: Maybe<Scalars['Int']>,
  album?: Maybe<AlbumUpdateOneRequiredInput>,
};

export type PartySavedTrackUpdateWithWhereUniqueNestedInput = {
  where: PartySavedTrackWhereUniqueInput,
  data: PartySavedTrackUpdateDataInput,
};

export type PartySavedTrackUpdateWithWhereUniqueWithoutPartyInput = {
  where: PartySavedTrackWhereUniqueInput,
  data: PartySavedTrackUpdateWithoutPartyDataInput,
};

export type PartySavedTrackUpsertWithWhereUniqueNestedInput = {
  where: PartySavedTrackWhereUniqueInput,
  update: PartySavedTrackUpdateDataInput,
  create: PartySavedTrackCreateInput,
};

export type PartySavedTrackUpsertWithWhereUniqueWithoutPartyInput = {
  where: PartySavedTrackWhereUniqueInput,
  update: PartySavedTrackUpdateWithoutPartyDataInput,
  create: PartySavedTrackCreateWithoutPartyInput,
};

export type PartySavedTrackWhereInput = {
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
  spotifyId?: Maybe<Scalars['String']>,
  spotifyId_not?: Maybe<Scalars['String']>,
  spotifyId_in?: Maybe<Array<Scalars['String']>>,
  spotifyId_not_in?: Maybe<Array<Scalars['String']>>,
  spotifyId_lt?: Maybe<Scalars['String']>,
  spotifyId_lte?: Maybe<Scalars['String']>,
  spotifyId_gt?: Maybe<Scalars['String']>,
  spotifyId_gte?: Maybe<Scalars['String']>,
  spotifyId_contains?: Maybe<Scalars['String']>,
  spotifyId_not_contains?: Maybe<Scalars['String']>,
  spotifyId_starts_with?: Maybe<Scalars['String']>,
  spotifyId_not_starts_with?: Maybe<Scalars['String']>,
  spotifyId_ends_with?: Maybe<Scalars['String']>,
  spotifyId_not_ends_with?: Maybe<Scalars['String']>,
  durationMs?: Maybe<Scalars['Int']>,
  durationMs_not?: Maybe<Scalars['Int']>,
  durationMs_in?: Maybe<Array<Scalars['Int']>>,
  durationMs_not_in?: Maybe<Array<Scalars['Int']>>,
  durationMs_lt?: Maybe<Scalars['Int']>,
  durationMs_lte?: Maybe<Scalars['Int']>,
  durationMs_gt?: Maybe<Scalars['Int']>,
  durationMs_gte?: Maybe<Scalars['Int']>,
  explicit?: Maybe<Scalars['Boolean']>,
  explicit_not?: Maybe<Scalars['Boolean']>,
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
  previewUrl?: Maybe<Scalars['String']>,
  previewUrl_not?: Maybe<Scalars['String']>,
  previewUrl_in?: Maybe<Array<Scalars['String']>>,
  previewUrl_not_in?: Maybe<Array<Scalars['String']>>,
  previewUrl_lt?: Maybe<Scalars['String']>,
  previewUrl_lte?: Maybe<Scalars['String']>,
  previewUrl_gt?: Maybe<Scalars['String']>,
  previewUrl_gte?: Maybe<Scalars['String']>,
  previewUrl_contains?: Maybe<Scalars['String']>,
  previewUrl_not_contains?: Maybe<Scalars['String']>,
  previewUrl_starts_with?: Maybe<Scalars['String']>,
  previewUrl_not_starts_with?: Maybe<Scalars['String']>,
  previewUrl_ends_with?: Maybe<Scalars['String']>,
  previewUrl_not_ends_with?: Maybe<Scalars['String']>,
  uri?: Maybe<Scalars['String']>,
  uri_not?: Maybe<Scalars['String']>,
  uri_in?: Maybe<Array<Scalars['String']>>,
  uri_not_in?: Maybe<Array<Scalars['String']>>,
  uri_lt?: Maybe<Scalars['String']>,
  uri_lte?: Maybe<Scalars['String']>,
  uri_gt?: Maybe<Scalars['String']>,
  uri_gte?: Maybe<Scalars['String']>,
  uri_contains?: Maybe<Scalars['String']>,
  uri_not_contains?: Maybe<Scalars['String']>,
  uri_starts_with?: Maybe<Scalars['String']>,
  uri_not_starts_with?: Maybe<Scalars['String']>,
  uri_ends_with?: Maybe<Scalars['String']>,
  uri_not_ends_with?: Maybe<Scalars['String']>,
  party?: Maybe<PartyWhereInput>,
  stringArtists?: Maybe<Scalars['String']>,
  stringArtists_not?: Maybe<Scalars['String']>,
  stringArtists_in?: Maybe<Array<Scalars['String']>>,
  stringArtists_not_in?: Maybe<Array<Scalars['String']>>,
  stringArtists_lt?: Maybe<Scalars['String']>,
  stringArtists_lte?: Maybe<Scalars['String']>,
  stringArtists_gt?: Maybe<Scalars['String']>,
  stringArtists_gte?: Maybe<Scalars['String']>,
  stringArtists_contains?: Maybe<Scalars['String']>,
  stringArtists_not_contains?: Maybe<Scalars['String']>,
  stringArtists_starts_with?: Maybe<Scalars['String']>,
  stringArtists_not_starts_with?: Maybe<Scalars['String']>,
  stringArtists_ends_with?: Maybe<Scalars['String']>,
  stringArtists_not_ends_with?: Maybe<Scalars['String']>,
  length?: Maybe<Scalars['String']>,
  length_not?: Maybe<Scalars['String']>,
  length_in?: Maybe<Array<Scalars['String']>>,
  length_not_in?: Maybe<Array<Scalars['String']>>,
  length_lt?: Maybe<Scalars['String']>,
  length_lte?: Maybe<Scalars['String']>,
  length_gt?: Maybe<Scalars['String']>,
  length_gte?: Maybe<Scalars['String']>,
  length_contains?: Maybe<Scalars['String']>,
  length_not_contains?: Maybe<Scalars['String']>,
  length_starts_with?: Maybe<Scalars['String']>,
  length_not_starts_with?: Maybe<Scalars['String']>,
  length_ends_with?: Maybe<Scalars['String']>,
  length_not_ends_with?: Maybe<Scalars['String']>,
  popularity?: Maybe<Scalars['Int']>,
  popularity_not?: Maybe<Scalars['Int']>,
  popularity_in?: Maybe<Array<Scalars['Int']>>,
  popularity_not_in?: Maybe<Array<Scalars['Int']>>,
  popularity_lt?: Maybe<Scalars['Int']>,
  popularity_lte?: Maybe<Scalars['Int']>,
  popularity_gt?: Maybe<Scalars['Int']>,
  popularity_gte?: Maybe<Scalars['Int']>,
  album?: Maybe<AlbumWhereInput>,
  AND?: Maybe<Array<PartySavedTrackWhereInput>>,
  OR?: Maybe<Array<PartySavedTrackWhereInput>>,
  NOT?: Maybe<Array<PartySavedTrackWhereInput>>,
};

export type PartySavedTrackWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
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
  colorTint?: Maybe<Scalars['String']>,
  isPublic?: Maybe<Scalars['Boolean']>,
  members?: Maybe<UserUpdateManyWithoutPartiesInput>,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  inviteSecret?: Maybe<Scalars['String']>,
  playlist?: Maybe<PlaylistUpdateManyWithoutPartiesInput>,
  savedTracks?: Maybe<PartySavedTrackUpdateManyWithoutPartyInput>,
  cart?: Maybe<PartyCartUpdateOneRequiredWithoutPartyInput>,
};

export type PartyUpdateInput = {
  title?: Maybe<Scalars['String']>,
  normalizedTitle?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  author?: Maybe<UserUpdateOneRequiredInput>,
  location?: Maybe<LocationUpdateOneRequiredInput>,
  colorTint?: Maybe<Scalars['String']>,
  isPublic?: Maybe<Scalars['Boolean']>,
  members?: Maybe<UserUpdateManyWithoutPartiesInput>,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  inviteSecret?: Maybe<Scalars['String']>,
  playlist?: Maybe<PlaylistUpdateManyWithoutPartiesInput>,
  savedTracks?: Maybe<PartySavedTrackUpdateManyWithoutPartyInput>,
  cart?: Maybe<PartyCartUpdateOneRequiredWithoutPartyInput>,
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

export type PartyUpdateOneRequiredWithoutSavedTracksInput = {
  create?: Maybe<PartyCreateWithoutSavedTracksInput>,
  update?: Maybe<PartyUpdateWithoutSavedTracksDataInput>,
  upsert?: Maybe<PartyUpsertWithoutSavedTracksInput>,
  connect?: Maybe<PartyWhereUniqueInput>,
};

export type PartyUpdateWithoutCartDataInput = {
  title?: Maybe<Scalars['String']>,
  normalizedTitle?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  author?: Maybe<UserUpdateOneRequiredInput>,
  location?: Maybe<LocationUpdateOneRequiredInput>,
  colorTint?: Maybe<Scalars['String']>,
  isPublic?: Maybe<Scalars['Boolean']>,
  members?: Maybe<UserUpdateManyWithoutPartiesInput>,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  inviteSecret?: Maybe<Scalars['String']>,
  playlist?: Maybe<PlaylistUpdateManyWithoutPartiesInput>,
  savedTracks?: Maybe<PartySavedTrackUpdateManyWithoutPartyInput>,
};

export type PartyUpdateWithoutMembersDataInput = {
  title?: Maybe<Scalars['String']>,
  normalizedTitle?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  author?: Maybe<UserUpdateOneRequiredInput>,
  location?: Maybe<LocationUpdateOneRequiredInput>,
  colorTint?: Maybe<Scalars['String']>,
  isPublic?: Maybe<Scalars['Boolean']>,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  inviteSecret?: Maybe<Scalars['String']>,
  playlist?: Maybe<PlaylistUpdateManyWithoutPartiesInput>,
  savedTracks?: Maybe<PartySavedTrackUpdateManyWithoutPartyInput>,
  cart?: Maybe<PartyCartUpdateOneRequiredWithoutPartyInput>,
};

export type PartyUpdateWithoutPlaylistDataInput = {
  title?: Maybe<Scalars['String']>,
  normalizedTitle?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  author?: Maybe<UserUpdateOneRequiredInput>,
  location?: Maybe<LocationUpdateOneRequiredInput>,
  colorTint?: Maybe<Scalars['String']>,
  isPublic?: Maybe<Scalars['Boolean']>,
  members?: Maybe<UserUpdateManyWithoutPartiesInput>,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  inviteSecret?: Maybe<Scalars['String']>,
  savedTracks?: Maybe<PartySavedTrackUpdateManyWithoutPartyInput>,
  cart?: Maybe<PartyCartUpdateOneRequiredWithoutPartyInput>,
};

export type PartyUpdateWithoutSavedTracksDataInput = {
  title?: Maybe<Scalars['String']>,
  normalizedTitle?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  author?: Maybe<UserUpdateOneRequiredInput>,
  location?: Maybe<LocationUpdateOneRequiredInput>,
  colorTint?: Maybe<Scalars['String']>,
  isPublic?: Maybe<Scalars['Boolean']>,
  members?: Maybe<UserUpdateManyWithoutPartiesInput>,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  inviteSecret?: Maybe<Scalars['String']>,
  playlist?: Maybe<PlaylistUpdateManyWithoutPartiesInput>,
  cart?: Maybe<PartyCartUpdateOneRequiredWithoutPartyInput>,
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

export type PartyUpsertWithoutSavedTracksInput = {
  update: PartyUpdateWithoutSavedTracksDataInput,
  create: PartyCreateWithoutSavedTracksInput,
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
  playlist_every?: Maybe<PlaylistWhereInput>,
  playlist_some?: Maybe<PlaylistWhereInput>,
  playlist_none?: Maybe<PlaylistWhereInput>,
  savedTracks_every?: Maybe<PartySavedTrackWhereInput>,
  savedTracks_some?: Maybe<PartySavedTrackWhereInput>,
  savedTracks_none?: Maybe<PartySavedTrackWhereInput>,
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
  spotifyId: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  uri: Scalars['String'],
  spotifyExternalUrl: Scalars['String'],
  user: User,
  parties?: Maybe<Array<Party>>,
  name: Scalars['String'],
  imageUrl: Scalars['String'],
  tracks?: Maybe<Array<PartySavedTrack>>,
  importable: Scalars['Boolean'],
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
  where?: Maybe<PartySavedTrackWhereInput>,
  orderBy?: Maybe<PartySavedTrackOrderByInput>,
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
  spotifyId: Scalars['ID'],
  uri: Scalars['String'],
  spotifyExternalUrl: Scalars['String'],
  user: UserCreateOneInput,
  parties?: Maybe<PartyCreateManyWithoutPlaylistInput>,
  name: Scalars['String'],
  imageUrl: Scalars['String'],
  tracks?: Maybe<PartySavedTrackCreateManyInput>,
  importable?: Maybe<Scalars['Boolean']>,
};

export type PlaylistCreateManyWithoutPartiesInput = {
  create?: Maybe<Array<PlaylistCreateWithoutPartiesInput>>,
  connect?: Maybe<Array<PlaylistWhereUniqueInput>>,
};

export type PlaylistCreateWithoutPartiesInput = {
  id?: Maybe<Scalars['ID']>,
  spotifyId: Scalars['ID'],
  uri: Scalars['String'],
  spotifyExternalUrl: Scalars['String'],
  user: UserCreateOneInput,
  name: Scalars['String'],
  imageUrl: Scalars['String'],
  tracks?: Maybe<PartySavedTrackCreateManyInput>,
  importable?: Maybe<Scalars['Boolean']>,
};

export type PlaylistEdge = {
   __typename?: 'PlaylistEdge',
  node: Playlist,
  cursor: Scalars['String'],
};

export enum PlaylistOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  SpotifyIdAsc = 'spotifyId_ASC',
  SpotifyIdDesc = 'spotifyId_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UriAsc = 'uri_ASC',
  UriDesc = 'uri_DESC',
  SpotifyExternalUrlAsc = 'spotifyExternalUrl_ASC',
  SpotifyExternalUrlDesc = 'spotifyExternalUrl_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  ImageUrlAsc = 'imageUrl_ASC',
  ImageUrlDesc = 'imageUrl_DESC',
  ImportableAsc = 'importable_ASC',
  ImportableDesc = 'importable_DESC'
}

export type PlaylistPreviousValues = {
   __typename?: 'PlaylistPreviousValues',
  id: Scalars['ID'],
  spotifyId: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  uri: Scalars['String'],
  spotifyExternalUrl: Scalars['String'],
  name: Scalars['String'],
  imageUrl: Scalars['String'],
  importable: Scalars['Boolean'],
};

export type PlaylistScalarWhereInput = {
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
  spotifyId?: Maybe<Scalars['ID']>,
  spotifyId_not?: Maybe<Scalars['ID']>,
  spotifyId_in?: Maybe<Array<Scalars['ID']>>,
  spotifyId_not_in?: Maybe<Array<Scalars['ID']>>,
  spotifyId_lt?: Maybe<Scalars['ID']>,
  spotifyId_lte?: Maybe<Scalars['ID']>,
  spotifyId_gt?: Maybe<Scalars['ID']>,
  spotifyId_gte?: Maybe<Scalars['ID']>,
  spotifyId_contains?: Maybe<Scalars['ID']>,
  spotifyId_not_contains?: Maybe<Scalars['ID']>,
  spotifyId_starts_with?: Maybe<Scalars['ID']>,
  spotifyId_not_starts_with?: Maybe<Scalars['ID']>,
  spotifyId_ends_with?: Maybe<Scalars['ID']>,
  spotifyId_not_ends_with?: Maybe<Scalars['ID']>,
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
  uri?: Maybe<Scalars['String']>,
  uri_not?: Maybe<Scalars['String']>,
  uri_in?: Maybe<Array<Scalars['String']>>,
  uri_not_in?: Maybe<Array<Scalars['String']>>,
  uri_lt?: Maybe<Scalars['String']>,
  uri_lte?: Maybe<Scalars['String']>,
  uri_gt?: Maybe<Scalars['String']>,
  uri_gte?: Maybe<Scalars['String']>,
  uri_contains?: Maybe<Scalars['String']>,
  uri_not_contains?: Maybe<Scalars['String']>,
  uri_starts_with?: Maybe<Scalars['String']>,
  uri_not_starts_with?: Maybe<Scalars['String']>,
  uri_ends_with?: Maybe<Scalars['String']>,
  uri_not_ends_with?: Maybe<Scalars['String']>,
  spotifyExternalUrl?: Maybe<Scalars['String']>,
  spotifyExternalUrl_not?: Maybe<Scalars['String']>,
  spotifyExternalUrl_in?: Maybe<Array<Scalars['String']>>,
  spotifyExternalUrl_not_in?: Maybe<Array<Scalars['String']>>,
  spotifyExternalUrl_lt?: Maybe<Scalars['String']>,
  spotifyExternalUrl_lte?: Maybe<Scalars['String']>,
  spotifyExternalUrl_gt?: Maybe<Scalars['String']>,
  spotifyExternalUrl_gte?: Maybe<Scalars['String']>,
  spotifyExternalUrl_contains?: Maybe<Scalars['String']>,
  spotifyExternalUrl_not_contains?: Maybe<Scalars['String']>,
  spotifyExternalUrl_starts_with?: Maybe<Scalars['String']>,
  spotifyExternalUrl_not_starts_with?: Maybe<Scalars['String']>,
  spotifyExternalUrl_ends_with?: Maybe<Scalars['String']>,
  spotifyExternalUrl_not_ends_with?: Maybe<Scalars['String']>,
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
  imageUrl?: Maybe<Scalars['String']>,
  imageUrl_not?: Maybe<Scalars['String']>,
  imageUrl_in?: Maybe<Array<Scalars['String']>>,
  imageUrl_not_in?: Maybe<Array<Scalars['String']>>,
  imageUrl_lt?: Maybe<Scalars['String']>,
  imageUrl_lte?: Maybe<Scalars['String']>,
  imageUrl_gt?: Maybe<Scalars['String']>,
  imageUrl_gte?: Maybe<Scalars['String']>,
  imageUrl_contains?: Maybe<Scalars['String']>,
  imageUrl_not_contains?: Maybe<Scalars['String']>,
  imageUrl_starts_with?: Maybe<Scalars['String']>,
  imageUrl_not_starts_with?: Maybe<Scalars['String']>,
  imageUrl_ends_with?: Maybe<Scalars['String']>,
  imageUrl_not_ends_with?: Maybe<Scalars['String']>,
  importable?: Maybe<Scalars['Boolean']>,
  importable_not?: Maybe<Scalars['Boolean']>,
  AND?: Maybe<Array<PlaylistScalarWhereInput>>,
  OR?: Maybe<Array<PlaylistScalarWhereInput>>,
  NOT?: Maybe<Array<PlaylistScalarWhereInput>>,
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
  spotifyId?: Maybe<Scalars['ID']>,
  uri?: Maybe<Scalars['String']>,
  spotifyExternalUrl?: Maybe<Scalars['String']>,
  user?: Maybe<UserUpdateOneRequiredInput>,
  parties?: Maybe<PartyUpdateManyWithoutPlaylistInput>,
  name?: Maybe<Scalars['String']>,
  imageUrl?: Maybe<Scalars['String']>,
  tracks?: Maybe<PartySavedTrackUpdateManyInput>,
  importable?: Maybe<Scalars['Boolean']>,
};

export type PlaylistUpdateManyDataInput = {
  spotifyId?: Maybe<Scalars['ID']>,
  uri?: Maybe<Scalars['String']>,
  spotifyExternalUrl?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  imageUrl?: Maybe<Scalars['String']>,
  importable?: Maybe<Scalars['Boolean']>,
};

export type PlaylistUpdateManyMutationInput = {
  spotifyId?: Maybe<Scalars['ID']>,
  uri?: Maybe<Scalars['String']>,
  spotifyExternalUrl?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  imageUrl?: Maybe<Scalars['String']>,
  importable?: Maybe<Scalars['Boolean']>,
};

export type PlaylistUpdateManyWithoutPartiesInput = {
  create?: Maybe<Array<PlaylistCreateWithoutPartiesInput>>,
  delete?: Maybe<Array<PlaylistWhereUniqueInput>>,
  connect?: Maybe<Array<PlaylistWhereUniqueInput>>,
  set?: Maybe<Array<PlaylistWhereUniqueInput>>,
  disconnect?: Maybe<Array<PlaylistWhereUniqueInput>>,
  update?: Maybe<Array<PlaylistUpdateWithWhereUniqueWithoutPartiesInput>>,
  upsert?: Maybe<Array<PlaylistUpsertWithWhereUniqueWithoutPartiesInput>>,
  deleteMany?: Maybe<Array<PlaylistScalarWhereInput>>,
  updateMany?: Maybe<Array<PlaylistUpdateManyWithWhereNestedInput>>,
};

export type PlaylistUpdateManyWithWhereNestedInput = {
  where: PlaylistScalarWhereInput,
  data: PlaylistUpdateManyDataInput,
};

export type PlaylistUpdateWithoutPartiesDataInput = {
  spotifyId?: Maybe<Scalars['ID']>,
  uri?: Maybe<Scalars['String']>,
  spotifyExternalUrl?: Maybe<Scalars['String']>,
  user?: Maybe<UserUpdateOneRequiredInput>,
  name?: Maybe<Scalars['String']>,
  imageUrl?: Maybe<Scalars['String']>,
  tracks?: Maybe<PartySavedTrackUpdateManyInput>,
  importable?: Maybe<Scalars['Boolean']>,
};

export type PlaylistUpdateWithWhereUniqueWithoutPartiesInput = {
  where: PlaylistWhereUniqueInput,
  data: PlaylistUpdateWithoutPartiesDataInput,
};

export type PlaylistUpsertWithWhereUniqueWithoutPartiesInput = {
  where: PlaylistWhereUniqueInput,
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
  spotifyId?: Maybe<Scalars['ID']>,
  spotifyId_not?: Maybe<Scalars['ID']>,
  spotifyId_in?: Maybe<Array<Scalars['ID']>>,
  spotifyId_not_in?: Maybe<Array<Scalars['ID']>>,
  spotifyId_lt?: Maybe<Scalars['ID']>,
  spotifyId_lte?: Maybe<Scalars['ID']>,
  spotifyId_gt?: Maybe<Scalars['ID']>,
  spotifyId_gte?: Maybe<Scalars['ID']>,
  spotifyId_contains?: Maybe<Scalars['ID']>,
  spotifyId_not_contains?: Maybe<Scalars['ID']>,
  spotifyId_starts_with?: Maybe<Scalars['ID']>,
  spotifyId_not_starts_with?: Maybe<Scalars['ID']>,
  spotifyId_ends_with?: Maybe<Scalars['ID']>,
  spotifyId_not_ends_with?: Maybe<Scalars['ID']>,
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
  uri?: Maybe<Scalars['String']>,
  uri_not?: Maybe<Scalars['String']>,
  uri_in?: Maybe<Array<Scalars['String']>>,
  uri_not_in?: Maybe<Array<Scalars['String']>>,
  uri_lt?: Maybe<Scalars['String']>,
  uri_lte?: Maybe<Scalars['String']>,
  uri_gt?: Maybe<Scalars['String']>,
  uri_gte?: Maybe<Scalars['String']>,
  uri_contains?: Maybe<Scalars['String']>,
  uri_not_contains?: Maybe<Scalars['String']>,
  uri_starts_with?: Maybe<Scalars['String']>,
  uri_not_starts_with?: Maybe<Scalars['String']>,
  uri_ends_with?: Maybe<Scalars['String']>,
  uri_not_ends_with?: Maybe<Scalars['String']>,
  spotifyExternalUrl?: Maybe<Scalars['String']>,
  spotifyExternalUrl_not?: Maybe<Scalars['String']>,
  spotifyExternalUrl_in?: Maybe<Array<Scalars['String']>>,
  spotifyExternalUrl_not_in?: Maybe<Array<Scalars['String']>>,
  spotifyExternalUrl_lt?: Maybe<Scalars['String']>,
  spotifyExternalUrl_lte?: Maybe<Scalars['String']>,
  spotifyExternalUrl_gt?: Maybe<Scalars['String']>,
  spotifyExternalUrl_gte?: Maybe<Scalars['String']>,
  spotifyExternalUrl_contains?: Maybe<Scalars['String']>,
  spotifyExternalUrl_not_contains?: Maybe<Scalars['String']>,
  spotifyExternalUrl_starts_with?: Maybe<Scalars['String']>,
  spotifyExternalUrl_not_starts_with?: Maybe<Scalars['String']>,
  spotifyExternalUrl_ends_with?: Maybe<Scalars['String']>,
  spotifyExternalUrl_not_ends_with?: Maybe<Scalars['String']>,
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
  imageUrl?: Maybe<Scalars['String']>,
  imageUrl_not?: Maybe<Scalars['String']>,
  imageUrl_in?: Maybe<Array<Scalars['String']>>,
  imageUrl_not_in?: Maybe<Array<Scalars['String']>>,
  imageUrl_lt?: Maybe<Scalars['String']>,
  imageUrl_lte?: Maybe<Scalars['String']>,
  imageUrl_gt?: Maybe<Scalars['String']>,
  imageUrl_gte?: Maybe<Scalars['String']>,
  imageUrl_contains?: Maybe<Scalars['String']>,
  imageUrl_not_contains?: Maybe<Scalars['String']>,
  imageUrl_starts_with?: Maybe<Scalars['String']>,
  imageUrl_not_starts_with?: Maybe<Scalars['String']>,
  imageUrl_ends_with?: Maybe<Scalars['String']>,
  imageUrl_not_ends_with?: Maybe<Scalars['String']>,
  tracks_every?: Maybe<PartySavedTrackWhereInput>,
  tracks_some?: Maybe<PartySavedTrackWhereInput>,
  tracks_none?: Maybe<PartySavedTrackWhereInput>,
  importable?: Maybe<Scalars['Boolean']>,
  importable_not?: Maybe<Scalars['Boolean']>,
  AND?: Maybe<Array<PlaylistWhereInput>>,
  OR?: Maybe<Array<PlaylistWhereInput>>,
  NOT?: Maybe<Array<PlaylistWhereInput>>,
};

export type PlaylistWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
  spotifyId?: Maybe<Scalars['ID']>,
};

export enum PushNotificationScope {
  PartyInvites = 'PARTY_INVITES',
  FriendInvites = 'FRIEND_INVITES'
}

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
  friendInvitation?: Maybe<FriendInvitation>,
  friendInvitations: Array<Maybe<FriendInvitation>>,
  friendInvitationsConnection: FriendInvitationConnection,
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
  partySavedTrack?: Maybe<PartySavedTrack>,
  partySavedTracks: Array<Maybe<PartySavedTrack>>,
  partySavedTracksConnection: PartySavedTrackConnection,
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
  authenticateParty: PartyAuthenticationResult,
  hasChats: Scalars['Boolean'],
  hasParties: Scalars['Boolean'],
  canJoinParty?: Maybe<Scalars['Boolean']>,
  partyCartCost: Scalars['Float'],
  me?: Maybe<User>,
  getUsers: Array<Maybe<User>>,
  userFriends: UserFriends,
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


export type QueryFriendInvitationArgs = {
  where: FriendInvitationWhereUniqueInput
};


export type QueryFriendInvitationsArgs = {
  where?: Maybe<FriendInvitationWhereInput>,
  orderBy?: Maybe<FriendInvitationOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryFriendInvitationsConnectionArgs = {
  where?: Maybe<FriendInvitationWhereInput>,
  orderBy?: Maybe<FriendInvitationOrderByInput>,
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


export type QueryPartySavedTrackArgs = {
  where: PartySavedTrackWhereUniqueInput
};


export type QueryPartySavedTracksArgs = {
  where?: Maybe<PartySavedTrackWhereInput>,
  orderBy?: Maybe<PartySavedTrackOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryPartySavedTracksConnectionArgs = {
  where?: Maybe<PartySavedTrackWhereInput>,
  orderBy?: Maybe<PartySavedTrackOrderByInput>,
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


export type QueryAuthenticatePartyArgs = {
  partyId: Scalars['ID']
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


export type QueryPartyCartCostArgs = {
  id: Scalars['ID']
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


export type QueryUserFriendsArgs = {
  userId: Scalars['ID']
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
  friendInvitation?: Maybe<FriendInvitationSubscriptionPayload>,
  location?: Maybe<LocationSubscriptionPayload>,
  message?: Maybe<MessageSubscriptionPayload>,
  party?: Maybe<PartySubscriptionPayload>,
  partyCart?: Maybe<PartyCartSubscriptionPayload>,
  partyCartItem?: Maybe<PartyCartItemSubscriptionPayload>,
  partyInvitation?: Maybe<PartyInvitationSubscriptionPayload>,
  partySavedTrack?: Maybe<PartySavedTrackSubscriptionPayload>,
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


export type SubscriptionFriendInvitationArgs = {
  where?: Maybe<FriendInvitationSubscriptionWhereInput>
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


export type SubscriptionPartySavedTrackArgs = {
  where?: Maybe<PartySavedTrackSubscriptionWhereInput>
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
  preview_url?: Maybe<Scalars['String']>,
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
  preview_url?: Maybe<Scalars['String']>,
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
  preview_url?: Maybe<Scalars['String']>,
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

export type TrackUpdateInput = {
  name?: Maybe<Scalars['String']>,
  album?: Maybe<AlbumUpdateOneRequiredInput>,
  artists?: Maybe<ArtistUpdateManyInput>,
  duration?: Maybe<Scalars['Int']>,
  preview_url?: Maybe<Scalars['String']>,
};

export type TrackUpdateManyMutationInput = {
  name?: Maybe<Scalars['String']>,
  duration?: Maybe<Scalars['Int']>,
  preview_url?: Maybe<Scalars['String']>,
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
  pendingFriendInvitations?: Maybe<Array<FriendInvitation>>,
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
  isPrivate: Scalars['Boolean'],
  cartItems?: Maybe<Array<PartyCartItem>>,
  webPushNotificationToken?: Maybe<Scalars['String']>,
  appPushNotificationToken?: Maybe<Scalars['String']>,
  pushNotificationsScopes: Array<PushNotificationScope>,
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
  where?: Maybe<FriendInvitationWhereInput>,
  orderBy?: Maybe<FriendInvitationOrderByInput>,
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


export type UserCartItemsArgs = {
  where?: Maybe<PartyCartItemWhereInput>,
  orderBy?: Maybe<PartyCartItemOrderByInput>,
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
  pendingFriendInvitations?: Maybe<FriendInvitationCreateManyWithoutUserInput>,
  pendingPartyInvitations?: Maybe<PartyInvitationCreateManyWithoutUserInput>,
  chats?: Maybe<ChatCreateManyWithoutMembersInput>,
  lastOnline?: Maybe<Scalars['DateTime']>,
  deleted?: Maybe<Scalars['Boolean']>,
  provider?: Maybe<SocialMediaType>,
  avatar?: Maybe<Scalars['String']>,
  thirdPartyId?: Maybe<Scalars['String']>,
  resetToken?: Maybe<Scalars['String']>,
  resetTokenExpiry?: Maybe<Scalars['DateTime']>,
  isPrivate?: Maybe<Scalars['Boolean']>,
  cartItems?: Maybe<PartyCartItemCreateManyWithoutUserInput>,
  webPushNotificationToken?: Maybe<Scalars['String']>,
  appPushNotificationToken?: Maybe<Scalars['String']>,
  pushNotificationsScopes?: Maybe<UserCreatepushNotificationsScopesInput>,
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

export type UserCreateOneInput = {
  create?: Maybe<UserCreateInput>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserCreateOneWithoutCartItemsInput = {
  create?: Maybe<UserCreateWithoutCartItemsInput>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserCreateOneWithoutPendingFriendInvitationsInput = {
  create?: Maybe<UserCreateWithoutPendingFriendInvitationsInput>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserCreateOneWithoutPendingPartyInvitationsInput = {
  create?: Maybe<UserCreateWithoutPendingPartyInvitationsInput>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserCreatepushNotificationsScopesInput = {
  set?: Maybe<Array<PushNotificationScope>>,
};

export type UserCreateWithoutCartItemsInput = {
  id?: Maybe<Scalars['ID']>,
  email: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  password: Scalars['String'],
  parties?: Maybe<PartyCreateManyWithoutMembersInput>,
  friends?: Maybe<UserCreateManyWithoutFriendsInput>,
  pendingFriendInvitations?: Maybe<FriendInvitationCreateManyWithoutUserInput>,
  pendingPartyInvitations?: Maybe<PartyInvitationCreateManyWithoutUserInput>,
  chats?: Maybe<ChatCreateManyWithoutMembersInput>,
  lastOnline?: Maybe<Scalars['DateTime']>,
  deleted?: Maybe<Scalars['Boolean']>,
  provider?: Maybe<SocialMediaType>,
  avatar?: Maybe<Scalars['String']>,
  thirdPartyId?: Maybe<Scalars['String']>,
  resetToken?: Maybe<Scalars['String']>,
  resetTokenExpiry?: Maybe<Scalars['DateTime']>,
  isPrivate?: Maybe<Scalars['Boolean']>,
  webPushNotificationToken?: Maybe<Scalars['String']>,
  appPushNotificationToken?: Maybe<Scalars['String']>,
  pushNotificationsScopes?: Maybe<UserCreatepushNotificationsScopesInput>,
};

export type UserCreateWithoutChatsInput = {
  id?: Maybe<Scalars['ID']>,
  email: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  password: Scalars['String'],
  parties?: Maybe<PartyCreateManyWithoutMembersInput>,
  friends?: Maybe<UserCreateManyWithoutFriendsInput>,
  pendingFriendInvitations?: Maybe<FriendInvitationCreateManyWithoutUserInput>,
  pendingPartyInvitations?: Maybe<PartyInvitationCreateManyWithoutUserInput>,
  lastOnline?: Maybe<Scalars['DateTime']>,
  deleted?: Maybe<Scalars['Boolean']>,
  provider?: Maybe<SocialMediaType>,
  avatar?: Maybe<Scalars['String']>,
  thirdPartyId?: Maybe<Scalars['String']>,
  resetToken?: Maybe<Scalars['String']>,
  resetTokenExpiry?: Maybe<Scalars['DateTime']>,
  isPrivate?: Maybe<Scalars['Boolean']>,
  cartItems?: Maybe<PartyCartItemCreateManyWithoutUserInput>,
  webPushNotificationToken?: Maybe<Scalars['String']>,
  appPushNotificationToken?: Maybe<Scalars['String']>,
  pushNotificationsScopes?: Maybe<UserCreatepushNotificationsScopesInput>,
};

export type UserCreateWithoutFriendsInput = {
  id?: Maybe<Scalars['ID']>,
  email: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  password: Scalars['String'],
  parties?: Maybe<PartyCreateManyWithoutMembersInput>,
  pendingFriendInvitations?: Maybe<FriendInvitationCreateManyWithoutUserInput>,
  pendingPartyInvitations?: Maybe<PartyInvitationCreateManyWithoutUserInput>,
  chats?: Maybe<ChatCreateManyWithoutMembersInput>,
  lastOnline?: Maybe<Scalars['DateTime']>,
  deleted?: Maybe<Scalars['Boolean']>,
  provider?: Maybe<SocialMediaType>,
  avatar?: Maybe<Scalars['String']>,
  thirdPartyId?: Maybe<Scalars['String']>,
  resetToken?: Maybe<Scalars['String']>,
  resetTokenExpiry?: Maybe<Scalars['DateTime']>,
  isPrivate?: Maybe<Scalars['Boolean']>,
  cartItems?: Maybe<PartyCartItemCreateManyWithoutUserInput>,
  webPushNotificationToken?: Maybe<Scalars['String']>,
  appPushNotificationToken?: Maybe<Scalars['String']>,
  pushNotificationsScopes?: Maybe<UserCreatepushNotificationsScopesInput>,
};

export type UserCreateWithoutPartiesInput = {
  id?: Maybe<Scalars['ID']>,
  email: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  password: Scalars['String'],
  friends?: Maybe<UserCreateManyWithoutFriendsInput>,
  pendingFriendInvitations?: Maybe<FriendInvitationCreateManyWithoutUserInput>,
  pendingPartyInvitations?: Maybe<PartyInvitationCreateManyWithoutUserInput>,
  chats?: Maybe<ChatCreateManyWithoutMembersInput>,
  lastOnline?: Maybe<Scalars['DateTime']>,
  deleted?: Maybe<Scalars['Boolean']>,
  provider?: Maybe<SocialMediaType>,
  avatar?: Maybe<Scalars['String']>,
  thirdPartyId?: Maybe<Scalars['String']>,
  resetToken?: Maybe<Scalars['String']>,
  resetTokenExpiry?: Maybe<Scalars['DateTime']>,
  isPrivate?: Maybe<Scalars['Boolean']>,
  cartItems?: Maybe<PartyCartItemCreateManyWithoutUserInput>,
  webPushNotificationToken?: Maybe<Scalars['String']>,
  appPushNotificationToken?: Maybe<Scalars['String']>,
  pushNotificationsScopes?: Maybe<UserCreatepushNotificationsScopesInput>,
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
  isPrivate?: Maybe<Scalars['Boolean']>,
  cartItems?: Maybe<PartyCartItemCreateManyWithoutUserInput>,
  webPushNotificationToken?: Maybe<Scalars['String']>,
  appPushNotificationToken?: Maybe<Scalars['String']>,
  pushNotificationsScopes?: Maybe<UserCreatepushNotificationsScopesInput>,
};

export type UserCreateWithoutPendingPartyInvitationsInput = {
  id?: Maybe<Scalars['ID']>,
  email: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  password: Scalars['String'],
  parties?: Maybe<PartyCreateManyWithoutMembersInput>,
  friends?: Maybe<UserCreateManyWithoutFriendsInput>,
  pendingFriendInvitations?: Maybe<FriendInvitationCreateManyWithoutUserInput>,
  chats?: Maybe<ChatCreateManyWithoutMembersInput>,
  lastOnline?: Maybe<Scalars['DateTime']>,
  deleted?: Maybe<Scalars['Boolean']>,
  provider?: Maybe<SocialMediaType>,
  avatar?: Maybe<Scalars['String']>,
  thirdPartyId?: Maybe<Scalars['String']>,
  resetToken?: Maybe<Scalars['String']>,
  resetTokenExpiry?: Maybe<Scalars['DateTime']>,
  isPrivate?: Maybe<Scalars['Boolean']>,
  cartItems?: Maybe<PartyCartItemCreateManyWithoutUserInput>,
  webPushNotificationToken?: Maybe<Scalars['String']>,
  appPushNotificationToken?: Maybe<Scalars['String']>,
  pushNotificationsScopes?: Maybe<UserCreatepushNotificationsScopesInput>,
};

export type UserEdge = {
   __typename?: 'UserEdge',
  node: User,
  cursor: Scalars['String'],
};

export type UserFriends = {
   __typename?: 'UserFriends',
  current: Array<Scalars['String']>,
  pending: Array<UserPendingFriend>,
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
  ResetTokenExpiryDesc = 'resetTokenExpiry_DESC',
  IsPrivateAsc = 'isPrivate_ASC',
  IsPrivateDesc = 'isPrivate_DESC',
  WebPushNotificationTokenAsc = 'webPushNotificationToken_ASC',
  WebPushNotificationTokenDesc = 'webPushNotificationToken_DESC',
  AppPushNotificationTokenAsc = 'appPushNotificationToken_ASC',
  AppPushNotificationTokenDesc = 'appPushNotificationToken_DESC'
}

export type UserPendingFriend = {
   __typename?: 'UserPendingFriend',
  id: Scalars['String'],
  invitedUserId: Scalars['String'],
};

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
  isPrivate: Scalars['Boolean'],
  webPushNotificationToken?: Maybe<Scalars['String']>,
  appPushNotificationToken?: Maybe<Scalars['String']>,
  pushNotificationsScopes: Array<PushNotificationScope>,
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
  isPrivate?: Maybe<Scalars['Boolean']>,
  isPrivate_not?: Maybe<Scalars['Boolean']>,
  webPushNotificationToken?: Maybe<Scalars['String']>,
  webPushNotificationToken_not?: Maybe<Scalars['String']>,
  webPushNotificationToken_in?: Maybe<Array<Scalars['String']>>,
  webPushNotificationToken_not_in?: Maybe<Array<Scalars['String']>>,
  webPushNotificationToken_lt?: Maybe<Scalars['String']>,
  webPushNotificationToken_lte?: Maybe<Scalars['String']>,
  webPushNotificationToken_gt?: Maybe<Scalars['String']>,
  webPushNotificationToken_gte?: Maybe<Scalars['String']>,
  webPushNotificationToken_contains?: Maybe<Scalars['String']>,
  webPushNotificationToken_not_contains?: Maybe<Scalars['String']>,
  webPushNotificationToken_starts_with?: Maybe<Scalars['String']>,
  webPushNotificationToken_not_starts_with?: Maybe<Scalars['String']>,
  webPushNotificationToken_ends_with?: Maybe<Scalars['String']>,
  webPushNotificationToken_not_ends_with?: Maybe<Scalars['String']>,
  appPushNotificationToken?: Maybe<Scalars['String']>,
  appPushNotificationToken_not?: Maybe<Scalars['String']>,
  appPushNotificationToken_in?: Maybe<Array<Scalars['String']>>,
  appPushNotificationToken_not_in?: Maybe<Array<Scalars['String']>>,
  appPushNotificationToken_lt?: Maybe<Scalars['String']>,
  appPushNotificationToken_lte?: Maybe<Scalars['String']>,
  appPushNotificationToken_gt?: Maybe<Scalars['String']>,
  appPushNotificationToken_gte?: Maybe<Scalars['String']>,
  appPushNotificationToken_contains?: Maybe<Scalars['String']>,
  appPushNotificationToken_not_contains?: Maybe<Scalars['String']>,
  appPushNotificationToken_starts_with?: Maybe<Scalars['String']>,
  appPushNotificationToken_not_starts_with?: Maybe<Scalars['String']>,
  appPushNotificationToken_ends_with?: Maybe<Scalars['String']>,
  appPushNotificationToken_not_ends_with?: Maybe<Scalars['String']>,
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
  pendingFriendInvitations?: Maybe<FriendInvitationUpdateManyWithoutUserInput>,
  pendingPartyInvitations?: Maybe<PartyInvitationUpdateManyWithoutUserInput>,
  chats?: Maybe<ChatUpdateManyWithoutMembersInput>,
  lastOnline?: Maybe<Scalars['DateTime']>,
  deleted?: Maybe<Scalars['Boolean']>,
  provider?: Maybe<SocialMediaType>,
  avatar?: Maybe<Scalars['String']>,
  thirdPartyId?: Maybe<Scalars['String']>,
  resetToken?: Maybe<Scalars['String']>,
  resetTokenExpiry?: Maybe<Scalars['DateTime']>,
  isPrivate?: Maybe<Scalars['Boolean']>,
  cartItems?: Maybe<PartyCartItemUpdateManyWithoutUserInput>,
  webPushNotificationToken?: Maybe<Scalars['String']>,
  appPushNotificationToken?: Maybe<Scalars['String']>,
  pushNotificationsScopes?: Maybe<UserUpdatepushNotificationsScopesInput>,
};

export type UserUpdateInput = {
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  parties?: Maybe<PartyUpdateManyWithoutMembersInput>,
  friends?: Maybe<UserUpdateManyWithoutFriendsInput>,
  pendingFriendInvitations?: Maybe<FriendInvitationUpdateManyWithoutUserInput>,
  pendingPartyInvitations?: Maybe<PartyInvitationUpdateManyWithoutUserInput>,
  chats?: Maybe<ChatUpdateManyWithoutMembersInput>,
  lastOnline?: Maybe<Scalars['DateTime']>,
  deleted?: Maybe<Scalars['Boolean']>,
  provider?: Maybe<SocialMediaType>,
  avatar?: Maybe<Scalars['String']>,
  thirdPartyId?: Maybe<Scalars['String']>,
  resetToken?: Maybe<Scalars['String']>,
  resetTokenExpiry?: Maybe<Scalars['DateTime']>,
  isPrivate?: Maybe<Scalars['Boolean']>,
  cartItems?: Maybe<PartyCartItemUpdateManyWithoutUserInput>,
  webPushNotificationToken?: Maybe<Scalars['String']>,
  appPushNotificationToken?: Maybe<Scalars['String']>,
  pushNotificationsScopes?: Maybe<UserUpdatepushNotificationsScopesInput>,
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
  isPrivate?: Maybe<Scalars['Boolean']>,
  webPushNotificationToken?: Maybe<Scalars['String']>,
  appPushNotificationToken?: Maybe<Scalars['String']>,
  pushNotificationsScopes?: Maybe<UserUpdatepushNotificationsScopesInput>,
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
  isPrivate?: Maybe<Scalars['Boolean']>,
  webPushNotificationToken?: Maybe<Scalars['String']>,
  appPushNotificationToken?: Maybe<Scalars['String']>,
  pushNotificationsScopes?: Maybe<UserUpdatepushNotificationsScopesInput>,
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

export type UserUpdateManyWithWhereNestedInput = {
  where: UserScalarWhereInput,
  data: UserUpdateManyDataInput,
};

export type UserUpdateOneRequiredInput = {
  create?: Maybe<UserCreateInput>,
  update?: Maybe<UserUpdateDataInput>,
  upsert?: Maybe<UserUpsertNestedInput>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserUpdateOneRequiredWithoutCartItemsInput = {
  create?: Maybe<UserCreateWithoutCartItemsInput>,
  update?: Maybe<UserUpdateWithoutCartItemsDataInput>,
  upsert?: Maybe<UserUpsertWithoutCartItemsInput>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserUpdateOneRequiredWithoutPendingFriendInvitationsInput = {
  create?: Maybe<UserCreateWithoutPendingFriendInvitationsInput>,
  update?: Maybe<UserUpdateWithoutPendingFriendInvitationsDataInput>,
  upsert?: Maybe<UserUpsertWithoutPendingFriendInvitationsInput>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserUpdateOneRequiredWithoutPendingPartyInvitationsInput = {
  create?: Maybe<UserCreateWithoutPendingPartyInvitationsInput>,
  update?: Maybe<UserUpdateWithoutPendingPartyInvitationsDataInput>,
  upsert?: Maybe<UserUpsertWithoutPendingPartyInvitationsInput>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserUpdatepushNotificationsScopesInput = {
  set?: Maybe<Array<PushNotificationScope>>,
};

export type UserUpdateWithoutCartItemsDataInput = {
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  parties?: Maybe<PartyUpdateManyWithoutMembersInput>,
  friends?: Maybe<UserUpdateManyWithoutFriendsInput>,
  pendingFriendInvitations?: Maybe<FriendInvitationUpdateManyWithoutUserInput>,
  pendingPartyInvitations?: Maybe<PartyInvitationUpdateManyWithoutUserInput>,
  chats?: Maybe<ChatUpdateManyWithoutMembersInput>,
  lastOnline?: Maybe<Scalars['DateTime']>,
  deleted?: Maybe<Scalars['Boolean']>,
  provider?: Maybe<SocialMediaType>,
  avatar?: Maybe<Scalars['String']>,
  thirdPartyId?: Maybe<Scalars['String']>,
  resetToken?: Maybe<Scalars['String']>,
  resetTokenExpiry?: Maybe<Scalars['DateTime']>,
  isPrivate?: Maybe<Scalars['Boolean']>,
  webPushNotificationToken?: Maybe<Scalars['String']>,
  appPushNotificationToken?: Maybe<Scalars['String']>,
  pushNotificationsScopes?: Maybe<UserUpdatepushNotificationsScopesInput>,
};

export type UserUpdateWithoutChatsDataInput = {
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  parties?: Maybe<PartyUpdateManyWithoutMembersInput>,
  friends?: Maybe<UserUpdateManyWithoutFriendsInput>,
  pendingFriendInvitations?: Maybe<FriendInvitationUpdateManyWithoutUserInput>,
  pendingPartyInvitations?: Maybe<PartyInvitationUpdateManyWithoutUserInput>,
  lastOnline?: Maybe<Scalars['DateTime']>,
  deleted?: Maybe<Scalars['Boolean']>,
  provider?: Maybe<SocialMediaType>,
  avatar?: Maybe<Scalars['String']>,
  thirdPartyId?: Maybe<Scalars['String']>,
  resetToken?: Maybe<Scalars['String']>,
  resetTokenExpiry?: Maybe<Scalars['DateTime']>,
  isPrivate?: Maybe<Scalars['Boolean']>,
  cartItems?: Maybe<PartyCartItemUpdateManyWithoutUserInput>,
  webPushNotificationToken?: Maybe<Scalars['String']>,
  appPushNotificationToken?: Maybe<Scalars['String']>,
  pushNotificationsScopes?: Maybe<UserUpdatepushNotificationsScopesInput>,
};

export type UserUpdateWithoutFriendsDataInput = {
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  parties?: Maybe<PartyUpdateManyWithoutMembersInput>,
  pendingFriendInvitations?: Maybe<FriendInvitationUpdateManyWithoutUserInput>,
  pendingPartyInvitations?: Maybe<PartyInvitationUpdateManyWithoutUserInput>,
  chats?: Maybe<ChatUpdateManyWithoutMembersInput>,
  lastOnline?: Maybe<Scalars['DateTime']>,
  deleted?: Maybe<Scalars['Boolean']>,
  provider?: Maybe<SocialMediaType>,
  avatar?: Maybe<Scalars['String']>,
  thirdPartyId?: Maybe<Scalars['String']>,
  resetToken?: Maybe<Scalars['String']>,
  resetTokenExpiry?: Maybe<Scalars['DateTime']>,
  isPrivate?: Maybe<Scalars['Boolean']>,
  cartItems?: Maybe<PartyCartItemUpdateManyWithoutUserInput>,
  webPushNotificationToken?: Maybe<Scalars['String']>,
  appPushNotificationToken?: Maybe<Scalars['String']>,
  pushNotificationsScopes?: Maybe<UserUpdatepushNotificationsScopesInput>,
};

export type UserUpdateWithoutPartiesDataInput = {
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  friends?: Maybe<UserUpdateManyWithoutFriendsInput>,
  pendingFriendInvitations?: Maybe<FriendInvitationUpdateManyWithoutUserInput>,
  pendingPartyInvitations?: Maybe<PartyInvitationUpdateManyWithoutUserInput>,
  chats?: Maybe<ChatUpdateManyWithoutMembersInput>,
  lastOnline?: Maybe<Scalars['DateTime']>,
  deleted?: Maybe<Scalars['Boolean']>,
  provider?: Maybe<SocialMediaType>,
  avatar?: Maybe<Scalars['String']>,
  thirdPartyId?: Maybe<Scalars['String']>,
  resetToken?: Maybe<Scalars['String']>,
  resetTokenExpiry?: Maybe<Scalars['DateTime']>,
  isPrivate?: Maybe<Scalars['Boolean']>,
  cartItems?: Maybe<PartyCartItemUpdateManyWithoutUserInput>,
  webPushNotificationToken?: Maybe<Scalars['String']>,
  appPushNotificationToken?: Maybe<Scalars['String']>,
  pushNotificationsScopes?: Maybe<UserUpdatepushNotificationsScopesInput>,
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
  isPrivate?: Maybe<Scalars['Boolean']>,
  cartItems?: Maybe<PartyCartItemUpdateManyWithoutUserInput>,
  webPushNotificationToken?: Maybe<Scalars['String']>,
  appPushNotificationToken?: Maybe<Scalars['String']>,
  pushNotificationsScopes?: Maybe<UserUpdatepushNotificationsScopesInput>,
};

export type UserUpdateWithoutPendingPartyInvitationsDataInput = {
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  parties?: Maybe<PartyUpdateManyWithoutMembersInput>,
  friends?: Maybe<UserUpdateManyWithoutFriendsInput>,
  pendingFriendInvitations?: Maybe<FriendInvitationUpdateManyWithoutUserInput>,
  chats?: Maybe<ChatUpdateManyWithoutMembersInput>,
  lastOnline?: Maybe<Scalars['DateTime']>,
  deleted?: Maybe<Scalars['Boolean']>,
  provider?: Maybe<SocialMediaType>,
  avatar?: Maybe<Scalars['String']>,
  thirdPartyId?: Maybe<Scalars['String']>,
  resetToken?: Maybe<Scalars['String']>,
  resetTokenExpiry?: Maybe<Scalars['DateTime']>,
  isPrivate?: Maybe<Scalars['Boolean']>,
  cartItems?: Maybe<PartyCartItemUpdateManyWithoutUserInput>,
  webPushNotificationToken?: Maybe<Scalars['String']>,
  appPushNotificationToken?: Maybe<Scalars['String']>,
  pushNotificationsScopes?: Maybe<UserUpdatepushNotificationsScopesInput>,
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

export type UserUpsertNestedInput = {
  update: UserUpdateDataInput,
  create: UserCreateInput,
};

export type UserUpsertWithoutCartItemsInput = {
  update: UserUpdateWithoutCartItemsDataInput,
  create: UserCreateWithoutCartItemsInput,
};

export type UserUpsertWithoutPendingFriendInvitationsInput = {
  update: UserUpdateWithoutPendingFriendInvitationsDataInput,
  create: UserCreateWithoutPendingFriendInvitationsInput,
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
  pendingFriendInvitations_every?: Maybe<FriendInvitationWhereInput>,
  pendingFriendInvitations_some?: Maybe<FriendInvitationWhereInput>,
  pendingFriendInvitations_none?: Maybe<FriendInvitationWhereInput>,
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
  isPrivate?: Maybe<Scalars['Boolean']>,
  isPrivate_not?: Maybe<Scalars['Boolean']>,
  cartItems_every?: Maybe<PartyCartItemWhereInput>,
  cartItems_some?: Maybe<PartyCartItemWhereInput>,
  cartItems_none?: Maybe<PartyCartItemWhereInput>,
  webPushNotificationToken?: Maybe<Scalars['String']>,
  webPushNotificationToken_not?: Maybe<Scalars['String']>,
  webPushNotificationToken_in?: Maybe<Array<Scalars['String']>>,
  webPushNotificationToken_not_in?: Maybe<Array<Scalars['String']>>,
  webPushNotificationToken_lt?: Maybe<Scalars['String']>,
  webPushNotificationToken_lte?: Maybe<Scalars['String']>,
  webPushNotificationToken_gt?: Maybe<Scalars['String']>,
  webPushNotificationToken_gte?: Maybe<Scalars['String']>,
  webPushNotificationToken_contains?: Maybe<Scalars['String']>,
  webPushNotificationToken_not_contains?: Maybe<Scalars['String']>,
  webPushNotificationToken_starts_with?: Maybe<Scalars['String']>,
  webPushNotificationToken_not_starts_with?: Maybe<Scalars['String']>,
  webPushNotificationToken_ends_with?: Maybe<Scalars['String']>,
  webPushNotificationToken_not_ends_with?: Maybe<Scalars['String']>,
  appPushNotificationToken?: Maybe<Scalars['String']>,
  appPushNotificationToken_not?: Maybe<Scalars['String']>,
  appPushNotificationToken_in?: Maybe<Array<Scalars['String']>>,
  appPushNotificationToken_not_in?: Maybe<Array<Scalars['String']>>,
  appPushNotificationToken_lt?: Maybe<Scalars['String']>,
  appPushNotificationToken_lte?: Maybe<Scalars['String']>,
  appPushNotificationToken_gt?: Maybe<Scalars['String']>,
  appPushNotificationToken_gte?: Maybe<Scalars['String']>,
  appPushNotificationToken_contains?: Maybe<Scalars['String']>,
  appPushNotificationToken_not_contains?: Maybe<Scalars['String']>,
  appPushNotificationToken_starts_with?: Maybe<Scalars['String']>,
  appPushNotificationToken_not_starts_with?: Maybe<Scalars['String']>,
  appPushNotificationToken_ends_with?: Maybe<Scalars['String']>,
  appPushNotificationToken_not_ends_with?: Maybe<Scalars['String']>,
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
    & Pick<Location, 'placeName' | 'longitude' | 'latitude'>
  ), author: (
    { __typename?: 'User' }
    & Pick<User, 'firstName' | 'lastName' | 'id'>
  ), members: Maybe<Array<(
    { __typename?: 'User' }
    & Pick<User, 'avatar' | 'firstName' | 'lastName' | 'id'>
  )>>, cart: (
    { __typename?: 'PartyCart' }
    & Pick<PartyCart, 'id'>
  ) }
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

export type Full_Saved_Track_FragmentFragment = (
  { __typename?: 'PartySavedTrack' }
  & Pick<PartySavedTrack, 'id' | 'name' | 'length' | 'uri' | 'popularity' | 'durationMs' | 'previewUrl' | 'stringArtists' | 'explicit'>
  & { album: (
    { __typename?: 'Album' }
    & Pick<Album, 'id' | 'name' | 'uri' | 'imageUrl' | 'releaseDate'>
  ) }
);

export type Party_Playlists_Connection_Node_FragmentFragment = (
  { __typename?: 'Playlist' }
  & Pick<Playlist, 'id' | 'spotifyExternalUrl' | 'name' | 'spotifyId' | 'imageUrl' | 'importable'>
  & { user: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'firstName' | 'lastName' | 'avatar'>
  ), tracks: Maybe<Array<(
    { __typename?: 'PartySavedTrack' }
    & Pick<PartySavedTrack, 'id' | 'uri'>
  )>> }
);

export type Party_Cart_Items_Connection_Node_FragmentFragment = (
  { __typename?: 'PartyCartItem' }
  & Pick<PartyCartItem, 'id' | 'name' | 'price' | 'quantity' | 'status'>
  & { user: (
    { __typename?: 'User' }
    & Pick<User, 'firstName' | 'lastName' | 'id'>
  ) }
);

export type Party_Authentication_Minimal_Party_FragmentFragment = (
  { __typename?: 'Party' }
  & Pick<Party, 'id'>
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

export type AddTrackToPartyMutationVariables = {
  data: PartySavedTrackCreateInput
};


export type AddTrackToPartyMutation = (
  { __typename?: 'Mutation' }
  & { createPartySavedTrack: (
    { __typename?: 'PartySavedTrack' }
    & Pick<PartySavedTrack, 'spotifyId'>
  )
    & Full_Saved_Track_FragmentFragment
   }
);

export type User_DeleteFriendInvitationMutationVariables = {
  where: FriendInvitationWhereUniqueInput
};


export type User_DeleteFriendInvitationMutation = (
  { __typename?: 'Mutation' }
  & { deleteFriendInvitation: Maybe<(
    { __typename?: 'FriendInvitation' }
    & Pick<FriendInvitation, 'id'>
  )> }
);

export type MeQueryQueryVariables = {};


export type MeQueryQuery = (
  { __typename?: 'Query' }
  & { me: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'firstName' | 'lastName' | 'avatar' | 'isPrivate' | 'webPushNotificationToken' | 'pushNotificationsScopes'>
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

export type Party_SavedTracksQueryVariables = {
  where?: Maybe<PartySavedTrackWhereInput>,
  orderBy?: Maybe<PartySavedTrackOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type Party_SavedTracksQuery = (
  { __typename?: 'Query' }
  & { partySavedTracks: Array<Maybe<(
    { __typename?: 'PartySavedTrack' }
    & Pick<PartySavedTrack, 'spotifyId'>
  )>> }
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

export type User_FriendInvitationsSubscriptionSubscriptionVariables = {
  where?: Maybe<FriendInvitationSubscriptionWhereInput>
};


export type User_FriendInvitationsSubscriptionSubscription = (
  { __typename?: 'Subscription' }
  & { friendInvitation: Maybe<(
    { __typename?: 'FriendInvitationSubscriptionPayload' }
    & Pick<FriendInvitationSubscriptionPayload, 'mutation'>
    & { previousValues: Maybe<(
      { __typename?: 'FriendInvitationPreviousValues' }
      & Pick<FriendInvitationPreviousValues, 'id' | 'invitedUserId'>
    )>, node: Maybe<(
      { __typename?: 'FriendInvitation' }
      & Pick<FriendInvitation, 'createdAt' | 'id' | 'invitedUserId'>
      & { invitedBy: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'firstName' | 'lastName' | 'avatar'>
      ), user: (
        { __typename?: 'User' }
        & Pick<User, 'id'>
      ) }
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

export type User_FriendsQueryVariables = {
  userId: Scalars['ID']
};


export type User_FriendsQuery = (
  { __typename?: 'Query' }
  & { userFriends: (
    { __typename?: 'UserFriends' }
    & Pick<UserFriends, 'current'>
    & { pending: Array<(
      { __typename?: 'UserPendingFriend' }
      & Pick<UserPendingFriend, 'id' | 'invitedUserId'>
    )> }
  ) }
);

export type Party_AuthenticateQueryVariables = {
  partyId: Scalars['ID']
};


export type Party_AuthenticateQuery = (
  { __typename?: 'Query' }
  & { authenticateParty: (
    { __typename?: 'PartyAuthenticationResult' }
    & Pick<PartyAuthenticationResult, 'canJoin' | 'isMember'>
    & { party: Maybe<{ __typename?: 'Party' }
      & Party_FragmentFragment
    > }
  ) }
);

export type Is_Unread_ThreadFragment = (
  { __typename?: 'Chat' }
  & Pick<Chat, 'hasUnreadMessages'>
);

export type Party_JoinPublicPartyMutationVariables = {
  data: UserUpdateInput,
  where: UserWhereUniqueInput
};


export type Party_JoinPublicPartyMutation = (
  { __typename?: 'Mutation' }
  & { updateUser: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
  )> }
);

export type Party_CombinePlaylistsMutationVariables = {
  partyPlannerData: CombinePlaylistPartyPlannerData,
  spotifyData: CombinePlaylistCreatedSpotifyPlaylistInput
};


export type Party_CombinePlaylistsMutation = (
  { __typename?: 'Mutation' }
  & { combinePlaylists: (
    { __typename?: 'Playlist' }
    & Pick<Playlist, 'id'>
  ) }
);

export type Party_CreatePlaylistMutationVariables = {
  data: PlaylistCreateInput
};


export type Party_CreatePlaylistMutation = (
  { __typename?: 'Mutation' }
  & { createPlaylist: { __typename?: 'Playlist' }
    & Party_Playlists_Connection_Node_FragmentFragment
   }
);

export type Party_ImportPlaylistsToPartyMutationVariables = {
  playlists: Scalars['String'],
  partyId: Scalars['ID']
};


export type Party_ImportPlaylistsToPartyMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'importPlaylistsToParty'>
);

export type Party_EditPlaylistMutationVariables = {
  data: PlaylistUpdateInput,
  where: PlaylistWhereUniqueInput
};


export type Party_EditPlaylistMutation = (
  { __typename?: 'Mutation' }
  & { updatePlaylist: Maybe<(
    { __typename?: 'Playlist' }
    & Pick<Playlist, 'id'>
  )> }
);

export type Party_DeletePlaylistMutationVariables = {
  where: PlaylistWhereUniqueInput
};


export type Party_DeletePlaylistMutation = (
  { __typename?: 'Mutation' }
  & { deletePlaylist: Maybe<(
    { __typename?: 'Playlist' }
    & Pick<Playlist, 'id'>
  )> }
);

export type EditPlaylistCacheFragmentFragment = (
  { __typename?: 'Playlist' }
  & Pick<Playlist, 'name' | 'importable'>
);

export type Party_PlaylistsConnectionQueryVariables = {
  where?: Maybe<PlaylistWhereInput>,
  orderBy?: Maybe<PlaylistOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type Party_PlaylistsConnectionQuery = (
  { __typename?: 'Query' }
  & { playlistsConnection: (
    { __typename?: 'PlaylistConnection' }
    & { pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'hasNextPage' | 'endCursor'>
    ), edges: Array<Maybe<(
      { __typename?: 'PlaylistEdge' }
      & { node: (
        { __typename?: 'Playlist' }
        & Pick<Playlist, 'createdAt'>
      )
        & Party_Playlists_Connection_Node_FragmentFragment
       }
    )>> }
  ) }
);

export type Party_SavedTracksConnectionQueryVariables = {
  where?: Maybe<PartySavedTrackWhereInput>,
  orderBy?: Maybe<PartySavedTrackOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type Party_SavedTracksConnectionQuery = (
  { __typename?: 'Query' }
  & { partySavedTracksConnection: (
    { __typename?: 'PartySavedTrackConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'PartySavedTrackEdge' }
      & { node: { __typename?: 'PartySavedTrack' }
        & Full_Saved_Track_FragmentFragment
       }
    )>>, pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'hasNextPage' | 'endCursor'>
    ) }
  ) }
);

export type Party_CreatePartyCartItemMutationVariables = {
  data: PartyCartItemCreateInput
};


export type Party_CreatePartyCartItemMutation = (
  { __typename?: 'Mutation' }
  & { createPartyCartItem: { __typename?: 'PartyCartItem' }
    & Party_Cart_Items_Connection_Node_FragmentFragment
   }
);

export type Party_CartItemsConnectionQueryVariables = {
  where?: Maybe<PartyCartItemWhereInput>,
  orderBy?: Maybe<PartyCartItemOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type Party_CartItemsConnectionQuery = (
  { __typename?: 'Query' }
  & { partyCartItemsConnection: (
    { __typename?: 'PartyCartItemConnection' }
    & { pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'hasNextPage' | 'endCursor' | 'startCursor'>
    ), edges: Array<Maybe<(
      { __typename?: 'PartyCartItemEdge' }
      & { node: { __typename?: 'PartyCartItem' }
        & Party_Cart_Items_Connection_Node_FragmentFragment
       }
    )>> }
  ), pagination: (
    { __typename?: 'PartyCartItemConnection' }
    & { aggregate: (
      { __typename?: 'AggregatePartyCartItem' }
      & Pick<AggregatePartyCartItem, 'count'>
    ) }
  ) }
);

export type Party_UpdatePartyCartItemMutationVariables = {
  data: PartyCartItemUpdateInput,
  where: PartyCartItemWhereUniqueInput
};


export type Party_UpdatePartyCartItemMutation = (
  { __typename?: 'Mutation' }
  & { updatePartyCartItem: Maybe<(
    { __typename?: 'PartyCartItem' }
    & Pick<PartyCartItem, 'id' | 'quantity' | 'price'>
  )> }
);

export type Party_DeletePartyCartItemMutationVariables = {
  where: PartyCartItemWhereUniqueInput
};


export type Party_DeletePartyCartItemMutation = (
  { __typename?: 'Mutation' }
  & { deletePartyCartItem: Maybe<(
    { __typename?: 'PartyCartItem' }
    & Pick<PartyCartItem, 'id'>
  )> }
);

export type Party_CartCostQueryVariables = {
  id: Scalars['ID']
};


export type Party_CartCostQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'partyCartCost'>
);

export type Party_DeletePartyMutationVariables = {
  where: PartyWhereUniqueInput
};


export type Party_DeletePartyMutation = (
  { __typename?: 'Mutation' }
  & { deleteParty: Maybe<(
    { __typename?: 'Party' }
    & Pick<Party, 'id'>
  )> }
);

export type Party_UpdatePartyMutationVariables = {
  data: PartyUpdateInput,
  where: PartyWhereUniqueInput
};


export type Party_UpdatePartyMutation = (
  { __typename?: 'Mutation' }
  & { updateParty: Maybe<(
    { __typename?: 'Party' }
    & { location: (
      { __typename?: 'Location' }
      & Pick<Location, 'placeName' | 'latitude' | 'longitude'>
    ) }
  )
    & Party_FragmentFragment
  > }
);

export type Lol_FragmentFragment = (
  { __typename?: 'Party' }
  & Pick<Party, 'id' | 'title' | 'description' | 'colorTint' | 'start' | 'end' | 'isPublic' | 'inviteSecret'>
  & { location: (
    { __typename?: 'Location' }
    & Pick<Location, 'placeName' | 'latitude' | 'longitude'>
  ), author: (
    { __typename?: 'User' }
    & Pick<User, 'firstName' | 'lastName' | 'id'>
  ), members: Maybe<Array<(
    { __typename?: 'User' }
    & Pick<User, 'avatar' | 'firstName' | 'lastName' | 'id'>
  )>>, cart: (
    { __typename?: 'PartyCart' }
    & Pick<PartyCart, 'id'>
  ) }
);

export type Party_LeavePartyMutationVariables = {
  data: UserUpdateInput,
  where: UserWhereUniqueInput
};


export type Party_LeavePartyMutation = (
  { __typename?: 'Mutation' }
  & { updateUser: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
  )> }
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

export type User_FriendInvitationsConnectionQueryVariables = {
  where?: Maybe<FriendInvitationWhereInput>,
  orderBy?: Maybe<FriendInvitationOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type User_FriendInvitationsConnectionQuery = (
  { __typename?: 'Query' }
  & { friendInvitationsConnection: (
    { __typename?: 'FriendInvitationConnection' }
    & { pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'hasNextPage' | 'endCursor'>
    ), edges: Array<Maybe<(
      { __typename?: 'FriendInvitationEdge' }
      & { node: (
        { __typename?: 'FriendInvitation' }
        & Pick<FriendInvitation, 'createdAt' | 'id' | 'invitedUserId'>
        & { invitedBy: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'firstName' | 'lastName' | 'avatar'>
        ), user: (
          { __typename?: 'User' }
          & Pick<User, 'id'>
        ) }
      ) }
    )>> }
  ), counts: (
    { __typename?: 'FriendInvitationConnection' }
    & { aggregate: (
      { __typename?: 'AggregateFriendInvitation' }
      & Pick<AggregateFriendInvitation, 'count'>
    ) }
  ) }
);

export type User_AcceptFriendInvitationMutationVariables = {
  invitationId: Scalars['ID'],
  invitingUserId: Scalars['ID']
};


export type User_AcceptFriendInvitationMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'acceptFriendInvitation'>
);

export type User_PeopleConnectionQueryVariables = {
  where?: Maybe<UserWhereInput>,
  orderBy?: Maybe<UserOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type User_PeopleConnectionQuery = (
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
        & Pick<User, 'id' | 'firstName' | 'lastName' | 'avatar' | 'createdAt'>
      ) }
    )>> }
  ) }
);

export type User_UnfriendUserMutationVariables = {
  personToUnfriendId: Scalars['ID']
};


export type User_UnfriendUserMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'unfriendPerson'>
);

export type User_CreateFriendInvitationMutationVariables = {
  data: FriendInvitationCreateInput
};


export type User_CreateFriendInvitationMutation = (
  { __typename?: 'Mutation' }
  & { createFriendInvitation: (
    { __typename?: 'FriendInvitation' }
    & Pick<FriendInvitation, 'id'>
  ) }
);

export type UserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'status'>
);

export type User_UserInfoMutationVariables = {
  data: UserUpdateInput,
  where: UserWhereUniqueInput
};


export type User_UserInfoMutation = (
  { __typename?: 'Mutation' }
  & { updateUser: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
  )> }
);

export type Information_FragmentFragment = (
  { __typename?: 'User' }
  & Pick<User, 'firstName' | 'lastName'>
);

export type User_UpdatePrivacyMutationVariables = {
  data: UserUpdateInput,
  where: UserWhereUniqueInput
};


export type User_UpdatePrivacyMutation = (
  { __typename?: 'Mutation' }
  & { updateUser: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
  )> }
);

export type User_Privacy_FragmentFragment = (
  { __typename?: 'User' }
  & Pick<User, 'isPrivate'>
);

export type User_UpdatePushNotificationsSettingsMutationVariables = {
  data: UserUpdateInput,
  where: UserWhereUniqueInput
};


export type User_UpdatePushNotificationsSettingsMutation = (
  { __typename?: 'Mutation' }
  & { updateUser: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
  )> }
);

export type Push_Notifications_Settings_FragmentFragment = (
  { __typename?: 'User' }
  & Pick<User, 'webPushNotificationToken' | 'pushNotificationsScopes'>
);
export type Party_FragmentLocation = Party_FragmentFragment['location'];
export type Party_FragmentAuthor = Party_FragmentFragment['author'];
export type Party_FragmentMembers = Party_FragmentFragment['members'][0];
export type Party_FragmentCart = Party_FragmentFragment['cart'];
export type Message_FragmentAuthor = Message_FragmentFragment['author'];
export type Party_Invitation_FragmentInvitedBy = Party_Invitation_FragmentFragment['invitedBy'];
export type Party_Invitation_FragmentUser = Party_Invitation_FragmentFragment['user'];
export type Party_Invitation_FragmentParty = Party_Invitation_FragmentFragment['party'];
export type Last_Chat_Message_FragmentMessages = Last_Chat_Message_FragmentFragment['messages'][0];
export type Last_Chat_Message_FragmentAuthor = Last_Chat_Message_FragmentFragment['messages'][0]['author'];
export type Full_Saved_Track_FragmentAlbum = Full_Saved_Track_FragmentFragment['album'];
export type Party_Playlists_Connection_Node_FragmentUser = Party_Playlists_Connection_Node_FragmentFragment['user'];
export type Party_Playlists_Connection_Node_FragmentTracks = Party_Playlists_Connection_Node_FragmentFragment['tracks'][0];
export type Party_Cart_Items_Connection_Node_FragmentUser = Party_Cart_Items_Connection_Node_FragmentFragment['user'];
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
export type AddTrackToPartyVariables = AddTrackToPartyMutationVariables;
export type AddTrackToPartyCreatePartySavedTrack = Full_Saved_Track_FragmentFragment;
export const useAddTrackToParty = useAddTrackToPartyMutation;
export type User_DeleteFriendInvitationVariables = User_DeleteFriendInvitationMutationVariables;
export type User_DeleteFriendInvitationDeleteFriendInvitation = User_DeleteFriendInvitationMutation['deleteFriendInvitation'];
export const useUser_DeleteFriendInvitation = useUser_DeleteFriendInvitationMutation;
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
export type Party_SavedTracksVariables = Party_SavedTracksQueryVariables;
export type Party_SavedTracksPartySavedTracks = Party_SavedTracksQuery['partySavedTracks'][0];
export const useParty_SavedTracks = useParty_SavedTracksQuery;
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
export type User_FriendInvitationsSubscriptionVariables = User_FriendInvitationsSubscriptionSubscriptionVariables;
export type User_FriendInvitationsSubscriptionFriendInvitation = User_FriendInvitationsSubscriptionSubscription['friendInvitation'];
export type User_FriendInvitationsSubscriptionPreviousValues = User_FriendInvitationsSubscriptionSubscription['friendInvitation']['previousValues'];
export type User_FriendInvitationsSubscriptionNode = User_FriendInvitationsSubscriptionSubscription['friendInvitation']['node'];
export type User_FriendInvitationsSubscriptionInvitedBy = User_FriendInvitationsSubscriptionSubscription['friendInvitation']['node']['invitedBy'];
export type User_FriendInvitationsSubscriptionUser = User_FriendInvitationsSubscriptionSubscription['friendInvitation']['node']['user'];
export const useUser_FriendInvitationsSubscription = useUser_FriendInvitationsSubscriptionSubscription;
export type JoinPartyFindVariables = JoinPartyFindQueryVariables;
export type JoinPartyFindParties = JoinPartyFindQuery['parties'][0];
export type JoinPartyFindMembers = JoinPartyFindQuery['parties'][0]['members'][0];
export type JoinPartyFindMembersCount = JoinPartyFindQuery['membersCount'];
export type JoinPartyFindAggregate = JoinPartyFindQuery['membersCount']['aggregate'];
export const useJoinPartyFind = useJoinPartyFindQuery;
export type User_FriendsVariables = User_FriendsQueryVariables;
export type User_FriendsUserFriends = User_FriendsQuery['userFriends'];
export type User_FriendsPending = User_FriendsQuery['userFriends']['pending'][0];
export const useUser_Friends = useUser_FriendsQuery;
export type Party_AuthenticateVariables = Party_AuthenticateQueryVariables;
export type Party_AuthenticateAuthenticateParty = Party_AuthenticateQuery['authenticateParty'];
export type Party_AuthenticateParty = Party_FragmentFragment;
export const useParty_Authenticate = useParty_AuthenticateQuery;
export type Party_JoinPublicPartyVariables = Party_JoinPublicPartyMutationVariables;
export type Party_JoinPublicPartyUpdateUser = Party_JoinPublicPartyMutation['updateUser'];
export const useParty_JoinPublicParty = useParty_JoinPublicPartyMutation;
export type Party_CombinePlaylistsVariables = Party_CombinePlaylistsMutationVariables;
export type Party_CombinePlaylistsCombinePlaylists = Party_CombinePlaylistsMutation['combinePlaylists'];
export const useParty_CombinePlaylists = useParty_CombinePlaylistsMutation;
export type Party_CreatePlaylistVariables = Party_CreatePlaylistMutationVariables;
export type Party_CreatePlaylistCreatePlaylist = Party_Playlists_Connection_Node_FragmentFragment;
export const useParty_CreatePlaylist = useParty_CreatePlaylistMutation;
export type Party_ImportPlaylistsToPartyVariables = Party_ImportPlaylistsToPartyMutationVariables;
export const useParty_ImportPlaylistsToParty = useParty_ImportPlaylistsToPartyMutation;
export type Party_EditPlaylistVariables = Party_EditPlaylistMutationVariables;
export type Party_EditPlaylistUpdatePlaylist = Party_EditPlaylistMutation['updatePlaylist'];
export const useParty_EditPlaylist = useParty_EditPlaylistMutation;
export type Party_DeletePlaylistVariables = Party_DeletePlaylistMutationVariables;
export type Party_DeletePlaylistDeletePlaylist = Party_DeletePlaylistMutation['deletePlaylist'];
export const useParty_DeletePlaylist = useParty_DeletePlaylistMutation;
export type Party_PlaylistsConnectionVariables = Party_PlaylistsConnectionQueryVariables;
export type Party_PlaylistsConnectionPlaylistsConnection = Party_PlaylistsConnectionQuery['playlistsConnection'];
export type Party_PlaylistsConnectionPageInfo = Party_PlaylistsConnectionQuery['playlistsConnection']['pageInfo'];
export type Party_PlaylistsConnectionEdges = Party_PlaylistsConnectionQuery['playlistsConnection']['edges'][0];
export type Party_PlaylistsConnectionNode = Party_Playlists_Connection_Node_FragmentFragment;
export const useParty_PlaylistsConnection = useParty_PlaylistsConnectionQuery;
export type Party_SavedTracksConnectionVariables = Party_SavedTracksConnectionQueryVariables;
export type Party_SavedTracksConnectionPartySavedTracksConnection = Party_SavedTracksConnectionQuery['partySavedTracksConnection'];
export type Party_SavedTracksConnectionEdges = Party_SavedTracksConnectionQuery['partySavedTracksConnection']['edges'][0];
export type Party_SavedTracksConnectionNode = Full_Saved_Track_FragmentFragment;
export type Party_SavedTracksConnectionPageInfo = Party_SavedTracksConnectionQuery['partySavedTracksConnection']['pageInfo'];
export const useParty_SavedTracksConnection = useParty_SavedTracksConnectionQuery;
export type Party_CreatePartyCartItemVariables = Party_CreatePartyCartItemMutationVariables;
export type Party_CreatePartyCartItemCreatePartyCartItem = Party_Cart_Items_Connection_Node_FragmentFragment;
export const useParty_CreatePartyCartItem = useParty_CreatePartyCartItemMutation;
export type Party_CartItemsConnectionVariables = Party_CartItemsConnectionQueryVariables;
export type Party_CartItemsConnectionPartyCartItemsConnection = Party_CartItemsConnectionQuery['partyCartItemsConnection'];
export type Party_CartItemsConnectionPageInfo = Party_CartItemsConnectionQuery['partyCartItemsConnection']['pageInfo'];
export type Party_CartItemsConnectionEdges = Party_CartItemsConnectionQuery['partyCartItemsConnection']['edges'][0];
export type Party_CartItemsConnectionNode = Party_Cart_Items_Connection_Node_FragmentFragment;
export type Party_CartItemsConnectionPagination = Party_CartItemsConnectionQuery['pagination'];
export type Party_CartItemsConnectionAggregate = Party_CartItemsConnectionQuery['pagination']['aggregate'];
export const useParty_CartItemsConnection = useParty_CartItemsConnectionQuery;
export type Party_UpdatePartyCartItemVariables = Party_UpdatePartyCartItemMutationVariables;
export type Party_UpdatePartyCartItemUpdatePartyCartItem = Party_UpdatePartyCartItemMutation['updatePartyCartItem'];
export const useParty_UpdatePartyCartItem = useParty_UpdatePartyCartItemMutation;
export type Party_DeletePartyCartItemVariables = Party_DeletePartyCartItemMutationVariables;
export type Party_DeletePartyCartItemDeletePartyCartItem = Party_DeletePartyCartItemMutation['deletePartyCartItem'];
export const useParty_DeletePartyCartItem = useParty_DeletePartyCartItemMutation;
export type Party_CartCostVariables = Party_CartCostQueryVariables;
export const useParty_CartCost = useParty_CartCostQuery;
export type Party_DeletePartyVariables = Party_DeletePartyMutationVariables;
export type Party_DeletePartyDeleteParty = Party_DeletePartyMutation['deleteParty'];
export const useParty_DeleteParty = useParty_DeletePartyMutation;
export type Party_UpdatePartyVariables = Party_UpdatePartyMutationVariables;
export type Party_UpdatePartyUpdateParty = Party_FragmentFragment;
export type Party_UpdatePartyLocation = Party_UpdatePartyMutation['updateParty']['location'];
export const useParty_UpdateParty = useParty_UpdatePartyMutation;
export type Lol_FragmentLocation = Lol_FragmentFragment['location'];
export type Lol_Fragment_Location = Lol_FragmentFragment['location'];
export type Lol_FragmentAuthor = Lol_FragmentFragment['author'];
export type Lol_FragmentMembers = Lol_FragmentFragment['members'][0];
export type Lol_FragmentCart = Lol_FragmentFragment['cart'];
export type Party_LeavePartyVariables = Party_LeavePartyMutationVariables;
export type Party_LeavePartyUpdateUser = Party_LeavePartyMutation['updateUser'];
export const useParty_LeaveParty = useParty_LeavePartyMutation;
export type PartyDashboardParticipantsQueryVariables = PartyDashboardParticipantsQueryQueryVariables;
export type PartyDashboardParticipantsQueryUsersConnection = PartyDashboardParticipantsQueryQuery['usersConnection'];
export type PartyDashboardParticipantsQueryPageInfo = PartyDashboardParticipantsQueryQuery['usersConnection']['pageInfo'];
export type PartyDashboardParticipantsQueryEdges = PartyDashboardParticipantsQueryQuery['usersConnection']['edges'][0];
export type PartyDashboardParticipantsQueryNode = PartyDashboardParticipantsQueryQuery['usersConnection']['edges'][0]['node'];
export type PartyDashboardParticipantsQueryAggregated = PartyDashboardParticipantsQueryQuery['aggregated'];
export type PartyDashboardParticipantsQueryAggregate = PartyDashboardParticipantsQueryQuery['aggregated']['aggregate'];
export const usePartyDashboardParticipantsQuery = usePartyDashboardParticipantsQueryQuery;
export type User_FriendInvitationsConnectionVariables = User_FriendInvitationsConnectionQueryVariables;
export type User_FriendInvitationsConnectionFriendInvitationsConnection = User_FriendInvitationsConnectionQuery['friendInvitationsConnection'];
export type User_FriendInvitationsConnectionPageInfo = User_FriendInvitationsConnectionQuery['friendInvitationsConnection']['pageInfo'];
export type User_FriendInvitationsConnectionEdges = User_FriendInvitationsConnectionQuery['friendInvitationsConnection']['edges'][0];
export type User_FriendInvitationsConnectionNode = User_FriendInvitationsConnectionQuery['friendInvitationsConnection']['edges'][0]['node'];
export type User_FriendInvitationsConnectionInvitedBy = User_FriendInvitationsConnectionQuery['friendInvitationsConnection']['edges'][0]['node']['invitedBy'];
export type User_FriendInvitationsConnectionUser = User_FriendInvitationsConnectionQuery['friendInvitationsConnection']['edges'][0]['node']['user'];
export type User_FriendInvitationsConnectionCounts = User_FriendInvitationsConnectionQuery['counts'];
export type User_FriendInvitationsConnectionAggregate = User_FriendInvitationsConnectionQuery['counts']['aggregate'];
export const useUser_FriendInvitationsConnection = useUser_FriendInvitationsConnectionQuery;
export type User_AcceptFriendInvitationVariables = User_AcceptFriendInvitationMutationVariables;
export const useUser_AcceptFriendInvitation = useUser_AcceptFriendInvitationMutation;
export type User_PeopleConnectionVariables = User_PeopleConnectionQueryVariables;
export type User_PeopleConnectionUsersConnection = User_PeopleConnectionQuery['usersConnection'];
export type User_PeopleConnectionPageInfo = User_PeopleConnectionQuery['usersConnection']['pageInfo'];
export type User_PeopleConnectionEdges = User_PeopleConnectionQuery['usersConnection']['edges'][0];
export type User_PeopleConnectionNode = User_PeopleConnectionQuery['usersConnection']['edges'][0]['node'];
export const useUser_PeopleConnection = useUser_PeopleConnectionQuery;
export type User_UnfriendUserVariables = User_UnfriendUserMutationVariables;
export const useUser_UnfriendUser = useUser_UnfriendUserMutation;
export type User_CreateFriendInvitationVariables = User_CreateFriendInvitationMutationVariables;
export type User_CreateFriendInvitationCreateFriendInvitation = User_CreateFriendInvitationMutation['createFriendInvitation'];
export const useUser_CreateFriendInvitation = useUser_CreateFriendInvitationMutation;
export type User_UserInfoVariables = User_UserInfoMutationVariables;
export type User_UserInfoUpdateUser = User_UserInfoMutation['updateUser'];
export const useUser_UserInfo = useUser_UserInfoMutation;
export type User_UpdatePrivacyVariables = User_UpdatePrivacyMutationVariables;
export type User_UpdatePrivacyUpdateUser = User_UpdatePrivacyMutation['updateUser'];
export const useUser_UpdatePrivacy = useUser_UpdatePrivacyMutation;
export type User_UpdatePushNotificationsSettingsVariables = User_UpdatePushNotificationsSettingsMutationVariables;
export type User_UpdatePushNotificationsSettingsUpdateUser = User_UpdatePushNotificationsSettingsMutation['updateUser'];
export const useUser_UpdatePushNotificationsSettings = useUser_UpdatePushNotificationsSettingsMutation;export const Party_FragmentFragmentDoc = gql`
    fragment PARTY_FRAGMENT on Party {
  id
  title
  description
  location {
    placeName
    longitude
    latitude
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
  cart {
    id
  }
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
export const Full_Saved_Track_FragmentFragmentDoc = gql`
    fragment FULL_SAVED_TRACK_FRAGMENT on PartySavedTrack {
  id
  name
  length
  uri
  popularity
  durationMs
  previewUrl
  stringArtists
  explicit
  popularity
  album {
    id
    name
    uri
    imageUrl
    releaseDate
  }
}
    `;
export const Party_Playlists_Connection_Node_FragmentFragmentDoc = gql`
    fragment PARTY_PLAYLISTS_CONNECTION_NODE_FRAGMENT on Playlist {
  id
  spotifyExternalUrl
  name
  spotifyId
  imageUrl
  importable
  user {
    id
    firstName
    lastName
    avatar
  }
  tracks {
    id
    uri
  }
}
    `;
export const Party_Cart_Items_Connection_Node_FragmentFragmentDoc = gql`
    fragment PARTY_CART_ITEMS_CONNECTION_NODE_FRAGMENT on PartyCartItem {
  id
  name
  price
  quantity
  status
  user {
    firstName
    lastName
    id
  }
}
    `;
export const Party_Authentication_Minimal_Party_FragmentFragmentDoc = gql`
    fragment PARTY_AUTHENTICATION_MINIMAL_PARTY_FRAGMENT on Party {
  id
}
    `;
export const Is_Unread_ThreadFragmentDoc = gql`
    fragment IS_UNREAD_THREAD on Chat {
  hasUnreadMessages @client
}
    `;
export const EditPlaylistCacheFragmentFragmentDoc = gql`
    fragment EditPlaylistCacheFragment on Playlist {
  name
  importable
}
    `;
export const Lol_FragmentFragmentDoc = gql`
    fragment LOL_FRAGMENT on Party {
  location {
    placeName
    latitude
    longitude
  }
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
  cart {
    id
  }
}
    `;
export const UserFragmentDoc = gql`
    fragment user on User {
  status
}
    `;
export const Information_FragmentFragmentDoc = gql`
    fragment INFORMATION_FRAGMENT on User {
  firstName
  lastName
}
    `;
export const User_Privacy_FragmentFragmentDoc = gql`
    fragment USER_PRIVACY_FRAGMENT on User {
  isPrivate
}
    `;
export const Push_Notifications_Settings_FragmentFragmentDoc = gql`
    fragment PUSH_NOTIFICATIONS_SETTINGS_FRAGMENT on User {
  webPushNotificationToken
  pushNotificationsScopes
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
export const AddTrackToPartyDocument = gql`
    mutation AddTrackToParty($data: PartySavedTrackCreateInput!) {
  createPartySavedTrack(data: $data) {
    ...FULL_SAVED_TRACK_FRAGMENT
    spotifyId
  }
}
    ${Full_Saved_Track_FragmentFragmentDoc}`;
export type AddTrackToPartyMutationFn = ApolloReactCommon.MutationFunction<AddTrackToPartyMutation, AddTrackToPartyMutationVariables>;
export type AddTrackToPartyComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddTrackToPartyMutation, AddTrackToPartyMutationVariables>, 'mutation'>;

    export const AddTrackToPartyComponent = (props: AddTrackToPartyComponentProps) => (
      <ApolloReactComponents.Mutation<AddTrackToPartyMutation, AddTrackToPartyMutationVariables> mutation={AddTrackToPartyDocument} {...props} />
    );
    

    export function useAddTrackToPartyMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddTrackToPartyMutation, AddTrackToPartyMutationVariables>) {
      return ApolloReactHooks.useMutation<AddTrackToPartyMutation, AddTrackToPartyMutationVariables>(AddTrackToPartyDocument, baseOptions);
    }
export type AddTrackToPartyMutationHookResult = ReturnType<typeof useAddTrackToPartyMutation>;
export type AddTrackToPartyMutationResult = ApolloReactCommon.MutationResult<AddTrackToPartyMutation>;
export type AddTrackToPartyMutationOptions = ApolloReactCommon.BaseMutationOptions<AddTrackToPartyMutation, AddTrackToPartyMutationVariables>;
export const User_DeleteFriendInvitationDocument = gql`
    mutation User_DeleteFriendInvitation($where: FriendInvitationWhereUniqueInput!) {
  deleteFriendInvitation(where: $where) {
    id
  }
}
    `;
export type User_DeleteFriendInvitationMutationFn = ApolloReactCommon.MutationFunction<User_DeleteFriendInvitationMutation, User_DeleteFriendInvitationMutationVariables>;
export type User_DeleteFriendInvitationComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<User_DeleteFriendInvitationMutation, User_DeleteFriendInvitationMutationVariables>, 'mutation'>;

    export const User_DeleteFriendInvitationComponent = (props: User_DeleteFriendInvitationComponentProps) => (
      <ApolloReactComponents.Mutation<User_DeleteFriendInvitationMutation, User_DeleteFriendInvitationMutationVariables> mutation={User_DeleteFriendInvitationDocument} {...props} />
    );
    

    export function useUser_DeleteFriendInvitationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<User_DeleteFriendInvitationMutation, User_DeleteFriendInvitationMutationVariables>) {
      return ApolloReactHooks.useMutation<User_DeleteFriendInvitationMutation, User_DeleteFriendInvitationMutationVariables>(User_DeleteFriendInvitationDocument, baseOptions);
    }
export type User_DeleteFriendInvitationMutationHookResult = ReturnType<typeof useUser_DeleteFriendInvitationMutation>;
export type User_DeleteFriendInvitationMutationResult = ApolloReactCommon.MutationResult<User_DeleteFriendInvitationMutation>;
export type User_DeleteFriendInvitationMutationOptions = ApolloReactCommon.BaseMutationOptions<User_DeleteFriendInvitationMutation, User_DeleteFriendInvitationMutationVariables>;
export const MeQueryDocument = gql`
    query MeQuery {
  me {
    id
    email
    firstName
    lastName
    avatar
    isPrivate
    webPushNotificationToken
    pushNotificationsScopes
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
export const Party_SavedTracksDocument = gql`
    query Party_SavedTracks($where: PartySavedTrackWhereInput, $orderBy: PartySavedTrackOrderByInput, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) {
  partySavedTracks(where: $where, orderBy: $orderBy, after: $after, skip: $skip, before: $before, first: $first, last: $last) {
    spotifyId
  }
}
    `;
export type Party_SavedTracksComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<Party_SavedTracksQuery, Party_SavedTracksQueryVariables>, 'query'>;

    export const Party_SavedTracksComponent = (props: Party_SavedTracksComponentProps) => (
      <ApolloReactComponents.Query<Party_SavedTracksQuery, Party_SavedTracksQueryVariables> query={Party_SavedTracksDocument} {...props} />
    );
    

    export function useParty_SavedTracksQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Party_SavedTracksQuery, Party_SavedTracksQueryVariables>) {
      return ApolloReactHooks.useQuery<Party_SavedTracksQuery, Party_SavedTracksQueryVariables>(Party_SavedTracksDocument, baseOptions);
    }
      export function useParty_SavedTracksLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Party_SavedTracksQuery, Party_SavedTracksQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<Party_SavedTracksQuery, Party_SavedTracksQueryVariables>(Party_SavedTracksDocument, baseOptions);
      }
      
export type Party_SavedTracksQueryHookResult = ReturnType<typeof useParty_SavedTracksQuery>;
export type Party_SavedTracksQueryResult = ApolloReactCommon.QueryResult<Party_SavedTracksQuery, Party_SavedTracksQueryVariables>;
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
export const User_FriendInvitationsSubscriptionDocument = gql`
    subscription User_FriendInvitationsSubscription($where: FriendInvitationSubscriptionWhereInput) {
  friendInvitation(where: $where) {
    mutation
    previousValues {
      id
      invitedUserId
    }
    node {
      createdAt
      invitedBy {
        id
        firstName
        lastName
        avatar
      }
      id
      invitedUserId
      user {
        id
      }
    }
  }
}
    `;
export type User_FriendInvitationsSubscriptionComponentProps = Omit<ApolloReactComponents.SubscriptionComponentOptions<User_FriendInvitationsSubscriptionSubscription, User_FriendInvitationsSubscriptionSubscriptionVariables>, 'subscription'>;

    export const User_FriendInvitationsSubscriptionComponent = (props: User_FriendInvitationsSubscriptionComponentProps) => (
      <ApolloReactComponents.Subscription<User_FriendInvitationsSubscriptionSubscription, User_FriendInvitationsSubscriptionSubscriptionVariables> subscription={User_FriendInvitationsSubscriptionDocument} {...props} />
    );
    

    export function useUser_FriendInvitationsSubscriptionSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<User_FriendInvitationsSubscriptionSubscription, User_FriendInvitationsSubscriptionSubscriptionVariables>) {
      return ApolloReactHooks.useSubscription<User_FriendInvitationsSubscriptionSubscription, User_FriendInvitationsSubscriptionSubscriptionVariables>(User_FriendInvitationsSubscriptionDocument, baseOptions);
    }
export type User_FriendInvitationsSubscriptionSubscriptionHookResult = ReturnType<typeof useUser_FriendInvitationsSubscriptionSubscription>;
export type User_FriendInvitationsSubscriptionSubscriptionResult = ApolloReactCommon.SubscriptionResult<User_FriendInvitationsSubscriptionSubscription>;
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
export const User_FriendsDocument = gql`
    query User_Friends($userId: ID!) {
  userFriends(userId: $userId) {
    current
    pending {
      id
      invitedUserId
    }
  }
}
    `;
export type User_FriendsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<User_FriendsQuery, User_FriendsQueryVariables>, 'query'> & ({ variables: User_FriendsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const User_FriendsComponent = (props: User_FriendsComponentProps) => (
      <ApolloReactComponents.Query<User_FriendsQuery, User_FriendsQueryVariables> query={User_FriendsDocument} {...props} />
    );
    

    export function useUser_FriendsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<User_FriendsQuery, User_FriendsQueryVariables>) {
      return ApolloReactHooks.useQuery<User_FriendsQuery, User_FriendsQueryVariables>(User_FriendsDocument, baseOptions);
    }
      export function useUser_FriendsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<User_FriendsQuery, User_FriendsQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<User_FriendsQuery, User_FriendsQueryVariables>(User_FriendsDocument, baseOptions);
      }
      
export type User_FriendsQueryHookResult = ReturnType<typeof useUser_FriendsQuery>;
export type User_FriendsQueryResult = ApolloReactCommon.QueryResult<User_FriendsQuery, User_FriendsQueryVariables>;
export const Party_AuthenticateDocument = gql`
    query Party_Authenticate($partyId: ID!) {
  authenticateParty(partyId: $partyId) {
    canJoin
    isMember
    party {
      ...PARTY_FRAGMENT
    }
  }
}
    ${Party_FragmentFragmentDoc}`;
export type Party_AuthenticateComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<Party_AuthenticateQuery, Party_AuthenticateQueryVariables>, 'query'> & ({ variables: Party_AuthenticateQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const Party_AuthenticateComponent = (props: Party_AuthenticateComponentProps) => (
      <ApolloReactComponents.Query<Party_AuthenticateQuery, Party_AuthenticateQueryVariables> query={Party_AuthenticateDocument} {...props} />
    );
    

    export function useParty_AuthenticateQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Party_AuthenticateQuery, Party_AuthenticateQueryVariables>) {
      return ApolloReactHooks.useQuery<Party_AuthenticateQuery, Party_AuthenticateQueryVariables>(Party_AuthenticateDocument, baseOptions);
    }
      export function useParty_AuthenticateLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Party_AuthenticateQuery, Party_AuthenticateQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<Party_AuthenticateQuery, Party_AuthenticateQueryVariables>(Party_AuthenticateDocument, baseOptions);
      }
      
export type Party_AuthenticateQueryHookResult = ReturnType<typeof useParty_AuthenticateQuery>;
export type Party_AuthenticateQueryResult = ApolloReactCommon.QueryResult<Party_AuthenticateQuery, Party_AuthenticateQueryVariables>;
export const Party_JoinPublicPartyDocument = gql`
    mutation Party_JoinPublicParty($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
  updateUser(data: $data, where: $where) {
    id
  }
}
    `;
export type Party_JoinPublicPartyMutationFn = ApolloReactCommon.MutationFunction<Party_JoinPublicPartyMutation, Party_JoinPublicPartyMutationVariables>;
export type Party_JoinPublicPartyComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<Party_JoinPublicPartyMutation, Party_JoinPublicPartyMutationVariables>, 'mutation'>;

    export const Party_JoinPublicPartyComponent = (props: Party_JoinPublicPartyComponentProps) => (
      <ApolloReactComponents.Mutation<Party_JoinPublicPartyMutation, Party_JoinPublicPartyMutationVariables> mutation={Party_JoinPublicPartyDocument} {...props} />
    );
    

    export function useParty_JoinPublicPartyMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Party_JoinPublicPartyMutation, Party_JoinPublicPartyMutationVariables>) {
      return ApolloReactHooks.useMutation<Party_JoinPublicPartyMutation, Party_JoinPublicPartyMutationVariables>(Party_JoinPublicPartyDocument, baseOptions);
    }
export type Party_JoinPublicPartyMutationHookResult = ReturnType<typeof useParty_JoinPublicPartyMutation>;
export type Party_JoinPublicPartyMutationResult = ApolloReactCommon.MutationResult<Party_JoinPublicPartyMutation>;
export type Party_JoinPublicPartyMutationOptions = ApolloReactCommon.BaseMutationOptions<Party_JoinPublicPartyMutation, Party_JoinPublicPartyMutationVariables>;
export const Party_CombinePlaylistsDocument = gql`
    mutation Party_CombinePlaylists($partyPlannerData: CombinePlaylistPartyPlannerData!, $spotifyData: CombinePlaylistCreatedSpotifyPlaylistInput!) {
  combinePlaylists(partyPlannerData: $partyPlannerData, spotifyData: $spotifyData) {
    id
  }
}
    `;
export type Party_CombinePlaylistsMutationFn = ApolloReactCommon.MutationFunction<Party_CombinePlaylistsMutation, Party_CombinePlaylistsMutationVariables>;
export type Party_CombinePlaylistsComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<Party_CombinePlaylistsMutation, Party_CombinePlaylistsMutationVariables>, 'mutation'>;

    export const Party_CombinePlaylistsComponent = (props: Party_CombinePlaylistsComponentProps) => (
      <ApolloReactComponents.Mutation<Party_CombinePlaylistsMutation, Party_CombinePlaylistsMutationVariables> mutation={Party_CombinePlaylistsDocument} {...props} />
    );
    

    export function useParty_CombinePlaylistsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Party_CombinePlaylistsMutation, Party_CombinePlaylistsMutationVariables>) {
      return ApolloReactHooks.useMutation<Party_CombinePlaylistsMutation, Party_CombinePlaylistsMutationVariables>(Party_CombinePlaylistsDocument, baseOptions);
    }
export type Party_CombinePlaylistsMutationHookResult = ReturnType<typeof useParty_CombinePlaylistsMutation>;
export type Party_CombinePlaylistsMutationResult = ApolloReactCommon.MutationResult<Party_CombinePlaylistsMutation>;
export type Party_CombinePlaylistsMutationOptions = ApolloReactCommon.BaseMutationOptions<Party_CombinePlaylistsMutation, Party_CombinePlaylistsMutationVariables>;
export const Party_CreatePlaylistDocument = gql`
    mutation Party_CreatePlaylist($data: PlaylistCreateInput!) {
  createPlaylist(data: $data) {
    ...PARTY_PLAYLISTS_CONNECTION_NODE_FRAGMENT
  }
}
    ${Party_Playlists_Connection_Node_FragmentFragmentDoc}`;
export type Party_CreatePlaylistMutationFn = ApolloReactCommon.MutationFunction<Party_CreatePlaylistMutation, Party_CreatePlaylistMutationVariables>;
export type Party_CreatePlaylistComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<Party_CreatePlaylistMutation, Party_CreatePlaylistMutationVariables>, 'mutation'>;

    export const Party_CreatePlaylistComponent = (props: Party_CreatePlaylistComponentProps) => (
      <ApolloReactComponents.Mutation<Party_CreatePlaylistMutation, Party_CreatePlaylistMutationVariables> mutation={Party_CreatePlaylistDocument} {...props} />
    );
    

    export function useParty_CreatePlaylistMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Party_CreatePlaylistMutation, Party_CreatePlaylistMutationVariables>) {
      return ApolloReactHooks.useMutation<Party_CreatePlaylistMutation, Party_CreatePlaylistMutationVariables>(Party_CreatePlaylistDocument, baseOptions);
    }
export type Party_CreatePlaylistMutationHookResult = ReturnType<typeof useParty_CreatePlaylistMutation>;
export type Party_CreatePlaylistMutationResult = ApolloReactCommon.MutationResult<Party_CreatePlaylistMutation>;
export type Party_CreatePlaylistMutationOptions = ApolloReactCommon.BaseMutationOptions<Party_CreatePlaylistMutation, Party_CreatePlaylistMutationVariables>;
export const Party_ImportPlaylistsToPartyDocument = gql`
    mutation Party_ImportPlaylistsToParty($playlists: String!, $partyId: ID!) {
  importPlaylistsToParty(playlists: $playlists, partyId: $partyId)
}
    `;
export type Party_ImportPlaylistsToPartyMutationFn = ApolloReactCommon.MutationFunction<Party_ImportPlaylistsToPartyMutation, Party_ImportPlaylistsToPartyMutationVariables>;
export type Party_ImportPlaylistsToPartyComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<Party_ImportPlaylistsToPartyMutation, Party_ImportPlaylistsToPartyMutationVariables>, 'mutation'>;

    export const Party_ImportPlaylistsToPartyComponent = (props: Party_ImportPlaylistsToPartyComponentProps) => (
      <ApolloReactComponents.Mutation<Party_ImportPlaylistsToPartyMutation, Party_ImportPlaylistsToPartyMutationVariables> mutation={Party_ImportPlaylistsToPartyDocument} {...props} />
    );
    

    export function useParty_ImportPlaylistsToPartyMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Party_ImportPlaylistsToPartyMutation, Party_ImportPlaylistsToPartyMutationVariables>) {
      return ApolloReactHooks.useMutation<Party_ImportPlaylistsToPartyMutation, Party_ImportPlaylistsToPartyMutationVariables>(Party_ImportPlaylistsToPartyDocument, baseOptions);
    }
export type Party_ImportPlaylistsToPartyMutationHookResult = ReturnType<typeof useParty_ImportPlaylistsToPartyMutation>;
export type Party_ImportPlaylistsToPartyMutationResult = ApolloReactCommon.MutationResult<Party_ImportPlaylistsToPartyMutation>;
export type Party_ImportPlaylistsToPartyMutationOptions = ApolloReactCommon.BaseMutationOptions<Party_ImportPlaylistsToPartyMutation, Party_ImportPlaylistsToPartyMutationVariables>;
export const Party_EditPlaylistDocument = gql`
    mutation Party_EditPlaylist($data: PlaylistUpdateInput!, $where: PlaylistWhereUniqueInput!) {
  updatePlaylist(data: $data, where: $where) {
    id
  }
}
    `;
export type Party_EditPlaylistMutationFn = ApolloReactCommon.MutationFunction<Party_EditPlaylistMutation, Party_EditPlaylistMutationVariables>;
export type Party_EditPlaylistComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<Party_EditPlaylistMutation, Party_EditPlaylistMutationVariables>, 'mutation'>;

    export const Party_EditPlaylistComponent = (props: Party_EditPlaylistComponentProps) => (
      <ApolloReactComponents.Mutation<Party_EditPlaylistMutation, Party_EditPlaylistMutationVariables> mutation={Party_EditPlaylistDocument} {...props} />
    );
    

    export function useParty_EditPlaylistMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Party_EditPlaylistMutation, Party_EditPlaylistMutationVariables>) {
      return ApolloReactHooks.useMutation<Party_EditPlaylistMutation, Party_EditPlaylistMutationVariables>(Party_EditPlaylistDocument, baseOptions);
    }
export type Party_EditPlaylistMutationHookResult = ReturnType<typeof useParty_EditPlaylistMutation>;
export type Party_EditPlaylistMutationResult = ApolloReactCommon.MutationResult<Party_EditPlaylistMutation>;
export type Party_EditPlaylistMutationOptions = ApolloReactCommon.BaseMutationOptions<Party_EditPlaylistMutation, Party_EditPlaylistMutationVariables>;
export const Party_DeletePlaylistDocument = gql`
    mutation Party_DeletePlaylist($where: PlaylistWhereUniqueInput!) {
  deletePlaylist(where: $where) {
    id
  }
}
    `;
export type Party_DeletePlaylistMutationFn = ApolloReactCommon.MutationFunction<Party_DeletePlaylistMutation, Party_DeletePlaylistMutationVariables>;
export type Party_DeletePlaylistComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<Party_DeletePlaylistMutation, Party_DeletePlaylistMutationVariables>, 'mutation'>;

    export const Party_DeletePlaylistComponent = (props: Party_DeletePlaylistComponentProps) => (
      <ApolloReactComponents.Mutation<Party_DeletePlaylistMutation, Party_DeletePlaylistMutationVariables> mutation={Party_DeletePlaylistDocument} {...props} />
    );
    

    export function useParty_DeletePlaylistMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Party_DeletePlaylistMutation, Party_DeletePlaylistMutationVariables>) {
      return ApolloReactHooks.useMutation<Party_DeletePlaylistMutation, Party_DeletePlaylistMutationVariables>(Party_DeletePlaylistDocument, baseOptions);
    }
export type Party_DeletePlaylistMutationHookResult = ReturnType<typeof useParty_DeletePlaylistMutation>;
export type Party_DeletePlaylistMutationResult = ApolloReactCommon.MutationResult<Party_DeletePlaylistMutation>;
export type Party_DeletePlaylistMutationOptions = ApolloReactCommon.BaseMutationOptions<Party_DeletePlaylistMutation, Party_DeletePlaylistMutationVariables>;
export const Party_PlaylistsConnectionDocument = gql`
    query Party_PlaylistsConnection($where: PlaylistWhereInput, $orderBy: PlaylistOrderByInput, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) {
  playlistsConnection(where: $where, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) {
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      node {
        ...PARTY_PLAYLISTS_CONNECTION_NODE_FRAGMENT
        createdAt
      }
    }
  }
}
    ${Party_Playlists_Connection_Node_FragmentFragmentDoc}`;
export type Party_PlaylistsConnectionComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<Party_PlaylistsConnectionQuery, Party_PlaylistsConnectionQueryVariables>, 'query'>;

    export const Party_PlaylistsConnectionComponent = (props: Party_PlaylistsConnectionComponentProps) => (
      <ApolloReactComponents.Query<Party_PlaylistsConnectionQuery, Party_PlaylistsConnectionQueryVariables> query={Party_PlaylistsConnectionDocument} {...props} />
    );
    

    export function useParty_PlaylistsConnectionQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Party_PlaylistsConnectionQuery, Party_PlaylistsConnectionQueryVariables>) {
      return ApolloReactHooks.useQuery<Party_PlaylistsConnectionQuery, Party_PlaylistsConnectionQueryVariables>(Party_PlaylistsConnectionDocument, baseOptions);
    }
      export function useParty_PlaylistsConnectionLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Party_PlaylistsConnectionQuery, Party_PlaylistsConnectionQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<Party_PlaylistsConnectionQuery, Party_PlaylistsConnectionQueryVariables>(Party_PlaylistsConnectionDocument, baseOptions);
      }
      
export type Party_PlaylistsConnectionQueryHookResult = ReturnType<typeof useParty_PlaylistsConnectionQuery>;
export type Party_PlaylistsConnectionQueryResult = ApolloReactCommon.QueryResult<Party_PlaylistsConnectionQuery, Party_PlaylistsConnectionQueryVariables>;
export const Party_SavedTracksConnectionDocument = gql`
    query Party_SavedTracksConnection($where: PartySavedTrackWhereInput, $orderBy: PartySavedTrackOrderByInput, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) {
  partySavedTracksConnection(where: $where, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) {
    edges {
      node {
        ...FULL_SAVED_TRACK_FRAGMENT
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
    ${Full_Saved_Track_FragmentFragmentDoc}`;
export type Party_SavedTracksConnectionComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<Party_SavedTracksConnectionQuery, Party_SavedTracksConnectionQueryVariables>, 'query'>;

    export const Party_SavedTracksConnectionComponent = (props: Party_SavedTracksConnectionComponentProps) => (
      <ApolloReactComponents.Query<Party_SavedTracksConnectionQuery, Party_SavedTracksConnectionQueryVariables> query={Party_SavedTracksConnectionDocument} {...props} />
    );
    

    export function useParty_SavedTracksConnectionQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Party_SavedTracksConnectionQuery, Party_SavedTracksConnectionQueryVariables>) {
      return ApolloReactHooks.useQuery<Party_SavedTracksConnectionQuery, Party_SavedTracksConnectionQueryVariables>(Party_SavedTracksConnectionDocument, baseOptions);
    }
      export function useParty_SavedTracksConnectionLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Party_SavedTracksConnectionQuery, Party_SavedTracksConnectionQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<Party_SavedTracksConnectionQuery, Party_SavedTracksConnectionQueryVariables>(Party_SavedTracksConnectionDocument, baseOptions);
      }
      
export type Party_SavedTracksConnectionQueryHookResult = ReturnType<typeof useParty_SavedTracksConnectionQuery>;
export type Party_SavedTracksConnectionQueryResult = ApolloReactCommon.QueryResult<Party_SavedTracksConnectionQuery, Party_SavedTracksConnectionQueryVariables>;
export const Party_CreatePartyCartItemDocument = gql`
    mutation Party_CreatePartyCartItem($data: PartyCartItemCreateInput!) {
  createPartyCartItem(data: $data) {
    ...PARTY_CART_ITEMS_CONNECTION_NODE_FRAGMENT
  }
}
    ${Party_Cart_Items_Connection_Node_FragmentFragmentDoc}`;
export type Party_CreatePartyCartItemMutationFn = ApolloReactCommon.MutationFunction<Party_CreatePartyCartItemMutation, Party_CreatePartyCartItemMutationVariables>;
export type Party_CreatePartyCartItemComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<Party_CreatePartyCartItemMutation, Party_CreatePartyCartItemMutationVariables>, 'mutation'>;

    export const Party_CreatePartyCartItemComponent = (props: Party_CreatePartyCartItemComponentProps) => (
      <ApolloReactComponents.Mutation<Party_CreatePartyCartItemMutation, Party_CreatePartyCartItemMutationVariables> mutation={Party_CreatePartyCartItemDocument} {...props} />
    );
    

    export function useParty_CreatePartyCartItemMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Party_CreatePartyCartItemMutation, Party_CreatePartyCartItemMutationVariables>) {
      return ApolloReactHooks.useMutation<Party_CreatePartyCartItemMutation, Party_CreatePartyCartItemMutationVariables>(Party_CreatePartyCartItemDocument, baseOptions);
    }
export type Party_CreatePartyCartItemMutationHookResult = ReturnType<typeof useParty_CreatePartyCartItemMutation>;
export type Party_CreatePartyCartItemMutationResult = ApolloReactCommon.MutationResult<Party_CreatePartyCartItemMutation>;
export type Party_CreatePartyCartItemMutationOptions = ApolloReactCommon.BaseMutationOptions<Party_CreatePartyCartItemMutation, Party_CreatePartyCartItemMutationVariables>;
export const Party_CartItemsConnectionDocument = gql`
    query Party_CartItemsConnection($where: PartyCartItemWhereInput, $orderBy: PartyCartItemOrderByInput, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) {
  partyCartItemsConnection(where: $where, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) {
    pageInfo {
      hasNextPage
      endCursor
      startCursor
    }
    edges {
      node {
        ...PARTY_CART_ITEMS_CONNECTION_NODE_FRAGMENT
      }
    }
  }
  pagination: partyCartItemsConnection(where: $where) {
    aggregate {
      count
    }
  }
}
    ${Party_Cart_Items_Connection_Node_FragmentFragmentDoc}`;
export type Party_CartItemsConnectionComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<Party_CartItemsConnectionQuery, Party_CartItemsConnectionQueryVariables>, 'query'>;

    export const Party_CartItemsConnectionComponent = (props: Party_CartItemsConnectionComponentProps) => (
      <ApolloReactComponents.Query<Party_CartItemsConnectionQuery, Party_CartItemsConnectionQueryVariables> query={Party_CartItemsConnectionDocument} {...props} />
    );
    

    export function useParty_CartItemsConnectionQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Party_CartItemsConnectionQuery, Party_CartItemsConnectionQueryVariables>) {
      return ApolloReactHooks.useQuery<Party_CartItemsConnectionQuery, Party_CartItemsConnectionQueryVariables>(Party_CartItemsConnectionDocument, baseOptions);
    }
      export function useParty_CartItemsConnectionLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Party_CartItemsConnectionQuery, Party_CartItemsConnectionQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<Party_CartItemsConnectionQuery, Party_CartItemsConnectionQueryVariables>(Party_CartItemsConnectionDocument, baseOptions);
      }
      
export type Party_CartItemsConnectionQueryHookResult = ReturnType<typeof useParty_CartItemsConnectionQuery>;
export type Party_CartItemsConnectionQueryResult = ApolloReactCommon.QueryResult<Party_CartItemsConnectionQuery, Party_CartItemsConnectionQueryVariables>;
export const Party_UpdatePartyCartItemDocument = gql`
    mutation Party_UpdatePartyCartItem($data: PartyCartItemUpdateInput!, $where: PartyCartItemWhereUniqueInput!) {
  updatePartyCartItem(data: $data, where: $where) {
    id
    quantity
    price
  }
}
    `;
export type Party_UpdatePartyCartItemMutationFn = ApolloReactCommon.MutationFunction<Party_UpdatePartyCartItemMutation, Party_UpdatePartyCartItemMutationVariables>;
export type Party_UpdatePartyCartItemComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<Party_UpdatePartyCartItemMutation, Party_UpdatePartyCartItemMutationVariables>, 'mutation'>;

    export const Party_UpdatePartyCartItemComponent = (props: Party_UpdatePartyCartItemComponentProps) => (
      <ApolloReactComponents.Mutation<Party_UpdatePartyCartItemMutation, Party_UpdatePartyCartItemMutationVariables> mutation={Party_UpdatePartyCartItemDocument} {...props} />
    );
    

    export function useParty_UpdatePartyCartItemMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Party_UpdatePartyCartItemMutation, Party_UpdatePartyCartItemMutationVariables>) {
      return ApolloReactHooks.useMutation<Party_UpdatePartyCartItemMutation, Party_UpdatePartyCartItemMutationVariables>(Party_UpdatePartyCartItemDocument, baseOptions);
    }
export type Party_UpdatePartyCartItemMutationHookResult = ReturnType<typeof useParty_UpdatePartyCartItemMutation>;
export type Party_UpdatePartyCartItemMutationResult = ApolloReactCommon.MutationResult<Party_UpdatePartyCartItemMutation>;
export type Party_UpdatePartyCartItemMutationOptions = ApolloReactCommon.BaseMutationOptions<Party_UpdatePartyCartItemMutation, Party_UpdatePartyCartItemMutationVariables>;
export const Party_DeletePartyCartItemDocument = gql`
    mutation Party_DeletePartyCartItem($where: PartyCartItemWhereUniqueInput!) {
  deletePartyCartItem(where: $where) {
    id
  }
}
    `;
export type Party_DeletePartyCartItemMutationFn = ApolloReactCommon.MutationFunction<Party_DeletePartyCartItemMutation, Party_DeletePartyCartItemMutationVariables>;
export type Party_DeletePartyCartItemComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<Party_DeletePartyCartItemMutation, Party_DeletePartyCartItemMutationVariables>, 'mutation'>;

    export const Party_DeletePartyCartItemComponent = (props: Party_DeletePartyCartItemComponentProps) => (
      <ApolloReactComponents.Mutation<Party_DeletePartyCartItemMutation, Party_DeletePartyCartItemMutationVariables> mutation={Party_DeletePartyCartItemDocument} {...props} />
    );
    

    export function useParty_DeletePartyCartItemMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Party_DeletePartyCartItemMutation, Party_DeletePartyCartItemMutationVariables>) {
      return ApolloReactHooks.useMutation<Party_DeletePartyCartItemMutation, Party_DeletePartyCartItemMutationVariables>(Party_DeletePartyCartItemDocument, baseOptions);
    }
export type Party_DeletePartyCartItemMutationHookResult = ReturnType<typeof useParty_DeletePartyCartItemMutation>;
export type Party_DeletePartyCartItemMutationResult = ApolloReactCommon.MutationResult<Party_DeletePartyCartItemMutation>;
export type Party_DeletePartyCartItemMutationOptions = ApolloReactCommon.BaseMutationOptions<Party_DeletePartyCartItemMutation, Party_DeletePartyCartItemMutationVariables>;
export const Party_CartCostDocument = gql`
    query Party_CartCost($id: ID!) {
  partyCartCost(id: $id)
}
    `;
export type Party_CartCostComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<Party_CartCostQuery, Party_CartCostQueryVariables>, 'query'> & ({ variables: Party_CartCostQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const Party_CartCostComponent = (props: Party_CartCostComponentProps) => (
      <ApolloReactComponents.Query<Party_CartCostQuery, Party_CartCostQueryVariables> query={Party_CartCostDocument} {...props} />
    );
    

    export function useParty_CartCostQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Party_CartCostQuery, Party_CartCostQueryVariables>) {
      return ApolloReactHooks.useQuery<Party_CartCostQuery, Party_CartCostQueryVariables>(Party_CartCostDocument, baseOptions);
    }
      export function useParty_CartCostLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Party_CartCostQuery, Party_CartCostQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<Party_CartCostQuery, Party_CartCostQueryVariables>(Party_CartCostDocument, baseOptions);
      }
      
export type Party_CartCostQueryHookResult = ReturnType<typeof useParty_CartCostQuery>;
export type Party_CartCostQueryResult = ApolloReactCommon.QueryResult<Party_CartCostQuery, Party_CartCostQueryVariables>;
export const Party_DeletePartyDocument = gql`
    mutation Party_DeleteParty($where: PartyWhereUniqueInput!) {
  deleteParty(where: $where) {
    id
  }
}
    `;
export type Party_DeletePartyMutationFn = ApolloReactCommon.MutationFunction<Party_DeletePartyMutation, Party_DeletePartyMutationVariables>;
export type Party_DeletePartyComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<Party_DeletePartyMutation, Party_DeletePartyMutationVariables>, 'mutation'>;

    export const Party_DeletePartyComponent = (props: Party_DeletePartyComponentProps) => (
      <ApolloReactComponents.Mutation<Party_DeletePartyMutation, Party_DeletePartyMutationVariables> mutation={Party_DeletePartyDocument} {...props} />
    );
    

    export function useParty_DeletePartyMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Party_DeletePartyMutation, Party_DeletePartyMutationVariables>) {
      return ApolloReactHooks.useMutation<Party_DeletePartyMutation, Party_DeletePartyMutationVariables>(Party_DeletePartyDocument, baseOptions);
    }
export type Party_DeletePartyMutationHookResult = ReturnType<typeof useParty_DeletePartyMutation>;
export type Party_DeletePartyMutationResult = ApolloReactCommon.MutationResult<Party_DeletePartyMutation>;
export type Party_DeletePartyMutationOptions = ApolloReactCommon.BaseMutationOptions<Party_DeletePartyMutation, Party_DeletePartyMutationVariables>;
export const Party_UpdatePartyDocument = gql`
    mutation Party_UpdateParty($data: PartyUpdateInput!, $where: PartyWhereUniqueInput!) {
  updateParty(data: $data, where: $where) {
    location {
      placeName
      latitude
      longitude
    }
    ...PARTY_FRAGMENT
  }
}
    ${Party_FragmentFragmentDoc}`;
export type Party_UpdatePartyMutationFn = ApolloReactCommon.MutationFunction<Party_UpdatePartyMutation, Party_UpdatePartyMutationVariables>;
export type Party_UpdatePartyComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<Party_UpdatePartyMutation, Party_UpdatePartyMutationVariables>, 'mutation'>;

    export const Party_UpdatePartyComponent = (props: Party_UpdatePartyComponentProps) => (
      <ApolloReactComponents.Mutation<Party_UpdatePartyMutation, Party_UpdatePartyMutationVariables> mutation={Party_UpdatePartyDocument} {...props} />
    );
    

    export function useParty_UpdatePartyMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Party_UpdatePartyMutation, Party_UpdatePartyMutationVariables>) {
      return ApolloReactHooks.useMutation<Party_UpdatePartyMutation, Party_UpdatePartyMutationVariables>(Party_UpdatePartyDocument, baseOptions);
    }
export type Party_UpdatePartyMutationHookResult = ReturnType<typeof useParty_UpdatePartyMutation>;
export type Party_UpdatePartyMutationResult = ApolloReactCommon.MutationResult<Party_UpdatePartyMutation>;
export type Party_UpdatePartyMutationOptions = ApolloReactCommon.BaseMutationOptions<Party_UpdatePartyMutation, Party_UpdatePartyMutationVariables>;
export const Party_LeavePartyDocument = gql`
    mutation Party_LeaveParty($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
  updateUser(data: $data, where: $where) {
    id
  }
}
    `;
export type Party_LeavePartyMutationFn = ApolloReactCommon.MutationFunction<Party_LeavePartyMutation, Party_LeavePartyMutationVariables>;
export type Party_LeavePartyComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<Party_LeavePartyMutation, Party_LeavePartyMutationVariables>, 'mutation'>;

    export const Party_LeavePartyComponent = (props: Party_LeavePartyComponentProps) => (
      <ApolloReactComponents.Mutation<Party_LeavePartyMutation, Party_LeavePartyMutationVariables> mutation={Party_LeavePartyDocument} {...props} />
    );
    

    export function useParty_LeavePartyMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Party_LeavePartyMutation, Party_LeavePartyMutationVariables>) {
      return ApolloReactHooks.useMutation<Party_LeavePartyMutation, Party_LeavePartyMutationVariables>(Party_LeavePartyDocument, baseOptions);
    }
export type Party_LeavePartyMutationHookResult = ReturnType<typeof useParty_LeavePartyMutation>;
export type Party_LeavePartyMutationResult = ApolloReactCommon.MutationResult<Party_LeavePartyMutation>;
export type Party_LeavePartyMutationOptions = ApolloReactCommon.BaseMutationOptions<Party_LeavePartyMutation, Party_LeavePartyMutationVariables>;
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
export const User_FriendInvitationsConnectionDocument = gql`
    query User_FriendInvitationsConnection($where: FriendInvitationWhereInput, $orderBy: FriendInvitationOrderByInput, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) {
  friendInvitationsConnection(where: $where, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) {
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      node {
        createdAt
        invitedBy {
          id
          firstName
          lastName
          avatar
        }
        id
        invitedUserId
        user {
          id
        }
      }
    }
  }
  counts: friendInvitationsConnection(where: $where) {
    aggregate {
      count
    }
  }
}
    `;
export type User_FriendInvitationsConnectionComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<User_FriendInvitationsConnectionQuery, User_FriendInvitationsConnectionQueryVariables>, 'query'>;

    export const User_FriendInvitationsConnectionComponent = (props: User_FriendInvitationsConnectionComponentProps) => (
      <ApolloReactComponents.Query<User_FriendInvitationsConnectionQuery, User_FriendInvitationsConnectionQueryVariables> query={User_FriendInvitationsConnectionDocument} {...props} />
    );
    

    export function useUser_FriendInvitationsConnectionQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<User_FriendInvitationsConnectionQuery, User_FriendInvitationsConnectionQueryVariables>) {
      return ApolloReactHooks.useQuery<User_FriendInvitationsConnectionQuery, User_FriendInvitationsConnectionQueryVariables>(User_FriendInvitationsConnectionDocument, baseOptions);
    }
      export function useUser_FriendInvitationsConnectionLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<User_FriendInvitationsConnectionQuery, User_FriendInvitationsConnectionQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<User_FriendInvitationsConnectionQuery, User_FriendInvitationsConnectionQueryVariables>(User_FriendInvitationsConnectionDocument, baseOptions);
      }
      
export type User_FriendInvitationsConnectionQueryHookResult = ReturnType<typeof useUser_FriendInvitationsConnectionQuery>;
export type User_FriendInvitationsConnectionQueryResult = ApolloReactCommon.QueryResult<User_FriendInvitationsConnectionQuery, User_FriendInvitationsConnectionQueryVariables>;
export const User_AcceptFriendInvitationDocument = gql`
    mutation User_AcceptFriendInvitation($invitationId: ID!, $invitingUserId: ID!) {
  acceptFriendInvitation(invitationId: $invitationId, invitingUserId: $invitingUserId)
}
    `;
export type User_AcceptFriendInvitationMutationFn = ApolloReactCommon.MutationFunction<User_AcceptFriendInvitationMutation, User_AcceptFriendInvitationMutationVariables>;
export type User_AcceptFriendInvitationComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<User_AcceptFriendInvitationMutation, User_AcceptFriendInvitationMutationVariables>, 'mutation'>;

    export const User_AcceptFriendInvitationComponent = (props: User_AcceptFriendInvitationComponentProps) => (
      <ApolloReactComponents.Mutation<User_AcceptFriendInvitationMutation, User_AcceptFriendInvitationMutationVariables> mutation={User_AcceptFriendInvitationDocument} {...props} />
    );
    

    export function useUser_AcceptFriendInvitationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<User_AcceptFriendInvitationMutation, User_AcceptFriendInvitationMutationVariables>) {
      return ApolloReactHooks.useMutation<User_AcceptFriendInvitationMutation, User_AcceptFriendInvitationMutationVariables>(User_AcceptFriendInvitationDocument, baseOptions);
    }
export type User_AcceptFriendInvitationMutationHookResult = ReturnType<typeof useUser_AcceptFriendInvitationMutation>;
export type User_AcceptFriendInvitationMutationResult = ApolloReactCommon.MutationResult<User_AcceptFriendInvitationMutation>;
export type User_AcceptFriendInvitationMutationOptions = ApolloReactCommon.BaseMutationOptions<User_AcceptFriendInvitationMutation, User_AcceptFriendInvitationMutationVariables>;
export const User_PeopleConnectionDocument = gql`
    query User_PeopleConnection($where: UserWhereInput, $orderBy: UserOrderByInput, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) {
  usersConnection(where: $where, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) {
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      node {
        id
        firstName
        lastName
        avatar
        createdAt
      }
    }
  }
}
    `;
export type User_PeopleConnectionComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<User_PeopleConnectionQuery, User_PeopleConnectionQueryVariables>, 'query'>;

    export const User_PeopleConnectionComponent = (props: User_PeopleConnectionComponentProps) => (
      <ApolloReactComponents.Query<User_PeopleConnectionQuery, User_PeopleConnectionQueryVariables> query={User_PeopleConnectionDocument} {...props} />
    );
    

    export function useUser_PeopleConnectionQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<User_PeopleConnectionQuery, User_PeopleConnectionQueryVariables>) {
      return ApolloReactHooks.useQuery<User_PeopleConnectionQuery, User_PeopleConnectionQueryVariables>(User_PeopleConnectionDocument, baseOptions);
    }
      export function useUser_PeopleConnectionLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<User_PeopleConnectionQuery, User_PeopleConnectionQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<User_PeopleConnectionQuery, User_PeopleConnectionQueryVariables>(User_PeopleConnectionDocument, baseOptions);
      }
      
export type User_PeopleConnectionQueryHookResult = ReturnType<typeof useUser_PeopleConnectionQuery>;
export type User_PeopleConnectionQueryResult = ApolloReactCommon.QueryResult<User_PeopleConnectionQuery, User_PeopleConnectionQueryVariables>;
export const User_UnfriendUserDocument = gql`
    mutation User_UnfriendUser($personToUnfriendId: ID!) {
  unfriendPerson(personToUnfriendId: $personToUnfriendId)
}
    `;
export type User_UnfriendUserMutationFn = ApolloReactCommon.MutationFunction<User_UnfriendUserMutation, User_UnfriendUserMutationVariables>;
export type User_UnfriendUserComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<User_UnfriendUserMutation, User_UnfriendUserMutationVariables>, 'mutation'>;

    export const User_UnfriendUserComponent = (props: User_UnfriendUserComponentProps) => (
      <ApolloReactComponents.Mutation<User_UnfriendUserMutation, User_UnfriendUserMutationVariables> mutation={User_UnfriendUserDocument} {...props} />
    );
    

    export function useUser_UnfriendUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<User_UnfriendUserMutation, User_UnfriendUserMutationVariables>) {
      return ApolloReactHooks.useMutation<User_UnfriendUserMutation, User_UnfriendUserMutationVariables>(User_UnfriendUserDocument, baseOptions);
    }
export type User_UnfriendUserMutationHookResult = ReturnType<typeof useUser_UnfriendUserMutation>;
export type User_UnfriendUserMutationResult = ApolloReactCommon.MutationResult<User_UnfriendUserMutation>;
export type User_UnfriendUserMutationOptions = ApolloReactCommon.BaseMutationOptions<User_UnfriendUserMutation, User_UnfriendUserMutationVariables>;
export const User_CreateFriendInvitationDocument = gql`
    mutation User_CreateFriendInvitation($data: FriendInvitationCreateInput!) {
  createFriendInvitation(data: $data) {
    id
  }
}
    `;
export type User_CreateFriendInvitationMutationFn = ApolloReactCommon.MutationFunction<User_CreateFriendInvitationMutation, User_CreateFriendInvitationMutationVariables>;
export type User_CreateFriendInvitationComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<User_CreateFriendInvitationMutation, User_CreateFriendInvitationMutationVariables>, 'mutation'>;

    export const User_CreateFriendInvitationComponent = (props: User_CreateFriendInvitationComponentProps) => (
      <ApolloReactComponents.Mutation<User_CreateFriendInvitationMutation, User_CreateFriendInvitationMutationVariables> mutation={User_CreateFriendInvitationDocument} {...props} />
    );
    

    export function useUser_CreateFriendInvitationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<User_CreateFriendInvitationMutation, User_CreateFriendInvitationMutationVariables>) {
      return ApolloReactHooks.useMutation<User_CreateFriendInvitationMutation, User_CreateFriendInvitationMutationVariables>(User_CreateFriendInvitationDocument, baseOptions);
    }
export type User_CreateFriendInvitationMutationHookResult = ReturnType<typeof useUser_CreateFriendInvitationMutation>;
export type User_CreateFriendInvitationMutationResult = ApolloReactCommon.MutationResult<User_CreateFriendInvitationMutation>;
export type User_CreateFriendInvitationMutationOptions = ApolloReactCommon.BaseMutationOptions<User_CreateFriendInvitationMutation, User_CreateFriendInvitationMutationVariables>;
export const User_UserInfoDocument = gql`
    mutation User_UserInfo($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
  updateUser(data: $data, where: $where) {
    id
  }
}
    `;
export type User_UserInfoMutationFn = ApolloReactCommon.MutationFunction<User_UserInfoMutation, User_UserInfoMutationVariables>;
export type User_UserInfoComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<User_UserInfoMutation, User_UserInfoMutationVariables>, 'mutation'>;

    export const User_UserInfoComponent = (props: User_UserInfoComponentProps) => (
      <ApolloReactComponents.Mutation<User_UserInfoMutation, User_UserInfoMutationVariables> mutation={User_UserInfoDocument} {...props} />
    );
    

    export function useUser_UserInfoMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<User_UserInfoMutation, User_UserInfoMutationVariables>) {
      return ApolloReactHooks.useMutation<User_UserInfoMutation, User_UserInfoMutationVariables>(User_UserInfoDocument, baseOptions);
    }
export type User_UserInfoMutationHookResult = ReturnType<typeof useUser_UserInfoMutation>;
export type User_UserInfoMutationResult = ApolloReactCommon.MutationResult<User_UserInfoMutation>;
export type User_UserInfoMutationOptions = ApolloReactCommon.BaseMutationOptions<User_UserInfoMutation, User_UserInfoMutationVariables>;
export const User_UpdatePrivacyDocument = gql`
    mutation User_UpdatePrivacy($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
  updateUser(where: $where, data: $data) {
    id
  }
}
    `;
export type User_UpdatePrivacyMutationFn = ApolloReactCommon.MutationFunction<User_UpdatePrivacyMutation, User_UpdatePrivacyMutationVariables>;
export type User_UpdatePrivacyComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<User_UpdatePrivacyMutation, User_UpdatePrivacyMutationVariables>, 'mutation'>;

    export const User_UpdatePrivacyComponent = (props: User_UpdatePrivacyComponentProps) => (
      <ApolloReactComponents.Mutation<User_UpdatePrivacyMutation, User_UpdatePrivacyMutationVariables> mutation={User_UpdatePrivacyDocument} {...props} />
    );
    

    export function useUser_UpdatePrivacyMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<User_UpdatePrivacyMutation, User_UpdatePrivacyMutationVariables>) {
      return ApolloReactHooks.useMutation<User_UpdatePrivacyMutation, User_UpdatePrivacyMutationVariables>(User_UpdatePrivacyDocument, baseOptions);
    }
export type User_UpdatePrivacyMutationHookResult = ReturnType<typeof useUser_UpdatePrivacyMutation>;
export type User_UpdatePrivacyMutationResult = ApolloReactCommon.MutationResult<User_UpdatePrivacyMutation>;
export type User_UpdatePrivacyMutationOptions = ApolloReactCommon.BaseMutationOptions<User_UpdatePrivacyMutation, User_UpdatePrivacyMutationVariables>;
export const User_UpdatePushNotificationsSettingsDocument = gql`
    mutation User_UpdatePushNotificationsSettings($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
  updateUser(data: $data, where: $where) {
    id
  }
}
    `;
export type User_UpdatePushNotificationsSettingsMutationFn = ApolloReactCommon.MutationFunction<User_UpdatePushNotificationsSettingsMutation, User_UpdatePushNotificationsSettingsMutationVariables>;
export type User_UpdatePushNotificationsSettingsComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<User_UpdatePushNotificationsSettingsMutation, User_UpdatePushNotificationsSettingsMutationVariables>, 'mutation'>;

    export const User_UpdatePushNotificationsSettingsComponent = (props: User_UpdatePushNotificationsSettingsComponentProps) => (
      <ApolloReactComponents.Mutation<User_UpdatePushNotificationsSettingsMutation, User_UpdatePushNotificationsSettingsMutationVariables> mutation={User_UpdatePushNotificationsSettingsDocument} {...props} />
    );
    

    export function useUser_UpdatePushNotificationsSettingsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<User_UpdatePushNotificationsSettingsMutation, User_UpdatePushNotificationsSettingsMutationVariables>) {
      return ApolloReactHooks.useMutation<User_UpdatePushNotificationsSettingsMutation, User_UpdatePushNotificationsSettingsMutationVariables>(User_UpdatePushNotificationsSettingsDocument, baseOptions);
    }
export type User_UpdatePushNotificationsSettingsMutationHookResult = ReturnType<typeof useUser_UpdatePushNotificationsSettingsMutation>;
export type User_UpdatePushNotificationsSettingsMutationResult = ApolloReactCommon.MutationResult<User_UpdatePushNotificationsSettingsMutation>;
export type User_UpdatePushNotificationsSettingsMutationOptions = ApolloReactCommon.BaseMutationOptions<User_UpdatePushNotificationsSettingsMutation, User_UpdatePushNotificationsSettingsMutationVariables>;