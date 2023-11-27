import classNames from 'clsx'

import './card.sass'

export interface CardProps {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  children: any
  // children: React.ReactNode
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
