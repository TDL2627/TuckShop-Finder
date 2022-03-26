<template>
    <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#nav {
  padding: 30px;
  background: green;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>