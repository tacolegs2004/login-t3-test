import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import PostButton from "../components/PostButton";
import PostForm from "../components/PostForm";
import ProfileAside from "../components/ProfileAside";
import PostCard from "~/components/PostCard";

const Home = () => {
  const [isPressed, setIsPressed] = useState<boolean>();
  const { user } = useUser();
  return (
    <div className="flex">
      <aside>
        <ProfileAside user={user} />
      </aside>
      <main className="flex-grow ">
        <span className="mr-28 flex items-center justify-center">
          {!isPressed ? (
            <PostCard className="ml-16 mr-96 mt-96 h-full flex-grow">
              <PostButton onClick={() => setIsPressed(true)} />
            </PostCard>
          ) : (
            <PostCard className="ml-96 mr-16 flex items-center text-center">
              <PostForm />
            </PostCard>
          )}
        </span>
      </main>
    </div>
  );
};

export default Home;
