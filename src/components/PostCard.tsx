import React from "react";
import type { Props } from "~/types/UserType";

function PostCard({ children, className }: Props) {
  return (
    <div className="mt-6 h-[636px] w-[90%] bg-white pb-24 pt-4">
      <h2 className="mr-16 text-center text-2xl font-bold">Posts</h2>
      <main className={className}>{children}</main>
    </div>
  );
}

export default PostCard;
