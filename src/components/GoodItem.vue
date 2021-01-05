<template>
  <van-col span="12">
    <van-row>
      <van-col span="24">
        <van-image
            :src=this.goodsPic
            height="10rem"
            width="10rem"
        />
      </van-col>
      <van-col span="24">
        <span>{{ this.goodsName }}</span>
      </van-col>
    </van-row>
  </van-col>
</template>

<script>
import Vue from 'vue';
import {Col, Image as VanImage, Row} from 'vant';

Vue.use(Col);
Vue.use(Row);
Vue.use(VanImage);
export default {
  name: "GoodsItem",
  props: [
    'goodsName',
    'goodsPic'
  ]
}
</script>

<style scoped>

</style>