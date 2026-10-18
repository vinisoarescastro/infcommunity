import {
  AtSign,
  BookOpen,
  FolderOpen,
  House,
  Info,
  Lightbulb,
  TriangleAlert,
  Trophy,
  Users,
  type LucideIcon,
} from 'lucide-react'

// Nomes curtos usados no data/conteudo.ts, assim o conteúdo não depende da biblioteca de ícones
const icones = {
  alerta: TriangleAlert,
  arroba: AtSign,
  casa: House,
  dica: Lightbulb,
  info: Info,
  livro: BookOpen,
  pasta: FolderOpen,
  trofeu: Trophy,
  usuarios: Users,
} satisfies Record<string, LucideIcon>

export type NomeIcone = keyof typeof icones

interface Props {
  nome: NomeIcone
  tamanho?: number
}

export function Icone({ nome, tamanho = 20 }: Props) {
  const Componente = icones[nome]
  return <Componente size={tamanho} strokeWidth={1.75} aria-hidden="true" />
}
