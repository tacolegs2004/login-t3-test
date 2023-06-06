import React from "react";
import Head from "next/head";
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import { type NextPage } from "next";
import Link from "next/link";
import { api } from "~/utils/api";

function Navbar() {
  const { isLoaded: userLoaded, isSignedIn } = useUser();

  return (
    <>
      <div className="flex flex-row justify-center bg-blue-400 py-4">
        <span>
          <Link legacyBehavior href="/profile">
            <a className="m-4 py-0 text-white hover:bg-blue-500">Profile</a>
          </Link>
        </span>
        <span>
          <Link legacyBehavior href="/settings">
            <a className="text-white hover:bg-blue-500">Settings</a>
          </Link>
        </span>
        {!isSignedIn && (
          <span className="ml-4 text-white">
            <SignInButton redirectUrl="/signin" />
          </span>
        )}
        {!!isSignedIn && (
          <span className="ml-4 text-white">
            <SignOutButton />
          </span>
        )}
      </div>
    </>
  );
}

export default Navbar;
