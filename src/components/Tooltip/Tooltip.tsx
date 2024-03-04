import React, { useEffect, useRef } from 'react'
import 'tailwindcss/tailwind.css'
import { getComponentPosition } from '../../utils'


interface TooltipProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  content?: string
}

export const Tooltip = (props: TooltipProps) => {

  const { content } = props
  const tooltipContainerRef = useRef<HTMLDivElement>(null)

  const position = {
    top: '-top-7',
    bottom: '-bottom-7'
  }

  const handlePosition = (): string => {
    return position[getComponentPosition(tooltipContainerRef?.current?.getBoundingClientRect())]
  }

  return (
    <div
      ref={tooltipContainerRef}
      className="relative inline-block group"
    >
      {props.children}
      {
        content &&
        <>
          <div></div>
          <p className={`${handlePosition()} shadow-lg bg-primary-50 text-eastern-blue-950 text-xs rounded-md opacity-0 group-hover:opacity-100 duration-300 left-1/2  -translate-x-1/2 p-1 absolute whitespace-nowrap`}>
            {content}
          </p>
        </>
      }
    </div>
  )
}
