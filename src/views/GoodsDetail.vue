<template>
  <div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon"></van-goods-action-icon>
      <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon"></van-goods-action-icon>
      <van-goods-action-icon icon="shop-o" text="店铺" @click="onClickIcon"></van-goods-action-icon>
      <van-goods-action-button type="danger" text="立即购买" @click="onClickButton">

      </van-goods-action-button>
    </van-goods-action>
  </div>
</template>

<script>
import Vue from 'vue';
import {GoodsAction, GoodsActionButton, GoodsActionIcon, Toast} from 'vant';

Vue.use(GoodsActionIcon);
Vue.use(GoodsActionButton);
Vue.use(GoodsAction)
Vue.use(Toast)
export default {
  name: "GoodsDetail",
  props:[
      'id',
  ],
  methods: {
    onClickIcon() {
      Toast("点击图标");
    },
    onClickButton() {
      Toast("点击按钮");
    }
  }
}
</script>

<style scoped>

</style>