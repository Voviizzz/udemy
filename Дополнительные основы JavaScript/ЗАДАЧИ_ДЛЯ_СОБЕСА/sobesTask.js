//функция принимает строку, нужно сравнить есть ли повторения в этой строке

// function strUniq(str) {
//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     console.log(str.lastIndexOf(char)); //Метод lastIndexOf() возвращает последний индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет. Массив просматривается от конца к началу, начиная с индекса fromIndex.
//     if (str.lastIndexOf(char) !== i) {
//       return false;
//     }
//   }
//   return true;
// }

//метод номер 2 через Set

// function isUniq(str) {
//   const set = new Set();
//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     if (set.has(char)) {
//       return false;
//     }
//     set.add(char);
//   }
//   return true;
// }

//Реализация задачи в одну строчку!

//В set каждый символ уникальным - это его особенность. Если они не уникалльны - он обрезает строку
// function isUniq(str){
//     return new Set(str).size === str.length
// }
// console.log(isUniq("agsd"));

// _____________________________________________________________________________//нужно убрать лишнюю вложенность, чтобы получить один массив

// function flatten(arr) {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       const flat = flatten(arr[i]);
//       for (let j = 0; j < flat.length; j++) {
//         result.push(flat[j]);
//       }
//     } else {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// console.log(flatten([[1], [[2,   3]]]));

// function countFirstElem(str) {
//   let count = str.length;
//   //   console.log(count);
//   for (let i = 0; i < str.length; i++) {
//     if (Array.isArray(str[i])) {
//       count += countElem(str[i]);
//       //   console.log(count);
//     }
//   }
//   return count;
// }

// ----------------------------------------------------------------------------------------------------------------------------------------------------

//НСоздайте функцию deepCount, которая будет считать количество всех элементов в массиве, включая и вложенные массивы. Учтите, что сам вложенный массив тоже входит в счет. Чтобы понять задачу детальнее, давайте рассмотрим примеры:

// deepCount([1, 5, 3]) => 3

// deepCount(["1", 5, "3", ["10"]]) => 5 (Заметьте, что последний элемент был посчитан сам + его внутренность)

// deepCount([1, 2, [3, 4, [5]]]) => 7

// deepCount([]) => 0

// deepCount([[[[[[[[[]]]]]]]]]) => 8

// function countElem(str) {
//   count = str.length;
//   str.forEach((element) => {
//     if (Array.isArray(element)) {
//       count += countElem(element);
//     }
//   });
//   return count;
// }
// console.log(countElem(["1", 5, "3", ["10"]]));
// console.log(countFirstElem(["1", 5, "3", ["10"]]));

// ------------------------------------------------------------------------------------ УДАЛЕНИЕ ВСЕХ ПОВТОРЯЮЩИХСЯ ЗНАЧЕНИЙ В СТРОКЕ

// function removeDubes(str) {
//   const newStr = [];
//   const map = {};
//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     if (!map[char]) {
//       map[char] = true;
//       newStr.push(char);
//       console.log(map);
//     }
//   }
//   return newStr.join("");
// }
// ------------------------------------------------------------------------------------ УДАЛЕНИЕ ВСЕХ ПОВТОРЯЮЩИХСЯ ЗНАЧЕНИЙ В СТРОКЕ 2 ВАРИАНТ

// function removeDubesVerTwo(str) {
//   return Array.from(new Set("asasas")).join("");
// }

// console.log(removeDubes("asdasdadasdasdsadasdasd"));

// ------------------------------------------------------------------------------------ КАКАЯ СТРОКА ВСТРЧАЕТСЯ ЧАЩЕ ВСЕГО

function highestFrequency(array) {
  const map = {};
  let maxFreq = 0;
  let maxFreqStr = array[0];
  for (let i = 0; i < array.length; i++) {
    const char = array[i];
    if (map[char]) {
      map[char]++;
    } else {
      map[char] = 1;
    }
    console.log(map);
    // console.log(map[char]);
    if (map[char] > maxFreq) {
      maxFreq = map[char];
      maxFreqStr = char;
    }
    console.log(maxFreqStr);
  }
  return maxFreqStr;
}

console.log(highestFrequency(["afc", "afc", "b", "c"]));
