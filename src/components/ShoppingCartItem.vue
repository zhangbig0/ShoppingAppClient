<template>
  <van-swipe-cell :before-close="beforeClose">

    <van-checkbox v-model="checked" :name="goods.goodsId"
                  style="margin-top: 3rem;margin-left: 0.5rem; display: inline-block;float:left"
    />

    <van-card :desc="goodsDetail" :price='price.toString()'
              :thumb="goodsPic" :thumb-link="'/goodsDetail/'+goods.goodsId" :title="goodName"
              class="goods-card" style="margin-left:2rem">
      <template #footer>
        <van-stepper :value="numDuplicate" async-change @change="onChange"/>
      </template>
    </van-card>
    <template #right>
      <van-button class="delete-button" square text="删除" type="danger"></van-button>
    </template>

  </van-swipe-cell>
</template>

<script>
import Vue from 'vue'
import {Button, Card, Checkbox, CheckboxGroup, Col, Dialog, Icon, Row, Stepper, SwipeCell} from 'vant';

Vue.use(Col);
Vue.use(Row);
Vue.use(Stepper);
Vue.use(Icon);
Vue.use(SwipeCell);
Vue.use(Button);
Vue.use(Dialog);
Vue.use(Card);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);

export default {
  name: "ShoppingCartItem",
  data() {
    return {
      user: JSON.parse(sessionStorage.getItem("User")),
      checked:this.goods.checked,
      numDuplicate: this.num
    }
  },
  props: [
    'price', 'num', 'goodName', 'goodsDetail', "goodsPic", "goods", "goodsList", "totalPrice", "goodsTotalPrice"
  ],
  methods: {
    deleteCartItem: function (instance) {

      this.$axios.delete("https://localhost:8000/api/ShoppingBrackets/DeleteShoppingBracketGoods/" +
          this.user.id + "/" + this.goods.goodsId
      ).then((response) => {
        this.$emit('totalPriceChange', response.data.totalPrice)
            if (response.status === 200) {
              this.goodsList.forEach((item, index, arr) => {
                if (item.goodsId === this.goods.goodsId) {
                  arr.splice(index, 1);
                }
              });
            }
          }
      )
      instance.close();
    },

    beforeClose({position, instance}) {
      switch (position) {
        case 'right':
          Dialog.confirm({
            message: "确认要删除吗？",
          }).then(() => {
            this.deleteCartItem(instance);
          });
      }
    },
    onChange(value) {
      let user = JSON.parse(sessionStorage.getItem("User"));
      this.$axios.get("https://localhost:8000/api/ShoppingBrackets/ModifyGoodsToUserShoppingBracket/" +
          user.id + "/" +
          this.goods.goodsId + "/" +
          this.numDuplicate.toString()).then((response) => {
        if (response.status === 200) {
          this.numDuplicate = value;
          this.$emit('totalPriceChange', response.data.totalPrice);
        }
      })
    },

    onCheckedClick() {

      this.$axios.get('https://localhost:8000/api/ShoppingBrackets/ModifyShoppingBracketGoodsChecked/' +
          this.user.id + '/' + this.goods.goodsId, {
        params: {
          isChecked: this.checked,
        }
      })
    }
  },
  mounted() {
    this.checked = this.goods.checked
  }
}
</script>

<style>
.goods-card {

  background-color: white;
}

.delete-button {
  height: 100%;
}
</style>

<style scoped>

</style>