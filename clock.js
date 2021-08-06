function keepTheClockMove()
{
	var n = new Date(); // new Date() is pre-set to be current date

	// hour : miniute : second (24-hr system, with always two digits)
	// japanese ponunciation of "minute" will be differecnt, depends on the digit in front of it
	let minuteSuffix = ["ぷん","ふん","ぷん","ぷん","ふん","ぷん","ぷん","ふん","ふん","ぷん"];

	document.getElementById("hour").innerHTML = (n.getHours()).toLocaleString('ja-jp', {minimumIntegerDigits: 2, useGrouping:false});
	document.getElementById("minute").innerHTML = (n.getMinutes()).toLocaleString('ja-jp', {minimumIntegerDigits: 2, useGrouping:false});
	document.getElementById("minuteCaption").innerHTML = minuteSuffix[(n.getMinutes()+1)%10];
	document.getElementById("second").innerHTML = (n.getSeconds()).toLocaleString('ja-jp', {minimumIntegerDigits: 2, useGrouping:false});

	// date month year weekday
	document.getElementById("dateDIV").innerHTML = n.toLocaleString('ja-jp', {year: "numeric", month: "long", day: "numeric", weekday: "long"});

	// this function will restarted every 1 second.
	setTimeout(keepTheClockMove, 1000);
}
