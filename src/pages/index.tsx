import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import ProfileAside from "../components/ProfileAside";
import PostCard from "~/components/PostCard";
import type { TPost } from "~/types/PostType";
// import type { InferGetStaticPropsType } from "next";
import PostButton from "~/components/PostButton";
import PostForm from "~/components/PostForm";
// import Post from "~/components/Post";
// import { BsTrash } from "react-icons/bs";

const Home = () => {
  const [isPressed, setIsPressed] = useState(false);
  const { user } = useUser();
  const [id, setId] = useState(0);
  const [posts, setPosts] = useState<TPost[]>([]);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleDelete = () => {
    setPosts(posts.filter(({ post }) => post?.id !== id));
    setIsDeleted(!isDeleted);
    setId(0);
    setIsSubmitted(!isSubmitted);
    setIsPressed(!isPressed);
    console.log(posts);
  };

  const handlePostButton = () => {
    setIsPressed(true);
    // setIsSubmitted(true);
    setIsDeleted(false);
  };
  return (
    <div className="flex">
      <aside>
        <ProfileAside user={user} />
      </aside>
      <main className="flex-grow">
        <span className="flex items-center justify-center pr-12">
          <PostCard className="ml-[16.8rem]">
            {isPressed && <PostForm onClick={handleDelete} />}
            <span className="ml-24 mr-[24rem] h-full">
              <PostButton onClick={handlePostButton} />
            </span>
            {/* {props.map((p) => (
              <h1 key={p.post?.id}>{p.post?.body}</h1>
            ))} */}
          </PostCard>
        </span>
      </main>
    </div>
  );
};

// const getStaticProps = async () => {
//   const res = await fetch("../server/api/users/index.json");
//   // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
//   const post: TPost[] = await res.json();

//   return {
//     props: post,
//   };
// };

export default Home;
