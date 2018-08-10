/**
 * Created by common on 2017/8/1.
 */
import dotProp from 'dot-prop-immutable'
import * as userService from 'services/userService'
// ================================
// Action Type
// ================================
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';

const PHONE_SET = 'PHONE_SET';  //设置手机号
const BIND_STATUS_SET = 'BIND_STATUS_SET'; //绑定状态设置
const EMAIL_SET = 'EMAIL_SET';  //邮箱设置

const USER_INFO_SET = 'USER_INFO_SET'; //设置用户信息
const USER_INFO_MODIFY = 'USER_INFO_MODIFY'; //修改用户信息
// ================================
// Action Creator
// ================================
const userInfoSet = (userData) => ({
  type: USER_INFO_SET,
  payload: userData
});

export const login = (formData) => {
  return dispatch => {
    return userService
      .login(formData)
      .then(
        re => {
          if (re.code === 0) {
            dispatch(userInfoSet(re.data));
          }
          return re;
        }
      )
  }
};

export const checkLogin = () => {
  return dispatch => {
    return userService
      .checkLogin()
      .then(
        re => {
          if (re.code === 0) {
            dispatch(userInfoSet(re.data));
          }
          return re;
        })
  }
};

export const logout = () => {
  return dispatch => {
    return userService
      .logout()
      .then((re) => {
          dispatch({
            type: LOG_OUT
          })
          return re;
        }
      )
  }
};

export const emptyUserInfo = () => (dispatch) => {
  return Promise.resolve()
    .then(() => dispatch({
      type: LOG_OUT
    }))
}

export const modifyUserBase = (param) => (dispatch, getState) => {
  // const {userData} = getState();
  // const {avatar, position_name, name} = userData;
  return userService
    .modifyUserInfo(param)
    .then((re) => {
      if (re.code === 0) {
        dispatch(userInfoSet(re.data));
      }
      return re;
    })
}

export const modifyUserInfo = (param) => ({
  type: USER_INFO_MODIFY,
  payload: param,
})

const phoneSet = (newPhone) => ({
  type: PHONE_SET,
  payload: newPhone
});

export const modifyPhone = (param) => (dispatch) => {
  return userService
    .modifyPhone(param)
    .then(re => {
      if (re.code === 0) {
        dispatch(phoneSet(param.new_phone));
      }
      return re;
    })
}

const bindStatusSet = (status) => ({
  type: BIND_STATUS_SET,
  payload: status
})

export const modifyBindStatus = ({bindType, bindValue, thirdUserId}) => (dispatch) => {
  let reqInterface = userService.unBindWeChat;
  let is_bind_key = 'is_bind_wechat';
  if (bindType === 'weChat') {
  } else if (bindType === 'qq') {
    reqInterface = userService.unBindQQ;
    is_bind_key = 'is_bind_qq';
  } else {
    reqInterface = userService.unBindWeiBo;
    is_bind_key = 'is_bind_weibo';
  }
  return reqInterface({thirdUserId}).then(re => {
    if (re.code === 0) {
      dispatch(bindStatusSet({'bindType': is_bind_key, bindValue}));
    }
    return re;
  })
}

const emailSet = (email) => ({
  type: EMAIL_SET,
  payload: email
})

export const emailSetReq = ({new_email, code, captcha}) => (dispatch) => {
  return userService.setEmail({new_email, code, captcha}).then(re => {
    if (re.code === 0) {
      dispatch(emailSet(new_email));
    }
    return re;
  })
}

//完善信息
export const refineUserInfo = (userInfo) => (dispatch) => {
  return userService.refineUserInfo(userInfo)
    .then(re => {
      if (re.code === 0) {
        dispatch(userInfoSet(re.data))
      }
      return re;
    })
}

/* default 导出所有 Actions Creator */
export default {
  login, checkLogin, logout
}

// ================================
// Action handlers for Reducer
// 本来更新 state 是 Reducer 的责任
// 但要把 ActionType 导出又引入实在太麻烦
// 且在 Reducer 中写 switch-case 实在太不优雅
// 故在此直接给出处理逻辑
// ================================
export const ACTION_HANDLERS = {
  [USER_INFO_SET]: (userData, {payload}) => payload, // payload is userData
  [LOG_OUT]: () => null,
  [PHONE_SET]: (userData, {payload}) => dotProp.set(userData, `phone`, payload),
  [BIND_STATUS_SET]: (userData, {payload}) => dotProp.set(userData, `${payload.bindType}`, payload.bindValue),
  [EMAIL_SET]: (userData, {payload}) => dotProp.set(userData, `email`, payload),
  [USER_INFO_MODIFY]: (userData, {payload}) => dotProp.set(userData, `${payload.key}`, payload.value),
};
