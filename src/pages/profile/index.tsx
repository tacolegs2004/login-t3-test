import { useUser } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  const { user } = useUser();
  return (
    <>
      <div className="ml-10 flex w-max items-center bg-red-500 px-4 py-2 ">
        {user?.profileImageUrl && (
          <div className="ml-6 mt-4">
            <Image
              src={user.profileImageUrl}
              className="mb-2 ml-5 mt-4 rounded-full"
              width={40}
              height={40}
              alt="User Profile Picture"
            />
            <h1>{user?.username}</h1>
          </div>
        )}
      </div>
    </>
  );
}
