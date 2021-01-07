<template>
  <van-col span="10" @click="OnclickGoods">
    <van-row>
      <van-col span="24">
        <van-image
            :src=this.goodsPic
            default="this.goodsName"
            height="10rem"
            radius="2rem"
            width="10rem"
        />
      </van-col>
      <van-col span="24" style="text-align: center">
        {{ this.goodsName }}
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
    'goodsPic',
    'goodsId',
    'goodsPrice',
    'goods',
  ],
  methods: {
    OnclickGoods() {
      this.$router.replace({name: 'GoodsDetail', path: '/goodsDetail', params: {id: this.goodsId}});
    }
  }
}
</script>

<style scoped>

</style>