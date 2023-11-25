import { Layout, Hero, PrimaryCTA, Testimonials } from "@/components"

export default async function Home() {
  return (
    <Layout>
      <Hero />
      <Testimonials />
      <PrimaryCTA />
    </Layout>
  )
}
