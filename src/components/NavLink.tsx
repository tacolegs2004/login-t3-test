import type { NavTypes } from "~/types/NavType";
import Link from "next/link";
import React from "react";

const NavLink = ({ children, className, href }: NavTypes) => {
  return (
    <>
      <Link className={className} href={href}>
        {children}
      </Link>
    </>
  );
};

export default NavLink;
