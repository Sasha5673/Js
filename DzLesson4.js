
//zadanie 1
let DivElem = document.body.firstElementChild
console.log(DivElem);
let UlElem = document.body.firstElementChild.nextElementSibling;
console.log(UlElem);
let LiElem = document.body.firstElementChild.nextElementSibling.lastElementChild;
console.log(LiElem);



//zadanie 2
let table = document.querySelector('table');
for (let i = 0; i < table.rows.length; i++) {
    for (let j = 0; j < table.rows[i].cells.length; j++) {
        table.rows[i].cells[j].innerText = (j + 1) + ':' + (i + 1);
        if (j === i) {
            table.rows[i].cells[j].style.backgroundColor = 'red';
        }
        else{
        	alert = "ERORR!";
        }
    }
}

//zadanie 3

let ageTable = document.querySelector('#age-table');

let tbLabel = document.querySelectorAll('#age-table label').length; // 3

let tbAge = document.querySelector('#age-table td');

let search = document.querySelector('input[name = search]');

let input1 = document.querySelectorAll('input')[0];

let input2 = document.querySelectorAll('input')[1];

//zadanie 4
function clear(elem) {
  while (elem.firstChild) {
    elem.firstChild.remove();
  }
}
clear(elem);


//zadanie 5

 let ul = document.createElement('ul');
    document.body.append(ul);
    while (true) {
        let data = prompt("Введите что-то");
        if (!data) {
            break;
        }
        let li = document.createElement('li');
        li.textContent = data;
        ul.append(li);
    }
	
	
//zadanie 6

let list = document.querySelector('#one');
list.innerHTML += '<li>2</li><li>3</li>';

//zadanie7

function showNotification(options) {
  let div = document.createElement("div");
  div.className = "notification";
  document.body.prepend(div);
  div.style.position = "absolute";
  div.style.backgroundColor = "green";
  div.style.color = "gold";
  div.style.padding = "5px";
  div.style.border = "1px solid grey";
  div.style.top = options.top + "px";
  div.style.right = options.right + "px";
  div.textContent = options.html;
  setTimeout(() => div.remove(), 1500);
}
showNotification({
  top: 15,
  right: 15,
  html: "Hi!",
});
	
	
	