import {
  TabIndicator,
  TabList as ArkTabList,
  type TabListProps as ArkTabListProps
} from '@ark-ui/react'

export interface TabListProps extends Pick<ArkTabListProps, 'children'> {}

export function TabList({ children }: TabListProps) {
  return (
    <ArkTabList className="aurora-tab-list">
      {children}
      <TabIndicator className="aurora-tab-indicator-container">
        <div className="aurora-tab-indicator" />
      </TabIndicator>
    </ArkTabList>
  )
}
