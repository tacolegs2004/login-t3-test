import React, { useState } from "react";
import Post from "./Post";

export interface PostType {
  header: string;
  body: string;
  id: number;
}

const PostForm: React.FC = () => {
  const [header, setHeader] = useState("");
  const [body, setBody] = useState("");
  const [id, setId] = useState(0);
  const [posts, setPosts] = useState<PostType[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  console.log(posts);

  const active =
    "rounded bg-blue-500 px-4 py-2 text-white transition-colors duration-300 hover:bg-blue-600";

  const inactive = "rounded bg-gray-500 px-4 py-2 text-white";

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Submitted:", { header, body, id });
    setIsSubmitted(true);
    setHeader("");
    setBody("");
    setId(0);
  };

  const isFormValid = header.trim().length > 0 && body.trim().length > 0;

  return (
    <div className="mr-36 scroll-px-20 pb-48">
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
                placeholder="Header"
                value={header}
                onChange={(e) => setHeader(e.target.value)}
                className="mt-1 rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
                required={true}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="body" className="font-semibold">
                Body
              </label>
              <textarea
                id="body"
                value={body}
                placeholder="Type what's on your mind!"
                onChange={(e) => setBody(e.target.value)}
                className="mt-1 rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
                required={true}
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isFormValid ? false : true}
                className={isFormValid ? active : inactive}
                onClick={() => setPosts([...posts, { header, body, id }])}
              >
                Post
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="mt-6 flex w-14 items-center justify-center shadow-md">
          <div className="rounded-lg bg-white px-24 py-10 shadow-lg">
            {posts.map((post) => (
              <Post post={post} key={post.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostForm;
