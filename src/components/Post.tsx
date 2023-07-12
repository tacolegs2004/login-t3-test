import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import React, { useState } from "react";
import type { TPost } from "~/types/PostType";

const Post: React.FC<TPost> = ({ post }) => {
  const [posts, setPosts] = useState<TPost[]>([]);
  const [isPressed, setIsPressed] = useState<boolean>(true);
  const { user } = useUser();

  console.log(posts);
  return (
    isPressed && (
      <div
        key={post?.id}
        className="mr-[15.4rem] flex w-fit flex-row items-start px-4"
      >
        {user?.profileImageUrl && (
          <div className="mr-[7rem] py-4">
            <Image
              src={user.profileImageUrl}
              className="h-16 w-16 rounded-full"
              alt="User Profile Picture"
              width={60}
              height={60}
            />
            <span className="mt-2">{user.username}</span>
          </div>
        )}
        <div className="ml-6 flex space-y-8">
          <span className="mb-2">
            <b>{post?.header}</b>
            <br /> <p>{post?.body}</p>
          </span>
        </div>
      </div>
    )
  );
};

export default Post;
