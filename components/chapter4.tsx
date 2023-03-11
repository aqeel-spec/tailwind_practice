import React from "react";

function Chapter4() {
  return (
    <>
      <div className="title">Box</div>
      <div>
        <div className="mb-10">
          <button className="p-10 border border-black">One</button>
          <button className="m-10 border border-black">Two</button>
          <button className="m-2 p-2 border-4 border-black">Three</button>
        </div>
        <div>
          <button className="m-4 p-4 border-2 border-black rounded-md">
            Four
          </button>
          <button className="m-4 p-4 border-2 border-black rounded-2xl">
            Five
          </button>
          <button className="m-4 p-4 border-2 border-black rounded-full">
            Six
          </button>
        </div>
      </div>
      <div>
        <button className="m-4 p-4 rounded-md ring">Four</button>
        <button className="m-4 p-4 rounded-2xl ring-2">Five</button>
        <button className="m-4 p-4 rounded-full ring-4 ring-offset-4 ring-offset-black">
          Six
        </button>
      </div>
      <div className="bg-gray-50 p-10">
        <div className="mb-10">
          <button className="p-10 mx-10 shadow-sm bg-white">One</button>
          <button className="p-10 mx-10 shadow-sm bg-white">Two</button>
          <button className="p-10 mx-10 shadow-lg bg-white">Three</button>
        </div>
        <div>
          <button className="p-10 mx-10 shadow-xl bg-white">Four</button>
          <button className="p-10 mx-10 shadow-2xl bg-white">Five</button>
          <button className="p-10 mx-10 shadow-inner bg-white">Six</button>
        </div>
      </div>
      <div>
        <div className="mb-10 bg-gradient-to-r from-gray-50 to-black p-10 w-1/2 via-green-400">
          <button className="p-10  bg-white px-10">One</button>
          <button className="p-10 mx-10 bg-white">Two</button>
        </div>
        <div className="mb-10 p-10 w-1/2 bg-gradient-to-r from-yellow-100 via-black to-gray-50">
          <button className="p-10 mx-10 bg-white">Three</button>
          <button className="p-10 mx-10 bg-white">Four</button>
        </div>
      </div>
      <div className="bg-[url('/vercel.svg')]  bg-repeat-space pb-20 ">wow</div>
      <div className="text-5xl font-extrabold ...">
        <span className="bg-clip-text bg-[url('/next.svg')]  hover:bg-clip-padding text-transparent  from-red-500 to-sky-500 via-slate-500">
          Hello world from Aqeel
        </span>
      </div>
    </>
  );
}

export default Chapter4;
