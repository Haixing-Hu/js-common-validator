////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * 验证军官证号码合法性的正则表达式。
 *
 * 合法的军官证号码由6~8位字母、数字或句点组成。
 *
 * @author 胡海星
 */
const NUMBER_REGEXP = /^[a-zA-Z0-9.]{6,8}$/;

/**
 * 军官证号码验证规则。
 *
 * @author 胡海星
 */
export default {

  /**
   * 表示军官证的证件类型的字符串。
   *
   * @author 胡海星
   */
  type: 'OFFICER_CARD',

  /**
   * 军官证的证件名称。
   *
   * @author 胡海星
   */
  name: '中国人民解放军军官证',

  /**
   * 检查军官证号码是否合法
   *
   * @param {in} number
   *    军官证号码，必须是trim()后的值，此函数不做trim()
   * @return
   *    若该军官证号码合法，返回true；否则返回false
   * @author 胡海星
   */
  isValid(number) {
    return NUMBER_REGEXP.test(number);
  },
};
