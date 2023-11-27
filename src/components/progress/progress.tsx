import classNames from 'clsx'

import './progress.sass'

export interface ProgressProps {
  value: number
  orientation?: 'horizontal' | 'vertical'
  size?: 'sm' | 'md' | 'lg'
}

export function Progress({
  value,
  orientation = 'horizontal',
  size = 'md'
}: ProgressProps) {
  return (
    <div
      className={classNames('aurora-progress', {
        [`aurora-progress--${orientation}`]: orientation,
        [`aurora-progress--${size}`]: size
      })}
    >
      <div
        className="aurora-progress-value"
        style={{
          [orientation === 'horizontal' ? 'width' : 'height']: `${value}%`
        }}
      />
    </div>
  )
}
