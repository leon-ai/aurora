import {
  TabContent as ArkTabContent,
  type TabContentProps as ArkTabContentProps
} from '@ark-ui/react'

export interface TabContentProps
  extends Pick<ArkTabContentProps, 'children' | 'value'> {}

export function TabContent({ children, value }: TabContentProps) {
  return (
    <ArkTabContent className="aurora-tab-content" value={value}>
      {children}
    </ArkTabContent>
  )
}
