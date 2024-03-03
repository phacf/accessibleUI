import React from 'react'
import 'tailwindcss/tailwind.css'

export interface TooltipProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  content?: string
}

export const Tooltip = (props: TooltipProps) => {

  const { content } = props

  return (
    <div
    className="relative inline-block group"
    >
      {props.children}
      {
        content && <p className='absolute left-1/2 -translate-x-1/2 p-1 -bottom-8 bg-primary-50 text-eastern-blue-950 text-xs rounded-md opacity-0 group-hover:opacity-100 duration-300'>
          {content}
        </p>
      }
    </div>
  )
}

