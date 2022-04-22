import { isNotBlank, leftPad, capitalize, isJson, underscore, replaceGlobalLabel, underscoreless, obscureString, simpleLanguage } from '../modules/string';

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

	it('check capitalize first letter', () => {
		expect(capitalize('elbuild')).toBe('Elbuild');
	})

	it('check capitalize string', () => {
		expect(capitalize('eLBUILD')).toBe('Elbuild');
	})

	it('check capitalize no value', () => {
		expect(capitalize('')).toBe('');
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

	it('check camelcase to underscore', () => {
		expect(underscore('elBuild')).toBe('el_build');
	})

	it('check camelcase to underscore with titlecase', () => {
		expect(underscore('ElBuild')).toBe('el_build');
	})

	it('check camelcase to underscore no value', () => {
		expect(underscore('')).toBe('');
	})

	it('check replace label', () => {
		expect(replaceGlobalLabel('Check replace test label', 'test', 'global')).toBe('Check replace global label');
	})

	it('check replace global label', () => {
		expect(replaceGlobalLabel('fixCheck replace fixglobal labelfix', 'fix', '')).toBe('Check replace global label');
	})

	it('check replace global label no value', () => {
		expect(replaceGlobalLabel('', 'fix', '')).toBe('');
	})

	it('check underscoreless', () => {
		expect(underscoreless('check_underscoreless_elbuild',)).toBe('check underscoreless elbuild');
	})

	it('check underscoreless char', () => {
		expect(underscoreless('check_underscoreless_elbuild', '-',)).toBe('check-underscoreless-elbuild');
	})

	it('check underscoreless no value', () => {
		expect(underscoreless('',)).toBe('');
	})

	it('check obscure string', () => {
		expect(obscureString('test elbuild',)).toBe('t**t e*****d')
	})

	it('check obscure string no value', () => {
		expect(obscureString('',)).toBe('')
	})

	it('check simple language', () => {
		expect(simpleLanguage('it-IT',)).toBe('it')
	})

	it('check simple language no value', () => {
		expect(simpleLanguage('',)).toBe('')
	})
})

