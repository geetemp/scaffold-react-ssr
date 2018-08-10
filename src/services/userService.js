/**
 * Created by common on 2017/8/1.
 */
import xhr from './xhr'
import {method_post} from './xhr/config'

/**
 * 用户认证的 API
 */
function checkLogin() {
  return xhr({url: '/v3_0/user/isLogin'})
}


function login(userData) {
  const url = 'password' in userData ? '/v3_0/user/login' : '/v3_0/user/authLogin';
  return xhr({
    method: method_post,
    url: url,
    body: userData
  })
}

function logout() {
  return xhr({url: '/v3_0/user/logout'})
}

function signUp(regInfo) {
  return xhr(
    {
      url: '/v3_0/user/register',
      body: regInfo,
      method: method_post
    })
}

function restPwd(pwd) {
  return xhr(
    {
      url: '/v3_0/user/forgetPwd',
      body: pwd,
      method: method_post
    })
}

//获取第三方账号信息
function getThreePartInfo(code) {
  return xhr(
    {
      url: '/v3_0/user/thirdInfo',
      body: code,
    })
}

//绑定已有账号
function bindAccount(accountInfo) {
  return xhr(
    {
      url: '/v3_0/user/bind',
      method: 'post',
      body: accountInfo,
    })
}

//绑定注册账号
function bindSignUpAccount(signUpInfo) {
  return xhr(
    {
      url: '/v3_0/user/bindRegister',
      method: 'post',
      body: signUpInfo,
    })
}

function modifyUserInfo(userInfo) {
  return xhr(
    {
      url: '/v3_0/user/editUser',
      body: userInfo,
      method: method_post
    })
}

function modifyPhone(newPhone) {
  return xhr(
    {
      url: '/v3_0/user/editPhone',
      body: newPhone,
      method: method_post
    })
}

//解绑微信
function unBindWeChat(thirdUserId) {
  return xhr({url: '/v3_0/weChat/unbind', body: thirdUserId})
}
//解绑QQ
function unBindQQ(thirdUserId) {
  return xhr({url: '/v3_0/qq/unbind', body: thirdUserId})
}
//解绑微博
function unBindWeiBo(thirdUserId) {
  return xhr({url: '/v3_0/weiBo/unbind', body: thirdUserId})
}

function setEmail(email) {
  return xhr({url: '/v3_0/user/editEmail', body: email, method: method_post})
}

//完善个人信息接口
function refineUserInfo(userInfo) {
  return xhr({url: '/v3_0/user/refineUser', body: userInfo, method: method_post})
}

export {
  checkLogin,
  login,
  logout,
  signUp,
  restPwd,
  getThreePartInfo,
  bindAccount,
  bindSignUpAccount,
  modifyUserInfo,
  modifyPhone,
  unBindWeChat,
  unBindQQ,
  unBindWeiBo,
  setEmail,
  refineUserInfo,
}
