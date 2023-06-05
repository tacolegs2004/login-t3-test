import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  const { isLoaded: userLoaded, isSignedIn } = useUser();

  return (
    <>
      <main className="h-screen w-screen bg-purple-500">
        <h1>hello</h1>
        <div>
          {!isSignedIn && (
            <div className="w-23 flex justify-center rounded-md bg-red-500">
              <SignInButton />
            </div>
          )}
        </div>
        <div>
          {!!isSignedIn && (
            <div className="w-23 flex justify-center rounded-md bg-red-500">
              <SignOutButton />
            </div>
          )}
        </div>
        <div className="bg-orange-500">
          <h1>testing testing</h1>
        </div>
      </main>
    </>
  );
};

export default Home;
