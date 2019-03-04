
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

//验证银行卡号
 function checkBankNo(card) {
  card = card ? card.replace(/\s+/g, '') : card
  if (!card) {
    alertMsg('银行卡号不能为空')
    return false
  } else {
    return true
  }
 }


// 跳转到新页面
function gotoPage(page) {
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

// 清楚输入框值
function clearInputVal(self) {
  var inputVal = $api.prev(self);
  $api.val(inputVal,'');
  inputVal.focus()
  $api.css(self, 'display: none');
}

// 设置input和清除按钮
function setInputVal(self, num) {
  if (!self.value) {
    $api.css($api.next(self), 'display: none;');
  } else {
    if (num) {
      if(self.value.length > num) self.value = self.value.slice(0, num)
    }
    $api.css($api.next(self), 'display: block;');
  }
}

// 禁止点击按钮
function closeBtnClick(btnId) {
  $api.attr(btnId, 'disabled', 'disabled');
}

// 取消禁止点击按钮
function openBtnClick(btnId) {
  $api.removeAttr(btnId, 'disabled');
}
