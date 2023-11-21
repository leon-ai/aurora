import type React from 'react'
import {
  Select as ArkSelect,
  SelectContent,
  SelectPositioner,
  SelectTrigger,
  Portal,
  type SelectProps
} from '@ark-ui/react'
import classNames from 'classnames'

import { Flexbox, Icon } from '../../..'

import './select.sass'

interface Option {
  label: string
  value: string
}

interface Props
  extends Pick<
    SelectProps,
    'defaultValue' | 'selectedOption' | 'disabled' | 'onChange'
  > {
  selectedOption?: Option
  placeholder: string
  children: React.ReactNode
}

export function Select({
  placeholder,
  children,
  selectedOption,
  defaultValue,
  disabled,
  onChange
}: Props) {
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
