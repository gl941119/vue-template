import http from '@http/http'
export const _getUserInfo = (errMsg) => http.GET('./api/userInfo', {}, errMsg)
// export const _getUserInfo = () => http.POST(' https://easy-mock.com/mock/5ae2d8b22583f30c65a45cea/xd-vue-boilerplate/api/userInfo')
