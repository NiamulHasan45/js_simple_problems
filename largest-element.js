const numbers = [34, 65,67, 95, 89];
var sum = 0;
for(var i=0; i<numbers.length; i++){
    if (sum<numbers[i]){
        sum= numbers[i];
    }
}
console.log(sum);
