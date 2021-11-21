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
	var time_arr = $('#time_reserv').val();

	// TODO add validation
	createReservation(
		getDate(),
		$('.selected').attr('id'),
		time_arr[0],
		time_arr[time_arr.length - 1],
		$('#res-name').val(),
		$('#res-tel').val(),
		$('#res-count').val(),
		$('#res-note').val(),
	);

	$('#res-name').val('');
	$('#res-tel').val('');
	$('#res-count').val('');
	$('#res-note').val('');

	timeChange();

	var wrapper = document.createElement('div');
	wrapper.innerHTML = `
	<div class="alert alert-success alert-dismissible" role="alert">
		Rezervace vytvořena
		<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
	</div>`;

	var alert = $('#alertPlaceHolder');
	alert.append(wrapper);
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
	var test = document.getElementById('uploadFile');
	var file = test.files[0];
	var fileread = new FileReader();
	fileread.onload = function(e) {
		data = JSON.parse(e.target.result);
	};
	fileread.readAsText(file);
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
