import classNames from 'clsx'

import { generateKeyId } from '../../lib/utils'
import { Flexbox, Icon, Loader } from '../..'

import './button.sass'

interface ButtonOnClickData {
  name: string | undefined
  value: string | number | undefined
}

export interface ButtonProps {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  children?: any
  // children?: React.ReactNode
  type?: 'button' | 'submit'
  iconName?: string
  iconPosition?: 'left' | 'right'
  secondary?: boolean
  danger?: boolean
  light?: boolean
  disabled?: boolean
  loading?: boolean
  name?: string
  value?: string | number | undefined
  onClick?: (data: ButtonOnClickData) => void
}

export function Button({
  children,
  type = 'button',
  iconName,
  iconPosition = 'left',
  secondary,
  danger,
  light,
  disabled,
  loading,
  name,
  value,
  onClick
}: ButtonProps) {
  let variant = 'primary'

  if (secondary) {
    variant = 'secondary'
  } else if (danger) {
    variant = 'danger'
  } else if (light) {
    variant = 'light'
  }

  return (
    <button
      key={`aurora-button_${generateKeyId()}`}
      type={type}
      name={name}
      value={value}
      className={classNames('aurora-button', {
        'aurora-button--disabled': disabled,
        'aurora-button--loading': loading,
        [`aurora-button--${variant}`]: variant
      })}
      disabled={disabled || loading}
      onClick={(event) => {
        if (type !== 'button') {
          return
        }

        event.preventDefault()

        const data = {
          name,
          value
        }

        if (onClick) {
          onClick(data)
        }
      }}
    >
      {loading ? (
        <Loader />
      ) : (
        <>
          {iconName && iconPosition === 'left' && (
            <Flexbox
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              gap="xs"
            >
              <Icon iconName={iconName} type="line" />
              {children}
            </Flexbox>
          )}
          {iconName && iconPosition === 'right' && (
            <Flexbox
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              gap="xs"
            >
              {children}
              <Icon iconName={iconName} type="line" />
            </Flexbox>
          )}
          {!iconName && children}
        </>
      )}
    </button>
  )
}
