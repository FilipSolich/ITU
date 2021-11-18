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

function setTableReserverd(table_id) {
	setTableColor(table_id, '#FFFFFF') // TODO: Marek doplnit barvu rezervovaneho stolu
}

function setTableColor(table_id, color) {
	$('#' + table_id).css('background-color', color);
}

function clearTables() {
	let tables = $('.desk');
	tables.each(function () {
		setTableColor($(this).attr('id'), '#FFE4C4');
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

function processReservationForm() {

}

$(function() {
	$('#reservationTime').on('input change', function() {
		processReservationForm();
	});
});
