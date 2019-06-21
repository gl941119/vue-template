/**
 * @author zhongyuan
 * @date 2018/12/19 11:20
 **/
import store from '@/store'
export default{
  inserted (el, binding, vnode) {
    const { value } = binding
    let role = store.getters && store.getters['user/getUserType']
    const roles = [role]
    if (value && value instanceof Array && value.length > 0) {
      const permissionRoles = value

      const hasPermission = roles.some(role => {
        return permissionRoles.includes(role)
      })

      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    } else {
      throw new Error(`need roles! Like v-permission="['admin','editor']"`)
    }
  }
}
