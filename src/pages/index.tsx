import { useUser } from "@clerk/nextjs";
import { type NextPage } from "next";
import Navbar from "~/components/Navbar";

const Home: NextPage = () => {
  const { user } = useUser();

  if (!user) return null;

  return (
    <>
      <main className="h-screen w-screen bg-purple-500">
        <Navbar />
      </main>
    </>
  );
};

export default Home;
