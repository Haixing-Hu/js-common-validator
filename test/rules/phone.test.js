////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { Phone } from '../../src';

/**
 * 单元测试{@link Phone.isValid}。
 *
 * @author 胡海星
 */
describe('Phone.isValid()', () => {
  test('undefined', () => {
    expect(Phone.isValid(undefined)).toBe(false);
  });
  test('null', () => {
    expect(Phone.isValid(null)).toBe(false);
  });
  test('empty string', () => {
    expect(Phone.isValid('')).toBe(false);
  });
  test('non string', () => {
    expect(Phone.isValid(123)).toBe(false);
  });
  test('"84507762"', () => {
    expect(Phone.isValid('84507762')).toBe(true);
  });
  test('"025-84507762"', () => {
    expect(Phone.isValid('025-84507762')).toBe(true);
  });
  test('"0251-84507762"', () => {
    expect(Phone.isValid('0251-84507762')).toBe(true);
  });
  test('"0251—84507762"', () => {
    expect(Phone.isValid('0251—84507762')).toBe(true);
  });
  test('"0251－84507762"', () => {
    expect(Phone.isValid('0251－84507762')).toBe(true);
  });
  test('"0251－92-84507762"', () => {
    expect(Phone.isValid('0251－92-84507762')).toBe(false);
  });
  test('"+86-0251－84507762"', () => {
    expect(Phone.isValid('+86-0251－84507762')).toBe(true);
  });
});
