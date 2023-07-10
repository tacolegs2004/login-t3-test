import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import PostButton from "../components/PostButton";
import PostForm from "../components/PostForm";
import ProfileAside from "../components/ProfileAside";
import PostCard from "~/components/PostCard";
import type { TPost } from "~/types/PostType";
import Post from "~/components/Post";
import { BsTrash } from "react-icons/bs";

const Home = () => {
  const [isPressed, setIsPressed] = useState(false);
  const { user } = useUser();
  const [id, setId] = useState(0);
  const [posts, setPosts] = useState<TPost[]>([]);
  const [isDeleted, setIsDeleted] = useState<boolean>();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleDelete = () => {
    setPosts(posts.filter(({ post }) => post?.id !== id));
    setIsDeleted(true);
    setId(0);
    setIsSubmitted(!isSubmitted);
    setIsPressed(!isPressed);
    console.log(posts);
  };

  const handlePostButton = () => {
    setIsPressed(!isPressed);
    // setIsSubmitted(true);
    setIsDeleted(false);
  };
  return (
    <div className="flex">
      <aside>
        <ProfileAside user={user} />
      </aside>
      <main className="flex-grow">
        <span className="mr-28 flex items-center justify-center">
          <PostCard className="ml-[22rem] mr-36 items-center text-center">
            {isPressed && <PostForm onClick={handleDelete} />}
            <span className="ml-16 mr-96 mt-80 h-full flex-grow">
              <PostButton onClick={handlePostButton} />
            </span>
          </PostCard>
        </span>
      </main>
    </div>
  );
};

export default Home;
