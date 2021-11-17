function createDay(date) {
	if (data[date] === undefined)
		data[date] = [];
}

function reservationFull(date, table, timeFrom, timeTo) {
	data[date].forEach(element => {
		if (element.table == table && (timeTo > element.timeFrom || timeFrom < element.timeTo)) {
			return true;
		}
	});

	return false;
}

function setTableColor(table, color) {
	table.css('background-color', color);
}

function clearTables() {
	let tables = $('.table');
	tables.forEach(element => {
		setTableColor(element, rgb(255,228,196));
	});
}

function createReservation(date, table, timeFrom, timeTo, name, tel, number, note) {
	createDay(date);

	if (reservationFull(date, table, timeFrom, timeTo))
		return false;

	data[date].push({
		'table': table,
		'timeFrom': timeFrom,
		'timeTo': timeTo,
		'name': name,
		'tel': tel,
		'number': number,
		'note': note,
	});

	return true;
}