"use client"
import React from "react"
import Link from "next/link"
import { ButtonLink, Logo } from ".."
import { UserButton } from "@clerk/nextjs"
import { useAuth } from "@clerk/nextjs"

interface NavProps {}

const Nav = ({ ...props }: NavProps): JSX.Element => {
  const { isLoaded, userId, sessionId, getToken } = useAuth()

  if (!isLoaded) {
    return <></>
  }

  return (
    <nav className="flex justify-between items-center p-5">
      <div className="text-2xl font-bold flex-grow-0">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div className="flex-grow"></div>
      {sessionId ? (
        <>
          <Link href="/dashboard" className="mr-5">
            Dashboard
          </Link>
          <UserButton afterSignOutUrl="/" />
        </>
      ) : (
        <>
          <ButtonLink className="mr-5" label="Sign In" href="/sign-in" />
          <ButtonLink label="Sign Up" href="/sign-up" />
        </>
      )}
    </nav>
  )
}

export default Nav
