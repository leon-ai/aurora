import classNames from 'clsx'

import { generateKeyId } from '../../../lib/utils'
import { Icon } from '../../..'

interface ListItemOnClickData {
  name: string | undefined
  value: string | number | undefined
}

export interface ListItemProps {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  children: any
  // children: React.ReactNode
  align?: 'left' | 'center'
  name?: string
  value?: string | number | undefined
  onClick?: (data: ListItemOnClickData) => void
}

export function ListItem({
  children,
  align,
  name,
  value,
  onClick
}: ListItemProps) {
  let isClickable = false

  if (onClick) {
    isClickable = true
  }

  return (
    <li
      key={`aurora-list-item_${generateKeyId()}`}
      data-aurora-name={name}
      value={value}
      className={classNames('aurora-list-item', {
        'aurora-list-item--clickable': isClickable,
        [`aurora-list-item--${align}`]: align
      })}
      onClick={(event) => {
        if (!isClickable) {
          return
        }

        event.preventDefault()

        const data = {
          name,
          value
        }

        if (onClick) {
          onClick(data)
        }
      }}
    >
      {isClickable ? (
        <>
          {children}
          <div className="aurora-list-item-clickable-icon">
            <Icon iconName="arrow-right-double" />
          </div>
        </>
      ) : (
        children
      )}
    </li>
  )
}
