import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";
import { type PostType } from "./PostForm";

interface TTPost {
  header: string;
  body: string;
  id: number;
}

interface TPost {
  post: TTPost;
}

const Post: React.FC<TPost> = ({ post }) => {
  const [header, setHeader] = useState("");
  const [body, setBody] = useState("");
  const [id, setId] = useState(0);
  const [posts, setPosts] = useState<PostType[]>([]);
  const { user } = useUser();

  const handleDelete = () => {
    const deletePost = posts.filter((p) => p.id !== id);

    // setPosts(deletePost);
    // setHeader("");
    // setBody("");
    // setId(0);
  };

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

        <button
          className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
          onClick={handleDelete}
        >
          <BsTrash />
        </button>
      </div>
    </>
  );
};

export default Post;
