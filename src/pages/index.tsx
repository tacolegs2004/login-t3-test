import { useUser } from "@clerk/nextjs";
import { type NextPage } from "next";
import { useState } from "react";
import Navbar from "~/components/Navbar";
import PostForm from "~/components/PostForm";

const Home: NextPage = () => {
  const [isPressed, setIsPressed] = useState<boolean>();
  const { user } = useUser();

  if (!user) return null;

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
