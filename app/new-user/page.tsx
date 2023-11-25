import { prisma } from "@/utils/db"
import { auth, currentUser } from "@clerk/nextjs"
import { redirect } from "next/navigation"

const createNewUser = async () => {
  const user = await currentUser()
  if (!user) {
    throw new Error("User not found")
  }

  const match = await prisma.user.findUnique({
    where: {
      clerkId: user.id as string,
    },
  })

  console.log("user", user)

  if (!match) {
    await prisma.user.create({
      data: {
        clerkId: user.id,
        email: user?.emailAddresses[0].emailAddress,
      },
    })
  }

  redirect("/dashboard")
}

const NewUser = async () => {
  await createNewUser()
  return <div>...loading</div>
}

export default NewUser
