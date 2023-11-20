<script >
import Home from "@/pages/Home.vue";

export default {
  name: 'App',
  components: {
    Home,
  },
  props: {
  },
  data() {
    return {
    }
  },


}

</script>
<template >
<RouterView/>
</template>
<style scoped>
html{
  scroll-behavior: smooth;
  margin: 0;
  padding: 0;
}

</style>
