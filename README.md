# threadtest

## How this project was initialized
```sh
npm install -g @vue/cli
vue create threadtest
vue add electron-builder
```
then add example worker from threads.js homepage to make sure example works correctly (it does)
then adjust example to use a node builtin (child_process) and see that child_process is not set

## Project setup
```
yarn
```

**NOTE** This demo requires manually modifying the threads package in the same way, in two places, after installing node_modules with `yarn`.
1. /dist-esm/master/implementation.js
2. /dist-esm/worker/implementation.js
```js
// const runningInNode = typeof process !== 'undefined' && process.arch !== 'browser' && 'pid' in process;
const runningInNode = false
```

More info:
https://github.com/andywer/threads.js/issues/199
https://github.com/andywer/threads-plugin/issues/13

### Compiles and hot-reloads for development
```
yarn electron:serve
```
