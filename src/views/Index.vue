<template>
  <div>
    <van-grid>
      <van-grid-item icon="photo-o" text="文字"/>
      <van-grid-item icon="photo-o" text="文字"/>
      <van-grid-item icon="photo-o" text="文字"/>
      <van-grid-item icon="photo-o" text="文字"/>
    </van-grid>
    <goods-content></goods-content>
  </div>

</template>

<script>

import {Grid, GridItem, Image as VanImage, List, Tabbar, TabbarItem} from 'vant';
import Vue from 'vue';
import GoodsContent from "@/components/GoodsContentGrid";


Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(List);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(VanImage);
export default {
  name: "Index",
  components: {GoodsContent}
}
</script>

