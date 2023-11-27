import classNames from 'clsx'

import { Icon } from '../../..'

export interface ListItemProps {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  children: any
  // children: React.ReactNode
  align?: 'left' | 'center'
  onClick?: () => void
}

export function ListItem({ children, align, onClick }: ListItemProps) {
  let isClickable = false

  if (onClick) {
    isClickable = true
  }

  return (
    <li
      className={classNames('aurora-list-item', {
        'aurora-list-item--clickable': isClickable,
        [`aurora-list-item--${align}`]: align
      })}
      onClick={isClickable ? onClick : undefined}
    >
      {isClickable ? (
        <>
          {children}
          <div className="aurora-list-item-clickable-icon">
            <Icon name="arrow-right-double" />
          </div>
        </>
      ) : (
        children
      )}
    </li>
  )
}
