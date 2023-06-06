import { type NextPage } from "next";
import Navbar from "~/components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <main className="h-screen w-screen bg-purple-500">
        <Navbar />
      </main>
    </>
  );
};

export default Home;
