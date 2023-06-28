import React from "react";

export default function PostButton({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="mr-1 mt-12 rounded-lg bg-blue-600 p-2 text-white shadow-md"
    >
      Make Post
    </button>
  );
}
