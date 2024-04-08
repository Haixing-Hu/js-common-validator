////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { Passport } from '../../src';

/**
 * 单元测试{@link Passport.isValid}。
 *
 * @author 胡海星
 */
describe('Passport.isValid()', () => {
  test('undefined', () => {
    const number = undefined;
    expect(Passport.isValid(number)).toBe(false);
  });
  test('null', () => {
    expect(Passport.isValid(null)).toBe(false);
  });
  test('empty string', () => {
    expect(Passport.isValid('')).toBe(false);
  });
  test('non string', () => {
    expect(Passport.isValid(123)).toBe(false);
  });
  test('因私普通电子护照', () => {
    expect(Passport.isValid('E12345678')).toBe(true);
    expect(Passport.isValid('EA1234567')).toBe(true);
    expect(Passport.isValid('EZ1234567')).toBe(true);
    expect(Passport.isValid('E1234567')).toBe(false);
    expect(Passport.isValid('E1234567E')).toBe(false);
    expect(Passport.isValid('EA123456')).toBe(false);
    expect(Passport.isValid('EA123456E')).toBe(false);
  });
  test('公务普通电子护照', () => {
    expect(Passport.isValid('PE1234567')).toBe(true);
    expect(Passport.isValid('PE123456')).toBe(false);
    expect(Passport.isValid('PE123456E')).toBe(false);
  });
  test('公务电子护照', () => {
    expect(Passport.isValid('SE1234567')).toBe(true);
    expect(Passport.isValid('SE123456')).toBe(false);
    expect(Passport.isValid('SE123456E')).toBe(false);
  });
  test('外交电子护照', () => {
    expect(Passport.isValid('DE1234567')).toBe(true);
    expect(Passport.isValid('DE123456')).toBe(false);
    expect(Passport.isValid('DE123456E')).toBe(false);
  });
  test('澳门特区电子护照', () => {
    expect(Passport.isValid('MA1234567')).toBe(true);
    expect(Passport.isValid('MA123456')).toBe(false);
    expect(Passport.isValid('MA123456E')).toBe(false);
  });
  test('香港特区电子护照', () => {
    expect(Passport.isValid('K12345678')).toBe(true);
    expect(Passport.isValid('K1234567')).toBe(false);
    expect(Passport.isValid('K1234567E')).toBe(false);
  });
  test('因私普通旧护照', () => {
    expect(Passport.isValid('141234567')).toBe(true);
    expect(Passport.isValid('151234567')).toBe(true);
    expect(Passport.isValid('G12345678')).toBe(true);
    expect(Passport.isValid('14123456')).toBe(false);
    expect(Passport.isValid('15123456')).toBe(false);
    expect(Passport.isValid('G1234567')).toBe(false);
    expect(Passport.isValid('161234567')).toBe(false);
    expect(Passport.isValid('F12345678')).toBe(false);
  });
  test('因公普通旧护照', () => {
    expect(Passport.isValid('P1234567')).toBe(true);
    expect(Passport.isValid('P123456')).toBe(false);
    expect(Passport.isValid('P12345678')).toBe(false);
    expect(Passport.isValid('Q1234567')).toBe(false);
  });
  test('公务旧护照', () => {
    expect(Passport.isValid('S1234567')).toBe(true);
    expect(Passport.isValid('S12345678')).toBe(true);
    expect(Passport.isValid('S123456')).toBe(false);
    expect(Passport.isValid('S123456789')).toBe(false);
    expect(Passport.isValid('R1234567')).toBe(false);
    expect(Passport.isValid('R12345678')).toBe(false);
  });
  test('外交旧护照', () => {
    expect(Passport.isValid('D12345678')).toBe(true);
    expect(Passport.isValid('D1234567')).toBe(false);
    expect(Passport.isValid('D123456789')).toBe(false);
    expect(Passport.isValid('C12345678')).toBe(false);
  });
});

// /**
//  * 单元测试{@link Passport.validate}。
//  *
//  * @author 胡海星
//  */
// describe('Passport.validate()', () => {
//   test('undefined', () => {
//     const number = undefined;
//     const r1 = Passport.validate(number);
//     expect(r1.success).toBe(false);
//     expect(r1.description).toBe('请输入护照号码');
//     const r2 = Passport.validate(number, '张三');
//     expect(r2.success).toBe(false);
//     expect(r2.description).toBe('请输入张三的护照号码');
//   });
//   test('null', () => {
//     const number = null;
//     const r1 = Passport.validate(number);
//     expect(r1.success).toBe(false);
//     expect(r1.description).toBe('请输入护照号码');
//     const r2 = Passport.validate(number, '张三');
//     expect(r2.success).toBe(false);
//     expect(r2.description).toBe('请输入张三的护照号码');
//   });
//   test('空字符串', () => {
//     const number = '';
//     const r1 = Passport.validate(number);
//     expect(r1.success).toBe(false);
//     expect(r1.description).toBe('请输入护照号码');
//     const r2 = Passport.validate(number, '张三');
//     expect(r2.success).toBe(false);
//     expect(r2.description).toBe('请输入张三的护照号码');
//   });
//   test('普通电子护照', () => {
//     const r0 = Passport.validate('E12345678');
//     expect(r0.success).toBe(true);
//     const r1 = Passport.validate('E1234567');
//     expect(r1.success).toBe(false);
//     expect(r1.description).toBe('护照号码格式不正确');
//     const r2 = Passport.validate('E1234567E', '张三');
//     expect(r2.success).toBe(false);
//     expect(r2.description).toBe('张三的护照号码格式不正确');
//   });
//   test('公务护照', () => {
//     const r0 = Passport.validate('SE1234567');
//     expect(r0.success).toBe(true);
//     const r1 = Passport.validate('SE123456');
//     expect(r1.success).toBe(false);
//     expect(r1.description).toBe('护照号码格式不正确');
//     const r2 = Passport.validate('SEE123456', '张三');
//     expect(r2.success).toBe(false);
//     expect(r2.description).toBe('张三的护照号码格式不正确');
//   });
//   test('外交护照', () => {
//     const r0 = Passport.validate('DE1234567');
//     expect(r0.success).toBe(true);
//     const r1 = Passport.validate('DE123456');
//     expect(r1.success).toBe(false);
//     expect(r1.description).toBe('护照号码格式不正确');
//     const r2 = Passport.validate('DE123X456', '张三');
//     expect(r2.success).toBe(false);
//     expect(r2.description).toBe('张三的护照号码格式不正确');
//   });
//   test('公务普通护照', () => {
//     const r0 = Passport.validate('PE1234567');
//     expect(r0.success).toBe(true);
//     const r1 = Passport.validate('PE123456');
//     expect(r1.success).toBe(false);
//     expect(r1.description).toBe('护照号码格式不正确');
//     const r2 = Passport.validate('PE12345678', '张三');
//     expect(r2.success).toBe(false);
//     expect(r2.description).toBe('张三的护照号码格式不正确');
//   });
//   test('澳门特区护照', () => {
//     const r0 = Passport.validate('MA1234567');
//     expect(r0.success).toBe(true);
//     const r1 = Passport.validate('MA123456');
//     expect(r1.success).toBe(false);
//     expect(r1.description).toBe('护照号码格式不正确');
//     const r2 = Passport.validate('MA123456E', '张三');
//     expect(r2.success).toBe(false);
//     expect(r2.description).toBe('张三的护照号码格式不正确');
//   });
//   test('香港特区护照', () => {
//     const r0 = Passport.validate('K12345678');
//     expect(r0.success).toBe(true);
//     const r1 = Passport.validate('K1234567');
//     expect(r1.success).toBe(false);
//     expect(r1.description).toBe('护照号码格式不正确');
//     const r2 = Passport.validate('K1234567E', '张三');
//     expect(r2.success).toBe(false);
//     expect(r2.description).toBe('张三的护照号码格式不正确');
//   });
// });
