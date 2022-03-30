<template>
  <div class="sub-area">
<h1>This is Silver Town</h1>

<div v-if="loading">
<span class="loader"></span>
</div>



 <div class="container">
   <div class="row">
  <div class="col-lg-5  shop"  v-for="shop in shops" :key="shop.name">
    <h3 class="name">{{shop.name}}</h3>
   <p>{{shop.time}}</p>
<div class="map" v-html="shop.location"></div>
<img class="pic" :src="require('@/assets/shops/'+ shop.pic)" alt="shop pic">
 </div>
   </div>
 </div>

  </div>
</template>

<script>
export default {
data(){
  return{
    shops:[],
    loading:false
  }
},
async created () {
      this.loading = true
    try {
      const res = await fetch('https://tuckshop2627.herokuapp.com/shops')
      this.shops = await res.json()
          this.loading = false
    } catch (error) {
      console.log(error)
        this.loading = false
    }
  }
}
</script>

<style scoped>
.sub-area{
   padding-top:15%;
  height: max-content;
  background: black;
  padding-bottom: 15%;
}
.shop{
    border: solid 2px red;
}
</style>