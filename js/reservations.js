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
	setTableColor(table_id, '#F1E10E') 
}

function setTableColor(table_id, color) {
	$('#' + table_id).css('background-color', color);
}

function clearTables() {
	let tables = $('.desk');
	tables.each(function () {
		setTableColor($(this).attr('id'), '#DCDCDC');
	});
}

function createReservation(date, table, timeFrom, timeTo, name, tel, count, note) {
	createDay(date);

	if (reservationFull(date, table, timeFrom, timeTo))
		return false;

	data[date].push({
		'table': table,
		'timeFrom': timeFrom,
		'timeTo': timeTo,
		'name': name,
		'tel': tel,
		'count': count,
		'note': note,
	});

	return true;
}

function processReservationForm() {
	// Take time from elements id `reservation-xx` class `time-selected`
	createReservation(
		getDate(),
		$('.selected').attr('id'),
		null, // TODO fill
		null, // TODO fill
		$('#res-name').val(),
		$('#res-tel').val(),
		$('#res-count').val(),
		$('#res-note').val(),
	);
}

function exportReservations() {
	var blob = new Blob([JSON.stringify(data)], {
		type: 'application/json'
	});
	var link = document.createElement('a');
	link.href = window.URL.createObjectURL(blob);
	link.download = 'export.json';
	link.click();
}

function importReservations() {
	// TODO
}

function toggleSelected() {
	// TODO Marek
	$(this)
}


// Bind form submit button
$(function() {
	$('#reservationFormSubmit').on('click', processReservationForm);
});

// Bind export reservations button
$(function() {
	$('#export').on('click', exportReservations);
});

// Bind import reservations button
$(function() {
	$('#import').on('click', importReservations);
});

// Bind table click
$(function() {
	$('.desk').on('click', toggleSelected);
});
