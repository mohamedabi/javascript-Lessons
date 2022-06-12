let a = 10;
let b = "20";
let c = 80;

console.log(+b++);
console.log(b);

console.log(+c++);
console.log(c);

console.log(++a);
console.log(+a++);
console.log(a);

console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

