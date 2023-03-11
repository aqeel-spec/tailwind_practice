import React from "react";
import { BellIcon, EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { BellIcon as SbellIcon, StarIcon } from "@heroicons/react/24/solid";
import { FaDotCircle } from "react-icons/fa";
import {
  FaBeer,
  FaGithub,
  FaLinkedin,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

function FlexBox() {
  return (
    <>
      <div className="flex border m-4 border-green-500">
        <div className="quote">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
            quisquam impedit neque magni odit, voluptates corrupti aperiam atque
            eveniet aut dicta tempore nobis alias enim quo quibusdam, pariatur
            illum laudantium.
          </p>
          <span>- David J. Schwartz</span>
        </div>
        <div className="quote">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
            quisquam impedit neque magni odit, voluptates corrupti aperiam atque
            eveniet aut dicta tempore nobis alias enim quo quibusdam, pariatur
            illum laudantium.
          </p>
          <span>- David J. Schwartz</span>
        </div>
        <div className="quote">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
            quisquam impedit neque magni odit, voluptates corrupti aperiam atque
            eveniet aut dicta tempore nobis alias enim quo quibusdam, pariatur
            illum laudantium.
          </p>
          <span>- David J. Schwartz</span>
        </div>
      </div>
      <div className="container flex justify-around flex-wrap">
        <div className="team-profile flex flex-col items-center ">
          <img
            src="https://images.pexels.com/photos/7242908/pexels-photo-7242908.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150"
            className="team-img"
          />
          <h3>Alexa Kardi name for test </h3>
          <p>Founder and CEO</p>
        </div>
        <div className="team-profile">
          <img
            src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150"
            className="team-img"
          />
          <h3>Tavell Monroe</h3>
          <p>Web Developer</p>
        </div>
        <div className="team-profile">
          <img
            src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150"
            className="team-img"
          />
          <h3>Adale Smith</h3>
          <p>Marketing Specialist</p>
        </div>
        <div className="team-profile">
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=300"
            className="team-img"
          />
          <h3>Thomas Mason</h3>
          <p>UX Designer</p>
        </div>
      </div>
      <div className="wrapper">
        <h2>Top Clients</h2>
        <div className="logos flex justify-around flex-wrap-reverse">
          <img src="https://res.cloudinary.com/thirus/image/upload/c_pad,h_100,w_200/v1628614672/logos/safe_x5alme.png" />
          <img src="https://res.cloudinary.com/thirus/image/upload/c_pad,h_100,w_300/v1628614672/logos/circleai_dm9slt.png" />
          <img src="https://res.cloudinary.com/thirus/image/upload/v1628617465/logos/onpoint_bikaaj.png" />
          <img src="https://res.cloudinary.com/thirus/image/upload/c_pad,h_100,w_180/v1628617514/logos/Thirus_Logo_Tentative_twhvic.png" />
        </div>
      </div>
      <div className="icon-wrap  ">
        <h2 className="p-4">text center using span with "align-middle"</h2>
        <span className="icon align-middle ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 "
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
          </svg>
        </span>
        <span className="icon-text align-middle">Video Conference</span>
      </div>
      <h2 className="p-4">text center using span with "flex items-center"</h2>
      <div className="icon-wrap  flex items-center ">
        <span className="icon  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 "
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
          </svg>
        </span>
        <span className="icon-text ">Video Conference</span>
      </div>
      <div className="">
        <div className="flex items-center space-x-4 text-3xl font-bold m-4">
          <p>Profile Card - Small </p>
          <button className="py-2 px-4 bg-orange-400 rounded-xl">
            Example 4b
          </button>
        </div>
        <div className="profile flex  p-4 shadow-xl border-[1px] items-center">
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=80"
            alt=""
          />
          <div className="">
            <h3>Matt Cooper</h3>
            <p>Designer - CircleAI</p>
          </div>
        </div>
      </div>
      <div className="container py-8 flex justify-center border-none items-stretch">
        <div className="service">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
          <h2>Photo Shoot</h2>
          <p className="mt-3">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          </p>
        </div>
        <div className="service">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
            </svg>
          </span>
          <h2>Video Production</h2>
          <p>
            Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
            mauris sit amet orci.
          </p>
        </div>
        <div className="service">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
          </span>
          <h2>Digital Illustration</h2>
          <p>
            Praesent dapibus, neque id cursus faucibus, tortor neque egestas
            auguae.
          </p>
        </div>
      </div>
      <div className="pt-8">
        <h1 className="font-bold font-sans text-center">
          <span className="text-red-500">Frequent</span> Questions
        </h1>
        <div className=" justify-center m-10 px-6 border-2 shadow-lg border-gray-100 ">
          <div className="container2  flex items-start">
            <span className="">1</span>
            <div className="">
              <h3 className="font-bold text-lg ">
                Whom is this event intended for?
              </h3>
              <p className="text-sm text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci nam harum fugit velit culpa, atque officia autem
                facilis nostrum aspernatur, ad labore vero doloremque beatae quo
                odio. Sed, reprehenderit totam.
              </p>
            </div>
          </div>
          <div className="container2  flex items-start">
            <span>2</span>
            <div>
              <h3>Why should I come maybe it's a waste of time?</h3>
              <p className="text-sm text-gray-400">
                You should come to Rose this year because it will be one of the
                most information packed events of the year.
              </p>
            </div>
          </div>
          <div className="container2  flex items-start">
            <span>3</span>
            <div>
              <h3>Any restrictions that I should be aware of?</h3>
              <p className="text-sm text-gray-400">
                Yes you definitely need to leave your preconceptions behind,
                keep an open mind and enjoy the presentations.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-teal-100 h-screen flex justify-center items-center">
        <div className="item">I'm the center if this page</div>
      </div>
      {/* <div className="w-full h-screen flex justify-center items-center">
        <div className="item">I'm at the center of this page</div>
      </div> */}
      <div className="wrapper2">
        <a href="#" className="link login-link">
          Login
        </a>
        <a href="#" className="link signup-link">
          Create account
        </a>
      </div>
      <div className="card flex flex-col justify-between items-start">
        <img
          src="https://res.cloudinary.com/thirus/image/upload/v1629308145/logos/quote-left_tsopjj_zviayy.svg"
          alt=""
        />
        <p>
          I just finished my trial period and was so amazed with the support and
          good results that I purchased the Pro version for my business.
        </p>
        <span>John Doe</span>
      </div>
      <div className="wrapper3">
        <div className="profile3 even:text-right flex items-center even:flex-row-reverse">
          <img
            src="https://images.pexels.com/photos/7242908/pexels-photo-7242908.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150"
            className="profile-img"
          />
          <div>
            <h3>Alexa Kardi</h3>
            <p className="role">Founder and CEO</p>
            <p className="desc">
              Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
              turpis. Suspendisse urna nibh, viverra non, semper suscipit,
              posuere a, pede.
            </p>
          </div>
        </div>
        <div className="profile3 flex even:flex-row-reverse even:text-right items-center">
          <img
            src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150"
            className="profile-img"
          />
          <div>
            <h3>Tavell Monroe</h3>
            <p className="role">Web Developer</p>
            <p className="desc">
              Morbi in sem quis dui placerat ornare. Pellentesque odio nisi,
              euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras
              consequat.
            </p>
          </div>
        </div>
        <div className="profile3 even:text-right flex items-center even:flex-row-reverse">
          <img
            src="https://images.pexels.com/photos/7242908/pexels-photo-7242908.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150"
            className="profile-img"
          />
          <div>
            <h3>Alexa Kardi</h3>
            <p className="role">Founder and CEO</p>
            <p className="desc">
              Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
              turpis. Suspendisse urna nibh, viverra non, semper suscipit,
              posuere a, pede.
            </p>
          </div>
        </div>
        <div className="profile3 even:text-right flex items-center even:flex-row-reverse">
          <img
            src="https://images.pexels.com/photos/7242908/pexels-photo-7242908.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150"
            className="profile-img"
          />
          <div>
            <h3>Alexa Kardi</h3>
            <p className="role">Founder and CEO</p>
            <p className="desc">
              Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
              turpis. Suspendisse urna nibh, viverra non, semper suscipit,
              posuere a, pede.
            </p>
          </div>
        </div>
      </div>
      <div className="wrapper4">
        <div className="container4 flex">
          <input
            type="email"
            placeholder="Email Address"
            className="flex-grow"
          />
          <button type="submit" className="bg-teal-700 flex-grow">
            Subscribe
          </button>
        </div>
      </div>
      <div className="wrapper5">
        <div className="container5 flex">
          <input
            type="email"
            className="flex-grow"
            placeholder="Email Address"
          />
          <button type="submit" className="bg-teal-700">
            Subscribe
          </button>
        </div>
      </div>
      <div className="card h-96 flex flex-col ">
        <h2>The Power of CSS Flexbox</h2>
        <p className="flex-grow">
          Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec
          consectetuer ligula vulputate sem tristique cursus. Nam nulla quam,
          gravida non, commodo a, sodales sit amet, nisi.
        </p>
        <a href="#">Read more</a>
      </div>
      <p className="text-center my-8">Hover over the links below 👇</p>
      <ul className="flex shadow-xl border-x-2 border-blue-400">
        <li className="flex-grow hover:flex-grow-[3]">Description</li>
        <li className="flex-grow hover:flex-grow-[3]">Care Instructions</li>
        <li className="flex-grow hover:flex-grow-[3]">Return Policy</li>
      </ul>
      <div className="container6 flex flex-wrap ">
        <button type="button" className="flex-grow btn2 ">
          Like
        </button>
        <button type="button" className="flex-grow btn2 ">
          Share
        </button>
        <button type="button" className=" btn2 flex-grow-[2] ">
          Leave a Comment
        </button>
      </div>
      <div className="container  max-w-lg mb-6 p-4 flex items-start">
        <div>
          <h2>Visit to the Eiffel Tower</h2>
          <p className="mt-1">
            There's no better start to your Paris tour than visiting the iconic
            Eiffel Tower. This is a must visit tourist spot in the whole of
            France.
          </p>
        </div>
        <span className="flex-shrink-0 bg-red-500 rounded-full text-sm text-white py-2 px-5">
          10:00 AM
        </span>
      </div>
      <div className="container  max-w-lg mb-6 p-4 flex items-start">
        <div>
          <h2>Lunch at New Jawad</h2>
          <p className="mt-1">
            It is an Indian restaurant close to the Eiffel Tower. Enjoy
            delicious Indian traditional food and South Asian food.
          </p>
        </div>
        <span className="flex-shrink-0 bg-red-500 rounded-full text-sm text-white py-2 px-5">
          1:00 PM
        </span>
      </div>
      <div className="container m-6 shadow-2xl p-4 w-full h-screen flex flex-col md:flex-row">
        <div id="learn" className="split h-1/2 md:h-full md:w-1/2">
          <div>
            <h1>Learn</h1>
            <p>Build your skillset with the hottest courses</p>
            <a href="#">Start Learning</a>
          </div>
        </div>
        <div id="teach" className="split h-1/2 md:h-full md:w-1/2">
          <div>
            <h1>Teach</h1>
            <p>Share your knowledge and earn some income</p>
            <a href="#">Start Teaching</a>
          </div>
        </div>
      </div>
      <div className="container8  shadow-sm flex items-center">
        <div className=" basis-20 mr-4 flex-shrink-0 ">
          <img
            src="https://images.pexels.com/photos/8609973/pexels-photo-8609973.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150"
            alt="Pizza"
          />
        </div>
        <div>
          <h2>Make the Best Pizza at Home</h2>
          <p>
            The secret to baking the best pizza at home lies in the preparation
            of the...
          </p>
        </div>
      </div>
      <div className="wrapper ">
        <div className="container flex flex-col text-center md:flex-row p-4">
          <div className="plan  mx-4 basis-0 flex-grow flex-shrink shadow-2xl border-green-400 hover:border-b-4 hover:flex-grow-[2] hover:ease-in-out hover:scale-90 duration-300  ">
            <h2>Standard</h2>
            <span>Monthly Plan</span>
            <p>$25</p>
          </div>
          <div className="plan  basis-0 flex-grow flex-shrink mx-4 shadow-2xl border-green-400 hover:border-b-4 hover:flex-grow-[2] hover:ease-in-out hover:scale-90 duration-300  plan-highlight">
            <h2>Popular</h2>
            <span>Monthly Plan</span>
            <p>$40</p>
          </div>
          <div className="plan mx-4 basis-0 flex-grow flex-shrink shadow-2xl border-green-400 hover:border-b-4 hover:flex-grow-[2] hover:ease-in-out hover:scale-90 duration-300 ">
            <h2>Premium</h2>
            <span>Monthly Plan</span>
            <p>$55</p>
          </div>
        </div>
        <div className="py-4">
          "basis-0 flex-grow flex-shrink" replace these 3 with one "flex-1 "
          working as it is{" "}
        </div>
      </div>
      <header className=" flex justify-between items-center">
        <a href="#" className="flex-1 ">
          <img
            className="inline h-7"
            src="https://res.cloudinary.com/thirus/image/upload/v1628614672/logos/circleai_dm9slt.png"
            alt=""
          />
        </a>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
        </ul>
        <span className="text-right flex-1">
          <a href="#" className="btn4">
            Join us
          </a>
        </span>
      </header>
      <header className=" flex justify-between items-center">
        <a href="#">
          <img
            className="inline h-7"
            src="https://res.cloudinary.com/thirus/image/upload/v1628614672/logos/circleai_dm9slt.png"
            alt=""
          />
        </a>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
        </ul>
        <span className="text-right">
          <a href="#" className="btn4">
            Join us
          </a>
        </span>
      </header>
      <div className="container9 flex shadow-xl">
        <img
          className="w-80 object-cover flex-1"
          src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200"
        />
        <div className="details flex-[2]">
          <h2>Poolside Villas</h2>
          <p>
            Enjoy your stay at our property with mesmerizing views. Relax at the
            pool while you're pampered by our staff serving drinks and food of
            your choice.
          </p>
        </div>
      </div>
      <div className="container10 shadow-xl flex justify-between items-center">
        <div className="flex text-gray-400 items-center">
          <BellIcon className=" h-6 mr-2 " />
          <span className="text-lg text-gray-700">Notifications</span>
        </div>
        <span className="count text-blue-800 ml-auto">2</span>
      </div>
      <div className="container10 flex items-center bg-blue-100 shadow-lg">
        <div className="flex items-center ">
          <SbellIcon className="mr-2 h-7" />
          <span className="text-lg">Notifications</span>
        </div>
        <span className="count ml-auto">2</span>
      </div>
      <div className="container11 container flex flex-col border-[1px] p-2">
        <img
          src="https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300"
          alt=""
          className="m-4"
        />
        <span>$220</span>
        <h3>Confort Grey Sneakers</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta cum
          impedit veniam
        </p>
        <button
          className="mt-2 py-2 px-4 rounded-md text-sm text-white
        bg-cyan-700 self-end "
        >
          Add to Cart
        </button>
      </div>
      <div className=" mx-auto items-center container12 flex">
        <img
          src="https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100"
          alt=""
        />
        <div className="m-0">
          <p className="font-bold text-2xl">Richard Carl</p>
          <span className="text-sm opacity-90">Graphic Designer</span>
        </div>
        <div className="rating self-start  flex  ml-auto">
          <StarIcon className="h-5 mr-1 text-orange-400" />
          <span>5.0</span>
        </div>
      </div>
      <div className="mt-6">
        <div className="flex space-x-2 ml-4 py-2  items-center">
          <p className="inline-block p-4 flex-start rounded-full font-bold text-2xl bg-indigo-600 text-white">
            13
          </p>
          <h1 className="text-3xl text-indigo-500">Align Content</h1>
        </div>
        <div className="flex gap-2 ml-4 py-2 text-center flex-1  items-center mx-auto">
          <h1 className="text-4xl text-center">
            Full Page Testimonials Section{" "}
          </h1>
          <button className="mr-2 py-2 px-4 rounded-md font-bold bg-orange-400">
            Example 13a
          </button>
        </div>
      </div>
      <div className="container13 flex flex-col  content-center justify-center">
        <h1 className="flex-full text-center ">
          What people are saying about my eBook
        </h1>
        <div className="flex flex-wrap justify-center content-center">
          <div className="testimonial">
            <p>
              "Just ordered my copy! Shruti is awesome and I suck at grid.
              <br />
              No brainer."
            </p>
            <span>
              <strong>- Caleb Porzio</strong>
            </span>
          </div>
          <div className="testimonial">
            <p>
              "It's the best e-book experience I've had on this subject. Might
              even understand this Flex/Grid stuff myself after all."
            </p>
            <span>
              <strong>- Lucian Tartea</strong>
            </span>
          </div>
          <div className="testimonial">
            <p>
              "I think there is a 0 missing at the end of these prices. $8 for
              this much awesomeness? It should be 800!"
            </p>
            <span>
              <strong>- Jimi Wikman</strong>
            </span>
          </div>
          <div className="testimonial">
            <p>
              "I love that you have used real world examples to describe the
              concepts which is very helpful to understand."
            </p>
            <span>
              <strong>- Sumudu Siriwardana</strong>
            </span>
          </div>
          <div className="testimonial">
            <p>
              "My CSS Grid abilities aren’t quite where I want them to be so I’m
              excited to dive into the full release"
            </p>
            <span>
              <strong>- Jacob Foster</strong>
            </span>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <div className="flex space-x-2 ml-4 py-2  items-center">
          <p className="mx-1 inline-flex rounded-full h-12 w-12 items-center justify-center font-bold text-2xl bg-indigo-600 text-white">
            14
          </p>
          <h1 className="text-3xl text-indigo-500">Align Content</h1>
        </div>
        <div className="flex gap-2 ml-4 py-2 text-center flex-1  items-center mx-auto">
          <h1 className="text-4xl text-center">Social Media Icons </h1>
          <button className="mr-2 py-2 px-4 rounded-md font-bold bg-orange-400">
            Example 14a
          </button>
        </div>
        <a href="#" className="iconR  inline-flex items-center  justify-center">
          <FaTwitter className="text-2xl" />
        </a>
        <a href="#" className="iconR  inline-flex items-center  justify-center">
          <FaLinkedinIn className="text-2xl" />
        </a>
        <a href="#" className="iconR  inline-flex items-center  justify-center">
          <FaGithub className="text-2xl" />
        </a>
      </div>
      <div className="wrapper14">
        <div className="container14 mx-auto flex flex-col md:flex-row ">
          <div className="flex-[40%] ">
            <img
              className="article-img"
              src="https://res.cloudinary.com/thirus/image/upload/v1632854291/logos/drawers_gr2wn5.jpg"
              alt="Furniture"
            />
          </div>
          <div className="details border-[1px] flex-[60%]">
            <h2>
              Shift the overall look and feel by adding these wonderful touches
              to furniture in your home
            </h2>
            <p>
              Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I've got some simple tips to
              help you make any room feel complete.
            </p>
            <div className="article-footer flex items-center">
              <img
                src="https://res.cloudinary.com/thirus/image/upload/v1632854290/logos/avatar-michelle_qcobnu.jpg"
                alt=""
              />
              <div>
                <p>Michelle Appleton</p>
                <span>28 Jun 2020</span>
              </div>
              <div className="share-icon ml-auto">
                <img
                  src="https://res.cloudinary.com/thirus/image/upload/v1632854290/logos/icon-share_frvrfu.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/** Daily Average Stats */}
      <h1 className="text-3xl text-center font-bold">Daily Average Stats</h1>
      <div className="container15 flex flex-wrap">
        <div className="report flex-1 min-w-[12rem] flex flex-col justify-between">
          <span>Avg. Steps /day</span>
          <span>9,340</span>
          <div className="">
            <p>
              <strong>+344</strong>
            </p>
            <span>last month</span>
          </div>
        </div>
        <div className="report flex-1 min-w-[12rem] flex flex-col justify-between">
          <span>Minutes /day</span>
          <span>94</span>
          <div>
            <p>
              <strong>+12</strong>
            </p>
            <span>last month</span>
          </div>
        </div>
        <div className="report flex-1 min-w-[12rem] flex flex-col justify-between">
          <span>kCal Burnt /day</span>
          <span>142</span>
          <div>
            <p>
              <strong>+22</strong>
            </p>
            <span>last month</span>
          </div>
        </div>
      </div>
      {/** Tweet Example 15c */}
      <h1 className="text-2xl  font-bold text-center">Tweet Example 15c</h1>
      <div className="container17 flex ">
        <img
          src="https://pbs.twimg.com/profile_images/1329475394714537986/MXGt0d_h_x96.jpg"
          alt=""
        />
        <div>
          <div className=" flex justify-between">
            <div>
              <a href="#">
                <strong>Shruti Balasa</strong>
                <span>@shrutibalasa</span>
              </a>
              &middot;
              <a href="#">Mar 9</a>
            </div>
            <img
              className="options"
              src="https://res.cloudinary.com/thirus/image/upload/v1632940964/logos/options_wdtupw.svg"
              alt=""
            />
          </div>
          <div className="tweet text-sm">
            You are amazing if you take time to comment on a tweet or YouTube
            video or a blogpost that has helped you! 🙌
          </div>
          <div className="actions flex justify-between">
            <div>
              <img
                src="https://res.cloudinary.com/thirus/image/upload/v1632940688/logos/reply_ts2dvv.svg"
                alt=""
              />
              <span>20</span>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/thirus/image/upload/v1632940688/logos/retweet_wkdf6j.svg"
                alt=""
              />
              <span>17</span>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/thirus/image/upload/v1632940688/logos/like_zmb4tf.svg"
                alt=""
              />
              <span>215</span>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/thirus/image/upload/v1632940688/logos/share_rgaloj.svg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/thirus/image/upload/v1632940964/logos/stats_jt2vsb.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/** Grid section here */}
      <div className="title text-center underline underline-offset-4 decoration-green-400">
        Grid section here
      </div>
    </>
  );
}
export default FlexBox;
