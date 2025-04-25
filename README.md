# Readme

## Basic scripts

1. pnpm dev to run docs
2. pnpm build:docs to build docs
3. pnpm build:themes to build themes

## Publish package

1. pnpm build:themes
2. Change version in `package.json` file in `mui-themes` folder
3. git add . & git commit -m "update version" && git push
4. cd packages/mui-themes & pnpm publish --access public
