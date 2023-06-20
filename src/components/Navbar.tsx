import React from "react";
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className: string;
}

const Navbar = () => {
  const { isSignedIn } = useUser();
  const navStyle =
    "mr-6 p-2 text-xl text-white hover:rounded-lg hover:bg-blue-500";

  const navItems = ["Home", "Profile", "Settings", "About"];

  return (
    <>
      <nav className="flex flex-row justify-center bg-blue-400 py-4">
        {navItems.map((item) => (
          <>
            {item === "Home" ? (
              <NavLink href="/" className={navStyle}>
                {item}
              </NavLink>
            ) : (
              <NavLink
                href={`/${item.toLocaleLowerCase()}`}
                className={navStyle}
              >
                {item}
              </NavLink>
            )}
          </>
        ))}
        <span className={navStyle}>
          {!isSignedIn && <SignInButton />}
          {!!isSignedIn && <SignOutButton />}
        </span>
      </nav>
    </>
  );
};

function NavLink({ href, children, className }: NavLinkProps): JSX.Element {
  return (
    <>
      <Link href={href} passHref className={className}>
        {children}
      </Link>
    </>
  );
}

export default Navbar;
