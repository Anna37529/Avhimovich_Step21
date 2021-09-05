let car = {
    brand: `peugeot`,
    model: 308,
    year_statement: 2010,  
    velocity: 60,
};

function z1_1(car){
    return car;
  } console.log(car);

function z1_2(a, l){   
    let result = 0;
    let time1 = l / a.velocity;
    for (let i = 1; i <= time1; i++){
        if (i % 4 === 0){
        result = result + 1;     
    } 
    } document.write(`Чтобы преодолеть ${l} км Вам понадобится ${(time1 + result).toFixed(2)} ч, где ${time1.toFixed(2)}ч - время на дорогу и ${result}ч - время на отдых <br><br>`);  
} z1_2(car, 250);

let fraction = {
  numerator1: 2,
  denominator1: 4,
  numerator2: 8,
  denominator2: 6,
}

function z1(b){
    let numerator = (b.numerator1 * b.denominator2) + (b.numerator2 * b.denominator1);
    let denominator = b.denominator1 * b.denominator2;
    return plus = `Функция сложения дробей : ${b.numerator1 + `/` + b.denominator1} + ${b.numerator2 + `/` + b.denominator2} = ` + numerator + `/` + denominator + ` <br>`;
} document.write(z1(fraction));

function z2(с){
    let numeratorC = (с.numerator1 * с.denominator2) - (с.numerator2 * с.denominator1);
    let denominatorC = с.denominator1 * с.denominator2;
    return minus = `Функция вычитания дробей : ${с.numerator1 + `/` + с.denominator1} - ${с.numerator2 + `/` + с.denominator2} = ` + numeratorC + `/` + denominatorC + ` <br>`;
} document.write(z2(fraction));

function z3(e){
    let numeratorE = e.numerator1 * e.numerator2;
    let denominatorE = e.denominator1 * e.denominator2;
    return multiplication = `Функция умножения дробей : ${e.numerator1 + `/` + e.denominator1} * ${e.numerator2 + `/` + e.denominator2} = ` + numeratorE + `/` + denominatorE + ` <br>`;
} document.write(z3(fraction));

function z4(f){
    let num1 = f.numerator1 * f.denominator2;
    let num2 = f.denominator1 * f.numerator2;
    return division = `Функция деления дробей : ${f.numerator1 + `/` + f.denominator1} / ${f.numerator2 + `/` + f.denominator2} = ` + num1 + `/` + num2 + ` <br>`;
} document.write(z4(fraction));

function z5(n){
    let a = n.numerator1 > n.denominator1 ? n.numerator1 : n.denominator1; 
    for (a; a >= 1; a--){
    if (n.numerator1 % a === 0){
        if (n.denominator1 % a ===0){
        break;}
        } 
    } newFraction1 = n.numerator1 / a +`/` + n.denominator1 / a; 
    
    let c = n.numerator2 > n.denominator2 ? n.numerator2 : n.denominator2;  
    for (c; c >= 1; c--){
        if (n.numerator2 % c === 0){
            if (n.denominator2 % c ===0){
            break;}
            } 
    } newFraction2 = n.numerator2 / c +`/` + n.denominator2 / c;
    return `Функция сокражения дроби №1 : ${n.numerator1 + `/` + n.denominator1} = ` + newFraction1 + ` <br>` + `Функция сокражения дроби №2 : ${n.numerator2 + `/` + n.denominator2} = ` + newFraction2 + `<br> <br>`; 
} document.write(z5(fraction));


let time = {
    hour: 3,
    minutes: 45,
    seconds: 36,
}

function time1(t2){
    return t2 = (t2.hour < 10 ? `0`+ t2.hour: t2.hour) + `:` + (t2.minutes < 10 ? `0`+ t2.minutes: t2.minutes) + `:` + (t2.seconds < 10 ? `0`+ t2.seconds: t2.seconds) + ` <br>`;
} document.write(time1(time))

function secondsPlus(r1, s){    
    t = (r1.seconds + r1.minutes * 60 + r1.hour * 3600) + s;
    let hour2 = Math.floor(t / 3600).toFixed(0);
    let minutes2 = Math.floor((t - (hour2 * 3600)) / 60).toFixed(0);
    let secondsNew = (t - (hour2 * 3600) - (minutes2 * 60));
    return t2 = (hour2 < 10 ? `0`+ hour2: hour2) + `:` + (minutes2 < 10 ? `0`+ minutes2: minutes2) + `:` + (secondsNew < 10 ? `0`+ secondsNew: secondsNew) + ` <br>`;
} document.write(secondsPlus(time, 1000))

function minutesPlus(r2, m){    
    mt = (r2.minutes + r2.hour * 60) + m;
    let hour = Math.floor(mt / 60).toFixed(0);
    let minutes = Math.floor((mt - (hour * 60))).toFixed(0);
    return t3 = (hour < 10 ? `0`+ hour: hour) + `:` + (minutes < 10 ? `0`+ minutes: minutes) + `:` + (r2.seconds < 10 ? `0`+ r2.seconds: r2.seconds) + ` <br>`;
} document.write(minutesPlus(time, 30))

function hoursPlus(r3, h){    
    newHour = r3.hour + h; 
    return t4 = (newHour < 10 ? `0`+ newHour : newHour) + `:` + (r3.minutes < 10 ? `0`+ r3.minutes : r3.minutes) + `:` + (r3.seconds < 10 ? `0`+ r3.seconds : r3.seconds) + ` <br>`;
} document.write(hoursPlus(time, 20))
