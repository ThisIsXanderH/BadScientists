var currentDiv = "pageTitle";
$('.page').hide();
$('#' + currentDiv).show();

$('.navButton').click(function() {
	$('#' + currentDiv).hide();
	$('#' + $(this).data('link')).show();
});


$('#numPlayers').change(function() {
	var val = $(this).data('val'),
	bad,
	good;
	switch(val) {
		case 5:
		case 6:
			bad = 2;
		break;
		case 7:
		case 8:
		case 9:
			bad = 3;
		break;
		case 10:
			bad = 4;
		break;
	}
	good = val - bad;
	$('.numBad').text(bad);
	$('.numGood').text(good);
});