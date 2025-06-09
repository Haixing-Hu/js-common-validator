////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2025.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { Enum } from '@qubit-ltd/common-decorator';

/**
 * 状态枚举类，用于测试。
 *
 * @author 胡海星
 */
@Enum
class Status {
  static ACTIVE = { name: '激活', code: 'active' };
  
  static INACTIVE = { name: '未激活', code: 'inactive' };
  
  static PENDING = { name: '待处理', code: 'pending' };
  
  static DISABLED = { name: '禁用', code: 'disabled' };
}

export default Status; 