/*
 Project:    ITU - Rezervační kalendář
 University: Brno University of Technology, FIT
 Date:       29. 11. 2021

 Author:     Filip Solich <xsolic00@stud.fit.vutbr.cz> 
*/

// Retrun selected date as a string
function getDate() {
	return $('.pignose-calendar-unit-first-active').attr('data-date');
}

// Return selected time as a string
function getTime() {
	return time = $('#reservationTimeLabel').text().replace('Čas ', '');
}

// Refresh tables reservations on time change
function timeChange() {
	let date = getDate();
	let time = getTime();
	clearTables();
	changeReservationInfo();

	data[date].forEach(function (item) {
		if (item.timeFrom <= time && item.timeTo > time) {
			setTableReserverd(item.table);
		}
	});
}

// Update time on time range change
function updateTimeLabel() {
	let hours = parseInt($('#reservationTime').val(), 10) + 13;
	$('#reservationTimeLabel').text('Čas ' + hours + ':00');
	timeChange();
}

// Settings for PIGNOSE calendar
$(function() {
	$('.calendar').pignoseCalendar({
		lang: 'cs',
		week: 1,
		select: timeChange,
		init: timeChange,
	});
});

// Bind updateTimeLabel on time range input
$(function() {
	$('#reservationTime').on('input change load', updateTimeLabel);
});

// Load reservations on document ready
$(document).ready(updateTimeLabel);
