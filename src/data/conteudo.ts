// Todo o conteúdo do site fica aqui, então pra mudar um link é só editar este arquivo. Item sem `url` mostra "Peça o link a um admin".

import type { NomeIcone } from '../components/Icone'

export type TipoItem = 'whatsapp' | 'drive' | 'instagram' | 'site' | 'dica'

/** Cor do ícone grande e dos botões de grupo. Sem cor, fica índigo */
export type CorItem = 'indigo' | 'azul' | 'violeta' | 'rosa' | 'laranja' | 'ambar' | 'verde' | 'ciano'

/** Um link da lista de um cartão com vários grupos */
export interface Opcao {
  titulo: string
  url: string
}

export interface Item {
  titulo: string
  /** Linha embaixo do título explicando o link. Sem ela, aparece só o tipo (tipo "WhatsApp") */
  subtitulo?: string
  url?: string
  tipo: TipoItem
  icone: NomeIcone
  cor?: CorItem
  /** Imagem com fundo próprio, mostrada como círculo grande (caminho dentro de public/, ex.: 'marcas/draco.png'). Use imagem quadrada só com o símbolo */
  imagem?: string
  /** Logo com fundo transparente, mostrado grande à esquerda (ex.: 'marcas/inf-ufg.png'). Ganha da `imagem` e do `icone` */
  logo?: string
  /** Texto que aparece ao abrir o cartão */
  descricao?: string
  /** Info extra, em tom neutro, ao abrir o cartão */
  nota?: string
  /** Alerta importante, destacado em amarelo, ao abrir o cartão */
  aviso?: string
  /** Vários links num cartão só (sem `url`). O clique abre a lista */
  opcoes?: Opcao[]
  /** Aviso que aparece antes de abrir o `url`. O link só abre se a pessoa confirmar */
  confirmacao?: Confirmacao
}

export interface Confirmacao {
  titulo: string
  texto: string
  /** Texto do botão que confirma e abre o link */
  botao: string
}

export interface Secao {
  id: string
  titulo: string
  itens: Item[]
}

export const rotuloTipo: Record<TipoItem, string> = {
  whatsapp: 'WhatsApp',
  drive: 'Google Drive',
  instagram: 'Instagram',
  site: 'Site',
  dica: 'Dica',
}

// Primeiro cartão da página, com o aviso das regras embaixo
export const comunidade: Item = {
  titulo: 'Comunidade INF/UFG',
  subtitulo: 'Todos os grupos do instituto no WhatsApp',
  url: 'https://chat.whatsapp.com/Gzfzunj9IWuBH1XhKxRgU5',
  tipo: 'whatsapp',
  icone: 'usuarios',
  cor: 'indigo',
  logo: 'marcas/inf-ufg.png',
  descricao: 'Ponto de entrada para todos os grupos: geral, cursos, vagas, mercado e egressos.',
  nota: 'Exclusiva para alunos do INF. Depois de entrar, toque em Grupos e solicite acesso aos que quiser.',
}

// Aviso embaixo do cartão da comunidade. As regras mesmo ficam na descrição do grupo
export const avisoRegras = 'Ao entrar, você aceita as regras da descrição do grupo.'

// Créditos do rodapé
export const autor = {
  nome: 'Vinicius Soares',
  linkedin: 'https://www.linkedin.com/in/vinisoarescastro',
  github: 'https://github.com/vinisoarescastro',
}

export const secoes: Secao[] = [
  {
    id: 'acesso-rapido',
    titulo: 'Acesso rápido',
    itens: [
      {
        titulo: 'Provas e materiais',
        subtitulo: 'Provas antigas, listas e livros no Google Drive',
        url: 'https://drive.google.com/drive/folders/1dsL72GUjXq-YjnstM7od4BcYvGuISR6a?usp=sharing',
        tipo: 'drive',
        icone: 'pasta',
        cor: 'azul',
        logo: 'marcas/google-drive.png',
        nota: 'Acesse com a sua conta @discente.ufg.br.',
        confirmacao: {
          titulo: 'Acesso restrito',
          // Hífen que não quebra (U+2011), pra "e-mail" não ficar partido em duas linhas
          texto: 'Entre com seu e‑mail @discente.ufg.br. Outros e‑mails não terão acesso ao Drive.',
          botao: 'Acessar o Drive',
        },
      },
      {
        titulo: 'Comunidade de Disciplinas INF/UFG',
        subtitulo: 'Todas as disciplinas do INF no semestre atual, no WhatsApp',
        url: 'https://chat.whatsapp.com/K3j2vBdF9y7DD7IgapkTov',
        tipo: 'whatsapp',
        icone: 'livro',
        cor: 'violeta',
        logo: 'marcas/disciplinas-balao.svg',
      },
      {
        titulo: 'Atlética',
        subtitulo: 'Times e treinos de todas as modalidades',
        url: 'https://chat.whatsapp.com/DkP2Umu5NisDDp1yGUTYaY',
        tipo: 'whatsapp',
        icone: 'trofeu',
        logo: 'marcas/unificada-logo.png',
        descricao: 'Comunidade esportiva com todas as modalidades. O time feminino está no grupo Avassaladoras.',
        nota: 'Para entrar em uma modalidade, abra a comunidade, toque em Grupos e solicite entrada.',
      },
    ],
  },
  {
    id: 'moradia',
    titulo: 'Moradia perto do campus',
    itens: [
      {
        titulo: 'Aluguel e kitnets',
        subtitulo: 'Anúncios de quartos e kitnets em 3 grupos no WhatsApp',
        tipo: 'whatsapp',
        icone: 'casa',
        cor: 'verde',
        logo: 'marcas/moradia-chave.svg',
        opcoes: [
          { titulo: 'Grupo 1', url: 'https://chat.whatsapp.com/D6KZaVhduMl70Hw4DLYLtA' },
          { titulo: 'Grupo 2', url: 'https://chat.whatsapp.com/GCkskejKOQG3XBskguGEmC' },
          { titulo: 'Grupo 3', url: 'https://chat.whatsapp.com/CxQ1NboCNvV8m1XDRkUhQH' },
        ],
      },
    ],
  },
  {
    id: 'redes',
    titulo: 'Redes sociais',
    itens: [
      {
        titulo: '@unificadaufg',
        subtitulo: 'Instagram da Atlética',
        url: 'https://instagram.com/unificadaufg',
        tipo: 'instagram',
        icone: 'arroba',
        logo: 'marcas/unificada-logo.png',
      },
      {
        titulo: '@draco_ufg',
        subtitulo: 'Instagram do Diretório Acadêmico',
        url: 'https://instagram.com/draco_ufg',
        tipo: 'instagram',
        icone: 'arroba',
        imagem: 'marcas/draco.png',
      },
    ],
  },
]
