import { useState } from 'react'
import classNames from 'clsx'

import { Text, Icon } from '../..'

import './input.sass'

export interface InputProps {
  name: string
  placeholder: string
  required?: boolean
  value?: string
  type?:
    | 'text'
    | 'password'
    | 'email'
    | 'tel'
    | 'url'
    | 'number'
    | 'date'
    | 'time'
    | 'datetime-local'
    | 'month'
    | 'week'
    | 'color'
  iconName?: string
  hint?: string
  disabled?: boolean
  height?: number | 'auto'
  minLength?: number
  maxLength?: number
  min?: number
  max?: number
  step?: number
  pattern?: string
  multiline?: boolean
  autofocus?: boolean
  onChange?: (value: string) => void
}

export function Input({
  name,
  placeholder,
  required = false,
  type = 'text',
  iconName,
  hint,
  value,
  disabled,
  height = 'auto',
  minLength,
  maxLength,
  pattern,
  multiline,
  autofocus,
  onChange
}: InputProps) {
  const [inputValue, setInputValue] = useState(value || '')

  if (!multiline) {
    if (!maxLength) {
      maxLength = 64
    }

    if (height !== 'auto') {
      height = 'auto'
    }
  }

  return (
    <div className="aurora-input-container">
      {multiline ? (
        <textarea
          name={name}
          placeholder={placeholder}
          required={required}
          value={inputValue}
          disabled={disabled}
          autoFocus={autofocus}
          minLength={minLength}
          maxLength={maxLength}
          onChange={(e) => {
            setInputValue(e.target.value)

            if (onChange) {
              onChange(e.target.value)
            }
          }}
          style={{ height }}
          className={classNames('aurora-input', {
            'aurora-input--multiline': true,
            'aurora-input--disabled': disabled,
            'aurora-input--with-icon': !!iconName
          })}
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
          value={inputValue}
          disabled={disabled}
          autoFocus={autofocus}
          minLength={minLength}
          maxLength={maxLength}
          pattern={pattern}
          onChange={(e) => {
            setInputValue(e.target.value)

            if (onChange) {
              onChange(e.target.value)
            }
          }}
          className={classNames('aurora-input', {
            'aurora-input--disabled': disabled,
            'aurora-input--with-icon': !!iconName
          })}
        />
      )}
      {iconName && (
        <div className="aurora-input-icon-container">
          <Icon iconName={iconName} type="fill" />
        </div>
      )}
      {hint && (
        <div className="aurora-input-hint-container">
          <Text fontSize="xs" tertiary>
            {hint}
          </Text>
        </div>
      )}
    </div>
  )
}
