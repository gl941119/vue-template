/**
 * @author zhongyuan
 * @date 2018/12/19 11:57
 **/
import permission from './permissionBtn'

const install = function (Vue) {
  Vue.directive('permission', permission)
}

if (window.Vue) {
  window['permission'] = permission
  Vue.use(install); // eslint-disable-line
}

permission.install = install
export default permission
