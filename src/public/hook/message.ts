import { getCurrentInstance } from "vue";

export function _prompt() {
  return getCurrentInstance()?.appContext.config.globalProperties.$prompt;
}
