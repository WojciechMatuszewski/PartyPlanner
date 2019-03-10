export type Maybe<T> = T | null;

export interface ChatWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<ChatWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<ChatWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<ChatWhereInput[]>;

  id?: Maybe<string>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<string>;
  /** All values that are contained in given list. */
  id_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<string>;
  /** All values greater than the given value. */
  id_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<string>;
  /** All values containing the given string. */
  id_contains?: Maybe<string>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<DateTime>;

  party?: Maybe<PartyWhereInput>;

  members_every?: Maybe<UserWhereInput>;

  members_some?: Maybe<UserWhereInput>;

  members_none?: Maybe<UserWhereInput>;

  messages_every?: Maybe<MessageWhereInput>;

  messages_some?: Maybe<MessageWhereInput>;

  messages_none?: Maybe<MessageWhereInput>;
}

export interface PartyWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<PartyWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<PartyWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<PartyWhereInput[]>;

  id?: Maybe<string>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<string>;
  /** All values that are contained in given list. */
  id_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<string>;
  /** All values greater than the given value. */
  id_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<string>;
  /** All values containing the given string. */
  id_contains?: Maybe<string>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<string>;

  title?: Maybe<string>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<string>;
  /** All values that are contained in given list. */
  title_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  title_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  title_lte?: Maybe<string>;
  /** All values greater than the given value. */
  title_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  title_gte?: Maybe<string>;
  /** All values containing the given string. */
  title_contains?: Maybe<string>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  title_not_ends_with?: Maybe<string>;

  description?: Maybe<string>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<string>;
  /** All values that are contained in given list. */
  description_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  description_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  description_lte?: Maybe<string>;
  /** All values greater than the given value. */
  description_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  description_gte?: Maybe<string>;
  /** All values containing the given string. */
  description_contains?: Maybe<string>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  description_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<DateTime>;

  isPublic?: Maybe<boolean>;
  /** All values that are not equal to given value. */
  isPublic_not?: Maybe<boolean>;

  author?: Maybe<UserWhereInput>;

  games_every?: Maybe<GameWhereInput>;

  games_some?: Maybe<GameWhereInput>;

  games_none?: Maybe<GameWhereInput>;
}

export interface UserWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<UserWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<UserWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<UserWhereInput[]>;

  id?: Maybe<string>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<string>;
  /** All values that are contained in given list. */
  id_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<string>;
  /** All values greater than the given value. */
  id_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<string>;
  /** All values containing the given string. */
  id_contains?: Maybe<string>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<string>;

  email?: Maybe<string>;
  /** All values that are not equal to given value. */
  email_not?: Maybe<string>;
  /** All values that are contained in given list. */
  email_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  email_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  email_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  email_lte?: Maybe<string>;
  /** All values greater than the given value. */
  email_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  email_gte?: Maybe<string>;
  /** All values containing the given string. */
  email_contains?: Maybe<string>;
  /** All values not containing the given string. */
  email_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  email_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  email_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  email_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  email_not_ends_with?: Maybe<string>;

  firstName?: Maybe<string>;
  /** All values that are not equal to given value. */
  firstName_not?: Maybe<string>;
  /** All values that are contained in given list. */
  firstName_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  firstName_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  firstName_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  firstName_lte?: Maybe<string>;
  /** All values greater than the given value. */
  firstName_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  firstName_gte?: Maybe<string>;
  /** All values containing the given string. */
  firstName_contains?: Maybe<string>;
  /** All values not containing the given string. */
  firstName_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  firstName_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  firstName_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  firstName_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  firstName_not_ends_with?: Maybe<string>;

  lastName?: Maybe<string>;
  /** All values that are not equal to given value. */
  lastName_not?: Maybe<string>;
  /** All values that are contained in given list. */
  lastName_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  lastName_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  lastName_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  lastName_lte?: Maybe<string>;
  /** All values greater than the given value. */
  lastName_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  lastName_gte?: Maybe<string>;
  /** All values containing the given string. */
  lastName_contains?: Maybe<string>;
  /** All values not containing the given string. */
  lastName_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  lastName_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  lastName_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  lastName_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  lastName_not_ends_with?: Maybe<string>;

  password?: Maybe<string>;
  /** All values that are not equal to given value. */
  password_not?: Maybe<string>;
  /** All values that are contained in given list. */
  password_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  password_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  password_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  password_lte?: Maybe<string>;
  /** All values greater than the given value. */
  password_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  password_gte?: Maybe<string>;
  /** All values containing the given string. */
  password_contains?: Maybe<string>;
  /** All values not containing the given string. */
  password_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  password_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  password_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  password_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  password_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<DateTime>;

  deleted?: Maybe<boolean>;
  /** All values that are not equal to given value. */
  deleted_not?: Maybe<boolean>;

  socialmedia?: Maybe<SocialMediaType>;
  /** All values that are not equal to given value. */
  socialmedia_not?: Maybe<SocialMediaType>;
  /** All values that are contained in given list. */
  socialmedia_in?: Maybe<SocialMediaType[]>;
  /** All values that are not contained in given list. */
  socialmedia_not_in?: Maybe<SocialMediaType[]>;

  parties_every?: Maybe<PartyWhereInput>;

  parties_some?: Maybe<PartyWhereInput>;

  parties_none?: Maybe<PartyWhereInput>;

  friends_every?: Maybe<UserWhereInput>;

  friends_some?: Maybe<UserWhereInput>;

  friends_none?: Maybe<UserWhereInput>;

  chats_every?: Maybe<ChatWhereInput>;

  chats_some?: Maybe<ChatWhereInput>;

  chats_none?: Maybe<ChatWhereInput>;
}

export interface GameWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<GameWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<GameWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<GameWhereInput[]>;

  id?: Maybe<string>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<string>;
  /** All values that are contained in given list. */
  id_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<string>;
  /** All values greater than the given value. */
  id_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<string>;
  /** All values containing the given string. */
  id_contains?: Maybe<string>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<string>;

  title?: Maybe<string>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<string>;
  /** All values that are contained in given list. */
  title_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  title_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  title_lte?: Maybe<string>;
  /** All values greater than the given value. */
  title_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  title_gte?: Maybe<string>;
  /** All values containing the given string. */
  title_contains?: Maybe<string>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  title_not_ends_with?: Maybe<string>;

  cover?: Maybe<string>;
  /** All values that are not equal to given value. */
  cover_not?: Maybe<string>;
  /** All values that are contained in given list. */
  cover_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  cover_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  cover_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  cover_lte?: Maybe<string>;
  /** All values greater than the given value. */
  cover_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  cover_gte?: Maybe<string>;
  /** All values containing the given string. */
  cover_contains?: Maybe<string>;
  /** All values not containing the given string. */
  cover_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  cover_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  cover_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  cover_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  cover_not_ends_with?: Maybe<string>;

  type?: Maybe<GameType>;
  /** All values that are not equal to given value. */
  type_not?: Maybe<GameType>;
  /** All values that are contained in given list. */
  type_in?: Maybe<GameType[]>;
  /** All values that are not contained in given list. */
  type_not_in?: Maybe<GameType[]>;

  createdAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<DateTime>;
}

export interface MessageWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<MessageWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<MessageWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<MessageWhereInput[]>;

  id?: Maybe<string>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<string>;
  /** All values that are contained in given list. */
  id_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<string>;
  /** All values greater than the given value. */
  id_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<string>;
  /** All values containing the given string. */
  id_contains?: Maybe<string>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<string>;

  content?: Maybe<string>;
  /** All values that are not equal to given value. */
  content_not?: Maybe<string>;
  /** All values that are contained in given list. */
  content_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  content_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  content_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  content_lte?: Maybe<string>;
  /** All values greater than the given value. */
  content_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  content_gte?: Maybe<string>;
  /** All values containing the given string. */
  content_contains?: Maybe<string>;
  /** All values not containing the given string. */
  content_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  content_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  content_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  content_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  content_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<DateTime>;

  author?: Maybe<UserWhereInput>;

  chat?: Maybe<ChatWhereInput>;
}

export interface ChatWhereUniqueInput {
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

export interface GameWhereUniqueInput {
  id?: Maybe<string>;

  title?: Maybe<string>;
}

export interface ChatCreateInput {
  party: PartyCreateOneInput;

  members?: Maybe<UserCreateManyWithoutChatsInput>;

  messages?: Maybe<MessageCreateManyWithoutChatInput>;
}

export interface PartyCreateOneInput {
  create?: Maybe<PartyCreateInput>;

  connect?: Maybe<PartyWhereUniqueInput>;
}

export interface PartyCreateInput {
  title: string;

  description: string;

  isPublic?: Maybe<boolean>;

  author: UserCreateOneWithoutPartiesInput;

  games?: Maybe<GameCreateManyInput>;
}

export interface UserCreateOneWithoutPartiesInput {
  create?: Maybe<UserCreateWithoutPartiesInput>;

  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserCreateWithoutPartiesInput {
  email: string;

  firstName: string;

  lastName: string;

  password: string;

  deleted?: Maybe<boolean>;

  socialmedia?: Maybe<SocialMediaType>;

  friends?: Maybe<UserCreateManyInput>;

  chats?: Maybe<ChatCreateManyWithoutMembersInput>;
}

export interface UserCreateManyInput {
  create?: Maybe<UserCreateInput[]>;

  connect?: Maybe<UserWhereUniqueInput[]>;
}

export interface UserCreateInput {
  email: string;

  firstName: string;

  lastName: string;

  password: string;

  deleted?: Maybe<boolean>;

  socialmedia?: Maybe<SocialMediaType>;

  parties?: Maybe<PartyCreateManyWithoutAuthorInput>;

  friends?: Maybe<UserCreateManyInput>;

  chats?: Maybe<ChatCreateManyWithoutMembersInput>;
}

export interface PartyCreateManyWithoutAuthorInput {
  create?: Maybe<PartyCreateWithoutAuthorInput[]>;

  connect?: Maybe<PartyWhereUniqueInput[]>;
}

export interface PartyCreateWithoutAuthorInput {
  title: string;

  description: string;

  isPublic?: Maybe<boolean>;

  games?: Maybe<GameCreateManyInput>;
}

export interface GameCreateManyInput {
  create?: Maybe<GameCreateInput[]>;

  connect?: Maybe<GameWhereUniqueInput[]>;
}

export interface GameCreateInput {
  title: string;

  cover?: Maybe<string>;

  type: GameType;
}

export interface ChatCreateManyWithoutMembersInput {
  create?: Maybe<ChatCreateWithoutMembersInput[]>;

  connect?: Maybe<ChatWhereUniqueInput[]>;
}

export interface ChatCreateWithoutMembersInput {
  party: PartyCreateOneInput;

  messages?: Maybe<MessageCreateManyWithoutChatInput>;
}

export interface MessageCreateManyWithoutChatInput {
  create?: Maybe<MessageCreateWithoutChatInput[]>;

  connect?: Maybe<MessageWhereUniqueInput[]>;
}

export interface MessageCreateWithoutChatInput {
  content: string;

  author: UserCreateOneInput;
}

export interface UserCreateOneInput {
  create?: Maybe<UserCreateInput>;

  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserCreateManyWithoutChatsInput {
  create?: Maybe<UserCreateWithoutChatsInput[]>;

  connect?: Maybe<UserWhereUniqueInput[]>;
}

export interface UserCreateWithoutChatsInput {
  email: string;

  firstName: string;

  lastName: string;

  password: string;

  deleted?: Maybe<boolean>;

  socialmedia?: Maybe<SocialMediaType>;

  parties?: Maybe<PartyCreateManyWithoutAuthorInput>;

  friends?: Maybe<UserCreateManyInput>;
}

export interface MessageCreateInput {
  content: string;

  author: UserCreateOneInput;

  chat: ChatCreateOneWithoutMessagesInput;
}

export interface ChatCreateOneWithoutMessagesInput {
  create?: Maybe<ChatCreateWithoutMessagesInput>;

  connect?: Maybe<ChatWhereUniqueInput>;
}

export interface ChatCreateWithoutMessagesInput {
  party: PartyCreateOneInput;

  members?: Maybe<UserCreateManyWithoutChatsInput>;
}

export interface ChatUpdateInput {
  party?: Maybe<PartyUpdateOneRequiredInput>;

  members?: Maybe<UserUpdateManyWithoutChatsInput>;

  messages?: Maybe<MessageUpdateManyWithoutChatInput>;
}

export interface PartyUpdateOneRequiredInput {
  create?: Maybe<PartyCreateInput>;

  connect?: Maybe<PartyWhereUniqueInput>;

  update?: Maybe<PartyUpdateDataInput>;

  upsert?: Maybe<PartyUpsertNestedInput>;
}

export interface PartyUpdateDataInput {
  title?: Maybe<string>;

  description?: Maybe<string>;

  isPublic?: Maybe<boolean>;

  author?: Maybe<UserUpdateOneRequiredWithoutPartiesInput>;

  games?: Maybe<GameUpdateManyInput>;
}

export interface UserUpdateOneRequiredWithoutPartiesInput {
  create?: Maybe<UserCreateWithoutPartiesInput>;

  connect?: Maybe<UserWhereUniqueInput>;

  update?: Maybe<UserUpdateWithoutPartiesDataInput>;

  upsert?: Maybe<UserUpsertWithoutPartiesInput>;
}

export interface UserUpdateWithoutPartiesDataInput {
  email?: Maybe<string>;

  firstName?: Maybe<string>;

  lastName?: Maybe<string>;

  password?: Maybe<string>;

  deleted?: Maybe<boolean>;

  socialmedia?: Maybe<SocialMediaType>;

  friends?: Maybe<UserUpdateManyInput>;

  chats?: Maybe<ChatUpdateManyWithoutMembersInput>;
}

export interface UserUpdateManyInput {
  create?: Maybe<UserCreateInput[]>;

  connect?: Maybe<UserWhereUniqueInput[]>;

  set?: Maybe<UserWhereUniqueInput[]>;

  disconnect?: Maybe<UserWhereUniqueInput[]>;

  delete?: Maybe<UserWhereUniqueInput[]>;

  update?: Maybe<UserUpdateWithWhereUniqueNestedInput[]>;

  updateMany?: Maybe<UserUpdateManyWithWhereNestedInput[]>;

  deleteMany?: Maybe<UserScalarWhereInput[]>;

  upsert?: Maybe<UserUpsertWithWhereUniqueNestedInput[]>;
}

export interface UserUpdateWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput;

  data: UserUpdateDataInput;
}

export interface UserUpdateDataInput {
  email?: Maybe<string>;

  firstName?: Maybe<string>;

  lastName?: Maybe<string>;

  password?: Maybe<string>;

  deleted?: Maybe<boolean>;

  socialmedia?: Maybe<SocialMediaType>;

  parties?: Maybe<PartyUpdateManyWithoutAuthorInput>;

  friends?: Maybe<UserUpdateManyInput>;

  chats?: Maybe<ChatUpdateManyWithoutMembersInput>;
}

export interface PartyUpdateManyWithoutAuthorInput {
  create?: Maybe<PartyCreateWithoutAuthorInput[]>;

  connect?: Maybe<PartyWhereUniqueInput[]>;

  set?: Maybe<PartyWhereUniqueInput[]>;

  disconnect?: Maybe<PartyWhereUniqueInput[]>;

  delete?: Maybe<PartyWhereUniqueInput[]>;

  update?: Maybe<PartyUpdateWithWhereUniqueWithoutAuthorInput[]>;

  updateMany?: Maybe<PartyUpdateManyWithWhereNestedInput[]>;

  deleteMany?: Maybe<PartyScalarWhereInput[]>;

  upsert?: Maybe<PartyUpsertWithWhereUniqueWithoutAuthorInput[]>;
}

export interface PartyUpdateWithWhereUniqueWithoutAuthorInput {
  where: PartyWhereUniqueInput;

  data: PartyUpdateWithoutAuthorDataInput;
}

export interface PartyUpdateWithoutAuthorDataInput {
  title?: Maybe<string>;

  description?: Maybe<string>;

  isPublic?: Maybe<boolean>;

  games?: Maybe<GameUpdateManyInput>;
}

export interface GameUpdateManyInput {
  create?: Maybe<GameCreateInput[]>;

  connect?: Maybe<GameWhereUniqueInput[]>;

  set?: Maybe<GameWhereUniqueInput[]>;

  disconnect?: Maybe<GameWhereUniqueInput[]>;

  delete?: Maybe<GameWhereUniqueInput[]>;

  update?: Maybe<GameUpdateWithWhereUniqueNestedInput[]>;

  updateMany?: Maybe<GameUpdateManyWithWhereNestedInput[]>;

  deleteMany?: Maybe<GameScalarWhereInput[]>;

  upsert?: Maybe<GameUpsertWithWhereUniqueNestedInput[]>;
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

export interface GameUpdateManyWithWhereNestedInput {
  where: GameScalarWhereInput;

  data: GameUpdateManyDataInput;
}

export interface GameScalarWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<GameScalarWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<GameScalarWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<GameScalarWhereInput[]>;

  id?: Maybe<string>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<string>;
  /** All values that are contained in given list. */
  id_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<string>;
  /** All values greater than the given value. */
  id_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<string>;
  /** All values containing the given string. */
  id_contains?: Maybe<string>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<string>;

  title?: Maybe<string>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<string>;
  /** All values that are contained in given list. */
  title_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  title_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  title_lte?: Maybe<string>;
  /** All values greater than the given value. */
  title_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  title_gte?: Maybe<string>;
  /** All values containing the given string. */
  title_contains?: Maybe<string>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  title_not_ends_with?: Maybe<string>;

  cover?: Maybe<string>;
  /** All values that are not equal to given value. */
  cover_not?: Maybe<string>;
  /** All values that are contained in given list. */
  cover_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  cover_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  cover_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  cover_lte?: Maybe<string>;
  /** All values greater than the given value. */
  cover_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  cover_gte?: Maybe<string>;
  /** All values containing the given string. */
  cover_contains?: Maybe<string>;
  /** All values not containing the given string. */
  cover_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  cover_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  cover_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  cover_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  cover_not_ends_with?: Maybe<string>;

  type?: Maybe<GameType>;
  /** All values that are not equal to given value. */
  type_not?: Maybe<GameType>;
  /** All values that are contained in given list. */
  type_in?: Maybe<GameType[]>;
  /** All values that are not contained in given list. */
  type_not_in?: Maybe<GameType[]>;

  createdAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<DateTime>;
}

export interface GameUpdateManyDataInput {
  title?: Maybe<string>;

  cover?: Maybe<string>;

  type?: Maybe<GameType>;
}

export interface GameUpsertWithWhereUniqueNestedInput {
  where: GameWhereUniqueInput;

  update: GameUpdateDataInput;

  create: GameCreateInput;
}

export interface PartyUpdateManyWithWhereNestedInput {
  where: PartyScalarWhereInput;

  data: PartyUpdateManyDataInput;
}

export interface PartyScalarWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<PartyScalarWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<PartyScalarWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<PartyScalarWhereInput[]>;

  id?: Maybe<string>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<string>;
  /** All values that are contained in given list. */
  id_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<string>;
  /** All values greater than the given value. */
  id_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<string>;
  /** All values containing the given string. */
  id_contains?: Maybe<string>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<string>;

  title?: Maybe<string>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<string>;
  /** All values that are contained in given list. */
  title_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  title_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  title_lte?: Maybe<string>;
  /** All values greater than the given value. */
  title_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  title_gte?: Maybe<string>;
  /** All values containing the given string. */
  title_contains?: Maybe<string>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  title_not_ends_with?: Maybe<string>;

  description?: Maybe<string>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<string>;
  /** All values that are contained in given list. */
  description_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  description_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  description_lte?: Maybe<string>;
  /** All values greater than the given value. */
  description_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  description_gte?: Maybe<string>;
  /** All values containing the given string. */
  description_contains?: Maybe<string>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  description_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<DateTime>;

  isPublic?: Maybe<boolean>;
  /** All values that are not equal to given value. */
  isPublic_not?: Maybe<boolean>;
}

export interface PartyUpdateManyDataInput {
  title?: Maybe<string>;

  description?: Maybe<string>;

  isPublic?: Maybe<boolean>;
}

export interface PartyUpsertWithWhereUniqueWithoutAuthorInput {
  where: PartyWhereUniqueInput;

  update: PartyUpdateWithoutAuthorDataInput;

  create: PartyCreateWithoutAuthorInput;
}

export interface ChatUpdateManyWithoutMembersInput {
  create?: Maybe<ChatCreateWithoutMembersInput[]>;

  connect?: Maybe<ChatWhereUniqueInput[]>;

  set?: Maybe<ChatWhereUniqueInput[]>;

  disconnect?: Maybe<ChatWhereUniqueInput[]>;

  delete?: Maybe<ChatWhereUniqueInput[]>;

  update?: Maybe<ChatUpdateWithWhereUniqueWithoutMembersInput[]>;

  deleteMany?: Maybe<ChatScalarWhereInput[]>;

  upsert?: Maybe<ChatUpsertWithWhereUniqueWithoutMembersInput[]>;
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

  connect?: Maybe<MessageWhereUniqueInput[]>;

  set?: Maybe<MessageWhereUniqueInput[]>;

  disconnect?: Maybe<MessageWhereUniqueInput[]>;

  delete?: Maybe<MessageWhereUniqueInput[]>;

  update?: Maybe<MessageUpdateWithWhereUniqueWithoutChatInput[]>;

  updateMany?: Maybe<MessageUpdateManyWithWhereNestedInput[]>;

  deleteMany?: Maybe<MessageScalarWhereInput[]>;

  upsert?: Maybe<MessageUpsertWithWhereUniqueWithoutChatInput[]>;
}

export interface MessageUpdateWithWhereUniqueWithoutChatInput {
  where: MessageWhereUniqueInput;

  data: MessageUpdateWithoutChatDataInput;
}

export interface MessageUpdateWithoutChatDataInput {
  content?: Maybe<string>;

  author?: Maybe<UserUpdateOneRequiredInput>;
}

export interface UserUpdateOneRequiredInput {
  create?: Maybe<UserCreateInput>;

  connect?: Maybe<UserWhereUniqueInput>;

  update?: Maybe<UserUpdateDataInput>;

  upsert?: Maybe<UserUpsertNestedInput>;
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput;

  create: UserCreateInput;
}

export interface MessageUpdateManyWithWhereNestedInput {
  where: MessageScalarWhereInput;

  data: MessageUpdateManyDataInput;
}

export interface MessageScalarWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<MessageScalarWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<MessageScalarWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<MessageScalarWhereInput[]>;

  id?: Maybe<string>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<string>;
  /** All values that are contained in given list. */
  id_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<string>;
  /** All values greater than the given value. */
  id_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<string>;
  /** All values containing the given string. */
  id_contains?: Maybe<string>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<string>;

  content?: Maybe<string>;
  /** All values that are not equal to given value. */
  content_not?: Maybe<string>;
  /** All values that are contained in given list. */
  content_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  content_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  content_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  content_lte?: Maybe<string>;
  /** All values greater than the given value. */
  content_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  content_gte?: Maybe<string>;
  /** All values containing the given string. */
  content_contains?: Maybe<string>;
  /** All values not containing the given string. */
  content_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  content_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  content_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  content_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  content_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<DateTime>;
}

export interface MessageUpdateManyDataInput {
  content?: Maybe<string>;
}

export interface MessageUpsertWithWhereUniqueWithoutChatInput {
  where: MessageWhereUniqueInput;

  update: MessageUpdateWithoutChatDataInput;

  create: MessageCreateWithoutChatInput;
}

export interface ChatScalarWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<ChatScalarWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<ChatScalarWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<ChatScalarWhereInput[]>;

  id?: Maybe<string>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<string>;
  /** All values that are contained in given list. */
  id_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<string>;
  /** All values greater than the given value. */
  id_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<string>;
  /** All values containing the given string. */
  id_contains?: Maybe<string>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<DateTime>;
}

export interface ChatUpsertWithWhereUniqueWithoutMembersInput {
  where: ChatWhereUniqueInput;

  update: ChatUpdateWithoutMembersDataInput;

  create: ChatCreateWithoutMembersInput;
}

export interface UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput;

  data: UserUpdateManyDataInput;
}

export interface UserScalarWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<UserScalarWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<UserScalarWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<UserScalarWhereInput[]>;

  id?: Maybe<string>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<string>;
  /** All values that are contained in given list. */
  id_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<string>;
  /** All values greater than the given value. */
  id_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<string>;
  /** All values containing the given string. */
  id_contains?: Maybe<string>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<string>;

  email?: Maybe<string>;
  /** All values that are not equal to given value. */
  email_not?: Maybe<string>;
  /** All values that are contained in given list. */
  email_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  email_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  email_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  email_lte?: Maybe<string>;
  /** All values greater than the given value. */
  email_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  email_gte?: Maybe<string>;
  /** All values containing the given string. */
  email_contains?: Maybe<string>;
  /** All values not containing the given string. */
  email_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  email_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  email_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  email_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  email_not_ends_with?: Maybe<string>;

  firstName?: Maybe<string>;
  /** All values that are not equal to given value. */
  firstName_not?: Maybe<string>;
  /** All values that are contained in given list. */
  firstName_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  firstName_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  firstName_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  firstName_lte?: Maybe<string>;
  /** All values greater than the given value. */
  firstName_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  firstName_gte?: Maybe<string>;
  /** All values containing the given string. */
  firstName_contains?: Maybe<string>;
  /** All values not containing the given string. */
  firstName_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  firstName_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  firstName_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  firstName_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  firstName_not_ends_with?: Maybe<string>;

  lastName?: Maybe<string>;
  /** All values that are not equal to given value. */
  lastName_not?: Maybe<string>;
  /** All values that are contained in given list. */
  lastName_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  lastName_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  lastName_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  lastName_lte?: Maybe<string>;
  /** All values greater than the given value. */
  lastName_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  lastName_gte?: Maybe<string>;
  /** All values containing the given string. */
  lastName_contains?: Maybe<string>;
  /** All values not containing the given string. */
  lastName_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  lastName_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  lastName_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  lastName_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  lastName_not_ends_with?: Maybe<string>;

  password?: Maybe<string>;
  /** All values that are not equal to given value. */
  password_not?: Maybe<string>;
  /** All values that are contained in given list. */
  password_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  password_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  password_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  password_lte?: Maybe<string>;
  /** All values greater than the given value. */
  password_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  password_gte?: Maybe<string>;
  /** All values containing the given string. */
  password_contains?: Maybe<string>;
  /** All values not containing the given string. */
  password_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  password_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  password_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  password_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  password_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<DateTime>;

  deleted?: Maybe<boolean>;
  /** All values that are not equal to given value. */
  deleted_not?: Maybe<boolean>;

  socialmedia?: Maybe<SocialMediaType>;
  /** All values that are not equal to given value. */
  socialmedia_not?: Maybe<SocialMediaType>;
  /** All values that are contained in given list. */
  socialmedia_in?: Maybe<SocialMediaType[]>;
  /** All values that are not contained in given list. */
  socialmedia_not_in?: Maybe<SocialMediaType[]>;
}

export interface UserUpdateManyDataInput {
  email?: Maybe<string>;

  firstName?: Maybe<string>;

  lastName?: Maybe<string>;

  password?: Maybe<string>;

  deleted?: Maybe<boolean>;

  socialmedia?: Maybe<SocialMediaType>;
}

export interface UserUpsertWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput;

  update: UserUpdateDataInput;

  create: UserCreateInput;
}

export interface UserUpsertWithoutPartiesInput {
  update: UserUpdateWithoutPartiesDataInput;

  create: UserCreateWithoutPartiesInput;
}

export interface PartyUpsertNestedInput {
  update: PartyUpdateDataInput;

  create: PartyCreateInput;
}

export interface UserUpdateManyWithoutChatsInput {
  create?: Maybe<UserCreateWithoutChatsInput[]>;

  connect?: Maybe<UserWhereUniqueInput[]>;

  set?: Maybe<UserWhereUniqueInput[]>;

  disconnect?: Maybe<UserWhereUniqueInput[]>;

  delete?: Maybe<UserWhereUniqueInput[]>;

  update?: Maybe<UserUpdateWithWhereUniqueWithoutChatsInput[]>;

  updateMany?: Maybe<UserUpdateManyWithWhereNestedInput[]>;

  deleteMany?: Maybe<UserScalarWhereInput[]>;

  upsert?: Maybe<UserUpsertWithWhereUniqueWithoutChatsInput[]>;
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

  deleted?: Maybe<boolean>;

  socialmedia?: Maybe<SocialMediaType>;

  parties?: Maybe<PartyUpdateManyWithoutAuthorInput>;

  friends?: Maybe<UserUpdateManyInput>;
}

export interface UserUpsertWithWhereUniqueWithoutChatsInput {
  where: UserWhereUniqueInput;

  update: UserUpdateWithoutChatsDataInput;

  create: UserCreateWithoutChatsInput;
}

export interface MessageUpdateInput {
  content?: Maybe<string>;

  author?: Maybe<UserUpdateOneRequiredInput>;

  chat?: Maybe<ChatUpdateOneRequiredWithoutMessagesInput>;
}

export interface ChatUpdateOneRequiredWithoutMessagesInput {
  create?: Maybe<ChatCreateWithoutMessagesInput>;

  connect?: Maybe<ChatWhereUniqueInput>;

  update?: Maybe<ChatUpdateWithoutMessagesDataInput>;

  upsert?: Maybe<ChatUpsertWithoutMessagesInput>;
}

export interface ChatUpdateWithoutMessagesDataInput {
  party?: Maybe<PartyUpdateOneRequiredInput>;

  members?: Maybe<UserUpdateManyWithoutChatsInput>;
}

export interface ChatUpsertWithoutMessagesInput {
  update: ChatUpdateWithoutMessagesDataInput;

  create: ChatCreateWithoutMessagesInput;
}

export interface PartyUpdateInput {
  title?: Maybe<string>;

  description?: Maybe<string>;

  isPublic?: Maybe<boolean>;

  author?: Maybe<UserUpdateOneRequiredWithoutPartiesInput>;

  games?: Maybe<GameUpdateManyInput>;
}

export interface UserUpdateInput {
  email?: Maybe<string>;

  firstName?: Maybe<string>;

  lastName?: Maybe<string>;

  password?: Maybe<string>;

  deleted?: Maybe<boolean>;

  socialmedia?: Maybe<SocialMediaType>;

  parties?: Maybe<PartyUpdateManyWithoutAuthorInput>;

  friends?: Maybe<UserUpdateManyInput>;

  chats?: Maybe<ChatUpdateManyWithoutMembersInput>;
}

export interface GameUpdateInput {
  title?: Maybe<string>;

  cover?: Maybe<string>;

  type?: Maybe<GameType>;
}

export interface MessageUpdateManyMutationInput {
  content?: Maybe<string>;
}

export interface PartyUpdateManyMutationInput {
  title?: Maybe<string>;

  description?: Maybe<string>;

  isPublic?: Maybe<boolean>;
}

export interface UserUpdateManyMutationInput {
  email?: Maybe<string>;

  firstName?: Maybe<string>;

  lastName?: Maybe<string>;

  password?: Maybe<string>;

  deleted?: Maybe<boolean>;

  socialmedia?: Maybe<SocialMediaType>;
}

export interface GameUpdateManyMutationInput {
  title?: Maybe<string>;

  cover?: Maybe<string>;

  type?: Maybe<GameType>;
}

export interface ChatSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<ChatSubscriptionWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<ChatSubscriptionWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<ChatSubscriptionWhereInput[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<ChatWhereInput>;
}

export interface MessageSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<MessageSubscriptionWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<MessageSubscriptionWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<MessageSubscriptionWhereInput[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<MessageWhereInput>;
}

export interface PartySubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<PartySubscriptionWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<PartySubscriptionWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<PartySubscriptionWhereInput[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<PartyWhereInput>;
}

export interface UserSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<UserSubscriptionWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<UserSubscriptionWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<UserSubscriptionWhereInput[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<UserWhereInput>;
}

export interface GameSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<GameSubscriptionWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<GameSubscriptionWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<GameSubscriptionWhereInput[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<GameWhereInput>;
}

export enum SocialMediaType {
  Facebook = 'FACEBOOK',
  Twitter = 'TWITTER',
  Google = 'GOOGLE'
}

export enum GameType {
  Board = 'BOARD',
  Pc = 'PC',
  Console = 'CONSOLE'
}

export enum ChatOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
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
  IsPublicAsc = 'isPublic_ASC',
  IsPublicDesc = 'isPublic_DESC'
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
  DeletedAsc = 'deleted_ASC',
  DeletedDesc = 'deleted_DESC',
  SocialmediaAsc = 'socialmedia_ASC',
  SocialmediaDesc = 'socialmedia_DESC'
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

export enum MutationType {
  Created = 'CREATED',
  Updated = 'UPDATED',
  Deleted = 'DELETED'
}

export type DateTime = any;

/** The `Long` scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
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
};

import * as ReactApollo from 'react-apollo';
import * as React from 'react';

import gql from 'graphql-tag';

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
export type SignupProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<SignupMutation, SignupVariables>
> &
  TChildProps;
export type SignupMutationFn = ReactApollo.MutationFn<
  SignupMutation,
  SignupVariables
>;
export function SignupHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        SignupMutation,
        SignupVariables,
        SignupProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    SignupMutation,
    SignupVariables,
    SignupProps<TChildProps>
  >(SignupDocument, operationOptions);
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
export type LoginProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<LoginMutation, LoginVariables>
> &
  TChildProps;
export type LoginMutationFn = ReactApollo.MutationFn<
  LoginMutation,
  LoginVariables
>;
export function LoginHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        LoginMutation,
        LoginVariables,
        LoginProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    LoginMutation,
    LoginVariables,
    LoginProps<TChildProps>
  >(LoginDocument, operationOptions);
}
export const MeQueryDocument = gql`
  query MeQuery {
    me {
      id
      email
      firstName
      lastName
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
export type MeQueryProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<MeQueryQuery, MeQueryVariables>
> &
  TChildProps;
export function MeQueryHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        MeQueryQuery,
        MeQueryVariables,
        MeQueryProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    MeQueryQuery,
    MeQueryVariables,
    MeQueryProps<TChildProps>
  >(MeQueryDocument, operationOptions);
}
