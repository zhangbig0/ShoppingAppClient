<template>
  <div>
    <van-nav-bar
        left-arrow
        left-text="返回"
        right-text="注册"
        title="登录"
        @click-left="onClickLeft"
        @click-right="onClickRight"
    />
    <van-form @submit="onSubmit">
      <van-field
          v-model="username"
          :rules="[{ required: true, message: '请填写用户名' }]"
          label="用户名"
          name="用户名"
          placeholder="用户名"
      />
      <van-field
          v-model="password"
          :rules="[{ required: true, message: '请填写密码' }]"
          label="密码"
          name="密码"
          placeholder="密码"
          type="password"
      />
      <div style="margin: 16px;">
        <van-button block native-type="submit" round type="info">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import Vue from 'vue';
import {Field, Form, NavBar} from 'vant';


Vue.use(Field);
Vue.use(Form);
Vue.use(NavBar);
export default {
  name: "Login",
  data() {
    return {
      username: null,
      password: null,
    }
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    onClickRight() {
      this.$router.push({name: 'Register', path: '/register'});
    },
    onSubmit() {
      this.$axios.post(this.baseUrl+"/api/Customers/Login", undefined, {
        headers: {
          "content-type": "application/json; charset=utf-8"
        },
        params: {
          username: this.username,
          password: this.password
        }
      }).then(response => {
        if (response.data !== null && response.data !== undefined) {
          sessionStorage.setItem("User", JSON.stringify(response.data));
          this.$router.replace({name:'User', path:'/user'});
        }
      })
    }
  }
}
</script>

<style scoped>

</style>