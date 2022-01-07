
export function getValueByPath(obj: any, path: string) {
    return path.split('.').reduce((o, i) => o[i], obj);
}
