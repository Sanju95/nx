# nx

nx with Marco & Sanju

Roughly following the code generation tutorial from nx.dev: https://nx.dev/react-tutorial/1-code-generation to create two React apps:

1. store - React app
2. admin - business logic

✔ Choose what to create · integrated

✔ What to create in the new workspace · next

✔ Repository name · SSG-NX-monorepo

✔ Application name · store

✔ Default stylesheet format · scss

✔ Enable distributed caching to make your CI faster · Yes

- create a new app: `npx nx g @nrwl/react:app {appNAME}` 
- Create a new component in common-ui (component library) `npx nx g @nrwl/react:component banner --project=common-ui --export`

- scss is already modularised by default
- Dependency graphs (`npx nx graph`)
-- The Project Graph is more than just a visualization - Nx provides tooling to optimize your task-running and even automate your CI based on this graph. This will be covered in more detail in: 4: Workspace Optimization.
