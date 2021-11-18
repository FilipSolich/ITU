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

	data[date].forEach(function (item) {
		if (item.timeFrom <= time && item.timeTo > time) {
			setTableReserverd(item.table);
		}
	});
}

function updateTimeLabel() {
	let hours = Math.floor($('#reservationTime').val() / 2) + 13;
	let minutes = ($('#reservationTime').val() % 2 == 0) ? "00" : "30";
	$('#reservationTimeLabel').text('Čas ' + hours + ':' + minutes);
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
