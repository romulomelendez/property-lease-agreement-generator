import type { Metadata } from "next"

import { Caveat } from "next/font/google"

import "./globals.css"

const caveat = Caveat({
  weight: ["400"],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Property Lease Agreement Generator",
  description: "",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
       className={caveat.className} 
       suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  )
}
