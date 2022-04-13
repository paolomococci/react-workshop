# legacy-api

## scaffolding

```shell
mkdir legacy-api
cd legacy-api
npm init --yes
nano package.json
touch .gitignore
nano .gitignore
touch HELP.md
touch README.md
nano README.md
touch .env
nano .env
```

## proceed to install some dependencies

```shell
npm view @contentpi/lib versions
npm i @contentpi/lib@1.0.2
npm view @graphql-tools/load-files versions
npm i @graphql-tools/load-files@6.3.2
npm view @graphql-tools/merge versions
npm i @graphql-tools/merge@6.2.11
npm view apollo-server versions
npm i apollo-server@2.22.2
npm view dotenv versions
npm i dotenv@8.2.0
npm view express versions
npm i express@4.17.1
npm view jsonwebtoken versions
npm i jsonwebtoken@8.5.1
npm view pg versions
npm i pg@8.5.1
npm view pg-hstore versions
npm i pg-hstore@2.3.3
npm view sequelize versions
npm i sequelize@6.6.2
npm view ts-node versions
npm i ts-node@9.1.1
```

### and some development dependencies

```shell
npm view husky versions
npm i husky@6.0.0 --save-dev
npm view jest versions
npm i jest@26.6.3 --save-dev
npm view prettier versions
npm i prettier@2.2.1 --save-dev
npm view sequelize-mock versions
npm i sequelize-mock --save-dev
npm view ts-jest versions
npm i ts-jest@26.5.4 --save-dev
npm view ts-node-dev versions
npm i ts-node-dev@1.1.6 --save-dev
```
