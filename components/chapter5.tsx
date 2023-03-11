import React from "react";

function Chapter5() {
  return (
    <>
      <div className="text-center container mx-auto py-12 px-6 bg-red-200">
        <h1>chapter {" 5 "}</h1>
        <div className="title">Page layout </div>
      </div>
      {/* <table className="table-fixed border border-collapse ">
        <tr className="">
          <th className="border border-black w-1/6 ">Small</th>
          <th className="border border-black w-2/6">Medium</th>
          <th className="border border-black w-3/6">Large</th>
        </tr>
      </table> */}
      <div className="grid grid-cols-2 w-1/4 gap-4">
        <div className="border bg-gray-300 text-center">A</div>
        <div className="border bg-gray-300 text-center">B</div>
        <div className="border bg-gray-300 text-center">C</div>
        <div className="border bg-gray-300 text-center">D</div>
      </div>
      <div className="py-8 grid grid-rows-3 w-1/4 gap-4 grid-flow-col">
        <div className="border bg-gray-300 text-center">A</div>
        <div className="border bg-gray-300 text-center">B</div>
        <div className="border bg-gray-300 text-center">C</div>
        <div className="border bg-gray-300 text-center">D</div>
      </div>
      <div className="grid grid-cols-2 w-1/4 gap-4">
        <div className="border bg-gray-300 text-center col-span-2">A</div>
        <div className="border bg-gray-300 text-center">B</div>
        <div className="border bg-gray-300 text-center row-span-2">C</div>
        <div className="border bg-gray-300 text-center">D</div>
      </div>
      <div className="grid grid-cols-2 w-1/4 gap-4 py-6">
        <div className="border bg-gray-300 text-center row-span-2">A</div>
        <div className="border bg-gray-300 text-center">B</div>
        <div className="border bg-gray-300 text-center">C</div>
        <div className="border bg-gray-300 text-center">D</div>
      </div>
      <div className="col-start-2  grid grid-cols-2 w-1/4 gap-4 py-6">
        <div className="border bg-gray-300 text-center ">A</div>
        <div className="border bg-gray-300 text-center">B</div>
        <div className="border bg-gray-300 text-center">C</div>
        <div className="border col-end-5 bg-gray-300 text-center">D</div>
      </div>
      <div className="grid grid-cols-3 gap-4 w-1/3">
        <div className="text-center col-span-3  bg-gray-200">Header</div>
        <div className="text-center w-1/5  bg-gray-200">Left Sidebar</div>
        <div className="text-center w-3/5  bg-gray-200">Content</div>
        <div className="text-center w-1/5 bg-gray-200">Right Sidebar</div>
        <div className="text-center col-span-3  bg-gray-200">Footer</div>
      </div>
      <div className="flex flex-col w-1/3 ">
        <div className="flex-grow bg-red-300 hover:grow-0">Header</div>
        <div className="flex flex-row">
          <div className="text-center w-1/5">Left Sidebar</div>
          <div className="text-center w-3/5">Content</div>
          <div className="text-center w-1/5">Right Sidebar</div>
        </div>
        <div className="flex-grow">Footer</div>
      </div>
      <div className="flex flex-row flex-wrap w-1/3">
        <div className="text-center w-3/5 order-3">Content</div>
        <div className="w-full order-1">Header</div>
        <div className="text-center w-1/5 order-2">Left Sidebar</div>
        <div className="text-center w-1/5 order-4">Right Sidebar</div>
        <div className="w-full order-5">Footer</div>
      </div>
      <div className=" justify-between flex ">
        <div className="">A</div>
        <div className="">B</div>
        <div className="">C</div>
      </div>
      <div className=" justify-evenly flex ">
        <div className="">A</div>
        <div className="">B</div>
        <div className="">C</div>
      </div>
      <div className=" justify-around flex ">
        <div className="">A</div>
        <div className="">B</div>
        <div className="">C</div>
      </div>
      <div className="grid justify-items-center ...">
        <div>01</div>
        <div>02</div>
        <div>03</div>
        <div>04</div>
        <div>05</div>
        <div>06</div>
      </div>
      <div className="grid divide-y-4 justify-items-stretch bg-blue-400">
        <div className="bg-red-200">01</div>
        <div className="bg-red-200">02</div>
        <div className="bg-red-200">03</div>
        <div className="bg-red-200">04</div>
        <div className="bg-red-200">05</div>
        <div className="bg-red-200">06</div>
      </div>
    </>
  );
}

export default Chapter5;
