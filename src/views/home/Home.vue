<template>
  <div>
    <navigation-bar class="home-nav">
      <div slot="center">
        商城
      </div>
    </navigation-bar>

    <!-- <swiper>
      <swiper-item v-for="banner in banners :key="banner.acm" :label="banner.title" :value="banner.link>
        <a :href="banner.link">
          <img :src="banner.img" alt=""/>
        </a>
      </swiper-item>
    </swiper> -->

    <swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <swipe-item>1</swipe-item>
      <swipe-item>2</swipe-item>
      <swipe-item>3</swipe-item>
      <swipe-item>4</swipe-item>
    </swipe>


  </div>
</template>

<script>

import NavigationBar from "@/components/common/Nav/NavigationBar"
import {getHomeMultidata} from "@/network/home/homeApi"
import { Swipe, SwipeItem } from 'vant'

// import {Swiper, SwiperItem} from "@/components/common/swiper"
export default {
  name: "Home",
  components: {
    NavigationBar,
    Swipe,
    SwipeItem
    // Swiper,
    // SwiperItem
  },

  data() {
    return {
      banners: [],
      dKeyword: [],
      keywords: [],
      recommend: []
    }
  },

  created() {
    getHomeMultidata()
    .then(res => {
      this.banners = res.data.banner
      this.dKeyword = res.data.dKeyword
      this.keywords = res.data.keywords
      this.recommend = res.data.recommend
    })

  }
}
</script>

<style scoped>

  .home-nav {
    background-color: var(--color-tint);
  }

  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }

</style>
