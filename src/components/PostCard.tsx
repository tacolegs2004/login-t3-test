import React from "react";
import type { Props } from "~/types/UserType";

const PostCard: React.FC<Props> = ({ children, className }) => {
  return (
    <div className="mt-12 h-[636px] w-[58rem] bg-white pb-12 pr-12 pt-4">
      <h2 className="mr-16 text-center text-2xl font-bold">Posts</h2>
      <main className={className}>{children}</main>
    </div>
  );
};

export default PostCard;
