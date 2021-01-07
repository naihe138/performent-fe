<template>
  <div class="home">
    <div class="content">
      <div class="searchbox">
        <div class="search">
          <h3 class="search-title">Eye Your Page Performent</h3>
          <div class="search-content">
            <input class="search-input" type="text" placeholder="请输入检测的网址" />
            <div class="search-btn">开始检测</div>
          </div>
        </div>
      </div>
    </div>
    <div class="info">
      <div class="card">
        <div class="icon"><i class="iconfont iconjiance"></i></div>
        <div class="detail">
          <h3>性能检测</h3>
          <p>输入要检测的网址，点击Eye按钮，实时生成页面性能报告</p>
        </div>
      </div>
      <div class="card">
        <div class="icon"><i class="iconfont iconjiance"></i></div>
        <div class="detail">
          <h3>性能检测</h3>
          <p>输入要检测的网址，点击Eye按钮，实时生成页面性能报告</p>
        </div>
      </div>
      <div class="card">
        <div class="icon"><i class="iconfont iconjiance"></i></div>
        <div class="detail">
          <h3>性能检测</h3>
          <p>输入要检测的网址，点击Eye按钮，实时生成页面性能报告</p>
        </div>
      </div>
      <div class="card">
        <div class="icon"><i class="iconfont iconjiance"></i></div>
        <div class="detail">
          <h3>性能检测</h3>
          <p>输入要检测的网址，点击Eye按钮，实时生成页面性能报告</p>
        </div>
      </div>
    </div>
    <div class="footer">
      脚步
    </div>
    <!-- <el-form ref="form" :model="webSit" label-width="120px">
      <el-form-item label="测试地址">
        <el-input v-model="webSit.url"></el-input>
      </el-form-item>
      <el-form-item label="登陆手机号">
        <el-input v-model="webSit.phone"></el-input>
      </el-form-item>
      <el-form-item label="测试验证码">
        <el-input v-model="webSit.code"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即测试</el-button>
      </el-form-item>
    </el-form> -->
  </div>
</template>

<script lang="ts">
import { http } from "@/utils/http";
import { MessageBoxData } from "element-plus/lib/el-message-box/src/message-box.type";
import { computed, defineComponent, getCurrentInstance, onMounted, onUpdated } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  name: 'Home',
  props: {},
  setup() {
    const $prompt = getCurrentInstance()?.appContext.config.globalProperties.$prompt;
    const store = useStore();
    const webSit = computed(() => store.state.webSit);
    
  
    const onSubmit = async () => {
      console.log('测试开始了', webSit)
      const res: any = await http('getCode', {
        url: webSit.value.url,
        phone: webSit.value.phone
      });
      // 如果需要登陆，则需要填写验证码
      if(res.needLogin) {
        const msgData: MessageBoxData = await $prompt('请输入4位数验证码', '提示', { 
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /\d{6}/,
          inputErrorMessage: '验证码必须是6位数哦！'
        });
        // 登陆，检测
        const res: any = await http('getScore', {
          url: webSit.value.url,
          phone: webSit.value.phone,
          code: msgData.value
        });

        console.log(res)
      }
      

      // const res: any = await http('getScore', {
      //   ...webSit.value
      // });
      // console.log(res)

    }
    onMounted(() => {
      console.log('mounted')
    });
    onUpdated(() => {
      console.log('update');
    });
    return {
      webSit,
      onSubmit
    }
  }
})
</script>

<style lang="scss" scoped>
.content {
  padding-top: 80px;
  background-image: radial-gradient(#58f6e4, #0295d7);
}
.searchbox {
  width: $mainWidth;
  @include boxCenter;
  height: 600px;
  overflow: hidden;
}
.search {
  width: 600px;
  height: 100px;
  margin: 200px auto 0 auto;
  .search-title {
    font-weight: normal;
    font-size: 40px;
    text-align: center;
    color: #ffffff;
  }
  .search-content {
    margin-top: 20px;
    display: flex;
    height: 40px;
  }
  .search-input {
    border: 0;
    outline: none;
    flex: 1;
    padding: 0 12px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  .search-btn {
    width: 100px;
    background: #FEB300;
    color: #ffffff;
    text-align: center;
    line-height: 40px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
}
.info {
  width: $mainWidth;
  @include boxCenter;
  padding: 100px 0;
  display: flex;
  justify-content: space-between;
  .card {
    width: 220px;
    height: 200px;
    text-align: center;
    overflow: hidden;
    background: #ffffff;
    box-shadow: 0 0 20px #ccc;
    border-radius: 4px;
  }
  .icon {
    margin-top: 10px;
    margin-bottom: 20px;
    font-size: 60px;
    .iconfont{
      font-size: 50px;
      color: #666666;
    }
  }
  .detail{
    width: 90%;
    margin: 0 auto;
    h3 {
      font-size: 18px;
      color: #333333;
    }
    p {
      margin-top: 10px;
      font-size: 14px;
      line-height: 18px;
      color: #666666;
    }
  }
}
.footer {
  width: 100%;
  height: 120px;
  background: #0295d7;
}
</style>