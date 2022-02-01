const numbers = [34, 65,67, 95, 89];
// var sum = 0; /
// for(var i=0; i<numbers.length; i++){
//     if (sum<numbers[i]){
//         sum= numbers[i];
//     }
// }
// console.log(sum);

// function largest(number){
//     for(var i=1; i<number.length; i++){
//         if (number[0]<number[i]){
//             number[0]= number[i];
//         }
//     }
//     return number[0];
// }
// console.log(largest([-1,-3,-6,0]));

function smallest(number){
    for(var i=1; i<number.length; i++){
        if (number[0]>number[i]){
            number[0]= number[i];
        }
    }
    return number[0];
}
console.log(smallest([23,45, 43, 56]));
