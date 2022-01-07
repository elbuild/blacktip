import { isNotBlank, leftPad } from '../modules/string';

describe('string module', () => {
    it('check empty string', () => {
        expect(isNotBlank('')).toBe(false);
    })

    it('check not empty string', () => {
        expect(isNotBlank('ELbuild')).toBe(true);
    })

    it('check pad size = 0', () => {
        expect(leftPad('1', 0, '0')).toBe('1');
    })

    it('pad string with size equals to pad size', () => {
        expect(leftPad('1', 1, '0')).toBe('1');
    })

    it('add 0 zero to 1 = 01', () => {
        expect(leftPad('1', 2, '0')).toBe('01');
    })
})

