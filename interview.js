
//Example 1: Google Interview Question
let a = 5;
let b = a++ + ++a + a++;
console.log(b); //19
console.log(a); //8

//Example 2: Amazon Interview Question
let x = 3;
let y = x++ + x++ + ++x;
console.log(y); //13
console.log(x); //6

//Example 3: Facebook Interview Question

let count = 10;
let result = count++ + ++count + count-- + --count;

console.log(result); //44
console.log(count);  //10


//Example 4: Microsoft Interview Question
let a = 1;
let b = 2;
let c = a++ + ++a + ++b + b++ + a + b;

console.log(c); // 17
console.log(a); // 3
console.log(b); // 4

//Example 5: Netflix Interview Question
let i = 0;
let result = 0;

while (i++ < 3) {
    result += i;
    console.log(`i: ${i}, result: ${result}`);
}

console.log(result); // 6

//Example 6: Apple Interview Question
let m = 2;
let n = 3;
let p = m++ * ++n + n-- - --m;

console.log(p); // 10
console.log(m); // 2
console.log(n); // 3
