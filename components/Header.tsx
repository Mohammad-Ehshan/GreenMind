"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search, Bell, LogIn } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import {
  createUser,
  getUnreadNotifications,
  markNotifiationAsRead,
  getUserByEmail,
  getUserBalance,
} from "@/utils/db/actions";
import { FaMoneyBill } from "react-icons/fa";
import { useUser, UserButton } from "@clerk/nextjs";

interface HeaderProps {
  totalEarnings: number;
}

export default function Header({ totalEarnings }: HeaderProps) {
  const { isSignedIn, user } = useUser();
  const [notifications, setNotifications] = useState<any[]>([]);
  const [balance, setBalance] = useState(0);
  const isMobile = useMediaQuery("(max-width:768px)");

  useEffect(() => {
    const fetchNotifications = async () => {
      if (user && user.primaryEmailAddress?.emailAddress) {
        const userData = await getUserByEmail(
          user.primaryEmailAddress.emailAddress
        );
        if (userData) {
          const unreadNotifications = await getUnreadNotifications(userData.id);
          setNotifications(unreadNotifications ?? []);
        }
      }
    };

    fetchNotifications();
    const notificationInterval = setInterval(fetchNotifications, 30000);
    return () => clearInterval(notificationInterval);
  }, [user]);

  useEffect(() => {
    const fetchUserBalance = async () => {
      if (user && user.primaryEmailAddress?.emailAddress) {
        const userData = await getUserByEmail(
          user.primaryEmailAddress.emailAddress
        );
        if (userData) {
          const userBalance = await getUserBalance(userData.id);
          setBalance(userBalance);
        }
      }
    };

    fetchUserBalance();
    const handleBalanceUpdate = (event: CustomEvent) => {
      setBalance(event.detail);
    };

    window.addEventListener(
      "balanceUpdated",
      handleBalanceUpdate as EventListener
    );
    return () => {
      window.removeEventListener(
        "balanceUpdated",
        handleBalanceUpdate as EventListener
      );
    };
  }, [user]);

  const handleNotificationClick = async (notificationId: number) => {
    await markNotifiationAsRead(notificationId);
    setNotifications((prev) => prev.filter((n) => n.id !== notificationId));
  };

  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <img src="/logo.png" alt="" width={50} />
            <span className="font-bold text-base md:text-lg text-gray-800">
              GreenMindAi
            </span>
          </Link>
        </div>

        {!isMobile && (
          <nav className="font-semibold flex justify-between items-center">
            <ul className="flex space-x-6">
              <li className="hover:scale-110 transition-transform">
                <Link
                  href="/report"
                  className="hover:text-[#1e740c] transition-colors"
                >
                  Report
                </Link>
              </li>
              <li className="hover:scale-110 transition-transform">
                <Link
                  href="/rewards"
                  className="hover:text-[#1e740c] transition-colors"
                >
                  Reward
                </Link>
              </li>
              <li className="hover:scale-110 transition-transform">
                <Link
                  href="/collect"
                  className="hover:text-[#1e740c] transition-colors"
                >
                  Collect
                </Link>
              </li>
              <li className="hover:scale-110 transition-transform">
                <Link
                  href="/rewards"
                  className="hover:text-[#1e740c] transition-colors"
                >
                  Rewards
                </Link>
              </li>
              <li className="hover:scale-110 transition-transform">
                <Link
                  href="/leaderboard"
                  className="hover:text-[#1e740c] transition-colors"
                >
                  Leaderboard
                </Link>
              </li>
            </ul>
          </nav>
        )}

        <div className="flex items-center">
          {isMobile && (
            <Button variant="ghost" size="icon" className="mr-2">
              <Search className="h-5 w-5" />
            </Button>
          )}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-2 relative">
                <Bell className="h-5 w-5 text-gray-800" />
                {notifications.length > 0 && (
                  <Badge className="absolute -top-1 -right-1 px-1 min-w-[1.2rem] h-5">
                    {notifications.length}
                  </Badge>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64 bg-white">
              {notifications.length > 0 ? (
                notifications.map((notification) => (
                  <DropdownMenuItem
                    key={notification.id}
                    onClick={() => handleNotificationClick(notification.id)}
                  >
                    <div className="flex flex-col">
                      <span className="font-medium">{notification.type}</span>
                      <span className="text-sm text-gray-500">
                        {notification.message}
                      </span>
                    </div>
                  </DropdownMenuItem>
                ))
              ) : (
                <DropdownMenuItem>No new Notification</DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="mr-2 md:mr-4 flex items-center bg-gray-100 rounded-full px-2 md:px-3 py-1">
            <FaMoneyBill className="h-4 w-4 md:h-5 md:w-5 mr-1 text-green-500" />
            <span className="font-semibold text-sm md:text-base text-gray-800">
              {balance.toFixed(2)}
            </span>
          </div>

          {!isSignedIn ? (
            <Button
              asChild
              className="bg-green-600 hover:bg-green-700 text-white text-sm md:text-base"
            >
              <Link href="/sign-in">
                Login
                <LogIn className="ml-1 md:ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Link>
            </Button>
          ) : (
            <div className="flex items-center gap-2">
              <UserButton
                appearance={{
                  elements: {
                    userButtonAvatarBox: "h-8 w-8",
                  },
                }}
              />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
