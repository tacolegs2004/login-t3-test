import React, { useState } from "react";

export default function PostButton() {
  const [isPressed, setIsPressed] = useState<boolean>();

  return (
    <button
      onClick={() => setIsPressed(true)}
      className="rounded-lg bg-blue-600 p-2 text-white shadow-md"
    >
      Make Post
    </button>
  );
}
