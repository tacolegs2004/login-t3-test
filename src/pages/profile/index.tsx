import { useUser } from "@clerk/nextjs";
import ProfileAside from "~/components/ProfileAside";

export default function Page() {
  const { user } = useUser();
  return (
    <>
      <div className="flex w-[231px] flex-col">
        <ProfileAside user={user} />
      </div>
    </>
  );
}
