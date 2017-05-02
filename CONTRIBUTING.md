# Contributing

- Ensure you have [Git](https://git-scm.com/), [Node](https://nodejs.org), and [Yarn](https://yarnpkg.com) installed on your machine
- Add a `.env` file to the root of the project with the following:
```
CLUSTER_NAME=cortex
CLUSTER_USERNAME=username
CLUSTER_PASSWORD=password
```
- Run `yarn` to install libraries
- Run `yarn dev:build` and `yarn dev:server` to develop
- Submit a pull request to `master`
- Continuous Integration runs `yarn verify` to ensure things are working as expected
- An admin merges your pull request into `master` and runs `yarn release` to release a new version
