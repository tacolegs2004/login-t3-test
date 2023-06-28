import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import ProfileAside from "~/components/ProfileAside";

export default function Page() {
  const { user } = useUser();
  return (
    <>
      <ProfileAside user={user} />
    </>
  );
}
