# 🐾 PataFeliz

Landing page de pet shop e clínica veterinária localizada em São Paulo, SP. Projeto de estudo construído com Next.js 16 App Router, React 19 e TailwindCSS 4.

## Sobre o projeto

Site de apresentação e conversão para a **PataFeliz**, um centro completo de cuidados para pets. O objetivo da página é apresentar os serviços, transmitir confiança e direcionar o visitante para o agendamento.

**Seções da landing page:**

- Hero com headline e chamada para ação
- Faixa de trust com dados rápidos (anos de experiência, serviços, avaliação)
- Serviços: Banho e Tosa, Consulta Veterinária, Pet Shop, Hotel para Pets
- Diferenciais com estatísticas de destaque
- Depoimentos de clientes
- Rodapé com contato e localização

## Stack

| Tecnologia | Versão |
|---|---|
| [Next.js](https://nextjs.org) | 16.3.8 |
| [React](https://react.dev) | 19.2.8 |
| [TypeScript](https://www.typescriptlang.org) | 5 |
| [TailwindCSS](https://tailwindcss.com) | 4 |
| Geist | via `next/font` |

## Estrutura

```
app/
├── layout.tsx        # Layout raiz (fonte Geist, metadata)
├── page.tsx          # Página principal (Server Component)
└── globals.css       # Estilos globais e tokens de cor customizados

components/
├── header.tsx        # Cabeçalho sticky com nav e CTA
└── footer.tsx        # Rodapé com contato e endereço

public/
└── images/
    └── hero-patafeliz.png
```

## Comandos

```bash
npm install       # instala dependências
npm run dev       # servidor local em http://localhost:3000
npm run build     # build de produção
npm run start     # inicia o build de produção
npm run lint      # executa ESLint
```

## Arquitetura

- **Server Components por padrão** — `page.tsx` é um Server Component puro
- **Sem estado no servidor** — página estática, sem banco de dados ou autenticação
- **Tokens de cor customizados** — paleta warm (bark, umber, petal, clay, sand, amber-brand) definida em `globals.css`
- Import alias `@/*` mapeado para a raiz via `tsconfig.json`

## Design

Paleta editorial warm com destaque em âmbar. Tipografia display com Geist. Layout responsivo em coluna única no mobile e duas colunas no desktop (hero).

Cor primária: `amber-brand` (`#f59e0b` / amber-500).
