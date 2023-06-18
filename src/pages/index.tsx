import { useState } from "react";
import PostButton from "~/components/PostButton";
import PostForm from "~/components/PostForm";

const Home = () => {
  const [isPressed, setIsPressed] = useState<boolean>();

  return (
    <>
      <div className="flex flex-grow items-center justify-center">
        {!isPressed ? (
          <PostButton onClick={() => setIsPressed(true)} />
        ) : (
          <PostForm />
        )}
      </div>
    </>
  );
};

export default Home;
