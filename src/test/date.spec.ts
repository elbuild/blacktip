import { newDate } from '../modules/date';


describe('date module', () => {

	const realdate = new Date();

	it('should create a new date', () => {
		const value = newDate(false);
		expect(value.getFullYear()).toBe(realdate.getFullYear());
		expect(value.getMonth()).toBe(realdate.getMonth());
		expect(value.getDay()).toBe(realdate.getDay());
		expect(value.getHours()).toBe(0);
		expect(value.getMinutes()).toBe(0);
		expect(value.getSeconds()).toBe(0);

	});

	it('should create a new date with time', () => {
		const value = newDate(true);
		expect(value.getFullYear()).toBe(realdate.getFullYear());
		expect(value.getMonth()).toBe(realdate.getMonth());
		expect(value.getDay()).toBe(realdate.getDay());
		expect(value.getHours()).toBe(realdate.getHours());
		expect(value.getMinutes()).toBe(realdate.getMinutes());
		//expect(value.getSeconds()).toBe(0); can't test minutes 

	});



})

