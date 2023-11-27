import {
  SelectOption as ArkSelectOption,
  type SelectOptionProps as ArkSelectOptionProps
} from '@ark-ui/react'

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
      className="aurora-select-option"
      label={label}
      value={value}
      disabled={disabled}
    />
  )
}
