# Contributing

- Ensure you have [Git](https://git-scm.com/), [Node](https://nodejs.org), and [Yarn](https://yarnpkg.com) installed on your machine
- Add a `.env` file to the root of the project with the following:

```
CLUSTER_NAME=cortex
CLUSTER_USERNAME=username
CLUSTER_PASSWORD=password
```

- Run `yarn` to install dependencies
- Run `yarn build:watch` to compile `src` to `build`
- Run `yarn start` to start the API server
- Submit a pull request to `master`
- An admin merges your pull request into `master` and runs `yarn release` to release a new version to npm
