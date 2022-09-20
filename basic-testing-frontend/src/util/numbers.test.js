import { it, expect } from 'vitest';
import { transformToNumber } from './numbers';

it('should transform a string number to number of type number', () => {
    const value = '4';
    const result = transformToNumber(value);
    expect(result).toBeTypeOf('number');
});

it('should transform a string number to number of type number', () => {
    const value = '4';
    const result = transformToNumber(value);
    expect(result).toBe(4);
});

it('should yield NaN for non-transformable values', () => {
    const value = 'number';
    const value2 = {};
    const result = transformToNumber(value);
    const result2 = transformToNumber(value2);

    expect(result).toBeNaN();
    expect(result2).toBeNaN();
});
