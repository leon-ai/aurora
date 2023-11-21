import {
  SelectOption as ArkSelectOption,
  type SelectOptionProps
} from '@ark-ui/react'

interface Props extends Pick<SelectOptionProps, 'label' | 'value'> {
  disabled?: boolean
}

export function SelectOption({ label, value, disabled = false }: Props) {
  return (
    <ArkSelectOption
      className="aurora-select-option"
      label={label}
      value={value}
      disabled={disabled}
    />
  )
}
