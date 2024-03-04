import React, { ReactNode } from 'react'
import 'tailwindcss/tailwind.css'

interface HeaderProps {
  children: ReactNode;
}

export const Header = (props: HeaderProps) => {
  return <header>
    <h1>
      {props.children}
    </h1>
  </header>
}
