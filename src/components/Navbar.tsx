import React from "react";
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const Navbar = () => {
  const { isSignedIn } = useUser();
  const signInAndOutStyle =
    "mr-4 p-2 text-white hover:rounded-lg hover:bg-blue-500";

  return (
    <nav className="flex flex-row justify-center bg-blue-400 py-4">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/profile">Profile</NavLink>
      <NavLink href="/settings">Settings</NavLink>
      <span className={signInAndOutStyle}>
        {!isSignedIn && <SignInButton />}
        {!!isSignedIn && <SignOutButton />}
      </span>
      <NavLink href="/about">About</NavLink>
    </nav>
  );
};

function NavLink({ href, children }: NavLinkProps): JSX.Element {
  return (
    <Link
      href={href}
      passHref
      className="mr-4 p-2 text-white hover:rounded-lg hover:bg-blue-500"
    >
      {children}
    </Link>
  );
}

export default Navbar;
