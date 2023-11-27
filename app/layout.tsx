import "./globals.css"
import { Inter, Plus_Jakarta_Sans, Roboto_Mono, Domine } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
})
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-robotoMono",
  display: "swap",
})

const domine = Domine({
  subsets: ["latin"],
  variable: "--font-domine",
  display: "swap",
})

export const metadata = {
  title: "Purposeful",
  description: "We are Purposeful",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider afterSignInUrl="/dashboard" afterSignUpUrl="/new-user">
      <html
        lang="en"
        className={`${inter.variable} ${jakarta.variable} ${robotoMono.variable} ${domine.variable}`}
      >
        <body>{children}</body>
      </html>
    </ClerkProvider>
  )
}
