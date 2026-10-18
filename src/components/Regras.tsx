import { avisoRegras } from '../data/conteudo'
import { Icone } from './Icone'

/** Aviso pequeno embaixo do cartão da comunidade. As regras mesmo ficam na descrição do grupo */
export function Regras() {
  return (
    <p className="regras">
      <Icone nome="info" tamanho={13} />
      {avisoRegras}
    </p>
  )
}
