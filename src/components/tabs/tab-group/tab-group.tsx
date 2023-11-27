import classNames from 'clsx'
import { Tabs, type TabsProps as ArkTabsProps } from '@ark-ui/react'

import './tab-group.sass'

export interface TabGroupProps
  extends Pick<ArkTabsProps, 'children' | 'defaultValue' | 'onChange'> {
  size?: 'sm' | 'md' | 'lg'
}

export function TabGroup({
  children,
  defaultValue,
  onChange,
  size
}: TabGroupProps) {
  return (
    <Tabs
      className={classNames('aurora-tab-group', {
        [`aurora-tab-group--${size}`]: size
      })}
      defaultValue={defaultValue}
      onChange={onChange}
      orientation="horizontal"
    >
      {children}
    </Tabs>
  )
}
