
export function leftPad(s: string, size: number, char: string): string {
	let pad = '';
	while ((pad.length + s.length) < size) pad += char;
	return pad + s;
}

export function isNotBlank(value: string): boolean {
	return typeof value !== 'undefined' && value !== null && value.trim().length > 0;
}

export function capitalize(value: string) {
	return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
}

export function isJson(item: any) {
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

export function underscore(value: string) {
	return value.replace(/\.?([A-Z])/g, (x, y) => '_' + y.toLowerCase()).replace(/^_/, '');
}

export function replaceGlobalLabel(original: string, searchTxt: string, replaceTxt: string): string {
	const regex = new RegExp(searchTxt, 'g');
	return original.replace(regex, replaceTxt);
}
