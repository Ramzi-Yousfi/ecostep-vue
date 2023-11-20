<script >

export default {
  name: 'HomeHeader',
  components: {
  },
  props: {
    offsetY: {
      type: Number,
    }
  },
  data() {
    return {
      off : 0,
    }
  },
  computed: {
    offset(){
      this.off =  this.offsetY;
    }
  },

  mounted() {
    const imageRight = document.querySelector('.a-image-right');
    const imageLeft = document.querySelector('.a-image-left');

    window.addEventListener('scroll',()=>{
      this.off = this.offsetY;
      imageRight.style.transform = `translateY(${this.off * -2}px) rotate(-50deg)`;
      imageLeft.style.transform = `translate(${this.off * 0.7}px, ${this.off * -1.05}px) rotate(20deg)`;
    });
  },

}

</script>

<template>
  <div class=" m-home_header text-center ">
    <div class="col-md-12 a-title " >
      <h1 class="display-1 fw-bold">ECOSTEP </h1>
      <div class="d-flex gap-3 fw-bold justify-content-center ">
        <a class="icon-link" href="#">
        </a>
        <a class="icon-link" href="#">
        </a>
      </div>
    </div>
    <img src="../assets/images/nike.png" class="a-image-right">
    <img src="../assets/images/adidas.png" alt="" srcset="" class="a-image-left">
  </div>

</template>

<style scoped>

.m-home_header{
  height: 100vh;
  width: 100% ;
  box-sizing: border-box;
  color: white;
  background: black !important;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9;
}
.a-title{
  z-index: 10;
}
a{
  color: #7ec22b;
  text-decoration: none;
}
img{
  position: absolute;
  z-index: 8;
  overflow: hidden;
}
.a-image-right{
  right: -180px;
  top: 0;
  width: 35%;
  transform: rotate(-50deg);
}
.a-image-left{
  left: 0;
  bottom: 0;
  width: 40%;
  transform: rotate(20deg);
}


</style>