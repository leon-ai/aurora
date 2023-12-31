import classNames from 'clsx'

import { Text } from '../../..'

export interface ListHeaderProps {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  children: any
  // children: React.ReactNode
  align?: 'left' | 'center'
}

export function ListHeader({ children, align }: ListHeaderProps) {
  return (
    <div
      className={classNames('aurora-list-header', {
        [`aurora-list-header--${align}`]: align
      })}
    >
      <Text fontWeight="semi-bold">{children}</Text>
    </div>
  )
}
