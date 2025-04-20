////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2025.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import compareDateTime from '../../../src/validators/impl/date-time-comparator';

describe('compareDateTime with leading zeros', () => {
  it('returns 0 for equal date strings with leading zeros', () => {
    const lhs = '2023-01-01 01:01:01';
    const rhs = '2023-01-01 01:01:01';
    const result = compareDateTime(lhs, rhs);
    expect(result).toBe(0);
  });

  it('returns a positive number when lhs date string with leading zeros is greater than rhs date string', () => {
    const lhs = '2023-01-01 01:01:02';
    const rhs = '2023-01-01 01:01:01';
    const result = compareDateTime(lhs, rhs);
    expect(result).toBeGreaterThan(0);
  });

  it('returns a negative number when lhs date string with leading zeros is less than rhs date string', () => {
    const lhs = '2023-01-01 01:01:00';
    const rhs = '2023-01-01 01:01:01';
    const result = compareDateTime(lhs, rhs);
    expect(result).toBeLessThan(0);
  });

  it('returns 0 for equal date strings with mixed leading zeros', () => {
    const lhs = '2023-1-1 1:1:1';
    const rhs = '2023-01-01 01:01:01';
    const result = compareDateTime(lhs, rhs);
    expect(result).toBe(0);
  });

  it('returns a positive number when lhs date string with mixed leading zeros is greater than rhs date string', () => {
    const lhs = '2023-1-1 1:1:2';
    const rhs = '2023-01-01 01:01:01';
    const result = compareDateTime(lhs, rhs);
    expect(result).toBeGreaterThan(0);
  });

  it('returns a negative number when lhs date string with mixed leading zeros is less than rhs date string', () => {
    const lhs = '2023-1-1 1:1:0';
    const rhs = '2023-01-01 01:01:01';
    const result = compareDateTime(lhs, rhs);
    expect(result).toBeLessThan(0);
  });
  it('throws error when lhs is not a string or Date object', () => {
    const lhs = 12345;
    const rhs = '2023-10-01 12:30:45';
    expect(() => compareDateTime(lhs, rhs)).toThrow('The left hand side value must be a string or a Date object.');
  });

  it('throws error when rhs is not a string or Date object', () => {
    const lhs = '2023-10-01 12:30:45';
    const rhs = 12345;
    expect(() => compareDateTime(lhs, rhs)).toThrow('The right hand side value must be a string or a Date object.');
  });

  it('throws error when both lhs and rhs are not string or Date objects', () => {
    const lhs = 12345;
    const rhs = 67890;
    expect(() => compareDateTime(lhs, rhs)).toThrow('The left hand side value must be a string or a Date object.');
  });

  it('returns 0 for equal Date objects', () => {
    const lhs = new Date('2023-10-01 12:30:45');
    const rhs = new Date('2023-10-01 12:30:45');
    const result = compareDateTime(lhs, rhs);
    expect(result).toBe(0);
  });

  it('returns a positive number when lhs Date is greater than rhs Date', () => {
    const lhs = new Date('2023-10-01 13:30:45');
    const rhs = new Date('2023-10-01 12:30:45');
    const result = compareDateTime(lhs, rhs);
    expect(result).toBeGreaterThan(0);
  });

  it('returns a negative number when lhs Date is less than rhs Date', () => {
    const lhs = new Date('2023-10-01 11:30:45');
    const rhs = new Date('2023-10-01 12:30:45');
    const result = compareDateTime(lhs, rhs);
    expect(result).toBeLessThan(0);
  });
  it('throws error when lhs is not a string or Date object', () => {
    const lhs = 12345;
    const rhs = '2023-10-01 12:30:45';
    expect(() => compareDateTime(lhs, rhs)).toThrow('The left hand side value must be a string or a Date object.');
  });

  it('throws error when rhs is not a string or Date object', () => {
    const lhs = '2023-10-01 12:30:45';
    const rhs = 12345;
    expect(() => compareDateTime(lhs, rhs)).toThrow('The right hand side value must be a string or a Date object.');
  });

  it('throws error when both lhs and rhs are not string or Date objects', () => {
    const lhs = 12345;
    const rhs = 67890;
    expect(() => compareDateTime(lhs, rhs)).toThrow('The left hand side value must be a string or a Date object.');
  });

  it('returns 0 for equal Date objects', () => {
    const lhs = new Date('2023-10-01 12:30:45');
    const rhs = new Date('2023-10-01 12:30:45');
    const result = compareDateTime(lhs, rhs);
    expect(result).toBe(0);
  });

  it('returns a positive number when lhs Date is greater than rhs Date', () => {
    const lhs = new Date('2023-10-01 13:30:45');
    const rhs = new Date('2023-10-01 12:30:45');
    const result = compareDateTime(lhs, rhs);
    expect(result).toBeGreaterThan(0);
  });

  it('returns a negative number when lhs Date is less than rhs Date', () => {
    const lhs = new Date('2023-10-01 11:30:45');
    const rhs = new Date('2023-10-01 12:30:45');
    const result = compareDateTime(lhs, rhs);
    expect(result).toBeLessThan(0);
  });

  it('returns a positive number when lhs date string is greater than rhs Date object', () => {
    const lhs = '2023-10-01 13:30:45';
    const rhs = new Date('2023-10-01 12:30:45');
    const result = compareDateTime(lhs, rhs);
    expect(result).toBeGreaterThan(0);
  });

  it('returns a negative number when lhs date string is less than rhs Date object', () => {
    const lhs = '2023-10-01 11:30:45';
    const rhs = new Date('2023-10-01 12:30:45');
    const result = compareDateTime(lhs, rhs);
    expect(result).toBeLessThan(0);
  });
  it('returns a positive number when lhs Date is greater than rhs date string', () => {
    const lhs = new Date('2023-10-01 13:30:45');
    const rhs = '2023-10-01 12:30:45';
    const result = compareDateTime(lhs, rhs);
    expect(result).toBeGreaterThan(0);
  });

  it('returns a negative number when lhs Date is less than rhs date string', () => {
    const lhs = new Date('2023-10-01 11:30:45');
    const rhs = '2023-10-01 12:30:45';
    const result = compareDateTime(lhs, rhs);
    expect(result).toBeLessThan(0);
  });

  it('returns 0 when lhs Date is equal to rhs date string', () => {
    const lhs = new Date('2023-10-01 12:30:45');
    const rhs = '2023-10-01 12:30:45';
    const result = compareDateTime(lhs, rhs);
    expect(result).toBe(0);
  });

  it('throws error when rhs is not a string or Date object', () => {
    const lhs = new Date('2023-10-01 12:30:45');
    const rhs = 12345;
    expect(() => compareDateTime(lhs, rhs)).toThrow('The right hand side value must be a string or a Date object.');
  });
});
