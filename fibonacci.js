var first = 0;
// var second = 1;

// for (let n = 0; n < 10; n++){

//     var number = first + second;
//     console.log(number);
//     first = second; 
//     second = number;
// }

var start = [0,1];
function fibonacciSeries (num){
    if(typeof num != "number"){
        return "Please enter number.";
    }
    else if(num<2){
        return "Please enter greater than 2";
    }
    for (let n=2; n<num; n++){
        start[n] = start[n-1] + start[n-2];
       }
    return start;
}
console.log(fibonacciSeries(3));