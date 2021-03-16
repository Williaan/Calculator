
var screen = document.getElementById('inputs');
var buttons = document.querySelectorAll('#button');

for(item of buttons){ // GET ALL NUMBER BUTTONS
	item.addEventListener('click', (event) =>{
		let key = event.target.textContent;
		screen.value += key;
		screen.style.color = '#FF8C00';

		
	});

};

const buttonOp = document.querySelectorAll('#buttonOp');
	for(op of buttonOp){ // GET ALL OPERATOR
		op.addEventListener('click', function(cal){
			let operator = cal.target.textContent;
			screen.value += operator;
			screen.style.color = '#FF8C00';

		});

	};

const buttonCA = document.getElementById('buttonCA');
buttonCA.addEventListener('click', (cleanAll) => { // FUNCTION BUTTON CLEAN ALL
	let all = cleanAll.target.textContent;
	screen.value = all.substring(0, all.length -1);
	

}); 

const buttonR = document.querySelector('#buttonR');
buttonR.addEventListener('click',function(raiz){ // FUNCTION BUTTON SQRT
	let sqrt = raiz.target.textContent;		
	let screenn = document.getElementById('inputs').value;
	if (sqrt) {
		let fixed = Math.sqrt(screenn);
		screen.value = fixed;
		screen.style.color = '#FF8C00';
	}
	 
});

const buttonIg = document.getElementById('buttonIg');
buttonIg.addEventListener('click', function(cal){ // FUNCTION BUTTON CALCULATOR	
	let calculator = cal.target.textContent;
	if (calculator !== undefined) {		
		screen.value = eval(screen.value)
		screen.style.color = '#FF8C00';


	}else if (calculator === NaN || calculator === undefined ) {
		screen.value = " "; 

	};
	
});

const buttonP = document.querySelector('#buttonP');
buttonP.addEventListener('click', function(pare){
	let paren = pare.target.textContent;
	screen.value += paren;
	screen.style.color = '#FF8C00';
	
		
	
});

const buttonC = document.querySelector("#buttonC").addEventListener('click', (parent) =>{
	let parente = parent.target.textContent;
	screen.value += parente;
	screen.style.color = '#FF8C00';
			

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
