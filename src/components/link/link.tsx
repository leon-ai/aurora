import classNames from 'clsx'

import { Text } from '../..'
import { type Size } from '../../lib/types'
import { generateKeyId } from '../../lib/utils'

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
    <a
      className={classNames('aurora-link')}
      href={href}
      target="_blank"
      key={`aurora-link_${generateKeyId()}`}
    >
      <Text fontSize={fontSize}>{children}</Text>
    </a>
  )
}
