import React from "react"

interface ButtonProps {
  /**
   * Button contents
   */
  label: string
  /**
   * Optional click handler
   */
  onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ label, onClick, ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      {...props}
      onClick={onClick}
    >
      {label}
    </button>
  )
}
