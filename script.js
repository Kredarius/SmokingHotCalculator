console.log("from script file");
function calculate() {
	let cost = +document.getElementById("cost").value;
    let consumPerDay = +document.getElementById("per-day").value;
    let costPerDay = cost * consumPerDay / 20;
    let costPerMonth = costPerDay * 30;
    let costPerYear = costPerDay * 365;
    let costPer10Years = costPerDay * 3652;
    document.getElementById("month").innerHTML = costPerMonth;
    document.getElementById("year").innerHTML = costPerYear;
    document.getElementById("10years").innerHTML = costPer10Years;
    console.log("baf");
}
