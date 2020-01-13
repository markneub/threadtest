<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { spawn, Thread, Worker } from "threads";

export default {
  name: "app",
  components: {
    HelloWorld
  },
  mounted() {
    async function main() {
      const auth = await spawn(new Worker("./workers/auth"));
      const hashed = await auth.hashPassword("Super secret password", "1234");
      console.log("Hashed password:", hashed);
      await Thread.terminate(auth);
    }
    main().catch(console.error);
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
