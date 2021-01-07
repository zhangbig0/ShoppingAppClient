<template>
  <div>
    <shopping-cart-item v-for="item in this.ShoppingCartData" v-bind:key="item.goodsName"
                        :good-name="item.goodsName" :goods-detail="item.goodsDecs" :goods-pic="item.goodsPic"
                        :num="item.goodsNum" v-bind:price="item.goodsPrice"/>
    <div style="height: 2rem"></div>
    <van-submit-bar button-text="提交订单" disabled price=300 style="margin-bottom: 3rem"></van-submit-bar>
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
    let user = JSON.parse(sessionStorage.getItem("User"));
    console.log(user);
    this.$axios.get("https://localhost:8000/api/ShoppingBrackets/GetShoppingBracketByUser/" + user.id,)
        .then(response => {
          let data = response.data;
          let goodsList = data.goodsList;
          goodsList.forEach(
              (value) =>{
                this.ShoppingCartData.push({
                  goodsId:value.id,
                  goodsName: value.name,
                  goodsDecs:"",
                  goodsPrice: value.price,
                  goodsNum:value.num,
                  goodsPic: 'https://img.yzcdn.cn/vant/cat.jpg',
                })
              }
          )
        });
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