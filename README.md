# other-seed

Use [pf-react-seed](https://github.com/patternfly/patternfly-react-seed) as the base with the following adjustments...  

Cleaned up root
- relocated webpack configs, underneath config
- relocated jest test setup, underneath config

Enable extras
- enabled scss file import in directory

Build clean up
- default GitHub PR, issue templates
- default GitHub PR workflow
- npm scripts streamlined
- clean build directory automatically
- tsconfig, updating it updates webpack output
    - baseUrl, also updates the base app source folder
    - outDir, also updates overall webpack output
- because of the unified directory certain directories and files are copied/transferred directly into the build output
  - locales, dir
  - favicons, dir
  - images, dir
  - favicon.ico, file 
  - favicon.png, file
  - manifest.json, file
  - robots.txt, file
- allow consistent dotenv files
  - .env, .env.local
  - .env.test, .env.test.local
  - .env.development, .env.development.local
  - .env.production, .env.production.local

## dotenv files
dotenv files are:
- can be checked into the root of webpack based project. `.env[*.local]` files are gitignored.
- are not required
- limited to compiling in `JSX`, `TSX`, `JS`, and `TS` files. They are not compiled into files consider static, specifically `*.html`
  - if the values need to be used in a file outside of `src` we recommend using the NPM `dotenv` directly
- loaded to the specific actions, and overlap in the following order.
  - `$ yarn build` = `.env.production.local` -> `.env.production` -> `.env`
  - `$ yarn test` = `.env.test.local` -> `.env.test` -> `.env`
  - `$ yarn start` = `.env.development.local` -> `.env.development` -> `.env`
- you can access values by using `process.env.[name of parameter]`
- parameter values are considered strings
- you can access `process.env.NODE_ENV`
  - `$ yarn build` = `process.env.NODE_ENV` = `production`
  - `$ yarn test` = `process.env.NODE_ENV` = `test`
  - `$ yarn start` = `process.env.NODE_ENV` = `development`
