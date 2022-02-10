<template>
  <div class="slider d-flex justify-content-center align-items-center">
    <textra :data='words' :timer="1.1" :infinite='true' filter="press" />
  </div>
</template>

<script>
export default {
    name: "Slider",
    data(){
      return{
        words:["Right People. Right Investments","Right Investments. Right People ","Some Text"]
      }
    }
  //   data(){
  //       return {
  //       images: [
  //           "https://github.com/stfDeveloper/proj-html-vuejs/blob/5408797ff6ee44d768c2997a912259fc3bfb7e69/src/assets/images/counters-bg-image.jpg",
  //           "https://cdn.pixabay.com/photo/2016/02/17/23/03/usa-1206240_1280.jpg",
  //           "https://cdn.pixabay.com/photo/2015/05/15/14/27/eiffel-tower-768501_1280.jpg",
  //           "https://cdn.pixabay.com/photo/2016/12/04/19/30/berlin-cathedral-1882397_1280.jpg"
  //       ],
  //     timer: null,
  //     currentIndex: 0
  //   };
  // },

  // mounted: function() {
  //   this.startSlide();
  // },

  // methods: {
  //   startSlide: function() {
  //     this.timer = setInterval(this.next, 4000);
  //   },

  //   next: function() {
  //     this.currentIndex += 1;
  //   },
  //   prev: function() {
  //     this.currentIndex -= 1;
  //   }
  // },

  // computed: {
  //   currentImg: function() {
  //     return this.images[Math.abs(this.currentIndex) % this.images.length];
  //   }
  // }

}
</script>

<style lang="scss">
@import "../assets/style/global.scss";
.slider{
  background-image: url(../assets/images/home_finance_slider_bg.jpg);
  width: 100%;
  height: 600px;
  background-size: cover;
  color: $white;
  font-size: 60px;
}


</style>