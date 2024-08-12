import { useState } from 'react'
import classNames from 'clsx'

import { Icon, Loader } from '../..'
import { type IconProps } from '../icon'
import { generateKeyId } from '../../lib/utils'

import './icon-button.sass'

interface IconButtonOnClickData {
  name: string | undefined
  value: string | number | undefined
  isActivated: boolean
}

export interface IconButtonProps {
  iconName: string
  name?: string
  value?: string | number | undefined
  type?: 'button' | 'submit'
  iconType?: IconProps['type']
  size?: IconProps['size']
  shape?: IconProps['bgShape']
  activated?: boolean
  secondary?: boolean
  danger?: boolean
  light?: boolean
  disabled?: boolean
  loading?: boolean
  onClick?: (data: IconButtonOnClickData) => void
}

export function IconButton({
  iconName,
  name,
  value,
  type = 'button',
  iconType = 'line',
  size,
  shape,
  activated,
  secondary,
  danger,
  light,
  disabled,
  loading,
  onClick
}: IconButtonProps) {
  const [isActivated, setIsActivated] = useState(activated || false)

  let variant = 'primary'

  if (danger) {
    variant = 'danger'
  }

  return (
    <button
      key={`aurora-icon-button_${generateKeyId()}`}
      type={type}
      name={name}
      value={value}
      className={classNames('aurora-icon-button aurora-button', {
        'aurora-button--secondary': secondary,
        'aurora-button--light': light,
        'aurora-button--disabled': disabled,
        'aurora-button--loading': loading,
        'aurora-icon-button--activated': isActivated,
        [`aurora-button--${variant}`]: variant,
        [`aurora-icon-button--${size}`]: size,
        [`aurora-icon-button--${shape}`]: shape
      })}
      disabled={disabled || loading}
      onClick={(event) => {
        if (type !== 'button') {
          return
        }

        event.preventDefault()

        if (onClick) {
          const data = {
            name,
            value
          }

          if (typeof activated === 'undefined') {
            onClick({
              ...data,
              isActivated: false
            })
          } else {
            const newActivatedState = !isActivated

            setIsActivated(newActivatedState)
            onClick({
              ...data,
              isActivated: newActivatedState
            })
          }
        }
      }}
    >
      {loading ? (
        <Loader />
      ) : (
        <>
          <Icon type={iconType} iconName={iconName} size={size} />
        </>
      )}
    </button>
  )
}
