////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

export default {

  /**
   * 测试一个字符串是否表示一个合法的布尔值。
   *
   * 测试时忽略大小写。
   *
   * 注意此函数允许字符串前后出现空格。
   *
   * @param {string} str
   *    待测试的字符串。
   * @return
   *    若该字符串表示一个合法的布尔值则返回true；否则返回false。
   * @author 胡海星
   */
  isValid(str) {
    if (str === undefined || str === null || str === '') {
      return false;
    }
    const val = str.trim().toLowerCase();
    return (val === 'true' || val === 'false');
  },
};
