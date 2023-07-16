import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";
import type { IPost } from "~/types/PostType";

export default function UserPost({ posts }: { posts: IPost[] }) {
  const { user } = useUser();
  return (
    <>
      {posts.map((post) => (
        <div
          className="rounded-md bg-white px-16 py-12 align-top"
          key={post.id}
        >
          {user?.profileImageUrl && (
            <div className="mb-4">
              <Image
                src={user.profileImageUrl}
                className="mb-6 ml-5 rounded-full"
                width={40}
                height={40}
                alt="User Profile Picture"
              />
              <h1>
                <strong>{user?.username}</strong>
              </h1>
            </div>
          )}
          <h1 className="text-lg">
            <strong>{post.header}</strong>
          </h1>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  );
}
