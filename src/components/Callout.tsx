import type { ReactNode } from 'react'
import { Info, TriangleAlert } from 'lucide-react'

interface Props {
  variante: 'nota' | 'aviso'
  children: ReactNode
}

export function Callout({ variante, children }: Props) {
  const IconeCallout = variante === 'aviso' ? TriangleAlert : Info
  return (
    <p className={`callout callout--${variante}`}>
      <IconeCallout size={16} strokeWidth={2} aria-hidden="true" className="callout__icone" />
      <span>{children}</span>
    </p>
  )
}
