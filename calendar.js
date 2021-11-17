function dateChange(date, obj) {
	clearTables();

	data[date].forEach(element => {
		alert();
	});
}

function initCalendar(context) {
	dateChange(context.current[0], context.calendar);
}

$(function() {
	$('.calendar').pignoseCalendar({
		lang: 'cs',
		week: 1,
		select: dateChange,
		init: initCalendar,
	});
});

$(function() {
	$('#reservationTime').on('input change', function() {
		let hours = (Math.floor($(this).val() / 2) + 16) % 24;
		let minutes = ($(this).val() % 2 == 0) ? "00" : "30";
		$('#reservationTimeLabel').text('Čas ' + hours + ':' + minutes);
	});
});
