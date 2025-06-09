# Validator 测试说明

本目录包含了 `Validator` 类的完整单元测试，展示了如何使用 `@Model` 和 `@Validatable` 装饰器与验证器进行集成。

## 测试结构

### 核心测试文件

- `validator.test.js` - Validator 类的主要测试文件
- `model/` - 测试用的模型定义目录

### 测试模型

#### Gender.js
简单的性别枚举类，用于测试枚举验证：
```javascript
@Enum
class Gender {
  static MALE = '男';
  static FEMALE = '女';
}
```

#### Status.js
状态枚举类，用于测试复杂枚举验证：
```javascript
@Enum
class Status {
  static ACTIVE = { name: '激活', code: 'active' };
  static INACTIVE = { name: '未激活', code: 'inactive' };
  static PENDING = { name: '待处理', code: 'pending' };
  static DISABLED = { name: '禁用', code: 'disabled' };
}
```

#### TestUser.js
完整的用户模型类，展示了所有验证器的使用方式：
```javascript
@Model
class TestUser {
  @Validatable(Validator.username)
  @Label('用户名')
  @NonEmpty
  username = '';

  @Validatable(Validator.email)
  @Label('邮箱')
  @Nullable
  email = '';

  @Validatable(Validator.enum)
  @Label('性别')
  @Type(Gender)
  @Nullable
  gender = null;

  // ... 更多字段
}
```

## 测试覆盖范围

### 基础验证测试
- 验证 Validator 是一个类
- 验证所有方法都是静态方法
- 测试每个验证器的基本功能

### 单个验证器测试
每个验证器都有以下测试：
- 有效值测试
- 无效值测试
- 空值处理（nullable/non-nullable）
- 边界条件测试

### 集成测试
- 与 `@Model` 装饰器的集成
- 与 `@Validatable` 装饰器的集成
- 枚举类型验证
- 复杂模型的完整验证

### 上下文测试
- 带 owner 的验证上下文
- 部分上下文验证
- 无上下文验证

### 范围验证测试
- 数值范围验证
- 日期范围验证
- 自定义比较器测试

## 运行测试

```bash
# 运行所有 Validator 测试
npm test -- test/validators/validator.test.js

# 运行特定测试组
npm test -- test/validators/validator.test.js --testNamePattern="alphaNum validation"

# 运行测试并显示覆盖率
npm test -- test/validators/validator.test.js --coverage
```

## 测试要点

### 枚举验证
- 枚举验证使用枚举的键名（如 "MALE", "FEMALE"），而不是值
- 需要在 context 中提供 `type` 属性指定枚举类

### 日期时间格式
- 日期格式：`YYYY-MM-DD`
- 时间格式：`HH:mm:ss` 或 `HH:mm`
- 日期时间格式：`YYYY-MM-DD HH:mm:ss`（注意使用空格而不是 T）

### 模型验证
- 使用 `user.validate()` 验证所有字段
- 使用 `user.validate('fieldName')` 验证特定字段
- 验证结果包含 `success` 和 `description` 属性

### 验证上下文
验证上下文对象可以包含以下属性：
- `instance`: 字段所属的对象
- `owner`: 字段所有者的名称
- `field`: 字段名称
- `type`: 字段类型构造函数
- `label`: 字段显示标签
- `nullable`: 是否可为空
- `nonEmpty`: 是否不能为空
- `start`: 范围验证的起始值
- `end`: 范围验证的结束值

## 扩展测试

要添加新的验证器测试：

1. 在 `validator.test.js` 中添加新的 describe 块
2. 测试有效和无效的输入
3. 测试空值处理
4. 如果需要，在 `model/` 目录中添加测试模型
5. 测试与装饰器的集成

## 注意事项

- 这个库只依赖 `@qubit-ltd/common-decorator`，不依赖 `@qubit-ltd/common-model`
- 测试模型定义在本地 `model/` 目录中，避免循环依赖
- 所有测试都使用中文标签和错误消息，符合项目的国际化要求 