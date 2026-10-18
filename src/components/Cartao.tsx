import { useId, useState } from 'react'
import { ArrowUpRight, ChevronDown } from 'lucide-react'
import { rotuloTipo, type Item } from '../data/conteudo'
import { Callout } from './Callout'
import { DialogoConfirmacao } from './DialogoConfirmacao'
import { Icone } from './Icone'

interface Props {
  item: Item
}

/**
 * Cartão usado no site todo: imagem grande à esquerda, título, subtítulo e uma seta. A imagem é o `logo`, a `imagem` (em círculo) ou o `icone`, nessa ordem.
 *
 * O clique vale pro cartão inteiro. Com `url`, abre o link e, se tiver detalhes, a seta abre e fecha eles. Sem `url`, o clique abre e fecha os detalhes. Com `confirmacao`, aparece um aviso antes e o link só abre se a pessoa confirmar.
 */
export function Cartao({ item }: Props) {
  const [aberto, setAberto] = useState(false)
  const [confirmando, setConfirmando] = useState(false)
  const idDetalhes = useId()
  const temOpcoes = Boolean(item.opcoes?.length)
  const temDetalhes = Boolean(item.descricao || item.nota || item.aviso || temOpcoes)
  const alternaPeloCartao = !item.url && temDetalhes
  const subtitulo = item.subtitulo ?? rotuloTipo[item.tipo]

  const classes = [
    'cartao',
    `cartao--cor-${item.cor ?? 'indigo'}`,
    (item.url || alternaPeloCartao) && 'cartao--clicavel',
    aberto && 'cartao--aberto',
  ]
    .filter(Boolean)
    .join(' ')

  const alternar = () => setAberto((valor) => !valor)
  const rotuloAlternar = `${aberto ? 'Ocultar' : 'Mostrar'} ${temOpcoes ? 'grupos' : 'detalhes'} de ${item.titulo}`

  return (
    <article className={classes}>
      <div className="cartao__cabecalho">
        {item.logo ? (
          <img className="cartao__visual" src={item.logo} alt="" />
        ) : item.imagem ? (
          <img className="cartao__visual cartao__visual--redondo" src={item.imagem} alt="" loading="lazy" />
        ) : (
          <span className="cartao__visual cartao__visual--icone">
            <Icone nome={item.icone} />
          </span>
        )}

        <div className="cartao__texto">
          <h3 className="cartao__titulo">
            {item.url ? (
              <a
                className="cartao__acao"
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${item.titulo}, ${rotuloTipo[item.tipo]}, abre em nova aba`}
                aria-haspopup={item.confirmacao ? 'dialog' : undefined}
                onClick={(evento) => {
                  if (!item.confirmacao) return
                  evento.preventDefault()
                  setConfirmando(true)
                }}
              >
                {item.titulo}
              </a>
            ) : alternaPeloCartao ? (
              <button
                type="button"
                className="cartao__acao"
                aria-expanded={aberto}
                aria-controls={idDetalhes}
                onClick={alternar}
              >
                {item.titulo}
              </button>
            ) : (
              item.titulo
            )}
          </h3>
          <p className="cartao__subtitulo">{subtitulo}</p>
          {!item.url && !temOpcoes && <p className="cartao__pendente">Peça o link a um admin</p>}
        </div>

        {item.url && temDetalhes ? (
          <button
            type="button"
            className="cartao__indicador cartao__indicador--botao"
            aria-expanded={aberto}
            aria-controls={idDetalhes}
            aria-label={rotuloAlternar}
            onClick={alternar}
          >
            <ChevronDown size={18} strokeWidth={2} aria-hidden="true" />
          </button>
        ) : (
          (item.url || alternaPeloCartao) && (
            <span className="cartao__indicador" aria-hidden="true">
              {item.url ? <ArrowUpRight size={18} strokeWidth={2} /> : <ChevronDown size={18} strokeWidth={2} />}
            </span>
          )
        )}
      </div>

      {temDetalhes && (
        <div id={idDetalhes} className="cartao__detalhes" aria-hidden={!aberto}>
          <div className="cartao__detalhes-recorte">
            <div className="cartao__detalhes-corpo">
              {item.descricao && <p className="cartao__descricao">{item.descricao}</p>}
              {temOpcoes && (
                <ul className="cartao__opcoes">
                  {item.opcoes?.map((opcao) => (
                    <li key={opcao.url}>
                      <a
                        className="cartao__opcao"
                        href={opcao.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${item.titulo}, ${opcao.titulo}, ${rotuloTipo[item.tipo]}, abre em nova aba`}
                      >
                        {opcao.titulo}
                        <ArrowUpRight size={15} strokeWidth={2} aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              )}
              {item.aviso && <Callout variante="aviso">{item.aviso}</Callout>}
              {item.nota && <Callout variante="nota">{item.nota}</Callout>}
            </div>
          </div>
        </div>
      )}

      {item.url && item.confirmacao && (
        <DialogoConfirmacao
          aberto={confirmando}
          titulo={item.confirmacao.titulo}
          texto={item.confirmacao.texto}
          rotuloConfirmar={item.confirmacao.botao}
          aoFechar={() => setConfirmando(false)}
          aoConfirmar={() => {
            setConfirmando(false)
            // Abre direto do clique, então o navegador não bloqueia como pop-up
            window.open(item.url, '_blank', 'noopener,noreferrer')
          }}
        />
      )}
    </article>
  )
}
