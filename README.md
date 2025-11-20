# quirinecker.github.io

This is my person website. It's built with [Astro](https://astro.build) and hosted on [Github Pages](quirinecker.github.io). It contains

* A blog (mostly empty so far)
* A about page
* A projects page with the projects I am proud of

## Writing blogs

Blogs are located in `src/markdown/blogs/` and are written in [Markdown](https://www.markdownguide.org/basic-syntax/) format. They should include the following frontmatter.

```markdown
---
title: <title>
banner: <path to banner (absolute from public folder)>
description: <description>
date: <date in format 2023-02-02>
---
```

After adding a new blog, it should show up on the blog page after the next build.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `bun install`             | Installs dependencies                            |
| `bun dev`             | Starts local dev server at `localhost:4321`      |
| `bun build`           | Build your production site to `./dist/`          |
| `bun preview`         | Preview your build locally, before deploying     |
| `bun astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun astro -- --help` | Get help using the Astro CLI                     |
