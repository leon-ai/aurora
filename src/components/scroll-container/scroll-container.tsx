import classNames from 'clsx'

import './scroll-container.sass'

export interface ScrollContainerProps {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  children: any
  orientation?: 'vertical' | 'horizontal'
  width?: number | string
  height?: number | string
}

export function ScrollContainer({
  children,
  orientation = 'horizontal',
  width,
  height
}: ScrollContainerProps) {
  return (
    <div
      className={classNames(
        'aurora-scroll-container',
        `aurora-scroll-container--${orientation}`
      )}
      style={{
        width,
        height
      }}
    >
      <div className="aurora-scroll-container-scrollview">{children}</div>
      <div className="aurora-scroll-container-mask" />
    </div>
  )
}
