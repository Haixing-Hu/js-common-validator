////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2025.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import {
  Label,
  Model,
  NonEmpty,
  Nullable,
  Type,
  Validatable,
} from '@qubit-ltd/common-decorator';
import Validator from '../../../src';
import Gender from './gender';
import Status from './Status';

/**
 * 测试用户模型类。
 *
 * @author 胡海星
 */
@Model
class TestUser {
  /**
   * 用户名。
   *
   * @type {string}
   */
  @Validatable(Validator.username)
  @Label('用户名')
  @NonEmpty
  username = '';

  /**
   * 密码。
   *
   * @type {string}
   */
  @Validatable(Validator.password)
  @Label('密码')
  @NonEmpty
  password = '';

  /**
   * 邮箱。
   *
   * @type {string}
   */
  @Validatable(Validator.email)
  @Label('邮箱')
  @Nullable
  email = '';

  /**
   * 手机号。
   *
   * @type {string}
   */
  @Validatable(Validator.mobile)
  @Label('手机号')
  @Nullable
  mobile = '';

  /**
   * 年龄。
   *
   * @type {number}
   */
  @Validatable(Validator.int)
  @Label('年龄')
  @Type(Number)
  @Nullable
  age = null;

  /**
   * 身高（米）。
   *
   * @type {number}
   */
  @Validatable(Validator.number)
  @Label('身高')
  @Type(Number)
  @Nullable
  height = null;

  /**
   * 姓名。
   *
   * @type {string}
   */
  @Validatable(Validator.personName)
  @Label('姓名')
  @NonEmpty
  name = '';

  /**
   * 性别。
   *
   * @type {Gender}
   */
  @Validatable(Validator.enum)
  @Label('性别')
  @Type(Gender)
  @Nullable
  gender = null;

  /**
   * 状态。
   *
   * @type {Status}
   */
  @Validatable(Validator.enum)
  @Label('状态')
  @Type(Status)
  status = null;

  /**
   * 是否激活。
   *
   * @type {boolean}
   */
  @Validatable(Validator.bool)
  @Label('是否激活')
  @Type(Boolean)
  active = false;

  /**
   * 注册日期。
   *
   * @type {string}
   */
  @Validatable(Validator.date)
  @Label('注册日期')
  @Nullable
  registerDate = '';

  /**
   * 注册时间。
   *
   * @type {string}
   */
  @Validatable(Validator.time)
  @Label('注册时间')
  @Nullable
  registerTime = '';

  /**
   * 注册日期时间。
   *
   * @type {string}
   */
  @Validatable(Validator.datetime)
  @Label('注册日期时间')
  @Nullable
  registerDateTime = '';

  /**
   * 上次登录时间戳。
   *
   * @type {string}
   */
  @Validatable(Validator.timestamp)
  @Label('上次登录时间戳')
  @Nullable
  lastLoginTimestamp = '';

  /**
   * 个人主页URL。
   *
   * @type {string}
   */
  @Validatable(Validator.url)
  @Label('个人主页')
  @Nullable
  homepage = '';

  /**
   * 编号。
   *
   * @type {string}
   */
  @Validatable(Validator.alphaNum)
  @Label('编号')
  @Nullable
  code = '';

  /**
   * 大写编号。
   *
   * @type {string}
   */
  @Validatable(Validator.upperAlphaNum)
  @Label('大写编号')
  @Nullable
  upperCode = '';

  /**
   * 手机号2（兼容字段）。
   *
   * @type {string}
   */
  @Validatable(Validator.phone)
  @Label('手机号2')
  @Nullable
  phone = '';

  /**
   * 用户ID。
   *
   * @type {number}
   */
  @Validatable(Validator.id)
  @Label('用户ID')
  @Type(Number)
  @Nullable
  id = null;

  /**
   * 余额。
   *
   * @type {number}
   */
  @Validatable(Validator.money)
  @Label('余额')
  @Type(Number)
  @Nullable
  balance = null;
}

export default TestUser; 