import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";

interface Post {
  header: string;
  body: string;
  id: number;
}

const PostForm: React.FC = () => {
  const [header, setHeader] = useState("");
  const [body, setBody] = useState("");
  const [id, setId] = useState(0);
  const [posts, setPosts] = useState<Post[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { user } = useUser();

  console.log(posts);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Submitted:", { header, body, id });
    setIsSubmitted(true);
    setHeader("");
    setBody("");
  };
  return (
    <div className="mt-6 flex items-center justify-center">
      {!isSubmitted ? (
        <div className="rounded-lg bg-white p-8 shadow-lg">
          <h2 className="mb-4 text-xl font-bold">Create a Post</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label htmlFor="header" className="font-semibold">
                Header
              </label>
              <input
                id="header"
                type="text"
                value={header}
                onChange={(event) => setHeader(event.target.value)}
                className="mt-1 rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="body" className="font-semibold">
                Body
              </label>
              <textarea
                id="body"
                value={body}
                onChange={(event) => setBody(event.target.value)}
                className="mt-1 rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="rounded bg-blue-500 px-4 py-2 text-white transition-colors duration-300 hover:bg-blue-600"
                onClick={() => setPosts([...posts, { header, body, id }])}
              >
                Create
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="mt-6 flex w-14 items-center justify-center shadow-md">
          <div className="rounded-lg bg-white px-24 py-10 shadow-lg">
            <div>
              <h2 className="mb-6 text-center text-2xl font-bold">Posts</h2>
            </div>
            {posts.map((post) => (
              <div key={post.id} className="m-5 flex flex-col space-y-4">
                <h1 className="text-md font-bold">
                  {post.header} - {user?.username}
                </h1>
                <div className="">{post.body}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostForm;
