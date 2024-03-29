import React from 'react'
import 'tailwindcss/tailwind.css'

import { Tooltip } from '../'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Texto que aparecerá no botão
   */
  label: string
  /**
   * Inclui uma descrição de áudio para usuários de leitores de tela
   */
  audioDescription?: string
  /**
   * Estilo do botão
   */
  color?: 'primary' | 'secondary' | 'primary_outline' | 'secondary_outline'
  /**
   * Tamanho do botão
   */
  size?: 'large' | 'medium' | 'small'
  /**
   * Tooltip do botão
   */
  tooltip?: string
}

export const Button = (props: ButtonProps) => {

  const { size = 'medium', color = 'primary', label, audioDescription, tooltip } = props

  const sizes = {
    small: 'text-sm font-medium px-3 py-2',
    medium: 'px-5 py-2 font-medium',
    large: 'text-lg px-7 py-2 font-medium',
  }

  const styles = {
    primary: `cursor-pointer bg-primary-600 text-light-300 rounded-md hover:bg-primary-400`,
    primary_outline: `cursor-pointer text-primary-600 border-2 border-primary-600 rounded-md hover:bg-primary-50`,
    secondary: `cursor-pointer bg-secondary-400 text-eastern-blue-800 rounded-md hover:bg-secondary-300 `,
    secondary_outline: `cursor-pointer text-eastern-blue-800 border-2 border-secondary-300 rounded-md hover:bg-secondary-100 `,

  }

  return (
    <div>
      <Tooltip
        content={tooltip}>
        <button
          className={`${styles[color]} ${sizes[size]}`}
          aria-label={label}
          data-tooltip-id="my-tooltip"
          {...props}
        >
          {label}
          {/* Inclui uma descrição de áudio para usuários de leitores de tela */}
          {
            audioDescription &&
            <span className="sr-only" aria-live="polite" aria-hidden="true">
              {audioDescription}
            </span>
          }
        </button>
      </Tooltip>
    </div>

  )
}

