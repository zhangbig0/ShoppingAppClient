<template>
  <div>
    <van-checkbox-group ref="checkboxGroup" v-model="result" @change="onCheckGroupChange">
      <shopping-cart-item v-for="item in this.shoppingCartData" v-bind:key="item.goodsName"
                          :checked="item.checked" :good-name="item.goodsName" :goods="item"
                          :goods-detail="item.goodsDecs" :goods-list="shoppingCartData" :goods-pic="item.goodsPic"
                          :goods-total-price="item.goodsTotalPrice" :num="item.goodsNum" :price="item.goodsPrice"
                          :total-price="totalPrice" @totalPriceChange="totalPriceChange"/>
    </van-checkbox-group>
<!--    <div style="height: 2rem"></div>-->
    <van-submit-bar :price="totalPrice*100" button-text="结算" style="margin-bottom: 3.5rem" @submit="onSubmit">
      <van-checkbox ref="allCheckBox" v-model="checked" @click="checkAll">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
import ShoppingCartItem from "../components/ShoppingCartItem";
import {Checkbox, CheckboxGroup, SubmitBar} from 'vant';
import '@vant/touch-emulator';
import Vue from 'vue'

Vue.use(Checkbox);
Vue.use(CheckboxGroup);

Vue.use(SubmitBar)
export default {
  name: "ShoppingCart",
  components: {ShoppingCartItem},
  data() {
    return {
      shoppingCartData: [],
      user: JSON.parse(sessionStorage.getItem("User")),
      checked: undefined,
      result: [],
      shoppingCart: undefined,
      totalPrice: undefined
    }
  },
  methods: {
    checkAll() {
      this.$refs.checkboxGroup.toggleAll(this.checked);
    },
    onCheckGroupChange() {
      this.$axios.post(this.baseUrl+"/api/ShoppingBrackets/ModifyShoppingBracketGoodsCheckedGroup/" + this.user.id, this.result, {
        headers: {
          "content-type": "application/json; charset=utf-8"
        }
      }).then(response => {
        this.shoppingCart = response.data;
        this.totalPrice = response.data.totalPrice;

        if (this.result.length === this.shoppingCartData.length) {
          // this.checked =true;
          this.$refs.allCheckBox.toggle(true);
        } else {
          // this.checked =true;
          this.$refs.allCheckBox.toggle(false);
        }
      })
    },
    totalPriceChange(data) {
      this.totalPrice = data;
      if (this.result.length === this.shoppingCartData.length) {
        // this.checked =true;
        this.$refs.allCheckBox.toggle(true);
      } else {
        // this.checked =true;
        this.$refs.allCheckBox.toggle(false);
      }
    },
    onSubmit(){
      this.$router.push({name:'ConfirmOrder', path:'/confirmOrder'});
    }
  },
  mounted() {
    this.$axios.get(this.baseUrl+"/api/ShoppingBrackets/GetShoppingBracketByUser/" + this.user.id,)
        .then(response => {
          let data = response.data;
          let goodsList = data.goodsList;
          console.log(response.data)
          this.shoppingCart = response.data;
          this.totalPrice = response.data.totalPrice
          goodsList.forEach(
              (value) => {
                this.shoppingCartData.push({
                  goodsId: value.id,
                  goodsName: value.name,
                  goodsDecs: "",
                  goodsPrice: value.price,
                  goodsNum: value.num,
                  goodsPic: value.imgSrc,
                  goods: value,
                  checked: value.checked,
                  goodsTotalPrice: value.totalPrice
                });

                if (value.checked === true) {
                  this.result.push(value.id)
                }
              }
          )
        }).then(() => {
      if (this.result.length === this.shoppingCartData.length) {
        console.log(this.result.length)
        console.log(this.shoppingCartData.length)
        this.$refs.allCheckBox.toggle(true);
      } else {
        this.$refs.allCheckBox.toggle(false);
      }
    })
  }
}
</script>

<style scoped>

</style>