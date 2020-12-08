<template>
  <el-form ref="form" :model="webSit" label-width="120px">
    <el-form-item label="测试地址">
      <el-input v-model="webSit.url"></el-input>
    </el-form-item>
    <el-form-item label="登陆手机号">
      <el-input v-model="webSit.phone"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即测试</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { http } from "@/utils/http";
import { computed, defineComponent, inject, onMounted, onUpdated } from "vue";
import { useStore } from "vuex";


export default defineComponent({
  name: 'Home',
  props: {},
  setup() {
    console.log(http);
    const store = useStore();
    const webSit = computed(() => store.state.webSit);

    const onSubmit = async () => {
      console.log('测试开始了', webSit)
      const res = await http('getScore', {
        url: webSit.value.url,
        phone: webSit.value.phone
      });
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
