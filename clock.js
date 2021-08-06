function keepTheClockMove()
{
	var n = new Date(); // new Date() is pre-set to be current date

	// hour : miniute : second
	let minuteSuffix = ["ぷん","ふん","ぷん","ぷん","ふん","ぷん","ぷん","ふん","ふん","ぷん"];

	document.getElementById("hour").innerHTML = (n.getHours()).toLocaleString('ja-jp', {minimumIntegerDigits: 2, useGrouping:false});
	document.getElementById("minute").innerHTML = (n.getMinutes()).toLocaleString('ja-jp', {minimumIntegerDigits: 2, useGrouping:false});
	document.getElementById("minuteCaption").innerHTML = minuteSuffix[(n.getMinutes()+1)%10];
	document.getElementById("second").innerHTML = (n.getSeconds()).toLocaleString('ja-jp', {minimumIntegerDigits: 2, useGrouping:false});

	// date month year (weekday)
	document.getElementById("dateDIV").innerHTML = n.toLocaleString('ja-jp', {year: "numeric", month: "long", day: "numeric", weekday: "long"});

	setTimeout(keepTheClockMove, 1000);
}
