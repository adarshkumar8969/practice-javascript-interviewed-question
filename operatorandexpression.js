// basic question
// 1.What is an expression in JavaScript?

//Answer: An expression is a piece of code that evaluates to a value. It can consist of variables, operators, and literals (e.g., 5 + 3, x > 10).
/* 2.What are the different types of operators in JavaScript?

Answer: JavaScript has several types of operators, including:

Arithmetic (+, -, *, /, %, **)

Assignment (=, +=, -=, *=, /=)

Comparison (==, ===, !=, !==, >, <, >=, <=)

Logical (&&, ||, !)

Ternary (? :)

Unary (++, --, typeof, delete)

Bitwise (&, |, ^, ~, <<, >>, >>>)
3.What is the difference between == and ===?

Answer: == checks for loose equality (values are compared after type coercion),
 while === checks for strict equality (values and types must be the same).
4.What is the result of 5 + "5" in JavaScript?

Answer: "55" (the + operator performs string concatenation when one operand is a string).

5.What is the purpose of the ternary operator?

Answer: The ternary operator (? :) is a shorthand for an if-else statement.
 It evaluates a condition and returns one of two values based on whether the condition is true or false.

Intermediate Questions

1.What is the difference between ++x and x++?

Answer: ++x is the pre-increment operator (increments x before using its value), while x++ is the post-increment operator (increments x after using its value).

2.What is short-circuit evaluation in JavaScript?

Answer: Short-circuit evaluation is a behavior of logical operators (&& and ||) where the second operand is evaluated only if necessary. For example:

In a && b, if a is falsy, b is not evaluated.

In a || b, if a is truthy, b is not evaluated.

3.What is the output of null || undefined || 0 || "Hello"?

Answer: "Hello" (the logical OR operator returns the first truthy value, and "Hello" is the first truthy value in this case).

4.What is the purpose of the typeof operator?

Answer: The typeof operator returns a string indicating the type of a value (e.g., "number", "string", "boolean", "object", "undefined").

5.What is the result of !!"JavaScript"?

Answer: true (the double NOT operator (!!) converts a value to its boolean equivalent. Since "JavaScript" is a truthy value, the result is true).

Advanced Questions

1.What is the difference between null and undefined in JavaScript?

Answer: null is an intentional absence of any value, while undefined means a variable has been declared but not assigned a value.

2.What is the output of 5 + true in JavaScript?

Answer: 6 (the + operator converts true to 1 and performs addition).

3.What is the purpose of the void operator?

Answer: The void operator evaluates an expression and returns undefined. It is often used to prevent navigation when clicking on links (e.g., <a href="javascript:void(0)">Click</a>).

4.What is the result of 0 == false and 0 === false?

Answer: 0 == false is true (loose equality with type coercion), while 0 === false is false (strict equality without type coercion).

5.What is the difference between && and || in terms of precedence?

Answer: The logical AND (&&) operator has higher precedence than the logical OR (||) operator. This means && is evaluated before || in an expression.

6.What is the output of "5" - 3 in JavaScript?

Answer: 2 (the - operator converts the string "5" to a number and performs subtraction).
What is the purpose of the in operator?

Answer: The in operator checks if a property exists in an object. For example:*/
let obj = { x: 10 };
console.log("x" in obj); // true
/*7.What is the result of NaN === NaN?

Answer: false (NaN is the only value in JavaScript that is not equal to itself).

8.What is the difference between delete and undefined when used with object properties?

Answer: delete removes a property from an object, while setting a property to undefined only changes its value. For example:*/

let obj1 = { x: 10 };
delete obj1.x; // obj is now {}
obj1.x = undefined; // obj is { x: undefined }
/*9.What is the output of 1 < 2 < 3 and 3 > 2 > 1?

Answer:

1 < 2 < 3 evaluates to true (because 1 < 2 is true, and true < 3 is true since true is coerced to 1).

3 > 2 > 1 evaluates to false (because 3 > 2 is true, and true > 1 is false since true is coerced to 1).


coding questions*/
//Write a function to check if a number is even or odd using the ternary operator.

//javascript

function checkEvenOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}
console.log(checkEvenOdd(5)); // Odd

//Write a function to find the maximum of two numbers using the ternary operator.



function max(a, b) {
    return a > b ? a : b;
}
console.log(max(10, 20)); // 20
//Write a function to check if a variable is a number using the typeof operator.


function isNumber(variable) {
    return typeof variable === "number";
}
console.log(isNumber(5)); // true
console.log(isNumber("5")); // false
//Write a function to check if a variable is null or undefined.


function isNullOrUndefined(variable) {
    return variable == null; // Works for both null and undefined
}
console.log(isNullOrUndefined(null)); // true
console.log(isNullOrUndefined(undefined)); // true
console.log(isNullOrUndefined(0)); // false
//Write a function to swap two variables without using a temporary variable.


function swap(a, b) {
    [a, b] = [b, a]; // Using destructuring assignment
    return [a, b];
}
console.log(swap(5, 10)); // [10, 5]





