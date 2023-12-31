import classNames from 'clsx'

import type { Size } from '../../lib/types'

import './text.sass'

/*const FONT_SIZES = {
  XS: 'xs',
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
  XL: 'xl'
} as const*/

export interface TextProps {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  children: any
  // fontSize?: typeof FONT_SIZES[keyof typeof FONT_SIZES]
  fontSize?: Size
  fontWeight?: 'regular' | 'semi-bold'
  secondary?: boolean
  tertiary?: boolean
  textAlign?: 'left' | 'center' | 'right'
}

export function Text({
  children,
  fontSize,
  fontWeight,
  secondary,
  tertiary,
  textAlign
}: TextProps) {
  return (
    <p
      className={classNames('aurora-text', {
        'aurora-text--secondary': secondary,
        'aurora-text--tertiary': tertiary,
        [`aurora-text--${textAlign}`]: textAlign,
        [`aurora-text--${fontSize}`]: fontSize,
        [`aurora-text--${fontWeight}`]: fontWeight
      })}
    >
      {children}
    </p>
  )
}
