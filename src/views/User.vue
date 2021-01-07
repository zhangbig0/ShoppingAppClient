<template>
  <div>
    <van-row>
      <van-col span="4">
        <van-image height="5rem" round width="5rem"></van-image>
      </van-col>
      <van-col offset="14" span="8">
        <div v-if="user!=null" class="text-right">
          {{ user.account }}
        </div>
        <div v-else>
          <router-link>前往登录</router-link>
        </div>
      </van-col>
    </van-row>
  </div>

</template>

<script>
import Vue from 'vue'
import {Col, Image, Row} from 'vant';

Vue.use(Col);
Vue.use(Row);
Vue.use(Image);
export default {
  name: "User",
  data() {
    return {
      user: null,
    }
  },
  created() {

  },
  mounted() {
    let user = sessionStorage.getItem("User");
    if (user === null) {
      this.$router.push({name: 'Login', path:'/login'});
    } else {
      this.user = sessionStorage.getItem("User");
    }
  }
}
</script>

<style scoped>
.text-center {
  text-align: right;
}
.text-right{
  text-align: right;
}
</style>