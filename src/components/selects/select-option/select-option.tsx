import {
  SelectOption as ArkSelectOption,
  type SelectOptionProps as ArkSelectOptionProps
} from '@ark-ui/react'

import { generateKeyId } from '../../../lib/utils'

export interface SelectOptionProps
  extends Pick<ArkSelectOptionProps, 'label' | 'value'> {
  disabled?: boolean
  label: string
  value: string
}

export function SelectOption({
  label,
  value,
  disabled = false
}: SelectOptionProps) {
  return (
    <ArkSelectOption
      key={`aurora-select-option_${generateKeyId()}`}
      className="aurora-select-option"
      label={label}
      value={value}
      disabled={disabled}
    />
  )
}
