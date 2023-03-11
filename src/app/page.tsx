import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center bg-gray-300">
        <div className="mx-4 order-last">
          <Image
            src="/vercel.svg"
            className="rounded-full "
            alt="lgo image"
            height={150}
            width={150}
          />
        </div>
        <div className="mx-4 self-center text-center">
          <div className="title text-5xl">Title</div>
          <h1 className="text-6xl font-bold text-blue-600">
            Welcome to NorthBy
          </h1>
          <h2 className="text-3xl font-semibold text-blue-600">
            A premium in sight and sound
          </h2>
          <h3 className="">h3 class</h3>
          <button className="my-4 px-4 py-2 border-2 border-black rounded-lg text-white bg-blue-900">
            Learn More
          </button>
        </div>
      </div>
      <a className="hover:dark:underline hover:[mask-type:luminance]">
        Click me
      </a>
      <button className="dark:md:hover:bg-fuchsia-600 ...">Save changes</button>
    </>
  );
}
