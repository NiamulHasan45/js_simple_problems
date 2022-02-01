const marks = [56, 78, 87, 90, 45, 87, 81];
// for (var i= 1; i<marks.length; i++){
//     marks[0]= marks[0]+marks[i];
// }
// console.log(marks[0]);

function arrayTotal(marks){
    let sum = 0;
    for(var i=0; i<marks.length; i++){
        const number = marks[i];
        sum= sum +number;
    }
    return sum;
}
const total= arrayTotal(marks);
console.log(total);