import React from "react";
import Navbar from "./Navbar";
import type { Props } from "~/types/UserType";

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
