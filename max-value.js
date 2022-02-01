const a= 12;
const b = 34;
const c= 345;

// if(a>b){
//     console.log(a," is the greater number.");
// }
// else{
//     console.log(b," is the greater number.");
// }

// const c= 54;
// if(a>b && a>c){
//     console.log(a," is the greater number.");
// }
// else if (b>a && b>c){
//     console.log(b," is the greater number.");
// }
// else{
//     console.log(c," is the greater number.");
// } 

// function maxValue(num1, num2){
//     if (num1>num2){
//         console.log(num1," is the max");
//     }
//     else{
//         console.log(num2," is the max");
//     }
// }
// maxValue(a,b);

// function maxValueThree(num1, num2, num3){
//     if(num1>num2 && num1>num3){
//         console.log(num1, " is the largest.");
//     }
//     else if(num2>num1 && num2>num3){
//         console.log(num2," is the largest.");
//     }
//     else{
//         console.log(num3," is the largest.");
//     }
// }

// maxValueThree(a, b, c);


// const max = Math.max(a, b, c);
// console.log(max," is the largest number.");
function minValueThree(num1, num2, num3){
        if(num1<num2 && num1<num3){
            console.log(num1, " is the smallest.");
        }
        else if(num2<num1 && num2<num3){
            console.log(num2," is the smallest.");
        }
        else{
            console.log(num3," is the smallest.");
        }
    }
minValueThree(a, b, c);
    