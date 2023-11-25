import { ReactNode } from "react"
import { Footer, Nav } from "@/components"

interface LayoutProps {
  /**
   * Children elements
   */
  children?: ReactNode
}

const Layout = ({ children, ...props }: LayoutProps) => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Nav />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
