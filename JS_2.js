let age = prompt(`Введите Ваш возраст`);
if (age < 3){
   alert(`Ребенок`); 
} else if(age < 19){
    alert(`Подросток`);
} else if(age < 61){
    alert(`Взрослый`);
} else {
    alert(`Пенсионер`)
}

let a = +prompt(`Введите цифру от 0 до 9`);
switch (a){
    case 1: 
        alert(`!`);
        break;
    case 2: 
        alert(`@`);
        break;
    case 3: 
        alert(`#`);
        break;
    case 4: 
        alert(`$`);
        break;
    case 5: 
        alert(`%`);
        break;
    case 6: 
        alert(`^`);
        break;
    case 7: 
        alert(`&`);
        break;
    case 8: 
        alert(`*`);
        break;
    case 9: 
        alert(`(`);
        break;
    default: alert(`условие не выполнено`);
}

let number = +prompt('Введите трехзначное число');
let number1 = parseInt(number / 100);
let number2 = parseInt((number / 10) % 10);
let number3 = parseInt(number % 10);
let result = number1 === number2 || number2 === number3 || number1 === number3 ? 'Найдено совпадение цифр' : 'Совпадений не найдено';
alert (result);

let year = +prompt('Введите год');
let year1 = year % 4 || (!(year % 100) && year % 400) ? 'Год не високосный' : 'Год високосный';
alert (year1);

let num = +prompt('Введите пятиразрядное число');
let num1 = parseInt(Math.floor(num / 10000).toFixed(0));
let num2 = parseInt(Math.floor(num / 1000).toFixed(0) % 10);
let num4 = parseInt(Math.floor(num % 100 / 10).toFixed(0));
let num5 = parseInt(num % 10);
let res = num1 === num5 && num2 === num4 ? 'Число палиндром' : 'Число не является палиндром';
alert (res);

let USD = +prompt(`Введите сумму в USD`);
let val = prompt(`Введите необходимую валюту EUR, UAN, AZN`);
switch (val){
    case `EUR`: 
        alert(`${USD * 0.84} EUR`);
        break;
    case `UAN`: 
        alert(`${USD * 26.93} UAN`);
        break;
    case `AZN`: 
        alert(`${USD * 1.7} AZN`);
        break;
    default: alert(`нет такой валюты`);
}

let sum = +prompt(`Введите сумму покупки`);
if (sum < 199){
     alert(`Сумма покупки: ${sum} р`);
} else if (sum < 299){
    alert(`Сумма покупки: ${sum - (sum * 0.03)} р  Скидка: ${(sum * 0.03).toFixed(2)}р`); 
} else if(sum < 499){
    alert(`Сумма покупки: ${sum - (sum * 0.05)} р  Скидка: ${(sum * 0.05).toFixed(2)}р`);
} else {
     alert(`Сумма покупки: ${sum - (sum * 0.07)} р Скидка: ${(sum * 0.07).toFixed(2)}р`);
}

let day = +prompt(`Введите день`);
let month = +prompt(`Введите месяц`);
let years = +prompt(`Введите год`);   
    if (day === 31 && month === 12){
        alert (`01.01. ${years + 1}`);    
    } else if (day === 31 && month == 01){
        alert ( `01. 0${month + 1} . ${years}`)
    } else if (day === 31 && month == 03){
        alert ( `01. 0${month + 1} . ${years}`)
    } else if (day === 31 && month == 05){
        alert ( `01. 0${month + 1} . ${years}`)
    } else if (day === 31 && month == 07){
        alert ( `01. 0${month + 1} . ${years}`)
    } else if (day === 31 && month == 08){
        alert ( `01. 0${month + 1} . ${years}`)
    } else if (day === 31 && month == 10){
        alert ( `01. 0${month + 1} . ${years}`)
    } else if (day === 30 && month == 04){
        alert ( `01. 0${month + 1} . ${years}`);
    } else if (day === 30 && month == 06){
        alert ( `01. 0${month + 1} . ${years}`);
    } else if (day === 30 && month == 09){
        alert ( `01. 0${month + 1} . ${years}`);
    } else if (day === 30 && month === 11){
        alert ( `01. 0${month + 1} . ${years}`);
    } else if (day === 29 && month === 02){
       alert (`01. 0${month + 1} . ${years}`); 
    } else if (day === 28 && month === 02 && (years % 4 || (!(years % 100) && years % 400))){
        alert ( `01. 0${month + 1} . ${years}`);
    } else if (day > 31 || month > 12){
        alert (`Вы ввели неправильную дату`);
    } else{
        alert (`${day + 1}. ${month} . ${years}`);
    }