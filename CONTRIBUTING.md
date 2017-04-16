# Contributing

- Ensure you have [Git](https://git-scm.com/), [Node](https://nodejs.org), and [Yarn](https://yarnpkg.com) installed on your machine
- Add a `.env` to the root of the project with the following:

```
CLUSTER_NAME=cortex
CLUSTER_USERNAME=username
CLUSTER_PASSWORD=password
```

- Run `yarn` to install dependencies
- Run `yarn dev` to develop
- Run `yarn start` to start the API
- Run `yarn test` to test
- Submit a pull request to `master`
- Continuous Integration runs `yarn verify` to verify the code can be merged into `master`
- An admin merges your pull request into `master` and runs `yarn release` to release a new version to npm
