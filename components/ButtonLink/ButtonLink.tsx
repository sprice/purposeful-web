import React from "react"
import Link from "next/link"

interface ButtonLinkProps {
  /**
   * Button contents
   */
  label: string
  /**
   * Href
   */
  href: string
  /**
   * CSS classes
   */
  className?: string
}

/**
 * Primary UI component for user interaction
 */
const ButtonLink = ({ label, href, className, ...props }: ButtonLinkProps) => {
  return (
    <Link
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
      {...props}
      href={href}
    >
      {label}
    </Link>
  )
}

export default ButtonLink
