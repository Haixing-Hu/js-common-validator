# @qubit-ltd/common-validator

[![npm package](https://img.shields.io/npm/v/@qubit-ltd/common-validator.svg)](https://npmjs.com/package/@qubit-ltd/common-validator)
[![License](https://img.shields.io/badge/License-Apache-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)
[![English](https://img.shields.io/badge/docs-English-blue.svg)](README.md)
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/Haixing-Hu/js-common-validator/tree/master.svg?style=shield)](https://dl.circleci.com/status-badge/redirect/gh/Haixing-Hu/js-common-validator/tree/master)
[![Coverage Status](https://coveralls.io/repos/github/Haixing-Hu/js-common-validator/badge.svg?branch=master)](https://coveralls.io/github/Haixing-Hu/js-common-validator?branch=master)

[@qubit-ltd/common-validator] 是一个JavaScript ES6库，提供常用字段验证器和验证规则。它为Web应用中常用的各种数据类型和字段提供了全面的验证功能。

## 安装

```bash
# 使用 npm
npm install @qubit-ltd/common-validator

# 使用 yarn
yarn add @qubit-ltd/common-validator
```

## 特性

- 常见字段类型验证器（电子邮件、URL、电话等）
- 数据类型验证器（数字、整数、布尔值等）
- 日期、时间和时间戳验证
- 带有可自定义规则的密码验证
- 用户名、个人姓名验证
- 支持同步和异步验证
- 全面的中英文错误提示信息
- 支持自定义验证规则和错误信息

## 使用方法

### 基本用法

```javascript
import { validateEmailField, validatePasswordField } from '@qubit-ltd/common-validator';

// 验证电子邮件地址
const emailResult = validateEmailField('user@example.com');
console.log(emailResult.success);  // 验证通过为true，失败为false
console.log(emailResult.description);  // 验证失败时的错误信息

// 验证密码
const passwordResult = validatePasswordField('Password123!');
console.log(passwordResult.success);
console.log(passwordResult.description);
```

### 带上下文的验证

```javascript
const user = {
  name: '张三',
  email: 'zhangsan@example.com',
};

// 使用所有者名称进行验证（用于生成更具体的错误信息）
const result = validateEmailField(user.email, { 
  instance: user, 
  owner: user.name 
});

if (!result.success) {
  console.log(result.description); // 如果为空，将显示"请填写张三的电子邮件地址"
}
```

### 使用Validator类

```javascript
import { Validator } from '@qubit-ltd/common-validator';

// 创建自定义验证器
const validator = new Validator();

// 验证表单
const form = {
  username: 'zhangsan',
  email: 'zhangsan@example.com',
  password: 'Password123!'
};

const usernameResult = validator.validateUsername(form.username);
const emailResult = validator.validateEmail(form.email);
const passwordResult = validator.validatePassword(form.password);

if (usernameResult.success && emailResult.success && passwordResult.success) {
  // 表单验证通过
} else {
  // 表单存在错误
}
```

## 可用的验证器

- `validateAlphaNumberField`: 验证字母数字字符串
- `validateBoolField`: 验证布尔值
- `validateDateField`: 验证日期字符串
- `validateTimeField`: 验证时间字符串
- `validateDateTimeField`: 验证日期时间字符串
- `validateEmailField`: 验证电子邮件地址
- `validateEnumField`: 验证枚举值
- `validateNumberField`: 验证数字值
- `validateIntegerField`: 验证整数值
- `validateMobileField`: 验证手机号码
- `validatePasswordField`: 验证密码
- `validatePersonNameField`: 验证个人姓名
- `validatePhoneField`: 验证电话号码
- `validateTimestampField`: 验证时间戳
- `validateUppercaseAlphaNumberField`: 验证大写字母数字字符串
- `validateUrlField`: 验证URL
- `validateUsernameField`: 验证用户名
- `validateFieldByRule`: 基于验证规则验证字段

## <span id="contributing">贡献</span>

如果您发现任何问题或有改进建议，请随时在[GitHub仓库]中提出issue或提交pull request。

## <span id="license">许可证</span>

[@qubit-ltd/common-validator] 采用 Apache 2.0 许可证分发。
有关更多详细信息，请参阅 [LICENSE](LICENSE) 文件。

[@qubit-ltd/common-validator]: https://npmjs.com/package/@qubit-ltd/common-validator
[GitHub仓库]: https://github.com/Haixing-Hu/js-common-validator 