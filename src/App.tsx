import { Share2 } from 'lucide-react'
import { autor, comunidade, secoes } from './data/conteudo'
import { Cartao } from './components/Cartao'
import { GradeContribuicoes } from './components/GradeContribuicoes'
import { IconeGithub, IconeLinkedin } from './components/IconesMarca'
import { Regras } from './components/Regras'
import { SecaoConteudo } from './components/SecaoConteudo'
import { TituloDigitado } from './components/TituloDigitado'

export default function App() {
  const podeCompartilhar = typeof navigator !== 'undefined' && 'share' in navigator

  async function handleCompartilhar() {
    try {
      await navigator.share({
        title: 'Comunidade INF/UFG',
        text: 'Links e informações da comunidade do Instituto de Informática da UFG',
        url: window.location.href.split('#')[0],
      })
    } catch {
      // A pessoa cancelou o compartilhamento, tudo certo
    }
  }

  return (
    <>
      <a href="#conteudo" className="pular">
        Pular para o conteúdo
      </a>

      {/* Grade do GitHub atrás do hero, de ponta a ponta da tela */}
      <div className="topo">
        <GradeContribuicoes />
        <header className="container hero">
          <p className="hero__instituicao">Instituto de Informática / UFG</p>
          <TituloDigitado />
          <p className="hero__texto">
            Seu ponto de partida no Instituto de Informática. Grupos, provas antigas, Atlética, moradia e mais um monte de coisa, tudo reunido por quem já penou demais nesses corredores.
          </p>
          {podeCompartilhar && (
            <button type="button" className="hero__compartilhar" onClick={handleCompartilhar}>
              <Share2 size={15} strokeWidth={2} aria-hidden="true" />
              Compartilhar este site
            </button>
          )}
        </header>
      </div>

      <div className="container">
        <main id="conteudo" className="conteudo" tabIndex={-1}>
          <section className="secao" aria-labelledby="comunidade-titulo">
            <h2 id="comunidade-titulo" className="secao__titulo">
              Comunidade
            </h2>
            <div className="pilha">
              <Cartao item={comunidade} />
              <Regras />
            </div>
          </section>

          {secoes.map((secao) => (
            <SecaoConteudo key={secao.id} secao={secao} />
          ))}
        </main>
      </div>

      <footer className="rodape">
        <div className="container rodape__interno">
          <div className="rodape__redes">
            <a
              href={autor.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`LinkedIn de ${autor.nome}, abre em nova aba`}
            >
              <IconeLinkedin />
            </a>
            <a
              href={autor.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub de ${autor.nome}, abre em nova aba`}
            >
              <IconeGithub />
            </a>
          </div>
          <p>
            Desenvolvido por <strong>{autor.nome}</strong>
          </p>
          <p>De aluno para aluno</p>
        </div>
      </footer>
    </>
  )
}
