
//new date object
export function newDate(time: boolean = false): Date {
	const d = new Date();
	if (!time) {
		d.setHours(0, 0, 0, 0);
	}
	return d;
}

//it returns the start of the day from input date object
export function startOfDay(date?: Date): Date {
	const d = date ? date : newDate();
	d.setHours(0, 0, 0, 0);
	return d;
}

//it returns the end of the day from input date object
export function endOfDay(date?: Date): Date {
	const d = date ? date : newDate();
	d.setHours(23, 59, 59);
	return d;
}

//it returns the first day of the week from input date object
export function firstDayOfWeek(date?: Date): Date {
	const d = date ? date : newDate();
	if (d.getDay() === 1) return d;
	else {
		while (d.getDay() !== 1) {
			d.setDate(d.getDate() - 1);
		}
		return d;
	}
}


//it returns the first day of the month from input date object
export function firstDayOMonth(date?: Date): Date {
	const d = date ? date : newDate();
	d.setDate(1);
	return d;
}

export function lastDayOfMonth(date?: Date): Date {
	const d = date ? date : newDate();
	d.setDate(numberOfDaysInMonth(d.getFullYear(), d.getMonth()));
	return d;
}


//counts number of days in a month
export function numberOfDaysInMonth(year: number, month: number): number {
	return new Date(year, month + 1, 0).getDate();
}

//first day of the year
export function firstDayOfYear(date?: Date): Date {
	const d = date ? date : newDate();
	d.setDate(1);
	d.setMonth(0);
	return d;
}



