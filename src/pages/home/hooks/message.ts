import { _prompt } from '@/public/hook/message'


export function lPrompt () {
  return _prompt()('请输入验证码', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消'
    }
  )
}
