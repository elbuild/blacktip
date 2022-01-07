
export function leftPad(s: string, size: number, char: string) {
    let pad = '';
    while ((pad.length + s.length) < size) pad += char;
    return pad + s;
}

export function isNotBlank(value: string) {
    return typeof value !== 'undefined' && value !== null && value.trim().length > 0;
}

