import React from "react";
import type { ButtonTypes } from "~/types/PostButtonType";

const PostButton: React.FC<ButtonTypes> = ({ onClick }) => {
  return (
    <span className="mr-36 bg-none shadow-none">
      <button
        onClick={onClick}
        className="mr-1 mt-12 h-12 w-24 rounded-lg bg-blue-600 p-2 text-white shadow-md"
      >
        Make Post
      </button>
    </span>
  );
};

export default PostButton;
