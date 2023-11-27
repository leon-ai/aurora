import type React from 'react'
import classNames from 'clsx'

import './card.sass'

export interface CardProps {
  children: React.ReactNode
  fullWidth?: boolean
}

export function Card({ children, fullWidth }: CardProps) {
  return (
    <div
      className={classNames('aurora-card', {
        'aurora-card--full-width': fullWidth
      })}
    >
      {children}
    </div>
  )
}
