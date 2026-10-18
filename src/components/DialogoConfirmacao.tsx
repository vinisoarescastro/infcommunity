import { useEffect, useId, useRef } from 'react'
import { Mail } from 'lucide-react'

interface Props {
  aberto: boolean
  titulo: string
  texto: string
  rotuloConfirmar: string
  aoConfirmar: () => void
  aoFechar: () => void
}

/** Janela de confirmação com o <dialog> nativo. Prende o foco, fecha com Esc ou clicando fora e o leitor de tela anuncia */
export function DialogoConfirmacao({ aberto, titulo, texto, rotuloConfirmar, aoConfirmar, aoFechar }: Props) {
  const ref = useRef<HTMLDialogElement>(null)
  const refConfirmar = useRef<HTMLButtonElement>(null)
  const idTitulo = useId()
  const idTexto = useId()

  useEffect(() => {
    const dialogo = ref.current
    if (!dialogo) return
    if (aberto && !dialogo.open) {
      dialogo.showModal()
      // O showModal foca o Cancelar, então joga o foco pro botão principal (aí é só dar Enter)
      refConfirmar.current?.focus()
    } else if (!aberto && dialogo.open) dialogo.close()
  }, [aberto])

  return (
    <dialog
      ref={ref}
      className="dialogo"
      aria-labelledby={idTitulo}
      aria-describedby={idTexto}
      onClose={aoFechar}
      onClick={(evento) => {
        // Clique direto no <dialog> só pode ser no fundo escuro, então fecha
        if (evento.target === evento.currentTarget) aoFechar()
      }}
    >
      <div className="dialogo__conteudo">
        <span className="dialogo__icone">
          <Mail size={22} strokeWidth={1.75} aria-hidden="true" />
        </span>
        <h2 id={idTitulo} className="dialogo__titulo">
          {titulo}
        </h2>
        <p id={idTexto} className="dialogo__texto">
          {texto}
        </p>
        <div className="dialogo__acoes">
          <button type="button" className="dialogo__botao" onClick={aoFechar}>
            Cancelar
          </button>
          <button
            ref={refConfirmar}
            type="button"
            className="dialogo__botao dialogo__botao--principal"
            onClick={aoConfirmar}
          >
            {rotuloConfirmar}
          </button>
        </div>
      </div>
    </dialog>
  )
}
