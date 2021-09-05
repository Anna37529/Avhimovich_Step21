let diapazon1 = +prompt(`Введите число 1`);
let diapazon2 = +prompt(`Введите число 2`);
let s;
let b;
if (diapazon1 > diapazon2){
    b = diapazon1; 
    s = diapazon2; 
} else if (diapazon1 < diapazon2){
    b = diapazon2; 
    s = diapazon1; 
} 
let i = s; 
while (i < b){
    i++;
    document.write(`${i}, `);
}  


let num1 = +prompt(`Введите число 1`);
let num2 = +prompt(`Введите число 2`);
let a = num1 > num2 ? num2 : num1; 
while (a >= 1){
    if (num1 % a === 0){
        if (num2 % a ===0){
            document.write(`${a} `);
            break;
        }
    }
    a--; 
}


let num = +prompt(`Введите число`);
let g = 0;
while (g <= num){
    if (num % g === 0){
        document.write(`${g}, `);
    }
    g++;
}


let number = +prompt(`Введите число`); 
let count1 = 1;
let count = 1;
let c = 10;
for (c; Math.floor(number / c) != 0; c = c * 10){
    count1 = +(count1 + count);
} document.write(`Количество цифр в числе - ${count1}`); 

let e = prompt(`Введите число`);
let p = prompt(`На сколько это число сдвинуть`);
let count4 = 1;
let cou = 1;
let f = 10;
for (f; Math.floor(e / f) != 0; f = f * 10){
    count4 = +(count4 + cou);
} console.log(`${count4}`);
let r = 0; 
let p1 = 1;
while(r < p){
    r++;
    p1 = 10 ** r;
} console.log(p1);
alert(`${e % ((10 ** count4) / p1)}${Math.trunc((e /(10 ** count4)) * p1).toFixed(0)}`);

let chetnoe = 0;
let nechetnoe = 0;
let o = 0;
let positive = 0;
let negativ = 0; 
for (let i = 1; i < 11; i++){
    let chislo = +prompt(`Введите 10 чисел`);
    console.log(chislo);
    if (chislo > 0){
        positive += 1; 
    } else if (chislo < 0){
        negativ += 1;
    }  else if (chislo === 0){
        o += 1;
    }  
    if (chislo % 2 === 0){
        chetnoe += 1;
    }  else if (chislo % 2 != 0){
        nechetnoe += 1;
    }  
} document.write (`Положительных чисел - ${positive} <br/> Отрицательных чисел - ${negativ} <br/>  Нулей - ${o} <br/> Четных чисел - ${chetnoe} <br/> Нечетных чисел - ${nechetnoe}`)

let primer;
while(primer = true){
let chislo1 = +prompt(`Введите число`);
let chislo2 = +prompt(`Введите число`);
let znak = prompt(`Введите знак`); 
switch (znak){
    case `+`:
        alert(`${chislo1} ${znak} ${chislo2} =  ${chislo1 + chislo2}`);
        break;
    case `-`:
        alert(`${chislo1} ${znak} ${chislo2} = ${chislo1 - chislo2}`);
        break;
    case `*`:
        alert(`${chislo1} ${znak} ${chislo2} = ${chislo1 * chislo2}`);
        break;
    case `/`:
        alert(`${chislo1} ${znak} ${chislo2} = ${chislo1 / chislo2}`);
        break;
      default:
        alert(`Вы ввели что-то не так`);
}  
let  question = confirm (`Хотите попробовать еще раз?`);
if ( question == true){
    primer++;
} else if ( question == false) break; 
}

let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let question1; 
while (true) {
for (let i = 0; i < 7; i++){
    question1 = confirm (`${week[i]}. Хотите увидеть следующий день?`);
    if (question1 == false) break;  
} if (question1 == false) break; 
  question1++;
}

let x;
let y;
for (x = 2; x < 10; x++){
    for (y = 1; y < 10; y++){
        document.write(`${x} * ${y} = ${x * y} <br/>`);
    } 
    document.write(`${x} * ${y} = ${x * y} <br/>`);
    document.write(`<br/>`);
}


