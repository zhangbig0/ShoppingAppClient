<template>
  <div>
    <shopping-cart-item v-for="item in this.ShoppingCartData" v-bind:key="item.goodsName"
                        :good-name="item.goodsName" :goods-detail="item.goodsDecs" v-bind:num="item.goodsNum"
                        :goods-pic="item.goodsPic" v-bind:price="item.goodsPrice"/>
    <van-submit-bar price=300 button-text="提交订单" disabled style="margin-bottom: 3rem" ></van-submit-bar>
  </div>
</template>

<script>
import ShoppingCartItem from "../components/ShoppingCartItem";
import {SubmitBar} from 'vant';
import Vue from 'vue'

Vue.use(SubmitBar)
export default {
  name: "ShoppingCart",
  components: {ShoppingCartItem},
  data() {
    return {
      ShoppingCartData: [],
    }
  },
  mounted() {
    for (let i = 0; i < 20; i++) {
      this.ShoppingCartData.push({
        goodsName: '商品名称',
        goodsDecs: '',
        goodsPrice: 0,
        goodsNum: 0,
        goodsPic: 'https://img.yzcdn.cn/vant/cat.jpg',
      })
    }
  }
}
</script>

<style scoped>

</style>