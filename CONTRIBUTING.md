# Como contribuir

Valeu por querer ajudar! Este site é feito por alunos e para alunos do Instituto de Informática da UFG, e qualquer pessoa pode sugerir melhorias.

## Antes de começar

- Para mudanças pequenas (corrigir um link, um texto, um erro de digitação), pode abrir o Pull Request direto.
- Para mudanças maiores (seção nova, mudança de visual, funcionalidade nova), abra antes uma [Issue](https://github.com/vinisoarescastro/infcommunity/issues) explicando a ideia. Assim a gente conversa e ninguém perde tempo com algo que não vai entrar.

## Passo a passo

### 1. Faça um fork e clone

Clique em **Fork** no topo do repositório. Depois clone a sua cópia:

```bash
git clone https://github.com/SEU-USUARIO/infcommunity.git
cd infcommunity
npm install
```

Requer Node.js 20 ou superior.

### 2. Crie uma branch

Nunca trabalhe direto na `main`. Use um nome curto que diga o que você vai fazer:

```bash
git switch -c conteudo/link-grupo-de-estagio
```

Prefixos que usamos:

| Prefixo | Quando usar |
|---|---|
| `conteudo/` | Link, texto ou seção nova em `src/data/conteudo.ts` |
| `correcao/` | Algo que estava quebrado |
| `visual/` | Mudança de layout, cores ou estilo |
| `funcionalidade/` | Algo novo no site |
| `docs/` | README, este guia e outros documentos |

### 3. Faça a mudança e teste

```bash
npm run dev     # abre o site em http://localhost:5173
npm run build   # confere se o site compila sem erros
```

Teste no celular também, porque a maioria dos alunos acessa por lá. Rode `npm run dev -- --host` e abra no celular o IP que aparece no terminal (os dois precisam estar no mesmo Wi-Fi).

### 4. Faça o commit

Escreva a mensagem em português, curta e dizendo o que mudou:

```bash
git add .
git commit -m "Adiciona grupo de estágio na seção Acesso rápido"
```

### 5. Abra o Pull Request

```bash
git push -u origin conteudo/link-grupo-de-estagio
```

No GitHub, clique em **Compare & pull request**. O modelo do PR já vem com um checklist; preencha e envie.

### 6. Revisão

A `main` é protegida, então nada entra sem revisão. O mantenedor vai revisar, pode pedir ajustes nos comentários e, quando estiver tudo certo, faz o merge. Se pedirem mudanças, é só fazer novos commits na mesma branch que o PR atualiza sozinho.

## Atualizando o conteúdo

Quase tudo que aparece no site fica em [`src/data/conteudo.ts`](src/data/conteudo.ts). Para adicionar ou mudar um link, normalmente você só precisa mexer nesse arquivo. O [README](README.md#atualizando-o-conteúdo) explica cada campo de um cartão.

## Padrões do projeto

### Textos do site

- Português do Brasil, claro e direto.
- Não use emojis nem travessões.
- Prefira frases curtas: muita gente lê pelo celular, entre uma aula e outra.

### Comentários no código

- Simples, diretos e em português. Pode ser informal.
- Não pule linha no meio de um parágrafo. Só pule linha quando mudar de assunto.
- Comente o porquê, não o óbvio. `// Soma 1` não ajuda ninguém.

### Código

- Siga o jeito que o código ao redor já está escrito: nomes em português, componentes em `src/components/` e estilos em `src/styles.css`.
- Mudanças pequenas e focadas. Um PR por assunto é mais fácil de revisar.
- Não reformate arquivos inteiros junto com outra mudança.

### Imagens

- Coloque em `public/marcas/`.
- Use apenas imagens que você pode usar: próprias, com autorização ou com licença livre. Se a licença pedir crédito, adicione na seção Créditos do README.
- Não use logotipos oficiais da UFG sem autorização.

## O que não fazer

- Não publique telefones, e-mails pessoais, fotos ou outros dados pessoais de alunos, professores ou admins.
- Não coloque senhas, tokens ou chaves no código.
- Não adicione links de grupos sem a aprovação dos admins desses grupos.

## Dúvidas

Abra uma [Issue](https://github.com/vinisoarescastro/infcommunity/issues) ou comente no seu Pull Request.
