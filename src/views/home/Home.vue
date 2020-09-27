<template>
  <div>
    <navigation-bar class="home-nav">
      <div slot="center">
        商城
      </div>
    </navigation-bar>

    <swiper>
      <swiper-item v-for="banner in banners :key="banner.acm" :label="banner.title" :value="banner.link>
        
      </swiper-item>
    </swiper>


  </div>
</template>

<script>

import NavigationBar from "@/components/common/Nav/NavigationBar"
import {getHomeMultidata} from "@/network/home/homeApi"
import {Swiper, SwiperItem} from "@/components/common/swiper"
export default {
  name: "Home",
  components: {
    NavigationBar,
    Swiper,
    SwiperItem
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

</style>
