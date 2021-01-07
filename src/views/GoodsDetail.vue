<template>
  <div>
    <van-image class="good-pic" src="https://img.yzcdn.cn/vant/cat.jpeg"></van-image>
    <van-goods-action style="margin-bottom: 3rem">
      <van-goods-action-icon color="#ee0a24" icon="chat-o" text="客服"/>
      <van-goods-action-icon :badge="5" icon="cart-o" text="购物车" @click="onClickCart"/>
      <van-goods-action-icon color="#ff5000" icon="star-o" text="未收藏"/>
      <van-goods-action-button text="加入购物车" type="warning" @click="onClickAddCart"/>
      <van-goods-action-button text="立即购买" type="danger"/>
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
  data() {
    return {
      good: {},
      user: undefined,
    }
  },
  props: [
    'goodsId',
  ],
  methods: {
    onClickIcon() {
      Toast("点击图标");
    },
    onClickButton() {
      Toast("点击按钮");
    },
    onClickCart() {
      this.$router.push({name: 'ShoppingCart', path: 'shoppingCart'});
    },
    onClickAddCart() {
      this.user = JSON.parse(sessionStorage.getItem("User"));
      console.log(this.user);

      console.log(JSON.stringify(this.good));
      this.$axios.post("https://localhost:8000/api/ShoppingBrackets/AddGoodsToUserShoppingBracket/" + this.user.id+"/"+this.goodsId, undefined, {
          headers: {
            'Content-Type': 'application/json;charset=UTF-8',
          }

        }).then(response => {
          if (response.data !== null && response.data !== undefined) {
            Toast.success("加入购物车成功");
          }
        });
    }
  },
  mounted() {
    this.goodsId = this.$route.params.id;
  }
}
</script>

<style scoped>
.good-pic {
  width: 100%;
}
</style>