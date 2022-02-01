var first = 7;
var second = 5;
var temp = first;
first  = second;
second = temp;
console.log(first, second);
[first, second] = [second, first];
console.log(first, second);