import { ReactNode } from "react"
import { Footer, Nav } from "../"

interface LayoutProps {
  /**
   * Children elements
   */
  children?: ReactNode
}

const Layout = ({ children, ...props }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Nav />
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
