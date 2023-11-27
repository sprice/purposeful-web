import { SignUp } from "@clerk/nextjs"
import { Layout } from "@/components"

export default function SignUpPage() {
  return (
    <Layout>
      <div className="flex items-center justify-center h-screen">
        <SignUp afterSignInUrl={"/new-user"} redirectUrl={"/new-user"} />
      </div>
    </Layout>
  )
}
