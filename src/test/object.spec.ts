import { getValueByPath } from '../modules/object';

describe('object module', () => {
    it('check empty object', () => {
        const obj = {}
        expect(getValueByPath(obj, 'name')).toBe(undefined);
    })
})

