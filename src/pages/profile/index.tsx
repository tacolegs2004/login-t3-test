import { useUser } from "@clerk/nextjs";
import ProfileAside from "~/components/ProfileAside";
import UserPost from "~/components/UserPost";

export default function Page() {
  const { user } = useUser();

  const posts = [
    {
      id: 0,
      header: "Lorem ipsum ",
      body: "dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 1,
      header: "Lorem ipsum",
      body: "dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 2,
      header: "Lorem ipsum",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];
  return (
    <>
      <div className="flex">
        <div className="w-[231px]">
          <ProfileAside user={user} />
        </div>
        <div className="w-42 mb-6 ml-48 grid w-[640px] items-start gap-4 px-4 pb-4 pt-2 ">
          <UserPost posts={posts} />
        </div>
      </div>
    </>
  );
}
