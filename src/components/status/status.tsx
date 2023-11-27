import classNames from 'clsx'

import type { IconType } from '../../lib/types'
import { Icon, Flexbox } from '../..'

import './status.sass'

export interface StatusProps {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  children: any
  color?: 'blue' | 'green' | 'red' | 'yellow'
  iconName?: string
  iconType?: IconType
}

export function Status({
  children,
  color,
  iconName,
  iconType = 'line'
}: StatusProps) {
  return (
    <div
      className={classNames('aurora-status', {
        [`aurora-status--${color}`]: color
      })}
    >
      {iconName ? (
        <Flexbox
          alignItems="center"
          justifyContent="center"
          flexDirection="row"
          gap="xs"
        >
          <Icon name={iconName} type={iconType} size="sm" />
          <i>{children}</i>
        </Flexbox>
      ) : (
        children
      )}
    </div>
  )
}
