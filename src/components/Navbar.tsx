import React from "react";
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { NavLinkProps } from "~/types/NavType";

const Navbar = () => {
  const { isSignedIn } = useUser();
  const navStyle =
    "mr-6 p-2 text-lg text-white hover:rounded-lg hover:bg-blue-500";

  const navItems = ["Home", "Profile", "Settings", "About"];

  return (
    <>
      <nav className="flex w-full flex-row justify-center bg-blue-400 px-20 py-4">
        {navItems.map((item) => (
          <span className="pr-8 pt-2" key={item}>
            {item === "Home" ? (
              <NavLink href="/" className={navStyle} key={item}>
                {item}
              </NavLink>
            ) : (
              <NavLink
                href={`/${item.toLocaleLowerCase()}`}
                className={navStyle}
                key={item}
              >
                {item}
              </NavLink>
            )}
          </span>
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
