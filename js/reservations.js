/*
 Project:    ITU - Rezervační kalendář
 University: Brno University of Technology, FIT
 Date:       29. 11. 2021
 Author:     Filip Solich <xsolic00@stud.fit.vutbr.cz> 
*/

// Create empty array when on date key in data object
function createDay(date) {
	if (data[date] === undefined)
		data[date] = [];
}

// Return `true` if table is full for specific date and time else `false`
function reservationFull(date, table, timeFrom, timeTo) {
	data[date].forEach(element => {
		if (element.table == table && (timeTo > element.timeFrom || timeFrom < element.timeTo)) {
			return true;
		}
	});

	return false;
}

// Set table color on reserved
function setTableReserverd(table_id) {
	setTableColor(table_id, '#F1E10E');
}

// Set table color
function setTableColor(table_id, color) {
	$('#' + table_id).css('background-color', color);
}

// Remove reserved color from all tables
function clearTables() {
	let tables = $('.desk');
	tables.each(function () {
		setTableColor($(this).attr('id'), '#DCDCDC');
	});
}

// Create reservation with given informations
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

// Process reservation form and validate data
function processReservationForm() {
	var time_arr = $('#time_reserv').val();

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

// Export reservations into JSON
function exportReservations() {
	var blob = new Blob([JSON.stringify(data)], {
		type: 'application/json'
	});
	var link = document.createElement('a');
	link.href = window.URL.createObjectURL(blob);
	link.download = 'export.json';
	link.click();
}

// Import reservations from JSON
function importReservations() {
	var test = document.getElementById('uploadFile');
	var file = test.files[0];
	var fileread = new FileReader();
	fileread.onload = function(e) {
		data = JSON.parse(e.target.result);
	};
	fileread.readAsText(file);
}

// Set reservations info for selected date
function changeReservationInfo() {
	clearReservationInfo();

	var dayData = data[getDate()];

	dayData.forEach(function (value) {
		if (value['table'].toString() == $('.selected').attr('id')) {
			bind_icons(value);
		}
	});
}

// Clear reservations info for selected date
function clearReservationInfo() {
	bind_icons({
		'timeFrom': '13:00',
		'timeTo': '23:00',
		'name': '',
		'tel': '',
		'count': '',
		'note': '',
	});
}

// Delete reservation
function deleteReservation() {
	var delId = parseInt($(this).attr('id').replace('delete-', ''), 10);

	var dayData = data[getDate()];

	dayData.forEach(function (value, idx, arr) {
		timeFrom = parseInt(value['timeFrom'][0] + value['timeFrom'][1], 10);
		timeTo = parseInt(value['timeTo'][0] + value['timeTo'][1], 10);
		if (delId >= timeFrom && delId < timeTo) {
			arr.splice(idx, 1);
		}
	});

	changeReservationInfo();
	timeChange();
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

// Bind delete reservations button
$(function() {
	$('.delete').on('click', deleteReservation);
});
