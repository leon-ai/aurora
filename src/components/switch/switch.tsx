import { useState } from 'react'
import {
  Switch as ArkSwitch,
  SwitchLabel,
  SwitchInput,
  SwitchControl,
  SwitchThumb,
  type SwitchProps as ArkSwitchProps
} from '@ark-ui/react'

import { generateKeyId } from '../../lib/utils'

import './switch.sass'

interface SwitchOnChangeData {
  name: string
  value: string | number | undefined
  isSwitched: boolean
}

export interface SwitchProps
  extends Pick<ArkSwitchProps, 'value' | 'checked' | 'disabled' | 'required'> {
  name: string
  label?: string
  onChange?: (data: SwitchOnChangeData) => void
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
      key={`aurora-switch_${generateKeyId()}`}
      className="aurora-switch"
      name={name}
      value={value}
      checked={isChecked}
      disabled={disabled}
      required={required}
      onChange={(event) => {
        setIsChecked(event.checked)

        const data = {
          name,
          value,
          isSwitched: event.checked
        }

        if (onChange) {
          onChange(data)
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
