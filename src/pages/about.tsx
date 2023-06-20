import Link from "next/link";
import { AiOutlineGithub } from "react-icons/ai";

export default function About() {
  return (
    <>
      <h1 className="m-9 rounded-lg bg-white p-6 shadow-lg">
        This is a website for making posts!
      </h1>
      <footer className="ml-20 mt-80 inline-block p-6 align-text-bottom">
        <Link
          href="https://github.com/tacolegs2004"
          className="inline-flex h-20 w-24 items-center justify-center  px-4 py-2"
          target="_blank"
        >
          <AiOutlineGithub />
        </Link>
      </footer>
    </>
  );
}
