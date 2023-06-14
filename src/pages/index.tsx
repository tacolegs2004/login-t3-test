import { Suspense, useState } from "react";
import Navbar from "~/components/Navbar";
import PostButton from "~/components/PostButton";
import PostForm from "~/components/PostForm";

const Home = () => {
  const [isPressed, setIsPressed] = useState<boolean>();

  return (
    <>
      <main className="flex min-h-screen flex-col bg-purple-500">
        <Suspense fallback={<h1>Loading...</h1>}>
          <Navbar />
          <div className="flex flex-grow items-center justify-center">
            {!isPressed ? <PostButton /> : <PostForm />}
          </div>
        </Suspense>
      </main>
    </>
  );
};

export default Home;
