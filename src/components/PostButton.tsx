import React from "react";

export default function PostButton({ onClick }: { onClick?: () => void }) {
  return (
    <>
      <button
        onClick={onClick}
        className="rounded-lg bg-blue-600 p-2 text-white shadow-md"
      >
        Make Post
      </button>
    </>
  );
}
