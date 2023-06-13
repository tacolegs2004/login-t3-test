import React from "react";
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

function Navbar(): JSX.Element {
  const { isSignedIn } = useUser();

  return (
    <nav className="flex flex-row justify-center bg-blue-400 py-4">
      <NavLink href="/profile">Profile</NavLink>
      <NavLink href="/settings">Settings</NavLink>
      {isSignedIn ? (
        <span className="ml-4 text-white hover:bg-blue-500">
          <SignOutButton />
        </span>
      ) : (
        <span className="ml-4 text-white hover:bg-blue-500">
          <SignInButton redirectUrl="/signin" />
        </span>
      )}
    </nav>
  );
}

function NavLink({ href, children }: NavLinkProps): JSX.Element {
  return (
    <Link href={href} passHref className="mr-4 text-white hover:bg-blue-500">
      {children}
    </Link>
  );
}

export default Navbar;
