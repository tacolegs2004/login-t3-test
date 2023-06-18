import React from "react";
import Navbar from "./Navbar";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <main className="flex min-h-screen flex-col bg-purple-500">
        <Navbar />
        <main>{children}</main>
      </main>
    </>
  );
}
