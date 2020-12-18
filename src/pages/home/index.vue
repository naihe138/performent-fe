<template>
  <el-form ref="form" :model="webSit" label-width="120px">
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
  </el-form>
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
