<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Vue from 'vue'
import {Button} from 'vant'

Vue.use(Button)

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
