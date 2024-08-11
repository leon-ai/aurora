import {
  RadioGroup as ArkRadioGroup,
  type RadioGroupProps as ArkRadioGroupProps
} from '@ark-ui/react'

import './radio-group.sass'

interface RadioGroupOnChangeData {
  name: string
  value: string | number | undefined
}

export interface RadioGroupProps
  extends Pick<
    ArkRadioGroupProps,
    'value' | 'children' | 'defaultValue' | 'disabled'
  > {
  name: string
  onChange?: (data: RadioGroupOnChangeData) => void
}

export function RadioGroup({
  name,
  value,
  children,
  defaultValue,
  disabled,
  onChange
}: RadioGroupProps) {
  return (
    <ArkRadioGroup
      className="aurora-radio-group"
      name={name}
      defaultValue={defaultValue}
      value={value}
      disabled={disabled}
      onChange={(event) => {
        const data = {
          name,
          value: event.value
        }

        if (onChange) {
          onChange(data)
        }
      }}
      orientation="horizontal"
    >
      {children}
    </ArkRadioGroup>
  )
}
