import { generateKeyId } from '../../lib/utils'

import './form.sass'

export interface FormProps {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  children?: any
  // children?: React.ReactNode
  onSubmit: (data: Record<string, unknown>) => void
}

export function Form({ children, onSubmit }: FormProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)
    const data: Record<string, unknown> = {}

    for (const [key, value] of formData.entries()) {
      if (data[key] && key.endsWith('[]')) {
        if (Array.isArray(data[key])) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          ;(data[key] as []).push(value)
        } else {
          data[key] = [data[key], value]
        }
      } else {
        if (key.endsWith('[]')) {
          data[key] = [value]
        } else {
          data[key] = value
        }
      }
    }

    onSubmit(data)
  }

  return (
    <form
      autoComplete="off"
      className="aurora-form"
      onSubmit={handleSubmit}
      key={`aurora-form_${generateKeyId()}`}
    >
      {children}
    </form>
  )
}
