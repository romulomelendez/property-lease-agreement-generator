import type { Metadata } from "next"

import { Caveat, Great_Vibes, Dancing_Script, Allura } from "next/font/google"

import "./globals.css"

const caveat = Caveat({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-caveat"
})

const great_vibes = Great_Vibes({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-vibes"
})

const dancing_script = Dancing_Script({
  weight: ["500"],
  subsets: ["latin"],
  variable: "--font-dancing"
})

const allura = Allura({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-allura"
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
       className={`
        ${caveat.variable}
        ${great_vibes.variable}
        ${dancing_script.variable}
        ${allura.variable}
        font-caveat
      `} 
       suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  )
}
