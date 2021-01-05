<template>
  <van-row>
    <good-item v-for="item in this.data" v-bind:key="item.goodsLabel" v-bind:goods-name="item.goodsLabel"
              v-bind:goods-pic="item.goodsPic"></good-item>
  </van-row>

</template>

<script>
import Vue from 'vue';
import {Col, Row} from 'vant';
import GoodItem from "@/components/GoodItem";

Vue.use(Col);
Vue.use(Row);
export default {
  name: "GoodsContent",
  components: {GoodItem},
  data() {
    return {
      data: []
    }
  },
  mounted() {
    for (let i = 0; i < 20; i++) {
      this.data.push({
        goodsPic: "https://img.yzcdn.cn/vant/cat.jpeg",
        goodsLabel: "猫"
      })
    }
  }
}
</script>

<style scoped>

</style>