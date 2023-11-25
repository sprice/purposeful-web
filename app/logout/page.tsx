import { auth, currentUser } from "@clerk/nextjs"
import { redirect } from "next/navigation"

const logout = async () => {
  const user = await currentUser()
  if (!user) {
    throw new Error("User not found")
  }

  // @TODO: add clerk logout call

  redirect("/")
}

const Logout = async () => {
  await logout()
  return <div>...loading</div>
}

export default Logout
