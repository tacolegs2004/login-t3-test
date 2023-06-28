import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import PostButton from "../components/PostButton";
import PostForm from "../components/PostForm";
import ProfileAside from "../components/ProfileAside";

const Home = () => {
  const [isPressed, setIsPressed] = useState<boolean>();
  const { user } = useUser();
  return (
    <div className="flex">
      <aside>
        <ProfileAside user={user} />
      </aside>
      <main className="flex-grow">
        <span className="mr-80 flex items-center justify-center">
          {!isPressed ? (
            <PostButton onClick={() => setIsPressed(true)} />
          ) : (
            <PostForm />
          )}
        </span>
      </main>
    </div>
  );
};

export default Home;
