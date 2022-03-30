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
 height: 100vh;
width: 100% !important;
overflow: none !important;
  margin: 0 !important;
  background: black;

}
.loader {
  width: 48px;
  height: 48px;
  background: black;
  border-radius: 50%;
  border: red solid 1px;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loader::after {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: 6px;
  top: 10px;
  width: 12px;
  height: 12px;
  color: red;
  background: currentColor;
  border-radius: 50%;
  box-shadow: 25px 2px, 10px 22px;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
} 

</style>
