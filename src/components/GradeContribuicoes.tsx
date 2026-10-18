import { useEffect, useRef } from 'react'

// Quadradinhos no estilo do gráfico de contribuições do GitHub, cobrindo o fundo do topo
const CELULA = 11
const ESPACO = 3
const PASSO = CELULA + ESPACO

// Tons do GitHub no tema escuro, do vazio ao mais forte
const CORES_NIVEL = ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353']

// Bem apagado atrás do texto e mais forte nas bordas, pra não atrapalhar a leitura
const ALFA_CENTRO = 0.14
const ALFA_BORDA = 0.62

function nivelAleatorio() {
  const r = Math.random()
  return r < 0.45 ? 0 : r < 0.7 ? 1 : r < 0.85 ? 2 : r < 0.95 ? 3 : 4
}

/** Fundo do topo com a grade do GitHub, parada. Desenha uma vez e só redesenha quando o tamanho muda */
export function GradeContribuicoes() {
  const refFundo = useRef<HTMLDivElement>(null)
  const refCanvas = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const fundo = refFundo.current
    const canvas = refCanvas.current
    const ctx = canvas?.getContext('2d')
    if (!fundo || !canvas || !ctx) return

    let largura = 0
    let altura = 0

    function desenhar() {
      const novaLargura = fundo!.clientWidth
      const novaAltura = fundo!.clientHeight
      if (novaLargura === largura && novaAltura === altura) return
      largura = novaLargura
      altura = novaAltura

      const colunas = Math.max(1, Math.floor((largura + ESPACO) / PASSO))
      const linhas = Math.max(1, Math.floor((altura + ESPACO) / PASSO))
      // Centraliza a grade
      const origemX = (largura - (colunas * PASSO - ESPACO)) / 2
      const origemY = (altura - (linhas * PASSO - ESPACO)) / 2

      const dpr = window.devicePixelRatio || 1
      canvas!.width = Math.round(largura * dpr)
      canvas!.height = Math.round(altura * dpr)
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx!.clearRect(0, 0, largura, altura)

      for (let y = 0; y < linhas; y++) {
        for (let x = 0; x < colunas; x++) {
          const px = origemX + x * PASSO
          const py = origemY + y * PASSO
          // Quanto mais perto do texto, mais apagado
          const dx = (px + CELULA / 2 - largura / 2) / (largura / 2)
          const dy = (py + CELULA / 2 - altura * 0.5) / (altura * 0.55)
          const d = Math.min(1, Math.hypot(dx, dy))
          ctx!.globalAlpha = ALFA_CENTRO + (ALFA_BORDA - ALFA_CENTRO) * d * d
          ctx!.fillStyle = CORES_NIVEL[nivelAleatorio()]
          ctx!.beginPath()
          ctx!.roundRect(px, py, CELULA, CELULA, 2)
          ctx!.fill()
        }
      }
      ctx!.globalAlpha = 1
    }

    desenhar()
    const aoRedimensionar = new ResizeObserver(desenhar)
    aoRedimensionar.observe(fundo)
    return () => aoRedimensionar.disconnect()
  }, [])

  return (
    <div ref={refFundo} className="topo__fundo" aria-hidden="true">
      <canvas ref={refCanvas} />
    </div>
  )
}
