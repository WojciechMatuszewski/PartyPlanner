import gql from 'graphql-tag';
import * as ReactApollo from 'react-apollo';
import * as React from 'react';
import * as ReactApolloHooks from 'react-apollo-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  /** The `Long` scalar type represents non-fractional signed whole numeric values.
   * Long can represent values between -(2^63) and 2^63 - 1.
   */
  Long: any;
};

export type AggregateAlbum = {
  __typename?: 'AggregateAlbum';
  count: Scalars['Int'];
};

export type AggregateArtist = {
  __typename?: 'AggregateArtist';
  count: Scalars['Int'];
};

export type AggregateChat = {
  __typename?: 'AggregateChat';
  count: Scalars['Int'];
};

export type AggregateGame = {
  __typename?: 'AggregateGame';
  count: Scalars['Int'];
};

export type AggregateImage = {
  __typename?: 'AggregateImage';
  count: Scalars['Int'];
};

export type AggregateLocation = {
  __typename?: 'AggregateLocation';
  count: Scalars['Int'];
};

export type AggregateMessage = {
  __typename?: 'AggregateMessage';
  count: Scalars['Int'];
};

export type AggregateParty = {
  __typename?: 'AggregateParty';
  count: Scalars['Int'];
};

export type AggregatePartyInvitation = {
  __typename?: 'AggregatePartyInvitation';
  count: Scalars['Int'];
};

export type AggregatePlaylist = {
  __typename?: 'AggregatePlaylist';
  count: Scalars['Int'];
};

export type AggregateTrack = {
  __typename?: 'AggregateTrack';
  count: Scalars['Int'];
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  count: Scalars['Int'];
};

export type Album = Node & {
  __typename?: 'Album';
  id: Scalars['ID'];
  images?: Maybe<Array<Image>>;
  artists?: Maybe<Array<Artist>>;
};

export type AlbumImagesArgs = {
  where?: Maybe<ImageWhereInput>;
  orderBy?: Maybe<ImageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type AlbumArtistsArgs = {
  where?: Maybe<ArtistWhereInput>;
  orderBy?: Maybe<ArtistOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type AlbumConnection = {
  __typename?: 'AlbumConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<AlbumEdge>>;
  aggregate: AggregateAlbum;
};

export type AlbumCreateInput = {
  id?: Maybe<Scalars['ID']>;
  images?: Maybe<ImageCreateManyInput>;
  artists?: Maybe<ArtistCreateManyInput>;
};

export type AlbumCreateOneInput = {
  create?: Maybe<AlbumCreateInput>;
  connect?: Maybe<AlbumWhereUniqueInput>;
};

/** An edge in a connection. */
export type AlbumEdge = {
  __typename?: 'AlbumEdge';
  /** The item at the end of the edge. */
  node: Album;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export enum AlbumOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type AlbumPreviousValues = {
  __typename?: 'AlbumPreviousValues';
  id: Scalars['ID'];
};

export type AlbumSubscriptionPayload = {
  __typename?: 'AlbumSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Album>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<AlbumPreviousValues>;
};

export type AlbumSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AlbumSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AlbumSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AlbumSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<AlbumWhereInput>;
};

export type AlbumUpdateDataInput = {
  images?: Maybe<ImageUpdateManyInput>;
  artists?: Maybe<ArtistUpdateManyInput>;
};

export type AlbumUpdateInput = {
  images?: Maybe<ImageUpdateManyInput>;
  artists?: Maybe<ArtistUpdateManyInput>;
};

export type AlbumUpdateOneRequiredInput = {
  create?: Maybe<AlbumCreateInput>;
  connect?: Maybe<AlbumWhereUniqueInput>;
  update?: Maybe<AlbumUpdateDataInput>;
  upsert?: Maybe<AlbumUpsertNestedInput>;
};

export type AlbumUpsertNestedInput = {
  update: AlbumUpdateDataInput;
  create: AlbumCreateInput;
};

export type AlbumWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AlbumWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AlbumWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AlbumWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  images_every?: Maybe<ImageWhereInput>;
  images_some?: Maybe<ImageWhereInput>;
  images_none?: Maybe<ImageWhereInput>;
  artists_every?: Maybe<ArtistWhereInput>;
  artists_some?: Maybe<ArtistWhereInput>;
  artists_none?: Maybe<ArtistWhereInput>;
};

export type AlbumWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Artist = Node & {
  __typename?: 'Artist';
  id: Scalars['ID'];
  name: Scalars['String'];
};

/** A connection to a list of items. */
export type ArtistConnection = {
  __typename?: 'ArtistConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<ArtistEdge>>;
  aggregate: AggregateArtist;
};

export type ArtistCreateInput = {
  id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
};

export type ArtistCreateManyInput = {
  create?: Maybe<Array<ArtistCreateInput>>;
  connect?: Maybe<Array<ArtistWhereUniqueInput>>;
};

/** An edge in a connection. */
export type ArtistEdge = {
  __typename?: 'ArtistEdge';
  /** The item at the end of the edge. */
  node: Artist;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export enum ArtistOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

export type ArtistPreviousValues = {
  __typename?: 'ArtistPreviousValues';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ArtistScalarWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ArtistScalarWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ArtistScalarWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ArtistScalarWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>;
};

export type ArtistSubscriptionPayload = {
  __typename?: 'ArtistSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Artist>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<ArtistPreviousValues>;
};

export type ArtistSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ArtistSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ArtistSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ArtistSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<ArtistWhereInput>;
};

export type ArtistUpdateDataInput = {
  name?: Maybe<Scalars['String']>;
};

export type ArtistUpdateInput = {
  name?: Maybe<Scalars['String']>;
};

export type ArtistUpdateManyDataInput = {
  name?: Maybe<Scalars['String']>;
};

export type ArtistUpdateManyInput = {
  create?: Maybe<Array<ArtistCreateInput>>;
  connect?: Maybe<Array<ArtistWhereUniqueInput>>;
  set?: Maybe<Array<ArtistWhereUniqueInput>>;
  disconnect?: Maybe<Array<ArtistWhereUniqueInput>>;
  delete?: Maybe<Array<ArtistWhereUniqueInput>>;
  update?: Maybe<Array<ArtistUpdateWithWhereUniqueNestedInput>>;
  updateMany?: Maybe<Array<ArtistUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<ArtistScalarWhereInput>>;
  upsert?: Maybe<Array<ArtistUpsertWithWhereUniqueNestedInput>>;
};

export type ArtistUpdateManyMutationInput = {
  name?: Maybe<Scalars['String']>;
};

export type ArtistUpdateManyWithWhereNestedInput = {
  where: ArtistScalarWhereInput;
  data: ArtistUpdateManyDataInput;
};

export type ArtistUpdateWithWhereUniqueNestedInput = {
  where: ArtistWhereUniqueInput;
  data: ArtistUpdateDataInput;
};

export type ArtistUpsertWithWhereUniqueNestedInput = {
  where: ArtistWhereUniqueInput;
  update: ArtistUpdateDataInput;
  create: ArtistCreateInput;
};

export type ArtistWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ArtistWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ArtistWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ArtistWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>;
};

export type ArtistWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token: Scalars['String'];
  user: User;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

export type Chat = Node & {
  __typename?: 'Chat';
  id: Scalars['ID'];
  party: Party;
  members?: Maybe<Array<User>>;
  messages?: Maybe<Array<Message>>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  hasUnreadMessages: Scalars['Boolean'];
};

export type ChatMembersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type ChatMessagesArgs = {
  where?: Maybe<MessageWhereInput>;
  orderBy?: Maybe<MessageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type ChatConnection = {
  __typename?: 'ChatConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<ChatEdge>>;
  aggregate: AggregateChat;
};

export type ChatCreateInput = {
  id?: Maybe<Scalars['ID']>;
  party: PartyCreateOneInput;
  members?: Maybe<UserCreateManyWithoutChatsInput>;
  messages?: Maybe<MessageCreateManyWithoutChatInput>;
};

export type ChatCreateManyWithoutMembersInput = {
  create?: Maybe<Array<ChatCreateWithoutMembersInput>>;
  connect?: Maybe<Array<ChatWhereUniqueInput>>;
};

export type ChatCreateOneWithoutMessagesInput = {
  create?: Maybe<ChatCreateWithoutMessagesInput>;
  connect?: Maybe<ChatWhereUniqueInput>;
};

export type ChatCreateWithoutMembersInput = {
  id?: Maybe<Scalars['ID']>;
  party: PartyCreateOneInput;
  messages?: Maybe<MessageCreateManyWithoutChatInput>;
};

export type ChatCreateWithoutMessagesInput = {
  id?: Maybe<Scalars['ID']>;
  party: PartyCreateOneInput;
  members?: Maybe<UserCreateManyWithoutChatsInput>;
};

/** An edge in a connection. */
export type ChatEdge = {
  __typename?: 'ChatEdge';
  /** The item at the end of the edge. */
  node: Chat;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
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
  __typename?: 'ChatPreviousValues';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type ChatScalarWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ChatScalarWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ChatScalarWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ChatScalarWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
};

export type ChatSubscriptionPayload = {
  __typename?: 'ChatSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Chat>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<ChatPreviousValues>;
};

export type ChatSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ChatSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ChatSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ChatSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<ChatWhereInput>;
};

export type ChatUpdateInput = {
  party?: Maybe<PartyUpdateOneRequiredInput>;
  members?: Maybe<UserUpdateManyWithoutChatsInput>;
  messages?: Maybe<MessageUpdateManyWithoutChatInput>;
};

export type ChatUpdateManyWithoutMembersInput = {
  create?: Maybe<Array<ChatCreateWithoutMembersInput>>;
  connect?: Maybe<Array<ChatWhereUniqueInput>>;
  set?: Maybe<Array<ChatWhereUniqueInput>>;
  disconnect?: Maybe<Array<ChatWhereUniqueInput>>;
  delete?: Maybe<Array<ChatWhereUniqueInput>>;
  update?: Maybe<Array<ChatUpdateWithWhereUniqueWithoutMembersInput>>;
  deleteMany?: Maybe<Array<ChatScalarWhereInput>>;
  upsert?: Maybe<Array<ChatUpsertWithWhereUniqueWithoutMembersInput>>;
};

export type ChatUpdateOneRequiredWithoutMessagesInput = {
  create?: Maybe<ChatCreateWithoutMessagesInput>;
  connect?: Maybe<ChatWhereUniqueInput>;
  update?: Maybe<ChatUpdateWithoutMessagesDataInput>;
  upsert?: Maybe<ChatUpsertWithoutMessagesInput>;
};

export type ChatUpdateWithoutMembersDataInput = {
  party?: Maybe<PartyUpdateOneRequiredInput>;
  messages?: Maybe<MessageUpdateManyWithoutChatInput>;
};

export type ChatUpdateWithoutMessagesDataInput = {
  party?: Maybe<PartyUpdateOneRequiredInput>;
  members?: Maybe<UserUpdateManyWithoutChatsInput>;
};

export type ChatUpdateWithWhereUniqueWithoutMembersInput = {
  where: ChatWhereUniqueInput;
  data: ChatUpdateWithoutMembersDataInput;
};

export type ChatUpsertWithoutMessagesInput = {
  update: ChatUpdateWithoutMessagesDataInput;
  create: ChatCreateWithoutMessagesInput;
};

export type ChatUpsertWithWhereUniqueWithoutMembersInput = {
  where: ChatWhereUniqueInput;
  update: ChatUpdateWithoutMembersDataInput;
  create: ChatCreateWithoutMembersInput;
};

export type ChatWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ChatWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ChatWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ChatWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  party?: Maybe<PartyWhereInput>;
  members_every?: Maybe<UserWhereInput>;
  members_some?: Maybe<UserWhereInput>;
  members_none?: Maybe<UserWhereInput>;
  messages_every?: Maybe<MessageWhereInput>;
  messages_some?: Maybe<MessageWhereInput>;
  messages_none?: Maybe<MessageWhereInput>;
};

export type ChatWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Game = Node & {
  __typename?: 'Game';
  id: Scalars['ID'];
  title: Scalars['String'];
  cover?: Maybe<Scalars['String']>;
  type: GameType;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

/** A connection to a list of items. */
export type GameConnection = {
  __typename?: 'GameConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<GameEdge>>;
  aggregate: AggregateGame;
};

export type GameCreateInput = {
  id?: Maybe<Scalars['ID']>;
  title: Scalars['String'];
  cover?: Maybe<Scalars['String']>;
  type: GameType;
};

export type GameCreateManyInput = {
  create?: Maybe<Array<GameCreateInput>>;
  connect?: Maybe<Array<GameWhereUniqueInput>>;
};

/** An edge in a connection. */
export type GameEdge = {
  __typename?: 'GameEdge';
  /** The item at the end of the edge. */
  node: Game;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
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
  __typename?: 'GamePreviousValues';
  id: Scalars['ID'];
  title: Scalars['String'];
  cover?: Maybe<Scalars['String']>;
  type: GameType;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type GameScalarWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GameScalarWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GameScalarWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GameScalarWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  title_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  title_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  title_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  title_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  title_not_ends_with?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  cover_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  cover_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  cover_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  cover_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  cover_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  cover_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  cover_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  cover_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  cover_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  cover_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  cover_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  cover_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  cover_not_ends_with?: Maybe<Scalars['String']>;
  type?: Maybe<GameType>;
  /** All values that are not equal to given value. */
  type_not?: Maybe<GameType>;
  /** All values that are contained in given list. */
  type_in?: Maybe<Array<GameType>>;
  /** All values that are not contained in given list. */
  type_not_in?: Maybe<Array<GameType>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
};

export type GameSubscriptionPayload = {
  __typename?: 'GameSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Game>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<GamePreviousValues>;
};

export type GameSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GameSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GameSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GameSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<GameWhereInput>;
};

export enum GameType {
  Board = 'BOARD',
  Pc = 'PC',
  Console = 'CONSOLE'
}

export type GameUpdateDataInput = {
  title?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  type?: Maybe<GameType>;
};

export type GameUpdateInput = {
  title?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  type?: Maybe<GameType>;
};

export type GameUpdateManyDataInput = {
  title?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  type?: Maybe<GameType>;
};

export type GameUpdateManyInput = {
  create?: Maybe<Array<GameCreateInput>>;
  connect?: Maybe<Array<GameWhereUniqueInput>>;
  set?: Maybe<Array<GameWhereUniqueInput>>;
  disconnect?: Maybe<Array<GameWhereUniqueInput>>;
  delete?: Maybe<Array<GameWhereUniqueInput>>;
  update?: Maybe<Array<GameUpdateWithWhereUniqueNestedInput>>;
  updateMany?: Maybe<Array<GameUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<GameScalarWhereInput>>;
  upsert?: Maybe<Array<GameUpsertWithWhereUniqueNestedInput>>;
};

export type GameUpdateManyMutationInput = {
  title?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  type?: Maybe<GameType>;
};

export type GameUpdateManyWithWhereNestedInput = {
  where: GameScalarWhereInput;
  data: GameUpdateManyDataInput;
};

export type GameUpdateWithWhereUniqueNestedInput = {
  where: GameWhereUniqueInput;
  data: GameUpdateDataInput;
};

export type GameUpsertWithWhereUniqueNestedInput = {
  where: GameWhereUniqueInput;
  update: GameUpdateDataInput;
  create: GameCreateInput;
};

export type GameWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GameWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GameWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GameWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  title_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  title_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  title_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  title_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  title_not_ends_with?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  cover_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  cover_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  cover_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  cover_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  cover_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  cover_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  cover_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  cover_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  cover_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  cover_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  cover_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  cover_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  cover_not_ends_with?: Maybe<Scalars['String']>;
  type?: Maybe<GameType>;
  /** All values that are not equal to given value. */
  type_not?: Maybe<GameType>;
  /** All values that are contained in given list. */
  type_in?: Maybe<Array<GameType>>;
  /** All values that are not contained in given list. */
  type_not_in?: Maybe<Array<GameType>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
};

export type GameWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
};

export type Image = Node & {
  __typename?: 'Image';
  id: Scalars['ID'];
  height: Scalars['Int'];
  width: Scalars['Int'];
  url: Scalars['String'];
};

/** A connection to a list of items. */
export type ImageConnection = {
  __typename?: 'ImageConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<ImageEdge>>;
  aggregate: AggregateImage;
};

export type ImageCreateInput = {
  id?: Maybe<Scalars['ID']>;
  height: Scalars['Int'];
  width: Scalars['Int'];
  url: Scalars['String'];
};

export type ImageCreateManyInput = {
  create?: Maybe<Array<ImageCreateInput>>;
  connect?: Maybe<Array<ImageWhereUniqueInput>>;
};

/** An edge in a connection. */
export type ImageEdge = {
  __typename?: 'ImageEdge';
  /** The item at the end of the edge. */
  node: Image;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
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
  __typename?: 'ImagePreviousValues';
  id: Scalars['ID'];
  height: Scalars['Int'];
  width: Scalars['Int'];
  url: Scalars['String'];
};

export type ImageScalarWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ImageScalarWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ImageScalarWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ImageScalarWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  height?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  height_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  height_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  height_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  height_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  height_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  height_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  height_gte?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  width_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  width_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  width_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  width_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  width_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  width_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  width_gte?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  url_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  url_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  url_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  url_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  url_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  url_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  url_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  url_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  url_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  url_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  url_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  url_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  url_not_ends_with?: Maybe<Scalars['String']>;
};

export type ImageSubscriptionPayload = {
  __typename?: 'ImageSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Image>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<ImagePreviousValues>;
};

export type ImageSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ImageSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ImageSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ImageSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<ImageWhereInput>;
};

export type ImageUpdateDataInput = {
  height?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
};

export type ImageUpdateInput = {
  height?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
};

export type ImageUpdateManyDataInput = {
  height?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
};

export type ImageUpdateManyInput = {
  create?: Maybe<Array<ImageCreateInput>>;
  connect?: Maybe<Array<ImageWhereUniqueInput>>;
  set?: Maybe<Array<ImageWhereUniqueInput>>;
  disconnect?: Maybe<Array<ImageWhereUniqueInput>>;
  delete?: Maybe<Array<ImageWhereUniqueInput>>;
  update?: Maybe<Array<ImageUpdateWithWhereUniqueNestedInput>>;
  updateMany?: Maybe<Array<ImageUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<ImageScalarWhereInput>>;
  upsert?: Maybe<Array<ImageUpsertWithWhereUniqueNestedInput>>;
};

export type ImageUpdateManyMutationInput = {
  height?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
};

export type ImageUpdateManyWithWhereNestedInput = {
  where: ImageScalarWhereInput;
  data: ImageUpdateManyDataInput;
};

export type ImageUpdateWithWhereUniqueNestedInput = {
  where: ImageWhereUniqueInput;
  data: ImageUpdateDataInput;
};

export type ImageUpsertWithWhereUniqueNestedInput = {
  where: ImageWhereUniqueInput;
  update: ImageUpdateDataInput;
  create: ImageCreateInput;
};

export type ImageWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ImageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ImageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ImageWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  height?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  height_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  height_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  height_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  height_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  height_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  height_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  height_gte?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  width_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  width_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  width_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  width_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  width_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  width_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  width_gte?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  url_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  url_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  url_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  url_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  url_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  url_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  url_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  url_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  url_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  url_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  url_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  url_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  url_not_ends_with?: Maybe<Scalars['String']>;
};

export type ImageWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type JoinPartyWhereInput = {
  userId: Scalars['String'];
  partyId: Scalars['String'];
};

export type Location = Node & {
  __typename?: 'Location';
  id: Scalars['ID'];
  placeName: Scalars['String'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

/** A connection to a list of items. */
export type LocationConnection = {
  __typename?: 'LocationConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<LocationEdge>>;
  aggregate: AggregateLocation;
};

export type LocationCreateInput = {
  id?: Maybe<Scalars['ID']>;
  placeName: Scalars['String'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type LocationCreateOneInput = {
  create?: Maybe<LocationCreateInput>;
  connect?: Maybe<LocationWhereUniqueInput>;
};

/** An edge in a connection. */
export type LocationEdge = {
  __typename?: 'LocationEdge';
  /** The item at the end of the edge. */
  node: Location;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
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
  __typename?: 'LocationPreviousValues';
  id: Scalars['ID'];
  placeName: Scalars['String'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type LocationSubscriptionPayload = {
  __typename?: 'LocationSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Location>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<LocationPreviousValues>;
};

export type LocationSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<LocationSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<LocationSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<LocationSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<LocationWhereInput>;
};

export type LocationUpdateDataInput = {
  placeName?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type LocationUpdateInput = {
  placeName?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type LocationUpdateManyMutationInput = {
  placeName?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type LocationUpdateOneRequiredInput = {
  create?: Maybe<LocationCreateInput>;
  connect?: Maybe<LocationWhereUniqueInput>;
  update?: Maybe<LocationUpdateDataInput>;
  upsert?: Maybe<LocationUpsertNestedInput>;
};

export type LocationUpsertNestedInput = {
  update: LocationUpdateDataInput;
  create: LocationCreateInput;
};

export type LocationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<LocationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<LocationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<LocationWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  placeName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  placeName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  placeName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  placeName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  placeName_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  placeName_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  placeName_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  placeName_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  placeName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  placeName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  placeName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  placeName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  placeName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  placeName_not_ends_with?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  latitude_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  latitude_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  latitude_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  latitude_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  latitude_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  latitude_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  latitude_gte?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  longitude_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  longitude_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  longitude_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  longitude_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  longitude_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  longitude_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  longitude_gte?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
};

export type LocationWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Message = Node & {
  __typename?: 'Message';
  id: Scalars['ID'];
  author: User;
  chat: Chat;
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  isSendByMe: Scalars['Boolean'];
  optimisticallyAdded: Scalars['Boolean'];
  optimisticallyCreated: Scalars['Boolean'];
  hasOptimisticError: Scalars['Boolean'];
};

/** A connection to a list of items. */
export type MessageConnection = {
  __typename?: 'MessageConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<MessageEdge>>;
  aggregate: AggregateMessage;
};

export type MessageCreateInput = {
  id?: Maybe<Scalars['ID']>;
  content: Scalars['String'];
  author: UserCreateOneInput;
  chat: ChatCreateOneWithoutMessagesInput;
};

export type MessageCreateManyWithoutChatInput = {
  create?: Maybe<Array<MessageCreateWithoutChatInput>>;
  connect?: Maybe<Array<MessageWhereUniqueInput>>;
};

export type MessageCreateWithoutChatInput = {
  id?: Maybe<Scalars['ID']>;
  content: Scalars['String'];
  author: UserCreateOneInput;
};

/** An edge in a connection. */
export type MessageEdge = {
  __typename?: 'MessageEdge';
  /** The item at the end of the edge. */
  node: Message;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
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
  __typename?: 'MessagePreviousValues';
  id: Scalars['ID'];
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type MessageScalarWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<MessageScalarWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<MessageScalarWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<MessageScalarWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  content?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  content_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  content_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  content_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  content_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  content_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  content_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  content_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  content_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  content_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  content_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  content_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  content_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  content_not_ends_with?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
};

export type MessageSubscriptionPayload = {
  __typename?: 'MessageSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Message>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<MessagePreviousValues>;
};

export type MessageSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<MessageSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<MessageSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<MessageSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<MessageWhereInput>;
};

export type MessageUpdateInput = {
  content?: Maybe<Scalars['String']>;
  author?: Maybe<UserUpdateOneRequiredInput>;
  chat?: Maybe<ChatUpdateOneRequiredWithoutMessagesInput>;
};

export type MessageUpdateManyDataInput = {
  content?: Maybe<Scalars['String']>;
};

export type MessageUpdateManyMutationInput = {
  content?: Maybe<Scalars['String']>;
};

export type MessageUpdateManyWithoutChatInput = {
  create?: Maybe<Array<MessageCreateWithoutChatInput>>;
  connect?: Maybe<Array<MessageWhereUniqueInput>>;
  set?: Maybe<Array<MessageWhereUniqueInput>>;
  disconnect?: Maybe<Array<MessageWhereUniqueInput>>;
  delete?: Maybe<Array<MessageWhereUniqueInput>>;
  update?: Maybe<Array<MessageUpdateWithWhereUniqueWithoutChatInput>>;
  updateMany?: Maybe<Array<MessageUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<MessageScalarWhereInput>>;
  upsert?: Maybe<Array<MessageUpsertWithWhereUniqueWithoutChatInput>>;
};

export type MessageUpdateManyWithWhereNestedInput = {
  where: MessageScalarWhereInput;
  data: MessageUpdateManyDataInput;
};

export type MessageUpdateWithoutChatDataInput = {
  content?: Maybe<Scalars['String']>;
  author?: Maybe<UserUpdateOneRequiredInput>;
};

export type MessageUpdateWithWhereUniqueWithoutChatInput = {
  where: MessageWhereUniqueInput;
  data: MessageUpdateWithoutChatDataInput;
};

export type MessageUpsertWithWhereUniqueWithoutChatInput = {
  where: MessageWhereUniqueInput;
  update: MessageUpdateWithoutChatDataInput;
  create: MessageCreateWithoutChatInput;
};

export type MessageWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<MessageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<MessageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<MessageWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  content?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  content_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  content_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  content_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  content_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  content_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  content_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  content_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  content_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  content_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  content_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  content_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  content_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  content_not_ends_with?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  author?: Maybe<UserWhereInput>;
  chat?: Maybe<ChatWhereInput>;
};

export type MessageWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createMessage: Message;
  createPartyInvitation: PartyInvitation;
  createChat: Chat;
  createPlaylist: Playlist;
  createAlbum: Album;
  createImage: Image;
  createLocation: Location;
  createGame: Game;
  createArtist: Artist;
  createTrack: Track;
  createUser: User;
  createParty: Party;
  updateMessage?: Maybe<Message>;
  updatePartyInvitation?: Maybe<PartyInvitation>;
  updateChat?: Maybe<Chat>;
  updatePlaylist?: Maybe<Playlist>;
  updateAlbum?: Maybe<Album>;
  updateImage?: Maybe<Image>;
  updateLocation?: Maybe<Location>;
  updateGame?: Maybe<Game>;
  updateArtist?: Maybe<Artist>;
  updateTrack?: Maybe<Track>;
  updateUser?: Maybe<User>;
  updateParty?: Maybe<Party>;
  deleteMessage?: Maybe<Message>;
  deletePartyInvitation?: Maybe<PartyInvitation>;
  deleteChat?: Maybe<Chat>;
  deletePlaylist?: Maybe<Playlist>;
  deleteAlbum?: Maybe<Album>;
  deleteImage?: Maybe<Image>;
  deleteLocation?: Maybe<Location>;
  deleteGame?: Maybe<Game>;
  deleteArtist?: Maybe<Artist>;
  deleteTrack?: Maybe<Track>;
  deleteUser?: Maybe<User>;
  deleteParty?: Maybe<Party>;
  upsertMessage: Message;
  upsertPartyInvitation: PartyInvitation;
  upsertChat: Chat;
  upsertPlaylist: Playlist;
  upsertAlbum: Album;
  upsertImage: Image;
  upsertLocation: Location;
  upsertGame: Game;
  upsertArtist: Artist;
  upsertTrack: Track;
  upsertUser: User;
  upsertParty: Party;
  updateManyMessages: BatchPayload;
  updateManyPartyInvitations: BatchPayload;
  updateManyPlaylists: BatchPayload;
  updateManyImages: BatchPayload;
  updateManyLocations: BatchPayload;
  updateManyGames: BatchPayload;
  updateManyArtists: BatchPayload;
  updateManyTracks: BatchPayload;
  updateManyUsers: BatchPayload;
  updateManyParties: BatchPayload;
  deleteManyMessages: BatchPayload;
  deleteManyPartyInvitations: BatchPayload;
  deleteManyChats: BatchPayload;
  deleteManyPlaylists: BatchPayload;
  deleteManyAlbums: BatchPayload;
  deleteManyImages: BatchPayload;
  deleteManyLocations: BatchPayload;
  deleteManyGames: BatchPayload;
  deleteManyArtists: BatchPayload;
  deleteManyTracks: BatchPayload;
  deleteManyUsers: BatchPayload;
  deleteManyParties: BatchPayload;
  joinParty?: Maybe<Scalars['Boolean']>;
  signup: AuthPayload;
  login: AuthPayload;
  updateMe: User;
  inviteToFriends: User;
  requestReset?: Maybe<SuccessMessage>;
  resetPassword?: Maybe<AuthPayload>;
};

export type MutationCreateMessageArgs = {
  data: MessageCreateInput;
};

export type MutationCreatePartyInvitationArgs = {
  data: PartyInvitationCreateInput;
};

export type MutationCreateChatArgs = {
  data: ChatCreateInput;
};

export type MutationCreatePlaylistArgs = {
  data: PlaylistCreateInput;
};

export type MutationCreateAlbumArgs = {
  data: AlbumCreateInput;
};

export type MutationCreateImageArgs = {
  data: ImageCreateInput;
};

export type MutationCreateLocationArgs = {
  data: LocationCreateInput;
};

export type MutationCreateGameArgs = {
  data: GameCreateInput;
};

export type MutationCreateArtistArgs = {
  data: ArtistCreateInput;
};

export type MutationCreateTrackArgs = {
  data: TrackCreateInput;
};

export type MutationCreateUserArgs = {
  data: UserCreateInput;
};

export type MutationCreatePartyArgs = {
  data: PartyCreateInput;
};

export type MutationUpdateMessageArgs = {
  data: MessageUpdateInput;
  where: MessageWhereUniqueInput;
};

export type MutationUpdatePartyInvitationArgs = {
  data: PartyInvitationUpdateInput;
  where: PartyInvitationWhereUniqueInput;
};

export type MutationUpdateChatArgs = {
  data: ChatUpdateInput;
  where: ChatWhereUniqueInput;
};

export type MutationUpdatePlaylistArgs = {
  data: PlaylistUpdateInput;
  where: PlaylistWhereUniqueInput;
};

export type MutationUpdateAlbumArgs = {
  data: AlbumUpdateInput;
  where: AlbumWhereUniqueInput;
};

export type MutationUpdateImageArgs = {
  data: ImageUpdateInput;
  where: ImageWhereUniqueInput;
};

export type MutationUpdateLocationArgs = {
  data: LocationUpdateInput;
  where: LocationWhereUniqueInput;
};

export type MutationUpdateGameArgs = {
  data: GameUpdateInput;
  where: GameWhereUniqueInput;
};

export type MutationUpdateArtistArgs = {
  data: ArtistUpdateInput;
  where: ArtistWhereUniqueInput;
};

export type MutationUpdateTrackArgs = {
  data: TrackUpdateInput;
  where: TrackWhereUniqueInput;
};

export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type MutationUpdatePartyArgs = {
  data: PartyUpdateInput;
  where: PartyWhereUniqueInput;
};

export type MutationDeleteMessageArgs = {
  where: MessageWhereUniqueInput;
};

export type MutationDeletePartyInvitationArgs = {
  where: PartyInvitationWhereUniqueInput;
};

export type MutationDeleteChatArgs = {
  where: ChatWhereUniqueInput;
};

export type MutationDeletePlaylistArgs = {
  where: PlaylistWhereUniqueInput;
};

export type MutationDeleteAlbumArgs = {
  where: AlbumWhereUniqueInput;
};

export type MutationDeleteImageArgs = {
  where: ImageWhereUniqueInput;
};

export type MutationDeleteLocationArgs = {
  where: LocationWhereUniqueInput;
};

export type MutationDeleteGameArgs = {
  where: GameWhereUniqueInput;
};

export type MutationDeleteArtistArgs = {
  where: ArtistWhereUniqueInput;
};

export type MutationDeleteTrackArgs = {
  where: TrackWhereUniqueInput;
};

export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};

export type MutationDeletePartyArgs = {
  where: PartyWhereUniqueInput;
};

export type MutationUpsertMessageArgs = {
  where: MessageWhereUniqueInput;
  create: MessageCreateInput;
  update: MessageUpdateInput;
};

export type MutationUpsertPartyInvitationArgs = {
  where: PartyInvitationWhereUniqueInput;
  create: PartyInvitationCreateInput;
  update: PartyInvitationUpdateInput;
};

export type MutationUpsertChatArgs = {
  where: ChatWhereUniqueInput;
  create: ChatCreateInput;
  update: ChatUpdateInput;
};

export type MutationUpsertPlaylistArgs = {
  where: PlaylistWhereUniqueInput;
  create: PlaylistCreateInput;
  update: PlaylistUpdateInput;
};

export type MutationUpsertAlbumArgs = {
  where: AlbumWhereUniqueInput;
  create: AlbumCreateInput;
  update: AlbumUpdateInput;
};

export type MutationUpsertImageArgs = {
  where: ImageWhereUniqueInput;
  create: ImageCreateInput;
  update: ImageUpdateInput;
};

export type MutationUpsertLocationArgs = {
  where: LocationWhereUniqueInput;
  create: LocationCreateInput;
  update: LocationUpdateInput;
};

export type MutationUpsertGameArgs = {
  where: GameWhereUniqueInput;
  create: GameCreateInput;
  update: GameUpdateInput;
};

export type MutationUpsertArtistArgs = {
  where: ArtistWhereUniqueInput;
  create: ArtistCreateInput;
  update: ArtistUpdateInput;
};

export type MutationUpsertTrackArgs = {
  where: TrackWhereUniqueInput;
  create: TrackCreateInput;
  update: TrackUpdateInput;
};

export type MutationUpsertUserArgs = {
  where: UserWhereUniqueInput;
  create: UserCreateInput;
  update: UserUpdateInput;
};

export type MutationUpsertPartyArgs = {
  where: PartyWhereUniqueInput;
  create: PartyCreateInput;
  update: PartyUpdateInput;
};

export type MutationUpdateManyMessagesArgs = {
  data: MessageUpdateManyMutationInput;
  where?: Maybe<MessageWhereInput>;
};

export type MutationUpdateManyPartyInvitationsArgs = {
  data: PartyInvitationUpdateManyMutationInput;
  where?: Maybe<PartyInvitationWhereInput>;
};

export type MutationUpdateManyPlaylistsArgs = {
  data: PlaylistUpdateManyMutationInput;
  where?: Maybe<PlaylistWhereInput>;
};

export type MutationUpdateManyImagesArgs = {
  data: ImageUpdateManyMutationInput;
  where?: Maybe<ImageWhereInput>;
};

export type MutationUpdateManyLocationsArgs = {
  data: LocationUpdateManyMutationInput;
  where?: Maybe<LocationWhereInput>;
};

export type MutationUpdateManyGamesArgs = {
  data: GameUpdateManyMutationInput;
  where?: Maybe<GameWhereInput>;
};

export type MutationUpdateManyArtistsArgs = {
  data: ArtistUpdateManyMutationInput;
  where?: Maybe<ArtistWhereInput>;
};

export type MutationUpdateManyTracksArgs = {
  data: TrackUpdateManyMutationInput;
  where?: Maybe<TrackWhereInput>;
};

export type MutationUpdateManyUsersArgs = {
  data: UserUpdateManyMutationInput;
  where?: Maybe<UserWhereInput>;
};

export type MutationUpdateManyPartiesArgs = {
  data: PartyUpdateManyMutationInput;
  where?: Maybe<PartyWhereInput>;
};

export type MutationDeleteManyMessagesArgs = {
  where?: Maybe<MessageWhereInput>;
};

export type MutationDeleteManyPartyInvitationsArgs = {
  where?: Maybe<PartyInvitationWhereInput>;
};

export type MutationDeleteManyChatsArgs = {
  where?: Maybe<ChatWhereInput>;
};

export type MutationDeleteManyPlaylistsArgs = {
  where?: Maybe<PlaylistWhereInput>;
};

export type MutationDeleteManyAlbumsArgs = {
  where?: Maybe<AlbumWhereInput>;
};

export type MutationDeleteManyImagesArgs = {
  where?: Maybe<ImageWhereInput>;
};

export type MutationDeleteManyLocationsArgs = {
  where?: Maybe<LocationWhereInput>;
};

export type MutationDeleteManyGamesArgs = {
  where?: Maybe<GameWhereInput>;
};

export type MutationDeleteManyArtistsArgs = {
  where?: Maybe<ArtistWhereInput>;
};

export type MutationDeleteManyTracksArgs = {
  where?: Maybe<TrackWhereInput>;
};

export type MutationDeleteManyUsersArgs = {
  where?: Maybe<UserWhereInput>;
};

export type MutationDeleteManyPartiesArgs = {
  where?: Maybe<PartyWhereInput>;
};

export type MutationJoinPartyArgs = {
  where: JoinPartyWhereInput;
};

export type MutationSignupArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MutationUpdateMeArgs = {
  name?: Maybe<Scalars['String']>;
};

export type MutationInviteToFriendsArgs = {
  sender: Scalars['ID'];
  receiver: Scalars['ID'];
};

export type MutationRequestResetArgs = {
  email: Scalars['String'];
};

export type MutationResetPasswordArgs = {
  resetToken: Scalars['String'];
  password: Scalars['String'];
  confirmPassword: Scalars['String'];
};

export enum MutationType {
  Created = 'CREATED',
  Updated = 'UPDATED',
  Deleted = 'DELETED'
}

/** An object with an ID */
export type Node = {
  __typename?: 'Node';
  /** The id of the object. */
  id: Scalars['ID'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
};

export type Party = Node & {
  __typename?: 'Party';
  id: Scalars['ID'];
  title: Scalars['String'];
  normalizedTitle: Scalars['String'];
  description: Scalars['String'];
  author: User;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  location: Location;
  games?: Maybe<Array<Game>>;
  colorTint: Scalars['String'];
  isPublic?: Maybe<Scalars['Boolean']>;
  members?: Maybe<Array<User>>;
  start: Scalars['DateTime'];
  end: Scalars['DateTime'];
  inviteSecret?: Maybe<Scalars['String']>;
};

export type PartyGamesArgs = {
  where?: Maybe<GameWhereInput>;
  orderBy?: Maybe<GameOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type PartyMembersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type PartyConnection = {
  __typename?: 'PartyConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<PartyEdge>>;
  aggregate: AggregateParty;
};

export type PartyCreateInput = {
  id?: Maybe<Scalars['ID']>;
  title: Scalars['String'];
  normalizedTitle: Scalars['String'];
  description: Scalars['String'];
  colorTint: Scalars['String'];
  isPublic?: Maybe<Scalars['Boolean']>;
  start?: Maybe<Scalars['DateTime']>;
  end?: Maybe<Scalars['DateTime']>;
  inviteSecret?: Maybe<Scalars['String']>;
  author: UserCreateOneInput;
  location: LocationCreateOneInput;
  games?: Maybe<GameCreateManyInput>;
  members?: Maybe<UserCreateManyWithoutPartiesInput>;
};

export type PartyCreateManyWithoutMembersInput = {
  create?: Maybe<Array<PartyCreateWithoutMembersInput>>;
  connect?: Maybe<Array<PartyWhereUniqueInput>>;
};

export type PartyCreateOneInput = {
  create?: Maybe<PartyCreateInput>;
  connect?: Maybe<PartyWhereUniqueInput>;
};

export type PartyCreateWithoutMembersInput = {
  id?: Maybe<Scalars['ID']>;
  title: Scalars['String'];
  normalizedTitle: Scalars['String'];
  description: Scalars['String'];
  colorTint: Scalars['String'];
  isPublic?: Maybe<Scalars['Boolean']>;
  start?: Maybe<Scalars['DateTime']>;
  end?: Maybe<Scalars['DateTime']>;
  inviteSecret?: Maybe<Scalars['String']>;
  author: UserCreateOneInput;
  location: LocationCreateOneInput;
  games?: Maybe<GameCreateManyInput>;
};

/** An edge in a connection. */
export type PartyEdge = {
  __typename?: 'PartyEdge';
  /** The item at the end of the edge. */
  node: Party;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type PartyInvitation = Node & {
  __typename?: 'PartyInvitation';
  id: Scalars['ID'];
  invitedBy: User;
  user: User;
  party: Party;
  invitedUserId: Scalars['String'];
  partyId: Scalars['String'];
  createdAt: Scalars['DateTime'];
};

/** A connection to a list of items. */
export type PartyInvitationConnection = {
  __typename?: 'PartyInvitationConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<PartyInvitationEdge>>;
  aggregate: AggregatePartyInvitation;
};

export type PartyInvitationCreateInput = {
  id?: Maybe<Scalars['ID']>;
  invitedUserId: Scalars['String'];
  partyId: Scalars['String'];
  invitedBy: UserCreateOneInput;
  user: UserCreateOneWithoutPendingPartyInvitationsInput;
  party: PartyCreateOneInput;
};

export type PartyInvitationCreateManyWithoutUserInput = {
  create?: Maybe<Array<PartyInvitationCreateWithoutUserInput>>;
  connect?: Maybe<Array<PartyInvitationWhereUniqueInput>>;
};

export type PartyInvitationCreateWithoutUserInput = {
  id?: Maybe<Scalars['ID']>;
  invitedUserId: Scalars['String'];
  partyId: Scalars['String'];
  invitedBy: UserCreateOneInput;
  party: PartyCreateOneInput;
};

/** An edge in a connection. */
export type PartyInvitationEdge = {
  __typename?: 'PartyInvitationEdge';
  /** The item at the end of the edge. */
  node: PartyInvitation;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
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
  __typename?: 'PartyInvitationPreviousValues';
  id: Scalars['ID'];
  invitedUserId: Scalars['String'];
  partyId: Scalars['String'];
  createdAt: Scalars['DateTime'];
};

export type PartyInvitationScalarWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PartyInvitationScalarWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PartyInvitationScalarWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PartyInvitationScalarWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  invitedUserId?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  invitedUserId_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  invitedUserId_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  invitedUserId_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  invitedUserId_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  invitedUserId_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  invitedUserId_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  invitedUserId_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  invitedUserId_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  invitedUserId_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  invitedUserId_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  invitedUserId_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  invitedUserId_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  invitedUserId_not_ends_with?: Maybe<Scalars['String']>;
  partyId?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  partyId_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  partyId_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  partyId_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  partyId_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  partyId_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  partyId_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  partyId_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  partyId_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  partyId_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  partyId_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  partyId_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  partyId_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  partyId_not_ends_with?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
};

export type PartyInvitationSubscriptionPayload = {
  __typename?: 'PartyInvitationSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<PartyInvitation>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<PartyInvitationPreviousValues>;
};

export type PartyInvitationSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PartyInvitationSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PartyInvitationSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PartyInvitationSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<PartyInvitationWhereInput>;
};

export type PartyInvitationUpdateInput = {
  invitedUserId?: Maybe<Scalars['String']>;
  partyId?: Maybe<Scalars['String']>;
  invitedBy?: Maybe<UserUpdateOneRequiredInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutPendingPartyInvitationsInput>;
  party?: Maybe<PartyUpdateOneRequiredInput>;
};

export type PartyInvitationUpdateManyDataInput = {
  invitedUserId?: Maybe<Scalars['String']>;
  partyId?: Maybe<Scalars['String']>;
};

export type PartyInvitationUpdateManyMutationInput = {
  invitedUserId?: Maybe<Scalars['String']>;
  partyId?: Maybe<Scalars['String']>;
};

export type PartyInvitationUpdateManyWithoutUserInput = {
  create?: Maybe<Array<PartyInvitationCreateWithoutUserInput>>;
  connect?: Maybe<Array<PartyInvitationWhereUniqueInput>>;
  set?: Maybe<Array<PartyInvitationWhereUniqueInput>>;
  disconnect?: Maybe<Array<PartyInvitationWhereUniqueInput>>;
  delete?: Maybe<Array<PartyInvitationWhereUniqueInput>>;
  update?: Maybe<Array<PartyInvitationUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<PartyInvitationUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<PartyInvitationScalarWhereInput>>;
  upsert?: Maybe<Array<PartyInvitationUpsertWithWhereUniqueWithoutUserInput>>;
};

export type PartyInvitationUpdateManyWithWhereNestedInput = {
  where: PartyInvitationScalarWhereInput;
  data: PartyInvitationUpdateManyDataInput;
};

export type PartyInvitationUpdateWithoutUserDataInput = {
  invitedUserId?: Maybe<Scalars['String']>;
  partyId?: Maybe<Scalars['String']>;
  invitedBy?: Maybe<UserUpdateOneRequiredInput>;
  party?: Maybe<PartyUpdateOneRequiredInput>;
};

export type PartyInvitationUpdateWithWhereUniqueWithoutUserInput = {
  where: PartyInvitationWhereUniqueInput;
  data: PartyInvitationUpdateWithoutUserDataInput;
};

export type PartyInvitationUpsertWithWhereUniqueWithoutUserInput = {
  where: PartyInvitationWhereUniqueInput;
  update: PartyInvitationUpdateWithoutUserDataInput;
  create: PartyInvitationCreateWithoutUserInput;
};

export type PartyInvitationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PartyInvitationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PartyInvitationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PartyInvitationWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  invitedUserId?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  invitedUserId_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  invitedUserId_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  invitedUserId_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  invitedUserId_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  invitedUserId_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  invitedUserId_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  invitedUserId_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  invitedUserId_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  invitedUserId_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  invitedUserId_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  invitedUserId_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  invitedUserId_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  invitedUserId_not_ends_with?: Maybe<Scalars['String']>;
  partyId?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  partyId_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  partyId_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  partyId_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  partyId_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  partyId_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  partyId_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  partyId_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  partyId_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  partyId_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  partyId_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  partyId_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  partyId_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  partyId_not_ends_with?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  invitedBy?: Maybe<UserWhereInput>;
  user?: Maybe<UserWhereInput>;
  party?: Maybe<PartyWhereInput>;
};

export type PartyInvitationWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
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
  __typename?: 'PartyPreviousValues';
  id: Scalars['ID'];
  title: Scalars['String'];
  normalizedTitle: Scalars['String'];
  description: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  colorTint: Scalars['String'];
  isPublic?: Maybe<Scalars['Boolean']>;
  start: Scalars['DateTime'];
  end: Scalars['DateTime'];
  inviteSecret?: Maybe<Scalars['String']>;
};

export type PartyScalarWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PartyScalarWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PartyScalarWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PartyScalarWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  title_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  title_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  title_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  title_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  title_not_ends_with?: Maybe<Scalars['String']>;
  normalizedTitle?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  normalizedTitle_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  normalizedTitle_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  normalizedTitle_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  normalizedTitle_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  normalizedTitle_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  normalizedTitle_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  normalizedTitle_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  normalizedTitle_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  normalizedTitle_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  normalizedTitle_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  normalizedTitle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  normalizedTitle_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  normalizedTitle_not_ends_with?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  description_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  description_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  description_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  description_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  description_not_ends_with?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  colorTint?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  colorTint_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  colorTint_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  colorTint_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  colorTint_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  colorTint_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  colorTint_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  colorTint_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  colorTint_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  colorTint_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  colorTint_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  colorTint_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  colorTint_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  colorTint_not_ends_with?: Maybe<Scalars['String']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isPublic_not?: Maybe<Scalars['Boolean']>;
  start?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  start_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  start_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  start_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  start_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  start_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  start_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  start_gte?: Maybe<Scalars['DateTime']>;
  end?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  end_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  end_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  end_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  end_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  end_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  end_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  end_gte?: Maybe<Scalars['DateTime']>;
  inviteSecret?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  inviteSecret_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  inviteSecret_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  inviteSecret_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  inviteSecret_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  inviteSecret_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  inviteSecret_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  inviteSecret_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  inviteSecret_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  inviteSecret_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  inviteSecret_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  inviteSecret_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  inviteSecret_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  inviteSecret_not_ends_with?: Maybe<Scalars['String']>;
};

export type PartySubscriptionPayload = {
  __typename?: 'PartySubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Party>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<PartyPreviousValues>;
};

export type PartySubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PartySubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PartySubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PartySubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<PartyWhereInput>;
};

export type PartyUpdateDataInput = {
  title?: Maybe<Scalars['String']>;
  normalizedTitle?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  colorTint?: Maybe<Scalars['String']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  start?: Maybe<Scalars['DateTime']>;
  end?: Maybe<Scalars['DateTime']>;
  inviteSecret?: Maybe<Scalars['String']>;
  author?: Maybe<UserUpdateOneRequiredInput>;
  location?: Maybe<LocationUpdateOneRequiredInput>;
  games?: Maybe<GameUpdateManyInput>;
  members?: Maybe<UserUpdateManyWithoutPartiesInput>;
};

export type PartyUpdateInput = {
  title?: Maybe<Scalars['String']>;
  normalizedTitle?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  colorTint?: Maybe<Scalars['String']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  start?: Maybe<Scalars['DateTime']>;
  end?: Maybe<Scalars['DateTime']>;
  inviteSecret?: Maybe<Scalars['String']>;
  author?: Maybe<UserUpdateOneRequiredInput>;
  location?: Maybe<LocationUpdateOneRequiredInput>;
  games?: Maybe<GameUpdateManyInput>;
  members?: Maybe<UserUpdateManyWithoutPartiesInput>;
};

export type PartyUpdateManyDataInput = {
  title?: Maybe<Scalars['String']>;
  normalizedTitle?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  colorTint?: Maybe<Scalars['String']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  start?: Maybe<Scalars['DateTime']>;
  end?: Maybe<Scalars['DateTime']>;
  inviteSecret?: Maybe<Scalars['String']>;
};

export type PartyUpdateManyMutationInput = {
  title?: Maybe<Scalars['String']>;
  normalizedTitle?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  colorTint?: Maybe<Scalars['String']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  start?: Maybe<Scalars['DateTime']>;
  end?: Maybe<Scalars['DateTime']>;
  inviteSecret?: Maybe<Scalars['String']>;
};

export type PartyUpdateManyWithoutMembersInput = {
  create?: Maybe<Array<PartyCreateWithoutMembersInput>>;
  connect?: Maybe<Array<PartyWhereUniqueInput>>;
  set?: Maybe<Array<PartyWhereUniqueInput>>;
  disconnect?: Maybe<Array<PartyWhereUniqueInput>>;
  delete?: Maybe<Array<PartyWhereUniqueInput>>;
  update?: Maybe<Array<PartyUpdateWithWhereUniqueWithoutMembersInput>>;
  updateMany?: Maybe<Array<PartyUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<PartyScalarWhereInput>>;
  upsert?: Maybe<Array<PartyUpsertWithWhereUniqueWithoutMembersInput>>;
};

export type PartyUpdateManyWithWhereNestedInput = {
  where: PartyScalarWhereInput;
  data: PartyUpdateManyDataInput;
};

export type PartyUpdateOneRequiredInput = {
  create?: Maybe<PartyCreateInput>;
  connect?: Maybe<PartyWhereUniqueInput>;
  update?: Maybe<PartyUpdateDataInput>;
  upsert?: Maybe<PartyUpsertNestedInput>;
};

export type PartyUpdateWithoutMembersDataInput = {
  title?: Maybe<Scalars['String']>;
  normalizedTitle?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  colorTint?: Maybe<Scalars['String']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  start?: Maybe<Scalars['DateTime']>;
  end?: Maybe<Scalars['DateTime']>;
  inviteSecret?: Maybe<Scalars['String']>;
  author?: Maybe<UserUpdateOneRequiredInput>;
  location?: Maybe<LocationUpdateOneRequiredInput>;
  games?: Maybe<GameUpdateManyInput>;
};

export type PartyUpdateWithWhereUniqueWithoutMembersInput = {
  where: PartyWhereUniqueInput;
  data: PartyUpdateWithoutMembersDataInput;
};

export type PartyUpsertNestedInput = {
  update: PartyUpdateDataInput;
  create: PartyCreateInput;
};

export type PartyUpsertWithWhereUniqueWithoutMembersInput = {
  where: PartyWhereUniqueInput;
  update: PartyUpdateWithoutMembersDataInput;
  create: PartyCreateWithoutMembersInput;
};

export type PartyUserInviteInput = {
  __typename?: 'PartyUserInviteInput';
  inviteSecret: Scalars['String'];
  user: User;
};

export type PartyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PartyWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PartyWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PartyWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  title_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  title_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  title_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  title_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  title_not_ends_with?: Maybe<Scalars['String']>;
  normalizedTitle?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  normalizedTitle_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  normalizedTitle_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  normalizedTitle_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  normalizedTitle_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  normalizedTitle_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  normalizedTitle_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  normalizedTitle_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  normalizedTitle_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  normalizedTitle_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  normalizedTitle_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  normalizedTitle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  normalizedTitle_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  normalizedTitle_not_ends_with?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  description_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  description_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  description_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  description_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  description_not_ends_with?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  colorTint?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  colorTint_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  colorTint_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  colorTint_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  colorTint_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  colorTint_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  colorTint_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  colorTint_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  colorTint_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  colorTint_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  colorTint_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  colorTint_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  colorTint_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  colorTint_not_ends_with?: Maybe<Scalars['String']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isPublic_not?: Maybe<Scalars['Boolean']>;
  start?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  start_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  start_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  start_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  start_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  start_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  start_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  start_gte?: Maybe<Scalars['DateTime']>;
  end?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  end_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  end_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  end_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  end_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  end_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  end_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  end_gte?: Maybe<Scalars['DateTime']>;
  inviteSecret?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  inviteSecret_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  inviteSecret_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  inviteSecret_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  inviteSecret_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  inviteSecret_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  inviteSecret_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  inviteSecret_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  inviteSecret_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  inviteSecret_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  inviteSecret_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  inviteSecret_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  inviteSecret_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  inviteSecret_not_ends_with?: Maybe<Scalars['String']>;
  author?: Maybe<UserWhereInput>;
  location?: Maybe<LocationWhereInput>;
  games_every?: Maybe<GameWhereInput>;
  games_some?: Maybe<GameWhereInput>;
  games_none?: Maybe<GameWhereInput>;
  members_every?: Maybe<UserWhereInput>;
  members_some?: Maybe<UserWhereInput>;
  members_none?: Maybe<UserWhereInput>;
};

export type PartyWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  inviteSecret?: Maybe<Scalars['String']>;
};

export type Playlist = Node & {
  __typename?: 'Playlist';
  id: Scalars['ID'];
  playlist_id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  tracks?: Maybe<Array<Track>>;
  isTemporary?: Maybe<Scalars['Boolean']>;
};

export type PlaylistTracksArgs = {
  where?: Maybe<TrackWhereInput>;
  orderBy?: Maybe<TrackOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type PlaylistConnection = {
  __typename?: 'PlaylistConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<PlaylistEdge>>;
  aggregate: AggregatePlaylist;
};

export type PlaylistCreateInput = {
  id?: Maybe<Scalars['ID']>;
  playlist_id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  isTemporary?: Maybe<Scalars['Boolean']>;
  tracks?: Maybe<TrackCreateManyInput>;
};

/** An edge in a connection. */
export type PlaylistEdge = {
  __typename?: 'PlaylistEdge';
  /** The item at the end of the edge. */
  node: Playlist;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export enum PlaylistOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PlaylistIdAsc = 'playlist_id_ASC',
  PlaylistIdDesc = 'playlist_id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  IsTemporaryAsc = 'isTemporary_ASC',
  IsTemporaryDesc = 'isTemporary_DESC'
}

export type PlaylistPreviousValues = {
  __typename?: 'PlaylistPreviousValues';
  id: Scalars['ID'];
  playlist_id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  isTemporary?: Maybe<Scalars['Boolean']>;
};

export type PlaylistSubscriptionPayload = {
  __typename?: 'PlaylistSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Playlist>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<PlaylistPreviousValues>;
};

export type PlaylistSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PlaylistSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PlaylistSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PlaylistSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<PlaylistWhereInput>;
};

export type PlaylistUpdateInput = {
  playlist_id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  isTemporary?: Maybe<Scalars['Boolean']>;
  tracks?: Maybe<TrackUpdateManyInput>;
};

export type PlaylistUpdateManyMutationInput = {
  playlist_id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  isTemporary?: Maybe<Scalars['Boolean']>;
};

export type PlaylistWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PlaylistWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PlaylistWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PlaylistWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  playlist_id?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  playlist_id_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  playlist_id_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  playlist_id_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  playlist_id_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  playlist_id_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  playlist_id_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  playlist_id_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  playlist_id_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  playlist_id_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  playlist_id_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  playlist_id_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  playlist_id_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  playlist_id_not_ends_with?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>;
  isTemporary?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isTemporary_not?: Maybe<Scalars['Boolean']>;
  tracks_every?: Maybe<TrackWhereInput>;
  tracks_some?: Maybe<TrackWhereInput>;
  tracks_none?: Maybe<TrackWhereInput>;
};

export type PlaylistWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  playlist_id?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  messages: Array<Maybe<Message>>;
  partyInvitations: Array<Maybe<PartyInvitation>>;
  chats: Array<Maybe<Chat>>;
  playlists: Array<Maybe<Playlist>>;
  albums: Array<Maybe<Album>>;
  images: Array<Maybe<Image>>;
  locations: Array<Maybe<Location>>;
  games: Array<Maybe<Game>>;
  artists: Array<Maybe<Artist>>;
  tracks: Array<Maybe<Track>>;
  users: Array<Maybe<User>>;
  parties: Array<Maybe<Party>>;
  message?: Maybe<Message>;
  partyInvitation?: Maybe<PartyInvitation>;
  chat?: Maybe<Chat>;
  playlist?: Maybe<Playlist>;
  album?: Maybe<Album>;
  image?: Maybe<Image>;
  location?: Maybe<Location>;
  game?: Maybe<Game>;
  artist?: Maybe<Artist>;
  track?: Maybe<Track>;
  user?: Maybe<User>;
  party?: Maybe<Party>;
  messagesConnection: MessageConnection;
  partyInvitationsConnection: PartyInvitationConnection;
  chatsConnection: ChatConnection;
  playlistsConnection: PlaylistConnection;
  albumsConnection: AlbumConnection;
  imagesConnection: ImageConnection;
  locationsConnection: LocationConnection;
  gamesConnection: GameConnection;
  artistsConnection: ArtistConnection;
  tracksConnection: TrackConnection;
  usersConnection: UserConnection;
  partiesConnection: PartyConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  hasParties: Scalars['Boolean'];
  canJoinParty?: Maybe<Scalars['Boolean']>;
  me?: Maybe<User>;
  getUsers: Array<Maybe<User>>;
  paginateUsers: UserConnection;
  temp__?: Maybe<Scalars['Boolean']>;
};

export type QueryMessagesArgs = {
  where?: Maybe<MessageWhereInput>;
  orderBy?: Maybe<MessageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryPartyInvitationsArgs = {
  where?: Maybe<PartyInvitationWhereInput>;
  orderBy?: Maybe<PartyInvitationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryChatsArgs = {
  where?: Maybe<ChatWhereInput>;
  orderBy?: Maybe<ChatOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryPlaylistsArgs = {
  where?: Maybe<PlaylistWhereInput>;
  orderBy?: Maybe<PlaylistOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryAlbumsArgs = {
  where?: Maybe<AlbumWhereInput>;
  orderBy?: Maybe<AlbumOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryImagesArgs = {
  where?: Maybe<ImageWhereInput>;
  orderBy?: Maybe<ImageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryLocationsArgs = {
  where?: Maybe<LocationWhereInput>;
  orderBy?: Maybe<LocationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryGamesArgs = {
  where?: Maybe<GameWhereInput>;
  orderBy?: Maybe<GameOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryArtistsArgs = {
  where?: Maybe<ArtistWhereInput>;
  orderBy?: Maybe<ArtistOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryTracksArgs = {
  where?: Maybe<TrackWhereInput>;
  orderBy?: Maybe<TrackOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryUsersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryPartiesArgs = {
  where?: Maybe<PartyWhereInput>;
  orderBy?: Maybe<PartyOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryMessageArgs = {
  where: MessageWhereUniqueInput;
};

export type QueryPartyInvitationArgs = {
  where: PartyInvitationWhereUniqueInput;
};

export type QueryChatArgs = {
  where: ChatWhereUniqueInput;
};

export type QueryPlaylistArgs = {
  where: PlaylistWhereUniqueInput;
};

export type QueryAlbumArgs = {
  where: AlbumWhereUniqueInput;
};

export type QueryImageArgs = {
  where: ImageWhereUniqueInput;
};

export type QueryLocationArgs = {
  where: LocationWhereUniqueInput;
};

export type QueryGameArgs = {
  where: GameWhereUniqueInput;
};

export type QueryArtistArgs = {
  where: ArtistWhereUniqueInput;
};

export type QueryTrackArgs = {
  where: TrackWhereUniqueInput;
};

export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export type QueryPartyArgs = {
  where: PartyWhereUniqueInput;
};

export type QueryMessagesConnectionArgs = {
  where?: Maybe<MessageWhereInput>;
  orderBy?: Maybe<MessageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryPartyInvitationsConnectionArgs = {
  where?: Maybe<PartyInvitationWhereInput>;
  orderBy?: Maybe<PartyInvitationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryChatsConnectionArgs = {
  where?: Maybe<ChatWhereInput>;
  orderBy?: Maybe<ChatOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryPlaylistsConnectionArgs = {
  where?: Maybe<PlaylistWhereInput>;
  orderBy?: Maybe<PlaylistOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryAlbumsConnectionArgs = {
  where?: Maybe<AlbumWhereInput>;
  orderBy?: Maybe<AlbumOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryImagesConnectionArgs = {
  where?: Maybe<ImageWhereInput>;
  orderBy?: Maybe<ImageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryLocationsConnectionArgs = {
  where?: Maybe<LocationWhereInput>;
  orderBy?: Maybe<LocationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryGamesConnectionArgs = {
  where?: Maybe<GameWhereInput>;
  orderBy?: Maybe<GameOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryArtistsConnectionArgs = {
  where?: Maybe<ArtistWhereInput>;
  orderBy?: Maybe<ArtistOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryTracksConnectionArgs = {
  where?: Maybe<TrackWhereInput>;
  orderBy?: Maybe<TrackOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryUsersConnectionArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryPartiesConnectionArgs = {
  where?: Maybe<PartyWhereInput>;
  orderBy?: Maybe<PartyOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryNodeArgs = {
  id: Scalars['ID'];
};

export type QueryCanJoinPartyArgs = {
  userId: Scalars['String'];
  inviteSecret: Scalars['String'];
  partyId: Scalars['String'];
};

export type QueryGetUsersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryPaginateUsersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export enum SocialMediaType {
  Facebook = 'FACEBOOK',
  Spotify = 'SPOTIFY',
  Twitter = 'TWITTER'
}

export type Subscription = {
  __typename?: 'Subscription';
  message?: Maybe<MessageSubscriptionPayload>;
  partyInvitation?: Maybe<PartyInvitationSubscriptionPayload>;
  chat?: Maybe<ChatSubscriptionPayload>;
  playlist?: Maybe<PlaylistSubscriptionPayload>;
  album?: Maybe<AlbumSubscriptionPayload>;
  image?: Maybe<ImageSubscriptionPayload>;
  location?: Maybe<LocationSubscriptionPayload>;
  game?: Maybe<GameSubscriptionPayload>;
  artist?: Maybe<ArtistSubscriptionPayload>;
  track?: Maybe<TrackSubscriptionPayload>;
  user?: Maybe<UserSubscriptionPayload>;
  party?: Maybe<PartySubscriptionPayload>;
};

export type SubscriptionMessageArgs = {
  where?: Maybe<MessageSubscriptionWhereInput>;
};

export type SubscriptionPartyInvitationArgs = {
  where?: Maybe<PartyInvitationSubscriptionWhereInput>;
};

export type SubscriptionChatArgs = {
  where?: Maybe<ChatSubscriptionWhereInput>;
};

export type SubscriptionPlaylistArgs = {
  where?: Maybe<PlaylistSubscriptionWhereInput>;
};

export type SubscriptionAlbumArgs = {
  where?: Maybe<AlbumSubscriptionWhereInput>;
};

export type SubscriptionImageArgs = {
  where?: Maybe<ImageSubscriptionWhereInput>;
};

export type SubscriptionLocationArgs = {
  where?: Maybe<LocationSubscriptionWhereInput>;
};

export type SubscriptionGameArgs = {
  where?: Maybe<GameSubscriptionWhereInput>;
};

export type SubscriptionArtistArgs = {
  where?: Maybe<ArtistSubscriptionWhereInput>;
};

export type SubscriptionTrackArgs = {
  where?: Maybe<TrackSubscriptionWhereInput>;
};

export type SubscriptionUserArgs = {
  where?: Maybe<UserSubscriptionWhereInput>;
};

export type SubscriptionPartyArgs = {
  where?: Maybe<PartySubscriptionWhereInput>;
};

export type SuccessMessage = {
  __typename?: 'SuccessMessage';
  message: Scalars['String'];
};

export type Track = Node & {
  __typename?: 'Track';
  id: Scalars['ID'];
  name: Scalars['String'];
  album: Album;
  artists?: Maybe<Array<Artist>>;
  duration: Scalars['Int'];
  preview_url: Scalars['String'];
};

export type TrackArtistsArgs = {
  where?: Maybe<ArtistWhereInput>;
  orderBy?: Maybe<ArtistOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type TrackConnection = {
  __typename?: 'TrackConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<TrackEdge>>;
  aggregate: AggregateTrack;
};

export type TrackCreateInput = {
  id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  duration: Scalars['Int'];
  preview_url: Scalars['String'];
  album: AlbumCreateOneInput;
  artists?: Maybe<ArtistCreateManyInput>;
};

export type TrackCreateManyInput = {
  create?: Maybe<Array<TrackCreateInput>>;
  connect?: Maybe<Array<TrackWhereUniqueInput>>;
};

/** An edge in a connection. */
export type TrackEdge = {
  __typename?: 'TrackEdge';
  /** The item at the end of the edge. */
  node: Track;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
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
  __typename?: 'TrackPreviousValues';
  id: Scalars['ID'];
  name: Scalars['String'];
  duration: Scalars['Int'];
  preview_url: Scalars['String'];
};

export type TrackScalarWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TrackScalarWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TrackScalarWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TrackScalarWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  duration_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  duration_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  duration_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  duration_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  duration_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  duration_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  duration_gte?: Maybe<Scalars['Int']>;
  preview_url?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  preview_url_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  preview_url_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  preview_url_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  preview_url_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  preview_url_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  preview_url_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  preview_url_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  preview_url_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  preview_url_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  preview_url_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  preview_url_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  preview_url_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  preview_url_not_ends_with?: Maybe<Scalars['String']>;
};

export type TrackSubscriptionPayload = {
  __typename?: 'TrackSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Track>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<TrackPreviousValues>;
};

export type TrackSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TrackSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TrackSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TrackSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<TrackWhereInput>;
};

export type TrackUpdateDataInput = {
  name?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Int']>;
  preview_url?: Maybe<Scalars['String']>;
  album?: Maybe<AlbumUpdateOneRequiredInput>;
  artists?: Maybe<ArtistUpdateManyInput>;
};

export type TrackUpdateInput = {
  name?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Int']>;
  preview_url?: Maybe<Scalars['String']>;
  album?: Maybe<AlbumUpdateOneRequiredInput>;
  artists?: Maybe<ArtistUpdateManyInput>;
};

export type TrackUpdateManyDataInput = {
  name?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Int']>;
  preview_url?: Maybe<Scalars['String']>;
};

export type TrackUpdateManyInput = {
  create?: Maybe<Array<TrackCreateInput>>;
  connect?: Maybe<Array<TrackWhereUniqueInput>>;
  set?: Maybe<Array<TrackWhereUniqueInput>>;
  disconnect?: Maybe<Array<TrackWhereUniqueInput>>;
  delete?: Maybe<Array<TrackWhereUniqueInput>>;
  update?: Maybe<Array<TrackUpdateWithWhereUniqueNestedInput>>;
  updateMany?: Maybe<Array<TrackUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<TrackScalarWhereInput>>;
  upsert?: Maybe<Array<TrackUpsertWithWhereUniqueNestedInput>>;
};

export type TrackUpdateManyMutationInput = {
  name?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Int']>;
  preview_url?: Maybe<Scalars['String']>;
};

export type TrackUpdateManyWithWhereNestedInput = {
  where: TrackScalarWhereInput;
  data: TrackUpdateManyDataInput;
};

export type TrackUpdateWithWhereUniqueNestedInput = {
  where: TrackWhereUniqueInput;
  data: TrackUpdateDataInput;
};

export type TrackUpsertWithWhereUniqueNestedInput = {
  where: TrackWhereUniqueInput;
  update: TrackUpdateDataInput;
  create: TrackCreateInput;
};

export type TrackWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TrackWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TrackWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TrackWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  duration_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  duration_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  duration_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  duration_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  duration_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  duration_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  duration_gte?: Maybe<Scalars['Int']>;
  preview_url?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  preview_url_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  preview_url_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  preview_url_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  preview_url_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  preview_url_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  preview_url_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  preview_url_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  preview_url_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  preview_url_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  preview_url_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  preview_url_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  preview_url_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  preview_url_not_ends_with?: Maybe<Scalars['String']>;
  album?: Maybe<AlbumWhereInput>;
  artists_every?: Maybe<ArtistWhereInput>;
  artists_some?: Maybe<ArtistWhereInput>;
  artists_none?: Maybe<ArtistWhereInput>;
};

export type TrackWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type User = Node & {
  __typename?: 'User';
  id: Scalars['ID'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  parties?: Maybe<Array<Party>>;
  friends?: Maybe<Array<User>>;
  pendingFriendInvitations?: Maybe<Array<User>>;
  pendingPartyInvitations?: Maybe<Array<PartyInvitation>>;
  chats?: Maybe<Array<Chat>>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  lastOnline?: Maybe<Scalars['DateTime']>;
  deleted: Scalars['Boolean'];
  provider?: Maybe<SocialMediaType>;
  avatar?: Maybe<Scalars['String']>;
  thirdPartyId?: Maybe<Scalars['String']>;
  resetToken?: Maybe<Scalars['String']>;
  resetTokenExpiry?: Maybe<Scalars['DateTime']>;
  pendingInvitations?: Maybe<Array<User>>;
  status: UserStatus;
};

export type UserPartiesArgs = {
  where?: Maybe<PartyWhereInput>;
  orderBy?: Maybe<PartyOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type UserFriendsArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type UserPendingFriendInvitationsArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type UserPendingPartyInvitationsArgs = {
  where?: Maybe<PartyInvitationWhereInput>;
  orderBy?: Maybe<PartyInvitationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type UserChatsArgs = {
  where?: Maybe<ChatWhereInput>;
  orderBy?: Maybe<ChatOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type UserPendingInvitationsArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<UserEdge>>;
  aggregate: AggregateUser;
};

export type UserCreateInput = {
  id?: Maybe<Scalars['ID']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  lastOnline?: Maybe<Scalars['DateTime']>;
  deleted?: Maybe<Scalars['Boolean']>;
  provider?: Maybe<SocialMediaType>;
  avatar?: Maybe<Scalars['String']>;
  thirdPartyId?: Maybe<Scalars['String']>;
  resetToken?: Maybe<Scalars['String']>;
  resetTokenExpiry?: Maybe<Scalars['DateTime']>;
  parties?: Maybe<PartyCreateManyWithoutMembersInput>;
  friends?: Maybe<UserCreateManyInput>;
  pendingFriendInvitations?: Maybe<UserCreateManyInput>;
  pendingPartyInvitations?: Maybe<PartyInvitationCreateManyWithoutUserInput>;
  chats?: Maybe<ChatCreateManyWithoutMembersInput>;
};

export type UserCreateManyInput = {
  create?: Maybe<Array<UserCreateInput>>;
  connect?: Maybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateManyWithoutChatsInput = {
  create?: Maybe<Array<UserCreateWithoutChatsInput>>;
  connect?: Maybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateManyWithoutPartiesInput = {
  create?: Maybe<Array<UserCreateWithoutPartiesInput>>;
  connect?: Maybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInput = {
  create?: Maybe<UserCreateInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateOneWithoutPendingPartyInvitationsInput = {
  create?: Maybe<UserCreateWithoutPendingPartyInvitationsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateWithoutChatsInput = {
  id?: Maybe<Scalars['ID']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  lastOnline?: Maybe<Scalars['DateTime']>;
  deleted?: Maybe<Scalars['Boolean']>;
  provider?: Maybe<SocialMediaType>;
  avatar?: Maybe<Scalars['String']>;
  thirdPartyId?: Maybe<Scalars['String']>;
  resetToken?: Maybe<Scalars['String']>;
  resetTokenExpiry?: Maybe<Scalars['DateTime']>;
  parties?: Maybe<PartyCreateManyWithoutMembersInput>;
  friends?: Maybe<UserCreateManyInput>;
  pendingFriendInvitations?: Maybe<UserCreateManyInput>;
  pendingPartyInvitations?: Maybe<PartyInvitationCreateManyWithoutUserInput>;
};

export type UserCreateWithoutPartiesInput = {
  id?: Maybe<Scalars['ID']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  lastOnline?: Maybe<Scalars['DateTime']>;
  deleted?: Maybe<Scalars['Boolean']>;
  provider?: Maybe<SocialMediaType>;
  avatar?: Maybe<Scalars['String']>;
  thirdPartyId?: Maybe<Scalars['String']>;
  resetToken?: Maybe<Scalars['String']>;
  resetTokenExpiry?: Maybe<Scalars['DateTime']>;
  friends?: Maybe<UserCreateManyInput>;
  pendingFriendInvitations?: Maybe<UserCreateManyInput>;
  pendingPartyInvitations?: Maybe<PartyInvitationCreateManyWithoutUserInput>;
  chats?: Maybe<ChatCreateManyWithoutMembersInput>;
};

export type UserCreateWithoutPendingPartyInvitationsInput = {
  id?: Maybe<Scalars['ID']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  lastOnline?: Maybe<Scalars['DateTime']>;
  deleted?: Maybe<Scalars['Boolean']>;
  provider?: Maybe<SocialMediaType>;
  avatar?: Maybe<Scalars['String']>;
  thirdPartyId?: Maybe<Scalars['String']>;
  resetToken?: Maybe<Scalars['String']>;
  resetTokenExpiry?: Maybe<Scalars['DateTime']>;
  parties?: Maybe<PartyCreateManyWithoutMembersInput>;
  friends?: Maybe<UserCreateManyInput>;
  pendingFriendInvitations?: Maybe<UserCreateManyInput>;
  chats?: Maybe<ChatCreateManyWithoutMembersInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** The item at the end of the edge. */
  node: User;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
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
  __typename?: 'UserPreviousValues';
  id: Scalars['ID'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  lastOnline?: Maybe<Scalars['DateTime']>;
  deleted: Scalars['Boolean'];
  provider?: Maybe<SocialMediaType>;
  avatar?: Maybe<Scalars['String']>;
  thirdPartyId?: Maybe<Scalars['String']>;
  resetToken?: Maybe<Scalars['String']>;
  resetTokenExpiry?: Maybe<Scalars['DateTime']>;
};

export type UserScalarWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserScalarWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserScalarWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserScalarWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  email_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  email_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  email_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  email_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  email_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  email_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  email_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  email_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  email_not_ends_with?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  firstName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  firstName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  firstName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  firstName_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  firstName_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  firstName_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  firstName_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  firstName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  firstName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  firstName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  firstName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  firstName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  firstName_not_ends_with?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  lastName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  lastName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  lastName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  lastName_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  lastName_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  lastName_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  lastName_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  lastName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  lastName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  lastName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  lastName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  lastName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  lastName_not_ends_with?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  password_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  password_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  password_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  password_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  password_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  password_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  password_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  password_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  password_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  password_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  password_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  password_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  password_not_ends_with?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  lastOnline?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  lastOnline_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  lastOnline_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  lastOnline_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  lastOnline_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  lastOnline_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  lastOnline_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  lastOnline_gte?: Maybe<Scalars['DateTime']>;
  deleted?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  deleted_not?: Maybe<Scalars['Boolean']>;
  provider?: Maybe<SocialMediaType>;
  /** All values that are not equal to given value. */
  provider_not?: Maybe<SocialMediaType>;
  /** All values that are contained in given list. */
  provider_in?: Maybe<Array<SocialMediaType>>;
  /** All values that are not contained in given list. */
  provider_not_in?: Maybe<Array<SocialMediaType>>;
  avatar?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  avatar_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  avatar_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  avatar_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  avatar_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  avatar_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  avatar_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  avatar_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  avatar_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  avatar_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  avatar_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  avatar_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  avatar_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  avatar_not_ends_with?: Maybe<Scalars['String']>;
  thirdPartyId?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  thirdPartyId_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  thirdPartyId_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  thirdPartyId_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  thirdPartyId_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  thirdPartyId_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  thirdPartyId_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  thirdPartyId_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  thirdPartyId_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  thirdPartyId_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  thirdPartyId_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  thirdPartyId_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  thirdPartyId_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  thirdPartyId_not_ends_with?: Maybe<Scalars['String']>;
  resetToken?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  resetToken_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  resetToken_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  resetToken_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  resetToken_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  resetToken_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  resetToken_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  resetToken_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  resetToken_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  resetToken_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  resetToken_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  resetToken_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  resetToken_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  resetToken_not_ends_with?: Maybe<Scalars['String']>;
  resetTokenExpiry?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  resetTokenExpiry_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  resetTokenExpiry_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  resetTokenExpiry_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  resetTokenExpiry_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  resetTokenExpiry_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  resetTokenExpiry_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  resetTokenExpiry_gte?: Maybe<Scalars['DateTime']>;
};

export enum UserStatus {
  Offline = 'OFFLINE',
  Online = 'ONLINE'
}

export type UserSubscriptionPayload = {
  __typename?: 'UserSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<User>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<UserPreviousValues>;
};

export type UserSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<UserWhereInput>;
};

export type UserUpdateDataInput = {
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  lastOnline?: Maybe<Scalars['DateTime']>;
  deleted?: Maybe<Scalars['Boolean']>;
  provider?: Maybe<SocialMediaType>;
  avatar?: Maybe<Scalars['String']>;
  thirdPartyId?: Maybe<Scalars['String']>;
  resetToken?: Maybe<Scalars['String']>;
  resetTokenExpiry?: Maybe<Scalars['DateTime']>;
  parties?: Maybe<PartyUpdateManyWithoutMembersInput>;
  friends?: Maybe<UserUpdateManyInput>;
  pendingFriendInvitations?: Maybe<UserUpdateManyInput>;
  pendingPartyInvitations?: Maybe<PartyInvitationUpdateManyWithoutUserInput>;
  chats?: Maybe<ChatUpdateManyWithoutMembersInput>;
};

export type UserUpdateInput = {
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  lastOnline?: Maybe<Scalars['DateTime']>;
  deleted?: Maybe<Scalars['Boolean']>;
  provider?: Maybe<SocialMediaType>;
  avatar?: Maybe<Scalars['String']>;
  thirdPartyId?: Maybe<Scalars['String']>;
  resetToken?: Maybe<Scalars['String']>;
  resetTokenExpiry?: Maybe<Scalars['DateTime']>;
  parties?: Maybe<PartyUpdateManyWithoutMembersInput>;
  friends?: Maybe<UserUpdateManyInput>;
  pendingFriendInvitations?: Maybe<UserUpdateManyInput>;
  pendingPartyInvitations?: Maybe<PartyInvitationUpdateManyWithoutUserInput>;
  chats?: Maybe<ChatUpdateManyWithoutMembersInput>;
};

export type UserUpdateManyDataInput = {
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  lastOnline?: Maybe<Scalars['DateTime']>;
  deleted?: Maybe<Scalars['Boolean']>;
  provider?: Maybe<SocialMediaType>;
  avatar?: Maybe<Scalars['String']>;
  thirdPartyId?: Maybe<Scalars['String']>;
  resetToken?: Maybe<Scalars['String']>;
  resetTokenExpiry?: Maybe<Scalars['DateTime']>;
};

export type UserUpdateManyInput = {
  create?: Maybe<Array<UserCreateInput>>;
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  set?: Maybe<Array<UserWhereUniqueInput>>;
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
  delete?: Maybe<Array<UserWhereUniqueInput>>;
  update?: Maybe<Array<UserUpdateWithWhereUniqueNestedInput>>;
  updateMany?: Maybe<Array<UserUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<UserScalarWhereInput>>;
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueNestedInput>>;
};

export type UserUpdateManyMutationInput = {
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  lastOnline?: Maybe<Scalars['DateTime']>;
  deleted?: Maybe<Scalars['Boolean']>;
  provider?: Maybe<SocialMediaType>;
  avatar?: Maybe<Scalars['String']>;
  thirdPartyId?: Maybe<Scalars['String']>;
  resetToken?: Maybe<Scalars['String']>;
  resetTokenExpiry?: Maybe<Scalars['DateTime']>;
};

export type UserUpdateManyWithoutChatsInput = {
  create?: Maybe<Array<UserCreateWithoutChatsInput>>;
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  set?: Maybe<Array<UserWhereUniqueInput>>;
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
  delete?: Maybe<Array<UserWhereUniqueInput>>;
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutChatsInput>>;
  updateMany?: Maybe<Array<UserUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<UserScalarWhereInput>>;
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutChatsInput>>;
};

export type UserUpdateManyWithoutPartiesInput = {
  create?: Maybe<Array<UserCreateWithoutPartiesInput>>;
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  set?: Maybe<Array<UserWhereUniqueInput>>;
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
  delete?: Maybe<Array<UserWhereUniqueInput>>;
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutPartiesInput>>;
  updateMany?: Maybe<Array<UserUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<UserScalarWhereInput>>;
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutPartiesInput>>;
};

export type UserUpdateManyWithWhereNestedInput = {
  where: UserScalarWhereInput;
  data: UserUpdateManyDataInput;
};

export type UserUpdateOneRequiredInput = {
  create?: Maybe<UserCreateInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  update?: Maybe<UserUpdateDataInput>;
  upsert?: Maybe<UserUpsertNestedInput>;
};

export type UserUpdateOneRequiredWithoutPendingPartyInvitationsInput = {
  create?: Maybe<UserCreateWithoutPendingPartyInvitationsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  update?: Maybe<UserUpdateWithoutPendingPartyInvitationsDataInput>;
  upsert?: Maybe<UserUpsertWithoutPendingPartyInvitationsInput>;
};

export type UserUpdateWithoutChatsDataInput = {
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  lastOnline?: Maybe<Scalars['DateTime']>;
  deleted?: Maybe<Scalars['Boolean']>;
  provider?: Maybe<SocialMediaType>;
  avatar?: Maybe<Scalars['String']>;
  thirdPartyId?: Maybe<Scalars['String']>;
  resetToken?: Maybe<Scalars['String']>;
  resetTokenExpiry?: Maybe<Scalars['DateTime']>;
  parties?: Maybe<PartyUpdateManyWithoutMembersInput>;
  friends?: Maybe<UserUpdateManyInput>;
  pendingFriendInvitations?: Maybe<UserUpdateManyInput>;
  pendingPartyInvitations?: Maybe<PartyInvitationUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutPartiesDataInput = {
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  lastOnline?: Maybe<Scalars['DateTime']>;
  deleted?: Maybe<Scalars['Boolean']>;
  provider?: Maybe<SocialMediaType>;
  avatar?: Maybe<Scalars['String']>;
  thirdPartyId?: Maybe<Scalars['String']>;
  resetToken?: Maybe<Scalars['String']>;
  resetTokenExpiry?: Maybe<Scalars['DateTime']>;
  friends?: Maybe<UserUpdateManyInput>;
  pendingFriendInvitations?: Maybe<UserUpdateManyInput>;
  pendingPartyInvitations?: Maybe<PartyInvitationUpdateManyWithoutUserInput>;
  chats?: Maybe<ChatUpdateManyWithoutMembersInput>;
};

export type UserUpdateWithoutPendingPartyInvitationsDataInput = {
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  lastOnline?: Maybe<Scalars['DateTime']>;
  deleted?: Maybe<Scalars['Boolean']>;
  provider?: Maybe<SocialMediaType>;
  avatar?: Maybe<Scalars['String']>;
  thirdPartyId?: Maybe<Scalars['String']>;
  resetToken?: Maybe<Scalars['String']>;
  resetTokenExpiry?: Maybe<Scalars['DateTime']>;
  parties?: Maybe<PartyUpdateManyWithoutMembersInput>;
  friends?: Maybe<UserUpdateManyInput>;
  pendingFriendInvitations?: Maybe<UserUpdateManyInput>;
  chats?: Maybe<ChatUpdateManyWithoutMembersInput>;
};

export type UserUpdateWithWhereUniqueNestedInput = {
  where: UserWhereUniqueInput;
  data: UserUpdateDataInput;
};

export type UserUpdateWithWhereUniqueWithoutChatsInput = {
  where: UserWhereUniqueInput;
  data: UserUpdateWithoutChatsDataInput;
};

export type UserUpdateWithWhereUniqueWithoutPartiesInput = {
  where: UserWhereUniqueInput;
  data: UserUpdateWithoutPartiesDataInput;
};

export type UserUpsertNestedInput = {
  update: UserUpdateDataInput;
  create: UserCreateInput;
};

export type UserUpsertWithoutPendingPartyInvitationsInput = {
  update: UserUpdateWithoutPendingPartyInvitationsDataInput;
  create: UserCreateWithoutPendingPartyInvitationsInput;
};

export type UserUpsertWithWhereUniqueNestedInput = {
  where: UserWhereUniqueInput;
  update: UserUpdateDataInput;
  create: UserCreateInput;
};

export type UserUpsertWithWhereUniqueWithoutChatsInput = {
  where: UserWhereUniqueInput;
  update: UserUpdateWithoutChatsDataInput;
  create: UserCreateWithoutChatsInput;
};

export type UserUpsertWithWhereUniqueWithoutPartiesInput = {
  where: UserWhereUniqueInput;
  update: UserUpdateWithoutPartiesDataInput;
  create: UserCreateWithoutPartiesInput;
};

export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  email_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  email_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  email_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  email_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  email_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  email_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  email_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  email_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  email_not_ends_with?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  firstName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  firstName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  firstName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  firstName_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  firstName_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  firstName_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  firstName_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  firstName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  firstName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  firstName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  firstName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  firstName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  firstName_not_ends_with?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  lastName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  lastName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  lastName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  lastName_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  lastName_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  lastName_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  lastName_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  lastName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  lastName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  lastName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  lastName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  lastName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  lastName_not_ends_with?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  password_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  password_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  password_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  password_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  password_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  password_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  password_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  password_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  password_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  password_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  password_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  password_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  password_not_ends_with?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  lastOnline?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  lastOnline_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  lastOnline_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  lastOnline_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  lastOnline_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  lastOnline_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  lastOnline_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  lastOnline_gte?: Maybe<Scalars['DateTime']>;
  deleted?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  deleted_not?: Maybe<Scalars['Boolean']>;
  provider?: Maybe<SocialMediaType>;
  /** All values that are not equal to given value. */
  provider_not?: Maybe<SocialMediaType>;
  /** All values that are contained in given list. */
  provider_in?: Maybe<Array<SocialMediaType>>;
  /** All values that are not contained in given list. */
  provider_not_in?: Maybe<Array<SocialMediaType>>;
  avatar?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  avatar_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  avatar_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  avatar_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  avatar_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  avatar_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  avatar_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  avatar_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  avatar_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  avatar_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  avatar_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  avatar_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  avatar_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  avatar_not_ends_with?: Maybe<Scalars['String']>;
  thirdPartyId?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  thirdPartyId_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  thirdPartyId_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  thirdPartyId_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  thirdPartyId_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  thirdPartyId_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  thirdPartyId_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  thirdPartyId_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  thirdPartyId_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  thirdPartyId_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  thirdPartyId_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  thirdPartyId_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  thirdPartyId_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  thirdPartyId_not_ends_with?: Maybe<Scalars['String']>;
  resetToken?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  resetToken_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  resetToken_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  resetToken_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  resetToken_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  resetToken_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  resetToken_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  resetToken_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  resetToken_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  resetToken_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  resetToken_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  resetToken_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  resetToken_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  resetToken_not_ends_with?: Maybe<Scalars['String']>;
  resetTokenExpiry?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  resetTokenExpiry_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  resetTokenExpiry_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  resetTokenExpiry_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  resetTokenExpiry_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  resetTokenExpiry_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  resetTokenExpiry_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  resetTokenExpiry_gte?: Maybe<Scalars['DateTime']>;
  parties_every?: Maybe<PartyWhereInput>;
  parties_some?: Maybe<PartyWhereInput>;
  parties_none?: Maybe<PartyWhereInput>;
  friends_every?: Maybe<UserWhereInput>;
  friends_some?: Maybe<UserWhereInput>;
  friends_none?: Maybe<UserWhereInput>;
  pendingFriendInvitations_every?: Maybe<UserWhereInput>;
  pendingFriendInvitations_some?: Maybe<UserWhereInput>;
  pendingFriendInvitations_none?: Maybe<UserWhereInput>;
  pendingPartyInvitations_every?: Maybe<PartyInvitationWhereInput>;
  pendingPartyInvitations_some?: Maybe<PartyInvitationWhereInput>;
  pendingPartyInvitations_none?: Maybe<PartyInvitationWhereInput>;
  chats_every?: Maybe<ChatWhereInput>;
  chats_some?: Maybe<ChatWhereInput>;
  chats_none?: Maybe<ChatWhereInput>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
};
export type Party_FragmentFragment = { __typename?: 'Party' } & Pick<
  Party,
  | 'id'
  | 'title'
  | 'description'
  | 'colorTint'
  | 'start'
  | 'end'
  | 'isPublic'
  | 'inviteSecret'
> & {
    location: { __typename?: 'Location' } & Pick<Location, 'placeName'>;
    author: { __typename?: 'User' } & Pick<
      User,
      'firstName' | 'lastName' | 'id'
    >;
    members: Maybe<
      Array<
        { __typename?: 'User' } & Pick<
          User,
          'avatar' | 'firstName' | 'lastName' | 'id'
        >
      >
    >;
  };

export type Message_FragmentFragment = { __typename?: 'Message' } & Pick<
  Message,
  | 'id'
  | 'isSendByMe'
  | 'optimisticallyAdded'
  | 'optimisticallyCreated'
  | 'hasOptimisticError'
  | 'content'
  | 'createdAt'
> & {
    author: { __typename?: 'User' } & Pick<
      User,
      'firstName' | 'lastName' | 'avatar' | 'id'
    >;
  };

export type Party_Invitation_FragmentFragment = {
  __typename?: 'PartyInvitation';
} & Pick<PartyInvitation, 'id' | 'createdAt'> & {
    invitedBy: { __typename?: 'User' } & Pick<
      User,
      'firstName' | 'lastName' | 'avatar'
    >;
    user: { __typename?: 'User' } & Pick<User, 'id'>;
    party: { __typename?: 'Party' } & Pick<Party, 'title' | 'id'>;
  };

export type Last_Chat_Message_FragmentFragment = { __typename?: 'Chat' } & Pick<
  Chat,
  'hasUnreadMessages'
> & {
    messages: Maybe<
      Array<
        { __typename?: 'Message' } & Pick<Message, 'createdAt' | 'content'> & {
            author: { __typename?: 'User' } & Pick<
              User,
              'firstName' | 'lastName'
            >;
          }
      >
    >;
  };

export type SignupMutationVariables = {
  email: Scalars['String'];
  password: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type SignupMutation = { __typename?: 'Mutation' } & {
  signup: { __typename?: 'AuthPayload' } & Pick<AuthPayload, 'token'>;
};

export type LoginMutationVariables = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginMutation = { __typename?: 'Mutation' } & {
  login: { __typename?: 'AuthPayload' } & Pick<AuthPayload, 'token'>;
};

export type CreatePartyMutationVariables = {
  data: PartyCreateInput;
};

export type CreatePartyMutation = { __typename?: 'Mutation' } & {
  createParty: { __typename?: 'Party' } & Party_FragmentFragment;
};

export type CreateMessageMutationVariables = {
  data: MessageCreateInput;
};

export type CreateMessageMutation = { __typename?: 'Mutation' } & {
  createMessage: { __typename?: 'Message' } & Pick<
    Message,
    | 'id'
    | 'isSendByMe'
    | 'optimisticallyAdded'
    | 'optimisticallyCreated'
    | 'hasOptimisticError'
    | 'content'
    | 'createdAt'
  > & {
      author: { __typename?: 'User' } & Pick<
        User,
        'firstName' | 'lastName' | 'avatar' | 'id'
      >;
    };
};

export type RequestPasswordResetMutationVariables = {
  email: Scalars['String'];
};

export type RequestPasswordResetMutation = { __typename?: 'Mutation' } & {
  requestReset: Maybe<
    { __typename?: 'SuccessMessage' } & Pick<SuccessMessage, 'message'>
  >;
};

export type ResetPasswordMutationVariables = {
  password: Scalars['String'];
  confirmPassword: Scalars['String'];
  resetToken: Scalars['String'];
};

export type ResetPasswordMutation = { __typename?: 'Mutation' } & {
  resetPassword: Maybe<
    { __typename?: 'AuthPayload' } & Pick<AuthPayload, 'token'>
  >;
};

export type UpdateUserMutationVariables = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type UpdateUserMutation = { __typename?: 'Mutation' } & {
  updateUser: Maybe<{ __typename?: 'User' } & Pick<User, 'id'>>;
};

export type CreatePartyInvitationMutationVariables = {
  data: PartyInvitationCreateInput;
};

export type CreatePartyInvitationMutation = { __typename?: 'Mutation' } & {
  createPartyInvitation: { __typename?: 'PartyInvitation' } & Pick<
    PartyInvitation,
    'id'
  >;
};

export type DeleteManyPartyInvitationsMutationVariables = {
  where?: Maybe<PartyInvitationWhereInput>;
};

export type DeleteManyPartyInvitationsMutation = { __typename?: 'Mutation' } & {
  deleteManyPartyInvitations: { __typename?: 'BatchPayload' } & Pick<
    BatchPayload,
    'count'
  >;
};

export type DeletePartyInvitationMutationMutationVariables = {
  where: PartyInvitationWhereUniqueInput;
};

export type DeletePartyInvitationMutationMutation = {
  __typename?: 'Mutation';
} & {
  deletePartyInvitation: Maybe<
    { __typename?: 'PartyInvitation' } & Pick<PartyInvitation, 'id'>
  >;
};

export type JoinPartyMutationMutationVariables = {
  where: JoinPartyWhereInput;
};

export type JoinPartyMutationMutation = { __typename?: 'Mutation' } & Pick<
  Mutation,
  'joinParty'
>;

export type MeQueryQueryVariables = {};

export type MeQueryQuery = { __typename?: 'Query' } & {
  me: Maybe<
    { __typename?: 'User' } & Pick<
      User,
      'id' | 'email' | 'firstName' | 'lastName' | 'avatar'
    >
  >;
};

export type PaginateUsersQueryQueryVariables = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type PaginateUsersQueryQuery = { __typename?: 'Query' } & {
  paginateUsers: { __typename?: 'UserConnection' } & {
    edges: Array<
      Maybe<
        { __typename?: 'UserEdge' } & {
          node: { __typename?: 'User' } & Pick<
            User,
            'id' | 'firstName' | 'lastName' | 'avatar' | 'lastOnline' | 'status'
          >;
        }
      >
    >;
    pageInfo: { __typename?: 'PageInfo' } & Pick<
      PageInfo,
      'hasNextPage' | 'endCursor'
    >;
  };
};

export type PartiesQueryQueryVariables = {
  where?: Maybe<PartyWhereInput>;
  orderBy?: Maybe<PartyOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type PartiesQueryQuery = { __typename?: 'Query' } & {
  parties: Array<
    Maybe<
      { __typename?: 'Party' } & {
        location: { __typename?: 'Location' } & Pick<
          Location,
          'placeName' | 'latitude' | 'longitude'
        >;
      } & Party_FragmentFragment
    >
  >;
};

export type PaginatePartiesQueryQueryVariables = {
  where?: Maybe<PartyWhereInput>;
  orderBy?: Maybe<PartyOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type PaginatePartiesQueryQuery = { __typename?: 'Query' } & {
  partiesConnection: { __typename?: 'PartyConnection' } & {
    pageInfo: { __typename?: 'PageInfo' } & Pick<
      PageInfo,
      'hasNextPage' | 'endCursor'
    >;
    edges: Array<
      Maybe<
        { __typename?: 'PartyEdge' } & {
          node: { __typename?: 'Party' } & Party_FragmentFragment;
        }
      >
    >;
  };
};

export type PaginateChatsQueryQueryVariables = {
  where?: Maybe<ChatWhereInput>;
  orderBy?: Maybe<ChatOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type PaginateChatsQueryQuery = { __typename?: 'Query' } & {
  chatsConnection: { __typename?: 'ChatConnection' } & {
    pageInfo: { __typename?: 'PageInfo' } & Pick<
      PageInfo,
      'hasNextPage' | 'endCursor'
    >;
    edges: Array<
      Maybe<
        { __typename?: 'ChatEdge' } & {
          node: { __typename?: 'Chat' } & Pick<
            Chat,
            'id' | 'hasUnreadMessages'
          > & {
              party: { __typename?: 'Party' } & Pick<Party, 'title'>;
              members: Maybe<
                Array<
                  { __typename?: 'User' } & Pick<
                    User,
                    'avatar' | 'firstName' | 'lastName'
                  >
                >
              >;
              messages: Maybe<
                Array<
                  { __typename?: 'Message' } & Pick<
                    Message,
                    'createdAt' | 'content'
                  > & {
                      author: { __typename?: 'User' } & Pick<
                        User,
                        'firstName' | 'lastName'
                      >;
                    }
                >
              >;
            };
        }
      >
    >;
  };
};

export type PaginateMessagesQueryQueryVariables = {
  where?: Maybe<MessageWhereInput>;
  orderBy?: Maybe<MessageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type PaginateMessagesQueryQuery = { __typename?: 'Query' } & {
  messagesConnection: { __typename?: 'MessageConnection' } & {
    pageInfo: { __typename?: 'PageInfo' } & Pick<
      PageInfo,
      'startCursor' | 'hasPreviousPage'
    >;
    edges: Array<
      Maybe<
        { __typename?: 'MessageEdge' } & {
          node: { __typename?: 'Message' } & Message_FragmentFragment;
        }
      >
    >;
  };
};

export type PaginateUsersInviteToPartyQueryQueryVariables = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  partyInvitationWhere?: Maybe<PartyInvitationWhereInput>;
};

export type PaginateUsersInviteToPartyQueryQuery = { __typename?: 'Query' } & {
  paginateUsers: { __typename?: 'UserConnection' } & {
    edges: Array<
      Maybe<
        { __typename?: 'UserEdge' } & {
          node: { __typename?: 'User' } & Pick<
            User,
            'id' | 'firstName' | 'lastName' | 'avatar' | 'lastOnline' | 'status'
          > & {
              pendingPartyInvitations: Maybe<
                Array<
                  { __typename?: 'PartyInvitation' } & Pick<
                    PartyInvitation,
                    'id'
                  > & {
                      invitedBy: { __typename?: 'User' } & Pick<User, 'id'>;
                      party: { __typename?: 'Party' } & Pick<Party, 'id'>;
                    }
                >
              >;
            };
        }
      >
    >;
    pageInfo: { __typename?: 'PageInfo' } & Pick<
      PageInfo,
      'hasNextPage' | 'endCursor'
    >;
  };
};

export type PartyInvitationsConnectionQueryQueryVariables = {
  where?: Maybe<PartyInvitationWhereInput>;
  orderBy?: Maybe<PartyInvitationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type PartyInvitationsConnectionQueryQuery = { __typename?: 'Query' } & {
  partyInvitationsConnection: { __typename?: 'PartyInvitationConnection' } & {
    edges: Array<
      Maybe<
        { __typename?: 'PartyInvitationEdge' } & {
          node: {
            __typename?: 'PartyInvitation';
          } & Party_Invitation_FragmentFragment;
        }
      >
    >;
    pageInfo: { __typename?: 'PageInfo' } & Pick<
      PageInfo,
      'hasNextPage' | 'endCursor'
    >;
  };
  full: { __typename?: 'PartyInvitationConnection' } & {
    aggregate: { __typename?: 'AggregatePartyInvitation' } & Pick<
      AggregatePartyInvitation,
      'count'
    >;
  };
};

export type HasPartiesQueryQueryVariables = {};

export type HasPartiesQueryQuery = { __typename?: 'Query' } & Pick<
  Query,
  'hasParties'
>;

export type PartyInvitationsQueryQueryVariables = {
  where?: Maybe<PartyInvitationWhereInput>;
  orderBy?: Maybe<PartyInvitationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type PartyInvitationsQueryQuery = { __typename?: 'Query' } & {
  partyInvitations: Array<
    Maybe<{ __typename?: 'PartyInvitation' } & Pick<PartyInvitation, 'id'>>
  >;
};

export type CanJoinPartyQueryQueryVariables = {
  userId: Scalars['String'];
  inviteSecret: Scalars['String'];
  partyId: Scalars['String'];
};

export type CanJoinPartyQueryQuery = { __typename?: 'Query' } & Pick<
  Query,
  'canJoinParty'
>;

export type ChatMessagesSubscriptionSubscriptionVariables = {
  where?: Maybe<MessageSubscriptionWhereInput>;
};

export type ChatMessagesSubscriptionSubscription = {
  __typename?: 'Subscription';
} & {
  message: Maybe<
    { __typename?: 'MessageSubscriptionPayload' } & {
      node: Maybe<
        { __typename?: 'Message' } & Pick<
          Message,
          | 'id'
          | 'isSendByMe'
          | 'optimisticallyAdded'
          | 'optimisticallyCreated'
          | 'hasOptimisticError'
          | 'content'
          | 'createdAt'
        > & {
            author: { __typename?: 'User' } & Pick<
              User,
              'firstName' | 'lastName' | 'avatar' | 'id'
            >;
            chat: { __typename?: 'Chat' } & Pick<Chat, 'id'>;
          }
      >;
    }
  >;
};

export type PartyInvitationSubscriptionSubscriptionVariables = {
  where?: Maybe<PartyInvitationSubscriptionWhereInput>;
};

export type PartyInvitationSubscriptionSubscription = {
  __typename?: 'Subscription';
} & {
  partyInvitation: Maybe<
    { __typename?: 'PartyInvitationSubscriptionPayload' } & Pick<
      PartyInvitationSubscriptionPayload,
      'mutation'
    > & {
        node: Maybe<
          { __typename?: 'PartyInvitation' } & Party_Invitation_FragmentFragment
        >;
        previousValues: Maybe<
          { __typename?: 'PartyInvitationPreviousValues' } & Pick<
            PartyInvitationPreviousValues,
            'id' | 'invitedUserId' | 'partyId'
          >
        >;
      }
  >;
};

export type JoinPartyFindQueryVariables = {
  inviteSecret: Scalars['String'];
  userId: Scalars['ID'];
};

export type JoinPartyFindQuery = { __typename?: 'Query' } & {
  parties: Array<
    Maybe<
      { __typename?: 'Party' } & Pick<Party, 'id' | 'title'> & {
          members: Maybe<
            Array<
              { __typename?: 'User' } & Pick<
                User,
                'id' | 'firstName' | 'lastName' | 'avatar'
              >
            >
          >;
        }
    >
  >;
  membersCount: { __typename?: 'UserConnection' } & {
    aggregate: { __typename?: 'AggregateUser' } & Pick<AggregateUser, 'count'>;
  };
};
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
export const SignupHOC = withSignup;
export const useSignup = useSignupMutation;
export type LoginVariables = LoginMutationVariables;
export type LoginLogin = LoginMutation['login'];
export const LoginHOC = withLogin;
export const useLogin = useLoginMutation;
export type CreatePartyVariables = CreatePartyMutationVariables;
export type CreatePartyCreateParty = Party_FragmentFragment;
export const CreatePartyHOC = withCreateParty;
export const useCreateParty = useCreatePartyMutation;
export type CreateMessageVariables = CreateMessageMutationVariables;
export type CreateMessageCreateMessage = CreateMessageMutation['createMessage'];
export type CreateMessageAuthor = CreateMessageMutation['createMessage']['author'];
export const CreateMessageHOC = withCreateMessage;
export const useCreateMessage = useCreateMessageMutation;
export type RequestPasswordResetVariables = RequestPasswordResetMutationVariables;
export type RequestPasswordResetRequestReset = RequestPasswordResetMutation['requestReset'];
export const RequestPasswordResetHOC = withRequestPasswordReset;
export const useRequestPasswordReset = useRequestPasswordResetMutation;
export type ResetPasswordVariables = ResetPasswordMutationVariables;
export type ResetPasswordResetPassword = ResetPasswordMutation['resetPassword'];
export const ResetPasswordHOC = withResetPassword;
export const useResetPassword = useResetPasswordMutation;
export type UpdateUserVariables = UpdateUserMutationVariables;
export type UpdateUserUpdateUser = UpdateUserMutation['updateUser'];
export const UpdateUserHOC = withUpdateUser;
export const useUpdateUser = useUpdateUserMutation;
export type CreatePartyInvitationVariables = CreatePartyInvitationMutationVariables;
export type CreatePartyInvitationCreatePartyInvitation = CreatePartyInvitationMutation['createPartyInvitation'];
export const CreatePartyInvitationHOC = withCreatePartyInvitation;
export const useCreatePartyInvitation = useCreatePartyInvitationMutation;
export type DeleteManyPartyInvitationsVariables = DeleteManyPartyInvitationsMutationVariables;
export type DeleteManyPartyInvitationsDeleteManyPartyInvitations = DeleteManyPartyInvitationsMutation['deleteManyPartyInvitations'];
export const DeleteManyPartyInvitationsHOC = withDeleteManyPartyInvitations;
export const useDeleteManyPartyInvitations = useDeleteManyPartyInvitationsMutation;
export type DeletePartyInvitationMutationVariables = DeletePartyInvitationMutationMutationVariables;
export type DeletePartyInvitationMutationDeletePartyInvitation = DeletePartyInvitationMutationMutation['deletePartyInvitation'];
export const DeletePartyInvitationMutationHOC = withDeletePartyInvitationMutation;
export const useDeletePartyInvitationMutation = useDeletePartyInvitationMutationMutation;
export type JoinPartyMutationVariables = JoinPartyMutationMutationVariables;
export const JoinPartyMutationHOC = withJoinPartyMutation;
export const useJoinPartyMutation = useJoinPartyMutationMutation;
export type MeQueryVariables = MeQueryQueryVariables;
export type MeQueryMe = MeQueryQuery['me'];
export const MeQueryHOC = withMeQuery;
export const useMeQuery = useMeQueryQuery;
export type PaginateUsersQueryVariables = PaginateUsersQueryQueryVariables;
export type PaginateUsersQueryPaginateUsers = PaginateUsersQueryQuery['paginateUsers'];
export type PaginateUsersQueryEdges = PaginateUsersQueryQuery['paginateUsers']['edges'][0];
export type PaginateUsersQueryNode = PaginateUsersQueryQuery['paginateUsers']['edges'][0]['node'];
export type PaginateUsersQueryPageInfo = PaginateUsersQueryQuery['paginateUsers']['pageInfo'];
export const PaginateUsersQueryHOC = withPaginateUsersQuery;
export const usePaginateUsersQuery = usePaginateUsersQueryQuery;
export type PartiesQueryVariables = PartiesQueryQueryVariables;
export type PartiesQueryParties = Party_FragmentFragment;
export type PartiesQueryLocation = PartiesQueryQuery['parties'][0]['location'];
export const PartiesQueryHOC = withPartiesQuery;
export const usePartiesQuery = usePartiesQueryQuery;
export type PaginatePartiesQueryVariables = PaginatePartiesQueryQueryVariables;
export type PaginatePartiesQueryPartiesConnection = PaginatePartiesQueryQuery['partiesConnection'];
export type PaginatePartiesQueryPageInfo = PaginatePartiesQueryQuery['partiesConnection']['pageInfo'];
export type PaginatePartiesQueryEdges = PaginatePartiesQueryQuery['partiesConnection']['edges'][0];
export type PaginatePartiesQueryNode = Party_FragmentFragment;
export const PaginatePartiesQueryHOC = withPaginatePartiesQuery;
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
export const PaginateChatsQueryHOC = withPaginateChatsQuery;
export const usePaginateChatsQuery = usePaginateChatsQueryQuery;
export type PaginateMessagesQueryVariables = PaginateMessagesQueryQueryVariables;
export type PaginateMessagesQueryMessagesConnection = PaginateMessagesQueryQuery['messagesConnection'];
export type PaginateMessagesQueryPageInfo = PaginateMessagesQueryQuery['messagesConnection']['pageInfo'];
export type PaginateMessagesQueryEdges = PaginateMessagesQueryQuery['messagesConnection']['edges'][0];
export type PaginateMessagesQueryNode = Message_FragmentFragment;
export const PaginateMessagesQueryHOC = withPaginateMessagesQuery;
export const usePaginateMessagesQuery = usePaginateMessagesQueryQuery;
export type PaginateUsersInviteToPartyQueryVariables = PaginateUsersInviteToPartyQueryQueryVariables;
export type PaginateUsersInviteToPartyQueryPaginateUsers = PaginateUsersInviteToPartyQueryQuery['paginateUsers'];
export type PaginateUsersInviteToPartyQueryEdges = PaginateUsersInviteToPartyQueryQuery['paginateUsers']['edges'][0];
export type PaginateUsersInviteToPartyQueryNode = PaginateUsersInviteToPartyQueryQuery['paginateUsers']['edges'][0]['node'];
export type PaginateUsersInviteToPartyQueryPendingPartyInvitations = PaginateUsersInviteToPartyQueryQuery['paginateUsers']['edges'][0]['node']['pendingPartyInvitations'][0];
export type PaginateUsersInviteToPartyQueryInvitedBy = PaginateUsersInviteToPartyQueryQuery['paginateUsers']['edges'][0]['node']['pendingPartyInvitations'][0]['invitedBy'];
export type PaginateUsersInviteToPartyQueryParty = PaginateUsersInviteToPartyQueryQuery['paginateUsers']['edges'][0]['node']['pendingPartyInvitations'][0]['party'];
export type PaginateUsersInviteToPartyQueryPageInfo = PaginateUsersInviteToPartyQueryQuery['paginateUsers']['pageInfo'];
export const PaginateUsersInviteToPartyQueryHOC = withPaginateUsersInviteToPartyQuery;
export const usePaginateUsersInviteToPartyQuery = usePaginateUsersInviteToPartyQueryQuery;
export type PartyInvitationsConnectionQueryVariables = PartyInvitationsConnectionQueryQueryVariables;
export type PartyInvitationsConnectionQueryPartyInvitationsConnection = PartyInvitationsConnectionQueryQuery['partyInvitationsConnection'];
export type PartyInvitationsConnectionQueryEdges = PartyInvitationsConnectionQueryQuery['partyInvitationsConnection']['edges'][0];
export type PartyInvitationsConnectionQueryNode = Party_Invitation_FragmentFragment;
export type PartyInvitationsConnectionQueryPageInfo = PartyInvitationsConnectionQueryQuery['partyInvitationsConnection']['pageInfo'];
export type PartyInvitationsConnectionQueryFull = PartyInvitationsConnectionQueryQuery['full'];
export type PartyInvitationsConnectionQueryAggregate = PartyInvitationsConnectionQueryQuery['full']['aggregate'];
export const PartyInvitationsConnectionQueryHOC = withPartyInvitationsConnectionQuery;
export const usePartyInvitationsConnectionQuery = usePartyInvitationsConnectionQueryQuery;
export type HasPartiesQueryVariables = HasPartiesQueryQueryVariables;
export const HasPartiesQueryHOC = withHasPartiesQuery;
export const useHasPartiesQuery = useHasPartiesQueryQuery;
export type PartyInvitationsQueryVariables = PartyInvitationsQueryQueryVariables;
export type PartyInvitationsQueryPartyInvitations = PartyInvitationsQueryQuery['partyInvitations'][0];
export const PartyInvitationsQueryHOC = withPartyInvitationsQuery;
export const usePartyInvitationsQuery = usePartyInvitationsQueryQuery;
export type CanJoinPartyQueryVariables = CanJoinPartyQueryQueryVariables;
export const CanJoinPartyQueryHOC = withCanJoinPartyQuery;
export const useCanJoinPartyQuery = useCanJoinPartyQueryQuery;
export type ChatMessagesSubscriptionVariables = ChatMessagesSubscriptionSubscriptionVariables;
export type ChatMessagesSubscriptionMessage = ChatMessagesSubscriptionSubscription['message'];
export type ChatMessagesSubscriptionNode = ChatMessagesSubscriptionSubscription['message']['node'];
export type ChatMessagesSubscriptionAuthor = ChatMessagesSubscriptionSubscription['message']['node']['author'];
export type ChatMessagesSubscriptionChat = ChatMessagesSubscriptionSubscription['message']['node']['chat'];
export const ChatMessagesSubscriptionHOC = withChatMessagesSubscription;
export const useChatMessagesSubscription = useChatMessagesSubscriptionSubscription;
export type PartyInvitationSubscriptionVariables = PartyInvitationSubscriptionSubscriptionVariables;
export type PartyInvitationSubscriptionPartyInvitation = PartyInvitationSubscriptionSubscription['partyInvitation'];
export type PartyInvitationSubscriptionNode = Party_Invitation_FragmentFragment;
export type PartyInvitationSubscriptionPreviousValues = PartyInvitationSubscriptionSubscription['partyInvitation']['previousValues'];
export const PartyInvitationSubscriptionHOC = withPartyInvitationSubscription;
export const usePartyInvitationSubscription = usePartyInvitationSubscriptionSubscription;
export type JoinPartyFindVariables = JoinPartyFindQueryVariables;
export type JoinPartyFindParties = JoinPartyFindQuery['parties'][0];
export type JoinPartyFindMembers = JoinPartyFindQuery['parties'][0]['members'][0];
export type JoinPartyFindMembersCount = JoinPartyFindQuery['membersCount'];
export type JoinPartyFindAggregate = JoinPartyFindQuery['membersCount']['aggregate'];
export const JoinPartyFindHOC = withJoinPartyFind;
export const useJoinPartyFind = useJoinPartyFindQuery;
export const PARTY_FRAGMENTFragmentDoc = gql`
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
export const MESSAGE_FRAGMENTFragmentDoc = gql`
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
export const PARTY_INVITATION_FRAGMENTFragmentDoc = gql`
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
export const LAST_CHAT_MESSAGE_FRAGMENTFragmentDoc = gql`
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
export const SignupDocument = gql`
  mutation Signup(
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
  ) {
    signup(
      email: $email
      password: $password
      firstName: $firstName
      lastName: $lastName
    ) {
      token
    }
  }
`;
export type SignupMutationFn = ReactApollo.MutationFn<
  SignupMutation,
  SignupMutationVariables
>;
export type SignupComponentProps = Omit<
  Omit<
    ReactApollo.MutationProps<SignupMutation, SignupMutationVariables>,
    'mutation'
  >,
  'variables'
> & { variables?: SignupMutationVariables };

export const SignupComponent = (props: SignupComponentProps) => (
  <ReactApollo.Mutation<SignupMutation, SignupMutationVariables>
    mutation={SignupDocument}
    {...props}
  />
);

export type SignupProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<SignupMutation, SignupMutationVariables>
> &
  TChildProps;
export function withSignup<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    SignupMutation,
    SignupMutationVariables,
    SignupProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    SignupMutation,
    SignupMutationVariables,
    SignupProps<TChildProps>
  >(SignupDocument, {
    alias: 'withSignup',
    ...operationOptions
  });
}

export function useSignupMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    SignupMutation,
    SignupMutationVariables
  >
) {
  return ReactApolloHooks.useMutation<SignupMutation, SignupMutationVariables>(
    SignupDocument,
    baseOptions
  );
}
export const LoginDocument = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;
export type LoginMutationFn = ReactApollo.MutationFn<
  LoginMutation,
  LoginMutationVariables
>;
export type LoginComponentProps = Omit<
  Omit<
    ReactApollo.MutationProps<LoginMutation, LoginMutationVariables>,
    'mutation'
  >,
  'variables'
> & { variables?: LoginMutationVariables };

export const LoginComponent = (props: LoginComponentProps) => (
  <ReactApollo.Mutation<LoginMutation, LoginMutationVariables>
    mutation={LoginDocument}
    {...props}
  />
);

export type LoginProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<LoginMutation, LoginMutationVariables>
> &
  TChildProps;
export function withLogin<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    LoginMutation,
    LoginMutationVariables,
    LoginProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    LoginMutation,
    LoginMutationVariables,
    LoginProps<TChildProps>
  >(LoginDocument, {
    alias: 'withLogin',
    ...operationOptions
  });
}

export function useLoginMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >
) {
  return ReactApolloHooks.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    baseOptions
  );
}
export const CreatePartyDocument = gql`
  mutation CreateParty($data: PartyCreateInput!) {
    createParty(data: $data) {
      ...PARTY_FRAGMENT
    }
  }
  ${PARTY_FRAGMENTFragmentDoc}
`;
export type CreatePartyMutationFn = ReactApollo.MutationFn<
  CreatePartyMutation,
  CreatePartyMutationVariables
>;
export type CreatePartyComponentProps = Omit<
  Omit<
    ReactApollo.MutationProps<
      CreatePartyMutation,
      CreatePartyMutationVariables
    >,
    'mutation'
  >,
  'variables'
> & { variables?: CreatePartyMutationVariables };

export const CreatePartyComponent = (props: CreatePartyComponentProps) => (
  <ReactApollo.Mutation<CreatePartyMutation, CreatePartyMutationVariables>
    mutation={CreatePartyDocument}
    {...props}
  />
);

export type CreatePartyProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<CreatePartyMutation, CreatePartyMutationVariables>
> &
  TChildProps;
export function withCreateParty<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    CreatePartyMutation,
    CreatePartyMutationVariables,
    CreatePartyProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    CreatePartyMutation,
    CreatePartyMutationVariables,
    CreatePartyProps<TChildProps>
  >(CreatePartyDocument, {
    alias: 'withCreateParty',
    ...operationOptions
  });
}

export function useCreatePartyMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    CreatePartyMutation,
    CreatePartyMutationVariables
  >
) {
  return ReactApolloHooks.useMutation<
    CreatePartyMutation,
    CreatePartyMutationVariables
  >(CreatePartyDocument, baseOptions);
}
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
export type CreateMessageMutationFn = ReactApollo.MutationFn<
  CreateMessageMutation,
  CreateMessageMutationVariables
>;
export type CreateMessageComponentProps = Omit<
  Omit<
    ReactApollo.MutationProps<
      CreateMessageMutation,
      CreateMessageMutationVariables
    >,
    'mutation'
  >,
  'variables'
> & { variables?: CreateMessageMutationVariables };

export const CreateMessageComponent = (props: CreateMessageComponentProps) => (
  <ReactApollo.Mutation<CreateMessageMutation, CreateMessageMutationVariables>
    mutation={CreateMessageDocument}
    {...props}
  />
);

export type CreateMessageProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<CreateMessageMutation, CreateMessageMutationVariables>
> &
  TChildProps;
export function withCreateMessage<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    CreateMessageMutation,
    CreateMessageMutationVariables,
    CreateMessageProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    CreateMessageMutation,
    CreateMessageMutationVariables,
    CreateMessageProps<TChildProps>
  >(CreateMessageDocument, {
    alias: 'withCreateMessage',
    ...operationOptions
  });
}

export function useCreateMessageMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    CreateMessageMutation,
    CreateMessageMutationVariables
  >
) {
  return ReactApolloHooks.useMutation<
    CreateMessageMutation,
    CreateMessageMutationVariables
  >(CreateMessageDocument, baseOptions);
}
export const RequestPasswordResetDocument = gql`
  mutation RequestPasswordReset($email: String!) {
    requestReset(email: $email) {
      message
    }
  }
`;
export type RequestPasswordResetMutationFn = ReactApollo.MutationFn<
  RequestPasswordResetMutation,
  RequestPasswordResetMutationVariables
>;
export type RequestPasswordResetComponentProps = Omit<
  Omit<
    ReactApollo.MutationProps<
      RequestPasswordResetMutation,
      RequestPasswordResetMutationVariables
    >,
    'mutation'
  >,
  'variables'
> & { variables?: RequestPasswordResetMutationVariables };

export const RequestPasswordResetComponent = (
  props: RequestPasswordResetComponentProps
) => (
  <ReactApollo.Mutation<
    RequestPasswordResetMutation,
    RequestPasswordResetMutationVariables
  >
    mutation={RequestPasswordResetDocument}
    {...props}
  />
);

export type RequestPasswordResetProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<
    RequestPasswordResetMutation,
    RequestPasswordResetMutationVariables
  >
> &
  TChildProps;
export function withRequestPasswordReset<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    RequestPasswordResetMutation,
    RequestPasswordResetMutationVariables,
    RequestPasswordResetProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    RequestPasswordResetMutation,
    RequestPasswordResetMutationVariables,
    RequestPasswordResetProps<TChildProps>
  >(RequestPasswordResetDocument, {
    alias: 'withRequestPasswordReset',
    ...operationOptions
  });
}

export function useRequestPasswordResetMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    RequestPasswordResetMutation,
    RequestPasswordResetMutationVariables
  >
) {
  return ReactApolloHooks.useMutation<
    RequestPasswordResetMutation,
    RequestPasswordResetMutationVariables
  >(RequestPasswordResetDocument, baseOptions);
}
export const ResetPasswordDocument = gql`
  mutation ResetPassword(
    $password: String!
    $confirmPassword: String!
    $resetToken: String!
  ) {
    resetPassword(
      password: $password
      confirmPassword: $confirmPassword
      resetToken: $resetToken
    ) {
      token
    }
  }
`;
export type ResetPasswordMutationFn = ReactApollo.MutationFn<
  ResetPasswordMutation,
  ResetPasswordMutationVariables
>;
export type ResetPasswordComponentProps = Omit<
  Omit<
    ReactApollo.MutationProps<
      ResetPasswordMutation,
      ResetPasswordMutationVariables
    >,
    'mutation'
  >,
  'variables'
> & { variables?: ResetPasswordMutationVariables };

export const ResetPasswordComponent = (props: ResetPasswordComponentProps) => (
  <ReactApollo.Mutation<ResetPasswordMutation, ResetPasswordMutationVariables>
    mutation={ResetPasswordDocument}
    {...props}
  />
);

export type ResetPasswordProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<ResetPasswordMutation, ResetPasswordMutationVariables>
> &
  TChildProps;
export function withResetPassword<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    ResetPasswordMutation,
    ResetPasswordMutationVariables,
    ResetPasswordProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    ResetPasswordMutation,
    ResetPasswordMutationVariables,
    ResetPasswordProps<TChildProps>
  >(ResetPasswordDocument, {
    alias: 'withResetPassword',
    ...operationOptions
  });
}

export function useResetPasswordMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    ResetPasswordMutation,
    ResetPasswordMutationVariables
  >
) {
  return ReactApolloHooks.useMutation<
    ResetPasswordMutation,
    ResetPasswordMutationVariables
  >(ResetPasswordDocument, baseOptions);
}
export const UpdateUserDocument = gql`
  mutation UpdateUser($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
    updateUser(data: $data, where: $where) {
      id
    }
  }
`;
export type UpdateUserMutationFn = ReactApollo.MutationFn<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;
export type UpdateUserComponentProps = Omit<
  Omit<
    ReactApollo.MutationProps<UpdateUserMutation, UpdateUserMutationVariables>,
    'mutation'
  >,
  'variables'
> & { variables?: UpdateUserMutationVariables };

export const UpdateUserComponent = (props: UpdateUserComponentProps) => (
  <ReactApollo.Mutation<UpdateUserMutation, UpdateUserMutationVariables>
    mutation={UpdateUserDocument}
    {...props}
  />
);

export type UpdateUserProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<UpdateUserMutation, UpdateUserMutationVariables>
> &
  TChildProps;
export function withUpdateUser<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    UpdateUserMutation,
    UpdateUserMutationVariables,
    UpdateUserProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    UpdateUserMutation,
    UpdateUserMutationVariables,
    UpdateUserProps<TChildProps>
  >(UpdateUserDocument, {
    alias: 'withUpdateUser',
    ...operationOptions
  });
}

export function useUpdateUserMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >
) {
  return ReactApolloHooks.useMutation<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >(UpdateUserDocument, baseOptions);
}
export const CreatePartyInvitationDocument = gql`
  mutation CreatePartyInvitation($data: PartyInvitationCreateInput!) {
    createPartyInvitation(data: $data) {
      id
    }
  }
`;
export type CreatePartyInvitationMutationFn = ReactApollo.MutationFn<
  CreatePartyInvitationMutation,
  CreatePartyInvitationMutationVariables
>;
export type CreatePartyInvitationComponentProps = Omit<
  Omit<
    ReactApollo.MutationProps<
      CreatePartyInvitationMutation,
      CreatePartyInvitationMutationVariables
    >,
    'mutation'
  >,
  'variables'
> & { variables?: CreatePartyInvitationMutationVariables };

export const CreatePartyInvitationComponent = (
  props: CreatePartyInvitationComponentProps
) => (
  <ReactApollo.Mutation<
    CreatePartyInvitationMutation,
    CreatePartyInvitationMutationVariables
  >
    mutation={CreatePartyInvitationDocument}
    {...props}
  />
);

export type CreatePartyInvitationProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<
    CreatePartyInvitationMutation,
    CreatePartyInvitationMutationVariables
  >
> &
  TChildProps;
export function withCreatePartyInvitation<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    CreatePartyInvitationMutation,
    CreatePartyInvitationMutationVariables,
    CreatePartyInvitationProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    CreatePartyInvitationMutation,
    CreatePartyInvitationMutationVariables,
    CreatePartyInvitationProps<TChildProps>
  >(CreatePartyInvitationDocument, {
    alias: 'withCreatePartyInvitation',
    ...operationOptions
  });
}

export function useCreatePartyInvitationMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    CreatePartyInvitationMutation,
    CreatePartyInvitationMutationVariables
  >
) {
  return ReactApolloHooks.useMutation<
    CreatePartyInvitationMutation,
    CreatePartyInvitationMutationVariables
  >(CreatePartyInvitationDocument, baseOptions);
}
export const DeleteManyPartyInvitationsDocument = gql`
  mutation DeleteManyPartyInvitations($where: PartyInvitationWhereInput) {
    deleteManyPartyInvitations(where: $where) {
      count
    }
  }
`;
export type DeleteManyPartyInvitationsMutationFn = ReactApollo.MutationFn<
  DeleteManyPartyInvitationsMutation,
  DeleteManyPartyInvitationsMutationVariables
>;
export type DeleteManyPartyInvitationsComponentProps = Omit<
  Omit<
    ReactApollo.MutationProps<
      DeleteManyPartyInvitationsMutation,
      DeleteManyPartyInvitationsMutationVariables
    >,
    'mutation'
  >,
  'variables'
> & { variables?: DeleteManyPartyInvitationsMutationVariables };

export const DeleteManyPartyInvitationsComponent = (
  props: DeleteManyPartyInvitationsComponentProps
) => (
  <ReactApollo.Mutation<
    DeleteManyPartyInvitationsMutation,
    DeleteManyPartyInvitationsMutationVariables
  >
    mutation={DeleteManyPartyInvitationsDocument}
    {...props}
  />
);

export type DeleteManyPartyInvitationsProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<
    DeleteManyPartyInvitationsMutation,
    DeleteManyPartyInvitationsMutationVariables
  >
> &
  TChildProps;
export function withDeleteManyPartyInvitations<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    DeleteManyPartyInvitationsMutation,
    DeleteManyPartyInvitationsMutationVariables,
    DeleteManyPartyInvitationsProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    DeleteManyPartyInvitationsMutation,
    DeleteManyPartyInvitationsMutationVariables,
    DeleteManyPartyInvitationsProps<TChildProps>
  >(DeleteManyPartyInvitationsDocument, {
    alias: 'withDeleteManyPartyInvitations',
    ...operationOptions
  });
}

export function useDeleteManyPartyInvitationsMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    DeleteManyPartyInvitationsMutation,
    DeleteManyPartyInvitationsMutationVariables
  >
) {
  return ReactApolloHooks.useMutation<
    DeleteManyPartyInvitationsMutation,
    DeleteManyPartyInvitationsMutationVariables
  >(DeleteManyPartyInvitationsDocument, baseOptions);
}
export const DeletePartyInvitationMutationDocument = gql`
  mutation DeletePartyInvitationMutation(
    $where: PartyInvitationWhereUniqueInput!
  ) {
    deletePartyInvitation(where: $where) {
      id
    }
  }
`;
export type DeletePartyInvitationMutationMutationFn = ReactApollo.MutationFn<
  DeletePartyInvitationMutationMutation,
  DeletePartyInvitationMutationMutationVariables
>;
export type DeletePartyInvitationMutationComponentProps = Omit<
  Omit<
    ReactApollo.MutationProps<
      DeletePartyInvitationMutationMutation,
      DeletePartyInvitationMutationMutationVariables
    >,
    'mutation'
  >,
  'variables'
> & { variables?: DeletePartyInvitationMutationMutationVariables };

export const DeletePartyInvitationMutationComponent = (
  props: DeletePartyInvitationMutationComponentProps
) => (
  <ReactApollo.Mutation<
    DeletePartyInvitationMutationMutation,
    DeletePartyInvitationMutationMutationVariables
  >
    mutation={DeletePartyInvitationMutationDocument}
    {...props}
  />
);

export type DeletePartyInvitationMutationProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<
    DeletePartyInvitationMutationMutation,
    DeletePartyInvitationMutationMutationVariables
  >
> &
  TChildProps;
export function withDeletePartyInvitationMutation<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    DeletePartyInvitationMutationMutation,
    DeletePartyInvitationMutationMutationVariables,
    DeletePartyInvitationMutationProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    DeletePartyInvitationMutationMutation,
    DeletePartyInvitationMutationMutationVariables,
    DeletePartyInvitationMutationProps<TChildProps>
  >(DeletePartyInvitationMutationDocument, {
    alias: 'withDeletePartyInvitationMutation',
    ...operationOptions
  });
}

export function useDeletePartyInvitationMutationMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    DeletePartyInvitationMutationMutation,
    DeletePartyInvitationMutationMutationVariables
  >
) {
  return ReactApolloHooks.useMutation<
    DeletePartyInvitationMutationMutation,
    DeletePartyInvitationMutationMutationVariables
  >(DeletePartyInvitationMutationDocument, baseOptions);
}
export const JoinPartyMutationDocument = gql`
  mutation JoinPartyMutation($where: JoinPartyWhereInput!) {
    joinParty(where: $where)
  }
`;
export type JoinPartyMutationMutationFn = ReactApollo.MutationFn<
  JoinPartyMutationMutation,
  JoinPartyMutationMutationVariables
>;
export type JoinPartyMutationComponentProps = Omit<
  Omit<
    ReactApollo.MutationProps<
      JoinPartyMutationMutation,
      JoinPartyMutationMutationVariables
    >,
    'mutation'
  >,
  'variables'
> & { variables?: JoinPartyMutationMutationVariables };

export const JoinPartyMutationComponent = (
  props: JoinPartyMutationComponentProps
) => (
  <ReactApollo.Mutation<
    JoinPartyMutationMutation,
    JoinPartyMutationMutationVariables
  >
    mutation={JoinPartyMutationDocument}
    {...props}
  />
);

export type JoinPartyMutationProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<
    JoinPartyMutationMutation,
    JoinPartyMutationMutationVariables
  >
> &
  TChildProps;
export function withJoinPartyMutation<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    JoinPartyMutationMutation,
    JoinPartyMutationMutationVariables,
    JoinPartyMutationProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    JoinPartyMutationMutation,
    JoinPartyMutationMutationVariables,
    JoinPartyMutationProps<TChildProps>
  >(JoinPartyMutationDocument, {
    alias: 'withJoinPartyMutation',
    ...operationOptions
  });
}

export function useJoinPartyMutationMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    JoinPartyMutationMutation,
    JoinPartyMutationMutationVariables
  >
) {
  return ReactApolloHooks.useMutation<
    JoinPartyMutationMutation,
    JoinPartyMutationMutationVariables
  >(JoinPartyMutationDocument, baseOptions);
}
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
export type MeQueryComponentProps = Omit<
  Omit<ReactApollo.QueryProps<MeQueryQuery, MeQueryQueryVariables>, 'query'>,
  'variables'
> & { variables?: MeQueryQueryVariables };

export const MeQueryComponent = (props: MeQueryComponentProps) => (
  <ReactApollo.Query<MeQueryQuery, MeQueryQueryVariables>
    query={MeQueryDocument}
    {...props}
  />
);

export type MeQueryProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<MeQueryQuery, MeQueryQueryVariables>
> &
  TChildProps;
export function withMeQuery<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    MeQueryQuery,
    MeQueryQueryVariables,
    MeQueryProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    MeQueryQuery,
    MeQueryQueryVariables,
    MeQueryProps<TChildProps>
  >(MeQueryDocument, {
    alias: 'withMeQuery',
    ...operationOptions
  });
}

export function useMeQueryQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<MeQueryQueryVariables>
) {
  return ReactApolloHooks.useQuery<MeQueryQuery, MeQueryQueryVariables>(
    MeQueryDocument,
    baseOptions
  );
}
export const PaginateUsersQueryDocument = gql`
  query PaginateUsersQuery(
    $where: UserWhereInput
    $orderBy: UserOrderByInput
    $skip: Int
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    paginateUsers(
      where: $where
      skip: $skip
      after: $after
      before: $before
      first: $first
      last: $last
      orderBy: $orderBy
    ) {
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
export type PaginateUsersQueryComponentProps = Omit<
  Omit<
    ReactApollo.QueryProps<
      PaginateUsersQueryQuery,
      PaginateUsersQueryQueryVariables
    >,
    'query'
  >,
  'variables'
> & { variables?: PaginateUsersQueryQueryVariables };

export const PaginateUsersQueryComponent = (
  props: PaginateUsersQueryComponentProps
) => (
  <ReactApollo.Query<PaginateUsersQueryQuery, PaginateUsersQueryQueryVariables>
    query={PaginateUsersQueryDocument}
    {...props}
  />
);

export type PaginateUsersQueryProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<
    PaginateUsersQueryQuery,
    PaginateUsersQueryQueryVariables
  >
> &
  TChildProps;
export function withPaginateUsersQuery<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    PaginateUsersQueryQuery,
    PaginateUsersQueryQueryVariables,
    PaginateUsersQueryProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    PaginateUsersQueryQuery,
    PaginateUsersQueryQueryVariables,
    PaginateUsersQueryProps<TChildProps>
  >(PaginateUsersQueryDocument, {
    alias: 'withPaginateUsersQuery',
    ...operationOptions
  });
}

export function usePaginateUsersQueryQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<
    PaginateUsersQueryQueryVariables
  >
) {
  return ReactApolloHooks.useQuery<
    PaginateUsersQueryQuery,
    PaginateUsersQueryQueryVariables
  >(PaginateUsersQueryDocument, baseOptions);
}
export const PartiesQueryDocument = gql`
  query PartiesQuery(
    $where: PartyWhereInput
    $orderBy: PartyOrderByInput
    $skip: Int
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    parties(
      where: $where
      orderBy: $orderBy
      skip: $skip
      after: $after
      before: $before
      first: $first
      last: $last
    ) {
      location {
        placeName
        latitude
        longitude
      }
      ...PARTY_FRAGMENT
    }
  }
  ${PARTY_FRAGMENTFragmentDoc}
`;
export type PartiesQueryComponentProps = Omit<
  Omit<
    ReactApollo.QueryProps<PartiesQueryQuery, PartiesQueryQueryVariables>,
    'query'
  >,
  'variables'
> & { variables?: PartiesQueryQueryVariables };

export const PartiesQueryComponent = (props: PartiesQueryComponentProps) => (
  <ReactApollo.Query<PartiesQueryQuery, PartiesQueryQueryVariables>
    query={PartiesQueryDocument}
    {...props}
  />
);

export type PartiesQueryProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<PartiesQueryQuery, PartiesQueryQueryVariables>
> &
  TChildProps;
export function withPartiesQuery<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    PartiesQueryQuery,
    PartiesQueryQueryVariables,
    PartiesQueryProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    PartiesQueryQuery,
    PartiesQueryQueryVariables,
    PartiesQueryProps<TChildProps>
  >(PartiesQueryDocument, {
    alias: 'withPartiesQuery',
    ...operationOptions
  });
}

export function usePartiesQueryQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<PartiesQueryQueryVariables>
) {
  return ReactApolloHooks.useQuery<
    PartiesQueryQuery,
    PartiesQueryQueryVariables
  >(PartiesQueryDocument, baseOptions);
}
export const PaginatePartiesQueryDocument = gql`
  query PaginatePartiesQuery(
    $where: PartyWhereInput
    $orderBy: PartyOrderByInput
    $skip: Int
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    partiesConnection(
      where: $where
      orderBy: $orderBy
      skip: $skip
      after: $after
      before: $before
      first: $first
      last: $last
    ) {
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
  ${PARTY_FRAGMENTFragmentDoc}
`;
export type PaginatePartiesQueryComponentProps = Omit<
  Omit<
    ReactApollo.QueryProps<
      PaginatePartiesQueryQuery,
      PaginatePartiesQueryQueryVariables
    >,
    'query'
  >,
  'variables'
> & { variables?: PaginatePartiesQueryQueryVariables };

export const PaginatePartiesQueryComponent = (
  props: PaginatePartiesQueryComponentProps
) => (
  <ReactApollo.Query<
    PaginatePartiesQueryQuery,
    PaginatePartiesQueryQueryVariables
  >
    query={PaginatePartiesQueryDocument}
    {...props}
  />
);

export type PaginatePartiesQueryProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<
    PaginatePartiesQueryQuery,
    PaginatePartiesQueryQueryVariables
  >
> &
  TChildProps;
export function withPaginatePartiesQuery<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    PaginatePartiesQueryQuery,
    PaginatePartiesQueryQueryVariables,
    PaginatePartiesQueryProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    PaginatePartiesQueryQuery,
    PaginatePartiesQueryQueryVariables,
    PaginatePartiesQueryProps<TChildProps>
  >(PaginatePartiesQueryDocument, {
    alias: 'withPaginatePartiesQuery',
    ...operationOptions
  });
}

export function usePaginatePartiesQueryQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<
    PaginatePartiesQueryQueryVariables
  >
) {
  return ReactApolloHooks.useQuery<
    PaginatePartiesQueryQuery,
    PaginatePartiesQueryQueryVariables
  >(PaginatePartiesQueryDocument, baseOptions);
}
export const PaginateChatsQueryDocument = gql`
  query PaginateChatsQuery(
    $where: ChatWhereInput
    $orderBy: ChatOrderByInput
    $skip: Int
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    chatsConnection(
      where: $where
      orderBy: $orderBy
      skip: $skip
      after: $after
      before: $before
      first: $first
      last: $last
    ) {
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
export type PaginateChatsQueryComponentProps = Omit<
  Omit<
    ReactApollo.QueryProps<
      PaginateChatsQueryQuery,
      PaginateChatsQueryQueryVariables
    >,
    'query'
  >,
  'variables'
> & { variables?: PaginateChatsQueryQueryVariables };

export const PaginateChatsQueryComponent = (
  props: PaginateChatsQueryComponentProps
) => (
  <ReactApollo.Query<PaginateChatsQueryQuery, PaginateChatsQueryQueryVariables>
    query={PaginateChatsQueryDocument}
    {...props}
  />
);

export type PaginateChatsQueryProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<
    PaginateChatsQueryQuery,
    PaginateChatsQueryQueryVariables
  >
> &
  TChildProps;
export function withPaginateChatsQuery<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    PaginateChatsQueryQuery,
    PaginateChatsQueryQueryVariables,
    PaginateChatsQueryProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    PaginateChatsQueryQuery,
    PaginateChatsQueryQueryVariables,
    PaginateChatsQueryProps<TChildProps>
  >(PaginateChatsQueryDocument, {
    alias: 'withPaginateChatsQuery',
    ...operationOptions
  });
}

export function usePaginateChatsQueryQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<
    PaginateChatsQueryQueryVariables
  >
) {
  return ReactApolloHooks.useQuery<
    PaginateChatsQueryQuery,
    PaginateChatsQueryQueryVariables
  >(PaginateChatsQueryDocument, baseOptions);
}
export const PaginateMessagesQueryDocument = gql`
  query PaginateMessagesQuery(
    $where: MessageWhereInput
    $orderBy: MessageOrderByInput
    $skip: Int
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    messagesConnection(
      where: $where
      orderBy: $orderBy
      skip: $skip
      after: $after
      before: $before
      first: $first
      last: $last
    ) {
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
  ${MESSAGE_FRAGMENTFragmentDoc}
`;
export type PaginateMessagesQueryComponentProps = Omit<
  Omit<
    ReactApollo.QueryProps<
      PaginateMessagesQueryQuery,
      PaginateMessagesQueryQueryVariables
    >,
    'query'
  >,
  'variables'
> & { variables?: PaginateMessagesQueryQueryVariables };

export const PaginateMessagesQueryComponent = (
  props: PaginateMessagesQueryComponentProps
) => (
  <ReactApollo.Query<
    PaginateMessagesQueryQuery,
    PaginateMessagesQueryQueryVariables
  >
    query={PaginateMessagesQueryDocument}
    {...props}
  />
);

export type PaginateMessagesQueryProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<
    PaginateMessagesQueryQuery,
    PaginateMessagesQueryQueryVariables
  >
> &
  TChildProps;
export function withPaginateMessagesQuery<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    PaginateMessagesQueryQuery,
    PaginateMessagesQueryQueryVariables,
    PaginateMessagesQueryProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    PaginateMessagesQueryQuery,
    PaginateMessagesQueryQueryVariables,
    PaginateMessagesQueryProps<TChildProps>
  >(PaginateMessagesQueryDocument, {
    alias: 'withPaginateMessagesQuery',
    ...operationOptions
  });
}

export function usePaginateMessagesQueryQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<
    PaginateMessagesQueryQueryVariables
  >
) {
  return ReactApolloHooks.useQuery<
    PaginateMessagesQueryQuery,
    PaginateMessagesQueryQueryVariables
  >(PaginateMessagesQueryDocument, baseOptions);
}
export const PaginateUsersInviteToPartyQueryDocument = gql`
  query PaginateUsersInviteToPartyQuery(
    $where: UserWhereInput
    $orderBy: UserOrderByInput
    $skip: Int
    $after: String
    $before: String
    $first: Int
    $last: Int
    $partyInvitationWhere: PartyInvitationWhereInput
  ) {
    paginateUsers(
      where: $where
      skip: $skip
      after: $after
      before: $before
      first: $first
      last: $last
      orderBy: $orderBy
    ) {
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
export type PaginateUsersInviteToPartyQueryComponentProps = Omit<
  Omit<
    ReactApollo.QueryProps<
      PaginateUsersInviteToPartyQueryQuery,
      PaginateUsersInviteToPartyQueryQueryVariables
    >,
    'query'
  >,
  'variables'
> & { variables?: PaginateUsersInviteToPartyQueryQueryVariables };

export const PaginateUsersInviteToPartyQueryComponent = (
  props: PaginateUsersInviteToPartyQueryComponentProps
) => (
  <ReactApollo.Query<
    PaginateUsersInviteToPartyQueryQuery,
    PaginateUsersInviteToPartyQueryQueryVariables
  >
    query={PaginateUsersInviteToPartyQueryDocument}
    {...props}
  />
);

export type PaginateUsersInviteToPartyQueryProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<
    PaginateUsersInviteToPartyQueryQuery,
    PaginateUsersInviteToPartyQueryQueryVariables
  >
> &
  TChildProps;
export function withPaginateUsersInviteToPartyQuery<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    PaginateUsersInviteToPartyQueryQuery,
    PaginateUsersInviteToPartyQueryQueryVariables,
    PaginateUsersInviteToPartyQueryProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    PaginateUsersInviteToPartyQueryQuery,
    PaginateUsersInviteToPartyQueryQueryVariables,
    PaginateUsersInviteToPartyQueryProps<TChildProps>
  >(PaginateUsersInviteToPartyQueryDocument, {
    alias: 'withPaginateUsersInviteToPartyQuery',
    ...operationOptions
  });
}

export function usePaginateUsersInviteToPartyQueryQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<
    PaginateUsersInviteToPartyQueryQueryVariables
  >
) {
  return ReactApolloHooks.useQuery<
    PaginateUsersInviteToPartyQueryQuery,
    PaginateUsersInviteToPartyQueryQueryVariables
  >(PaginateUsersInviteToPartyQueryDocument, baseOptions);
}
export const PartyInvitationsConnectionQueryDocument = gql`
  query PartyInvitationsConnectionQuery(
    $where: PartyInvitationWhereInput
    $orderBy: PartyInvitationOrderByInput
    $skip: Int
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    partyInvitationsConnection(
      where: $where
      orderBy: $orderBy
      skip: $skip
      after: $after
      before: $before
      first: $first
      last: $last
    ) {
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
  ${PARTY_INVITATION_FRAGMENTFragmentDoc}
`;
export type PartyInvitationsConnectionQueryComponentProps = Omit<
  Omit<
    ReactApollo.QueryProps<
      PartyInvitationsConnectionQueryQuery,
      PartyInvitationsConnectionQueryQueryVariables
    >,
    'query'
  >,
  'variables'
> & { variables?: PartyInvitationsConnectionQueryQueryVariables };

export const PartyInvitationsConnectionQueryComponent = (
  props: PartyInvitationsConnectionQueryComponentProps
) => (
  <ReactApollo.Query<
    PartyInvitationsConnectionQueryQuery,
    PartyInvitationsConnectionQueryQueryVariables
  >
    query={PartyInvitationsConnectionQueryDocument}
    {...props}
  />
);

export type PartyInvitationsConnectionQueryProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<
    PartyInvitationsConnectionQueryQuery,
    PartyInvitationsConnectionQueryQueryVariables
  >
> &
  TChildProps;
export function withPartyInvitationsConnectionQuery<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    PartyInvitationsConnectionQueryQuery,
    PartyInvitationsConnectionQueryQueryVariables,
    PartyInvitationsConnectionQueryProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    PartyInvitationsConnectionQueryQuery,
    PartyInvitationsConnectionQueryQueryVariables,
    PartyInvitationsConnectionQueryProps<TChildProps>
  >(PartyInvitationsConnectionQueryDocument, {
    alias: 'withPartyInvitationsConnectionQuery',
    ...operationOptions
  });
}

export function usePartyInvitationsConnectionQueryQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<
    PartyInvitationsConnectionQueryQueryVariables
  >
) {
  return ReactApolloHooks.useQuery<
    PartyInvitationsConnectionQueryQuery,
    PartyInvitationsConnectionQueryQueryVariables
  >(PartyInvitationsConnectionQueryDocument, baseOptions);
}
export const HasPartiesQueryDocument = gql`
  query HasPartiesQuery {
    hasParties
  }
`;
export type HasPartiesQueryComponentProps = Omit<
  Omit<
    ReactApollo.QueryProps<HasPartiesQueryQuery, HasPartiesQueryQueryVariables>,
    'query'
  >,
  'variables'
> & { variables?: HasPartiesQueryQueryVariables };

export const HasPartiesQueryComponent = (
  props: HasPartiesQueryComponentProps
) => (
  <ReactApollo.Query<HasPartiesQueryQuery, HasPartiesQueryQueryVariables>
    query={HasPartiesQueryDocument}
    {...props}
  />
);

export type HasPartiesQueryProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<HasPartiesQueryQuery, HasPartiesQueryQueryVariables>
> &
  TChildProps;
export function withHasPartiesQuery<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    HasPartiesQueryQuery,
    HasPartiesQueryQueryVariables,
    HasPartiesQueryProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    HasPartiesQueryQuery,
    HasPartiesQueryQueryVariables,
    HasPartiesQueryProps<TChildProps>
  >(HasPartiesQueryDocument, {
    alias: 'withHasPartiesQuery',
    ...operationOptions
  });
}

export function useHasPartiesQueryQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<HasPartiesQueryQueryVariables>
) {
  return ReactApolloHooks.useQuery<
    HasPartiesQueryQuery,
    HasPartiesQueryQueryVariables
  >(HasPartiesQueryDocument, baseOptions);
}
export const PartyInvitationsQueryDocument = gql`
  query PartyInvitationsQuery(
    $where: PartyInvitationWhereInput
    $orderBy: PartyInvitationOrderByInput
    $skip: Int
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    partyInvitations(
      where: $where
      orderBy: $orderBy
      skip: $skip
      after: $after
      before: $before
      first: $first
      last: $last
    ) {
      id
    }
  }
`;
export type PartyInvitationsQueryComponentProps = Omit<
  Omit<
    ReactApollo.QueryProps<
      PartyInvitationsQueryQuery,
      PartyInvitationsQueryQueryVariables
    >,
    'query'
  >,
  'variables'
> & { variables?: PartyInvitationsQueryQueryVariables };

export const PartyInvitationsQueryComponent = (
  props: PartyInvitationsQueryComponentProps
) => (
  <ReactApollo.Query<
    PartyInvitationsQueryQuery,
    PartyInvitationsQueryQueryVariables
  >
    query={PartyInvitationsQueryDocument}
    {...props}
  />
);

export type PartyInvitationsQueryProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<
    PartyInvitationsQueryQuery,
    PartyInvitationsQueryQueryVariables
  >
> &
  TChildProps;
export function withPartyInvitationsQuery<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    PartyInvitationsQueryQuery,
    PartyInvitationsQueryQueryVariables,
    PartyInvitationsQueryProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    PartyInvitationsQueryQuery,
    PartyInvitationsQueryQueryVariables,
    PartyInvitationsQueryProps<TChildProps>
  >(PartyInvitationsQueryDocument, {
    alias: 'withPartyInvitationsQuery',
    ...operationOptions
  });
}

export function usePartyInvitationsQueryQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<
    PartyInvitationsQueryQueryVariables
  >
) {
  return ReactApolloHooks.useQuery<
    PartyInvitationsQueryQuery,
    PartyInvitationsQueryQueryVariables
  >(PartyInvitationsQueryDocument, baseOptions);
}
export const CanJoinPartyQueryDocument = gql`
  query CanJoinPartyQuery(
    $userId: String!
    $inviteSecret: String!
    $partyId: String!
  ) {
    canJoinParty(
      userId: $userId
      inviteSecret: $inviteSecret
      partyId: $partyId
    )
  }
`;
export type CanJoinPartyQueryComponentProps = Omit<
  Omit<
    ReactApollo.QueryProps<
      CanJoinPartyQueryQuery,
      CanJoinPartyQueryQueryVariables
    >,
    'query'
  >,
  'variables'
> & { variables: CanJoinPartyQueryQueryVariables };

export const CanJoinPartyQueryComponent = (
  props: CanJoinPartyQueryComponentProps
) => (
  <ReactApollo.Query<CanJoinPartyQueryQuery, CanJoinPartyQueryQueryVariables>
    query={CanJoinPartyQueryDocument}
    {...props}
  />
);

export type CanJoinPartyQueryProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<CanJoinPartyQueryQuery, CanJoinPartyQueryQueryVariables>
> &
  TChildProps;
export function withCanJoinPartyQuery<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    CanJoinPartyQueryQuery,
    CanJoinPartyQueryQueryVariables,
    CanJoinPartyQueryProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    CanJoinPartyQueryQuery,
    CanJoinPartyQueryQueryVariables,
    CanJoinPartyQueryProps<TChildProps>
  >(CanJoinPartyQueryDocument, {
    alias: 'withCanJoinPartyQuery',
    ...operationOptions
  });
}

export function useCanJoinPartyQueryQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<
    CanJoinPartyQueryQueryVariables
  >
) {
  return ReactApolloHooks.useQuery<
    CanJoinPartyQueryQuery,
    CanJoinPartyQueryQueryVariables
  >(CanJoinPartyQueryDocument, baseOptions);
}
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
export type ChatMessagesSubscriptionComponentProps = Omit<
  Omit<
    ReactApollo.SubscriptionProps<
      ChatMessagesSubscriptionSubscription,
      ChatMessagesSubscriptionSubscriptionVariables
    >,
    'subscription'
  >,
  'variables'
> & { variables?: ChatMessagesSubscriptionSubscriptionVariables };

export const ChatMessagesSubscriptionComponent = (
  props: ChatMessagesSubscriptionComponentProps
) => (
  <ReactApollo.Subscription<
    ChatMessagesSubscriptionSubscription,
    ChatMessagesSubscriptionSubscriptionVariables
  >
    subscription={ChatMessagesSubscriptionDocument}
    {...props}
  />
);

export type ChatMessagesSubscriptionProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<
    ChatMessagesSubscriptionSubscription,
    ChatMessagesSubscriptionSubscriptionVariables
  >
> &
  TChildProps;
export function withChatMessagesSubscription<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    ChatMessagesSubscriptionSubscription,
    ChatMessagesSubscriptionSubscriptionVariables,
    ChatMessagesSubscriptionProps<TChildProps>
  >
) {
  return ReactApollo.withSubscription<
    TProps,
    ChatMessagesSubscriptionSubscription,
    ChatMessagesSubscriptionSubscriptionVariables,
    ChatMessagesSubscriptionProps<TChildProps>
  >(ChatMessagesSubscriptionDocument, {
    alias: 'withChatMessagesSubscription',
    ...operationOptions
  });
}

export function useChatMessagesSubscriptionSubscription(
  baseOptions?: ReactApolloHooks.SubscriptionHookOptions<
    ChatMessagesSubscriptionSubscription,
    ChatMessagesSubscriptionSubscriptionVariables
  >
) {
  return ReactApolloHooks.useSubscription<
    ChatMessagesSubscriptionSubscription,
    ChatMessagesSubscriptionSubscriptionVariables
  >(ChatMessagesSubscriptionDocument, baseOptions);
}
export const PartyInvitationSubscriptionDocument = gql`
  subscription PartyInvitationSubscription(
    $where: PartyInvitationSubscriptionWhereInput
  ) {
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
  ${PARTY_INVITATION_FRAGMENTFragmentDoc}
`;
export type PartyInvitationSubscriptionComponentProps = Omit<
  Omit<
    ReactApollo.SubscriptionProps<
      PartyInvitationSubscriptionSubscription,
      PartyInvitationSubscriptionSubscriptionVariables
    >,
    'subscription'
  >,
  'variables'
> & { variables?: PartyInvitationSubscriptionSubscriptionVariables };

export const PartyInvitationSubscriptionComponent = (
  props: PartyInvitationSubscriptionComponentProps
) => (
  <ReactApollo.Subscription<
    PartyInvitationSubscriptionSubscription,
    PartyInvitationSubscriptionSubscriptionVariables
  >
    subscription={PartyInvitationSubscriptionDocument}
    {...props}
  />
);

export type PartyInvitationSubscriptionProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<
    PartyInvitationSubscriptionSubscription,
    PartyInvitationSubscriptionSubscriptionVariables
  >
> &
  TChildProps;
export function withPartyInvitationSubscription<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    PartyInvitationSubscriptionSubscription,
    PartyInvitationSubscriptionSubscriptionVariables,
    PartyInvitationSubscriptionProps<TChildProps>
  >
) {
  return ReactApollo.withSubscription<
    TProps,
    PartyInvitationSubscriptionSubscription,
    PartyInvitationSubscriptionSubscriptionVariables,
    PartyInvitationSubscriptionProps<TChildProps>
  >(PartyInvitationSubscriptionDocument, {
    alias: 'withPartyInvitationSubscription',
    ...operationOptions
  });
}

export function usePartyInvitationSubscriptionSubscription(
  baseOptions?: ReactApolloHooks.SubscriptionHookOptions<
    PartyInvitationSubscriptionSubscription,
    PartyInvitationSubscriptionSubscriptionVariables
  >
) {
  return ReactApolloHooks.useSubscription<
    PartyInvitationSubscriptionSubscription,
    PartyInvitationSubscriptionSubscriptionVariables
  >(PartyInvitationSubscriptionDocument, baseOptions);
}
export const JoinPartyFindDocument = gql`
  query JoinPartyFind($inviteSecret: String!, $userId: ID!) {
    parties(
      where: { inviteSecret: $inviteSecret, members_none: { id: $userId } }
    ) {
      id
      members(first: 3) {
        id
        firstName
        lastName
        avatar
      }
      title
    }
    membersCount: paginateUsers(
      where: { parties_some: { inviteSecret: $inviteSecret } }
    ) {
      aggregate {
        count
      }
    }
  }
`;
export type JoinPartyFindComponentProps = Omit<
  Omit<
    ReactApollo.QueryProps<JoinPartyFindQuery, JoinPartyFindQueryVariables>,
    'query'
  >,
  'variables'
> & { variables: JoinPartyFindQueryVariables };

export const JoinPartyFindComponent = (props: JoinPartyFindComponentProps) => (
  <ReactApollo.Query<JoinPartyFindQuery, JoinPartyFindQueryVariables>
    query={JoinPartyFindDocument}
    {...props}
  />
);

export type JoinPartyFindProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<JoinPartyFindQuery, JoinPartyFindQueryVariables>
> &
  TChildProps;
export function withJoinPartyFind<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    JoinPartyFindQuery,
    JoinPartyFindQueryVariables,
    JoinPartyFindProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    JoinPartyFindQuery,
    JoinPartyFindQueryVariables,
    JoinPartyFindProps<TChildProps>
  >(JoinPartyFindDocument, {
    alias: 'withJoinPartyFind',
    ...operationOptions
  });
}

export function useJoinPartyFindQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<JoinPartyFindQueryVariables>
) {
  return ReactApolloHooks.useQuery<
    JoinPartyFindQuery,
    JoinPartyFindQueryVariables
  >(JoinPartyFindDocument, baseOptions);
}
