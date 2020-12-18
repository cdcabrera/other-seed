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
