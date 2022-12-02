
function calculate() {
	  let cost = +document.getElementById("cost").value;
    let consumPerDay = +document.getElementById("per-day").value;
		if (cost > 999) {
			cost = 999;
			document.getElementById("cost").value = cost;
		}
		else if (cost < 0) {
			cost = 0;
			document.getElementById("cost").value = cost;
		}
		if (consumPerDay > 999) {
			consumPerDay = 999;
			document.getElementById("per-day").value = consumPerDay;
		} else if (consumPerDay < 0) {
			consumPerDay = 0;
			document.getElementById("per-day").value = consumPerDay;
		}
    let costPerDay = cost * consumPerDay / 20;
    let costPerMonth = costPerDay * 30;
    let costPerYear = costPerDay * 365;
    let costPer10Years = costPerDay * 3652;
		function format(num) {
			text = Math.floor(num).toString();
			return (text.slice(0,-6)+" "+text.slice(-6,-3)+" "+text.slice(-3))
		}
    document.getElementById("month").innerHTML = format(costPerMonth);
    document.getElementById("year").innerHTML = format(costPerYear);
    document.getElementById("10years").innerHTML = format(costPer10Years);
}
document.getElementById("cost").addEventListener("change", calculate);
document.getElementById("per-day").addEventListener("change", calculate);
document.getElementById("cost").addEventListener("keyup", calculate);
document.getElementById("per-day").addEventListener("keyup", calculate);
