import { useState } from 'react'
import {
  Switch as ArkSwitch,
  SwitchLabel,
  SwitchInput,
  SwitchControl,
  SwitchThumb,
  type SwitchProps as ArkSwitchProps
} from '@ark-ui/react'

import './switch.sass'

export interface SwitchProps
  extends Pick<
    ArkSwitchProps,
    'value' | 'checked' | 'disabled' | 'required' | 'onChange'
  > {
  name: string
  label?: string
}

export function Switch({
  name,
  label,
  checked,
  value,
  disabled,
  required,
  onChange
}: SwitchProps) {
  const [isChecked, setIsChecked] = useState(checked)

  return (
    <ArkSwitch
      className="aurora-switch"
      name={name}
      value={value}
      checked={isChecked}
      disabled={disabled}
      required={required}
      onChange={(e) => {
        setIsChecked(e.checked)

        if (onChange) {
          onChange(e)
        }
      }}
    >
      <>
        <SwitchInput />
        <SwitchControl className="aurora-switch-control">
          <SwitchThumb className="aurora-switch-thumb" />
        </SwitchControl>
        <SwitchLabel className="aurora-switch-label">{label}</SwitchLabel>
      </>
    </ArkSwitch>
  )
}
