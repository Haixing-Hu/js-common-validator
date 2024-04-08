////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { Mobile } from '../../src';

/**
 * 单元测试{@link Mobile.isValid}。
 *
 * @author 胡海星
 */
describe('Mobile.isValid()', () => {
  test('undefined', () => {
    expect(Mobile.isValid(undefined)).toBe(false);
  });
  test('null', () => {
    expect(Mobile.isValid(null)).toBe(false);
  });
  test('""', () => {
    expect(Mobile.isValid('')).toBe(false);
  });
  test('123', () => {
    expect(Mobile.isValid(123)).toBe(false);
  });

  test('移动134区段', () => {
    expect(Mobile.isValid('13474937629')).toBe(true);
  });
  test('移动134区段，0开头', () => {
    expect(Mobile.isValid('013474937629')).toBe(true);
  });
  test('移动134区段，86开头', () => {
    expect(Mobile.isValid('8613474937629')).toBe(true);
  });
  test('移动134区段，17951开头', () => {
    expect(Mobile.isValid('1795113474937629')).toBe(true);
  });

  test('移动135区段', () => {
    expect(Mobile.isValid('13574937629')).toBe(true);
  });
  test('移动135区段，0开头', () => {
    expect(Mobile.isValid('013574937629')).toBe(true);
  });
  test('移动135区段，86开头', () => {
    expect(Mobile.isValid('8613574937629')).toBe(true);
  });
  test('移动135区段，17951开头', () => {
    expect(Mobile.isValid('1795113574937629')).toBe(true);
  });

  test('移动136区段', () => {
    expect(Mobile.isValid('13674937629')).toBe(true);
  });
  test('移动136区段，0开头', () => {
    expect(Mobile.isValid('013674937629')).toBe(true);
  });
  test('移动136区段，86开头', () => {
    expect(Mobile.isValid('8613674937629')).toBe(true);
  });
  test('移动136区段，17951开头', () => {
    expect(Mobile.isValid('1795113674937629')).toBe(true);
  });
  test('移动165区段', () => {
    expect(Mobile.isValid('16574937629')).toBe(true);
  });

  test('常博报告的bug', () => {
    expect(Mobile.isValid('13851726971')).toBe(true);
  });
  test('移动195区段', () => {
    expect(Mobile.isValid('19505183692')).toBe(true);
  });
  test('电信191区段', () => {
    expect(Mobile.isValid('19191019545')).toBe(true);
  });
});
