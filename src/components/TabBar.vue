<template>
  <van-tabbar route v-model="active" class="tab-bar" :fixed="true">

    <van-tabbar-item replace to="/" icon="bag-o">首页</van-tabbar-item>

    <van-tabbar-item replace to="/shoppingcart" icon="cart-o">购物车</van-tabbar-item>

    <van-tabbar-item replace to="/user" icon="user-o">用户</van-tabbar-item>

    <van-tabbar-item icon="setting-o">设置</van-tabbar-item>
  </van-tabbar>
</template>
<script>
import {Tabbar, TabbarItem} from 'vant'
import Vue from 'vue';

Vue.use(Tabbar);
Vue.use(TabbarItem);
export default {
  name: 'TabBar'
}
</script>

<style>
.tab-bar{
  /*position: fixed;*/
}
</style>