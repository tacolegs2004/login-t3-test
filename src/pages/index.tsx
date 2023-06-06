import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Navbar from "~/components/Navbar";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  const { isLoaded: userLoaded, isSignedIn } = useUser();

  return (
    <>
      <main className="h-screen w-screen bg-purple-500">
        <Navbar />
      </main>
    </>
  );
};

export default Home;
