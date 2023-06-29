import React from "react";
import Navbar from "./Navbar";
import type { Props } from "~/types/UserType";

export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
