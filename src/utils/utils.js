/**
 * @description JavaScript 实现的 5 种数字千位符格式化方法
 * @case 10000 ---> 10,000
 * @params num
 */
export const toThousands1 = (num) => {
    num = (num || 0).toString().split('');
    let result = [],
        counter = 0;
    for (var i = num.length - 1; i >= 0; i--) {
        counter++;
        result.unshift(num[i]);
        if (!(counter % 3) && i != 0) {
            result.unshift(',');
        }
    }
    return result.join('');
}

export const toThousands2 = (num) => {
    num = (num || 0).toString();
    let result = '',
        counter = 0;
    for (var i = num.length - 1; i >= 0; i--) {
        counter++;
        result = num.charAt(i) + result;
        if (!(counter % 3) && i != 0) {
            result = ',' + result;
        }
    }
    return result;
}

export const toThousands3 = (num) => {
    num = (num || 0).toString();
    let result = '';
    while (num.length > 3) {
        result = ',' + num.slice(-3) + result;
        num = num.slice(0, num.length - 3);
    }
    if (num) {
        result = num + result;
    }
    return result;
}

export const toThousands4 = (num) => {
    num = (num || 0).toString();
    let temp = num.length % 3;
    switch (temp) {
        case 1:
            num = '00' + num;
            break;
        case 2:
            num = '0' + num;
            break;
    }
    return num.match(/\d{3}/g).join(',').replace(/^0+/, '');
}

export const toThousands5 = (num) => {
    return (num || 0).toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,');
}

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
    for (; num > 0;) {
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
}
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
}

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
}

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
        m += s1.split(".")[1].length
    } catch (e) {
        // 
    }

    try {
        m += s2.split(".")[1].length
    } catch (e) {
        // 
    }
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
}