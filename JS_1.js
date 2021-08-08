let name1 = prompt(`Введите Ваше имя`);
alert(`Привет, ${name1}!`);

let age = +prompt(`Введите год Вашего рождения`);
const year = 2021;
alert(`Вам: ${year - age}`);

let length = +prompt(`Введите длину стороны квадрата (см)`);
alert(`Периметр квадрата: ${4 * length} см`);

let radius = +prompt(`Введите радиус окружности`);
const p = 3.14;
alert(`Площадь окружности: ${(2 * p * radius).toFixed(2)}`);

let distance = +prompt(`Введите расстрояние между городами (km)`);
let time = +prompt(`Введите За сколько часов хотите добраться (ч)`);
alert(`Необходимая скорость: ${distance / time} км/ч`);

let dollars = +prompt(`Введите сумму в долларах`);
const сonverter_euro = 0.84;
alert(`${dollars}$ = ${dollars * сonverter_euro} euro`);

let flash_drive = +prompt(`Укажите объем флешки в Гб`);
alert(`${Math.floor(flash_drive * 1024 / 820)} - количество файлов размером в 820Мб, которые поместятся на флешку`);

let money = +prompt(`Укажите сумму в кошельке`);
let chocolate = +prompt(`Укажите цену одной шоколадки`);
alert(`Можете купить ${Math.floor(money / chocolate)} шт.  
Сдача = ${money - (Math.floor(money / chocolate) * chocolate)}р`);

let number = prompt(`Введите трехзначное число`);
alert(`${number % 10}${Math.floor(number % 100 /10).toFixed(0)}${Math.floor(number / 100).toFixed(0)}`);

let num = +prompt(`Введите целое число`);
alert(num % 2 && `нечетное` || `четное`);