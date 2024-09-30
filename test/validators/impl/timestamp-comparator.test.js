////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import compareTimestamp from '../../../src/validators/impl/timestamp-comparator';

describe('compareTimestamp with leading zeros', () => {
  it('returns 0 for equal date strings with leading zeros', () => {
    const lhs = '2023-01-01T01:01:01Z';
    const rhs = '2023-01-01T01:01:01Z';
    const result = compareTimestamp(lhs, rhs);
    expect(result).toBe(0);
  });

  it('returns a positive number when lhs date string with leading zeros is greater than rhs date string', () => {
    const lhs = '2023-01-01T01:01:02Z';
    const rhs = '2023-01-01T01:01:01Z';
    const result = compareTimestamp(lhs, rhs);
    expect(result).toBeGreaterThan(0);
  });

  it('returns a negative number when lhs date string with leading zeros is less than rhs date string', () => {
    const lhs = '2023-01-01T01:01:00Z';
    const rhs = '2023-01-01T01:01:01Z';
    const result = compareTimestamp(lhs, rhs);
    expect(result).toBeLessThan(0);
  });
  // it('returns 0 for equal date strings with mixed leading zeros', () => {
  //   const lhs = '2023-1-1T1:1:1Z';
  //   const rhs = '2023-01-01T01:01:01Z';
  //   const result = compareTimestamp(lhs, rhs);
  //   expect(result).toBe(0);
  // });
  //
  // it('returns a positive number when lhs date string with mixed leading zeros is greater than rhs date string', () => {
  //   const lhs = '2023-1-1T1:1:2Z';
  //   const rhs = '2023-01-01T01:01:01Z';
  //   const result = compareTimestamp(lhs, rhs);
  //   expect(result).toBeGreaterThan(0);
  // });
  //
  // it('returns a negative number when lhs date string with mixed leading zeros is less than rhs date string', () => {
  //   const lhs = '2023-1-1T1:1:0Z';
  //   const rhs = '2023-01-01T01:01:01Z';
  //   const result = compareTimestamp(lhs, rhs);
  //   expect(result).toBeLessThan(0);
  // });
  it('throws error when lhs is not a string or Date object', () => {
    const lhs = 12345;
    const rhs = '2023-10-01T12:30:45Z';
    expect(() => compareTimestamp(lhs, rhs))
      .toThrow('The left hand side value must be a string or a Date object.');
  });

  it('throws error when rhs is not a string or Date object', () => {
    const lhs = '2023-10-01T12:30:45Z';
    const rhs = 12345;
    expect(() => compareTimestamp(lhs, rhs))
      .toThrow('The right hand side value must be a string or a Date object.');
  });

  it('throws error when both lhs and rhs are not string or Date objects', () => {
    const lhs = 12345;
    const rhs = 67890;
    expect(() => compareTimestamp(lhs, rhs))
      .toThrow('The left hand side value must be a string or a Date object.');
  });

  it('returns 0 for equal Date objects', () => {
    const lhs = new Date('2023-10-01T12:30:45Z');
    const rhs = new Date('2023-10-01T12:30:45Z');
    const result = compareTimestamp(lhs, rhs);
    expect(result).toBe(0);
  });

  it('returns a positive number when lhs Date is greater than rhs Date', () => {
    const lhs = new Date('2023-10-01T13:30:45Z');
    const rhs = new Date('2023-10-01T12:30:45Z');
    const result = compareTimestamp(lhs, rhs);
    expect(result).toBeGreaterThan(0);
  });

  it('returns a negative number when lhs Date is less than rhs Date', () => {
    const lhs = new Date('2023-10-01T11:30:45Z');
    const rhs = new Date('2023-10-01T12:30:45Z');
    const result = compareTimestamp(lhs, rhs);
    expect(result).toBeLessThan(0);
  });
  it('throws error when lhs is not a string or Date object', () => {
    const lhs = 12345;
    const rhs = '2023-10-01T12:30:45Z';
    expect(() => compareTimestamp(lhs, rhs)).toThrow('The left hand side value must be a string or a Date object.');
  });

  it('throws error when rhs is not a string or Date object', () => {
    const lhs = '2023-10-01T12:30:45Z';
    const rhs = 12345;
    expect(() => compareTimestamp(lhs, rhs)).toThrow('The right hand side value must be a string or a Date object.');
  });

  it('throws error when both lhs and rhs are not string or Date objects', () => {
    const lhs = 12345;
    const rhs = 67890;
    expect(() => compareTimestamp(lhs, rhs)).toThrow('The left hand side value must be a string or a Date object.');
  });

  it('returns 0 for equal Date objects', () => {
    const lhs = new Date('2023-10-01T12:30:45Z');
    const rhs = new Date('2023-10-01T12:30:45Z');
    const result = compareTimestamp(lhs, rhs);
    expect(result).toBe(0);
  });

  it('returns a positive number when lhs Date is greater than rhs Date', () => {
    const lhs = new Date('2023-10-01T13:30:45Z');
    const rhs = new Date('2023-10-01T12:30:45Z');
    const result = compareTimestamp(lhs, rhs);
    expect(result).toBeGreaterThan(0);
  });

  it('returns a negative number when lhs Date is less than rhs Date', () => {
    const lhs = new Date('2023-10-01T11:30:45Z');
    const rhs = new Date('2023-10-01T12:30:45Z');
    const result = compareTimestamp(lhs, rhs);
    expect(result).toBeLessThan(0);
  });

  it('returns a positive number when lhs date string is greater than rhs Date object', () => {
    const lhs = '2023-10-01T13:30:45Z';
    const rhs = new Date('2023-10-01T12:30:45Z');
    const result = compareTimestamp(lhs, rhs);
    expect(result).toBeGreaterThan(0);
  });

  it('returns a negative number when lhs date string is less than rhs Date object', () => {
    const lhs = '2023-10-01T11:30:45Z';
    const rhs = new Date('2023-10-01T12:30:45Z');
    const result = compareTimestamp(lhs, rhs);
    expect(result).toBeLessThan(0);
  });
  it('returns a positive number when lhs Date is greater than rhs date string', () => {
    const lhs = new Date('2023-10-01T13:30:45Z');
    const rhs = '2023-10-01T12:30:45Z';
    const result = compareTimestamp(lhs, rhs);
    expect(result).toBeGreaterThan(0);
  });

  it('returns a negative number when lhs Date is less than rhs date string', () => {
    const lhs = new Date('2023-10-01T11:30:45Z');
    const rhs = '2023-10-01T12:30:45Z';
    const result = compareTimestamp(lhs, rhs);
    expect(result).toBeLessThan(0);
  });

  it('returns 0 when lhs Date is equal to rhs date string', () => {
    const lhs = new Date('2023-10-01T12:30:45Z');
    const rhs = '2023-10-01T12:30:45Z';
    const result = compareTimestamp(lhs, rhs);
    expect(result).toBe(0);
  });

  it('throws error when rhs is not a string or Date object', () => {
    const lhs = new Date('2023-10-01T12:30:45Z');
    const rhs = 12345;
    expect(() => compareTimestamp(lhs, rhs)).toThrow('The right hand side value must be a string or a Date object.');
  });
});
