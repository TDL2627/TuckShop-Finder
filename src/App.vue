<template>
<Nav/>
<router-view/>
  <Footer/>
</template>

<script>
import Footer from "./components/Footer.vue"
import Nav from "./components/Navbar.vue"
export default {
components:{
  Footer,Nav
}
}
</script>
<style>
body{
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: whitesmoke;
  height: 100vh !important;
width: 100% !important;
overflow: none !important;
  margin: 0 !important;
  background: black;

}


</style>
