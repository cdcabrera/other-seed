# other-seed

Use [pf-react-seed](https://github.com/patternfly/patternfly-react-seed) as the base with the following adjustments...  

Cleaned up root
- Relocated webpack configs, underneath config
- Relocated jest test setup, underneath config

Enable extras
- Enabled scss file import in directory

Build clean up
- Default GitHub PR, issue templates
- Default GitHub PR workflow
- NPM scripts streamlined
- Clean build directory automatically
- tsconfig, updating it updates webpack output
    - baseUrl, also updates the base app source folder
    - outDir, also updates overall webpack output
- Because of the unified directory certain directories and files are copied/transferred directly into the build output
  - locales, dir
  - favicons, dir
  - images, dir
  - favicon.ico, file 
  - favicon.png, file
  - manifest.json, file
  - robots.txt, file
- Allow consistent dotenv files, and parent directory dotenv files
  - .env, .env.local
  - .env.test, .env.test.local
  - .env.development, .env.development.local
  - .env.production, .env.production.local

## dotenv files
Dotenv files are:
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
  
### dotenv parameters
It's recommend that to avoid conflicts you prefix your dotenv parameters with something consistent. The `OSEED_[SOME PARAMETER]` is used by the project and can be safely used.

#### Build settings, reserved parameters
The following are reserved for configuring your build

Used during `$ yarn build`
- `OSEED_PUBLIC_PATH` defaults to `/`
- `OSEED_SRC_DIR` falls back to either your tsconfig baseUrl compiler option, or to `src`
- `OSEED_DIST_DIR` falls back to either your tsconfig outDir compiler option, or to `build`

Used during `$ yarn start`
- `OSEED_HOST` defaults to `localhost`
- `OSEED_PORT` default to `3000`
  
### Project level dotenv files
In the event your frontend is within a directory inside another repository the dotenv files can be
nested a single directory down (may change in the future).

To enable this feature either the `.env` or `.env.local` file in the frontend directory must contain the parameter
```
OSEED_IS_PROJECT_ROOT_DIR=false
```
Once this is applied the project will also look one directory above itself for dotenv files following the same structure noted above.

**IMPORTANT** dotenv files in the frontend directory itself will always take priority over dotenv files located outside the directory.
