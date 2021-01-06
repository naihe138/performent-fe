<template>
  <Header />
  <router-view/>
</template>

<script>
import { defineComponent } from 'vue';
import Header from './components/header';
export default defineComponent({
  components: {
    Header
  }
});
</script>
<style>

</style>
