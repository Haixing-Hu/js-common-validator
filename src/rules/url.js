////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import uri from 'node-uri';
import isString from './impl/is-string';

export default {

  /**
   * 测试URL是否是合法的网址。
   *
   * 合法的网址的schema必须是HTTP或HTTPS协议。
   *
   * @param {String} url
   *    待测试的URL，注意必须先对其trim()，此函数不做trim()
   * @return {Boolean}
   *    若URL合法则返回true；否则返回false。
   * @author 胡海星
   */
  isValid(url) {
    if (!isString(url) || (url.length === 0)) {
      return false;
    }
    try {
      uri.checkWebURL(url);
      return true;
    } catch (URIError) {
      return false;
    }
  },
};
