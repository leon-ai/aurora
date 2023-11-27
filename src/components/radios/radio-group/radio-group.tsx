import {
  RadioGroup as ArkRadioGroup,
  type RadioGroupProps as ArkRadioGroupProps
} from '@ark-ui/react'

import './radio-group.sass'

export interface RadioGroupProps
  extends Pick<
    ArkRadioGroupProps,
    'children' | 'defaultValue' | 'disabled' | 'onChange'
  > {}

export function RadioGroup({
  children,
  defaultValue,
  disabled,
  onChange
}: RadioGroupProps) {
  return (
    <ArkRadioGroup
      className="aurora-radio-group"
      defaultValue={defaultValue}
      disabled={disabled}
      onChange={onChange}
      orientation="horizontal"
    >
      {children}
    </ArkRadioGroup>
  )
}
