
// import {
//   FaArrowAltCircleRight,
//   FaArrowRight,
//   FaEnvelopeOpen,
//   FaFacebookF,
//   FaInstagram,
//   FaInstagramSquare,
//   FaLinkedin,
//   FaTwitter,
//   FaYoutube,
// } from "react-icons/fa";

// const Home = () => {
//   return (
//     <div className="h-[100vh] bg-[#ECFDF5] box-border ">
//       {/* navbar hai ye wala replace krdio  man chae se */}

//       {/* <nav className="flex items-center p-6 -mt-7">
//         <ul className="flex justify-start ml-200 font-semibold space-x-20">
//           <li className="hover:text-green-600 cursor-pointer mt-7">Products</li>
//           <li className="hover:text-green-600  cursor-pointer mt-7">
//             Campaign
//           </li>
//           <li className="hover:text-green-600 cursor-pointer mt-7">Events</li>
//           <li className="hover:text-green-600 cursor-pointer mt-7">About</li>
//           <li className="hover:text-green-700 cursor-pointer  bg-green-900  text-zinc-300 mt-6 rounded-l-full px-3 py-1 ">
//             LOG in
//           </li>
//         </ul>
//       </nav> */}

//       {/* main part hai ye images and heading and social icons wagera */}

//       <div className="flex justify-between items-center px-10  py-10">
//         {/* left part  */}

//         <div className="">
//           <h1 className="absolute font-extrabold tracking-widest  right-16 text-6xl -mt-6  text-[#065F46] text-right ">
//             Scan, <span className="text-[#059669] font-extrabold">Sort,</span>{" "}
//             <span className="text-[#10B981]">Sustain</span>
//             <br />
//             <span className="text-5xl font-medium text-[#047857]">
//               We'll Break the Chain
//             </span>
//           </h1>

//           {/* left image */}

//           <div className=" mx-60 w-[420px]  -my-36 bg-cover bg-center overflow-hidden rounded-br-full rounded-bl-full">
//             <img className="z-0" src="./fish.jpg" alt="wastefish" />
//           </div>

//           {/* social media icon using fontaws */}

//           <div className="flex flex-col space-y-6 ml-10 relative -top-48">
//             {/* logo hai ye */}
//             <div className="  w-12 ">
//               {/* <img className="-mt-36" src="/logo.png" alt="" /> */}
//             </div>
//             <FaFacebookF
//               className="hover:text-indigo-600  bg-emerald-400 rounded-full p-1 cursor-pointer"
//               size={28}
//             />
//             <FaTwitter
//               className="hover:text-zinc-600 bg-emerald-400 rounded-full p-1 cursor-pointer"
//               size={28}
//             />
//             <FaInstagram
//               className="hover:text-pink-800 bg-emerald-400 rounded-full p-1 cursor-pointer"
//               size={28}
//             />
//             <FaYoutube
//               className="hover:text-red-600 bg-emerald-400 rounded-full p-1 cursor-pointer"
//               size={28}
//             />
//             {/* <FaEnvelopeOpen
//               className="hover:text-emerald-600 bg-pasr rounded-full p-1 cursor-pointer"
//               size={28}
//             /> */}
//             <FaLinkedin
//               className="hover:text-emerald-600 bg-emerald-400 rounded-full p-1 cursor-pointer"
//               size={28}
//             />
//           </div>
//           <div className="gap-4">
//           <p className="text-zinc-700 font-semibold  ml-11">
//             <span>
//               {" "}
//               the CEO has carried out many successfull projects for
//               reforestation <br />
//               bipdiversity conservation.
//             </span>
//           </p>

//           {/* button of home */}

//           <button className="flex items-center  ml-11 space-x-3 bg-green-900 text-white px-9 py-2 rounded-r-full hover:bg-lime-600">
//             <span>Join Us Dude</span>
//             <FaArrowAltCircleRight className="text-white" size={29} />
//             {/* <span>&rarr;</span> */}
//           </button>
//         </div>
//         </div>

//         {/* right wala image hai ye */}

//         <div className=" ">
//           {" "}
//           <img
//             className="w-[410px] h-128 mr-16 mt-36 bg-center bg-cover rounded-tl-full rounded-tr-full overflow-hidden"
//             src="./indstruial.jpg"
//             alt="wastefish "
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;


import {
  FaArrowAltCircleRight,
  FaArrowRight,
  FaEnvelopeOpen,
  FaFacebookF,
  FaInstagram,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Home = () => {
  return (
    <div className="h-[100vh] my-gradient bg-[#ECFDF5] box-border ">
      {/* navbar hai ye wala replace krdio  man chae se */}

      {/* <nav className="flex items-center p-6 -mt-7">
        <ul className="flex justify-start ml-200 font-semibold space-x-20">
          <li className="hover:text-green-600 cursor-pointer mt-7">Products</li>
          <li className="hover:text-green-600  cursor-pointer mt-7">
            Campaign
          </li>
          <li className="hover:text-green-600 cursor-pointer mt-7">Events</li>
          <li className="hover:text-green-600 cursor-pointer mt-7">About</li>
          <li className="hover:text-green-700 cursor-pointer  bg-green-900  text-zinc-300 mt-6 rounded-l-full px-3 py-1 ">
            LOG in
          </li>
        </ul>
      </nav> */}

      {/* main part hai ye images and heading and social icons wagera */}

      <div className="flex justify-between items-center px-10  py-10">
        {/* left part  */}

        <div className="">
          <h1 className="absolute font-extrabold tracking-widest  right-16 text-6xl mt-6  text-[#065F46] text-right ">
            Scan, <span className="text-[#059669] font-extrabold">Sort,</span>{" "}
            <span className="text-[#10B981]">Sustain</span>
            <br />
            <span className="text-5xl font-medium text-[#047857]">
              We'll Break the Chain
            </span>
          </h1>

          {/* left image */}

          <div className=" mx-40 w-[420px] -my-16  bg-cover bg-center overflow-hidden rounded-br-full rounded-bl-full">
            <img src="./fish.jpg" alt="wastefish" />
          </div>

          {/* social media icon using fontaws */}

          <div className="flex flex-col space-y-6 ml-10 relative -top-48">
            {/* logo hai ye */}
            {/* <div className="  w-12 ">
              <img className="-mt-36" src="/logo.png" alt="" />
            </div> */}
            <FaFacebookF
              className="hover:text-indigo-600  bg-emerald-400 rounded-full p-1 cursor-pointer"
              size={28}
            />
            <FaTwitter
              className="hover:text-zinc-600 bg-emerald-400 rounded-full p-1 cursor-pointer"
              size={28}
            />
            <FaInstagram
              className="hover:text-pink-800 bg-emerald-400 rounded-full p-1 cursor-pointer"
              size={28}
            />
            <FaYoutube
              className="hover:text-red-600 bg-emerald-400 rounded-full p-1 cursor-pointer"
              size={28}
            />
            {/* <FaEnvelopeOpen
              className="hover:text-emerald-600 bg-pasr rounded-full p-1 cursor-pointer"
              size={28}
            /> */}
            <FaLinkedin
              className="hover:text-emerald-600 bg-emerald-400 rounded-full p-1 cursor-pointer"
              size={28}
            />
          </div>
          <div className="gap-4">
          <p className="text-zinc-700 font-semibold  ml-11">
            <span>
              {" "}
              the CEO has carried out many successfull projects for
              reforestation <br />
              bipdiversity conservation.
            </span>
          </p>

          {/* button of home */}

          <button className="flex items-center  ml-11 space-x-3 bg-green-900 text-white px-9 py-2 rounded-r-full hover:bg-lime-600">
            <span>Join Us Dude</span>
            <FaArrowAltCircleRight className="text-white" size={29} />
            {/* <span>&rarr;</span> */}
          </button>
        </div>
        </div>

        {/* right wala image hai ye */}

        <div className=" ">
          {" "}
          <img
            className="w-[410px] h-128 mr-16 mt-[52%] bg-center bg-cover rounded-tl-full rounded-tr-full overflow-hidden"
            src="./indstruial.jpg"
            alt="wastefish "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;