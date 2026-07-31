# Grande Virada Hub

SaaS premium (V1) para criadores de conteudo do universo GTA 6 -- Academia, Arsenal IA, Laboratorio de Ideias, Radar GTA, Oficina de Prompts, Favoritos, Perfil e Configuracoes. Nesta versao nao ha backend nem integracao real de IA: todo conteudo vem de dados mockados em `src/data/`, e os "prompts profissionais" sao montados localmente em `src/features/arsenal-ia/prompts/`.

## Como rodar

```bash
npm install
npm run dev
```

Abra `http://localhost:5173`.

Para gerar a build de producao:

```bash
npm run build
npm run preview
```

## Arquitetura

- `src/app` -- composicao de Providers, rotas e o shell do app.
- `src/components/ui` -- design system (Button, Card, Input, Select, Badge, ProgressBar, Modal, Toast, Skeleton, EmptyState, LoadingScreen).
- `src/components/layout` -- Sidebar, Header, BottomNavigation, AppLayout.
- `src/components/shared` -- SearchBar (Busca Global), SectionTitle, StatCard, LanguageSelector.
- `src/features/<feature>` -- cada Hub (Dashboard, Academia, Arsenal IA, Laboratorio de Ideias, Radar GTA, Oficina de Prompts, Favoritos, Perfil, Configuracoes) com seus proprios components/, pages/ e, quando aplicavel, hooks/.
- `src/contexts` -- LanguageContext, ThemeContext, UserContext, ProgressContext, FavoritesContext, SettingsContext, ToastContext -- cada um com responsabilidade unica.
- `src/services` -- camada de abstracao (contentService, progressService, favoritesService, searchService, userService, aiService). Hoje leem de data/ e localStorage; no futuro (V2.5+ do PRD) podem ser trocados por chamadas de API reais sem alterar nenhum componente.
- `src/lib` -- hubRegistry.ts (fonte unica de verdade dos modulos do sistema), searchIndex.ts (indice de busca global unificado), storage.ts, i18n.ts.
- `src/data` -- todos os dados mockados (course.ts, ideas.ts, news.ts, prompts.ts, missions.ts, tools.ts). Nenhuma lista e escrita diretamente em componente.
- `src/locales` -- traducoes pt-BR e es-AR, organizadas por namespace (common, dashboard, academia, arsenal, ideas, radar, oficina, perfil, config, favoritos).

## Adicionando um novo Hub no futuro

1. Criar a pasta em src/features/<novo-hub>.
2. Registrar a rota/icone/traducao em src/lib/hubRegistry.ts.
3. (Opcional) Adicionar as entidades buscaveis em src/lib/searchIndex.ts.

Sidebar, BottomNavigation e Busca Global atualizam automaticamente.
