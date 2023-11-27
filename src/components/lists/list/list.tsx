import type React from 'react'

import './list.sass'

export interface ListProps {
  children: React.ReactNode
}

export function List({ children }: ListProps) {
  return <ul className="aurora-list">{children}</ul>
}
