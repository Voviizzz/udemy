// let user = { name: "Ivan" };
// // const arr = [user];
// let map = new WeakMap() ///Слабая карта, ключами могут быть только объекты!
// map.set(user, 'data')
// console.log(map);
// user = null;
// console.log(map.has(user));

// в weakMap доступны только has,set,get,delete

// let cache = new WeakMap();

// function cacheUser(user) {
//   if (!cache.has(user)) {
//     cache.set(user, Date.now());
//   }
//   return cache.get(user);
// }

// let lena = { name: "elena" };
// let alex = { name: "alex" };

// cacheUser(lena);
// cacheUser(alex);

// lena = null;

// console.log(cache.has(lena));
// console.log(cache.has(alex));

// _____________________________________________________________________WEAK SET________________________________________________

// 1)Можем добавлять только объекты
// 2) Если объект находистя только внутри WEAKSET, то он будет удален

//add, has, delete

// let mesages = [
//   { text: "hello", from: "jhon" },
//   { text: "world", from: "jhar" },
//   { text: "oleho", from: "ann" },
//   { text: "he", from: "nasty" },
//   { text: "llo", from: "oleg" },
// ];

// let readMessages = new WeakSet();

// readMessages.add(mesages[0]);
// readMessages.add(mesages[1]);

// readMessages.add(mesages[0]);

// console.log(readMessages.has(mesages[0]));

// console.log(readMessages.has(mesages[1]));
