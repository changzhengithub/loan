
// 验证手机号
function checkPhone(phone) {
    phone = phone ? phone.replace(/\s+/g, '') : phone
    if (!phone) {
        alertMsg('请输入手机号')
        return false
    }
    if (phone.length < 11) {
        alertMsg('手机号长度不足11位')
        return false
    } else {
        let pat = new RegExp('^(?:13|14|15|17|18)[0-9]{9}$', 'i')
        if (!pat.test(phone)) {
            alertMsg('手机号格式错误')
            return false
        }
        return true
    }
}

// 验证验证码
function checkCode(code) {
    code = code ? code.replace(/\s+/g, '') : code
    if (!code) {
        alertMsg('请输入验证码')
        return false
    } else {
        let pat = new RegExp('^[0-9]{6}$', 'i')
        if (!pat.test(code)) {
            alertMsg('验证码格式错误')
            return false
        }
    }
    return true
}

// 验证密码
function checkPassword(password) {
    password = password ? password.replace(/\s+/g, '') : password
    if (!password) {
        alertMsg('密码不能为空')
        return false
    } else {
        let pat = new RegExp(/^[a-zA-Z0-9]{6,15}$/)
        if (!pat.test(password)) {
            alertMsg('密码格式错误')
            return false
        }
    }
    return true
}

// 跳转到新页面
function gotoPage(page, current) {
  // api.closeFrame({
  //   name: current
  // });
  api.openFrame({
      name: page,
      url: '../' + page + '/' + page + '.html',
      rect: {
          x: 0,
          y: 0,
          w: 'auto',
          h: 'auto'
      },
      animation: {
        type: "push",
        subType: "from_right",
        duration: 300
      },
      bounces: false
  });
}

// 关闭当前页
function goBack(page) {
  api.closeFrame({
    name: page
  });
}

// 弹出提示信息
function alertMsg(msg) {
  api.toast({
    msg: msg,
    duration: 2000,
    location: 'middle'
  });
}

// 禁止点击按钮
function closeBtnClick(btnId) {
  $api.attr(btnId, 'disabled', 'disabled');
}

// 取消禁止点击按钮
function openBtnClick(btnId) {
  $api.removeAttr(btnId, 'disabled');
}
