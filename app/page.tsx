import { auth } from "@clerk/nextjs"
import Link from "next/link"
import { Nav } from "@/components"

export default async function Home() {
  const { userId } = await auth()
  const href = userId ? "/dashboard" : "/new-user"

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Nav />
      <main>
        <h1 className="text-6xl mb-4">Purposeful</h1>
      </main>
    </div>
  )
}
