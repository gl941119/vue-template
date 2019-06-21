const axios = require('axios')
const swaggerUrl = 'http://172.16.170.40:8085/v2/api-docs'
// http://172.16.170.40:8085/swagger-ui.html#/
let fs = require("fs")
let text = `/* eslint-disable */
import xhr from '@http/http'
`
let factory = (data) => {
  // console.log(data.method)
  let arg = 'params'
  if (data.method === 'post' || data.method === 'put') {
    arg = 'body'
  }
  return `
// ${data.remark}
export const ${data.name} = (${data.params.length === 0 ? arg : data.params}) => xhr(\`${data.url}\`, {method: '${data.method}'${data.params.length === 0 ? ', ' + arg : ``}})
  `
}
let handleUrl = (k, v) => {
  let obj = {
    url: '',
    params: [],
    method: '',
    name: '',
    remark: ''
  }
  let reg = /\{\w{0,}\}/g
  obj.url = '.' + k.replace(reg, '\$ $&').replace(/\s*/g, '')
  let reg2 = /(?<=\{).+?(?=\})/g
  obj.params = obj.url.match(reg2) || []
  for (let item in v) {
    // console.log(item)
    obj.method = item
    obj.remark = v[item].summary
    obj.name = v[item].operationId
  }
  // console.log(obj)
  text += factory(obj)
  return obj
}

axios.get(swaggerUrl)
  .then(res => {
    for (let item in res.data.paths) {
      handleUrl(item, res.data.paths[item])
    }
    fs.writeFile('./src/api/auto.js', text, function (err) {
      if (err) {
        console.log(err)
      }
    })
  })
