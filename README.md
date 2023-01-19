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



## Task Caching
Allows quicker local build times by checking and using any cached tasks it locates based on the `outputs` value within each app/library's `project.json` file.

`affected` allows you to "skip" tasks that couldn't possibly be affected by your changes. Task Caching allows you to "replay" tasks that have already been run.

Outputs are stored in the cache so that terminal output can be replayed, and any created files can be pulled from your cache, and placed where they were created the original time the task was run.

After running a build for an app, you may botice the line here:

    ✔    2/2 dependent project tasks succeeded [1 read from cache]

This is because your store project depends on your products project, which also has a build target. By default Nx is configured to run the build target for any dependencies that have a build target, before running the build on the original project.

## Resources

Comparisson of popular monorepo tools, includes a useful comparisson table at bottom: https://monorepo.tools/