import type { Metadata } from "next"
import { Whisper } from "next/font/google"
import "./globals.css"

const whisper = Whisper({
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
      <body className={whisper.className} suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
