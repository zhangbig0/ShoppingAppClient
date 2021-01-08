<template>
  <van-card
      desc="描述信息"
      :num="this.order.count"
      :price="this.order.goods.price"
      :thumb="'https://localhost:8000/'+this.order.goods.imgSrc"
      :title="this.order.goods.name"
  >

    <template #footer>
      <span>数量{{this.order.count}}</span>
      <span>¥{{this.order.totalPrice}}</span>
    </template>
  </van-card>
</template>

<script>
import Vue from 'vue';
import {Card} from 'vant';

Vue.use(Card);
export default {
  name: "OrderItem",
  props:'order',
  mounted() {

  }
}
</script>

<style scoped>

</style>