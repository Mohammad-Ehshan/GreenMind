// "use client";

// import { Button } from "@/components/ui/button";
// import {
//   getAvailableRewards,
//   getRewardTransactions,
//   getUserByEmail,
// } from "@/utils/db/actions";
// import {
//   AlertCircle,
//   ArrowDownRight,
//   ArrowUpRight,
//   Coins,
//   Gift,
//   Loader,
// } from "lucide-react";
// import { useEffect, useState } from "react";
// import toast from "react-hot-toast";

// type Transaction = {
//   id: number;
//   type: "earned_report" | "earned_collect" | "redeemed";
//   amount: number;
//   description: string;
//   date: string;
// };

// type Reward = {
//   id: number;
//   name: string;
//   cost: number;
//   description: string | null;
//   collectionInfo: string;
// };

// export default function RewardsPage() {
//   const [user, setUser] = useState<{
//     id: number;
//     email: string;
//     name: string;
//   } | null>(null);
//   const [balance, setBalance] = useState(0);
//   const [transactions, setTransactions] = useState<Transaction[]>([]);
//   const [rewards, setRewards] = useState<Reward[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchUserAndRewards = async () => {
//       setLoading(true);
//       try {
//         const userEmail = localStorage.getItem("userEmail");
//         if (userEmail) {
//           const fetchedUser = await getUserByEmail(userEmail);
//           if (fetchedUser) {
//             setUser(fetchedUser);
//             const fetchedTransactions = await getRewardTransactions(
//               fetchedUser.id
//             );
//             setTransactions(fetchedTransactions as Transaction[]);

//             const fetchedRewards = await getAvailableRewards(fetchedUser.id);
//             setRewards(fetchedRewards);

//             const calculatedBalance = fetchedTransactions.reduce(
//               (acc: any, transaction) => {
//                 return transaction.type.startsWith("earned")
//                   ? acc + transaction.amount
//                   : acc - transaction.amount;
//               },
//               0
//             );
//             setBalance(Math.max(calculatedBalance, 0));
//           } else {
//             toast.error("User not found. Please log in again");
//           }
//         } else {
//           toast.error("User not logged in.Please log in");
//         }
//       } catch (error) {
//         console.error("Errro fetching user data and rewards", error);
//         toast.error("Failed to load rewards data. Please try again");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchUserAndRewards();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-64">
//         <Loader className="animate-spin h-8 w-8 text-gray-600" />
//       </div>
//     );
//   }

//   return (
//     <div className="p-8 max-w-4xl mx-auto">
//       <h1 className="text-3xl font-semibold mb-6 text-gray-800">Rewards</h1>
//       <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col justify-between h-full border-l-4 border-green-500 mb-8">
//         <h2 className="text-xl font-semibold mb-4 text-gray-800">
//           Reward Balance
//         </h2>
//         <div className="flex items-center justify-between mt-auto">
//           <div className="flex items-center">
//             <Coins className="w-10 h-10 mr-3 text-green-500" />
//             <div>
//               <span className="text-4xl font-bold text-green-500">
//                 {balance}
//               </span>
//               <p className="text-sm text-gray-500">Available Points</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="grid md:grid-cols-2 gap-8">
//         <div>
//           <h2 className="text-2xl font-semibold mb-4 text-gray-800">
//             Recent Transactions
//             </h2>
//             <div className="bg-white rounded-xl shadow-md overflow-hidden">
//               {transactions.length > 0 ? (
//                 transactions.map((transactions: any) => (
//                   <div
//                     key={transactions.id}
//                     className="flex items-center justify-between p-4 border-b border-gray-200 last:border-b-0"
//                   >
//                     <div className="flex items-center">
//                       {transactions.type==='earned_report' ? (
//                         <ArrowUpRight className="w-5 h-5 text-green-500 mr-3 "/>
//                       ) : transactions.type==='earned_collect' ? (
//                         <ArrowUpRight className="w-5 h-5 text-blue-500 mr-3"/>
//                       ) : (<ArrowDownRight className="w-5 h-5 text-red-500 mr-3"/>)}
//                       <div>
//                         <p className="font-medium text-gray-800">{transactions.description}</p>
//                         <p className="font-sm text-gray-500">{transactions.date}</p>
//                       </div>
//                     </div>
//                     <span className={`font-semibold ${transactions.type.startsWith('earned') ? 'text-green-500' : 'text-red-500'}`}>
//                       {transactions.type.startsWith('earned') ? '+' : '-'}{transactions.amount}
//                     </span>
//                   </div>
//                 ))
//               ) : (
//                 <div className="p-4 text-center text-gray-500">No Transactions Yet</div>
//               )}
//             </div>
//         </div>

//         <div>
//           <h2 className="text-2xl font-semibold mb-4 text-gray-800">Available Rewards</h2>
//           <div className="space-y-4">
//             {rewards.length > 0 ? (
//               rewards.map((reward)=>(
//               <div key={reward.id} className="bg-white p-4 rounded-xl shadow-md">
//                 <div className="flex justify-between items-center mb-2">
//                   <h3 className="text-lg font-semibold text-gray-800">{reward.name}</h3>
//                   <span className="text-green-500 font-semibold">{reward.cost} points</span>
//                 </div>
//                 <p className="text-gray-600 mb-2">{reward.description}</p>
//                 <p className="text-sm text-gray-500 mb-4">{reward.collectionInfo}</p>
//                 {reward.id===0 ? (
//                   <div className="space-y-2">
//                     <Button  className="w-full bg-green-500 hover:bg-green-600 text-white" disabled={balance===0}>

//                     <Gift className="w-4 h-4 mr-2"/>
//                     Redeem All Points
//                     </Button>
//                   </div>
//                 ) : (
//                   <Button className="w-full bg-gray-500 hover:bg-green-600 text-white" disabled={balance < reward.cost}>
//                     <Gift className="w-4 h-4 mr-2"/>
//                     Redeem Reward
//                   </Button>
//                 )}
//               </div>
//               ))
//             ): (
//               <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md">
//                 <div className="flex items-center">
//                   <AlertCircle className="h-6 w-6 text-yellow-400 mr-3"/>
//                   <p className="text-yellow-700">
//                     No rewards available at the moment
//                   </p>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





// import { Bell, Cog, Search } from "lucide-react";
// import React from "react";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { faSearch, faBell, faCog } from "@fortawesome/free-solid-svg-icons";

// const Reward2 = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-t my-gradient from-emerald-300 to-green-200 text-white">
//       {/* Top Navigation Bar */}
     

//       {/* Main Section */}
//       <div className="flex justify-between p-8">
//         {/* Left Section - Heading, Progress Bar, Buttons */}
//         <div className="w-1/2">
//           <h1 className="text-6xl bg-gradient-to-r from-zinc-800 to-gray-900 bg-clip-text text-transparent font-bold mt-8 ml-7 leading-tight">
//             Your tier is <br />{" "}
//             <span className="font-bold ml-9">
//               Going up <span className="text-red-800">Ϟ</span>{" "}
//             </span>
//           </h1>

//           {/* Progress Speedometer  */}
//           <div className="flex items-center mt-20">
//             <div className="relative w-64 h-64 bg-zinc-800 rounded-full flex items-center justify-center">
//               {/* Gradient Bars */}
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="w-48 h-48 bg-transparent border-8 rounded-full border-gray-400"></div>
//                 <div className="absolute w-full h-full rounded-full">
//                   {/* Gradient effect */}
//                   <svg className="w-full h-full" viewBox="0 0 100 100">
//                     <circle
//                       cx="50"
//                       cy="50"
//                       r="45"
//                       stroke="url(#gradient)"
//                       strokeWidth="10"
//                       fill="none"
//                       strokeDasharray="75 25"
//                     />
//                     <defs>
//                       <linearGradient
//                         id="gradient"
//                         x1="0%"
//                         y1="0%"
//                         x2="100%"
//                         y2="100%"
//                       >
//                         <stop
//                           offset="0%"
//                           style={{ stopColor: "#34d399", stopOpacity: 1 }}
//                         />
//                         <stop
//                           offset="100%"
//                           style={{ stopColor: "#60a5fa", stopOpacity: 1 }}
//                         />
//                       </linearGradient>
//                     </defs>
//                   </svg>
//                 </div>
//               </div>
//               {/* Inner Text */}
//               <div className="absolute flex flex-col items-center">
//                 <span className="text-white text-xl font-semibold">
//                   My Level
//                 </span>
//                 <span className="text-white text-4xl font-bold">8</span>
//                 <span className="text-blue-300 text-sm">Points: 250</span>
//               </div>
//             </div>

//             {/* Text and Buttons */}
//             <div className="ml-20">
//               <p className="text-xl mb-6">
//                 Report More and earn points to unlock <br /> rewards! Add
//                 friends for even <br /> more Referral Points.
//               </p>
//               <div className="flex space-x-4">
//                 <button className="bg-emerald-500 px-4 py-1.5 rounded text-sm">
//                   Redeem All Points
//                 </button>
//               </div>
//               <div className="flex space-x-4 mt-4">
//                 <button className="bg-emerald-500 px-6 py-1.5 rounded text-sm">
//                   Default Reward
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Section - User Cards */}
//         <div className="w-1/2 flex mt-64 gap-7 justify-between ">
//           {/* Card 1 */}
//           <div className="bg-[#a4efc7] pt-12 pb-8  rounded-lg text-center w-1/2 relative">
//             <img
//               src="/Designer (1).png"
//               alt="Robert Fox"
//               className="absolute -top-56 left-1/2 transform -translate-x-1/2 size-56 "
//             />

//             <h2 className="text-3xl font-bold text-slate-950 mt-0 mb-16">
//               <span className=" mr-4">
//                 {" "}
//                 {/* <FontAwesomeIcon icon={faCog} className="text-lg mt-4" /> */}
//                 <Cog/>
//               </span>{" "}
//               Recent Transcitions
//             </h2>
//             <span className="block text-6xl text-[#00BF00] font-bold -mt-12">
//               +47
//             </span>
//             <span className="block text-xl text-lime-950 font-bold mt-5">
//               Points Earned For <br />
//               Collecting Waste
//             </span>

//             <div className="mt-5 text-black">
//               <div className="">21-09-2024</div>
//             </div>
//           </div>
//           <div className="bg-[#a4efc7] pt-12 pb-8  rounded-lg text-center w-1/2 relative">
//             <img
//               src="/Designer (1).png"
//               alt="Robert Fox"
//               className="absolute -top-56 left-1/2 transform -translate-x-1/2 size-56 "
//             />

//             <h2 className="text-3xl font-bold text-slate-900 mt-0 mb-16">
//               <span className=" mr-4">
//                 {" "}
//                 {/* <FontAwesomeIcon icon={faCog} className="text-lg mt-4" /> */}
//                 <Cog/>
//               </span>{" "}
//               Available balance
//             </h2>
//             <span className="block text-6xl text-[#bfbf00] font-bold -mt-12">
//               79
//             </span>
//             <span className="block text-xl text-lime-950 font-bold mt-5">
//               Your Points <br />
//               Redeem Earned points
//             </span>

//             <div className="mt-5 text-black">
//               <div className="">21-09-2024</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Reward2;




"use client";

import { Button } from "@/components/ui/button";
import {
  getAvailableRewards,
  getRewardTransactions,
  getUserByEmail,
} from "@/utils/db/actions";
import {
  AlertCircle,
  ArrowDownRight,
  ArrowUpRight,
  Coins,
  Gift,
  Loader,
} from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaMoneyBill } from "react-icons/fa";

type Transaction = {
  id: number;
  type: "earned_report" | "earned_collect" | "redeemed";
  amount: number;
  description: string;
  date: string;
};

type Reward = {
  id: number;
  name: string;
  cost: number;
  description: string | null;
  collectionInfo: string;
};

export default function RewardsPage() {
  const [user, setUser] = useState<{
    id: number;
    email: string;
    name: string;
  } | null>(null);
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [rewards, setRewards] = useState<Reward[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserAndRewards = async () => {
      setLoading(true);
      try {
        const userEmail = localStorage.getItem("userEmail");
        if (userEmail) {
          const fetchedUser = await getUserByEmail(userEmail);
          if (fetchedUser) {
            setUser(fetchedUser);
            const fetchedTransactions = await getRewardTransactions(
              fetchedUser.id
            );
            setTransactions(fetchedTransactions as Transaction[]);

            const fetchedRewards = await getAvailableRewards(fetchedUser.id);
            setRewards(fetchedRewards);

            const calculatedBalance = fetchedTransactions.reduce(
              (acc: any, transaction) => {
                return transaction.type.startsWith("earned")
                  ? acc + transaction.amount
                  : acc - transaction.amount;
              },
              0
            );
            setBalance(Math.max(calculatedBalance, 0));
          } else {
            toast.error("User not found. Please log in again");
          }
        } else {
          toast.error("User not logged in.Please log in");
        }
      } catch (error) {
        console.error("Errro fetching user data and rewards", error);
        toast.error("Failed to load rewards data. Please try again");
      } finally {
        setLoading(false);
      }
    };
    fetchUserAndRewards();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader className="animate-spin h-8 w-8 text-gray-600" />
      </div>
    );
  }

  return (
    <div className="h-screen w-full my-gradient ">
      
    <div className="p-8  max-w-4xl mx-auto">
      <h1 className="text-6xl font-semibold mb-16 flex justify-center items-center text-gray-800 ">Rewards</h1>
      <div className="bg-white p-6 w-[40%] rounded-xl  shadow-lg flex flex-col justify-between h-full border-l-4 mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Reward Balance
        </h2>
        <div className="flex items-center  justify-between mt-auto">
          <div className="flex items-center ">
            <FaMoneyBill className="w-10 h-10 mr-3 text-green-500" />
            <div>
              <span className="text-4xl font-bold text-green-500">
                {balance}
              </span>
              <p className="text-sm text-gray-500">Available Points</p>
            </div>
          </div>
        </div>
      </div>

      

      <div className="grid md:grid-cols-2 gap-8 ">
        <div className="shadow-lg rounded-xl p-3">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Recent Transactions
            </h2>
            <div className="bg-white rounded-xl  overflow-hidden">
              {transactions.length > 0 ? (
                transactions.map((transactions: any) => (
                  <div
                    key={transactions.id}
                    className="flex items-center justify-between p-4 border-b border-gray-200 last:border-b-0 hover:bg-green-600"
                  >
                    <div className="flex items-center">
                      {transactions.type==='earned_report' ? (
                        <ArrowUpRight className="w-5 h-5 text-green-500 mr-3 "/>
                      ) : transactions.type==='earned_collect' ? (
                        <ArrowUpRight className="w-5 h-5 text-blue-500 mr-3"/>
                      ) : (<ArrowDownRight className="w-5 h-5 text-red-500 mr-3"/>)}
                      <div>
                        <p className="font-medium text-gray-800">{transactions.description}</p>
                        <p className="font-sm text-gray-500">{transactions.date}</p>
                      </div>
                    </div>
                    <span className={`font-semibold ${transactions.type.startsWith('earned') ? 'text-green-500' : 'text-red-500'}`}>
                      {transactions.type.startsWith('earned') ? '+' : '-'}{transactions.amount}
                    </span>
                  </div>
                ))
              ) : (
                <div className="p-4 text-center text-gray-500">No Transactions Yet</div>
              )}
            </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Available Rewards</h2>
          <div className="space-y-4">
            {rewards.length > 0 ? (
              rewards.map((reward)=>(
              <div key={reward.id} className="bg-white p-4 rounded-xl shadow-md">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-gray-800">{reward.name}</h3>
                  <span className="text-green-500 font-semibold">{reward.cost} points</span>
                </div>
                <p className="text-gray-600 mb-2">{reward.description}</p>
                <p className="text-sm text-gray-500 mb-4">{reward.collectionInfo}</p>
                {reward.id===0 ? (
                  <div className="space-y-2">
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white" disabled={balance===0}>

                    <Gift className="w-4 h-4 mr-2"/>
                    Redeem All Points
                    </Button>
                  </div>
                ) : (
                  <Button className="w-full bg-gray-500 hover:bg-green-600 text-white" disabled={balance < reward.cost}>
                    <Gift className="w-4 h-4 mr-2"/>
                    Redeem Reward
                  </Button>
                )}
              </div>
              ))
            ): (
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md">
                <div className="flex items-center">
                  <AlertCircle className="h-6 w-6 text-yellow-400 mr-3"/>
                  <p className="text-yellow-700">
                    No rewards available at the moment
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}