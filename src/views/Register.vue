<template>
  <div>
    <van-nav-bar
        left-arrow
        left-text="返回"
        title="注册"
        @click-left="onClickLeft"
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
      <van-field
          v-model="password2"
          :rules="[{ required: true, message: '请再填写同样的密码' }]"
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
import {Field, Form, NavBar, Toast} from 'vant';

Vue.use(Toast);
Vue.use(Field);
Vue.use(Form);
Vue.use(NavBar);

export default {
  name: "Register",
  data() {
    return {
      username: '',
      password: '',
      password2: '',
    }
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },

    onSubmit() {
      this.$axios.post(this.baseUrl+"/api/Customers/Register", undefined, {
        params: {
          username: this.username,
          password: this.password,
        }
      }).then(response => {
        let data = response.data;
        if (data !== null && data !== undefined) {
          sessionStorage.setItem("User", JSON.stringify(data))
          Toast.success("注册成功");
          this.$router.replace({name: 'User', path: '/user'});
        }
      })
    }
  }
}
</script>

<style scoped>

</style>