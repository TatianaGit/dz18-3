let r = +prompt('Радиус окружности');
console.log(`Радиус окружности ${r} см.`);
let l = 2 * 3.14 * r;
l = Math.round(l*100) / 100;
console.log(`Длина окружности: ${l} см.`);
let s = 3.14 * (r ** 2);
s = Math.round(s*100) / 100;
console.log(`Площадь круга: ${s} см кв.`); 


