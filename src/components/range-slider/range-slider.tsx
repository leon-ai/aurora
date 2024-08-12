import { useState } from 'react'
import classNames from 'clsx'
import {
  Slider as ArkSlider,
  SliderControl,
  SliderRange,
  SliderThumb,
  SliderTrack,
  type SliderProps as ArkSliderProps
} from '@ark-ui/react'

import { generateKeyId } from '../../lib/utils'

import './range-slider.sass'

interface RangeSliderOnChangeData {
  name: string
  value: string | number | undefined
}

export interface RangeSliderProps
  extends Pick<
    ArkSliderProps,
    | 'value'
    | 'defaultValue'
    | 'max'
    | 'min'
    | 'step'
    | 'disabled'
    | 'orientation'
  > {
  name: string
  width?: number | string
  height?: number | string
  hiddenThumb?: boolean
  onChange?: (data: RangeSliderOnChangeData) => void
}

export function RangeSlider({
  name,
  width,
  height,
  value,
  defaultValue,
  max = 100,
  min = 0,
  step = 1,
  disabled,
  orientation = 'horizontal',
  hiddenThumb,
  onChange
}: RangeSliderProps) {
  const [newValue, setNewValue] = useState(value)
  const valueInPercent =
    Number(((Number(newValue) - min) / (max - min)).toFixed(2)) * 100

  return (
    <div
      key={`aurora-range-slider_${generateKeyId()}`}
      className="aurora-range-slider-container"
      style={{
        width,
        height
      }}
    >
      <ArkSlider
        className={classNames('aurora-range-slider', {
          'aurora-range-slider--hidden-thumb': hiddenThumb
        })}
        name={name}
        value={newValue}
        defaultValue={defaultValue}
        max={max}
        min={min}
        step={step}
        disabled={disabled}
        orientation={orientation}
        onChange={(event) => {
          setNewValue(event.value)

          const data = {
            name,
            value: event?.value
          }

          if (onChange) {
            onChange(data)
          }
        }}
      >
        <input type="hidden" name={name} value={newValue} />
        <SliderControl className="aurora-range-slider-control">
          <SliderTrack className="aurora-range-slider-track">
            <SliderRange
              className="aurora-range-slider-range"
              style={{
                [orientation === 'horizontal' ? 'width' : 'height']:
                  `${valueInPercent}%`
              }}
            />
          </SliderTrack>
          <SliderThumb className="aurora-range-slider-thumb" />
        </SliderControl>
      </ArkSlider>
    </div>
  )
}
