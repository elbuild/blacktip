
export function leftPad(s: string, size: number, char: string): string {
    let pad = '';
    while ((pad.length + s.length) < size) pad += char;
    return pad + s;
}

export function isNotBlank(value: string): boolean {
    return typeof value !== 'undefined' && value !== null && value.trim().length > 0;
}

