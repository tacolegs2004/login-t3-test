import React from "react";
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import NavLink from "./NavLink";

const Navbar: React.FC = () => {
  const { isSignedIn } = useUser();

  const navItems = ["Home", "Profile", "Settings", "About"];

  return (
    <>
      <nav className="flex flex-row justify-center bg-blue-400 px-20 py-4">
        {navItems.map((item) => (
          <span className="pr-8 pt-2" key={item}>
            {item === "Home" ? (
              <NavLink
                href={"/"}
                className="mr-6 p-2 text-lg text-white hover:rounded-lg hover:bg-blue-500"
                key={item}
              >
                {item}
              </NavLink>
            ) : (
              <NavLink
                href={`/${item.toLocaleLowerCase()}`}
                className="mr-6 p-2 text-lg text-white hover:rounded-lg hover:bg-blue-500"
                key={item}
              >
                {item}
              </NavLink>
            )}
          </span>
        ))}
        <span className="mr-6 p-2 text-lg text-white hover:rounded-lg hover:bg-blue-500">
          {!isSignedIn && <SignInButton />}
          {!!isSignedIn && <SignOutButton />}
        </span>
      </nav>
    </>
  );
};

export default Navbar;
