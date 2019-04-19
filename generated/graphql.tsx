export type Maybe<T> = T | null;

export interface ChatWhereUniqueInput {
  id?: Maybe<string>;
}

export interface PartyWhereInput {
  id?: Maybe<string>;

  id_not?: Maybe<string>;

  id_in?: Maybe<string[]>;

  id_not_in?: Maybe<string[]>;

  id_lt?: Maybe<string>;

  id_lte?: Maybe<string>;

  id_gt?: Maybe<string>;

  id_gte?: Maybe<string>;

  id_contains?: Maybe<string>;

  id_not_contains?: Maybe<string>;

  id_starts_with?: Maybe<string>;

  id_not_starts_with?: Maybe<string>;

  id_ends_with?: Maybe<string>;

  id_not_ends_with?: Maybe<string>;

  title?: Maybe<string>;

  title_not?: Maybe<string>;

  title_in?: Maybe<string[]>;

  title_not_in?: Maybe<string[]>;

  title_lt?: Maybe<string>;

  title_lte?: Maybe<string>;

  title_gt?: Maybe<string>;

  title_gte?: Maybe<string>;

  title_contains?: Maybe<string>;

  title_not_contains?: Maybe<string>;

  title_starts_with?: Maybe<string>;

  title_not_starts_with?: Maybe<string>;

  title_ends_with?: Maybe<string>;

  title_not_ends_with?: Maybe<string>;

  description?: Maybe<string>;

  description_not?: Maybe<string>;

  description_in?: Maybe<string[]>;

  description_not_in?: Maybe<string[]>;

  description_lt?: Maybe<string>;

  description_lte?: Maybe<string>;

  description_gt?: Maybe<string>;

  description_gte?: Maybe<string>;

  description_contains?: Maybe<string>;

  description_not_contains?: Maybe<string>;

  description_starts_with?: Maybe<string>;

  description_not_starts_with?: Maybe<string>;

  description_ends_with?: Maybe<string>;

  description_not_ends_with?: Maybe<string>;

  author?: Maybe<UserWhereInput>;

  createdAt?: Maybe<DateTime>;

  createdAt_not?: Maybe<DateTime>;

  createdAt_in?: Maybe<DateTime[]>;

  createdAt_not_in?: Maybe<DateTime[]>;

  createdAt_lt?: Maybe<DateTime>;

  createdAt_lte?: Maybe<DateTime>;

  createdAt_gt?: Maybe<DateTime>;

  createdAt_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;

  updatedAt_not?: Maybe<DateTime>;

  updatedAt_in?: Maybe<DateTime[]>;

  updatedAt_not_in?: Maybe<DateTime[]>;

  updatedAt_lt?: Maybe<DateTime>;

  updatedAt_lte?: Maybe<DateTime>;

  updatedAt_gt?: Maybe<DateTime>;

  updatedAt_gte?: Maybe<DateTime>;

  location?: Maybe<LocationWhereInput>;

  games_every?: Maybe<GameWhereInput>;

  games_some?: Maybe<GameWhereInput>;

  games_none?: Maybe<GameWhereInput>;

  colorTint?: Maybe<string>;

  colorTint_not?: Maybe<string>;

  colorTint_in?: Maybe<string[]>;

  colorTint_not_in?: Maybe<string[]>;

  colorTint_lt?: Maybe<string>;

  colorTint_lte?: Maybe<string>;

  colorTint_gt?: Maybe<string>;

  colorTint_gte?: Maybe<string>;

  colorTint_contains?: Maybe<string>;

  colorTint_not_contains?: Maybe<string>;

  colorTint_starts_with?: Maybe<string>;

  colorTint_not_starts_with?: Maybe<string>;

  colorTint_ends_with?: Maybe<string>;

  colorTint_not_ends_with?: Maybe<string>;

  isPublic?: Maybe<boolean>;

  isPublic_not?: Maybe<boolean>;

  members_every?: Maybe<UserWhereInput>;

  members_some?: Maybe<UserWhereInput>;

  members_none?: Maybe<UserWhereInput>;

  start?: Maybe<DateTime>;

  start_not?: Maybe<DateTime>;

  start_in?: Maybe<DateTime[]>;

  start_not_in?: Maybe<DateTime[]>;

  start_lt?: Maybe<DateTime>;

  start_lte?: Maybe<DateTime>;

  start_gt?: Maybe<DateTime>;

  start_gte?: Maybe<DateTime>;

  end?: Maybe<DateTime>;

  end_not?: Maybe<DateTime>;

  end_in?: Maybe<DateTime[]>;

  end_not_in?: Maybe<DateTime[]>;

  end_lt?: Maybe<DateTime>;

  end_lte?: Maybe<DateTime>;

  end_gt?: Maybe<DateTime>;

  end_gte?: Maybe<DateTime>;

  AND?: Maybe<PartyWhereInput[]>;

  OR?: Maybe<PartyWhereInput[]>;

  NOT?: Maybe<PartyWhereInput[]>;
}

export interface UserWhereInput {
  id?: Maybe<string>;

  id_not?: Maybe<string>;

  id_in?: Maybe<string[]>;

  id_not_in?: Maybe<string[]>;

  id_lt?: Maybe<string>;

  id_lte?: Maybe<string>;

  id_gt?: Maybe<string>;

  id_gte?: Maybe<string>;

  id_contains?: Maybe<string>;

  id_not_contains?: Maybe<string>;

  id_starts_with?: Maybe<string>;

  id_not_starts_with?: Maybe<string>;

  id_ends_with?: Maybe<string>;

  id_not_ends_with?: Maybe<string>;

  email?: Maybe<string>;

  email_not?: Maybe<string>;

  email_in?: Maybe<string[]>;

  email_not_in?: Maybe<string[]>;

  email_lt?: Maybe<string>;

  email_lte?: Maybe<string>;

  email_gt?: Maybe<string>;

  email_gte?: Maybe<string>;

  email_contains?: Maybe<string>;

  email_not_contains?: Maybe<string>;

  email_starts_with?: Maybe<string>;

  email_not_starts_with?: Maybe<string>;

  email_ends_with?: Maybe<string>;

  email_not_ends_with?: Maybe<string>;

  firstName?: Maybe<string>;

  firstName_not?: Maybe<string>;

  firstName_in?: Maybe<string[]>;

  firstName_not_in?: Maybe<string[]>;

  firstName_lt?: Maybe<string>;

  firstName_lte?: Maybe<string>;

  firstName_gt?: Maybe<string>;

  firstName_gte?: Maybe<string>;

  firstName_contains?: Maybe<string>;

  firstName_not_contains?: Maybe<string>;

  firstName_starts_with?: Maybe<string>;

  firstName_not_starts_with?: Maybe<string>;

  firstName_ends_with?: Maybe<string>;

  firstName_not_ends_with?: Maybe<string>;

  lastName?: Maybe<string>;

  lastName_not?: Maybe<string>;

  lastName_in?: Maybe<string[]>;

  lastName_not_in?: Maybe<string[]>;

  lastName_lt?: Maybe<string>;

  lastName_lte?: Maybe<string>;

  lastName_gt?: Maybe<string>;

  lastName_gte?: Maybe<string>;

  lastName_contains?: Maybe<string>;

  lastName_not_contains?: Maybe<string>;

  lastName_starts_with?: Maybe<string>;

  lastName_not_starts_with?: Maybe<string>;

  lastName_ends_with?: Maybe<string>;

  lastName_not_ends_with?: Maybe<string>;

  password?: Maybe<string>;

  password_not?: Maybe<string>;

  password_in?: Maybe<string[]>;

  password_not_in?: Maybe<string[]>;

  password_lt?: Maybe<string>;

  password_lte?: Maybe<string>;

  password_gt?: Maybe<string>;

  password_gte?: Maybe<string>;

  password_contains?: Maybe<string>;

  password_not_contains?: Maybe<string>;

  password_starts_with?: Maybe<string>;

  password_not_starts_with?: Maybe<string>;

  password_ends_with?: Maybe<string>;

  password_not_ends_with?: Maybe<string>;

  parties_every?: Maybe<PartyWhereInput>;

  parties_some?: Maybe<PartyWhereInput>;

  parties_none?: Maybe<PartyWhereInput>;

  friends_every?: Maybe<UserWhereInput>;

  friends_some?: Maybe<UserWhereInput>;

  friends_none?: Maybe<UserWhereInput>;

  pendingInvitations_every?: Maybe<UserWhereInput>;

  pendingInvitations_some?: Maybe<UserWhereInput>;

  pendingInvitations_none?: Maybe<UserWhereInput>;

  unreadMessages_every?: Maybe<MessageWhereInput>;

  unreadMessages_some?: Maybe<MessageWhereInput>;

  unreadMessages_none?: Maybe<MessageWhereInput>;

  chats_every?: Maybe<ChatWhereInput>;

  chats_some?: Maybe<ChatWhereInput>;

  chats_none?: Maybe<ChatWhereInput>;

  createdAt?: Maybe<DateTime>;

  createdAt_not?: Maybe<DateTime>;

  createdAt_in?: Maybe<DateTime[]>;

  createdAt_not_in?: Maybe<DateTime[]>;

  createdAt_lt?: Maybe<DateTime>;

  createdAt_lte?: Maybe<DateTime>;

  createdAt_gt?: Maybe<DateTime>;

  createdAt_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;

  updatedAt_not?: Maybe<DateTime>;

  updatedAt_in?: Maybe<DateTime[]>;

  updatedAt_not_in?: Maybe<DateTime[]>;

  updatedAt_lt?: Maybe<DateTime>;

  updatedAt_lte?: Maybe<DateTime>;

  updatedAt_gt?: Maybe<DateTime>;

  updatedAt_gte?: Maybe<DateTime>;

  lastOnline?: Maybe<DateTime>;

  lastOnline_not?: Maybe<DateTime>;

  lastOnline_in?: Maybe<DateTime[]>;

  lastOnline_not_in?: Maybe<DateTime[]>;

  lastOnline_lt?: Maybe<DateTime>;

  lastOnline_lte?: Maybe<DateTime>;

  lastOnline_gt?: Maybe<DateTime>;

  lastOnline_gte?: Maybe<DateTime>;

  deleted?: Maybe<boolean>;

  deleted_not?: Maybe<boolean>;

  provider?: Maybe<SocialMediaType>;

  provider_not?: Maybe<SocialMediaType>;

  provider_in?: Maybe<SocialMediaType[]>;

  provider_not_in?: Maybe<SocialMediaType[]>;

  avatar?: Maybe<string>;

  avatar_not?: Maybe<string>;

  avatar_in?: Maybe<string[]>;

  avatar_not_in?: Maybe<string[]>;

  avatar_lt?: Maybe<string>;

  avatar_lte?: Maybe<string>;

  avatar_gt?: Maybe<string>;

  avatar_gte?: Maybe<string>;

  avatar_contains?: Maybe<string>;

  avatar_not_contains?: Maybe<string>;

  avatar_starts_with?: Maybe<string>;

  avatar_not_starts_with?: Maybe<string>;

  avatar_ends_with?: Maybe<string>;

  avatar_not_ends_with?: Maybe<string>;

  thirdPartyId?: Maybe<string>;

  thirdPartyId_not?: Maybe<string>;

  thirdPartyId_in?: Maybe<string[]>;

  thirdPartyId_not_in?: Maybe<string[]>;

  thirdPartyId_lt?: Maybe<string>;

  thirdPartyId_lte?: Maybe<string>;

  thirdPartyId_gt?: Maybe<string>;

  thirdPartyId_gte?: Maybe<string>;

  thirdPartyId_contains?: Maybe<string>;

  thirdPartyId_not_contains?: Maybe<string>;

  thirdPartyId_starts_with?: Maybe<string>;

  thirdPartyId_not_starts_with?: Maybe<string>;

  thirdPartyId_ends_with?: Maybe<string>;

  thirdPartyId_not_ends_with?: Maybe<string>;

  AND?: Maybe<UserWhereInput[]>;

  OR?: Maybe<UserWhereInput[]>;

  NOT?: Maybe<UserWhereInput[]>;
}

export interface MessageWhereInput {
  id?: Maybe<string>;

  id_not?: Maybe<string>;

  id_in?: Maybe<string[]>;

  id_not_in?: Maybe<string[]>;

  id_lt?: Maybe<string>;

  id_lte?: Maybe<string>;

  id_gt?: Maybe<string>;

  id_gte?: Maybe<string>;

  id_contains?: Maybe<string>;

  id_not_contains?: Maybe<string>;

  id_starts_with?: Maybe<string>;

  id_not_starts_with?: Maybe<string>;

  id_ends_with?: Maybe<string>;

  id_not_ends_with?: Maybe<string>;

  author?: Maybe<UserWhereInput>;

  chat?: Maybe<ChatWhereInput>;

  content?: Maybe<string>;

  content_not?: Maybe<string>;

  content_in?: Maybe<string[]>;

  content_not_in?: Maybe<string[]>;

  content_lt?: Maybe<string>;

  content_lte?: Maybe<string>;

  content_gt?: Maybe<string>;

  content_gte?: Maybe<string>;

  content_contains?: Maybe<string>;

  content_not_contains?: Maybe<string>;

  content_starts_with?: Maybe<string>;

  content_not_starts_with?: Maybe<string>;

  content_ends_with?: Maybe<string>;

  content_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;

  createdAt_not?: Maybe<DateTime>;

  createdAt_in?: Maybe<DateTime[]>;

  createdAt_not_in?: Maybe<DateTime[]>;

  createdAt_lt?: Maybe<DateTime>;

  createdAt_lte?: Maybe<DateTime>;

  createdAt_gt?: Maybe<DateTime>;

  createdAt_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;

  updatedAt_not?: Maybe<DateTime>;

  updatedAt_in?: Maybe<DateTime[]>;

  updatedAt_not_in?: Maybe<DateTime[]>;

  updatedAt_lt?: Maybe<DateTime>;

  updatedAt_lte?: Maybe<DateTime>;

  updatedAt_gt?: Maybe<DateTime>;

  updatedAt_gte?: Maybe<DateTime>;

  AND?: Maybe<MessageWhereInput[]>;

  OR?: Maybe<MessageWhereInput[]>;

  NOT?: Maybe<MessageWhereInput[]>;
}

export interface ChatWhereInput {
  id?: Maybe<string>;

  id_not?: Maybe<string>;

  id_in?: Maybe<string[]>;

  id_not_in?: Maybe<string[]>;

  id_lt?: Maybe<string>;

  id_lte?: Maybe<string>;

  id_gt?: Maybe<string>;

  id_gte?: Maybe<string>;

  id_contains?: Maybe<string>;

  id_not_contains?: Maybe<string>;

  id_starts_with?: Maybe<string>;

  id_not_starts_with?: Maybe<string>;

  id_ends_with?: Maybe<string>;

  id_not_ends_with?: Maybe<string>;

  party?: Maybe<PartyWhereInput>;

  members_every?: Maybe<UserWhereInput>;

  members_some?: Maybe<UserWhereInput>;

  members_none?: Maybe<UserWhereInput>;

  messages_every?: Maybe<MessageWhereInput>;

  messages_some?: Maybe<MessageWhereInput>;

  messages_none?: Maybe<MessageWhereInput>;

  createdAt?: Maybe<DateTime>;

  createdAt_not?: Maybe<DateTime>;

  createdAt_in?: Maybe<DateTime[]>;

  createdAt_not_in?: Maybe<DateTime[]>;

  createdAt_lt?: Maybe<DateTime>;

  createdAt_lte?: Maybe<DateTime>;

  createdAt_gt?: Maybe<DateTime>;

  createdAt_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;

  updatedAt_not?: Maybe<DateTime>;

  updatedAt_in?: Maybe<DateTime[]>;

  updatedAt_not_in?: Maybe<DateTime[]>;

  updatedAt_lt?: Maybe<DateTime>;

  updatedAt_lte?: Maybe<DateTime>;

  updatedAt_gt?: Maybe<DateTime>;

  updatedAt_gte?: Maybe<DateTime>;

  AND?: Maybe<ChatWhereInput[]>;

  OR?: Maybe<ChatWhereInput[]>;

  NOT?: Maybe<ChatWhereInput[]>;
}

export interface LocationWhereInput {
  id?: Maybe<string>;

  id_not?: Maybe<string>;

  id_in?: Maybe<string[]>;

  id_not_in?: Maybe<string[]>;

  id_lt?: Maybe<string>;

  id_lte?: Maybe<string>;

  id_gt?: Maybe<string>;

  id_gte?: Maybe<string>;

  id_contains?: Maybe<string>;

  id_not_contains?: Maybe<string>;

  id_starts_with?: Maybe<string>;

  id_not_starts_with?: Maybe<string>;

  id_ends_with?: Maybe<string>;

  id_not_ends_with?: Maybe<string>;

  placeName?: Maybe<string>;

  placeName_not?: Maybe<string>;

  placeName_in?: Maybe<string[]>;

  placeName_not_in?: Maybe<string[]>;

  placeName_lt?: Maybe<string>;

  placeName_lte?: Maybe<string>;

  placeName_gt?: Maybe<string>;

  placeName_gte?: Maybe<string>;

  placeName_contains?: Maybe<string>;

  placeName_not_contains?: Maybe<string>;

  placeName_starts_with?: Maybe<string>;

  placeName_not_starts_with?: Maybe<string>;

  placeName_ends_with?: Maybe<string>;

  placeName_not_ends_with?: Maybe<string>;

  latitude?: Maybe<number>;

  latitude_not?: Maybe<number>;

  latitude_in?: Maybe<number[]>;

  latitude_not_in?: Maybe<number[]>;

  latitude_lt?: Maybe<number>;

  latitude_lte?: Maybe<number>;

  latitude_gt?: Maybe<number>;

  latitude_gte?: Maybe<number>;

  longitude?: Maybe<number>;

  longitude_not?: Maybe<number>;

  longitude_in?: Maybe<number[]>;

  longitude_not_in?: Maybe<number[]>;

  longitude_lt?: Maybe<number>;

  longitude_lte?: Maybe<number>;

  longitude_gt?: Maybe<number>;

  longitude_gte?: Maybe<number>;

  createdAt?: Maybe<DateTime>;

  createdAt_not?: Maybe<DateTime>;

  createdAt_in?: Maybe<DateTime[]>;

  createdAt_not_in?: Maybe<DateTime[]>;

  createdAt_lt?: Maybe<DateTime>;

  createdAt_lte?: Maybe<DateTime>;

  createdAt_gt?: Maybe<DateTime>;

  createdAt_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;

  updatedAt_not?: Maybe<DateTime>;

  updatedAt_in?: Maybe<DateTime[]>;

  updatedAt_not_in?: Maybe<DateTime[]>;

  updatedAt_lt?: Maybe<DateTime>;

  updatedAt_lte?: Maybe<DateTime>;

  updatedAt_gt?: Maybe<DateTime>;

  updatedAt_gte?: Maybe<DateTime>;

  AND?: Maybe<LocationWhereInput[]>;

  OR?: Maybe<LocationWhereInput[]>;

  NOT?: Maybe<LocationWhereInput[]>;
}

export interface GameWhereInput {
  id?: Maybe<string>;

  id_not?: Maybe<string>;

  id_in?: Maybe<string[]>;

  id_not_in?: Maybe<string[]>;

  id_lt?: Maybe<string>;

  id_lte?: Maybe<string>;

  id_gt?: Maybe<string>;

  id_gte?: Maybe<string>;

  id_contains?: Maybe<string>;

  id_not_contains?: Maybe<string>;

  id_starts_with?: Maybe<string>;

  id_not_starts_with?: Maybe<string>;

  id_ends_with?: Maybe<string>;

  id_not_ends_with?: Maybe<string>;

  title?: Maybe<string>;

  title_not?: Maybe<string>;

  title_in?: Maybe<string[]>;

  title_not_in?: Maybe<string[]>;

  title_lt?: Maybe<string>;

  title_lte?: Maybe<string>;

  title_gt?: Maybe<string>;

  title_gte?: Maybe<string>;

  title_contains?: Maybe<string>;

  title_not_contains?: Maybe<string>;

  title_starts_with?: Maybe<string>;

  title_not_starts_with?: Maybe<string>;

  title_ends_with?: Maybe<string>;

  title_not_ends_with?: Maybe<string>;

  cover?: Maybe<string>;

  cover_not?: Maybe<string>;

  cover_in?: Maybe<string[]>;

  cover_not_in?: Maybe<string[]>;

  cover_lt?: Maybe<string>;

  cover_lte?: Maybe<string>;

  cover_gt?: Maybe<string>;

  cover_gte?: Maybe<string>;

  cover_contains?: Maybe<string>;

  cover_not_contains?: Maybe<string>;

  cover_starts_with?: Maybe<string>;

  cover_not_starts_with?: Maybe<string>;

  cover_ends_with?: Maybe<string>;

  cover_not_ends_with?: Maybe<string>;

  type?: Maybe<GameType>;

  type_not?: Maybe<GameType>;

  type_in?: Maybe<GameType[]>;

  type_not_in?: Maybe<GameType[]>;

  createdAt?: Maybe<DateTime>;

  createdAt_not?: Maybe<DateTime>;

  createdAt_in?: Maybe<DateTime[]>;

  createdAt_not_in?: Maybe<DateTime[]>;

  createdAt_lt?: Maybe<DateTime>;

  createdAt_lte?: Maybe<DateTime>;

  createdAt_gt?: Maybe<DateTime>;

  createdAt_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;

  updatedAt_not?: Maybe<DateTime>;

  updatedAt_in?: Maybe<DateTime[]>;

  updatedAt_not_in?: Maybe<DateTime[]>;

  updatedAt_lt?: Maybe<DateTime>;

  updatedAt_lte?: Maybe<DateTime>;

  updatedAt_gt?: Maybe<DateTime>;

  updatedAt_gte?: Maybe<DateTime>;

  AND?: Maybe<GameWhereInput[]>;

  OR?: Maybe<GameWhereInput[]>;

  NOT?: Maybe<GameWhereInput[]>;
}

export interface GameWhereUniqueInput {
  id?: Maybe<string>;

  title?: Maybe<string>;
}

export interface LocationWhereUniqueInput {
  id?: Maybe<string>;
}

export interface MessageWhereUniqueInput {
  id?: Maybe<string>;
}

export interface PartyWhereUniqueInput {
  id?: Maybe<string>;
}

export interface UserWhereUniqueInput {
  id?: Maybe<string>;

  email?: Maybe<string>;
}

export interface ChatCreateInput {
  id?: Maybe<string>;

  party: PartyCreateOneInput;

  members?: Maybe<UserCreateManyWithoutChatsInput>;

  messages?: Maybe<MessageCreateManyWithoutChatInput>;
}

export interface PartyCreateOneInput {
  create?: Maybe<PartyCreateInput>;

  connect?: Maybe<PartyWhereUniqueInput>;
}

export interface PartyCreateInput {
  id?: Maybe<string>;

  title: string;

  description: string;

  author: UserCreateOneInput;

  location: LocationCreateOneInput;

  games?: Maybe<GameCreateManyInput>;

  colorTint: string;

  isPublic?: Maybe<boolean>;

  members?: Maybe<UserCreateManyWithoutPartiesInput>;

  start?: Maybe<DateTime>;

  end?: Maybe<DateTime>;
}

export interface UserCreateOneInput {
  create?: Maybe<UserCreateInput>;

  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserCreateInput {
  id?: Maybe<string>;

  email: string;

  firstName: string;

  lastName: string;

  password: string;

  parties?: Maybe<PartyCreateManyWithoutMembersInput>;

  friends?: Maybe<UserCreateManyWithoutFriendsInput>;

  pendingInvitations?: Maybe<UserCreateManyWithoutPendingInvitationsInput>;

  unreadMessages?: Maybe<MessageCreateManyWithoutAuthorInput>;

  chats?: Maybe<ChatCreateManyWithoutMembersInput>;

  lastOnline?: Maybe<DateTime>;

  deleted?: Maybe<boolean>;

  provider?: Maybe<SocialMediaType>;

  avatar?: Maybe<string>;

  thirdPartyId?: Maybe<string>;
}

export interface PartyCreateManyWithoutMembersInput {
  create?: Maybe<PartyCreateWithoutMembersInput[]>;

  connect?: Maybe<PartyWhereUniqueInput[]>;
}

export interface PartyCreateWithoutMembersInput {
  id?: Maybe<string>;

  title: string;

  description: string;

  author: UserCreateOneInput;

  location: LocationCreateOneInput;

  games?: Maybe<GameCreateManyInput>;

  colorTint: string;

  isPublic?: Maybe<boolean>;

  start?: Maybe<DateTime>;

  end?: Maybe<DateTime>;
}

export interface LocationCreateOneInput {
  create?: Maybe<LocationCreateInput>;

  connect?: Maybe<LocationWhereUniqueInput>;
}

export interface LocationCreateInput {
  id?: Maybe<string>;

  placeName: string;

  latitude: number;

  longitude: number;
}

export interface GameCreateManyInput {
  create?: Maybe<GameCreateInput[]>;

  connect?: Maybe<GameWhereUniqueInput[]>;
}

export interface GameCreateInput {
  id?: Maybe<string>;

  title: string;

  cover?: Maybe<string>;

  type: GameType;
}

export interface UserCreateManyWithoutFriendsInput {
  create?: Maybe<UserCreateWithoutFriendsInput[]>;

  connect?: Maybe<UserWhereUniqueInput[]>;
}

export interface UserCreateWithoutFriendsInput {
  id?: Maybe<string>;

  email: string;

  firstName: string;

  lastName: string;

  password: string;

  parties?: Maybe<PartyCreateManyWithoutMembersInput>;

  pendingInvitations?: Maybe<UserCreateManyWithoutPendingInvitationsInput>;

  unreadMessages?: Maybe<MessageCreateManyWithoutAuthorInput>;

  chats?: Maybe<ChatCreateManyWithoutMembersInput>;

  lastOnline?: Maybe<DateTime>;

  deleted?: Maybe<boolean>;

  provider?: Maybe<SocialMediaType>;

  avatar?: Maybe<string>;

  thirdPartyId?: Maybe<string>;
}

export interface UserCreateManyWithoutPendingInvitationsInput {
  create?: Maybe<UserCreateWithoutPendingInvitationsInput[]>;

  connect?: Maybe<UserWhereUniqueInput[]>;
}

export interface UserCreateWithoutPendingInvitationsInput {
  id?: Maybe<string>;

  email: string;

  firstName: string;

  lastName: string;

  password: string;

  parties?: Maybe<PartyCreateManyWithoutMembersInput>;

  friends?: Maybe<UserCreateManyWithoutFriendsInput>;

  unreadMessages?: Maybe<MessageCreateManyWithoutAuthorInput>;

  chats?: Maybe<ChatCreateManyWithoutMembersInput>;

  lastOnline?: Maybe<DateTime>;

  deleted?: Maybe<boolean>;

  provider?: Maybe<SocialMediaType>;

  avatar?: Maybe<string>;

  thirdPartyId?: Maybe<string>;
}

export interface MessageCreateManyWithoutAuthorInput {
  create?: Maybe<MessageCreateWithoutAuthorInput[]>;

  connect?: Maybe<MessageWhereUniqueInput[]>;
}

export interface MessageCreateWithoutAuthorInput {
  id?: Maybe<string>;

  chat: ChatCreateOneWithoutMessagesInput;

  content: string;
}

export interface ChatCreateOneWithoutMessagesInput {
  create?: Maybe<ChatCreateWithoutMessagesInput>;

  connect?: Maybe<ChatWhereUniqueInput>;
}

export interface ChatCreateWithoutMessagesInput {
  id?: Maybe<string>;

  party: PartyCreateOneInput;

  members?: Maybe<UserCreateManyWithoutChatsInput>;
}

export interface UserCreateManyWithoutChatsInput {
  create?: Maybe<UserCreateWithoutChatsInput[]>;

  connect?: Maybe<UserWhereUniqueInput[]>;
}

export interface UserCreateWithoutChatsInput {
  id?: Maybe<string>;

  email: string;

  firstName: string;

  lastName: string;

  password: string;

  parties?: Maybe<PartyCreateManyWithoutMembersInput>;

  friends?: Maybe<UserCreateManyWithoutFriendsInput>;

  pendingInvitations?: Maybe<UserCreateManyWithoutPendingInvitationsInput>;

  unreadMessages?: Maybe<MessageCreateManyWithoutAuthorInput>;

  lastOnline?: Maybe<DateTime>;

  deleted?: Maybe<boolean>;

  provider?: Maybe<SocialMediaType>;

  avatar?: Maybe<string>;

  thirdPartyId?: Maybe<string>;
}

export interface ChatCreateManyWithoutMembersInput {
  create?: Maybe<ChatCreateWithoutMembersInput[]>;

  connect?: Maybe<ChatWhereUniqueInput[]>;
}

export interface ChatCreateWithoutMembersInput {
  id?: Maybe<string>;

  party: PartyCreateOneInput;

  messages?: Maybe<MessageCreateManyWithoutChatInput>;
}

export interface MessageCreateManyWithoutChatInput {
  create?: Maybe<MessageCreateWithoutChatInput[]>;

  connect?: Maybe<MessageWhereUniqueInput[]>;
}

export interface MessageCreateWithoutChatInput {
  id?: Maybe<string>;

  author: UserCreateOneWithoutUnreadMessagesInput;

  content: string;
}

export interface UserCreateOneWithoutUnreadMessagesInput {
  create?: Maybe<UserCreateWithoutUnreadMessagesInput>;

  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserCreateWithoutUnreadMessagesInput {
  id?: Maybe<string>;

  email: string;

  firstName: string;

  lastName: string;

  password: string;

  parties?: Maybe<PartyCreateManyWithoutMembersInput>;

  friends?: Maybe<UserCreateManyWithoutFriendsInput>;

  pendingInvitations?: Maybe<UserCreateManyWithoutPendingInvitationsInput>;

  chats?: Maybe<ChatCreateManyWithoutMembersInput>;

  lastOnline?: Maybe<DateTime>;

  deleted?: Maybe<boolean>;

  provider?: Maybe<SocialMediaType>;

  avatar?: Maybe<string>;

  thirdPartyId?: Maybe<string>;
}

export interface UserCreateManyWithoutPartiesInput {
  create?: Maybe<UserCreateWithoutPartiesInput[]>;

  connect?: Maybe<UserWhereUniqueInput[]>;
}

export interface UserCreateWithoutPartiesInput {
  id?: Maybe<string>;

  email: string;

  firstName: string;

  lastName: string;

  password: string;

  friends?: Maybe<UserCreateManyWithoutFriendsInput>;

  pendingInvitations?: Maybe<UserCreateManyWithoutPendingInvitationsInput>;

  unreadMessages?: Maybe<MessageCreateManyWithoutAuthorInput>;

  chats?: Maybe<ChatCreateManyWithoutMembersInput>;

  lastOnline?: Maybe<DateTime>;

  deleted?: Maybe<boolean>;

  provider?: Maybe<SocialMediaType>;

  avatar?: Maybe<string>;

  thirdPartyId?: Maybe<string>;
}

export interface ChatUpdateInput {
  party?: Maybe<PartyUpdateOneRequiredInput>;

  members?: Maybe<UserUpdateManyWithoutChatsInput>;

  messages?: Maybe<MessageUpdateManyWithoutChatInput>;
}

export interface PartyUpdateOneRequiredInput {
  create?: Maybe<PartyCreateInput>;

  update?: Maybe<PartyUpdateDataInput>;

  upsert?: Maybe<PartyUpsertNestedInput>;

  connect?: Maybe<PartyWhereUniqueInput>;
}

export interface PartyUpdateDataInput {
  title?: Maybe<string>;

  description?: Maybe<string>;

  author?: Maybe<UserUpdateOneRequiredInput>;

  location?: Maybe<LocationUpdateOneRequiredInput>;

  games?: Maybe<GameUpdateManyInput>;

  colorTint?: Maybe<string>;

  isPublic?: Maybe<boolean>;

  members?: Maybe<UserUpdateManyWithoutPartiesInput>;

  start?: Maybe<DateTime>;

  end?: Maybe<DateTime>;
}

export interface UserUpdateOneRequiredInput {
  create?: Maybe<UserCreateInput>;

  update?: Maybe<UserUpdateDataInput>;

  upsert?: Maybe<UserUpsertNestedInput>;

  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserUpdateDataInput {
  email?: Maybe<string>;

  firstName?: Maybe<string>;

  lastName?: Maybe<string>;

  password?: Maybe<string>;

  parties?: Maybe<PartyUpdateManyWithoutMembersInput>;

  friends?: Maybe<UserUpdateManyWithoutFriendsInput>;

  pendingInvitations?: Maybe<UserUpdateManyWithoutPendingInvitationsInput>;

  unreadMessages?: Maybe<MessageUpdateManyWithoutAuthorInput>;

  chats?: Maybe<ChatUpdateManyWithoutMembersInput>;

  lastOnline?: Maybe<DateTime>;

  deleted?: Maybe<boolean>;

  provider?: Maybe<SocialMediaType>;

  avatar?: Maybe<string>;

  thirdPartyId?: Maybe<string>;
}

export interface PartyUpdateManyWithoutMembersInput {
  create?: Maybe<PartyCreateWithoutMembersInput[]>;

  delete?: Maybe<PartyWhereUniqueInput[]>;

  connect?: Maybe<PartyWhereUniqueInput[]>;

  set?: Maybe<PartyWhereUniqueInput[]>;

  disconnect?: Maybe<PartyWhereUniqueInput[]>;

  update?: Maybe<PartyUpdateWithWhereUniqueWithoutMembersInput[]>;

  upsert?: Maybe<PartyUpsertWithWhereUniqueWithoutMembersInput[]>;

  deleteMany?: Maybe<PartyScalarWhereInput[]>;

  updateMany?: Maybe<PartyUpdateManyWithWhereNestedInput[]>;
}

export interface PartyUpdateWithWhereUniqueWithoutMembersInput {
  where: PartyWhereUniqueInput;

  data: PartyUpdateWithoutMembersDataInput;
}

export interface PartyUpdateWithoutMembersDataInput {
  title?: Maybe<string>;

  description?: Maybe<string>;

  author?: Maybe<UserUpdateOneRequiredInput>;

  location?: Maybe<LocationUpdateOneRequiredInput>;

  games?: Maybe<GameUpdateManyInput>;

  colorTint?: Maybe<string>;

  isPublic?: Maybe<boolean>;

  start?: Maybe<DateTime>;

  end?: Maybe<DateTime>;
}

export interface LocationUpdateOneRequiredInput {
  create?: Maybe<LocationCreateInput>;

  update?: Maybe<LocationUpdateDataInput>;

  upsert?: Maybe<LocationUpsertNestedInput>;

  connect?: Maybe<LocationWhereUniqueInput>;
}

export interface LocationUpdateDataInput {
  placeName?: Maybe<string>;

  latitude?: Maybe<number>;

  longitude?: Maybe<number>;
}

export interface LocationUpsertNestedInput {
  update: LocationUpdateDataInput;

  create: LocationCreateInput;
}

export interface GameUpdateManyInput {
  create?: Maybe<GameCreateInput[]>;

  update?: Maybe<GameUpdateWithWhereUniqueNestedInput[]>;

  upsert?: Maybe<GameUpsertWithWhereUniqueNestedInput[]>;

  delete?: Maybe<GameWhereUniqueInput[]>;

  connect?: Maybe<GameWhereUniqueInput[]>;

  set?: Maybe<GameWhereUniqueInput[]>;

  disconnect?: Maybe<GameWhereUniqueInput[]>;

  deleteMany?: Maybe<GameScalarWhereInput[]>;

  updateMany?: Maybe<GameUpdateManyWithWhereNestedInput[]>;
}

export interface GameUpdateWithWhereUniqueNestedInput {
  where: GameWhereUniqueInput;

  data: GameUpdateDataInput;
}

export interface GameUpdateDataInput {
  title?: Maybe<string>;

  cover?: Maybe<string>;

  type?: Maybe<GameType>;
}

export interface GameUpsertWithWhereUniqueNestedInput {
  where: GameWhereUniqueInput;

  update: GameUpdateDataInput;

  create: GameCreateInput;
}

export interface GameScalarWhereInput {
  id?: Maybe<string>;

  id_not?: Maybe<string>;

  id_in?: Maybe<string[]>;

  id_not_in?: Maybe<string[]>;

  id_lt?: Maybe<string>;

  id_lte?: Maybe<string>;

  id_gt?: Maybe<string>;

  id_gte?: Maybe<string>;

  id_contains?: Maybe<string>;

  id_not_contains?: Maybe<string>;

  id_starts_with?: Maybe<string>;

  id_not_starts_with?: Maybe<string>;

  id_ends_with?: Maybe<string>;

  id_not_ends_with?: Maybe<string>;

  title?: Maybe<string>;

  title_not?: Maybe<string>;

  title_in?: Maybe<string[]>;

  title_not_in?: Maybe<string[]>;

  title_lt?: Maybe<string>;

  title_lte?: Maybe<string>;

  title_gt?: Maybe<string>;

  title_gte?: Maybe<string>;

  title_contains?: Maybe<string>;

  title_not_contains?: Maybe<string>;

  title_starts_with?: Maybe<string>;

  title_not_starts_with?: Maybe<string>;

  title_ends_with?: Maybe<string>;

  title_not_ends_with?: Maybe<string>;

  cover?: Maybe<string>;

  cover_not?: Maybe<string>;

  cover_in?: Maybe<string[]>;

  cover_not_in?: Maybe<string[]>;

  cover_lt?: Maybe<string>;

  cover_lte?: Maybe<string>;

  cover_gt?: Maybe<string>;

  cover_gte?: Maybe<string>;

  cover_contains?: Maybe<string>;

  cover_not_contains?: Maybe<string>;

  cover_starts_with?: Maybe<string>;

  cover_not_starts_with?: Maybe<string>;

  cover_ends_with?: Maybe<string>;

  cover_not_ends_with?: Maybe<string>;

  type?: Maybe<GameType>;

  type_not?: Maybe<GameType>;

  type_in?: Maybe<GameType[]>;

  type_not_in?: Maybe<GameType[]>;

  createdAt?: Maybe<DateTime>;

  createdAt_not?: Maybe<DateTime>;

  createdAt_in?: Maybe<DateTime[]>;

  createdAt_not_in?: Maybe<DateTime[]>;

  createdAt_lt?: Maybe<DateTime>;

  createdAt_lte?: Maybe<DateTime>;

  createdAt_gt?: Maybe<DateTime>;

  createdAt_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;

  updatedAt_not?: Maybe<DateTime>;

  updatedAt_in?: Maybe<DateTime[]>;

  updatedAt_not_in?: Maybe<DateTime[]>;

  updatedAt_lt?: Maybe<DateTime>;

  updatedAt_lte?: Maybe<DateTime>;

  updatedAt_gt?: Maybe<DateTime>;

  updatedAt_gte?: Maybe<DateTime>;

  AND?: Maybe<GameScalarWhereInput[]>;

  OR?: Maybe<GameScalarWhereInput[]>;

  NOT?: Maybe<GameScalarWhereInput[]>;
}

export interface GameUpdateManyWithWhereNestedInput {
  where: GameScalarWhereInput;

  data: GameUpdateManyDataInput;
}

export interface GameUpdateManyDataInput {
  title?: Maybe<string>;

  cover?: Maybe<string>;

  type?: Maybe<GameType>;
}

export interface PartyUpsertWithWhereUniqueWithoutMembersInput {
  where: PartyWhereUniqueInput;

  update: PartyUpdateWithoutMembersDataInput;

  create: PartyCreateWithoutMembersInput;
}

export interface PartyScalarWhereInput {
  id?: Maybe<string>;

  id_not?: Maybe<string>;

  id_in?: Maybe<string[]>;

  id_not_in?: Maybe<string[]>;

  id_lt?: Maybe<string>;

  id_lte?: Maybe<string>;

  id_gt?: Maybe<string>;

  id_gte?: Maybe<string>;

  id_contains?: Maybe<string>;

  id_not_contains?: Maybe<string>;

  id_starts_with?: Maybe<string>;

  id_not_starts_with?: Maybe<string>;

  id_ends_with?: Maybe<string>;

  id_not_ends_with?: Maybe<string>;

  title?: Maybe<string>;

  title_not?: Maybe<string>;

  title_in?: Maybe<string[]>;

  title_not_in?: Maybe<string[]>;

  title_lt?: Maybe<string>;

  title_lte?: Maybe<string>;

  title_gt?: Maybe<string>;

  title_gte?: Maybe<string>;

  title_contains?: Maybe<string>;

  title_not_contains?: Maybe<string>;

  title_starts_with?: Maybe<string>;

  title_not_starts_with?: Maybe<string>;

  title_ends_with?: Maybe<string>;

  title_not_ends_with?: Maybe<string>;

  description?: Maybe<string>;

  description_not?: Maybe<string>;

  description_in?: Maybe<string[]>;

  description_not_in?: Maybe<string[]>;

  description_lt?: Maybe<string>;

  description_lte?: Maybe<string>;

  description_gt?: Maybe<string>;

  description_gte?: Maybe<string>;

  description_contains?: Maybe<string>;

  description_not_contains?: Maybe<string>;

  description_starts_with?: Maybe<string>;

  description_not_starts_with?: Maybe<string>;

  description_ends_with?: Maybe<string>;

  description_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;

  createdAt_not?: Maybe<DateTime>;

  createdAt_in?: Maybe<DateTime[]>;

  createdAt_not_in?: Maybe<DateTime[]>;

  createdAt_lt?: Maybe<DateTime>;

  createdAt_lte?: Maybe<DateTime>;

  createdAt_gt?: Maybe<DateTime>;

  createdAt_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;

  updatedAt_not?: Maybe<DateTime>;

  updatedAt_in?: Maybe<DateTime[]>;

  updatedAt_not_in?: Maybe<DateTime[]>;

  updatedAt_lt?: Maybe<DateTime>;

  updatedAt_lte?: Maybe<DateTime>;

  updatedAt_gt?: Maybe<DateTime>;

  updatedAt_gte?: Maybe<DateTime>;

  colorTint?: Maybe<string>;

  colorTint_not?: Maybe<string>;

  colorTint_in?: Maybe<string[]>;

  colorTint_not_in?: Maybe<string[]>;

  colorTint_lt?: Maybe<string>;

  colorTint_lte?: Maybe<string>;

  colorTint_gt?: Maybe<string>;

  colorTint_gte?: Maybe<string>;

  colorTint_contains?: Maybe<string>;

  colorTint_not_contains?: Maybe<string>;

  colorTint_starts_with?: Maybe<string>;

  colorTint_not_starts_with?: Maybe<string>;

  colorTint_ends_with?: Maybe<string>;

  colorTint_not_ends_with?: Maybe<string>;

  isPublic?: Maybe<boolean>;

  isPublic_not?: Maybe<boolean>;

  start?: Maybe<DateTime>;

  start_not?: Maybe<DateTime>;

  start_in?: Maybe<DateTime[]>;

  start_not_in?: Maybe<DateTime[]>;

  start_lt?: Maybe<DateTime>;

  start_lte?: Maybe<DateTime>;

  start_gt?: Maybe<DateTime>;

  start_gte?: Maybe<DateTime>;

  end?: Maybe<DateTime>;

  end_not?: Maybe<DateTime>;

  end_in?: Maybe<DateTime[]>;

  end_not_in?: Maybe<DateTime[]>;

  end_lt?: Maybe<DateTime>;

  end_lte?: Maybe<DateTime>;

  end_gt?: Maybe<DateTime>;

  end_gte?: Maybe<DateTime>;

  AND?: Maybe<PartyScalarWhereInput[]>;

  OR?: Maybe<PartyScalarWhereInput[]>;

  NOT?: Maybe<PartyScalarWhereInput[]>;
}

export interface PartyUpdateManyWithWhereNestedInput {
  where: PartyScalarWhereInput;

  data: PartyUpdateManyDataInput;
}

export interface PartyUpdateManyDataInput {
  title?: Maybe<string>;

  description?: Maybe<string>;

  colorTint?: Maybe<string>;

  isPublic?: Maybe<boolean>;

  start?: Maybe<DateTime>;

  end?: Maybe<DateTime>;
}

export interface UserUpdateManyWithoutFriendsInput {
  create?: Maybe<UserCreateWithoutFriendsInput[]>;

  delete?: Maybe<UserWhereUniqueInput[]>;

  connect?: Maybe<UserWhereUniqueInput[]>;

  set?: Maybe<UserWhereUniqueInput[]>;

  disconnect?: Maybe<UserWhereUniqueInput[]>;

  update?: Maybe<UserUpdateWithWhereUniqueWithoutFriendsInput[]>;

  upsert?: Maybe<UserUpsertWithWhereUniqueWithoutFriendsInput[]>;

  deleteMany?: Maybe<UserScalarWhereInput[]>;

  updateMany?: Maybe<UserUpdateManyWithWhereNestedInput[]>;
}

export interface UserUpdateWithWhereUniqueWithoutFriendsInput {
  where: UserWhereUniqueInput;

  data: UserUpdateWithoutFriendsDataInput;
}

export interface UserUpdateWithoutFriendsDataInput {
  email?: Maybe<string>;

  firstName?: Maybe<string>;

  lastName?: Maybe<string>;

  password?: Maybe<string>;

  parties?: Maybe<PartyUpdateManyWithoutMembersInput>;

  pendingInvitations?: Maybe<UserUpdateManyWithoutPendingInvitationsInput>;

  unreadMessages?: Maybe<MessageUpdateManyWithoutAuthorInput>;

  chats?: Maybe<ChatUpdateManyWithoutMembersInput>;

  lastOnline?: Maybe<DateTime>;

  deleted?: Maybe<boolean>;

  provider?: Maybe<SocialMediaType>;

  avatar?: Maybe<string>;

  thirdPartyId?: Maybe<string>;
}

export interface UserUpdateManyWithoutPendingInvitationsInput {
  create?: Maybe<UserCreateWithoutPendingInvitationsInput[]>;

  delete?: Maybe<UserWhereUniqueInput[]>;

  connect?: Maybe<UserWhereUniqueInput[]>;

  set?: Maybe<UserWhereUniqueInput[]>;

  disconnect?: Maybe<UserWhereUniqueInput[]>;

  update?: Maybe<UserUpdateWithWhereUniqueWithoutPendingInvitationsInput[]>;

  upsert?: Maybe<UserUpsertWithWhereUniqueWithoutPendingInvitationsInput[]>;

  deleteMany?: Maybe<UserScalarWhereInput[]>;

  updateMany?: Maybe<UserUpdateManyWithWhereNestedInput[]>;
}

export interface UserUpdateWithWhereUniqueWithoutPendingInvitationsInput {
  where: UserWhereUniqueInput;

  data: UserUpdateWithoutPendingInvitationsDataInput;
}

export interface UserUpdateWithoutPendingInvitationsDataInput {
  email?: Maybe<string>;

  firstName?: Maybe<string>;

  lastName?: Maybe<string>;

  password?: Maybe<string>;

  parties?: Maybe<PartyUpdateManyWithoutMembersInput>;

  friends?: Maybe<UserUpdateManyWithoutFriendsInput>;

  unreadMessages?: Maybe<MessageUpdateManyWithoutAuthorInput>;

  chats?: Maybe<ChatUpdateManyWithoutMembersInput>;

  lastOnline?: Maybe<DateTime>;

  deleted?: Maybe<boolean>;

  provider?: Maybe<SocialMediaType>;

  avatar?: Maybe<string>;

  thirdPartyId?: Maybe<string>;
}

export interface MessageUpdateManyWithoutAuthorInput {
  create?: Maybe<MessageCreateWithoutAuthorInput[]>;

  delete?: Maybe<MessageWhereUniqueInput[]>;

  connect?: Maybe<MessageWhereUniqueInput[]>;

  set?: Maybe<MessageWhereUniqueInput[]>;

  disconnect?: Maybe<MessageWhereUniqueInput[]>;

  update?: Maybe<MessageUpdateWithWhereUniqueWithoutAuthorInput[]>;

  upsert?: Maybe<MessageUpsertWithWhereUniqueWithoutAuthorInput[]>;

  deleteMany?: Maybe<MessageScalarWhereInput[]>;

  updateMany?: Maybe<MessageUpdateManyWithWhereNestedInput[]>;
}

export interface MessageUpdateWithWhereUniqueWithoutAuthorInput {
  where: MessageWhereUniqueInput;

  data: MessageUpdateWithoutAuthorDataInput;
}

export interface MessageUpdateWithoutAuthorDataInput {
  chat?: Maybe<ChatUpdateOneRequiredWithoutMessagesInput>;

  content?: Maybe<string>;
}

export interface ChatUpdateOneRequiredWithoutMessagesInput {
  create?: Maybe<ChatCreateWithoutMessagesInput>;

  update?: Maybe<ChatUpdateWithoutMessagesDataInput>;

  upsert?: Maybe<ChatUpsertWithoutMessagesInput>;

  connect?: Maybe<ChatWhereUniqueInput>;
}

export interface ChatUpdateWithoutMessagesDataInput {
  party?: Maybe<PartyUpdateOneRequiredInput>;

  members?: Maybe<UserUpdateManyWithoutChatsInput>;
}

export interface UserUpdateManyWithoutChatsInput {
  create?: Maybe<UserCreateWithoutChatsInput[]>;

  delete?: Maybe<UserWhereUniqueInput[]>;

  connect?: Maybe<UserWhereUniqueInput[]>;

  set?: Maybe<UserWhereUniqueInput[]>;

  disconnect?: Maybe<UserWhereUniqueInput[]>;

  update?: Maybe<UserUpdateWithWhereUniqueWithoutChatsInput[]>;

  upsert?: Maybe<UserUpsertWithWhereUniqueWithoutChatsInput[]>;

  deleteMany?: Maybe<UserScalarWhereInput[]>;

  updateMany?: Maybe<UserUpdateManyWithWhereNestedInput[]>;
}

export interface UserUpdateWithWhereUniqueWithoutChatsInput {
  where: UserWhereUniqueInput;

  data: UserUpdateWithoutChatsDataInput;
}

export interface UserUpdateWithoutChatsDataInput {
  email?: Maybe<string>;

  firstName?: Maybe<string>;

  lastName?: Maybe<string>;

  password?: Maybe<string>;

  parties?: Maybe<PartyUpdateManyWithoutMembersInput>;

  friends?: Maybe<UserUpdateManyWithoutFriendsInput>;

  pendingInvitations?: Maybe<UserUpdateManyWithoutPendingInvitationsInput>;

  unreadMessages?: Maybe<MessageUpdateManyWithoutAuthorInput>;

  lastOnline?: Maybe<DateTime>;

  deleted?: Maybe<boolean>;

  provider?: Maybe<SocialMediaType>;

  avatar?: Maybe<string>;

  thirdPartyId?: Maybe<string>;
}

export interface UserUpsertWithWhereUniqueWithoutChatsInput {
  where: UserWhereUniqueInput;

  update: UserUpdateWithoutChatsDataInput;

  create: UserCreateWithoutChatsInput;
}

export interface UserScalarWhereInput {
  id?: Maybe<string>;

  id_not?: Maybe<string>;

  id_in?: Maybe<string[]>;

  id_not_in?: Maybe<string[]>;

  id_lt?: Maybe<string>;

  id_lte?: Maybe<string>;

  id_gt?: Maybe<string>;

  id_gte?: Maybe<string>;

  id_contains?: Maybe<string>;

  id_not_contains?: Maybe<string>;

  id_starts_with?: Maybe<string>;

  id_not_starts_with?: Maybe<string>;

  id_ends_with?: Maybe<string>;

  id_not_ends_with?: Maybe<string>;

  email?: Maybe<string>;

  email_not?: Maybe<string>;

  email_in?: Maybe<string[]>;

  email_not_in?: Maybe<string[]>;

  email_lt?: Maybe<string>;

  email_lte?: Maybe<string>;

  email_gt?: Maybe<string>;

  email_gte?: Maybe<string>;

  email_contains?: Maybe<string>;

  email_not_contains?: Maybe<string>;

  email_starts_with?: Maybe<string>;

  email_not_starts_with?: Maybe<string>;

  email_ends_with?: Maybe<string>;

  email_not_ends_with?: Maybe<string>;

  firstName?: Maybe<string>;

  firstName_not?: Maybe<string>;

  firstName_in?: Maybe<string[]>;

  firstName_not_in?: Maybe<string[]>;

  firstName_lt?: Maybe<string>;

  firstName_lte?: Maybe<string>;

  firstName_gt?: Maybe<string>;

  firstName_gte?: Maybe<string>;

  firstName_contains?: Maybe<string>;

  firstName_not_contains?: Maybe<string>;

  firstName_starts_with?: Maybe<string>;

  firstName_not_starts_with?: Maybe<string>;

  firstName_ends_with?: Maybe<string>;

  firstName_not_ends_with?: Maybe<string>;

  lastName?: Maybe<string>;

  lastName_not?: Maybe<string>;

  lastName_in?: Maybe<string[]>;

  lastName_not_in?: Maybe<string[]>;

  lastName_lt?: Maybe<string>;

  lastName_lte?: Maybe<string>;

  lastName_gt?: Maybe<string>;

  lastName_gte?: Maybe<string>;

  lastName_contains?: Maybe<string>;

  lastName_not_contains?: Maybe<string>;

  lastName_starts_with?: Maybe<string>;

  lastName_not_starts_with?: Maybe<string>;

  lastName_ends_with?: Maybe<string>;

  lastName_not_ends_with?: Maybe<string>;

  password?: Maybe<string>;

  password_not?: Maybe<string>;

  password_in?: Maybe<string[]>;

  password_not_in?: Maybe<string[]>;

  password_lt?: Maybe<string>;

  password_lte?: Maybe<string>;

  password_gt?: Maybe<string>;

  password_gte?: Maybe<string>;

  password_contains?: Maybe<string>;

  password_not_contains?: Maybe<string>;

  password_starts_with?: Maybe<string>;

  password_not_starts_with?: Maybe<string>;

  password_ends_with?: Maybe<string>;

  password_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;

  createdAt_not?: Maybe<DateTime>;

  createdAt_in?: Maybe<DateTime[]>;

  createdAt_not_in?: Maybe<DateTime[]>;

  createdAt_lt?: Maybe<DateTime>;

  createdAt_lte?: Maybe<DateTime>;

  createdAt_gt?: Maybe<DateTime>;

  createdAt_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;

  updatedAt_not?: Maybe<DateTime>;

  updatedAt_in?: Maybe<DateTime[]>;

  updatedAt_not_in?: Maybe<DateTime[]>;

  updatedAt_lt?: Maybe<DateTime>;

  updatedAt_lte?: Maybe<DateTime>;

  updatedAt_gt?: Maybe<DateTime>;

  updatedAt_gte?: Maybe<DateTime>;

  lastOnline?: Maybe<DateTime>;

  lastOnline_not?: Maybe<DateTime>;

  lastOnline_in?: Maybe<DateTime[]>;

  lastOnline_not_in?: Maybe<DateTime[]>;

  lastOnline_lt?: Maybe<DateTime>;

  lastOnline_lte?: Maybe<DateTime>;

  lastOnline_gt?: Maybe<DateTime>;

  lastOnline_gte?: Maybe<DateTime>;

  deleted?: Maybe<boolean>;

  deleted_not?: Maybe<boolean>;

  provider?: Maybe<SocialMediaType>;

  provider_not?: Maybe<SocialMediaType>;

  provider_in?: Maybe<SocialMediaType[]>;

  provider_not_in?: Maybe<SocialMediaType[]>;

  avatar?: Maybe<string>;

  avatar_not?: Maybe<string>;

  avatar_in?: Maybe<string[]>;

  avatar_not_in?: Maybe<string[]>;

  avatar_lt?: Maybe<string>;

  avatar_lte?: Maybe<string>;

  avatar_gt?: Maybe<string>;

  avatar_gte?: Maybe<string>;

  avatar_contains?: Maybe<string>;

  avatar_not_contains?: Maybe<string>;

  avatar_starts_with?: Maybe<string>;

  avatar_not_starts_with?: Maybe<string>;

  avatar_ends_with?: Maybe<string>;

  avatar_not_ends_with?: Maybe<string>;

  thirdPartyId?: Maybe<string>;

  thirdPartyId_not?: Maybe<string>;

  thirdPartyId_in?: Maybe<string[]>;

  thirdPartyId_not_in?: Maybe<string[]>;

  thirdPartyId_lt?: Maybe<string>;

  thirdPartyId_lte?: Maybe<string>;

  thirdPartyId_gt?: Maybe<string>;

  thirdPartyId_gte?: Maybe<string>;

  thirdPartyId_contains?: Maybe<string>;

  thirdPartyId_not_contains?: Maybe<string>;

  thirdPartyId_starts_with?: Maybe<string>;

  thirdPartyId_not_starts_with?: Maybe<string>;

  thirdPartyId_ends_with?: Maybe<string>;

  thirdPartyId_not_ends_with?: Maybe<string>;

  AND?: Maybe<UserScalarWhereInput[]>;

  OR?: Maybe<UserScalarWhereInput[]>;

  NOT?: Maybe<UserScalarWhereInput[]>;
}

export interface UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput;

  data: UserUpdateManyDataInput;
}

export interface UserUpdateManyDataInput {
  email?: Maybe<string>;

  firstName?: Maybe<string>;

  lastName?: Maybe<string>;

  password?: Maybe<string>;

  lastOnline?: Maybe<DateTime>;

  deleted?: Maybe<boolean>;

  provider?: Maybe<SocialMediaType>;

  avatar?: Maybe<string>;

  thirdPartyId?: Maybe<string>;
}

export interface ChatUpsertWithoutMessagesInput {
  update: ChatUpdateWithoutMessagesDataInput;

  create: ChatCreateWithoutMessagesInput;
}

export interface MessageUpsertWithWhereUniqueWithoutAuthorInput {
  where: MessageWhereUniqueInput;

  update: MessageUpdateWithoutAuthorDataInput;

  create: MessageCreateWithoutAuthorInput;
}

export interface MessageScalarWhereInput {
  id?: Maybe<string>;

  id_not?: Maybe<string>;

  id_in?: Maybe<string[]>;

  id_not_in?: Maybe<string[]>;

  id_lt?: Maybe<string>;

  id_lte?: Maybe<string>;

  id_gt?: Maybe<string>;

  id_gte?: Maybe<string>;

  id_contains?: Maybe<string>;

  id_not_contains?: Maybe<string>;

  id_starts_with?: Maybe<string>;

  id_not_starts_with?: Maybe<string>;

  id_ends_with?: Maybe<string>;

  id_not_ends_with?: Maybe<string>;

  content?: Maybe<string>;

  content_not?: Maybe<string>;

  content_in?: Maybe<string[]>;

  content_not_in?: Maybe<string[]>;

  content_lt?: Maybe<string>;

  content_lte?: Maybe<string>;

  content_gt?: Maybe<string>;

  content_gte?: Maybe<string>;

  content_contains?: Maybe<string>;

  content_not_contains?: Maybe<string>;

  content_starts_with?: Maybe<string>;

  content_not_starts_with?: Maybe<string>;

  content_ends_with?: Maybe<string>;

  content_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;

  createdAt_not?: Maybe<DateTime>;

  createdAt_in?: Maybe<DateTime[]>;

  createdAt_not_in?: Maybe<DateTime[]>;

  createdAt_lt?: Maybe<DateTime>;

  createdAt_lte?: Maybe<DateTime>;

  createdAt_gt?: Maybe<DateTime>;

  createdAt_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;

  updatedAt_not?: Maybe<DateTime>;

  updatedAt_in?: Maybe<DateTime[]>;

  updatedAt_not_in?: Maybe<DateTime[]>;

  updatedAt_lt?: Maybe<DateTime>;

  updatedAt_lte?: Maybe<DateTime>;

  updatedAt_gt?: Maybe<DateTime>;

  updatedAt_gte?: Maybe<DateTime>;

  AND?: Maybe<MessageScalarWhereInput[]>;

  OR?: Maybe<MessageScalarWhereInput[]>;

  NOT?: Maybe<MessageScalarWhereInput[]>;
}

export interface MessageUpdateManyWithWhereNestedInput {
  where: MessageScalarWhereInput;

  data: MessageUpdateManyDataInput;
}

export interface MessageUpdateManyDataInput {
  content?: Maybe<string>;
}

export interface ChatUpdateManyWithoutMembersInput {
  create?: Maybe<ChatCreateWithoutMembersInput[]>;

  delete?: Maybe<ChatWhereUniqueInput[]>;

  connect?: Maybe<ChatWhereUniqueInput[]>;

  set?: Maybe<ChatWhereUniqueInput[]>;

  disconnect?: Maybe<ChatWhereUniqueInput[]>;

  update?: Maybe<ChatUpdateWithWhereUniqueWithoutMembersInput[]>;

  upsert?: Maybe<ChatUpsertWithWhereUniqueWithoutMembersInput[]>;

  deleteMany?: Maybe<ChatScalarWhereInput[]>;
}

export interface ChatUpdateWithWhereUniqueWithoutMembersInput {
  where: ChatWhereUniqueInput;

  data: ChatUpdateWithoutMembersDataInput;
}

export interface ChatUpdateWithoutMembersDataInput {
  party?: Maybe<PartyUpdateOneRequiredInput>;

  messages?: Maybe<MessageUpdateManyWithoutChatInput>;
}

export interface MessageUpdateManyWithoutChatInput {
  create?: Maybe<MessageCreateWithoutChatInput[]>;

  delete?: Maybe<MessageWhereUniqueInput[]>;

  connect?: Maybe<MessageWhereUniqueInput[]>;

  set?: Maybe<MessageWhereUniqueInput[]>;

  disconnect?: Maybe<MessageWhereUniqueInput[]>;

  update?: Maybe<MessageUpdateWithWhereUniqueWithoutChatInput[]>;

  upsert?: Maybe<MessageUpsertWithWhereUniqueWithoutChatInput[]>;

  deleteMany?: Maybe<MessageScalarWhereInput[]>;

  updateMany?: Maybe<MessageUpdateManyWithWhereNestedInput[]>;
}

export interface MessageUpdateWithWhereUniqueWithoutChatInput {
  where: MessageWhereUniqueInput;

  data: MessageUpdateWithoutChatDataInput;
}

export interface MessageUpdateWithoutChatDataInput {
  author?: Maybe<UserUpdateOneRequiredWithoutUnreadMessagesInput>;

  content?: Maybe<string>;
}

export interface UserUpdateOneRequiredWithoutUnreadMessagesInput {
  create?: Maybe<UserCreateWithoutUnreadMessagesInput>;

  update?: Maybe<UserUpdateWithoutUnreadMessagesDataInput>;

  upsert?: Maybe<UserUpsertWithoutUnreadMessagesInput>;

  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserUpdateWithoutUnreadMessagesDataInput {
  email?: Maybe<string>;

  firstName?: Maybe<string>;

  lastName?: Maybe<string>;

  password?: Maybe<string>;

  parties?: Maybe<PartyUpdateManyWithoutMembersInput>;

  friends?: Maybe<UserUpdateManyWithoutFriendsInput>;

  pendingInvitations?: Maybe<UserUpdateManyWithoutPendingInvitationsInput>;

  chats?: Maybe<ChatUpdateManyWithoutMembersInput>;

  lastOnline?: Maybe<DateTime>;

  deleted?: Maybe<boolean>;

  provider?: Maybe<SocialMediaType>;

  avatar?: Maybe<string>;

  thirdPartyId?: Maybe<string>;
}

export interface UserUpsertWithoutUnreadMessagesInput {
  update: UserUpdateWithoutUnreadMessagesDataInput;

  create: UserCreateWithoutUnreadMessagesInput;
}

export interface MessageUpsertWithWhereUniqueWithoutChatInput {
  where: MessageWhereUniqueInput;

  update: MessageUpdateWithoutChatDataInput;

  create: MessageCreateWithoutChatInput;
}

export interface ChatUpsertWithWhereUniqueWithoutMembersInput {
  where: ChatWhereUniqueInput;

  update: ChatUpdateWithoutMembersDataInput;

  create: ChatCreateWithoutMembersInput;
}

export interface ChatScalarWhereInput {
  id?: Maybe<string>;

  id_not?: Maybe<string>;

  id_in?: Maybe<string[]>;

  id_not_in?: Maybe<string[]>;

  id_lt?: Maybe<string>;

  id_lte?: Maybe<string>;

  id_gt?: Maybe<string>;

  id_gte?: Maybe<string>;

  id_contains?: Maybe<string>;

  id_not_contains?: Maybe<string>;

  id_starts_with?: Maybe<string>;

  id_not_starts_with?: Maybe<string>;

  id_ends_with?: Maybe<string>;

  id_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;

  createdAt_not?: Maybe<DateTime>;

  createdAt_in?: Maybe<DateTime[]>;

  createdAt_not_in?: Maybe<DateTime[]>;

  createdAt_lt?: Maybe<DateTime>;

  createdAt_lte?: Maybe<DateTime>;

  createdAt_gt?: Maybe<DateTime>;

  createdAt_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;

  updatedAt_not?: Maybe<DateTime>;

  updatedAt_in?: Maybe<DateTime[]>;

  updatedAt_not_in?: Maybe<DateTime[]>;

  updatedAt_lt?: Maybe<DateTime>;

  updatedAt_lte?: Maybe<DateTime>;

  updatedAt_gt?: Maybe<DateTime>;

  updatedAt_gte?: Maybe<DateTime>;

  AND?: Maybe<ChatScalarWhereInput[]>;

  OR?: Maybe<ChatScalarWhereInput[]>;

  NOT?: Maybe<ChatScalarWhereInput[]>;
}

export interface UserUpsertWithWhereUniqueWithoutPendingInvitationsInput {
  where: UserWhereUniqueInput;

  update: UserUpdateWithoutPendingInvitationsDataInput;

  create: UserCreateWithoutPendingInvitationsInput;
}

export interface UserUpsertWithWhereUniqueWithoutFriendsInput {
  where: UserWhereUniqueInput;

  update: UserUpdateWithoutFriendsDataInput;

  create: UserCreateWithoutFriendsInput;
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput;

  create: UserCreateInput;
}

export interface UserUpdateManyWithoutPartiesInput {
  create?: Maybe<UserCreateWithoutPartiesInput[]>;

  delete?: Maybe<UserWhereUniqueInput[]>;

  connect?: Maybe<UserWhereUniqueInput[]>;

  set?: Maybe<UserWhereUniqueInput[]>;

  disconnect?: Maybe<UserWhereUniqueInput[]>;

  update?: Maybe<UserUpdateWithWhereUniqueWithoutPartiesInput[]>;

  upsert?: Maybe<UserUpsertWithWhereUniqueWithoutPartiesInput[]>;

  deleteMany?: Maybe<UserScalarWhereInput[]>;

  updateMany?: Maybe<UserUpdateManyWithWhereNestedInput[]>;
}

export interface UserUpdateWithWhereUniqueWithoutPartiesInput {
  where: UserWhereUniqueInput;

  data: UserUpdateWithoutPartiesDataInput;
}

export interface UserUpdateWithoutPartiesDataInput {
  email?: Maybe<string>;

  firstName?: Maybe<string>;

  lastName?: Maybe<string>;

  password?: Maybe<string>;

  friends?: Maybe<UserUpdateManyWithoutFriendsInput>;

  pendingInvitations?: Maybe<UserUpdateManyWithoutPendingInvitationsInput>;

  unreadMessages?: Maybe<MessageUpdateManyWithoutAuthorInput>;

  chats?: Maybe<ChatUpdateManyWithoutMembersInput>;

  lastOnline?: Maybe<DateTime>;

  deleted?: Maybe<boolean>;

  provider?: Maybe<SocialMediaType>;

  avatar?: Maybe<string>;

  thirdPartyId?: Maybe<string>;
}

export interface UserUpsertWithWhereUniqueWithoutPartiesInput {
  where: UserWhereUniqueInput;

  update: UserUpdateWithoutPartiesDataInput;

  create: UserCreateWithoutPartiesInput;
}

export interface PartyUpsertNestedInput {
  update: PartyUpdateDataInput;

  create: PartyCreateInput;
}

export interface GameUpdateInput {
  title?: Maybe<string>;

  cover?: Maybe<string>;

  type?: Maybe<GameType>;
}

export interface GameUpdateManyMutationInput {
  title?: Maybe<string>;

  cover?: Maybe<string>;

  type?: Maybe<GameType>;
}

export interface LocationUpdateInput {
  placeName?: Maybe<string>;

  latitude?: Maybe<number>;

  longitude?: Maybe<number>;
}

export interface LocationUpdateManyMutationInput {
  placeName?: Maybe<string>;

  latitude?: Maybe<number>;

  longitude?: Maybe<number>;
}

export interface MessageCreateInput {
  id?: Maybe<string>;

  author: UserCreateOneWithoutUnreadMessagesInput;

  chat: ChatCreateOneWithoutMessagesInput;

  content: string;
}

export interface MessageUpdateInput {
  author?: Maybe<UserUpdateOneRequiredWithoutUnreadMessagesInput>;

  chat?: Maybe<ChatUpdateOneRequiredWithoutMessagesInput>;

  content?: Maybe<string>;
}

export interface MessageUpdateManyMutationInput {
  content?: Maybe<string>;
}

export interface PartyUpdateInput {
  title?: Maybe<string>;

  description?: Maybe<string>;

  author?: Maybe<UserUpdateOneRequiredInput>;

  location?: Maybe<LocationUpdateOneRequiredInput>;

  games?: Maybe<GameUpdateManyInput>;

  colorTint?: Maybe<string>;

  isPublic?: Maybe<boolean>;

  members?: Maybe<UserUpdateManyWithoutPartiesInput>;

  start?: Maybe<DateTime>;

  end?: Maybe<DateTime>;
}

export interface PartyUpdateManyMutationInput {
  title?: Maybe<string>;

  description?: Maybe<string>;

  colorTint?: Maybe<string>;

  isPublic?: Maybe<boolean>;

  start?: Maybe<DateTime>;

  end?: Maybe<DateTime>;
}

export interface UserUpdateInput {
  email?: Maybe<string>;

  firstName?: Maybe<string>;

  lastName?: Maybe<string>;

  password?: Maybe<string>;

  parties?: Maybe<PartyUpdateManyWithoutMembersInput>;

  friends?: Maybe<UserUpdateManyWithoutFriendsInput>;

  pendingInvitations?: Maybe<UserUpdateManyWithoutPendingInvitationsInput>;

  unreadMessages?: Maybe<MessageUpdateManyWithoutAuthorInput>;

  chats?: Maybe<ChatUpdateManyWithoutMembersInput>;

  lastOnline?: Maybe<DateTime>;

  deleted?: Maybe<boolean>;

  provider?: Maybe<SocialMediaType>;

  avatar?: Maybe<string>;

  thirdPartyId?: Maybe<string>;
}

export interface UserUpdateManyMutationInput {
  email?: Maybe<string>;

  firstName?: Maybe<string>;

  lastName?: Maybe<string>;

  password?: Maybe<string>;

  lastOnline?: Maybe<DateTime>;

  deleted?: Maybe<boolean>;

  provider?: Maybe<SocialMediaType>;

  avatar?: Maybe<string>;

  thirdPartyId?: Maybe<string>;
}

export interface ChatSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[]>;

  updatedFields_contains?: Maybe<string>;

  updatedFields_contains_every?: Maybe<string[]>;

  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<ChatWhereInput>;

  AND?: Maybe<ChatSubscriptionWhereInput[]>;

  OR?: Maybe<ChatSubscriptionWhereInput[]>;

  NOT?: Maybe<ChatSubscriptionWhereInput[]>;
}

export interface GameSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[]>;

  updatedFields_contains?: Maybe<string>;

  updatedFields_contains_every?: Maybe<string[]>;

  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<GameWhereInput>;

  AND?: Maybe<GameSubscriptionWhereInput[]>;

  OR?: Maybe<GameSubscriptionWhereInput[]>;

  NOT?: Maybe<GameSubscriptionWhereInput[]>;
}

export interface LocationSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[]>;

  updatedFields_contains?: Maybe<string>;

  updatedFields_contains_every?: Maybe<string[]>;

  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<LocationWhereInput>;

  AND?: Maybe<LocationSubscriptionWhereInput[]>;

  OR?: Maybe<LocationSubscriptionWhereInput[]>;

  NOT?: Maybe<LocationSubscriptionWhereInput[]>;
}

export interface MessageSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[]>;

  updatedFields_contains?: Maybe<string>;

  updatedFields_contains_every?: Maybe<string[]>;

  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<MessageWhereInput>;

  AND?: Maybe<MessageSubscriptionWhereInput[]>;

  OR?: Maybe<MessageSubscriptionWhereInput[]>;

  NOT?: Maybe<MessageSubscriptionWhereInput[]>;
}

export interface PartySubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[]>;

  updatedFields_contains?: Maybe<string>;

  updatedFields_contains_every?: Maybe<string[]>;

  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<PartyWhereInput>;

  AND?: Maybe<PartySubscriptionWhereInput[]>;

  OR?: Maybe<PartySubscriptionWhereInput[]>;

  NOT?: Maybe<PartySubscriptionWhereInput[]>;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[]>;

  updatedFields_contains?: Maybe<string>;

  updatedFields_contains_every?: Maybe<string[]>;

  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<UserWhereInput>;

  AND?: Maybe<UserSubscriptionWhereInput[]>;

  OR?: Maybe<UserSubscriptionWhereInput[]>;

  NOT?: Maybe<UserSubscriptionWhereInput[]>;
}

export enum SocialMediaType {
  Facebook = 'FACEBOOK',
  Spotify = 'SPOTIFY',
  Twitter = 'TWITTER'
}

export enum GameType {
  Board = 'BOARD',
  Pc = 'PC',
  Console = 'CONSOLE'
}

export enum PartyOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
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
  EndDesc = 'end_DESC'
}

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
  ThirdPartyIdDesc = 'thirdPartyId_DESC'
}

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

export enum ChatOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export enum UserStatus {
  Offline = 'OFFLINE',
  Online = 'ONLINE'
}

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

export enum MutationType {
  Created = 'CREATED',
  Updated = 'UPDATED',
  Deleted = 'DELETED'
}

export type DateTime = any;

export type Long = any;

// ====================================================
// Documents
// ====================================================

export type SignupVariables = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export type SignupMutation = {
  __typename?: 'Mutation';

  signup: SignupSignup;
};

export type SignupSignup = {
  __typename?: 'AuthPayload';

  token: string;
};

export type LoginVariables = {
  email: string;
  password: string;
};

export type LoginMutation = {
  __typename?: 'Mutation';

  login: LoginLogin;
};

export type LoginLogin = {
  __typename?: 'AuthPayload';

  token: string;
};

export type CreatePartyVariables = {
  data: PartyCreateInput;
};

export type CreatePartyMutation = {
  __typename?: 'Mutation';

  createParty: CreatePartyCreateParty;
};

export type CreatePartyCreateParty = PartyFragmentFragment;

export type CreateMessageVariables = {
  data: MessageCreateInput;
};

export type CreateMessageMutation = {
  __typename?: 'Mutation';

  createMessage: CreateMessageCreateMessage;
};

export type CreateMessageCreateMessage = {
  __typename?: 'Message';

  id: string;

  author: CreateMessageAuthor;

  isSendByMe: boolean;

  optimisticallyAdded: boolean;

  optimisticallyCreated: boolean;

  hasOptimisticError: boolean;

  content: string;

  createdAt: DateTime;
};

export type CreateMessageAuthor = {
  __typename?: 'User';

  firstName: string;

  lastName: string;

  avatar: Maybe<string>;

  id: string;
};

export type UpdateUserVariables = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type UpdateUserMutation = {
  __typename?: 'Mutation';

  updateUser: Maybe<UpdateUserUpdateUser>;
};

export type UpdateUserUpdateUser = {
  __typename?: 'User';

  id: string;
};

export type MeQueryVariables = {};

export type MeQueryQuery = {
  __typename?: 'Query';

  me: Maybe<MeQueryMe>;
};

export type MeQueryMe = {
  __typename?: 'User';

  id: string;

  email: string;

  firstName: string;

  lastName: string;

  avatar: Maybe<string>;
};

export type PaginateUsersQueryVariables = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type PaginateUsersQueryQuery = {
  __typename?: 'Query';

  paginateUsers: PaginateUsersQueryPaginateUsers;
};

export type PaginateUsersQueryPaginateUsers = {
  __typename?: 'UserConnection';

  edges: (Maybe<PaginateUsersQueryEdges>)[];

  pageInfo: PaginateUsersQueryPageInfo;
};

export type PaginateUsersQueryEdges = {
  __typename?: 'UserEdge';

  node: PaginateUsersQueryNode;
};

export type PaginateUsersQueryNode = {
  __typename?: 'User';

  id: string;

  firstName: string;

  lastName: string;

  avatar: Maybe<string>;

  lastOnline: Maybe<DateTime>;

  status: UserStatus;
};

export type PaginateUsersQueryPageInfo = {
  __typename?: 'PageInfo';

  hasNextPage: boolean;

  endCursor: Maybe<string>;
};

export type PartiesQueryVariables = {
  where?: Maybe<PartyWhereInput>;
  orderBy?: Maybe<PartyOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type PartiesQueryQuery = {
  __typename?: 'Query';

  parties: (Maybe<PartiesQueryParties>)[];
};

export type PartiesQueryParties = PartyFragmentFragment;

export type PaginatePartiesQueryVariables = {
  where?: Maybe<PartyWhereInput>;
  orderBy?: Maybe<PartyOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type PaginatePartiesQueryQuery = {
  __typename?: 'Query';

  partiesConnection: PaginatePartiesQueryPartiesConnection;
};

export type PaginatePartiesQueryPartiesConnection = {
  __typename?: 'PartyConnection';

  pageInfo: PaginatePartiesQueryPageInfo;

  edges: (Maybe<PaginatePartiesQueryEdges>)[];
};

export type PaginatePartiesQueryPageInfo = {
  __typename?: 'PageInfo';

  hasNextPage: boolean;

  endCursor: Maybe<string>;
};

export type PaginatePartiesQueryEdges = {
  __typename?: 'PartyEdge';

  node: PaginatePartiesQueryNode;
};

export type PaginatePartiesQueryNode = PartyFragmentFragment;

export type PaginateChatsQueryVariables = {
  where?: Maybe<ChatWhereInput>;
  orderBy?: Maybe<ChatOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type PaginateChatsQueryQuery = {
  __typename?: 'Query';

  chatsConnection: PaginateChatsQueryChatsConnection;
};

export type PaginateChatsQueryChatsConnection = {
  __typename?: 'ChatConnection';

  pageInfo: PaginateChatsQueryPageInfo;

  edges: (Maybe<PaginateChatsQueryEdges>)[];
};

export type PaginateChatsQueryPageInfo = {
  __typename?: 'PageInfo';

  hasNextPage: boolean;

  endCursor: Maybe<string>;
};

export type PaginateChatsQueryEdges = {
  __typename?: 'ChatEdge';

  node: PaginateChatsQueryNode;
};

export type PaginateChatsQueryNode = {
  __typename?: 'Chat';

  id: string;

  party: PaginateChatsQueryParty;

  members: Maybe<PaginateChatsQueryMembers[]>;

  messages: Maybe<PaginateChatsQueryMessages[]>;
};

export type PaginateChatsQueryParty = {
  __typename?: 'Party';

  title: string;
};

export type PaginateChatsQueryMembers = {
  __typename?: 'User';

  avatar: Maybe<string>;

  firstName: string;

  lastName: string;
};

export type PaginateChatsQueryMessages = {
  __typename?: 'Message';

  createdAt: DateTime;

  content: string;

  author: PaginateChatsQueryAuthor;
};

export type PaginateChatsQueryAuthor = {
  __typename?: 'User';

  firstName: string;

  lastName: string;
};

export type PaginateMessagesQueryVariables = {
  where?: Maybe<MessageWhereInput>;
  orderBy?: Maybe<MessageOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type PaginateMessagesQueryQuery = {
  __typename?: 'Query';

  messagesConnection: PaginateMessagesQueryMessagesConnection;
};

export type PaginateMessagesQueryMessagesConnection = {
  __typename?: 'MessageConnection';

  pageInfo: PaginateMessagesQueryPageInfo;

  edges: (Maybe<PaginateMessagesQueryEdges>)[];
};

export type PaginateMessagesQueryPageInfo = {
  __typename?: 'PageInfo';

  startCursor: Maybe<string>;

  hasPreviousPage: boolean;
};

export type PaginateMessagesQueryEdges = {
  __typename?: 'MessageEdge';

  node: PaginateMessagesQueryNode;
};

export type PaginateMessagesQueryNode = {
  __typename?: 'Message';

  id: string;

  author: PaginateMessagesQueryAuthor;

  isSendByMe: boolean;

  optimisticallyAdded: boolean;

  optimisticallyCreated: boolean;

  hasOptimisticError: boolean;

  content: string;

  createdAt: DateTime;
};

export type PaginateMessagesQueryAuthor = {
  __typename?: 'User';

  firstName: string;

  lastName: string;

  avatar: Maybe<string>;

  id: string;
};

export type ChatMessagesSubscriptionVariables = {
  where?: Maybe<MessageSubscriptionWhereInput>;
};

export type ChatMessagesSubscriptionSubscription = {
  __typename?: 'Subscription';

  message: Maybe<ChatMessagesSubscriptionMessage>;
};

export type ChatMessagesSubscriptionMessage = {
  __typename?: 'MessageSubscriptionPayload';

  node: Maybe<ChatMessagesSubscriptionNode>;
};

export type ChatMessagesSubscriptionNode = {
  __typename?: 'Message';

  id: string;

  author: ChatMessagesSubscriptionAuthor;

  isSendByMe: boolean;

  optimisticallyAdded: boolean;

  optimisticallyCreated: boolean;

  hasOptimisticError: boolean;

  content: string;

  createdAt: DateTime;
};

export type ChatMessagesSubscriptionAuthor = {
  __typename?: 'User';

  firstName: string;

  lastName: string;

  avatar: Maybe<string>;

  id: string;
};

export type PartyFragmentFragment = {
  __typename?: 'Party';

  id: string;

  title: string;

  description: string;

  location: PartyFragmentLocation;

  author: PartyFragmentAuthor;

  members: Maybe<PartyFragmentMembers[]>;

  colorTint: string;

  start: DateTime;

  end: DateTime;

  isPublic: Maybe<boolean>;
};

export type PartyFragmentLocation = {
  __typename?: 'Location';

  placeName: string;
};

export type PartyFragmentAuthor = {
  __typename?: 'User';

  firstName: string;

  lastName: string;

  id: string;
};

export type PartyFragmentMembers = {
  __typename?: 'User';

  avatar: Maybe<string>;

  firstName: string;

  lastName: string;

  id: string;
};

export type MessageFragmentFragment = {
  __typename?: 'Message';

  id: string;

  author: MessageFragmentAuthor;

  isSendByMe: boolean;

  content: string;

  createdAt: DateTime;
};

export type MessageFragmentAuthor = {
  __typename?: 'User';

  firstName: string;

  lastName: string;

  avatar: Maybe<string>;

  id: string;
};

import gql from 'graphql-tag';
import * as React from 'react';
import * as ReactApollo from 'react-apollo';
import * as ReactApolloHooks from 'react-apollo-hooks';

// ====================================================
// Fragments
// ====================================================

export const PartyFragmentFragmentDoc = gql`
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
  }
`;

export const MessageFragmentFragmentDoc = gql`
  fragment MESSAGE_FRAGMENT on Message {
    id
    author {
      firstName
      lastName
      avatar
      id
    }
    isSendByMe @client
    content
    createdAt
  }
`;

// ====================================================
// Components
// ====================================================

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
export class SignupComponent extends React.Component<
  Partial<ReactApollo.MutationProps<SignupMutation, SignupVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<SignupMutation, SignupVariables>
        mutation={SignupDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export function useSignup(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    SignupMutation,
    SignupVariables
  >
) {
  return ReactApolloHooks.useMutation<SignupMutation, SignupVariables>(
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
export class LoginComponent extends React.Component<
  Partial<ReactApollo.MutationProps<LoginMutation, LoginVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<LoginMutation, LoginVariables>
        mutation={LoginDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export function useLogin(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    LoginMutation,
    LoginVariables
  >
) {
  return ReactApolloHooks.useMutation<LoginMutation, LoginVariables>(
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

  ${PartyFragmentFragmentDoc}
`;
export class CreatePartyComponent extends React.Component<
  Partial<ReactApollo.MutationProps<CreatePartyMutation, CreatePartyVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<CreatePartyMutation, CreatePartyVariables>
        mutation={CreatePartyDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export function useCreateParty(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    CreatePartyMutation,
    CreatePartyVariables
  >
) {
  return ReactApolloHooks.useMutation<
    CreatePartyMutation,
    CreatePartyVariables
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
export class CreateMessageComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<CreateMessageMutation, CreateMessageVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<CreateMessageMutation, CreateMessageVariables>
        mutation={CreateMessageDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export function useCreateMessage(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    CreateMessageMutation,
    CreateMessageVariables
  >
) {
  return ReactApolloHooks.useMutation<
    CreateMessageMutation,
    CreateMessageVariables
  >(CreateMessageDocument, baseOptions);
}
export const UpdateUserDocument = gql`
  mutation UpdateUser($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
    updateUser(data: $data, where: $where) {
      id
    }
  }
`;
export class UpdateUserComponent extends React.Component<
  Partial<ReactApollo.MutationProps<UpdateUserMutation, UpdateUserVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<UpdateUserMutation, UpdateUserVariables>
        mutation={UpdateUserDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export function useUpdateUser(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    UpdateUserMutation,
    UpdateUserVariables
  >
) {
  return ReactApolloHooks.useMutation<UpdateUserMutation, UpdateUserVariables>(
    UpdateUserDocument,
    baseOptions
  );
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
export class MeQueryComponent extends React.Component<
  Partial<ReactApollo.QueryProps<MeQueryQuery, MeQueryVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<MeQueryQuery, MeQueryVariables>
        query={MeQueryDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export function useMeQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<MeQueryVariables>
) {
  return ReactApolloHooks.useQuery<MeQueryQuery, MeQueryVariables>(
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
export class PaginateUsersQueryComponent extends React.Component<
  Partial<
    ReactApollo.QueryProps<PaginateUsersQueryQuery, PaginateUsersQueryVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Query<PaginateUsersQueryQuery, PaginateUsersQueryVariables>
        query={PaginateUsersQueryDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export function usePaginateUsersQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<PaginateUsersQueryVariables>
) {
  return ReactApolloHooks.useQuery<
    PaginateUsersQueryQuery,
    PaginateUsersQueryVariables
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
      ...PARTY_FRAGMENT
    }
  }

  ${PartyFragmentFragmentDoc}
`;
export class PartiesQueryComponent extends React.Component<
  Partial<ReactApollo.QueryProps<PartiesQueryQuery, PartiesQueryVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<PartiesQueryQuery, PartiesQueryVariables>
        query={PartiesQueryDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export function usePartiesQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<PartiesQueryVariables>
) {
  return ReactApolloHooks.useQuery<PartiesQueryQuery, PartiesQueryVariables>(
    PartiesQueryDocument,
    baseOptions
  );
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

  ${PartyFragmentFragmentDoc}
`;
export class PaginatePartiesQueryComponent extends React.Component<
  Partial<
    ReactApollo.QueryProps<
      PaginatePartiesQueryQuery,
      PaginatePartiesQueryVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Query<
        PaginatePartiesQueryQuery,
        PaginatePartiesQueryVariables
      >
        query={PaginatePartiesQueryDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export function usePaginatePartiesQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<PaginatePartiesQueryVariables>
) {
  return ReactApolloHooks.useQuery<
    PaginatePartiesQueryQuery,
    PaginatePartiesQueryVariables
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
        }
      }
    }
  }
`;
export class PaginateChatsQueryComponent extends React.Component<
  Partial<
    ReactApollo.QueryProps<PaginateChatsQueryQuery, PaginateChatsQueryVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Query<PaginateChatsQueryQuery, PaginateChatsQueryVariables>
        query={PaginateChatsQueryDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export function usePaginateChatsQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<PaginateChatsQueryVariables>
) {
  return ReactApolloHooks.useQuery<
    PaginateChatsQueryQuery,
    PaginateChatsQueryVariables
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
    }
  }
`;
export class PaginateMessagesQueryComponent extends React.Component<
  Partial<
    ReactApollo.QueryProps<
      PaginateMessagesQueryQuery,
      PaginateMessagesQueryVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Query<
        PaginateMessagesQueryQuery,
        PaginateMessagesQueryVariables
      >
        query={PaginateMessagesQueryDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export function usePaginateMessagesQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<
    PaginateMessagesQueryVariables
  >
) {
  return ReactApolloHooks.useQuery<
    PaginateMessagesQueryQuery,
    PaginateMessagesQueryVariables
  >(PaginateMessagesQueryDocument, baseOptions);
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
      }
    }
  }
`;
export class ChatMessagesSubscriptionComponent extends React.Component<
  Partial<
    ReactApollo.SubscriptionProps<
      ChatMessagesSubscriptionSubscription,
      ChatMessagesSubscriptionVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Subscription<
        ChatMessagesSubscriptionSubscription,
        ChatMessagesSubscriptionVariables
      >
        subscription={ChatMessagesSubscriptionDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export function useChatMessagesSubscription(
  baseOptions?: ReactApolloHooks.SubscriptionHookOptions<
    ChatMessagesSubscriptionSubscription,
    ChatMessagesSubscriptionVariables
  >
) {
  return ReactApolloHooks.useSubscription<
    ChatMessagesSubscriptionSubscription,
    ChatMessagesSubscriptionVariables
  >(ChatMessagesSubscriptionDocument, baseOptions);
}
