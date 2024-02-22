# Young Founders Hub Landing page

# About Young Founders Hub
**@fred write something about the product here**

# Project setup and dependencies

This Repository contains frontend code for the Young Founders Hub landing page.

## Project Stack Specification

- Frontend Framework - [Vuejs](https://vuejs.org/)
- CSS Framework - [Tailwindcss](https://tailwindcss.com/)
- Bundler/Build Tool - [Vite](https://vitejs.dev/)
- Test Runner - [Vitest](https://vitest.dev/)
- Component Library - [shadcn-vue]([https://daisyui.com/](https://www.shadcn-vue.com/))
- Icon Pack - [Material Symbols by Google](https://fonts.google.com/icons)
- Data Fetching Tool - [Tanstack Query](https://tanstack.com/query/latest)

## Crafting commit messages

When crafting commit messages, try to group commits that are related to a particular topic. For example, if you're making commits related to styling, only include files that are related to styling. This makes it easier to read through the commits and see the exact files that made changes to the styles.

A good commit message will ideally have the following attributes:

- [x] Subject => **A summary of what you did in the commit.**
- [x] Body => **A detailed explanation of the commit.**

Proper commits make debugging easier in cases where we need to go through our git logs.

## Crafting a Pull Request (PR)

- Include the purpose of the Pull Request
- Consider providing an overview of why the work is taking place (with any relevant links). Don't assume familiarity with the history

- Be explicit about what feedback you want, if any: a quick pair of ** on the code, discussion on the technical approach, critique on design, a review copy
- Be explicit about when you want feedback, if the Pull Request is a work in progress, say so. Prefix the title of your PR with [WIP]
- @mention individuals that you specifically want to involve in the discussion and mention why ("/cc @mamba-dev-ke for clarification on my logic for setting up react-router)


## Branching & Workflows

We are using the [Github Flow](https://docs.github.com/en/get-started/quickstart/github-flow) for this project. This means we have a *long-running branch*(**main**) and *short-lived branches* that will be used to develop parts of the application. An example of a short-lived branch would be `features/routing`

## Running the project locally

Clone the repository to your local machine and run the following commands to launch the app.

```bash
npm install
```

```bash
npm run dev
```
