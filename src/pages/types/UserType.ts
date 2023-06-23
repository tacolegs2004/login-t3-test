// import { UserData } from "@clerk/types";

export type UserType = {
  id: string;

  firstName?: string | null;

  lastName?: string;

  fullName?: string | null;

  username?: string | null;

  imageUrl?: string;

  profileImageUrl?: string | null;

  primaryEmailAddress?: number | null;

  primaryEmailAddressId?: string | null;

  emailAddresses?: string[];

  primaryPhoneNumber?: number[] | null;

  primaryPhoneNumberId?: string | null;

  phoneNumbers?: number[];

  primaryWeb3WalletId?: string | null;

  externalAccounts?: string[];

  passwordEnabled?: boolean;

  lastSignInAt?: Date;

  createdAt?: Date;

  updatedAt?: Date;
};

// type User = UserData
