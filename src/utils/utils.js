/**
 * @description JavaScript 实现的 5 种数字千位符格式化方法
 * @case 10000 ---> 10,000
 * @params num
 */
export const toThousands1 = (num) => {
  num = (num || 0).toString().split("");
  let result = [],
    counter = 0;
  for (var i = num.length - 1; i >= 0; i--) {
    counter++;
    result.unshift(num[i]);
    if (!(counter % 3) && i != 0) {
      result.unshift(",");
    }
  }
  return result.join("");
};

export const toThousands2 = (num) => {
  num = (num || 0).toString();
  let result = "",
    counter = 0;
  for (var i = num.length - 1; i >= 0; i--) {
    counter++;
    result = num.charAt(i) + result;
    if (!(counter % 3) && i != 0) {
      result = "," + result;
    }
  }
  return result;
};

export const toThousands3 = (num) => {
  num = (num || 0).toString();
  let result = "";
  while (num.length > 3) {
    result = "," + num.slice(-3) + result;
    num = num.slice(0, num.length - 3);
  }
  if (num) {
    result = num + result;
  }
  return result;
};

export const toThousands4 = (num) => {
  num = (num || 0).toString();
  let temp = num.length % 3;
  switch (temp) {
    case 1:
      num = "00" + num;
      break;
    case 2:
      num = "0" + num;
      break;
  }
  return num.match(/\d{3}/g).join(",").replace(/^0+/, "");
};

export const toThousands5 = (num) => {
  return (num || 0).toString().replace(/(\d)(?=(\d{3})+$)/g, "$1,");
};

/**
 * @description JS十进制转二进制
 * @case 4 ---> '100'
 * @params num 十进制数字
 * @params Bits 补0操作
 */
export const toBinary1 = (num, Bits) => {
  let resArry = [];
  let xresArry = [];
  let i = 0;
  // 除2取余
  for (; num > 0; ) {
    resArry.push(num % 2);
    num = parseInt(num / 2);
    i++;
  }
  // 倒序排列
  for (let j = i - 1; j >= 0; j--) {
    xresArry.push(resArry[j]);
  }
  // 报错
  if (Bits < xresArry.length) {
    console.log("控制位小于转换位数");
  }
  // 补0操作
  if (Bits) {
    for (let r = xresArry.length; r < Bits; r++) {
      xresArry.unshift("0");
    }
  }
  return xresArry.join().replace(/,/g, "");
};
/**
 * @description JS十进制转二进制
 * @case 4 ---> '100'
 * @params num 十进制数字
 * @params len 最低位数，低于len补位，超过len不补位
 * @params str 补位字符
 */
export const toBinary2 = (num, len, str) => {
  let toBinary = parseInt(num || 0).toString(2);
  // 补位
  if (len && str) toBinary = toBinary.padStart(len, str);

  return toBinary;
};

/**
 * @description JS 二进制 转 十进制
 * @case '100' ---> 4
 * @params str 二进制字符串
 * @params Bits 补0操作
 * @desc 采用 parseInt(string, radix) 方法进行转换
 *       string： 必需。要被解析的字符串
 *       radix ： 可选。表示要解析的数字的基数。该值介于 2 ~ 36 之间。
 *       如果省略该参数或其值为 0，则数字将以 10 为基础来解析。
 *       如果它以 “0x” 或 “0X” 开头，将以 16 为基数。如果该参数小于 2 或者大于 36，则 parseInt() 将返回 NaN
 */
export const binaryToDecimalism = (str) => {
  return parseInt(str, 2);
};

/**
 * js数值计算 示例：funCalc([1.02,3,4])
 * @param {*} arrList 参数数组
 * @param {*} operator 操作符：1加法 2乘法
 * @param {*} precision 精度 默认2位
 */
export const test = (arg1, arg2) => {
  var m = 0,
    s1 = arg1.toString(),
    s2 = arg2.toString();
  try {
    m += s1.split(".")[1].length;
  } catch (e) {
    //
  }

  try {
    m += s2.split(".")[1].length;
  } catch (e) {
    //
  }
  return (
    (Number(s1.replace(".", "")) * Number(s2.replace(".", ""))) /
    Math.pow(10, m)
  );
};

/**
 * 获取请求全屏或者请求退出全屏API属性名称
 * @param {Array} names 属性名称
 * @param {HTMLElement} target 目标对象
 * @returns
 */
function getPropertyName(names, target) {
  return names.find((name) => name in target);
}

// 各种浏览器请求全屏API属性名称
const enterFullScreenName = getPropertyName(
  [
    "requestFullscreen",
    "mozRequestFullScreen",
    "webkitRequestFullscreen",
    "msRequestFullscreen",
  ],
  document.documentElement
);

/**
 * 指定元素全屏展示
 * @param {HTMLElement} element
 */
export const enterFullScreen = (element) => {
  enterFullScreenName && element[enterFullScreenName]();
};

// 各种浏览器请求全屏API属性名称
const exitFullScreenName = getPropertyName(
  [
    "exitFullscreen",
    "mozCancelFullScreen",
    "webkitExitFullscreen",
    "msExitFullscreen",
  ],
  document
);

/**
 * 退出全屏
 */
export const exitFullScreen = () => {
  exitFullScreenName && document[exitFullScreenName]();
};

// 获取当前处于全屏的元素的API属性名称
const fullEleName = getPropertyName(
  [
    "fullscreenElement",
    "mozFullScreenElement",
    "webkitFullscreenElement",
    "msFullScreenElement",
  ],
  document
);

/**
 * 获取处于全屏状态的元素
 * @returns
 */
export const fullEle = () => {
  return document[fullEleName] || null;
};

/**
 * 判断是否处于全屏状态
 * @returns false / true
 */
export const isFullScreen = () => {
  return !!fullEle();
};

/**
 * 进入全屏 / 退出全屏 切换
 * @param {HTMLElement} element
 */
export const toggleFullScreen = (element) => {
  isFullScreen() ? exitFullScreen() : enterFullScreen(element);
};

/**
 * js 组织机构代码正则校验
 * @created by 刘勇 2023-10-23 16:56:46
 * @Updated by 刘勇 2023-10-23 16:56:46
 * @description
 *  组织机构代码是由数字、字母和横线组成的，共9位或者10位。
 *  其中，第1位至第8位是数字或字母，第9位是校验码，第10位可以是数字、字母或者横线。
 */

export const checkOrgCode = (orgCode) => {
  if (!orgCode || orgCode.length !== 9 || !/[0-9A-Z]/.test(orgCode)) {
    return false;
  }
  var ws = [3, 7, 9, 10, 5, 8, 4, 2];
  var codes = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var sum = 0;
  for (var i = 0; i < 8; i++) {
    var code = orgCode.charAt(i);
    var index = codes.indexOf(code);
    sum += index * ws[i];
  }
  var c9 = 11 - (sum % 11);
  var c = c9 === 10 ? "X" : c9 === 11 ? "0" : c9.toString();
  return c === orgCode.charAt(8);
};

// 组织机构代码校验
export const checkOrgCardNumber = (value) => {
  if (value == "") {
    return false;
  } else if (value.length != 10) {
    return false;
  } else {
    // var patrn = /^[0-9A-Z]+$/;
    var reg = /[0-9A-HJ-NPQRTUWXY]{8}-[0-9A-HJ-NPQRTUWXY]/;
    if (reg.test(value) == false) {
      return false;
    } else {
      var regLast = /^[0-9X]+$/;

      var lastnum = value.substring(9, 10);

      if (regLast.test(lastnum) == false) {
        // alert("组织统一社会信用代码最后一位只可为数字或大写拉丁字母:X");
        // callback(
        //   new Error("组织统一社会信用代码最后一位只可为数字或大写拉丁字母 X")
        // );
        return false;
      } else {
        let value1 = value;
        let value2 = value;
        let newValue = value1.substring(0, 8) + value2.substring(9, 10);
        var ancode;
        var ancodeWeightValue;
        var sum = 0;
        var weightedArray = [3, 7, 9, 10, 5, 8, 4, 2]; //加权因子
        var str = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        for (var i = 0; i < newValue.length - 1; i++) {
          ancode = newValue.substring(i, i + 1);
          ancodeWeightValue = str.indexOf(ancode);
          sum = sum + ancodeWeightValue * weightedArray[i];
        }
        var rightLastnum = 11 - (sum % 11);
        if (rightLastnum == 10) rightLastnum = "X";
        if (rightLastnum == 11) rightLastnum = "0";
        if (lastnum != rightLastnum) {
          return false;
        } else {
          return true;
        }
      }
    }
  }
};

/**
 * JS全角转半角
 * @created by 刘勇 2023-10-31 08:43:37
 * @Updated by 刘勇 2023-10-31 08:43:37
 * @description
 *   JS全角转半角是指将字符串中的全角字符转换为半角字符。
 *   全角字符是指占用两个字符位置的字符，例如中文字符、日文字符等，而半角字符则只占用一个字符位置，例如英文字符、数字等。
 *   空格字符：全角空格为12288，半角空格为32
 *   其他字符：半角(33-126)，全角(65281-65374)；对应关系是：均相差65248
 */
export const toHalf = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    // 获取指定位置字符的Unicode编码
    let c = str.charCodeAt(i);
    if (c === 12288) {
      result += String.fromCharCode(32); // 将Unicode编码转化为字符
    } else if (c >= 65281 && c <= 65374) {
      result += String.fromCharCode(c - 65248);
    } else {
      result += str.charAt(i); // 获取指定位置的字符
    }
  }
  return result;
};

/**
 * JS 半角转全角
 * 'Hello World' => 'Ｈｅｌｌｏ Ｗｏｒｌｄ'
 * @created by 刘勇 2023-10-31 08:50:27
 * @Updated by 刘勇 2023-10-31 08:50:27
 * @description
 *   JS全角转半角是指将字符串中的全角字符转换为半角字符。
 *   全角字符是指占用两个字符位置的字符，例如中文字符、日文字符等，而半角字符则只占用一个字符位置，例如英文字符、数字等。
 *   空格字符：全角空格为12288，半角空格为32
 *   其他字符：半角(33-126)，全角(65281-65374)；对应关系是：均相差65248
 */
export const toDBC = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let c = str.charCodeAt(i); // 获取指定位置字符的Unicode编码
    if (c === 32) {
      result += String.fromCharCode(12288); // 将Unicode编码转化为字符
    } else if (c < 127) {
      result += String.fromCharCode(c + 65248);
    } else {
      result += str.charAt(i); // 获取指定位置的字符
    }
  }
  return result;
};

/**
 * 关键字高亮
 * @param {String} str 文本内容
 * @param {String} keywords 关键字
 * @param {String} color 高亮颜色
 * @returns
 */
export const searchValHighLight = (str, keywords, color = "#ff7538") => {
  if (str === void 0 || str === null || str === "") {
    return "";
  }
  str = str + "";
  str = str.replace(
    new RegExp(`${keywords}`, "igm"),
    `<font color="${color}">${keywords}</font>`
  );
  return str;
};
