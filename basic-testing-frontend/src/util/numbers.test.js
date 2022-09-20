import { it, expect } from 'vitest';
import { transformToNumber } from './numbers';

it('should convert value to a number', () => {
    const value = '4';

    const result = transformToNumber(value);

    expect(result).toBe(4);
});

it('should yield NaN if invalid number is provided', () => {
    const value = 'number';

    const result = transformToNumber(value);

    expect(result).toBeNaN();
});
