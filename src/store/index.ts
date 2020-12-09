import { nextTick } from 'vue';
import { createStore, createLogger, ActionContext } from 'vuex'

interface State {
  title: string;
  webSit: WebSit;
}
interface WebSit {
  url: string;
  phone: string;
  code: string;
}
export default createStore({
  state(): State {
    return {
      title: '',
      webSit: {
        url: 'https://static-dsu.wesure.cn/sitapp/app0/long-term-course/home?courseId=shebao001&channelCode=rukou',
        phone: '13640915594',
        code: ''
      }
    }
  },
  mutations: {
    setTitle(state: State, title: string) {
      state.title = title;
    }
  },
  actions: {
    async nextTickSetTitle({commit}: ActionContext<State, State>, title: string) {
      await nextTick();
      commit('setTitle', title);
    }
  },
  modules: {
  },
  plugins: process.env.NODE_ENV === 'development' ? [createLogger()] : []
})
