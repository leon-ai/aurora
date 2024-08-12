import classNames from 'clsx'

import { generateKeyId } from '../../lib/utils'

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
      key={`aurora-progress_${generateKeyId()}`}
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
