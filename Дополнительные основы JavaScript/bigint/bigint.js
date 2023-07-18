"use strict";

const bigint = 12333333312321313121111112333n;

const sameBigint =
  BigInt(
    12312313333333333333333333333333333333333333333333333333333333333333333333333333333333
  );

console.log(typeof bigint);
console.log(typeof sameBigint);

//с чилсами BigInt нельзя использовать math и складывать их с обычными числами
// операторы сравнения буддут работать нормально
// console.log(5n === 5);

//конвертация типов даных

let bigintOne = 1n;
let number = 2;
console.log(bigint + BigInt(number));
