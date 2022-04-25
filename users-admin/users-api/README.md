# users-api

## scaffolding

```shell
mkdir users-api
cd users-api
npm init --yes
```

## and after having appropriately modified the package.json, I used the command:

```shell
npm install
```

### finally, run in development mode

```shell
npm run dev
```

## example of use

### mutation, I add a dummy user

```text
mutation {
  createUser (
    input: {
    	username: "lillydoe",
    	email: "lillydoe@example.local",
    	password: "1qaz2wsx",
    	privilege: "admin",
    	active: true
  	}
  ) {
    id
    username
    email
    password
    privilege
  }
}
```

follows as a result:

```text
{
  "data": {
    "createUser": {
      "id": "b37873f0-f58c-4238-a2d5-d5eb5f7a103c",
      "username": "lillydoe",
      "email": "lillydoe@example.local",
      "password": "c6922b6ba9e0939583f973bc1682493351ad4fe8",
      "privilege": "admin"
    }
  }
}
```

### query, I request the entire list of registered users, but of these, only three of the eight provided by the system

```text
query {
  getUsers {
    email
    password
    privilege
  }
}
```

the result is a list of users, of course fictitious, to which I have just added one:

```text
{
  "data": {
    "getUsers": [
      {
        "email": "admin@example.local",
        "password": "b01afc2b077956acc69f99e0b7df1cb70cb01331",
        "privilege": "admin"
      },
      {
        "email": "johndoe@example.local",
        "password": "95f2b3ad8d11a751a72341cb5e975c68e5a4df0c",
        "privilege": "normal"
      },
      {
        "email": "amydoe@example.local",
        "password": "95f2b3ad8d11a751a72341cb5e975c68e5a4df0c",
        "privilege": "normal"
      },
      {
        "email": "lillydoe@example.local",
        "password": "c6922b6ba9e0939583f973bc1682493351ad4fe8",
        "privilege": "admin"
      }
    ]
  }
}
```
