<template>
  <div class="header">
    <div class="heander-content">
      <div class="logo"><i class="iconfont iconyingyan"></i>鹰眼性能</div>
      <div class="nav">
        <router-link to="/">首页</router-link>
        <router-link to="/about">鹰眼排行</router-link>
        <router-link to="/docs">鹰眼文档</router-link>
        <router-link to="/about">鹰眼收录</router-link>
        <router-link to="/about">关于鹰眼</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'demo',
  props: {
    msg: {
      type: String,
      default: ''
    }
  }
})
</script>

<style lang="scss" scoped>
.header{
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  z-index: 1;
  color: #ffffff;
}
.heander-content {
  width: $mainWidth;
  @include boxCenter;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  font-size: 24px;
  .iconfont{
    font-size: 24px;
    margin-right: 10px;
  }
}
.nav {
  a {
    margin-left: 50px;
    text-decoration: none;
    color: #ffffff;
    font-size: 16px;
  }
}
</style>
