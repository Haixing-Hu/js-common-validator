////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { Integer } from '../../src';

/**
 * 单元测试{@link Integer.isValid}。
 *
 * @author 胡海星
 */
describe('Integer.isValid()', () => {
  test('undefined', () => {
    const str = undefined;
    expect(Integer.isValid(str)).toBe(false);
  });
  test('null', () => {
    const str = null;
    expect(Integer.isValid(str)).toBe(false);
  });
  test('empty string', () => {
    const str = '';
    expect(Integer.isValid(str)).toBe(false);
  });
  test('non string', () => {
    const str = 123;
    expect(Integer.isValid(str)).toBe(false);
  });
  test('"123 "', () => {
    const str = '123';
    expect(Integer.isValid(str)).toBe(true);
  });
  test('"123. "', () => {
    const str = '123. ';
    expect(Integer.isValid(str)).toBe(false);
  });
  test('"  +123 "', () => {
    const str = '  +123 ';
    expect(Integer.isValid(str)).toBe(true);
  });
  test('"  -123"', () => {
    const str = '  -123';
    expect(Integer.isValid(str)).toBe(true);
  });
  test('"+"', () => {
    const str = '+';
    expect(Integer.isValid(str)).toBe(false);
  });
  test('"-"', () => {
    const str = '-';
    expect(Integer.isValid(str)).toBe(false);
  });
  test('"12a3  "', () => {
    const str = '12a3  ';
    expect(Integer.isValid(str)).toBe(false);
  });
  test('  #123', () => {
    const str = '  #123';
    expect(Integer.isValid(str)).toBe(false);
  });
  test('"  12039485897233498274329483948310984321094732198574634598430958"', () => {
    const str = '  12039485897233498274329483948310984321094732198574634598430958';
    expect(Integer.isValid(str)).toBe(true);
  });
  test('" -12039485897233498274329483948310984321094732198574634598430958"', () => {
    const str = ' -12039485897233498274329483948310984321094732198574634598430958';
    expect(Integer.isValid(str)).toBe(true);
  });
  test(' - 12039485897233498274329483948310984321094732198574634598430958', () => {
    const str = ' - 12039485897233498274329483948310984321094732198574634598430958';
    expect(Integer.isValid(str)).toBe(false);
  });
});
