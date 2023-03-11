import React from "react";

function Grid() {
  return (
    <>
      <div className="container18 min-h-screen grid grid-cols-1 md:grid-cols-2">
        <div className="item">
          <a href="#">Comfort Stay</a>
        </div>
        <div className="item">
          <a href="#">Outdoor Activities</a>
        </div>
        <div className="item">
          <a href="#">Luxury Dining</a>
        </div>
        <div className="item">
          <a href="#">Children Friendly</a>
        </div>
      </div>
      <div className="max-w-none w-auto min-h-screen grid grid-cols-[22rem,1fr]">
        <div className="bg-pink-600 text-white p-10">
          <h1 className="font-bold text-4xl">Sidebar</h1>
          <ul className="bg-gray-200">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="p-10 pra">
          <h1 className="font-bold text-4xl">Main Content</h1>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
      <section className="max-w-none w-auto p-12 min-h-screen grid grid-cols-2 gap-16 items-center">
        <img
          src="https://res.cloudinary.com/thirus/image/upload/v1634585194/images/details-1_e7ojp9.svg"
          alt=""
        />
        <div>
          <h1 className=" text-4xl leading-tight">
            Perfect solution
            <br />
            <strong>for your small business</strong>
          </h1>
          <p className="mt-4">
            Maecenas fringilla quam posuere, pellentesque est nec, gravida
            turpis. Integer vitae mollis felis. Integer id quam id tellus
            hendrerit laciniad binfer
          </p>
          <p>
            Sed id dui rutrum, dictum urna eu, accumsan turpis. Fusce id auctor
            velit, sed viverra dui rem dina
          </p>
          <button className="inline-block mt-4 py-3 px-9 bg-red-500 text-white font-bold rounded-full">
            Modal
          </button>
        </div>
      </section>
    </>
  );
}

export default Grid;
