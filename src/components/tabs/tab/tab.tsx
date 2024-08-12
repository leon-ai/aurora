import {
  TabTrigger,
  type TabTriggerProps as ArkTabTriggerProps
} from '@ark-ui/react'

import { generateKeyId } from '../../../lib/utils'

export interface TabProps
  extends Pick<ArkTabTriggerProps, 'children' | 'value' | 'disabled'> {}

export function Tab({ children, value, disabled }: TabProps) {
  return (
    <TabTrigger
      key={`aurora-tab_${generateKeyId()}`}
      className="aurora-tab"
      value={value}
      disabled={disabled}
    >
      {children}
    </TabTrigger>
  )
}
