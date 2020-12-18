<template>
  <div>{{title}}</div>
  <button @click="setTitle('nnnnn')">setTitle</button>
  <button @click="nextTickSetTitle('nextTickSetTitle')">nextTickSetTitle</button>
</template>

<script lang="ts">
import { computed, defineComponent, inject, onMounted, onUpdated, reactive } from "vue";
import { useStore } from "vuex";


export default defineComponent({
  name: 'Home',
  props: {},
  setup() {
    const http = inject('http');
    console.log(http);
    const store = useStore();
    const title = computed(() => store.state.title);
    const setTitle = (title: string): void => {
      store.commit('setTitle', title);
    };
    const nextTickSetTitle = async (title: string): Promise<void> => {
      await store.dispatch('nextTickSetTitle', title);
    };
    
    onMounted(() => {
      console.log('mounted')
    });
    onUpdated(() => {
      console.log('update');
    });
    return {
      title,
      setTitle,
      nextTickSetTitle
    }
  }
})
</script>
