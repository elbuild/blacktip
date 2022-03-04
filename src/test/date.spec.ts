import { endOfDay, firstDayOfWeek, firstDayOfYear, lastDayOfMonth, newDate, numberOfDaysInMonth, startOfDay } from '../modules/date';


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

	it('should return a new date obj with 0 hours, 0 minuts and so on ', () => {
		const value = startOfDay(realdate);
		expect(value.getFullYear()).toBe(realdate.getFullYear());
		expect(value.getMonth()).toBe(realdate.getMonth());
		expect(value.getDay()).toBe(realdate.getDay());
		expect(value.getHours()).toBe(0);
		expect(value.getMinutes()).toBe(0);
		expect(value.getSeconds()).toBe(0);

	});

	it('should return a new date obj with 23 hours, 59 minuts and so on ', () => {
		const value = endOfDay(realdate);
		expect(value.getFullYear()).toBe(realdate.getFullYear());
		expect(value.getMonth()).toBe(realdate.getMonth());
		expect(value.getDay()).toBe(realdate.getDay());
		expect(value.getHours()).toBe(23);
		expect(value.getMinutes()).toBe(59);
		expect(value.getSeconds()).toBe(59);

	});

	it('set first day of the week ', () => {
		const value = firstDayOfWeek(realdate);
		expect(value.getFullYear()).toBe(realdate.getFullYear());
		expect(value.getMonth()).toBe(realdate.getMonth());
	});

	it('set last day of the month ', () => {
		const value = lastDayOfMonth(realdate);
		expect(value.getFullYear()).toBe(realdate.getFullYear());
		expect(value.getMonth()).toBe(realdate.getMonth());
	});

	it('counts the number of days in a given month (from date obj)', () => {
		const value = numberOfDaysInMonth(realdate.getFullYear(), realdate.getMonth());
		expect(value).toBeGreaterThanOrEqual(28);
	});

	it('returns first day of the year', () => {
		const value = firstDayOfYear(realdate);
		expect(value.getFullYear()).toBe(realdate.getFullYear());
		expect(value.getMonth()).toBe(0);

	});



})

