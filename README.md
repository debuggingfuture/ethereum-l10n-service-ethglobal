
## Architecture Overview

- Fund Distribution
  - Allo protocol
    - we created Custom Strategy (ELSStrategy) which check against contribution EAS is attested and not expired before recipient can be registered
  - Contribution/allocation
    - we calculate score of each contribution via translation / attestation to derive final allocation and register to allo
- Grant Portal
  - Grant Stack
- Chrome Extension
  - SolidJS
  - videojs-vtt to parse and render subtitles
- Translation pipelines
  - OpenAI Whisper
  - OpenAI LLM prompt for translations
  - Weblate (Translation Management Systems) to let user to modify subtitles
- Attestations
 - EAS (Ethereum Attestation Service)
  - Witness
- AI Pipelines
  -  We run data pipeline to download video from youtube, use ASR OpenAI whisper to output original English transcript. Then prompt to OpenAI LLM for the final translatied (Traditional Chinese) file in vtt.


This repository contains packages of

### Chrome extension

- end-user can make use of rendered subtitles at translated videos on youtube, streamETH
- end-user & attestors can attest translations

### Subs

- package to parse, translate and deliver subtitles 


### Attestations
- Create attestatiosn with 2 EAS Schemas
1. attestation on each translation
2. project attestation on contribution/allocation


### distributions

- package to derive allocation base on contribution

## weblate

- package to upload transcript / translaion onto weblate


### contracts (Customized Allo strategy)

- This contract implements Allov2 strategy ELSStrategy

### Grant Portal

- We have https://github.com/0xl10n/grants-stack which is a fork of [gitcoinco/grants-stack](https://github.com/gitcoinco/grants-stack)

- Create & Manage Rounds to fundraise for l10n effort
- End-user Explore available Rounds to donate

### Code base

# Turborepo starter

This is an official starter Turborepo.

## Using this example

Run the following command:

```sh
npx create-turbo@latest
```

---

## Testing

- sample command, testing pipeline test file only
 env-cmd pnpm run test --filter subs -- pipeline
 
## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
