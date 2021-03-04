### Using lerna for linking packages

if we are using npm we must upload the package with every change and then download it if it is used in other package. With lerna can use packages by linking them and without downloading from npm

### Inside jbook add packages only with

lerna add <name> --scope=<where>

### inside package.json in each folder

look if "main": "index.js"

### Find cli package and link it to local-api

cli will depend on local-api

#### command:

lerna add local-api --scope=cli

#### after linking

move cli folder and run node index.js

### set up typescript in local-api

lerna add typescript --dev --scope=local-api

### create ts.config cd in local-api

npx typescript --init

change ts.config

- "declaration": true,

- "outDir": "./dist",

add "start":"tsc --watch --preserveWatchOutput" in package.json

change index.js to index.ts

from local-api run

npm run start

the output is in dist

change package.json

- "main": "dist/index.js",

- "types": "dist/index.d.ts"
