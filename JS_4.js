/*function calculator(num1, num2){
    if (num1 < num2){
        return (-1);
    } else if (num1 > num2){
        return (1);
    } else {return (0)}
}
console.log(calculator(15, 15));

let num3 = +prompt(`Введите число`);
let result = 1
function factorial(num3){
    while (num3 != 0) {
        result *= num3;
        num3--;
} return (result);
}
console.log(factorial(num3));

let n1 = prompt(`Введите первое число `);
let n2 = prompt(`Введите второе число`);
let n3 = prompt(`Введите третье число`);
function number(n1, n2, n3){
    return (n1+n2+n3);
}
console.log(number(n1, n2, n3));

let length = +prompt(`Введите длину`);
let width = +prompt(`Введите ширину`);
function square(length, width){
    if (length === 0){
        return `S = ` + Math.pow(width, 2) + ` cm2`;
    } else if (width === 0){
        return `S = ` +Math.pow(length, 2) + ` cm2`;
    } else {return `S = ` + (length * width + ` cm2`)};
    
} console.log(square(length, width));*/

let n = +prompt(`Введите число`);
function numberPerfect(n){
    let sum = 0; 
    for (let i = 1; i < n - 1; i++){ 
        if (n % i === 0) {
            sum += i;
        } 
    } 
    if (n === sum){
        return n + ` - Число совершенное`;
    } else { return n + ` - Число не совершенное`};
} console.log(numberPerfect(n));

let diapazon1 = +prompt(`Введите первое число`);
let diapazon2 = +prompt(`Введите второе число`);
let b;
let m;
let count;
    if (diapazon1 > diapazon2){
        b = diapazon1;
        m = diapazon2;
    } else {
        b = diapazon2; 
        m = diapazon1;
    }
    for (m; m <= b; m++){
        document.write(numberPerfect(m));
} 



/*function time(hour, minutes, seconds){
    return t2 = (hour < 10 ? `0`+ hour: hour) + `:` + (minutes < 10 ? `0`+ minutes: minutes) + `:` + (seconds < 10 ? `0`+ seconds: seconds);
} console.log(time(5, 9, 1))

function time1(hour1, minutes1, seconds1){
    return t = seconds1 + minutes1 * 60 + hour1 * 3600;
} console.log(time1(5, 9, 1))

function time2(seconds2){
    let hour2 = Math.floor(seconds2 / 3600).toFixed(0);
    let minutes2 = Math.floor((seconds2 - (hour2 * 3600)) / 60).toFixed(0);
    let secondsNew = (seconds2 - (hour2 * 3600) - (minutes2 * 60));
    return t2 = (hour2 < 10 ? `0`+ hour2: hour2) + `:` + (minutes2 < 10 ? `0`+ minutes2: minutes2) + `:` + (secondsNew < 10 ? `0`+ secondsNew: secondsNew);
} console.log(time2(1234420))

function difference(h1, m1, s1, h2, m2, s2){
    let a = time1(h1, m1, s1);
    let b = time1(h2, m2, s2);
    if (a > b){
       let result = a - b; 
       console.log(result);
    } else if (a < b){
        result = b - a; 
    } return (time2(result));
}console.log(difference(1, 23, 44, 30, 20, 4));*/

