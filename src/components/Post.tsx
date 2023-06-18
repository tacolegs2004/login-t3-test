import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";
import { type PostType } from "./PostForm";
import PostCard from "./PostCard";
import PostButton from "./PostButton";
import Link from "next/link";

interface TTPost {
  header: string;
  body: string;
  id: number;
}

export interface TPost {
  post: TTPost;
}

const Post: React.FC<TPost> = ({ post }) => {
  const [id, setId] = useState(0);
  const [posts, setPosts] = useState<PostType[]>([]);
  const [isDeleted, setIsDeleted] = useState(false);
  const { user } = useUser();

  const handleDelete = () => {
    setPosts(posts.filter((p) => p.id !== id));
    setIsDeleted(true);
    console.log(posts);
  };

  if (isDeleted) return null;

  return (
    <>
      {!isDeleted ? (
        <div key={post.id} className="w-25 m-5 flex flex-col space-y-4">
          {!isDeleted && <PostCard />}

          <span>
            {post.header} - {user?.username}
          </span>
          {user?.profileImageUrl && (
            <Image
              src={user.profileImageUrl}
              className="mt-2"
              width={40}
              height={40}
              alt="User Profile Picture"
            />
          )}
          <p className="">{post.body}</p>
          <a
            className="rounded bg-red-500 px-2 py-2 font-bold text-white hover:bg-red-700"
            onClick={handleDelete}
            href={"/"}
          >
            <BsTrash />
          </a>
        </div>
      ) : (
        <>
          <PostButton />
        </>
      )}
    </>
  );
};

export default Post;
