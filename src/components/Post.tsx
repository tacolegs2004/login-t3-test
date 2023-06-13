import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

interface TTPost {
  header: string;
  body: string;
  id: number;
}

interface TPost {
  post: TTPost;
}

const Post: React.FC<TPost> = ({ post }) => {
  const { user } = useUser();

  return (
    <>
      <div key={post.id} className="w-25 m-5 flex flex-col space-y-4">
        <h1 className="text-md font-bold"></h1>
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
      </div>
    </>
  );
};

export default Post;
