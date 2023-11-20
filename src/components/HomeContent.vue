<script >




import {useProductsStore} from "@/stores/products";
import article from "@/pages/Article.vue";

export default {
  name: 'HomeContent',
  computed: {
    article() {
      return article
    }
  },
  components: {

  },
  props: {
  },
  data() {
    return {
      store: useProductsStore(),
      products: [],
      data : []
    }
  },
  methods: {
    async fetchProducts(){
      await this.store.fetchProducts();
      this.products = this.store.getProducts;
    }
  },
mounted() {
    this.fetchProducts();
  }

}
</script>

<template>
  <main class="container-fluid home-content row">
      <div v-for="product in products" :key="product._id" class="col-md-6 mt-4">
          <div class="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div class="my-3 py-3">
              <h2 class="display-5">{{product.name}}</h2>
            </div>
              <router-link :to="{name:'article',params:{id:product._id}}">
            <div class="shadow-sm mx-auto im" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;">
              <img :src=product.images[0] alt="" srcset="" style="width: 80%" class="image-fluid" >
            </div>
              </router-link>
          </div>
          </div>
  </main>
</template>

<style scoped>
.im{
  display: flex;
  justify-content: center;
  align-items: center;
}
.home-content{
  background: #6a11cb !important;
  background: -webkit-linear-gradient(to top, rgb(3, 36, 50), rgb(13, 110, 253)) !important;
  background: linear-gradient(to top, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1)) !important;
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0;
}
</style>