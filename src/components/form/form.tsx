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
    const data = Object.fromEntries(formData)

    onSubmit(data)
  }

  return (
    <form autoComplete="off" className="aurora-form" onSubmit={handleSubmit}>
      {children}
    </form>
  )
}
