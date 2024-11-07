function increment(value) {
    return ++value;
}

let num = 5;
let result = increment(num++) + increment(++num) - increment(num++);
let res = increment(num++) * increment(++num) / increment(num++);

console.log(result); 

console.log(res); 

console.log(num);   

//prefix
let a = 5;
console.log(++a); // 6 (a is incremented before it’s returned)
console.log(a);   // 6

//postfix
let b = 5;
console.log(b++); // 5 (b is returned before incrementing)
console.log(b);   // 6 (b is incremented afterward)


//Example 1: Combining Prefix and Postfix with Assignment
let x = 3;
let y = x++ + ++x;

console.log(y); 
console.log(x); 

//Example 2: Nested Prefix and Postfix Operators in an Expression
let a1 = 2;
let b1 = 3;
let result1 = a1++ + ++b1 + b1++ + ++a1;

console.log(result); 
console.log(a1);     
console.log(b1);      

//Example 3: Prefix and Postfix in a Loop
let i = 0;
let total = 0;

while (i++ < 5) {
    total += i;
    console.log(`i: ${i}, total: ${total}`);
}

//Example 4: Using Prefix/Postfix in Function Calls
function increment(value) {
    return ++value;
}

let number = 5;
let result2 = increment(number++) + increment(++number);

console.log(result2); 
console.log(num);    

//Example 5: Complex Expression with Both Increment Types

let X = 1;
let U = 2;
let z = X++ * --U + ++X * U--;

console.log(z); 
console.log(X); 
console.log(U); 
