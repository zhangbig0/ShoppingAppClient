<template>
  <div>
    <order-item v-for="order in orders" v-bind:key="order.id" :order="order"></order-item>
    <van-submit-bar :price="totalPrice" button-text="提交订单" @submit="onSubmit" style="margin-bottom: 3rem"/>
  </div>

</template>

<script>
import Vue from 'vue';
import {Card, SubmitBar} from 'vant';
import OrderItem from "@/components/OrderItem";

Vue.use(Card);
Vue.use(SubmitBar);
export default {
  name: "ConfirmOrder",
  components: {OrderItem},
  data() {
    return {
      user: JSON.parse(sessionStorage.getItem("User")),
      orders: undefined,
      totalPrice: 0
    }
  },
  methods: {
    setTotalPrice() {
      for (let i = 0; i < this.orders.length; i++) {
        this.totalPrice += this.orders[i].totalPrice;
      }
    }
  },
  mounted() {

    this.$axios.get("https://localhost:8000/api/Orders/CashFromShoppingBracket/" + this.user.id).then(response => {
      this.orders = response.data;
      this.setTotalPrice();
    })
  }
}
</script>

<style scoped>

</style>