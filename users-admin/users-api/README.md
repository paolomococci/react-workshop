# users-api

## scaffolding

```shell
mkdir users-api
cd users-api
npm init --yes
```

### after having appropriately modified the x file, add the dependencies to the project with the command:

```shell
npm install
npm ci
```

Unfortunately even this last precaution does not bring good results.
After removing directory x and file y, I tried with the following commands:

```shell
yarn install --immutable --immutable-cache --check-cache && yarn run development
```
