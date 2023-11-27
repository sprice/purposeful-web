import React from "react"
import Image from "next/image"

interface LogoProps {
  /**
   * Font size
   */
  fontSize?: string
}

// @TODO: Ensure the image scales to the size of the text

/**
 * Primary UI component for user interaction
 */
const Logo = ({ fontSize, ...props }: LogoProps) => {
  return (
    <div className={`flex items-center text-3xl`}>
      <div className={`mr-1 flex-shrink-0 h-full align-middle`}>
        <Image
          src="/images/logo-mark.png"
          width={26}
          height={26}
          alt="Grid of nine colorful squares"
        />
      </div>
      <h1
        className={`font-logo font-light text-3xl block ${fontSize}`}
        {...props}
      >
        Purposeful
      </h1>
    </div>
  )
}

export default Logo
