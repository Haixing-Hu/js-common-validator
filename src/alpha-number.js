/*******************************************************************************
 *
 *    Copyright (c) 2017 - 2018
 *    Nanjing Smart Medical Investment Operation Service Co. Ltd.
 *    All rights reserved.
 *
 ******************************************************************************/

/**
 * 验证字符串是否是数字和字母组合成字符串。
 *
 * 这类字符串通常可以用来表示证件编号、发票号等数据。
 *
 * @author 胡海星
 */
const ALPHA_NUMBER_REGEXP = /^\s*[0-9a-zA-Z]+\s*$/;

export default {

  /**
   * 测试一个字符串是否是数字和字母组合成字符串。
   *
   * 这类字符串通常可以用来表示证件编号、发票号等数据。
   *
   * 注意此函数允许字符串首位出现空格。
   *
   * @param {String} str
   *    待测试的字符串。
   * @return
   *    若该字符串是数字和字母组合成字符串则返回true；否则返回false。
   * @author 胡海星
   */
  isValid(str) {
    if ((typeof str !== 'string') || (str.length === 0)) {
      return false;
    }
    return ALPHA_NUMBER_REGEXP.test(str);
  },
};
