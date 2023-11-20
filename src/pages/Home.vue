<script >
import HomeHeader from "@/components/HomeHeader.vue";
import HomeContent from "@/components/HomeContent.vue";
import { ref, onMounted, onUnmounted } from 'vue';
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeContent,
  },
  data() {
    return {
      windowOffsetY: 0,

    };
  },
  mounted() {
    this.updateWindowOffsetY();
    const  item2 = document.querySelector('.home-content');
    window.addEventListener('scroll',()=>{
      this.updateWindowOffsetY();
      item2.style.transform = `translateY(${this.windowOffsetY * -1.05}px)`;
    });
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.updateWindowOffsetY);
  },
  methods: {
    updateWindowOffsetY() {
      this.windowOffsetY = window.scrollY || document.documentElement.scrollTop;
      return this.windowOffsetY;
    },
      },
}
</script>

<template>
  <main ref="windowScrollY" class="home "  >
    <HomeHeader :offsetY="windowOffsetY" class="home-header"/>
    <HomeContent class="home-content"/>
  </main>
</template>

<style scoped>
.home{
  margin: 0;
  padding: 0;
  max-height: 200vh !important;
  width: 100%;
}
</style>