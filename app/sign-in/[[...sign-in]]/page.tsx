import { SignIn } from "@clerk/nextjs"
import { Layout } from "@/components"

export default function SignInPage() {
  return (
    <Layout>
      <div className="flex items-center justify-center h-screen">
        <SignIn />
      </div>
    </Layout>
  )
}
