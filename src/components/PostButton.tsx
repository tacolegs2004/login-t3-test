import React from "react";

export default function PostButton({
  onClick,
  href,
}: {
  onClick?: () => void;
  href?: string;
}) {
  return (
    <div>
      <button
        onClick={onClick}
        className="rounded-lg bg-blue-600 p-2 text-white shadow-md"
      >
        Make Post
      </button>
    </div>
  );
}
