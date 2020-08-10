var code; //在全局 定义验证码
function createCode() {
    code = new Array();
    var codeLength = 4; //验证码的长度
    var checkCode = document.getElementById("checkCode");
    checkCode.value = "";
    var selectChar = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
    for (var i = 0; i < codeLength; i++) {
        var charIndex = Math.floor(Math.random() * 36);
        code += selectChar[charIndex];
    }
    if (code.length != codeLength) {
        createCode();
    }
    checkCode.value = code;
}

function validate() {
    const username = document.getElementById('username').value;
    const ID = document.getElementById('ID').value;
    const inputCode = document.getElementById("code").value.toUpperCase();
    if (username === '') {
        // alert("请输入用户名！");
        // createCode();
        return false;
    } else if (ID === '') {
        // alert("请输入账号！");
        // createCode();
        return false;
    } else if (inputCode.length <= 0) {
        // alert("请输入验证码！");
        // createCode();
        return false;
    } else if (inputCode != code) {
        alert("验证码输入错误！");
        createCode();
        return false;
    } else {
        // alert("登录成功！");
        return true;
    }
}