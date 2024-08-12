import { generateKeyId } from '../../../lib/utils'

import './list.sass'

export interface ListProps {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  children: any
  // children: React.ReactNode
}

export function List({ children }: ListProps) {
  return (
    <ul className="aurora-list" key={`aurora-list_${generateKeyId()}`}>
      {children}
    </ul>
  )
}
