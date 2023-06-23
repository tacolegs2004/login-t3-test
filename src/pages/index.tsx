import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import Image from "next/image";
import PostButton from "~/components/PostButton";
import PostForm from "~/components/PostForm";
import FrontPageAside from "./components/FrontPageAside";

const Home = () => {
  const [isPressed, setIsPressed] = useState<boolean>();
  const { user } = useUser();

  return (
    <>
      <div className="flex flex-grow items-center justify-center">
        {!isPressed ? (
          <PostButton onClick={() => setIsPressed(true)} />
        ) : (
          <PostForm />
        )}
      </div>
      <FrontPageAside {...user} />
    </>
  );
};

export default Home;
