export type Maybe<T> = T | null;

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

  lastOnline?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  lastOnline_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  lastOnline_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  lastOnline_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  lastOnline_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  lastOnline_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  lastOnline_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  lastOnline_gte?: Maybe<DateTime>;

  deleted?: Maybe<boolean>;
  /** All values that are not equal to given value. */
  deleted_not?: Maybe<boolean>;

  provider?: Maybe<SocialMediaType>;
  /** All values that are not equal to given value. */
  provider_not?: Maybe<SocialMediaType>;
  /** All values that are contained in given list. */
  provider_in?: Maybe<SocialMediaType[]>;
  /** All values that are not contained in given list. */
  provider_not_in?: Maybe<SocialMediaType[]>;

  avatar?: Maybe<string>;
  /** All values that are not equal to given value. */
  avatar_not?: Maybe<string>;
  /** All values that are contained in given list. */
  avatar_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  avatar_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  avatar_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  avatar_lte?: Maybe<string>;
  /** All values greater than the given value. */
  avatar_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  avatar_gte?: Maybe<string>;
  /** All values containing the given string. */
  avatar_contains?: Maybe<string>;
  /** All values not containing the given string. */
  avatar_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  avatar_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  avatar_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  avatar_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  avatar_not_ends_with?: Maybe<string>;

  thirdPartyId?: Maybe<string>;
  /** All values that are not equal to given value. */
  thirdPartyId_not?: Maybe<string>;
  /** All values that are contained in given list. */
  thirdPartyId_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  thirdPartyId_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  thirdPartyId_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  thirdPartyId_lte?: Maybe<string>;
  /** All values greater than the given value. */
  thirdPartyId_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  thirdPartyId_gte?: Maybe<string>;
  /** All values containing the given string. */
  thirdPartyId_contains?: Maybe<string>;
  /** All values not containing the given string. */
  thirdPartyId_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  thirdPartyId_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  thirdPartyId_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  thirdPartyId_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  thirdPartyId_not_ends_with?: Maybe<string>;

  resetToken?: Maybe<string>;
  /** All values that are not equal to given value. */
  resetToken_not?: Maybe<string>;
  /** All values that are contained in given list. */
  resetToken_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  resetToken_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  resetToken_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  resetToken_lte?: Maybe<string>;
  /** All values greater than the given value. */
  resetToken_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  resetToken_gte?: Maybe<string>;
  /** All values containing the given string. */
  resetToken_contains?: Maybe<string>;
  /** All values not containing the given string. */
  resetToken_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  resetToken_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  resetToken_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  resetToken_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  resetToken_not_ends_with?: Maybe<string>;

  resetTokenExpiry?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  resetTokenExpiry_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  resetTokenExpiry_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  resetTokenExpiry_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  resetTokenExpiry_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  resetTokenExpiry_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  resetTokenExpiry_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  resetTokenExpiry_gte?: Maybe<DateTime>;

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

  normalizedTitle?: Maybe<string>;
  /** All values that are not equal to given value. */
  normalizedTitle_not?: Maybe<string>;
  /** All values that are contained in given list. */
  normalizedTitle_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  normalizedTitle_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  normalizedTitle_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  normalizedTitle_lte?: Maybe<string>;
  /** All values greater than the given value. */
  normalizedTitle_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  normalizedTitle_gte?: Maybe<string>;
  /** All values containing the given string. */
  normalizedTitle_contains?: Maybe<string>;
  /** All values not containing the given string. */
  normalizedTitle_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  normalizedTitle_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  normalizedTitle_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  normalizedTitle_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  normalizedTitle_not_ends_with?: Maybe<string>;

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

  colorTint?: Maybe<string>;
  /** All values that are not equal to given value. */
  colorTint_not?: Maybe<string>;
  /** All values that are contained in given list. */
  colorTint_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  colorTint_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  colorTint_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  colorTint_lte?: Maybe<string>;
  /** All values greater than the given value. */
  colorTint_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  colorTint_gte?: Maybe<string>;
  /** All values containing the given string. */
  colorTint_contains?: Maybe<string>;
  /** All values not containing the given string. */
  colorTint_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  colorTint_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  colorTint_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  colorTint_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  colorTint_not_ends_with?: Maybe<string>;

  isPublic?: Maybe<boolean>;
  /** All values that are not equal to given value. */
  isPublic_not?: Maybe<boolean>;

  start?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  start_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  start_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  start_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  start_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  start_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  start_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  start_gte?: Maybe<DateTime>;

  end?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  end_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  end_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  end_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  end_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  end_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  end_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  end_gte?: Maybe<DateTime>;

  inviteSecret?: Maybe<string>;
  /** All values that are not equal to given value. */
  inviteSecret_not?: Maybe<string>;
  /** All values that are contained in given list. */
  inviteSecret_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  inviteSecret_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  inviteSecret_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  inviteSecret_lte?: Maybe<string>;
  /** All values greater than the given value. */
  inviteSecret_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  inviteSecret_gte?: Maybe<string>;
  /** All values containing the given string. */
  inviteSecret_contains?: Maybe<string>;
  /** All values not containing the given string. */
  inviteSecret_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  inviteSecret_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  inviteSecret_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  inviteSecret_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  inviteSecret_not_ends_with?: Maybe<string>;

  author?: Maybe<UserWhereInput>;

  location?: Maybe<LocationWhereInput>;

  games_every?: Maybe<GameWhereInput>;

  games_some?: Maybe<GameWhereInput>;

  games_none?: Maybe<GameWhereInput>;

  members_every?: Maybe<UserWhereInput>;

  members_some?: Maybe<UserWhereInput>;

  members_none?: Maybe<UserWhereInput>;
}

export interface LocationWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<LocationWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<LocationWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<LocationWhereInput[]>;

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

  placeName?: Maybe<string>;
  /** All values that are not equal to given value. */
  placeName_not?: Maybe<string>;
  /** All values that are contained in given list. */
  placeName_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  placeName_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  placeName_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  placeName_lte?: Maybe<string>;
  /** All values greater than the given value. */
  placeName_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  placeName_gte?: Maybe<string>;
  /** All values containing the given string. */
  placeName_contains?: Maybe<string>;
  /** All values not containing the given string. */
  placeName_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  placeName_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  placeName_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  placeName_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  placeName_not_ends_with?: Maybe<string>;

  latitude?: Maybe<number>;
  /** All values that are not equal to given value. */
  latitude_not?: Maybe<number>;
  /** All values that are contained in given list. */
  latitude_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  latitude_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  latitude_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  latitude_lte?: Maybe<number>;
  /** All values greater than the given value. */
  latitude_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  latitude_gte?: Maybe<number>;

  longitude?: Maybe<number>;
  /** All values that are not equal to given value. */
  longitude_not?: Maybe<number>;
  /** All values that are contained in given list. */
  longitude_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  longitude_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  longitude_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  longitude_lte?: Maybe<number>;
  /** All values greater than the given value. */
  longitude_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  longitude_gte?: Maybe<number>;

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

export interface PartyInvitationWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<PartyInvitationWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<PartyInvitationWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<PartyInvitationWhereInput[]>;

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

  invitedBy?: Maybe<UserWhereInput>;

  user?: Maybe<UserWhereInput>;

  party?: Maybe<PartyWhereInput>;
}

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

export interface PlaylistWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<PlaylistWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<PlaylistWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<PlaylistWhereInput[]>;

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

  playlist_id?: Maybe<string>;
  /** All values that are not equal to given value. */
  playlist_id_not?: Maybe<string>;
  /** All values that are contained in given list. */
  playlist_id_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  playlist_id_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  playlist_id_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  playlist_id_lte?: Maybe<string>;
  /** All values greater than the given value. */
  playlist_id_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  playlist_id_gte?: Maybe<string>;
  /** All values containing the given string. */
  playlist_id_contains?: Maybe<string>;
  /** All values not containing the given string. */
  playlist_id_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  playlist_id_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  playlist_id_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  playlist_id_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  playlist_id_not_ends_with?: Maybe<string>;

  name?: Maybe<string>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<string>;
  /** All values that are contained in given list. */
  name_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  name_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<string>;
  /** All values greater than the given value. */
  name_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<string>;
  /** All values containing the given string. */
  name_contains?: Maybe<string>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<string>;

  isTemporary?: Maybe<boolean>;
  /** All values that are not equal to given value. */
  isTemporary_not?: Maybe<boolean>;

  tracks_every?: Maybe<TrackWhereInput>;

  tracks_some?: Maybe<TrackWhereInput>;

  tracks_none?: Maybe<TrackWhereInput>;
}

export interface TrackWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<TrackWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<TrackWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<TrackWhereInput[]>;

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

  name?: Maybe<string>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<string>;
  /** All values that are contained in given list. */
  name_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  name_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<string>;
  /** All values greater than the given value. */
  name_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<string>;
  /** All values containing the given string. */
  name_contains?: Maybe<string>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<string>;

  duration?: Maybe<number>;
  /** All values that are not equal to given value. */
  duration_not?: Maybe<number>;
  /** All values that are contained in given list. */
  duration_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  duration_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  duration_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  duration_lte?: Maybe<number>;
  /** All values greater than the given value. */
  duration_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  duration_gte?: Maybe<number>;

  preview_url?: Maybe<string>;
  /** All values that are not equal to given value. */
  preview_url_not?: Maybe<string>;
  /** All values that are contained in given list. */
  preview_url_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  preview_url_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  preview_url_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  preview_url_lte?: Maybe<string>;
  /** All values greater than the given value. */
  preview_url_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  preview_url_gte?: Maybe<string>;
  /** All values containing the given string. */
  preview_url_contains?: Maybe<string>;
  /** All values not containing the given string. */
  preview_url_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  preview_url_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  preview_url_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  preview_url_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  preview_url_not_ends_with?: Maybe<string>;

  album?: Maybe<AlbumWhereInput>;

  artists_every?: Maybe<ArtistWhereInput>;

  artists_some?: Maybe<ArtistWhereInput>;

  artists_none?: Maybe<ArtistWhereInput>;
}

export interface AlbumWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<AlbumWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<AlbumWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<AlbumWhereInput[]>;

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

  images_every?: Maybe<ImageWhereInput>;

  images_some?: Maybe<ImageWhereInput>;

  images_none?: Maybe<ImageWhereInput>;

  artists_every?: Maybe<ArtistWhereInput>;

  artists_some?: Maybe<ArtistWhereInput>;

  artists_none?: Maybe<ArtistWhereInput>;
}

export interface ImageWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<ImageWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<ImageWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<ImageWhereInput[]>;

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

  height?: Maybe<number>;
  /** All values that are not equal to given value. */
  height_not?: Maybe<number>;
  /** All values that are contained in given list. */
  height_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  height_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  height_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  height_lte?: Maybe<number>;
  /** All values greater than the given value. */
  height_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  height_gte?: Maybe<number>;

  width?: Maybe<number>;
  /** All values that are not equal to given value. */
  width_not?: Maybe<number>;
  /** All values that are contained in given list. */
  width_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  width_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  width_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  width_lte?: Maybe<number>;
  /** All values greater than the given value. */
  width_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  width_gte?: Maybe<number>;

  url?: Maybe<string>;
  /** All values that are not equal to given value. */
  url_not?: Maybe<string>;
  /** All values that are contained in given list. */
  url_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  url_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  url_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  url_lte?: Maybe<string>;
  /** All values greater than the given value. */
  url_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  url_gte?: Maybe<string>;
  /** All values containing the given string. */
  url_contains?: Maybe<string>;
  /** All values not containing the given string. */
  url_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  url_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  url_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  url_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  url_not_ends_with?: Maybe<string>;
}

export interface ArtistWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<ArtistWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<ArtistWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<ArtistWhereInput[]>;

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

  name?: Maybe<string>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<string>;
  /** All values that are contained in given list. */
  name_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  name_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<string>;
  /** All values greater than the given value. */
  name_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<string>;
  /** All values containing the given string. */
  name_contains?: Maybe<string>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<string>;
}

export interface MessageWhereUniqueInput {
  id?: Maybe<string>;
}

export interface ChatWhereUniqueInput {
  id?: Maybe<string>;
}

export interface PlaylistWhereUniqueInput {
  id?: Maybe<string>;

  playlist_id?: Maybe<string>;
}

export interface AlbumWhereUniqueInput {
  id?: Maybe<string>;
}

export interface ImageWhereUniqueInput {
  id?: Maybe<string>;
}

export interface LocationWhereUniqueInput {
  id?: Maybe<string>;
}

export interface GameWhereUniqueInput {
  id?: Maybe<string>;

  title?: Maybe<string>;
}

export interface ArtistWhereUniqueInput {
  id?: Maybe<string>;
}

export interface PartyInvitationWhereUniqueInput {
  id?: Maybe<string>;
}

export interface TrackWhereUniqueInput {
  id?: Maybe<string>;
}

export interface UserWhereUniqueInput {
  id?: Maybe<string>;

  email?: Maybe<string>;
}

export interface PartyWhereUniqueInput {
  id?: Maybe<string>;

  inviteSecret?: Maybe<string>;
}

export interface MessageCreateInput {
  id?: Maybe<string>;

  content: string;

  author: UserCreateOneInput;

  chat: ChatCreateOneWithoutMessagesInput;
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

  lastOnline?: Maybe<DateTime>;

  deleted?: Maybe<boolean>;

  provider?: Maybe<SocialMediaType>;

  avatar?: Maybe<string>;

  thirdPartyId?: Maybe<string>;

  resetToken?: Maybe<string>;

  resetTokenExpiry?: Maybe<DateTime>;

  parties?: Maybe<PartyCreateManyWithoutMembersInput>;

  friends?: Maybe<UserCreateManyInput>;

  pendingFriendInvitations?: Maybe<UserCreateManyInput>;

  pendingPartyInvitations?: Maybe<PartyInvitationCreateManyInput>;

  chats?: Maybe<ChatCreateManyWithoutMembersInput>;
}

export interface PartyCreateManyWithoutMembersInput {
  create?: Maybe<PartyCreateWithoutMembersInput[]>;

  connect?: Maybe<PartyWhereUniqueInput[]>;
}

export interface PartyCreateWithoutMembersInput {
  id?: Maybe<string>;

  title: string;

  normalizedTitle: string;

  description: string;

  colorTint: string;

  isPublic?: Maybe<boolean>;

  start?: Maybe<DateTime>;

  end?: Maybe<DateTime>;

  inviteSecret?: Maybe<string>;

  author: UserCreateOneInput;

  location: LocationCreateOneInput;

  games?: Maybe<GameCreateManyInput>;
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

export interface UserCreateManyInput {
  create?: Maybe<UserCreateInput[]>;

  connect?: Maybe<UserWhereUniqueInput[]>;
}

export interface PartyInvitationCreateManyInput {
  create?: Maybe<PartyInvitationCreateInput[]>;

  connect?: Maybe<PartyInvitationWhereUniqueInput[]>;
}

export interface PartyInvitationCreateInput {
  id?: Maybe<string>;

  invitedBy: UserCreateOneInput;

  user: UserCreateOneInput;

  party: PartyCreateOneInput;
}

export interface PartyCreateOneInput {
  create?: Maybe<PartyCreateInput>;

  connect?: Maybe<PartyWhereUniqueInput>;
}

export interface PartyCreateInput {
  id?: Maybe<string>;

  title: string;

  normalizedTitle: string;

  description: string;

  colorTint: string;

  isPublic?: Maybe<boolean>;

  start?: Maybe<DateTime>;

  end?: Maybe<DateTime>;

  inviteSecret?: Maybe<string>;

  author: UserCreateOneInput;

  location: LocationCreateOneInput;

  games?: Maybe<GameCreateManyInput>;

  members?: Maybe<UserCreateManyWithoutPartiesInput>;
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

  lastOnline?: Maybe<DateTime>;

  deleted?: Maybe<boolean>;

  provider?: Maybe<SocialMediaType>;

  avatar?: Maybe<string>;

  thirdPartyId?: Maybe<string>;

  resetToken?: Maybe<string>;

  resetTokenExpiry?: Maybe<DateTime>;

  friends?: Maybe<UserCreateManyInput>;

  pendingFriendInvitations?: Maybe<UserCreateManyInput>;

  pendingPartyInvitations?: Maybe<PartyInvitationCreateManyInput>;

  chats?: Maybe<ChatCreateManyWithoutMembersInput>;
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

  content: string;

  author: UserCreateOneInput;
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

  lastOnline?: Maybe<DateTime>;

  deleted?: Maybe<boolean>;

  provider?: Maybe<SocialMediaType>;

  avatar?: Maybe<string>;

  thirdPartyId?: Maybe<string>;

  resetToken?: Maybe<string>;

  resetTokenExpiry?: Maybe<DateTime>;

  parties?: Maybe<PartyCreateManyWithoutMembersInput>;

  friends?: Maybe<UserCreateManyInput>;

  pendingFriendInvitations?: Maybe<UserCreateManyInput>;

  pendingPartyInvitations?: Maybe<PartyInvitationCreateManyInput>;
}

export interface ChatCreateInput {
  id?: Maybe<string>;

  party: PartyCreateOneInput;

  members?: Maybe<UserCreateManyWithoutChatsInput>;

  messages?: Maybe<MessageCreateManyWithoutChatInput>;
}

export interface PlaylistCreateInput {
  id?: Maybe<string>;

  playlist_id?: Maybe<string>;

  name: string;

  isTemporary?: Maybe<boolean>;

  tracks?: Maybe<TrackCreateManyInput>;
}

export interface TrackCreateManyInput {
  create?: Maybe<TrackCreateInput[]>;

  connect?: Maybe<TrackWhereUniqueInput[]>;
}

export interface TrackCreateInput {
  id?: Maybe<string>;

  name: string;

  duration: number;

  preview_url: string;

  album: AlbumCreateOneInput;

  artists?: Maybe<ArtistCreateManyInput>;
}

export interface AlbumCreateOneInput {
  create?: Maybe<AlbumCreateInput>;

  connect?: Maybe<AlbumWhereUniqueInput>;
}

export interface AlbumCreateInput {
  id?: Maybe<string>;

  images?: Maybe<ImageCreateManyInput>;

  artists?: Maybe<ArtistCreateManyInput>;
}

export interface ImageCreateManyInput {
  create?: Maybe<ImageCreateInput[]>;

  connect?: Maybe<ImageWhereUniqueInput[]>;
}

export interface ImageCreateInput {
  id?: Maybe<string>;

  height: number;

  width: number;

  url: string;
}

export interface ArtistCreateManyInput {
  create?: Maybe<ArtistCreateInput[]>;

  connect?: Maybe<ArtistWhereUniqueInput[]>;
}

export interface ArtistCreateInput {
  id?: Maybe<string>;

  name: string;
}

export interface MessageUpdateInput {
  content?: Maybe<string>;

  author?: Maybe<UserUpdateOneRequiredInput>;

  chat?: Maybe<ChatUpdateOneRequiredWithoutMessagesInput>;
}

export interface UserUpdateOneRequiredInput {
  create?: Maybe<UserCreateInput>;

  connect?: Maybe<UserWhereUniqueInput>;

  update?: Maybe<UserUpdateDataInput>;

  upsert?: Maybe<UserUpsertNestedInput>;
}

export interface UserUpdateDataInput {
  email?: Maybe<string>;

  firstName?: Maybe<string>;

  lastName?: Maybe<string>;

  password?: Maybe<string>;

  lastOnline?: Maybe<DateTime>;

  deleted?: Maybe<boolean>;

  provider?: Maybe<SocialMediaType>;

  avatar?: Maybe<string>;

  thirdPartyId?: Maybe<string>;

  resetToken?: Maybe<string>;

  resetTokenExpiry?: Maybe<DateTime>;

  parties?: Maybe<PartyUpdateManyWithoutMembersInput>;

  friends?: Maybe<UserUpdateManyInput>;

  pendingFriendInvitations?: Maybe<UserUpdateManyInput>;

  pendingPartyInvitations?: Maybe<PartyInvitationUpdateManyInput>;

  chats?: Maybe<ChatUpdateManyWithoutMembersInput>;
}

export interface PartyUpdateManyWithoutMembersInput {
  create?: Maybe<PartyCreateWithoutMembersInput[]>;

  connect?: Maybe<PartyWhereUniqueInput[]>;

  set?: Maybe<PartyWhereUniqueInput[]>;

  disconnect?: Maybe<PartyWhereUniqueInput[]>;

  delete?: Maybe<PartyWhereUniqueInput[]>;

  update?: Maybe<PartyUpdateWithWhereUniqueWithoutMembersInput[]>;

  updateMany?: Maybe<PartyUpdateManyWithWhereNestedInput[]>;

  deleteMany?: Maybe<PartyScalarWhereInput[]>;

  upsert?: Maybe<PartyUpsertWithWhereUniqueWithoutMembersInput[]>;
}

export interface PartyUpdateWithWhereUniqueWithoutMembersInput {
  where: PartyWhereUniqueInput;

  data: PartyUpdateWithoutMembersDataInput;
}

export interface PartyUpdateWithoutMembersDataInput {
  title?: Maybe<string>;

  normalizedTitle?: Maybe<string>;

  description?: Maybe<string>;

  colorTint?: Maybe<string>;

  isPublic?: Maybe<boolean>;

  start?: Maybe<DateTime>;

  end?: Maybe<DateTime>;

  inviteSecret?: Maybe<string>;

  author?: Maybe<UserUpdateOneRequiredInput>;

  location?: Maybe<LocationUpdateOneRequiredInput>;

  games?: Maybe<GameUpdateManyInput>;
}

export interface LocationUpdateOneRequiredInput {
  create?: Maybe<LocationCreateInput>;

  connect?: Maybe<LocationWhereUniqueInput>;

  update?: Maybe<LocationUpdateDataInput>;

  upsert?: Maybe<LocationUpsertNestedInput>;
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

  normalizedTitle?: Maybe<string>;
  /** All values that are not equal to given value. */
  normalizedTitle_not?: Maybe<string>;
  /** All values that are contained in given list. */
  normalizedTitle_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  normalizedTitle_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  normalizedTitle_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  normalizedTitle_lte?: Maybe<string>;
  /** All values greater than the given value. */
  normalizedTitle_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  normalizedTitle_gte?: Maybe<string>;
  /** All values containing the given string. */
  normalizedTitle_contains?: Maybe<string>;
  /** All values not containing the given string. */
  normalizedTitle_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  normalizedTitle_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  normalizedTitle_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  normalizedTitle_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  normalizedTitle_not_ends_with?: Maybe<string>;

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

  colorTint?: Maybe<string>;
  /** All values that are not equal to given value. */
  colorTint_not?: Maybe<string>;
  /** All values that are contained in given list. */
  colorTint_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  colorTint_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  colorTint_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  colorTint_lte?: Maybe<string>;
  /** All values greater than the given value. */
  colorTint_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  colorTint_gte?: Maybe<string>;
  /** All values containing the given string. */
  colorTint_contains?: Maybe<string>;
  /** All values not containing the given string. */
  colorTint_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  colorTint_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  colorTint_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  colorTint_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  colorTint_not_ends_with?: Maybe<string>;

  isPublic?: Maybe<boolean>;
  /** All values that are not equal to given value. */
  isPublic_not?: Maybe<boolean>;

  start?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  start_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  start_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  start_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  start_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  start_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  start_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  start_gte?: Maybe<DateTime>;

  end?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  end_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  end_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  end_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  end_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  end_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  end_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  end_gte?: Maybe<DateTime>;

  inviteSecret?: Maybe<string>;
  /** All values that are not equal to given value. */
  inviteSecret_not?: Maybe<string>;
  /** All values that are contained in given list. */
  inviteSecret_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  inviteSecret_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  inviteSecret_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  inviteSecret_lte?: Maybe<string>;
  /** All values greater than the given value. */
  inviteSecret_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  inviteSecret_gte?: Maybe<string>;
  /** All values containing the given string. */
  inviteSecret_contains?: Maybe<string>;
  /** All values not containing the given string. */
  inviteSecret_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  inviteSecret_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  inviteSecret_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  inviteSecret_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  inviteSecret_not_ends_with?: Maybe<string>;
}

export interface PartyUpdateManyDataInput {
  title?: Maybe<string>;

  normalizedTitle?: Maybe<string>;

  description?: Maybe<string>;

  colorTint?: Maybe<string>;

  isPublic?: Maybe<boolean>;

  start?: Maybe<DateTime>;

  end?: Maybe<DateTime>;

  inviteSecret?: Maybe<string>;
}

export interface PartyUpsertWithWhereUniqueWithoutMembersInput {
  where: PartyWhereUniqueInput;

  update: PartyUpdateWithoutMembersDataInput;

  create: PartyCreateWithoutMembersInput;
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

  lastOnline?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  lastOnline_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  lastOnline_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  lastOnline_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  lastOnline_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  lastOnline_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  lastOnline_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  lastOnline_gte?: Maybe<DateTime>;

  deleted?: Maybe<boolean>;
  /** All values that are not equal to given value. */
  deleted_not?: Maybe<boolean>;

  provider?: Maybe<SocialMediaType>;
  /** All values that are not equal to given value. */
  provider_not?: Maybe<SocialMediaType>;
  /** All values that are contained in given list. */
  provider_in?: Maybe<SocialMediaType[]>;
  /** All values that are not contained in given list. */
  provider_not_in?: Maybe<SocialMediaType[]>;

  avatar?: Maybe<string>;
  /** All values that are not equal to given value. */
  avatar_not?: Maybe<string>;
  /** All values that are contained in given list. */
  avatar_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  avatar_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  avatar_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  avatar_lte?: Maybe<string>;
  /** All values greater than the given value. */
  avatar_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  avatar_gte?: Maybe<string>;
  /** All values containing the given string. */
  avatar_contains?: Maybe<string>;
  /** All values not containing the given string. */
  avatar_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  avatar_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  avatar_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  avatar_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  avatar_not_ends_with?: Maybe<string>;

  thirdPartyId?: Maybe<string>;
  /** All values that are not equal to given value. */
  thirdPartyId_not?: Maybe<string>;
  /** All values that are contained in given list. */
  thirdPartyId_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  thirdPartyId_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  thirdPartyId_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  thirdPartyId_lte?: Maybe<string>;
  /** All values greater than the given value. */
  thirdPartyId_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  thirdPartyId_gte?: Maybe<string>;
  /** All values containing the given string. */
  thirdPartyId_contains?: Maybe<string>;
  /** All values not containing the given string. */
  thirdPartyId_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  thirdPartyId_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  thirdPartyId_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  thirdPartyId_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  thirdPartyId_not_ends_with?: Maybe<string>;

  resetToken?: Maybe<string>;
  /** All values that are not equal to given value. */
  resetToken_not?: Maybe<string>;
  /** All values that are contained in given list. */
  resetToken_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  resetToken_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  resetToken_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  resetToken_lte?: Maybe<string>;
  /** All values greater than the given value. */
  resetToken_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  resetToken_gte?: Maybe<string>;
  /** All values containing the given string. */
  resetToken_contains?: Maybe<string>;
  /** All values not containing the given string. */
  resetToken_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  resetToken_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  resetToken_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  resetToken_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  resetToken_not_ends_with?: Maybe<string>;

  resetTokenExpiry?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  resetTokenExpiry_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  resetTokenExpiry_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  resetTokenExpiry_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  resetTokenExpiry_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  resetTokenExpiry_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  resetTokenExpiry_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  resetTokenExpiry_gte?: Maybe<DateTime>;
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

  resetToken?: Maybe<string>;

  resetTokenExpiry?: Maybe<DateTime>;
}

export interface UserUpsertWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput;

  update: UserUpdateDataInput;

  create: UserCreateInput;
}

export interface PartyInvitationUpdateManyInput {
  create?: Maybe<PartyInvitationCreateInput[]>;

  connect?: Maybe<PartyInvitationWhereUniqueInput[]>;

  set?: Maybe<PartyInvitationWhereUniqueInput[]>;

  disconnect?: Maybe<PartyInvitationWhereUniqueInput[]>;

  delete?: Maybe<PartyInvitationWhereUniqueInput[]>;

  update?: Maybe<PartyInvitationUpdateWithWhereUniqueNestedInput[]>;

  deleteMany?: Maybe<PartyInvitationScalarWhereInput[]>;

  upsert?: Maybe<PartyInvitationUpsertWithWhereUniqueNestedInput[]>;
}

export interface PartyInvitationUpdateWithWhereUniqueNestedInput {
  where: PartyInvitationWhereUniqueInput;

  data: PartyInvitationUpdateDataInput;
}

export interface PartyInvitationUpdateDataInput {
  invitedBy?: Maybe<UserUpdateOneRequiredInput>;

  user?: Maybe<UserUpdateOneRequiredInput>;

  party?: Maybe<PartyUpdateOneRequiredInput>;
}

export interface PartyUpdateOneRequiredInput {
  create?: Maybe<PartyCreateInput>;

  connect?: Maybe<PartyWhereUniqueInput>;

  update?: Maybe<PartyUpdateDataInput>;

  upsert?: Maybe<PartyUpsertNestedInput>;
}

export interface PartyUpdateDataInput {
  title?: Maybe<string>;

  normalizedTitle?: Maybe<string>;

  description?: Maybe<string>;

  colorTint?: Maybe<string>;

  isPublic?: Maybe<boolean>;

  start?: Maybe<DateTime>;

  end?: Maybe<DateTime>;

  inviteSecret?: Maybe<string>;

  author?: Maybe<UserUpdateOneRequiredInput>;

  location?: Maybe<LocationUpdateOneRequiredInput>;

  games?: Maybe<GameUpdateManyInput>;

  members?: Maybe<UserUpdateManyWithoutPartiesInput>;
}

export interface UserUpdateManyWithoutPartiesInput {
  create?: Maybe<UserCreateWithoutPartiesInput[]>;

  connect?: Maybe<UserWhereUniqueInput[]>;

  set?: Maybe<UserWhereUniqueInput[]>;

  disconnect?: Maybe<UserWhereUniqueInput[]>;

  delete?: Maybe<UserWhereUniqueInput[]>;

  update?: Maybe<UserUpdateWithWhereUniqueWithoutPartiesInput[]>;

  updateMany?: Maybe<UserUpdateManyWithWhereNestedInput[]>;

  deleteMany?: Maybe<UserScalarWhereInput[]>;

  upsert?: Maybe<UserUpsertWithWhereUniqueWithoutPartiesInput[]>;
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

  lastOnline?: Maybe<DateTime>;

  deleted?: Maybe<boolean>;

  provider?: Maybe<SocialMediaType>;

  avatar?: Maybe<string>;

  thirdPartyId?: Maybe<string>;

  resetToken?: Maybe<string>;

  resetTokenExpiry?: Maybe<DateTime>;

  friends?: Maybe<UserUpdateManyInput>;

  pendingFriendInvitations?: Maybe<UserUpdateManyInput>;

  pendingPartyInvitations?: Maybe<PartyInvitationUpdateManyInput>;

  chats?: Maybe<ChatUpdateManyWithoutMembersInput>;
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

export interface UserUpsertWithWhereUniqueWithoutPartiesInput {
  where: UserWhereUniqueInput;

  update: UserUpdateWithoutPartiesDataInput;

  create: UserCreateWithoutPartiesInput;
}

export interface PartyUpsertNestedInput {
  update: PartyUpdateDataInput;

  create: PartyCreateInput;
}

export interface PartyInvitationScalarWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<PartyInvitationScalarWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<PartyInvitationScalarWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<PartyInvitationScalarWhereInput[]>;

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
}

export interface PartyInvitationUpsertWithWhereUniqueNestedInput {
  where: PartyInvitationWhereUniqueInput;

  update: PartyInvitationUpdateDataInput;

  create: PartyInvitationCreateInput;
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput;

  create: UserCreateInput;
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

  lastOnline?: Maybe<DateTime>;

  deleted?: Maybe<boolean>;

  provider?: Maybe<SocialMediaType>;

  avatar?: Maybe<string>;

  thirdPartyId?: Maybe<string>;

  resetToken?: Maybe<string>;

  resetTokenExpiry?: Maybe<DateTime>;

  parties?: Maybe<PartyUpdateManyWithoutMembersInput>;

  friends?: Maybe<UserUpdateManyInput>;

  pendingFriendInvitations?: Maybe<UserUpdateManyInput>;

  pendingPartyInvitations?: Maybe<PartyInvitationUpdateManyInput>;
}

export interface UserUpsertWithWhereUniqueWithoutChatsInput {
  where: UserWhereUniqueInput;

  update: UserUpdateWithoutChatsDataInput;

  create: UserCreateWithoutChatsInput;
}

export interface ChatUpsertWithoutMessagesInput {
  update: ChatUpdateWithoutMessagesDataInput;

  create: ChatCreateWithoutMessagesInput;
}

export interface ChatUpdateInput {
  party?: Maybe<PartyUpdateOneRequiredInput>;

  members?: Maybe<UserUpdateManyWithoutChatsInput>;

  messages?: Maybe<MessageUpdateManyWithoutChatInput>;
}

export interface PlaylistUpdateInput {
  playlist_id?: Maybe<string>;

  name?: Maybe<string>;

  isTemporary?: Maybe<boolean>;

  tracks?: Maybe<TrackUpdateManyInput>;
}

export interface TrackUpdateManyInput {
  create?: Maybe<TrackCreateInput[]>;

  connect?: Maybe<TrackWhereUniqueInput[]>;

  set?: Maybe<TrackWhereUniqueInput[]>;

  disconnect?: Maybe<TrackWhereUniqueInput[]>;

  delete?: Maybe<TrackWhereUniqueInput[]>;

  update?: Maybe<TrackUpdateWithWhereUniqueNestedInput[]>;

  updateMany?: Maybe<TrackUpdateManyWithWhereNestedInput[]>;

  deleteMany?: Maybe<TrackScalarWhereInput[]>;

  upsert?: Maybe<TrackUpsertWithWhereUniqueNestedInput[]>;
}

export interface TrackUpdateWithWhereUniqueNestedInput {
  where: TrackWhereUniqueInput;

  data: TrackUpdateDataInput;
}

export interface TrackUpdateDataInput {
  name?: Maybe<string>;

  duration?: Maybe<number>;

  preview_url?: Maybe<string>;

  album?: Maybe<AlbumUpdateOneRequiredInput>;

  artists?: Maybe<ArtistUpdateManyInput>;
}

export interface AlbumUpdateOneRequiredInput {
  create?: Maybe<AlbumCreateInput>;

  connect?: Maybe<AlbumWhereUniqueInput>;

  update?: Maybe<AlbumUpdateDataInput>;

  upsert?: Maybe<AlbumUpsertNestedInput>;
}

export interface AlbumUpdateDataInput {
  images?: Maybe<ImageUpdateManyInput>;

  artists?: Maybe<ArtistUpdateManyInput>;
}

export interface ImageUpdateManyInput {
  create?: Maybe<ImageCreateInput[]>;

  connect?: Maybe<ImageWhereUniqueInput[]>;

  set?: Maybe<ImageWhereUniqueInput[]>;

  disconnect?: Maybe<ImageWhereUniqueInput[]>;

  delete?: Maybe<ImageWhereUniqueInput[]>;

  update?: Maybe<ImageUpdateWithWhereUniqueNestedInput[]>;

  updateMany?: Maybe<ImageUpdateManyWithWhereNestedInput[]>;

  deleteMany?: Maybe<ImageScalarWhereInput[]>;

  upsert?: Maybe<ImageUpsertWithWhereUniqueNestedInput[]>;
}

export interface ImageUpdateWithWhereUniqueNestedInput {
  where: ImageWhereUniqueInput;

  data: ImageUpdateDataInput;
}

export interface ImageUpdateDataInput {
  height?: Maybe<number>;

  width?: Maybe<number>;

  url?: Maybe<string>;
}

export interface ImageUpdateManyWithWhereNestedInput {
  where: ImageScalarWhereInput;

  data: ImageUpdateManyDataInput;
}

export interface ImageScalarWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<ImageScalarWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<ImageScalarWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<ImageScalarWhereInput[]>;

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

  height?: Maybe<number>;
  /** All values that are not equal to given value. */
  height_not?: Maybe<number>;
  /** All values that are contained in given list. */
  height_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  height_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  height_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  height_lte?: Maybe<number>;
  /** All values greater than the given value. */
  height_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  height_gte?: Maybe<number>;

  width?: Maybe<number>;
  /** All values that are not equal to given value. */
  width_not?: Maybe<number>;
  /** All values that are contained in given list. */
  width_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  width_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  width_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  width_lte?: Maybe<number>;
  /** All values greater than the given value. */
  width_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  width_gte?: Maybe<number>;

  url?: Maybe<string>;
  /** All values that are not equal to given value. */
  url_not?: Maybe<string>;
  /** All values that are contained in given list. */
  url_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  url_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  url_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  url_lte?: Maybe<string>;
  /** All values greater than the given value. */
  url_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  url_gte?: Maybe<string>;
  /** All values containing the given string. */
  url_contains?: Maybe<string>;
  /** All values not containing the given string. */
  url_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  url_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  url_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  url_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  url_not_ends_with?: Maybe<string>;
}

export interface ImageUpdateManyDataInput {
  height?: Maybe<number>;

  width?: Maybe<number>;

  url?: Maybe<string>;
}

export interface ImageUpsertWithWhereUniqueNestedInput {
  where: ImageWhereUniqueInput;

  update: ImageUpdateDataInput;

  create: ImageCreateInput;
}

export interface ArtistUpdateManyInput {
  create?: Maybe<ArtistCreateInput[]>;

  connect?: Maybe<ArtistWhereUniqueInput[]>;

  set?: Maybe<ArtistWhereUniqueInput[]>;

  disconnect?: Maybe<ArtistWhereUniqueInput[]>;

  delete?: Maybe<ArtistWhereUniqueInput[]>;

  update?: Maybe<ArtistUpdateWithWhereUniqueNestedInput[]>;

  updateMany?: Maybe<ArtistUpdateManyWithWhereNestedInput[]>;

  deleteMany?: Maybe<ArtistScalarWhereInput[]>;

  upsert?: Maybe<ArtistUpsertWithWhereUniqueNestedInput[]>;
}

export interface ArtistUpdateWithWhereUniqueNestedInput {
  where: ArtistWhereUniqueInput;

  data: ArtistUpdateDataInput;
}

export interface ArtistUpdateDataInput {
  name?: Maybe<string>;
}

export interface ArtistUpdateManyWithWhereNestedInput {
  where: ArtistScalarWhereInput;

  data: ArtistUpdateManyDataInput;
}

export interface ArtistScalarWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<ArtistScalarWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<ArtistScalarWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<ArtistScalarWhereInput[]>;

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

  name?: Maybe<string>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<string>;
  /** All values that are contained in given list. */
  name_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  name_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<string>;
  /** All values greater than the given value. */
  name_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<string>;
  /** All values containing the given string. */
  name_contains?: Maybe<string>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<string>;
}

export interface ArtistUpdateManyDataInput {
  name?: Maybe<string>;
}

export interface ArtistUpsertWithWhereUniqueNestedInput {
  where: ArtistWhereUniqueInput;

  update: ArtistUpdateDataInput;

  create: ArtistCreateInput;
}

export interface AlbumUpsertNestedInput {
  update: AlbumUpdateDataInput;

  create: AlbumCreateInput;
}

export interface TrackUpdateManyWithWhereNestedInput {
  where: TrackScalarWhereInput;

  data: TrackUpdateManyDataInput;
}

export interface TrackScalarWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<TrackScalarWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<TrackScalarWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<TrackScalarWhereInput[]>;

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

  name?: Maybe<string>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<string>;
  /** All values that are contained in given list. */
  name_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  name_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<string>;
  /** All values greater than the given value. */
  name_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<string>;
  /** All values containing the given string. */
  name_contains?: Maybe<string>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<string>;

  duration?: Maybe<number>;
  /** All values that are not equal to given value. */
  duration_not?: Maybe<number>;
  /** All values that are contained in given list. */
  duration_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  duration_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  duration_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  duration_lte?: Maybe<number>;
  /** All values greater than the given value. */
  duration_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  duration_gte?: Maybe<number>;

  preview_url?: Maybe<string>;
  /** All values that are not equal to given value. */
  preview_url_not?: Maybe<string>;
  /** All values that are contained in given list. */
  preview_url_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  preview_url_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  preview_url_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  preview_url_lte?: Maybe<string>;
  /** All values greater than the given value. */
  preview_url_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  preview_url_gte?: Maybe<string>;
  /** All values containing the given string. */
  preview_url_contains?: Maybe<string>;
  /** All values not containing the given string. */
  preview_url_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  preview_url_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  preview_url_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  preview_url_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  preview_url_not_ends_with?: Maybe<string>;
}

export interface TrackUpdateManyDataInput {
  name?: Maybe<string>;

  duration?: Maybe<number>;

  preview_url?: Maybe<string>;
}

export interface TrackUpsertWithWhereUniqueNestedInput {
  where: TrackWhereUniqueInput;

  update: TrackUpdateDataInput;

  create: TrackCreateInput;
}

export interface AlbumUpdateInput {
  images?: Maybe<ImageUpdateManyInput>;

  artists?: Maybe<ArtistUpdateManyInput>;
}

export interface ImageUpdateInput {
  height?: Maybe<number>;

  width?: Maybe<number>;

  url?: Maybe<string>;
}

export interface LocationUpdateInput {
  placeName?: Maybe<string>;

  latitude?: Maybe<number>;

  longitude?: Maybe<number>;
}

export interface GameUpdateInput {
  title?: Maybe<string>;

  cover?: Maybe<string>;

  type?: Maybe<GameType>;
}

export interface ArtistUpdateInput {
  name?: Maybe<string>;
}

export interface PartyInvitationUpdateInput {
  invitedBy?: Maybe<UserUpdateOneRequiredInput>;

  user?: Maybe<UserUpdateOneRequiredInput>;

  party?: Maybe<PartyUpdateOneRequiredInput>;
}

export interface TrackUpdateInput {
  name?: Maybe<string>;

  duration?: Maybe<number>;

  preview_url?: Maybe<string>;

  album?: Maybe<AlbumUpdateOneRequiredInput>;

  artists?: Maybe<ArtistUpdateManyInput>;
}

export interface UserUpdateInput {
  email?: Maybe<string>;

  firstName?: Maybe<string>;

  lastName?: Maybe<string>;

  password?: Maybe<string>;

  lastOnline?: Maybe<DateTime>;

  deleted?: Maybe<boolean>;

  provider?: Maybe<SocialMediaType>;

  avatar?: Maybe<string>;

  thirdPartyId?: Maybe<string>;

  resetToken?: Maybe<string>;

  resetTokenExpiry?: Maybe<DateTime>;

  parties?: Maybe<PartyUpdateManyWithoutMembersInput>;

  friends?: Maybe<UserUpdateManyInput>;

  pendingFriendInvitations?: Maybe<UserUpdateManyInput>;

  pendingPartyInvitations?: Maybe<PartyInvitationUpdateManyInput>;

  chats?: Maybe<ChatUpdateManyWithoutMembersInput>;
}

export interface PartyUpdateInput {
  title?: Maybe<string>;

  normalizedTitle?: Maybe<string>;

  description?: Maybe<string>;

  colorTint?: Maybe<string>;

  isPublic?: Maybe<boolean>;

  start?: Maybe<DateTime>;

  end?: Maybe<DateTime>;

  inviteSecret?: Maybe<string>;

  author?: Maybe<UserUpdateOneRequiredInput>;

  location?: Maybe<LocationUpdateOneRequiredInput>;

  games?: Maybe<GameUpdateManyInput>;

  members?: Maybe<UserUpdateManyWithoutPartiesInput>;
}

export interface MessageUpdateManyMutationInput {
  content?: Maybe<string>;
}

export interface PlaylistUpdateManyMutationInput {
  playlist_id?: Maybe<string>;

  name?: Maybe<string>;

  isTemporary?: Maybe<boolean>;
}

export interface ImageUpdateManyMutationInput {
  height?: Maybe<number>;

  width?: Maybe<number>;

  url?: Maybe<string>;
}

export interface LocationUpdateManyMutationInput {
  placeName?: Maybe<string>;

  latitude?: Maybe<number>;

  longitude?: Maybe<number>;
}

export interface GameUpdateManyMutationInput {
  title?: Maybe<string>;

  cover?: Maybe<string>;

  type?: Maybe<GameType>;
}

export interface ArtistUpdateManyMutationInput {
  name?: Maybe<string>;
}

export interface TrackUpdateManyMutationInput {
  name?: Maybe<string>;

  duration?: Maybe<number>;

  preview_url?: Maybe<string>;
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

  resetToken?: Maybe<string>;

  resetTokenExpiry?: Maybe<DateTime>;
}

export interface PartyUpdateManyMutationInput {
  title?: Maybe<string>;

  normalizedTitle?: Maybe<string>;

  description?: Maybe<string>;

  colorTint?: Maybe<string>;

  isPublic?: Maybe<boolean>;

  start?: Maybe<DateTime>;

  end?: Maybe<DateTime>;

  inviteSecret?: Maybe<string>;
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

export interface PlaylistSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<PlaylistSubscriptionWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<PlaylistSubscriptionWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<PlaylistSubscriptionWhereInput[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<PlaylistWhereInput>;
}

export interface AlbumSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<AlbumSubscriptionWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<AlbumSubscriptionWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<AlbumSubscriptionWhereInput[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<AlbumWhereInput>;
}

export interface ImageSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<ImageSubscriptionWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<ImageSubscriptionWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<ImageSubscriptionWhereInput[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<ImageWhereInput>;
}

export interface LocationSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<LocationSubscriptionWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<LocationSubscriptionWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<LocationSubscriptionWhereInput[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<LocationWhereInput>;
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

export interface ArtistSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<ArtistSubscriptionWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<ArtistSubscriptionWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<ArtistSubscriptionWhereInput[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<ArtistWhereInput>;
}

export interface PartyInvitationSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<PartyInvitationSubscriptionWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<PartyInvitationSubscriptionWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<PartyInvitationSubscriptionWhereInput[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<PartyInvitationWhereInput>;
}

export interface TrackSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<TrackSubscriptionWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<TrackSubscriptionWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<TrackSubscriptionWhereInput[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<TrackWhereInput>;
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

export enum PartyInvitationOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC'
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

export enum ArtistOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

export enum AlbumOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
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

export type RequestPasswordResetVariables = {
  email: string;
};

export type RequestPasswordResetMutation = {
  __typename?: 'Mutation';

  requestReset: Maybe<RequestPasswordResetRequestReset>;
};

export type RequestPasswordResetRequestReset = {
  __typename?: 'SuccessMessage';

  message: string;
};

export type ResetPasswordVariables = {
  password: string;
  confirmPassword: string;
  resetToken: string;
};

export type ResetPasswordMutation = {
  __typename?: 'Mutation';

  resetPassword: Maybe<ResetPasswordResetPassword>;
};

export type ResetPasswordResetPassword = {
  __typename?: 'AuthPayload';

  token: string;
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

export type CreatePartyInvitationVariables = {
  data: PartyInvitationCreateInput;
};

export type CreatePartyInvitationMutation = {
  __typename?: 'Mutation';

  createPartyInvitation: CreatePartyInvitationCreatePartyInvitation;
};

export type CreatePartyInvitationCreatePartyInvitation = {
  __typename?: 'PartyInvitation';

  id: string;
};

export type DeleteManyPartyInvitationsVariables = {
  where?: Maybe<PartyInvitationWhereInput>;
};

export type DeleteManyPartyInvitationsMutation = {
  __typename?: 'Mutation';

  deleteManyPartyInvitations: DeleteManyPartyInvitationsDeleteManyPartyInvitations;
};

export type DeleteManyPartyInvitationsDeleteManyPartyInvitations = {
  __typename?: 'BatchPayload';

  count: Long;
};

export type DeletePartyInvitationMutationVariables = {
  where: PartyInvitationWhereUniqueInput;
};

export type DeletePartyInvitationMutationMutation = {
  __typename?: 'Mutation';

  deletePartyInvitation: Maybe<
    DeletePartyInvitationMutationDeletePartyInvitation
  >;
};

export type DeletePartyInvitationMutationDeletePartyInvitation = {
  __typename?: 'PartyInvitation';

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

export type PartiesQueryParties = {
  __typename?: 'Party';

  location: PartiesQueryLocation;
} & PartyFragmentFragment;

export type PartiesQueryLocation = {
  __typename?: 'Location';

  placeName: string;

  latitude: number;

  longitude: number;
};

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

  hasUnreadMessages: boolean;
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

export type PaginateMessagesQueryNode = MessageFragmentFragment;

export type PaginateUsersInviteToPartyQueryVariables = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
  partyInvitationWhere?: Maybe<PartyInvitationWhereInput>;
};

export type PaginateUsersInviteToPartyQueryQuery = {
  __typename?: 'Query';

  paginateUsers: PaginateUsersInviteToPartyQueryPaginateUsers;
};

export type PaginateUsersInviteToPartyQueryPaginateUsers = {
  __typename?: 'UserConnection';

  edges: (Maybe<PaginateUsersInviteToPartyQueryEdges>)[];

  pageInfo: PaginateUsersInviteToPartyQueryPageInfo;
};

export type PaginateUsersInviteToPartyQueryEdges = {
  __typename?: 'UserEdge';

  node: PaginateUsersInviteToPartyQueryNode;
};

export type PaginateUsersInviteToPartyQueryNode = {
  __typename?: 'User';

  id: string;

  firstName: string;

  lastName: string;

  avatar: Maybe<string>;

  lastOnline: Maybe<DateTime>;

  status: UserStatus;

  pendingPartyInvitations: Maybe<
    PaginateUsersInviteToPartyQueryPendingPartyInvitations[]
  >;
};

export type PaginateUsersInviteToPartyQueryPendingPartyInvitations = {
  __typename?: 'PartyInvitation';

  id: string;

  invitedBy: PaginateUsersInviteToPartyQueryInvitedBy;

  party: PaginateUsersInviteToPartyQueryParty;
};

export type PaginateUsersInviteToPartyQueryInvitedBy = {
  __typename?: 'User';

  id: string;
};

export type PaginateUsersInviteToPartyQueryParty = {
  __typename?: 'Party';

  id: string;
};

export type PaginateUsersInviteToPartyQueryPageInfo = {
  __typename?: 'PageInfo';

  hasNextPage: boolean;

  endCursor: Maybe<string>;
};

export type PartyInvitationsConnectionQueryVariables = {
  where?: Maybe<PartyInvitationWhereInput>;
  orderBy?: Maybe<PartyInvitationOrderByInput>;
  skip?: Maybe<number>;
  after?: Maybe<string>;
  before?: Maybe<string>;
  first?: Maybe<number>;
  last?: Maybe<number>;
};

export type PartyInvitationsConnectionQueryQuery = {
  __typename?: 'Query';

  partyInvitationsConnection: PartyInvitationsConnectionQueryPartyInvitationsConnection;

  full: PartyInvitationsConnectionQueryFull;
};

export type PartyInvitationsConnectionQueryPartyInvitationsConnection = {
  __typename?: 'PartyInvitationConnection';

  edges: (Maybe<PartyInvitationsConnectionQueryEdges>)[];

  pageInfo: PartyInvitationsConnectionQueryPageInfo;
};

export type PartyInvitationsConnectionQueryEdges = {
  __typename?: 'PartyInvitationEdge';

  node: PartyInvitationsConnectionQueryNode;
};

export type PartyInvitationsConnectionQueryNode = {
  __typename?: 'PartyInvitation';

  id: string;

  createdAt: DateTime;

  invitedBy: PartyInvitationsConnectionQueryInvitedBy;

  party: PartyInvitationsConnectionQueryParty;
};

export type PartyInvitationsConnectionQueryInvitedBy = {
  __typename?: 'User';

  firstName: string;

  lastName: string;

  avatar: Maybe<string>;
};

export type PartyInvitationsConnectionQueryParty = {
  __typename?: 'Party';

  title: string;
};

export type PartyInvitationsConnectionQueryPageInfo = {
  __typename?: 'PageInfo';

  hasNextPage: boolean;

  endCursor: Maybe<string>;
};

export type PartyInvitationsConnectionQueryFull = {
  __typename?: 'PartyInvitationConnection';

  aggregate: PartyInvitationsConnectionQueryAggregate;
};

export type PartyInvitationsConnectionQueryAggregate = {
  __typename?: 'AggregatePartyInvitation';

  count: number;
};

export type HasPartiesQueryVariables = {};

export type HasPartiesQueryQuery = {
  __typename?: 'Query';

  hasParties: boolean;
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

  chat: ChatMessagesSubscriptionChat;
};

export type ChatMessagesSubscriptionAuthor = {
  __typename?: 'User';

  firstName: string;

  lastName: string;

  avatar: Maybe<string>;

  id: string;
};

export type ChatMessagesSubscriptionChat = {
  __typename?: 'Chat';

  id: string;
};

export type PartyInvitationSubscriptionVariables = {
  where?: Maybe<PartyInvitationSubscriptionWhereInput>;
};

export type PartyInvitationSubscriptionSubscription = {
  __typename?: 'Subscription';

  partyInvitation: Maybe<PartyInvitationSubscriptionPartyInvitation>;
};

export type PartyInvitationSubscriptionPartyInvitation = {
  __typename?: 'PartyInvitationSubscriptionPayload';

  node: Maybe<PartyInvitationSubscriptionNode>;

  previousValues: Maybe<PartyInvitationSubscriptionPreviousValues>;

  mutation: MutationType;
};

export type PartyInvitationSubscriptionNode = {
  __typename?: 'PartyInvitation';

  id: string;

  createdAt: DateTime;

  invitedBy: PartyInvitationSubscriptionInvitedBy;

  party: PartyInvitationSubscriptionParty;
};

export type PartyInvitationSubscriptionInvitedBy = {
  __typename?: 'User';

  firstName: string;

  lastName: string;

  avatar: Maybe<string>;
};

export type PartyInvitationSubscriptionParty = {
  __typename?: 'Party';

  title: string;
};

export type PartyInvitationSubscriptionPreviousValues = {
  __typename?: 'PartyInvitationPreviousValues';

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

  optimisticallyAdded: boolean;

  optimisticallyCreated: boolean;

  hasOptimisticError: boolean;

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

export type LastChatMessageFragmentFragment = {
  __typename?: 'Chat';

  messages: Maybe<LastChatMessageFragmentMessages[]>;

  hasUnreadMessages: boolean;
};

export type LastChatMessageFragmentMessages = {
  __typename?: 'Message';

  createdAt: DateTime;

  content: string;

  author: LastChatMessageFragmentAuthor;
};

export type LastChatMessageFragmentAuthor = {
  __typename?: 'User';

  firstName: string;

  lastName: string;
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
    optimisticallyAdded @client
    optimisticallyCreated @client
    hasOptimisticError @client
    content
    createdAt
  }
`;

export const LastChatMessageFragmentFragmentDoc = gql`
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
export const RequestPasswordResetDocument = gql`
  mutation RequestPasswordReset($email: String!) {
    requestReset(email: $email) {
      message
    }
  }
`;
export class RequestPasswordResetComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<
      RequestPasswordResetMutation,
      RequestPasswordResetVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<
        RequestPasswordResetMutation,
        RequestPasswordResetVariables
      >
        mutation={RequestPasswordResetDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export function useRequestPasswordReset(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    RequestPasswordResetMutation,
    RequestPasswordResetVariables
  >
) {
  return ReactApolloHooks.useMutation<
    RequestPasswordResetMutation,
    RequestPasswordResetVariables
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
export class ResetPasswordComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<ResetPasswordMutation, ResetPasswordVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<ResetPasswordMutation, ResetPasswordVariables>
        mutation={ResetPasswordDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export function useResetPassword(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    ResetPasswordMutation,
    ResetPasswordVariables
  >
) {
  return ReactApolloHooks.useMutation<
    ResetPasswordMutation,
    ResetPasswordVariables
  >(ResetPasswordDocument, baseOptions);
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
export const CreatePartyInvitationDocument = gql`
  mutation CreatePartyInvitation($data: PartyInvitationCreateInput!) {
    createPartyInvitation(data: $data) {
      id
    }
  }
`;
export class CreatePartyInvitationComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<
      CreatePartyInvitationMutation,
      CreatePartyInvitationVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<
        CreatePartyInvitationMutation,
        CreatePartyInvitationVariables
      >
        mutation={CreatePartyInvitationDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export function useCreatePartyInvitation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    CreatePartyInvitationMutation,
    CreatePartyInvitationVariables
  >
) {
  return ReactApolloHooks.useMutation<
    CreatePartyInvitationMutation,
    CreatePartyInvitationVariables
  >(CreatePartyInvitationDocument, baseOptions);
}
export const DeleteManyPartyInvitationsDocument = gql`
  mutation DeleteManyPartyInvitations($where: PartyInvitationWhereInput) {
    deleteManyPartyInvitations(where: $where) {
      count
    }
  }
`;
export class DeleteManyPartyInvitationsComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<
      DeleteManyPartyInvitationsMutation,
      DeleteManyPartyInvitationsVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<
        DeleteManyPartyInvitationsMutation,
        DeleteManyPartyInvitationsVariables
      >
        mutation={DeleteManyPartyInvitationsDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export function useDeleteManyPartyInvitations(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    DeleteManyPartyInvitationsMutation,
    DeleteManyPartyInvitationsVariables
  >
) {
  return ReactApolloHooks.useMutation<
    DeleteManyPartyInvitationsMutation,
    DeleteManyPartyInvitationsVariables
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
export class DeletePartyInvitationMutationComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<
      DeletePartyInvitationMutationMutation,
      DeletePartyInvitationMutationVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<
        DeletePartyInvitationMutationMutation,
        DeletePartyInvitationMutationVariables
      >
        mutation={DeletePartyInvitationMutationDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export function useDeletePartyInvitationMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    DeletePartyInvitationMutationMutation,
    DeletePartyInvitationMutationVariables
  >
) {
  return ReactApolloHooks.useMutation<
    DeletePartyInvitationMutationMutation,
    DeletePartyInvitationMutationVariables
  >(DeletePartyInvitationMutationDocument, baseOptions);
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
      location {
        placeName
        latitude
        longitude
      }
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
          hasUnreadMessages @client
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
          ...MESSAGE_FRAGMENT
        }
      }
    }
  }

  ${MessageFragmentFragmentDoc}
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
export class PaginateUsersInviteToPartyQueryComponent extends React.Component<
  Partial<
    ReactApollo.QueryProps<
      PaginateUsersInviteToPartyQueryQuery,
      PaginateUsersInviteToPartyQueryVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Query<
        PaginateUsersInviteToPartyQueryQuery,
        PaginateUsersInviteToPartyQueryVariables
      >
        query={PaginateUsersInviteToPartyQueryDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export function usePaginateUsersInviteToPartyQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<
    PaginateUsersInviteToPartyQueryVariables
  >
) {
  return ReactApolloHooks.useQuery<
    PaginateUsersInviteToPartyQueryQuery,
    PaginateUsersInviteToPartyQueryVariables
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
          id
          createdAt
          invitedBy {
            firstName
            lastName
            avatar
          }
          party {
            title
          }
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
`;
export class PartyInvitationsConnectionQueryComponent extends React.Component<
  Partial<
    ReactApollo.QueryProps<
      PartyInvitationsConnectionQueryQuery,
      PartyInvitationsConnectionQueryVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Query<
        PartyInvitationsConnectionQueryQuery,
        PartyInvitationsConnectionQueryVariables
      >
        query={PartyInvitationsConnectionQueryDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export function usePartyInvitationsConnectionQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<
    PartyInvitationsConnectionQueryVariables
  >
) {
  return ReactApolloHooks.useQuery<
    PartyInvitationsConnectionQueryQuery,
    PartyInvitationsConnectionQueryVariables
  >(PartyInvitationsConnectionQueryDocument, baseOptions);
}
export const HasPartiesQueryDocument = gql`
  query HasPartiesQuery {
    hasParties
  }
`;
export class HasPartiesQueryComponent extends React.Component<
  Partial<
    ReactApollo.QueryProps<HasPartiesQueryQuery, HasPartiesQueryVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Query<HasPartiesQueryQuery, HasPartiesQueryVariables>
        query={HasPartiesQueryDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export function useHasPartiesQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<HasPartiesQueryVariables>
) {
  return ReactApolloHooks.useQuery<
    HasPartiesQueryQuery,
    HasPartiesQueryVariables
  >(HasPartiesQueryDocument, baseOptions);
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
export const PartyInvitationSubscriptionDocument = gql`
  subscription PartyInvitationSubscription(
    $where: PartyInvitationSubscriptionWhereInput
  ) {
    partyInvitation(where: $where) {
      node {
        id
        createdAt
        invitedBy {
          firstName
          lastName
          avatar
        }
        party {
          title
        }
      }
      previousValues {
        id
      }
      mutation
    }
  }
`;
export class PartyInvitationSubscriptionComponent extends React.Component<
  Partial<
    ReactApollo.SubscriptionProps<
      PartyInvitationSubscriptionSubscription,
      PartyInvitationSubscriptionVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Subscription<
        PartyInvitationSubscriptionSubscription,
        PartyInvitationSubscriptionVariables
      >
        subscription={PartyInvitationSubscriptionDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export function usePartyInvitationSubscription(
  baseOptions?: ReactApolloHooks.SubscriptionHookOptions<
    PartyInvitationSubscriptionSubscription,
    PartyInvitationSubscriptionVariables
  >
) {
  return ReactApolloHooks.useSubscription<
    PartyInvitationSubscriptionSubscription,
    PartyInvitationSubscriptionVariables
  >(PartyInvitationSubscriptionDocument, baseOptions);
}
