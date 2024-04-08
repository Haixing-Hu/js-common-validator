////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { Timestamp } from '../../src';

/**
 * 单元测试{@link Timestamp.isValid}。
 *
 * @author 胡海星
 */
describe('Timestamp.isValid()', () => {
  test('undefined', () => {
    const str = undefined;
    expect(Timestamp.isValid(str)).toBe(false);
  });
  test('null', () => {
    const str = null;
    expect(Timestamp.isValid(str)).toBe(false);
  });
  test('empty string', () => {
    const str = '';
    expect(Timestamp.isValid(str)).toBe(false);
  });
  test('non string', () => {
    const str = 123;
    expect(Timestamp.isValid(str)).toBe(false);
  });
  test('"123 "', () => {
    const str = '123';
    expect(Timestamp.isValid(str)).toBe(false);
  });
  test('" 2021-01-12"', () => {
    const str = ' 2021-01-31';
    expect(Timestamp.isValid(str)).toBe(true);
  });
  test('" 2021-1-1 "', () => {
    const str = ' 2021-1-1 ';
    expect(Timestamp.isValid(str)).toBe(true);
  });
  test('" 21-1-1 "', () => {
    const str = ' 21-1-1 ';
    expect(Timestamp.isValid(str)).toBe(false);
  });
  test('" 2021-01-01T23:04:55.123Z"', () => {
    const str = ' 2021-01-01T23:04:55.123Z';
    expect(Timestamp.isValid(str)).toBe(true);
  });
  test('" 2021-01-01T23:04:55.123z"', () => {
    const str = ' 2021-01-01T23:04:55.123z';
    expect(Timestamp.isValid(str)).toBe(true);
  });
  test('" 2021-01-01T23:04:55.123"', () => {
    const str = ' 2021-01-01T23:04:55.123';
    expect(Timestamp.isValid(str)).toBe(true);
  });
  test('" 2021-01-01T23:04:55.123 Z "', () => {
    const str = ' 2021-01-01T23:04:55.123 Z ';
    expect(Timestamp.isValid(str)).toBe(true);
  });
  test('" 2021-01-01T23:04:55.123 z "', () => {
    const str = ' 2021-01-01T23:04:55.123 z ';
    expect(Timestamp.isValid(str)).toBe(true);
  });
  test('" 2021-01-01T23:04:55.12Z"', () => {
    const str = ' 2021-01-01T23:04:55.12Z ';
    expect(Timestamp.isValid(str)).toBe(true);
  });
  test('" 2021-01-01T23:04:55.1Z"', () => {
    const str = ' 2021-01-01T23:04:55.1Z';
    expect(Timestamp.isValid(str)).toBe(true);
  });
  test('" 2021-01-01T23:04:55.1234Z"', () => {
    const str = '  2021-01-01T23:04:55.1234Z';
    expect(Timestamp.isValid(str)).toBe(false);
  });
  test('" 2021-01-01T23:04:55.Z"', () => {
    const str = '  2021-01-01T23:04:55.Z';
    expect(Timestamp.isValid(str)).toBe(false);
  });
  test('" 2021-01-01T23:04:60.1Z"', () => {
    const str = ' 2021-01-01T23:04:60.1Z';
    expect(Timestamp.isValid(str)).toBe(false);
  });
  test('" 2021-01-01T23:64:59.1Z"', () => {
    const str = ' 2021-01-01T23:64:59.1Z';
    expect(Timestamp.isValid(str)).toBe(false);
  });
  test('" 2021-01-01T33:34:59.1Z"', () => {
    const str = ' 2021-01-01T33:34:59.1Z';
    expect(Timestamp.isValid(str)).toBe(false);
  });
  test('" 2021-1-1 23:54:59.1Z"', () => {
    const str = ' 2021-1-1 23:54:59.1Z';
    expect(Timestamp.isValid(str)).toBe(true);
  });
  test('" 2021-1-1T Z"', () => {
    const str = ' 2021-1-1T Z';
    expect(Timestamp.isValid(str)).toBe(false);
  });
  test('" 2021-1-1 T23:54:59.1Z"', () => {
    const str = ' 2021-1-1 T23:54:59.1Z';
    expect(Timestamp.isValid(str)).toBe(true);
  });
  test('" 2021-1-1 T9:54:59.1Z"', () => {
    const str = ' 2021-1-1 T9:54:59.1Z';
    expect(Timestamp.isValid(str)).toBe(true);
  });
});
