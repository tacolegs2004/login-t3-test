import { useState } from "react";
import Navbar from "~/components/Navbar";
import PostForm from "~/components/PostForm";

const Home = () => {
  const [isPressed, setIsPressed] = useState<boolean>();

  return (
    <>
      <main className="flex min-h-screen flex-col bg-purple-500">
        <Navbar />
        <div className="flex flex-grow items-center justify-center">
          {!isPressed ? (
            <button
              onClick={() => setIsPressed(true)}
              className="rounded-lg bg-blue-600 p-2 text-white"
            >
              Make Post
            </button>
          ) : (
            <PostForm />
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
