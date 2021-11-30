/*
 Project:    ITU - Rezervační kalendář
 University: Brno University of Technology, FIT
 Date:       29.11. 2021

 Author:  Filip Solich <xsolic00@stud.fit.vutbr.cz> 
*/

function getDate() {
	return $('.pignose-calendar-unit-first-active').attr('data-date');
}

function getTime() {
	return time = $('#reservationTimeLabel').text().replace('Čas ', '');
}

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

function updateTimeLabel() {
	let hours = parseInt($('#reservationTime').val(), 10) + 13;
	$('#reservationTimeLabel').text('Čas ' + hours + ':00');
	timeChange();
}

$(function() {
	$('.calendar').pignoseCalendar({
		lang: 'cs',
		week: 1,
		select: timeChange,
		init: timeChange,
	});
});

$(function() {
	$('#reservationTime').on('input change load', updateTimeLabel);
});

$(document).ready(updateTimeLabel);
