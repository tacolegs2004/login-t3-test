import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";
import Post, { TPost } from "~/components/Post";
import { type PostType } from "~/components/PostForm";

const Page: React.FC<TPost> = ({ post }) => {
  const [id, setId] = useState(0);
  const [posts, setPosts] = useState<PostType[]>([]);
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = () => {
    setPosts(posts.filter((p) => p.id !== id));
    setIsDeleted(true);
    console.log(posts);
  };

  return (
    <div>
      <h1>Posts</h1>
      {isDeleted ? (
        <div>
          <h2>Post Deleted</h2>
          <button onClick={handleDelete}>
            <BsTrash />
          </button>
        </div>
      ) : (
        <div>
          {posts.map((p) => (
            <Post key={p.id} post={p} />
          ))}
        </div>
      )}
      <Post post={post} />
      <button
        className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
        onClick={handleDelete}
      >
        <BsTrash />
      </button>
    </div>
  );
};

export default Page;
