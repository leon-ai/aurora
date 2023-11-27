import {
  TabTrigger,
  type TabTriggerProps as ArkTabTriggerProps
} from '@ark-ui/react'

export interface TabProps
  extends Pick<ArkTabTriggerProps, 'children' | 'value' | 'disabled'> {}

export function Tab({ children, value, disabled }: TabProps) {
  return (
    <TabTrigger className="aurora-tab" value={value} disabled={disabled}>
      {children}
    </TabTrigger>
  )
}
