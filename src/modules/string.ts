
export function leftPad(s: string, size: number, char: string): string {
	let pad = '';
	while ((pad.length + s.length) < size) pad += char;
	return pad + s;
}

export function isNotBlank(value: string): boolean {
	return typeof value !== 'undefined' && value !== null && value.trim().length > 0;
}

export function capitalize(value: string): string {
	if (!value) return value;
	return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
}

export function isJson(item: any): boolean {
	item = typeof item !== 'string' ? JSON.stringify(item) : item;

	try {
		item = JSON.parse(item);
	} catch (e) {
		return false;
	}

	if (typeof item === 'object' && item !== null) {
		return true;
	}

	return false;
}

export function underscore(value: string): string {
	if (!value) return value;
	return value.replace(/\.?([A-Z])/g, (x, y) => '_' + y.toLowerCase()).replace(/^_/, '');
}

export function replaceGlobalLabel(original: string, searchTxt: string, replaceTxt: string): string {
	if (!original) return original;
	const regex = new RegExp(searchTxt, 'g');
	return original.replace(regex, replaceTxt);
}

export function underscoreless(value: string, char: string = ' '): string {
	if (!value) return value;
	return value.replace(/_/g, char);
}

export function obscureString(string: string): string {
	if (!string) return string;

	const names = string.split(' ');
	const regnames = [];
	for (const n of names) {
		regnames.push(obscureSingle(n));
	}

	return regnames.join(' ');
}

function obscureSingle(string: string): string {

	const L = string.length;

	for (let i = 1; i < L - 1; i++) {
		string = string.substring(0, i) + '*' + string.substring(i + 1);
	}

	return string;
}

export function simpleLanguage(value: string): string {
	if (value) {
		const lang = value.toLowerCase().split('-');
		return lang[0];
	}
	return '';
}

export function checkAnonimize(value: any, first: boolean = false): boolean {
	if (value) {
		if (!first) return value.toString().charAt(0) === '*';
		else return value.toString().charAt(0) !== '*' && value.toString().charAt(1) === '*';
	}
	return false;
}

export function validateEmail(email: string): boolean {
	const regex = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,15}$/;
	return regex.test(email);
}

