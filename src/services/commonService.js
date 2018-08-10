/**
 * Created by common on 2017/8/8.
 */

import xhr from './xhr'
import {method_post} from './xhr/config'

/**
 * 公共请求 API
 */
function reqVerifyCode(param) {
  return xhr({url: '/v3_0/user/sendMsg', body: param, method: method_post})
}

function reqGraphicalCode() {
  return xhr({url: '/v3_0/user/captcha', method: method_post})
}

function reqEmailCode(param) {
  return xhr({url: '/v3_0/user/sendEmailCode', body: param, method: method_post})
}


export {
  reqVerifyCode,
  reqGraphicalCode,
  reqEmailCode,
}
