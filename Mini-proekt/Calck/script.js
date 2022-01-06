let a = ''; //первое число
let b = ''; // второе число

let sign = ''; //знак операции
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/' , '%' , '+/-'];

//monitor
const out = document.querySelector('.calc-screen p');

function clearALL() {
	a = '';
	b = '';
	sign = '';
	finish = false;
	out.textContent = 0;
}

document.querySelector('.AC').onclick = clearALL;

document.querySelector('.buttons').onclick = (event) => {
	//нажата не кнопка
	if (!event.target.classList.contains('btn')) return;
	// Нажаат кнопка ClearAll AC
	if (event.target.classList.contains('AC')) return;
	out.textContent = '';

	//получаю нажатую кнопку
	const key = event.target.textContent;

	//если нажата кнопка 0-9 или точка
	if (digit.includes(key)) {
		if (b === '' && sign === '') {
			a+=key
			
			out.textContent = a;
		}
		else if (a !== '' && b !== '' && finish) {
			b = key;
			finish = false;
			out.textContent = b;
		}
		else{
			b+=key;
			out.textContent = b;
		}
		console.table(a, b, sign);
		return;
	}
	if (action.includes(key)) {
		sign = key;
		out.textContent = sign;
		console.table(a, b, sign);
		return;
	}

//если нажата кнопка +, -, Х, /
if (key === "=") {
	switch	(sign){
		case "+":
			a = (+a) + (+b);
			break;
		case "-":
			a = (+a) - (+b);
			break;
		case "X":
			a = (+a) * (+b);
			break;
		case "/":
		if (b === '0') {
			out.textContent = 'Error!';
			a = '';
			b = '';
			return;
		}
		if (b === '') {
			out.textContent = 'Error!';
			a = '';
			b = '';
			return;
		}
			a = (+a) / (+b);
			break;
		case "%":
			a = a / 100 ;
			break;
		case "+/-":
			a = (+a * (-1));
			break;	
			}
	finish = true;
	out.textContent = a;
	console.table(a, b, sign);
		}
}