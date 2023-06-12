import { useUser } from "@clerk/nextjs";
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
      <div key={post.id} className="m-5 flex flex-col space-y-4">
        <h1 className="text-md font-bold">
          {post.header} - {user?.username}
          <img
            src={user?.profileImageUrl}
            width={40}
            height={40}
            alt="User Profile Picture"
          />
        </h1>
        <div className="">{post.body}</div>
      </div>
    </>
  );
};

export default Post;
