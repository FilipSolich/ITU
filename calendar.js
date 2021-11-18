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

	let t = data[date];


	data[date].forEach(function (item) {
		if (item.timeFrom <= time && item.timeTo > time) {
			setTableReserverd(item.table);
		}
	});
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
	$('#reservationTime').on('input change', function() {
		let hours = Math.floor($(this).val() / 2) + 13;
		let minutes = ($(this).val() % 2 == 0) ? "00" : "30";
		$('#reservationTimeLabel').text('Čas ' + hours + ':' + minutes);
		timeChange();
	});
});
