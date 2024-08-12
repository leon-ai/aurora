import classNames from 'clsx'

import { generateKeyId } from '../../lib/utils'

import './widget-wrapper.sass'

export interface WidgetWrapperProps {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  children: any
  noPadding?: boolean
  paddingTop?: boolean
  paddingBottom?: boolean
  paddingLeft?: boolean
  paddingRight?: boolean
}

export function WidgetWrapper({
  children,
  noPadding,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight
}: WidgetWrapperProps) {
  return (
    <div
      key={`aurora-widget-wrapper_${generateKeyId()}`}
      className={classNames('aurora-widget-wrapper', {
        'aurora-widget-wrapper--no-padding': noPadding,
        'aurora-widget-wrapper--padding-top': paddingTop,
        'aurora-widget-wrapper--padding-bottom': paddingBottom,
        'aurora-widget-wrapper--padding-left': paddingLeft,
        'aurora-widget-wrapper--padding-right': paddingRight
      })}
    >
      {children}
    </div>
  )
}
