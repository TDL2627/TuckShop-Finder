<template>
    <div id="nav">
    <router-link to="/">HOME</router-link> |
    <router-link to="/area">AREA</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#nav {
  padding: 30px;
  background: red;  
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>