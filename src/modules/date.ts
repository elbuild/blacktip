
//new date object
export function newDate(time: boolean = false): Date {
	const d = new Date();
	if (!time) {
		d.setHours(0, 0, 0, 0);
	}
	return d;
}

//it returns the start of the day from input date object
export function startOfDay(d?: Date): Date {
	if (!d) {
		d = new Date();
	}
	d.setHours(0, 0, 0, 0);
	return d;
}


export function endOfDay(d?: Date): Date {
	if (!d) {
		d = new Date();
	}
	d.setHours(23, 59, 59);
	return d;
}