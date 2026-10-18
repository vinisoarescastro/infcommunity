import type { Secao } from '../data/conteudo'
import { Cartao } from './Cartao'

interface Props {
  secao: Secao
}

export function SecaoConteudo({ secao }: Props) {
  return (
    <section id={secao.id} className="secao" aria-labelledby={`${secao.id}-titulo`}>
      <h2 id={`${secao.id}-titulo`} className="secao__titulo">
        {secao.titulo}
      </h2>
      <ul className="secao__lista">
        {secao.itens.map((item) => (
          <li key={item.titulo}>
            <Cartao item={item} />
          </li>
        ))}
      </ul>
    </section>
  )
}
