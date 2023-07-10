import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";
import type { TPost } from "~/types/PostType";

const Post: React.FC<TPost> = ({ post, onClick, onSubmit }) => {
  const [posts, setPosts] = useState<TPost[]>([]);
  const [isPressed, setIsPressed] = useState<boolean>(true);
  const { user } = useUser();

  console.log(posts);
  return (
    isPressed && (
      <div key={post?.id} className="flex w-full items-start px-56">
        {user?.profileImageUrl && (
          <div className="py-4">
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
        <div className="flex flex-row">
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
