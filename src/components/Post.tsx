import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";
import { type PostType } from "./PostForm";
import type { TPost } from "~/types/PostType";

const Post: React.FC<TPost> = ({ post }) => {
  const [id, setId] = useState(0);
  const [posts, setPosts] = useState<PostType[]>([]);
  const [isDeleted, setIsDeleted] = useState<boolean>();
  const [isPressed, setIsPressed] = useState<boolean>(true);
  const { user } = useUser();

  const handleDelete = () => {
    setPosts(posts.filter((p) => p.id !== id));
    setIsDeleted(true);
    console.log(posts);
  };

  return (
    isPressed && (
      <div key={post.id} className="flex w-full items-start px-56">
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
            <b>{post.header}</b>
            <br /> <p>{post.body}</p>
          </span>
        </div>
        {/* <button
          className="flex items-center"
          onClick={() => setIsPressed(false)}
          onSubmit={handleDelete}
        >
          <br />
          <br />
          <BsTrash />
        </button> */}
      </div>
    )
  );
};

export default Post;
