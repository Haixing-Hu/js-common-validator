////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { PersonName } from '../../src';

/**
 * 单元测试{@link PersonName.isValid}。
 *
 * @author 胡海星
 */
describe('PersonName.isValid()', () => {
  test('undefined', () => {
    const str = undefined;
    expect(PersonName.isValid(str)).toBe(false);
  });
  test('null', () => {
    const str = null;
    expect(PersonName.isValid(str)).toBe(false);
  });
  test('non string', () => {
    const str = 123;
    expect(PersonName.isValid(str)).toBe(false);
  });
  test('empty string', () => {
    const str = '';
    expect(PersonName.isValid(str)).toBe(false);
  });
  test('正常名字', () => {
    expect(PersonName.isValid('张三')).toBe(true);
  });
  test('少于2个汉字', () => {
    expect(PersonName.isValid('张')).toBe(false);
  });
  test('中文中加空格', () => {
    expect(PersonName.isValid('张 三')).toBe(false);
  });
  test('30个汉字的中文', () => {
    expect(PersonName.isValid('张张张张张张张张张张张张张张张张张张张张张张张张张张张张张张')).toBe(true);
  });
  test('超过30个汉字的中文', () => {
    expect(PersonName.isValid('张张张张张张张张张张张张张张张张张张张张张张张张张张张张张张张')).toBe(false);
  });
  test('带有外文名中间点', () => {
    expect(PersonName.isValid('阿凡提·穆罕穆德·买买提')).toBe(true);
  });
  test('开头加中间点', () => {
    expect(PersonName.isValid('·穆罕穆德·买买提')).toBe(false);
  });
  test('结尾加中间点', () => {
    expect(PersonName.isValid('阿凡提·穆罕穆德·')).toBe(false);
  });
  test('带有句点', () => {
    expect(PersonName.isValid('阿凡提.穆罕穆德.买买提')).toBe(true);
  });
  test('开头加句点', () => {
    expect(PersonName.isValid('.穆罕穆德.买买提')).toBe(false);
  });
  test('结尾加句点', () => {
    expect(PersonName.isValid('阿凡提.穆罕穆德.')).toBe(false);
  });
  test('姓名中包含生僻汉字(CJK Unified Ideographs Extension A)', () => {
    expect(PersonName.isValid('䶮㐑㐒㐓㐔㐕')).toBe(true);
  });
  test('姓名中包含生僻汉字(CJK Unified Ideographs Extension B)', () => {
    expect(PersonName.isValid('𠁆𠀾𠃵')).toBe(true);
  });
  test('姓名中包含生僻汉字(CJK Unified Ideographs Extension C)', () => {
    expect(PersonName.isValid('𪣻𪧦𪩘')).toBe(true);
  });
  test('姓名中包含生僻汉字(CJK Unified Ideographs Extension D)', () => {
    expect(PersonName.isValid('𫞔𫝚𫞂')).toBe(true);
  });
  test('姓名中包含生僻汉字(CJK Unified Ideographs Extension E)', () => {
    expect(PersonName.isValid('𫢸𫫇𫭢')).toBe(true);
  });
  test('姓名中包含生僻汉字(CJK Unified Ideographs Extension F)', () => {
    expect(PersonName.isValid('𮉸𮉸𮉸')).toBe(true);
  });
  test('姓名中包含生僻汉字(CJK Compatibility Ideographs)', () => {
    expect(PersonName.isValid('賈滑串句龜綠')).toBe(true);
  });
  test('姓名中包含生僻汉字(CJK Compatibility Ideographs Supplement)', () => {
    expect(PersonName.isValid('娧姘婦㛮')).toBe(true);
  });
  test('英文或拼音，中间有空格', () => {
    expect(PersonName.isValid('Bill Gates')).toBe(true);
  });
  test('英文或拼音全大写', () => {
    expect(PersonName.isValid('ZHANG SAN')).toBe(true);
  });
  test('英文或拼音全小写', () => {
    expect(PersonName.isValid('zhang san')).toBe(true);
  });
  test('英文或拼音大小写混杂', () => {
    expect(PersonName.isValid('Zhang San')).toBe(true);
  });
  test('英文或拼音小于2字符', () => {
    expect(PersonName.isValid('S')).toBe(false);
  });
  test('英文或拼音等于2字符', () => {
    expect(PersonName.isValid('SS')).toBe(true);
  });
  test('英文或拼音2字符中间加句点', () => {
    expect(PersonName.isValid('S.S')).toBe(true);
  });
  test('英文或拼音2字符开头加句点', () => {
    expect(PersonName.isValid('.SS')).toBe(false);
  });
  test('英文或拼音2字符末尾加句点', () => {
    expect(PersonName.isValid('SS.')).toBe(false);
  });
  test('英文或拼音2字符开头加空格', () => {
    expect(PersonName.isValid(' SS')).toBe(false);
  });
  test('英文或拼音2字符末尾加空格', () => {
    expect(PersonName.isValid('SS ')).toBe(false);
  });
  test('英文或拼音2字符中间加空格', () => {
    expect(PersonName.isValid('S S')).toBe(true);
  });
  test('英文或拼音等于60字符', () => {
    expect(PersonName.isValid('SSSSSSSSSSSSSSSSSSSSSSSSSSSSSS')).toBe(true);
  });
  test('英文或拼音超过60字符', () => {
    expect(PersonName.isValid('SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS')).toBe(false);
  });
  test('英文或拼音3字符中间加空格', () => {
    expect(PersonName.isValid('S S S')).toBe(true);
  });
  test('英文中加中文', () => {
    expect(PersonName.isValid('S S 张三')).toBe(false);
  });
});
