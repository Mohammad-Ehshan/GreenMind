// import { Button } from "@/components/ui/button";
// import {
//   ArrowRight,
//   ChevronRight,
//   Coins,
//   Leaf,
//   MapPin,
//   Recycle,
//   Users,
// } from "lucide-react";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <div className="container mx-auto px-4 py-16">
//       <section className="text-center mb-20">
//         <div className="relative w-32 h-32 mx-auto mb-8">
//         <Leaf className="absolute inset-0 m-auto h-16 w-16 text-green-600" />
//         </div>
//         <h1 className="text-6xl font-bold mb-6 text-gray-800 tracking-tight">
//          Swacch-Bharat <span className="text-green-600">Waste 
//           Management</span> 
//         </h1>
//         <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
//           Join our community in making waste management more efficient and rewarding
//         </p>
//         <Button className="bg-green-600 hover:bg-green-700 text-white text-lg py-6 px-10">
//           Report Waste
//         </Button>
//       </section>

//       <section className="grid md:grid-cols-3 gap-10 mb-20">
//         <FeatureCard
//         icon={Leaf}
//         title="Eco-Friendly"
//         description="We are committed to reducing waste and promoting sustainability."
//         />
//         <FeatureCard
//         icon={Coins}
//         title="Earn Rewards"
//         description="We are committed to reducing waste and promoting sustainability."
//         />
//         <FeatureCard
//         icon={Leaf}
//         title="Community Driven"
//         description="We are committed to reducing waste and promoting sustainability."
//         />
//       </section>

//       <section className="bg-white p-10 rounded-3xl shadow-lg mb-20">
//          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
//           Our Impact
//          </h2>
//          <div className="grid md:grid-cols-4 gap-6">
//           <ImpactCard title="Waste Collected" value={'20 KG'} icon={Recycle}/>
//           <ImpactCard title="Report Submitted" value={'30'} icon={MapPin}/>
//           <ImpactCard title="Tokens Earned" value={'200'} icon={Coins}/>
//           <ImpactCard title="CO2 Offset" value={'50 KG'} icon={Leaf}/>
//          </div>
//       </section>
//     </div>
//   );
// }

// function FeatureCard({icon:Icon,title,description}:{icon:React.ElementType; title:string;description:string}){
// return (
//   <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg translate-all duration-300 ease-in-out flex flex-col items-center text-center">
//    <div className="bg-green-100 p-4 rounded-full mb-6">
//    <Icon className='h-8 w-8 text-green-600'/>
//    </div>
//    <h3 className="text-xl font-semibold mb-4 text-gray-800">{title}</h3>
//    <p className="text-gray-600 leading-relaxed">{description}</p>
//   </div>
// );
// }


// function ImpactCard({title,value,icon:Icon}:{title:string ; value:string|number ;icon:React.ElementType}){
// return (
//   <div className="p-6 rounded-xl bg-gray-50 border border-gray-100 transition-all duration-300 ease-in-out hover:shadow-md">
//     <Icon className='h-10 w-10 text-green-500 mb-4'/>
//     <p className="text-3xl font-bold mb-2 text-gray-800">{value}</p>
//     <p className="text-sm text-gray-600">{title}</p>{' '}
//   </div>
// )
// }

import Footer2 from '@/components/Footer2'
import Home from '@/components/Home'
import Homepart1 from '@/components/Home1'
import Homepart2 from '@/components/Home2'
import Testimonal2 from '@/components/Testimonal2'
import UpComing2 from '@/components/upcoming'
import React from 'react'

const page = () => {
  return (
    <div>
      <Home/>
      <Homepart1/>
      <Homepart2/>
      <UpComing2/>
      <Testimonal2/>
      <Footer2/>
    </div>
  )
}

export default page