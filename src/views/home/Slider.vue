<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <!-- It is important to set "left" style prop on every slide -->
      <div class="swiper-slide"
           v-for="(item, index) in slides"
           :key="index"
           :style="{backgroundImage:`url(${item.imgUrl})`}"
      >

      </div>
    </div>
    <!-- 如果需要分页器 -->

  </div>

</template>

<script lang="ts">

    import {Component, Vue, Prop, Watch} from "vue-property-decorator";
    import Swiper from "swiper";
    import 'swiper/dist/css/swiper.css'

    @Component({
    })

    export default class Slider extends Vue {
        @Prop() public slides!:any[];

        private virtualData:any = {
            slides: [],
        }
        private swiper:any=null;
        public sliderOption:any={
            direction: "horizontal",
            loop: true,
            observer:true,
            autoplay: {
                delay: 2500,
            }
        }





        mounted(){


            this.swiper =new Swiper('.swiper-container', this.sliderOption);
        }












    }
</script>

<style scoped>
  .swiper-container {
    width: 100%;
    margin: 0;
    padding: 0;
  }

  .swiper-wrapper {
    height: 200px;
  }

  .swiper-slide img {
    max-width: 100%;
  }

  .swiper-slide {
    text-align: center;
    background: #fff;
    /* Center slide text vertically */
    background-position: center;
    background-repeat:no-repeat;
    background-size:contain;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
</style>