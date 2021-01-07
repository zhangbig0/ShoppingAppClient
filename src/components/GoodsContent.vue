<template>
  <van-row justify="space-around" type="flex">
    <good-item v-for="item in this.data" v-bind:key="item.id" :goods="item"
               :goods-id="item.id" v-bind:goods-name="item.goodsLabel" v-bind:goods-pic="item.goodsPic"></good-item>
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
  methods: {},
  mounted() {

    this.$axios.get("https://localhost:8000/api/Goods/Index")
        .then(response => {
          let goodsList = response.data
          for (let goodsIndex in goodsList) {
            let goods = goodsList[goodsIndex];
            console.log(goods)
            this.data.push({
              goods: goods,
              id: goods["id"],
              goodsPrice: goods.price,
              goodsPic: "https://img.yzcdn.cn/vant/cat.jpeg",
              goodsLabel: goods["name"],
            });

          }
        });
  }
}
</script>

<style scoped>

</style>