<template>
  <van-swipe-cell :before-close="beforeClose">
    <van-card :num='num' :price='price' :title="goodName"
              :desc="goodsDetail" class="goods-card" :thumb="goodsPic">
    </van-card>
    <template #right>
      <van-button square text="删除" type="danger" class="delete-button"></van-button>
    </template>
  </van-swipe-cell>
</template>

<script>
import Vue from 'vue'
import {SwipeCell, Button, Card} from 'vant';
import {Dialog} from "vant";

Vue.use(SwipeCell);
Vue.use(Button);
Vue.use(Dialog);
Vue.use(Card);

export default {
  name: "ShoppingCartItem",
  data() {
    return {}
  },
  props: [
    'price', 'num', 'goodName', 'goodsDetail', "goodsPic"
  ],
  methods: {
    beforeClose({position, instance}) {
      switch (position) {
        case 'right':
          Dialog.confirm({
            message: "确认要删除吗？",
          }).then(() => {
            instance.close();
          });
      }
    }
  }
}
</script>

<style>
.goods-card {
  margin: 0;
  background-color: white;
}

.delete-button {
  height: 100%;
}
</style>

<style scoped>

</style>