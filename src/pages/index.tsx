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
        {/* <h1>{data?.post}</h1> */}
      </div>
    </>
  );
};

export default Home;
