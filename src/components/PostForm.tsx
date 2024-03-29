import React, { useState } from "react";
import Post from "./Post";
import type { TPost, TPostEventTypes } from "~/types/PostType";
import { BsTrash } from "react-icons/bs";

const PostForm: React.FC<TPostEventTypes> = ({ onClick }) => {
  const [header, setHeader] = useState("");
  const [body, setBody] = useState("");
  const [id, setId] = useState(0);
  const [posts, setPosts] = useState<TPost[]>([]);
  const [isDeleted, setIsDeleted] = useState<boolean>();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Submitted:", { header, body, id });
    setIsDeleted(false);
    setIsSubmitted(true);
    setHeader("");
    setBody("");
    setId(0);
  };

  const isFormValid = header.trim().length > 0 && body.trim().length > 0;

  return (
    <>
      {!isSubmitted ? (
        <div className="mr-[36rem] mt-4 w-64 rounded-lg bg-white py-4 pl-12 pr-4 shadow-lg">
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
                disabled={!isFormValid ? true : false}
                className={
                  !isFormValid
                    ? "rounded bg-gray-500 px-4 py-2 text-white"
                    : "rounded bg-blue-500 px-4 py-2 text-white transition-colors duration-300 hover:bg-blue-600"
                }
                onClick={() =>
                  setPosts([...posts, { post: { header, body, id } }])
                }
              >
                Post
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="ml-[6rem] mr-24 mt-[1.5rem] flex w-24 items-center justify-center shadow-md">
          <div className="rounded-lg bg-white px-24 py-4 shadow-lg">
            {posts.map(({ post, onClick, onSubmit }) => (
              <Post
                post={post}
                key={id}
                onClick={onClick}
                onSubmit={onSubmit}
              />
            ))}
            <button
              className="ml-16 mr-[7.5rem] items-center"
              onClick={onClick}
            >
              <br />
              <br />
              {!isDeleted && <BsTrash />}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PostForm;
