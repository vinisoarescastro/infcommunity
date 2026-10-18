# Comunidade INF/UFG

Site com links e informações úteis para alunos do Instituto de Informática da UFG. Mantido por alunos. **Este não é um site oficial da UFG.**

Feito com React, TypeScript e Vite, pensado primeiro para celular.

## Rodando localmente

Requer Node.js 20 ou superior.

```bash
npm install
npm run dev       # servidor de desenvolvimento (http://localhost:5173)
npm run build     # gera a versão de produção em dist/
npm run preview   # serve o conteúdo de dist/ para conferência
```

Para testar no celular na mesma rede Wi-Fi, rode `npm run dev -- --host` e acesse o IP exibido no terminal.

## Atualizando o conteúdo

Todo o conteúdo fica em [`src/data/conteudo.ts`](src/data/conteudo.ts). Não é preciso mexer nos componentes.

- **Novo link:** adicione um item no array `itens` da seção desejada.
- **Nova seção:** adicione um objeto no array `secoes`. Ela aparece na página na ordem do array.
- **Visual dos cartões:** todos usam o mesmo modelo, com um elemento grande à esquerda, maior que o cartão e cortado pelas bordas. Esse elemento é o `logo`, a `imagem` ou, sem nenhum dos dois, o `icone`.
- **`subtitulo`:** linha curta abaixo do título explicando o que a pessoa encontra no link. Sem ela, aparece só o tipo (por exemplo "WhatsApp").
- **Item sem `url`:** o site exibe "Peça o link a um admin".
- **`descricao`, `nota` e `aviso`:** textos que aparecem ao abrir o cartão. O `aviso` aparece destacado em amarelo.
- **`opcoes`:** vários links num cartão só (por exemplo os grupos de moradia). O cartão não leva `url` e clicar nele abre a lista.
- **`confirmacao`:** janela de aviso que aparece antes de abrir o link (por exemplo a regra do e-mail @discente.ufg.br no Drive). O link só abre se a pessoa confirmar.
- **Ícone:** use um dos nomes disponíveis em [`src/components/Icone.tsx`](src/components/Icone.tsx). Para um ícone novo, importe-o da biblioteca `lucide-react` e registre-o no mesmo arquivo.
- **`cor`:** cor do ícone grande e dos botões de grupos (`indigo`, `azul`, `violeta`, `rosa`, `laranja`, `ambar`, `verde` ou `ciano`).
- **`logo`:** logotipo com fundo transparente (PNG ou SVG), como `marcas/inf-ufg.png`. Coloque o arquivo em `public/marcas/` e informe o caminho sem barra inicial.
- **`imagem`:** imagem com fundo próprio, exibida em círculo (por exemplo `marcas/draco.png`). Use imagens quadradas só com o símbolo, porque texto fica ilegível.

Exemplo:

```ts
{
  titulo: 'Comunidade de Disciplinas INF/UFG',
  subtitulo: 'Todas as disciplinas do INF no semestre atual, no WhatsApp',
  url: 'https://chat.whatsapp.com/...',
  tipo: 'whatsapp',
  icone: 'livro',
  cor: 'violeta',
}
```

Padrão de escrita: não use emojis nem travessões nos textos do site.

## Publicação

O build é estático (pasta `dist/`) e pode ser hospedado gratuitamente em GitHub Pages, Cloudflare Pages, Netlify ou Vercel.

- Comando de build: `npm run build`
- Diretório de saída: `dist`

## Créditos

- Ícones de Disciplinas e Moradia (`public/marcas/disciplinas-balao.svg` e `moradia-chave.svg`): [Fluent Emoji](https://github.com/microsoft/fluentui-emoji), versão Color, da Microsoft, sob licença MIT. O aviso da licença está em `public/marcas/fluentui-emoji-LICENSE.txt` e deve acompanhar as imagens.

## Cuidados

- Links de convite do WhatsApp ficam públicos no site. Mantenha a aprovação de entrada pelos admins ativa e troque os convites se houver spam.
- Não publique telefones, e-mails pessoais ou outros dados pessoais de alunos e admins.
- Não use logotipos oficiais da UFG sem autorização.
