import Image from "next/image";
import React from "react";
import { type UserType } from "../types/UserType";
import { UserResource } from "@clerk/types";

const FrontPageAside = ({
  user,
}: {
  user: UserType | UserResource | null | undefined;
}) => {
  const exampleTags = ["books", "computers", "Breaking Bad", "watermelon"];
  //    ^?
  return (
    <>
      <aside className="ml-30 align-left flex w-max items-center bg-green-500 px-4 py-1 ">
        {user?.profileImageUrl && (
          <div className="ml-6 mt-4">
            <Image
              src={user.profileImageUrl}
              className="mb-2 ml-5 mt-4 rounded-full"
              width={40}
              height={40}
              alt="User Profile Picture"
            />
            <h1>{user?.username}</h1>
          </div>
        )}
      </aside>
      <aside className=" text-grey-600 ml-10 mt-4 flex w-max flex-col bg-green-500 px-4 py-2">
        <h2>Tags you follow</h2>
        <br />
        {exampleTags.map((tags) => (
          <h3 key={tags} className="p-2">
            #{tags},{" "}
          </h3>
        ))}
      </aside>
    </>
  );
};

export default FrontPageAside;
