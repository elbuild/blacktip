
//new date object
export function newDate(time: boolean = false): Date {
	const d = new Date();
	if (!time) {
		d.setHours(0, 0, 0, 0);
	}
	return d;
}