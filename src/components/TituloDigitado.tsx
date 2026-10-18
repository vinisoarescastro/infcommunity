import { useEffect, useState } from 'react'

const LINHA_1 = 'Hello, world.'
const LINHA_2 = 'Hello, INF.'
const TOTAL = LINHA_1.length + LINHA_2.length

function prefereMenosMovimento() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function Cursor() {
  return <span className="digitacao__cursor" />
}

/**
 * Título que se digita sozinho uma vez e deixa o cursor piscando no fim. O que falta digitar fica invisível mas ocupa espaço, então nada pula.
 *
 * O leitor de tela lê o texto todo pelo .sr-only. Com "reduzir movimento", já aparece completo.
 */
export function TituloDigitado() {
  const [digitados, setDigitados] = useState(() => (prefereMenosMovimento() ? TOTAL : 0))
  const terminou = digitados >= TOTAL

  useEffect(() => {
    if (terminou) return
    // Pausa no começo e na troca de linha, e um ritmo meio irregular, como gente digitando
    const atraso = digitados === 0 ? 500 : digitados === LINHA_1.length ? 450 : 55 + Math.random() * 70
    const timer = window.setTimeout(() => setDigitados((n) => n + 1), atraso)
    return () => window.clearTimeout(timer)
  }, [digitados, terminou])

  const n1 = Math.min(digitados, LINHA_1.length)
  const n2 = Math.max(0, digitados - LINHA_1.length)
  const naLinha2 = digitados > LINHA_1.length

  return (
    <h1 className="hero__titulo">
      <span className="sr-only">
        {LINHA_1} {LINHA_2}
      </span>
      <span className="digitacao" aria-hidden="true">
        <span>
          {LINHA_1.slice(0, n1)}
          {!naLinha2 && <Cursor />}
          <span className="digitacao__resto">{LINHA_1.slice(n1)}</span>
        </span>
        <br />
        <span className="hero__titulo-destaque">
          {LINHA_2.slice(0, n2)}
          {naLinha2 && <Cursor />}
          <span className="digitacao__resto">{LINHA_2.slice(n2)}</span>
        </span>
      </span>
    </h1>
  )
}
