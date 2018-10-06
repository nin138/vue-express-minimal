<template>
  <div id="app">
    <img src="images/logo.png">
    <p>Hello, World!</p>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/page2">page2</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
p {
  color: green;
  font-size: 21px;
  text-align: center;
  border: 1px solid red;
}
</style>
