import { endOfDay, newDate, startOfDay } from '../modules/date';


describe('date module', () => {

	const realdate = new Date();

	it('should create a new date obj', () => {
		const value = newDate(false);
		expect(value.getFullYear()).toBe(realdate.getFullYear());
		expect(value.getMonth()).toBe(realdate.getMonth());
		expect(value.getDay()).toBe(realdate.getDay());
		expect(value.getHours()).toBe(0);
		expect(value.getMinutes()).toBe(0);
		expect(value.getSeconds()).toBe(0);

	});

	it('should create a new date obj with time', () => {
		const value = newDate(true);
		expect(value.getFullYear()).toBe(realdate.getFullYear());
		expect(value.getMonth()).toBe(realdate.getMonth());
		expect(value.getDay()).toBe(realdate.getDay());
		expect(value.getHours()).toBe(realdate.getHours());
		expect(value.getMinutes()).toBe(realdate.getMinutes());
		//expect(value.getSeconds()).toBe(0); can't test minutes 

	});

	it('should create a new date obj with 0 hours, 0 minuts and so on ', () => {
		const value = startOfDay(realdate);
		expect(value.getFullYear()).toBe(realdate.getFullYear());
		expect(value.getMonth()).toBe(realdate.getMonth());
		expect(value.getDay()).toBe(realdate.getDay());
		expect(value.getHours()).toBe(0);
		expect(value.getMinutes()).toBe(0);
		expect(value.getSeconds()).toBe(0);

	});

	it('should create a new date obj with 23 hours, 59 minuts and so on ', () => {
		const value = endOfDay(realdate);
		expect(value.getFullYear()).toBe(realdate.getFullYear());
		expect(value.getMonth()).toBe(realdate.getMonth());
		expect(value.getDay()).toBe(realdate.getDay());
		expect(value.getHours()).toBe(23);
		expect(value.getMinutes()).toBe(59);
		expect(value.getSeconds()).toBe(59);

	});



})

