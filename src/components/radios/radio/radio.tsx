import {
  Radio as ArkRadio,
  RadioLabel,
  RadioInput,
  RadioControl,
  type RadioProps as ArkRadioProps
} from '@ark-ui/react'

export interface RadioProps extends Pick<ArkRadioProps, 'value' | 'disabled'> {
  name: string
  label: string
}

export function Radio({ name, label, value, disabled }: RadioProps) {
  return (
    <ArkRadio className="aurora-radio" value={value} disabled={disabled}>
      <RadioInput name={name} />
      <RadioControl className="aurora-radio-control" />
      <RadioLabel className="aurora-radio-label">{label}</RadioLabel>
    </ArkRadio>
  )
}
