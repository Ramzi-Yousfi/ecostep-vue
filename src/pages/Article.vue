<script >

import {useProductsStore} from "@/stores/products";

export default {

    name: 'HomeContent',
    components: {

    },
    props: {
    },
    data() {
      return {
        store: useProductsStore(),
        products: [],
        data : [],
        route : this.$route
      }
    },
    methods: {
      async fetchProducts(){
        await this.store.fetchOneProduct(this.route.params.id);
        this.products = this.store.getProducts;
      }
    },
    mounted() {
      this.fetchProducts();
    },

}
</script>

<template>
<div class="container-fluid row cont" >

    <router-link :to="{name:'home'}"> <button class="btn btn-primary back ">Back to home </button></router-link>

  <div class="col-md-6 left" v-if="products.images !== undefined">
    <div class="image">
      <img :src="products.images[0]" alt="" srcset="" class="img-fluid max-width: 100%">
    </div>
  </div>
  <div class="col-md-6">
    <div class="title">
      {{products.name}}
    </div>
    <div class="content">
      {{products.description}}
    </div>
  </div>
</div>

</template>

<style scoped>
.back{
  background-color: white !important;
 color: black !important;
  position: absolute;
  text-decoration: none;
  top: 20px;
  left: 20px;
}
.left{
  display: flex;
  justify-content: center;
  align-items: center;
}
.cont {
  background: #6a11cb !important;
  background: -webkit-linear-gradient(to top, rgb(3, 36, 50), rgb(13, 110, 253)) !important;
  background: linear-gradient(to top, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1)) !important;
  width: 100%;
  height: 100vh;
}
.title{
  font-size: 70px;
  font-weight: bold;
  color: white;
  margin-top: 20%;
}
.content{
  font-size: 20px;
  font-weight: bold;
  color: white;
  margin-top: 20%;
}

</style>