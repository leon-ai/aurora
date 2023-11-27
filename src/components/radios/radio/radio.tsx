import {
  Radio as ArkRadio,
  RadioLabel,
  RadioInput,
  RadioControl,
  type RadioProps as ArkRadioProps
} from '@ark-ui/react'

export interface RadioProps extends Pick<ArkRadioProps, 'value' | 'disabled'> {
  label: string
}

export function Radio({ label, value, disabled }: RadioProps) {
  return (
    <ArkRadio className="aurora-radio" value={value} disabled={disabled}>
      <RadioInput />
      <RadioControl className="aurora-radio-control" />
      <RadioLabel className="aurora-radio-label">{label}</RadioLabel>
    </ArkRadio>
  )
}
