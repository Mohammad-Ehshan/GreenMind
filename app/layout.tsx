'use client'

import { useEffect, useState } from "react"
import { Inter } from 'next/font/google'
import "./globals.css"
import { Toaster } from "react-hot-toast"
import Header from "@/components/Header"
import { getAvailableRewards, getUserByEmail } from "@/utils/db/actions"
import { ClerkProvider } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [totalEarning, setTotalEarnings] = useState(0)
  const pathname = usePathname()
  const noHeaderPaths = ['/sign-in', '/sign-up']

  useEffect(() => {
    const fetchTotalEarnings = async () => {
      try {
        const userEmail = localStorage.getItem('userEmail')
        if (userEmail) {
          const user = await getUserByEmail(userEmail)
          if (user) {
            const availableRewards = await getAvailableRewards(user.id) as any;
            setTotalEarnings(availableRewards);
          }
        }
      } catch (error) {
        console.error('Error fetching total earning', error)
      }
    }
    fetchTotalEarnings()
  }, [])

  return (
    <ClerkProvider>
      <html lang="en" className="overflow-x-hidden">
        <body className={inter.className}>
          {!noHeaderPaths.includes(pathname) && <Header totalEarnings={totalEarning} />}
          <main>{children}</main>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  )
}