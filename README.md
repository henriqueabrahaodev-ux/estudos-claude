# projeto

Aplicação Next.js 16 com App Router, React 19, TypeScript e TailwindCSS 4.

## Stack

- **Next.js 16.3.8** — App Router, Server Components
- **React 19.2.8**
- **TypeScript 5**
- **TailwindCSS 4** (via `@tailwindcss/postcss`)
- **ESLint 9** com `eslint-config-next`
- **Geist** (fonte padrão via `next/font`)

## Comandos

```bash
npm run dev      # servidor local em http://localhost:3000
npm run build    # build de produção
npm run start    # inicia build de produção
npm run lint     # executa ESLint
```

## Estrutura

```
app/
├── layout.tsx   # layout raiz (fonte, metadata)
├── page.tsx     # página inicial
└── globals.css  # estilos globais (Tailwind base)
public/          # assets estáticos
```

## Configuração

- Import alias `@/*` mapeado para a raiz do projeto (`tsconfig.json`)
- PostCSS configurado em `postcss.config.mjs`
- TypeScript estrito em `tsconfig.json`
- Variáveis de ambiente: copiar `.env.example` para `.env.local`

## Arquitetura

- **Server Components por padrão** — adicionar `'use client'` apenas para hooks, eventos ou browser APIs
- **Server Actions em `actions/`** — nunca chamar banco de dados direto em Client Components
- `components/ui/` — primitivos reutilizáveis (shadcn/ui)
- `components/` — componentes de feature
- `lib/` — helpers e clients externos
- `types/` — tipos globais e schemas Zod
