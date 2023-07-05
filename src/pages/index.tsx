import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import PostButton from "../components/PostButton";
import PostForm, { PostType } from "../components/PostForm";
import ProfileAside from "../components/ProfileAside";
import PostCard from "~/components/PostCard";
import { BsTrash } from "react-icons/bs";

const Home = () => {
  const [isPressed, setIsPressed] = useState<boolean>(false);
  const { user } = useUser();
  const [id, setId] = useState(0);
  const [posts, setPosts] = useState<PostType[]>([]);
  const [isDeleted, setIsDeleted] = useState<boolean>();

  const handleDelete = () => {
    setPosts(posts.filter((p) => p.id !== id));
    setIsDeleted(true);
    console.log(posts);
  };
  return (
    <div className="flex">
      <aside>
        <ProfileAside user={user} />
      </aside>
      <main className="flex-grow">
        <span className="mr-28 flex items-center justify-center">
          <PostCard className="ml-96 mr-36 items-center text-center">
            {isPressed && (
              <>
                <PostForm />{" "}
                <button
                  className="flex items-center"
                  onClick={() => setIsPressed(false)}
                  onSubmit={handleDelete}
                >
                  <br />
                  <br />
                  <BsTrash />
                </button>
              </>
            )}
            <span className="ml-16 mr-96 mt-96 h-full flex-grow">
              <PostButton onClick={() => setIsPressed(!isPressed)} />
            </span>
          </PostCard>
        </span>
      </main>
    </div>
  );
};

export default Home;
