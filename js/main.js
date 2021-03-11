
const screen = document.getElementById('inputs');
const buttons = document.querySelectorAll('#button');

for(item of buttons){ // GET ALL NUMBER BUTTONS
	item.addEventListener('click', (event) =>{
		let key = event.target.innerText;
		screen.value += key;

	});

};

const buttonOp = document.querySelectorAll('#buttonOp');
	for(op of buttonOp){ // GET ALL OPERATOR
		op.addEventListener('click', function(cal){
			let operator = cal.target.innerText;
			screen.value += operator;

		});

	};

const buttonCA = document.getElementById('buttonCA');
buttonCA.addEventListener('click', () => { // FUNCTION BUTTON CLEAN ALL
	screen.value = " ";
	

}); 

const buttonIg = document.getElementById('buttonIg');
buttonIg.addEventListener('click', function(btn){ // FUNCTION BUTTON CALCULATOR
	let calculator = btn.target.innerText;
	if (calculator === " ") {
		console.log("calculator")

	}else{
		screen.value = eval(screen.value);

	};
	
});

const buttonC = document.querySelector('#buttonC');
buttonC.addEventListener('click', (element) => { // FUNCTION BUTTON CLEAN ONE BY ONE
	let clean = element.target.innerText;
	for(let keys = clean.length; keys >= clean.length; keys--){
		screen.value -= keys;

	};

});




















window.addEventListener('load', function () { // FUNCTION FOR DATE 
	const date = document.querySelector('.current');
	let dateCurrent = new Date();
	let day = dateCurrent.getDay();
	let month = dateCurrent.getMonth();
	let year = dateCurrent.getFullYear();
	let dayy = dateCurrent.getDate();
	if (dayy < 10) {
		dayy = '0' + dayy;

	}
	var calc = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 
				'Ago', 'Set', 'Out', 'Nov', 'Dez'];
	var days = ['Dom', 'Seg', 'Ter', 'Qua', 
				'Qui', 'Sex', 'Sáb'];
	date.innerHTML = `${days[day].toUpperCase()}/${dayy} ${calc[month].toUpperCase()}/${year}`;	
	
});

function hours() {	// FUNCTION FOR HOURS
	const hourCurrent = document.querySelector('.hours');	
	let dateCurrent = new Date();
	let hour = dateCurrent.getHours();
	let minute = dateCurrent.getMinutes();
	let second = dateCurrent.getSeconds();
	if (hour < 10) {
		hour = '0' + hour;
	}
	if(minute < 10){		
		minute = '0' + minute;
	}
	if (second < 10) {
		second = '0' + second;
	}

	hourCurrent.innerHTML = `${hour}:${minute}:${second}`;
	hourCurrent.style.textTransform = "capitalize";

}
setInterval(hours, 500);