import { isNotBlank, leftPad, capitalize, isJson } from '../modules/string';

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

	it('check first letter', () => {
		expect(capitalize('elbuild')).toBe('Elbuild');
	})
	it('check string', () => {
		expect(capitalize('eLBUILD')).toBe('Elbuild');
	})

	it('check json', () => {
		expect(isJson('{"name":"Mario","surname": "Rossi","active": true,"favoriteNumber": 42,"birthday": {"day": 1,"month": 1,"year": 2000},"languages": ["it", "en"]}')).toBe(true);
	})

	it('check not json', () => {
		expect(isJson('{4:"Mario",surname: "Rossi","active": true,"favoriteNumber": 42,"birthday": {"day": 1,("month"): 1,"year": 2000}, "languages": ["it", "en"]}')).toBe(false);
	})

	it('check number json', () => {
		expect(isJson(5)).toBe(false);
	})
})

