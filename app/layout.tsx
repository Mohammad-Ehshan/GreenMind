'use client'

import { useEffect, useState } from "react"

import {Inter} from 'next/font/google'

import "./globals.css";

//header
//sidebar

import { Toaster } from "react-hot-toast";
import Header from "@/components/Header";
import { getAvailableRewards, getUserByEmail } from "@/utils/db/actions";
import { usePathname } from "next/navigation";

const inter=Inter({subsets:['latin']})

export default function RootLayout({
children,
}:Readonly<{
  children:React.ReactNode;
}>) {
  const [sidebarOpen,setSidebarOpen]=useState(false)
  const [totalEarning,setTotalEarnings]=useState(0)

  useEffect(() => {
    const fetchTotalEarnings=async ()=>{
      try {
        const userEmail = localStorage.getItem('userEmail')

        if(userEmail){
          const user=await getUserByEmail(userEmail)
          if(user){
            const availableRewards=(await getAvailableRewards(user.id)) as any;
            setTotalEarnings(availableRewards);
          }
        }
      } catch (error) {
        console.error('Error fetching total earning',error);
      }
    };
    fetchTotalEarnings();
  }, []);
  
  const pathname = usePathname(); 
  const noHeaderPages = ['/login', '/signup'];


 return (
  <html lang="en" className="overflow-x-hidden">
    <body className={inter.className} >
      {/* it had bg-gray-50  */}
      {/* <div className="min-h-screen bg-gray-50 flex flex-col"> */}
      <div>
       {/* header  */}
       {!noHeaderPages.includes(pathname) && <Header onMenuClick={()=>setSidebarOpen(!sidebarOpen)} totalEarnings={totalEarning}/>}
       {/* <div className="flex flex-1"> */}
       <div>
        {/* sidebar */}
        {/* <Sidebar open={sidebarOpen}/> */}
        {/* <main className="flex-1 p-4 lg:p-8 ml-0 lg:ml-64 transition-all duration-300"> */}
        <main>
         {children}
        </main>
       </div>
      </div>
      <Toaster/>
    </body>
  </html>
 )
}

// import localFont from "next/font/local";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }
