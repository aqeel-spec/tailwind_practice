import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex justify-center  items-center bg-gray-300">
        <div className="grid grid-cols-1 text-center border-b-4 liLink ">
          <Link
            href={"/practice/box"}
            className="hover:bg-red-400 hover:underline-offset-4 decoration-green-400 hover:underline transition duration-200 ease-in-out"
          >
            Box
          </Link>
          <Link
            href={"/practice/grid"}
            className="hover:bg-red-400 hover:underline-offset-4 decoration-green-400 hover:underline transition duration-200 ease-in-out"
          >
            Grid
          </Link>
          <Link
            href={"/practice/page_layout"}
            className="hover:bg-red-400 hover:underline-offset-4 decoration-green-400 hover:underline transition duration-200 ease-in-out"
          >
            Page_Layout
          </Link>
          <Link
            href={"/practice/tailwind"}
            className="hover:bg-red-400 hover:underline-offset-4 decoration-green-400 hover:underline transition duration-200 ease-in-out"
          >
            tailwind
          </Link>
          <Link
            href={"/practice/animation"}
            className="hover:bg-red-400 hover:underline-offset-4 decoration-green-400 hover:underline transition duration-200 ease-in-out"
          >
            ANimation
          </Link>
          <Link
            href={"/practice/grid"}
            className="hover:bg-red-400 hover:underline-offset-4 decoration-green-400 hover:underline transition duration-200 ease-in-out"
          >
            Grid section practice
          </Link>
        </div>
      </div>
    </>
  );
}
