import React from "react";

export default function PostButton({ onClick }: { onClick?: () => void }) {
  return (
    <span className="bg-none shadow-none">
      <button
        onClick={onClick}
        className="mr-1 mt-12 h-12 w-24 rounded-lg bg-blue-600 p-2 text-white shadow-md"
      >
        Make Post
      </button>
    </span>
  );
}
