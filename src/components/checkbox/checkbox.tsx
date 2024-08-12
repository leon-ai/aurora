import { useState } from 'react'
import {
  Checkbox as ArkCheckbox,
  CheckboxLabel,
  CheckboxInput,
  CheckboxControl,
  type CheckboxProps as ArkCheckboxProps
} from '@ark-ui/react'

import { Icon } from '../icon'
import { generateKeyId } from '../../lib/utils'

import './checkbox.sass'

interface CheckboxOnChangeData {
  name: string
  value: string | undefined
  isChecked: boolean
}

export interface CheckboxProps
  extends Pick<
    ArkCheckboxProps,
    'value' | 'checked' | 'disabled' | 'required'
  > {
  name: string
  label?: string
  onChange?: (data: CheckboxOnChangeData) => void
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
      key={`aurora-checkbox_${generateKeyId()}`}
      className="aurora-checkbox"
      name={name}
      value={value}
      checked={isChecked}
      disabled={disabled}
      required={required}
      onChange={(event) => {
        setIsChecked(event.checked as boolean)

        const data = {
          name,
          value,
          isChecked: !!event.checked
        }

        if (onChange) {
          onChange(data)
        }
      }}
    >
      {(state) => (
        <>
          <CheckboxInput />
          <CheckboxControl className="aurora-checkbox-control">
            {state.isChecked ? (
              <Icon iconName="check" size="sm" animated />
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
