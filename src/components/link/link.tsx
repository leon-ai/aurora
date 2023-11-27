import classNames from 'clsx'

import { Text } from '../..'
import { type Size } from '../../lib/types'

import './link.sass'

export interface LinkProps {
  href: string
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  children: any
  // children: React.ReactNode
  fontSize?: Size
}

export function Link({ href, children, fontSize }: LinkProps) {
  return (
    <a className={classNames('aurora-link')} href={href} target="_blank">
      <Text fontSize={fontSize}>{children}</Text>
    </a>
  )
}
