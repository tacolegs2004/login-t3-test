import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import PostButton from "~/components/PostButton";
import PostForm from "~/components/PostForm";
import FrontPageAside from "./components/FrontPageAside";

const Home = () => {
  const [isPressed, setIsPressed] = useState<boolean>();
  const { user } = useUser();
  //    ^?
  return (
    <>
      <span className="flex flex-grow items-center justify-center">
        {!isPressed ? (
          <PostButton onClick={() => setIsPressed(true)} />
        ) : (
          <PostForm />
        )}
      </span>
      <aside>
        <FrontPageAside user={user} />
      </aside>
    </>
  );
};

export default Home;
