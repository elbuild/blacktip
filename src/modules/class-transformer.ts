export enum Factors {
    DATE = 1000,
    CURRENCY = 100
}

export function num2Date(value: number): Date | undefined {
    return value ? new Date(value * Factors.DATE) : undefined;
}

export function date2Num(value: Date): number | undefined {
    return value ? Math.round(value.getTime() / Factors.DATE) : undefined;
}

export function cent2double(value: number): number | undefined {
    return value !== null && typeof value !== 'undefined' ? value / Factors.CURRENCY : undefined;
}

export function double2cent(value: number): number | undefined {
    return value !== null && typeof value !== 'undefined' ? Math.round(value * Factors.CURRENCY) : undefined;
}

export function num2Bool(value: number): boolean {
    return !!value;
}

export function bool2Num(value: boolean): number {
    return value ? 1 : 0;
}

export function dateTransform(value: any, _obj: any, type: any): number | Date | undefined {
    if (type === 0) {
        return num2Date(value);
    } else {
        return date2Num(value);
    }
}

export function centTransform(value: number, _obj: any, type: any): number | undefined {
    if (type === 0) {
        return cent2double(value);
    } else {
        return double2cent(value);
    }
}

export function booleanTransform(value: any, _obj: any, type: any): number | boolean | undefined {
    if (type === 0) {
        return num2Bool(value);
    } else {
        return bool2Num(value);
    }
}
