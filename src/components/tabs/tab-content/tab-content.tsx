import {
  TabContent as ArkTabContent,
  type TabContentProps as ArkTabContentProps
} from '@ark-ui/react'

import { generateKeyId } from '../../../lib/utils'

export interface TabContentProps
  extends Pick<ArkTabContentProps, 'children' | 'value'> {}

export function TabContent({ children, value }: TabContentProps) {
  return (
    <ArkTabContent
      key={`aurora-tab-content_${generateKeyId()}`}
      className="aurora-tab-content"
      value={value}
    >
      {children}
    </ArkTabContent>
  )
}
