// 'use client'
// import { ArrowLeft } from "lucide-react";
// import React, { useState, useEffect } from "react";

// // Testimonials Data
// const testimonials = [
//   {
//     name: "Aryan Jha",
//     image: "testimony1.jpeg",
//     testimony:
//       "This waste management site is a true game changer! The AI technology simplifies the process of identifying and categorizing waste, making it easy for users to understand their environmental impact.",
//   },
//   {
//     name: "Koshal Yadav",
//     image: "testimony-2.png",
//     testimony:
//       "I absolutely love this waste management platform! The user-friendly interface and AI-driven features make waste sorting and recycling incredibly simple.",
//   },
//   {
//     name: "Nikhil Sharma",
//     image: "testimony3.png",
//     testimony:
//       "This site is incredibly helpful for effectively managing waste! The AI analysis accurately categorizes waste items and provides valuable insights.",
//   },
// ];

// const TestimonialCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);

//   // Automatically go to the next slide every 5 seconds
//   useEffect(() => {
//     const timer = setInterval(() => {
//       nextSlide();
//     }, 5000); // Change slide every 5 seconds
//     return () => clearInterval(timer); // Clean up the timer
//   }, [currentIndex]);

//   const nextSlide = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setTimeout(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
//       );
//       setIsAnimating(false);
//     }, 500); // Same as the transition duration
//   };

//   const prevSlide = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setTimeout(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
//       );
//       setIsAnimating(false);
//     }, 500);
//   };

//   return (
//     <div className="testimonial-container bg-gradient-to-t from-green-400 to-emerald-400 p-10">
//       <h2 className="text-6xl mb-5 bg-gradient-to-r from-black via-zinc-700 to-gray-900 bg-clip-text text-transparent font-bold text-center">
//         Precious <span className="text-neutral-900">Testimony</span>
//       </h2>

//       <div className="testimonial-wrapper relative max-w-7xl mx-auto overflow-hidden">
//         <div className="relative">
//           {/* Testimonial Slide */}
//           <div
//             className="testimonial-box flex transition-transform duration-500 ease-in-out"
//             style={{
//               transform: `translateX(-${currentIndex * 100}%)`,
//             }}
//           >
//             {testimonials.map((testimonial, index) => (
//               <div
//                 key={index}
//                 className="testimonial-slide flex-shrink-0 w-full flex flex-col items-center bg-gradient-to-t from-emerald-300 to-green-200 shadow-lg p-14 rounded-2xl border-t-8 border-b-8 border-emerald-500 min-h-[550px]"
//               >
//                 <img
//                   src={testimonial.image}
//                   alt={testimonial.name}
//                   className="w-36 h-36 object-cover rounded-full border-8 border-green-400 outline outline-4 outline-lime-100"
//                 />
//                 <h3 className="text-3xl bg-gradient-to-r from-zinc-600 to-gray-800 bg-clip-text text-transparent font-extrabold my-4">
//                   {testimonial.name}
//                 </h3>
//                 <p className="text-center text-slate-950 text-lg">
//                   {testimonial.testimony}
//                 </p>
//               </div>
//             ))}
//           </div>

//           {/* Navigation buttons */}
//           <button
//             onClick={prevSlide}
//             className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white text-indigo-600 p-2 rounded-full shadow-lg z-10"
//           >
//             Prev
//           </button>
//           <button
//             onClick={nextSlide}
//             className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white text-indigo-600 p-2 rounded-full shadow-lg z-10"
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestimonialCarousel;



'use client'
import { ArrowLeft } from "lucide-react";
import React, { useState, useEffect } from "react";

// Testimonials Data
const testimonials = [
  {
    name: "Aryan Jha",
    image: "testimony1.jpeg",
    testimony:
      "This waste management site is a true game changer! The AI technology simplifies the process of identifying and categorizing waste, making it easy for users to understand their environmental impact.",
  },
  {
    name: "Koshal Yadav",
    image: "testimony-2.png",
    testimony:
      "I absolutely love this waste management platform! The user-friendly interface and AI-driven features make waste sorting and recycling incredibly simple.",
  },
  {
    name: "Nikhil Sharma",
    image: "testimony3.png",
    testimony:
      "This site is incredibly helpful for effectively managing waste! The AI analysis accurately categorizes waste items and provides valuable insights.",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Automatically go to the next slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer); // Clean up the timer
  }, [currentIndex]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
      setIsAnimating(false);
    }, 500); // Same as the transition duration
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      setIsAnimating(false);
    }, 500);
  };

  return (
    <div className="testimonial-container bg-gradient-to-t from-green-400 to-emerald-400 p-10">
      <h2 className="text-6xl mb-5 bg-gradient-to-r from-black via-zinc-700 to-gray-900 bg-clip-text text-transparent font-bold text-center">
        Precious <span className="text-neutral-900">Testimony</span>
      </h2>

      <div className="testimonial-wrapper relative max-w-7xl mx-auto overflow-hidden">
        <div className="relative">
          {/* Testimonial Slide */}
          <div
            className="testimonial-box flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-slide flex-shrink-0 w-full flex flex-col items-center bg-gradient-to-t from-emerald-300 to-green-200 shadow-lg p-14 rounded-2xl border-t-8 border-b-8 border-emerald-500 min-h-[550px]"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-36 h-36 object-cover rounded-full border-8 border-green-400 outline outline-4 outline-lime-100"
                />
                <h3 className="text-3xl bg-gradient-to-r from-zinc-600 to-gray-800 bg-clip-text text-transparent font-extrabold my-4">
                  {testimonial.name}
                </h3>
                <p className="text-center text-slate-950 text-lg">
                  {testimonial.testimony}
                </p>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white text-indigo-600 p-2 rounded-full shadow-lg z-10"
          >
            Prev
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white text-indigo-600 p-2 rounded-full shadow-lg z-10"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
