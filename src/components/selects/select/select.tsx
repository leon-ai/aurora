import {
  Select as ArkSelect,
  SelectContent,
  SelectPositioner,
  SelectTrigger,
  Portal,
  type SelectProps as ArkSelectProps
} from '@ark-ui/react'
import classNames from 'clsx'

import { Flexbox, Icon } from '../../..'

import './select.sass'

interface Option {
  label: string
  value: string
}

export interface SelectProps
  extends Pick<
    ArkSelectProps,
    'defaultValue' | 'selectedOption' | 'disabled' | 'onChange'
  > {
  name: string
  selectedOption?: Option
  placeholder: string
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  children: any
}

export function Select({
  name,
  placeholder,
  children,
  selectedOption,
  defaultValue,
  disabled,
  onChange
}: SelectProps) {
  return (
    <ArkSelect
      closeOnSelect
      selectedOption={selectedOption}
      defaultValue={defaultValue}
      disabled={disabled}
      onChange={onChange}
    >
      {({ selectedOption }) => (
        <>
          <input
            type="hidden"
            name={name}
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            value={selectedOption?.value as string}
          />
          <SelectTrigger
            className={classNames('aurora-select-trigger', {
              'aurora-select-trigger--selected': selectedOption as boolean
            })}
          >
            <Flexbox
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <div className="aurora-select-trigger-placeholder-container">
                {selectedOption
                  ? (selectedOption as Option).label
                  : placeholder}
              </div>
              <div className="aurora-select-trigger-icon-container">
                <Icon name="arrow-down-s" />
              </div>
            </Flexbox>
          </SelectTrigger>
          <Portal>
            <SelectPositioner>
              <SelectContent className="aurora-select-content">
                {children}
              </SelectContent>
            </SelectPositioner>
          </Portal>
        </>
      )}
    </ArkSelect>
  )
}
