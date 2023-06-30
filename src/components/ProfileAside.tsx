import Image from "next/image";
import React from "react";
import Link from "next/link";
import type { PhotosResponse, TPhotos, UserProp } from "../types/UserType";
import type { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps<{
  photos: TPhotos[];
}> = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data = (await res.json()) as PhotosResponse;
  const photos = data.photos;
  return { props: { photos } };
};

const ProfileAside = ({
  user,
}: {
  user: UserProp;
  // photos?: InferGetServerSidePropsType<typeof getServerSideProps>; // Include the fetched photos in the props
}) => {
  const exampleTags = ["books", "computers", "Breaking Bad", "watermelon"];
  const examplePages = [
    {
      displayName: "Beel Ezbob",
      username: "xbeelzexxx",
      id: 0,
    },
    {
      displayName: "taco23",
      username: "tacolegs2004",
      id: 1,
    },
    {
      displayName: "barren height",
      username: "berricboi24",
      id: 2,
    },
  ];
  return (
    <>
      <Link href="/profile">
        <aside className="left-4 ml-10 mt-2 flex w-44 items-center bg-green-500 px-2 py-1 align-top">
          {user?.profileImageUrl && (
            <div className="ml-6 mt-2">
              <Image
                src={user.profileImageUrl}
                className="mt-22 mb-2 ml-5 rounded-full"
                width={40}
                height={40}
                alt="User Profile Picture"
              />
              <h1>{user?.username}</h1>
            </div>
          )}
        </aside>
      </Link>
      <aside className="text-grey-600 ml-10 mt-4 flex w-44 flex-col bg-green-500 px-6 py-2">
        <h2 className="underline">Tags you follow</h2>
        <br />
        {exampleTags.map((tags) => (
          <span key={tags} className="py-4 pr-4 ">
            #{tags}{" "}
          </span>
        ))}
      </aside>
      <aside className="mb-4 ml-10 mt-2 rounded-md bg-white px-4 py-2">
        <h2>Recommended Pages</h2>
        {examplePages.map((pages) => (
          <span key={pages.id} className="px-4">
            <h3>{pages.displayName}</h3>
            <p className="text-slate-400">
              {"@"}
              {pages.username}
            </p>
          </span>
        ))}
        {/* {photos?.map((photo) => (
          <span key={photo.id} className="px-4">
            <h3>{photo.title}</h3>
            <Image
              src={photo.url}
              className="mb-2 ml-5 mt-4 rounded-full"
              width={40}
              height={40}
              alt="User Profile Picture"
            />
          </span>
        ))} */}
      </aside>
    </>
  );
};

export default ProfileAside;
