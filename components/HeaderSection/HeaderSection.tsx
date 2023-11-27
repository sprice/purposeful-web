import React, { ReactNode } from "react"

interface HeaderSectionProps {
  /**
   * Section Eyebrow
   */
  eyebrow: string
  /**
   * Section Title
   */
  title: string
  /**
   * Section Description
   */
  description: string
  /**
   * Children elements
   */
  children: ReactNode
}

/**
 * Primary UI component for user interaction
 */
const HeaderSection = ({
  eyebrow,
  title,
  description,
  children,
  ...props
}: HeaderSectionProps) => {
  return (
    <div className="py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="text-base font-semibold leading-7 text-indigo-600">
            {eyebrow}
          </p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">{description}</p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
    </div>
  )
}

export default HeaderSection
