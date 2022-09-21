import { describe, it, expect } from 'vitest';
import { transformToNumber, cleanNumbers } from './numbers';

describe('transformToNumber()', () => {
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
});

describe('cleanNumbers()', () => {
    it('should return an array of number values if an array of string number values is provided', () => {
        const numberValues = ['1', '2'];
        const result = cleanNumbers(numberValues);
        expect(result[0]).toBeTypeOf('number');
    });

    it('should throw ar error if an array of at least one empty string is provided', () => {
        const numberValues = ['', 1];
        const cleanFn = () => cleanNumbers(numberValues);
        expect(cleanFn).toThrow();
    });
});
