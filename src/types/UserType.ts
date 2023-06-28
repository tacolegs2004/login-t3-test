// import { UserData } from "@clerk/types";

import { type UserResource } from "@clerk/types";

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

// UserResource is used in order to match the type of "User" to clerks user object

export type UserProp = UserType | UserResource | null | undefined;

export type TPhotos = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export interface PhotosResponse {
  // Define the structure of the JSON response
  photos: TPhotos[];
}
