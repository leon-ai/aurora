import { useState } from 'react'
import {
  Checkbox as ArkCheckbox,
  CheckboxLabel,
  CheckboxInput,
  CheckboxControl,
  type CheckboxProps as ArkCheckboxProps
} from '@ark-ui/react'

import { Icon } from '../icon'

import './checkbox.sass'

export interface CheckboxProps
  extends Pick<
    ArkCheckboxProps,
    'value' | 'checked' | 'disabled' | 'required' | 'onChange'
  > {
  name: string
  label?: string
}

export function Checkbox({
  name,
  label,
  checked,
  value,
  disabled,
  required,
  onChange
}: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(checked)

  return (
    <ArkCheckbox
      className="aurora-checkbox"
      name={name}
      value={value}
      checked={isChecked}
      disabled={disabled}
      required={required}
      onChange={(event) => {
        setIsChecked(event.checked as boolean)

        if (onChange) {
          onChange(event)
        }
      }}
    >
      {(state) => (
        <>
          <CheckboxInput />
          <CheckboxControl className="aurora-checkbox-control">
            {state.isChecked ? (
              <Icon name="check" size="sm" animated />
            ) : (
              <div className="aurora-checkbox-placeholder" />
            )}
          </CheckboxControl>
          <CheckboxLabel className="aurora-checkbox-label">
            {label}
          </CheckboxLabel>
        </>
      )}
    </ArkCheckbox>
  )
}
