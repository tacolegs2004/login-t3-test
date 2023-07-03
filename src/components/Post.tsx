import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import React, { Children, useState } from "react";
import { BsTrash } from "react-icons/bs";
import { type PostType } from "./PostForm";
import Link from "next/link";
import type { TPost } from "~/types/PostType";

const Post: React.FC<TPost> = ({ post }) => {
  const [id, setId] = useState(0);
  const [posts, setPosts] = useState<PostType[]>([]);
  const [isDeleted, setIsDeleted] = useState<boolean>(false);
  const { user } = useUser();

  const handleDelete = () => {
    setPosts(posts.filter((p) => p.id !== id));
    setIsDeleted(true);
    console.log(posts);
  };

  if (isDeleted) return null;

  return (
    <div className="w-full px-56">
      {!isDeleted && (
        <div key={post.id} className="flex items-start">
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
          <Link
            className="ml-auto flex items-center"
            onClick={handleDelete}
            href="/"
          >
            <BsTrash />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Post;
