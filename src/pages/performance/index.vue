<template>
  <div class="performance">
    <div class="p-header">
      <div class="result">
        <h1 class="title">检测结果：78分</h1>
        <p>当前检测模型：个人博客页面</p>
        <p>检测路径：<a class="path" href="http://blog.naice.me">http://blog.naice.me</a></p>
        <p>检测时间：2020/12/22 下午5:45:03</p>
      </div>
    </div>
    <div class="result-detail">
      <div class="title">扣分项</div>
      <ul class="list">
        <li class="item">
          <div class="sub-title">
            <h3>1、阿斯蒂芬离开家阿斯兰的空间</h3>
            <div>
              <i class="iconfont iconjinggao"></i>
              <i class="iconfont iconarrow-right"></i>
            </div>
          </div>
          <div class="extend">
            <div>
              <p>展开信息</p>
            </div>
          </div>
        </li>
        <li class="item">
          <div class="sub-title">
            <h3>2、阿斯蒂芬离开家阿斯兰的空间</h3>
            <div>
              <i class="iconfont iconjinggao"></i>
              <i class="iconfont iconarrow-right"></i>
            </div>
          </div>
          <div class="extend">
            <div>
              <p>展开信息</p>
            </div>
          </div>
        </li>
        <li class="item">
          <div class="sub-title">
            <h3>3、阿斯蒂芬离开家阿斯兰的空间</h3>
            <div>
              <i class="iconfont iconjinggao"></i>
              <i class="iconfont iconarrow-right"></i>
            </div>
          </div>
          <div class="extend">
            <div>
              <p>展开信息</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { http } from "@/utils/http";
import { MessageBoxData } from "element-plus/lib/el-message-box/src/message-box.type";
import { computed, defineComponent, getCurrentInstance, onMounted, onUpdated } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  name: 'Performance',
  props: {},
  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.performance {

}
.p-header {
  height: 500px;
  background: #45ACE3;
  overflow: hidden;
  .result {
    width: 1000px;
    margin: 120px auto 0 auto;
    text-align: center;
    color: #ffffff;
    .title {
      font-size: 40px;
      font-style: normal;
      font-weight: normal;
      margin-bottom: 12px;
    }
    p{
      line-height: 30px;
    }
    .path {
      color: #ffffff;
      text-decoration: none;
    }
  }
}
.result-detail {
  width: 1000px;
  background: #ffffff;
  height: 500px;
  margin: -200px auto 0 auto;
  border-radius: 6px;
  box-shadow: 0 10px 10px #e3e3e3;
  box-sizing: border-box;
  padding: 40px;
  .title {
    font-size: 16px;
    border-bottom: 1px solid #eaeaea;
    padding-bottom: 20px;
    position: relative;
    text-indent: 12px;
    &::before{
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 6px;
      height: 16px;
      background: red;
    }
  }
  .item {
    color: #262626;
    font-size: 14px;
    border-bottom: 1px solid #eaeaea;
    padding: 16px 0;
  }
  .sub-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    .iconfont{
      font-size: 14px;
    }
    .iconjinggao {
      margin-right: 10px;
      color: red;
    }
  }
  .extend {
    width: 100%;
    box-sizing: border-box;
    padding: 0 20px;
    height: 0;
    overflow: hidden;
    transition: height 0.3s;
  }
}
</style>
