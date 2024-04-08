////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { Url } from '../../src';

/**
 * 单元测试{@link Url.isValid}。
 *
 * @author 胡海星
 */
describe('Url.isValid()', () => {
  test('undefined', () => {
    const str = undefined;
    expect(Url.isValid(str)).toBe(false);
  });
  test('null', () => {
    const str = null;
    expect(Url.isValid(str)).toBe(false);
  });
  test('empty string', () => {
    const str = '';
    expect(Url.isValid(str)).toBe(false);
  });
  test('non string', () => {
    const str = 123;
    expect(Url.isValid(str)).toBe(false);
  });
  test('://example.com', () => {
    const str = '://example.com';
    expect(Url.isValid(str)).toBe(false);
  });
  test('http:////bar', () => {
    const str = 'http:////bar';
    expect(Url.isValid(str)).toBe(false);
  });
  test('http://xn--iñvalid.com', () => {
    const str = 'http://xn--iñvalid.com';
    expect(Url.isValid(str)).toBe(false);
  });
  test('http://üser:pass@bar.com', () => {
    const str = 'http://üser:pass@bar.com';
    expect(Url.isValid(str)).toBe(false);
  });
  test('http://bar.com:80g80', () => {
    const str = 'http://bar.com:80g80';
    expect(Url.isValid(str)).toBe(false);
  });
  test('http://bar.com/°', () => {
    const str = 'http://bar.com/°';
    expect(Url.isValid(str)).toBe(false);
  });
  test('http://bar.com/over/there?quêry=5', () => {
    const str = 'http://bar.com/over/there?quêry=5';
    expect(Url.isValid(str)).toBe(false);
  });
  test('http://bar.com/over/there?quêry=5', () => {
    const str = 'http://bar.com/over/there?quêry=5';
    expect(Url.isValid(str)).toBe(false);
  });
  test('http://bar.com/over/there?query=5#anch#r', () => {
    const str = 'http://bar.com/over/there?query=5#anch#r';
    expect(Url.isValid(str)).toBe(false);
  });
  test('http://www.bar.baz/foo%2', () => {
    const str = 'http://www.bar.baz/foo%2';
    expect(Url.isValid(str)).toBe(false);
  });
  test('httê://bar.com:8080', () => {
    const str = 'httê://bar.com:8080';
    expect(Url.isValid(str)).toBe(false);
  });
  test('http:isbn:0-486-27557-4', () => {
    const str = 'http:isbn:0-486-27557-4';
    expect(Url.isValid(str)).toBe(false);
  });
  test('very long url', () => {
    const path = 'path'.repeat(2040);
    const str = `http://example.com/${path}`;
    expect(Url.isValid(str)).toBe(false);
  });
  test('http://user:pass@xn--fiq228c.com:8042/over/there?name=ferret#nose', () => {
    const str = 'http://user:pass@xn--fiq228c.com:8042/over/there?name=ferret#nose';
    expect(Url.isValid(str)).toBe(true);
  });
  test('https://user:pass@xn--fiq228c.com:8042/over/there?name=ferret#nose', () => {
    const str = 'https://user:pass@xn--fiq228c.com:8042/over/there?name=ferret#nose';
    expect(Url.isValid(str)).toBe(true);
  });
  test('ftp://user:pass@xn--fiq228c.com:8042/over/there?name=ferret#nose', () => {
    const str = 'ftp://user:pass@xn--fiq228c.com:8042/over/there?name=ferret#nose';
    expect(Url.isValid(str)).toBe(false);
  });
});
