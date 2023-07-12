import type { User } from "~/types/UserType";

export const fetchUsers = async (): Promise<User> => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const data: User = await fetch("/index.json").then((res) => {
    return res.json();
  });

  return data;
};
