var ages = [3, 9, 23, 64, 2, 8, 28, 93]
var results = ages[ages.length - 1] - ages[0]
console.log(results)
ages.push(100)
results = ages[ages.length - 1] - ages[0]
console.log(results)


var sum = 0;
    for (var i= 0; i < ages.length; i++) {
      sum += ages[i];
    }
var avgAges = sum/ages.length;
console.log(avgAges)
  

sum = 0;
var names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"]
for (var i= 0; i < names.length; i++) {
    sum += names[i].length;
  }
var avgNames = sum/names.length;
console.log(avgNames)


let result = '';
for (let i = 0; i < names.length; i++) {
    result = result.concat(names[i]);
    if (i < names.length - 1) {
        result = result.concat(" ");
    }
}
console.log(result)

sum = 0;
var namesArray = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"]
var lengthNames = []
for (var i= 0; i < namesArray.length; i++) {
    lengthNames.push(namesArray[i].length);
  }
console.log(lengthNames)


sum = 0;
    for (var i= 0; i < lengthNames.length; i++) {
      sum += lengthNames[i];
    }
console.log(sum)


function wordMultiplier(word, n){
    let result = ""
    for(let i = 0; i < n; i++){
result = result.concat(word)
    } console.log(result)
}
wordMultiplier("Hello", 3)


const fullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`
}
console.log(fullName("John", "Smith"))


var numbers = [5, 10, 15, 25, 50]
const greatThan100 = (numbers) => {
    let sum1 = 0;
for(let i = 0; i < numbers.length; i++){
sum1 += numbers[i];
}
if(sum1 > 100){
    return true;
}
else{return false;}
}
console.log(greatThan100(numbers))
console.log(greatThan100([10, 15, 25]))

let numOfPeople = [3, 3, 3, 3, 3]
let numOfPhones = [5, 5, 5, 5, 5]
function avgNumbers(a, b){
let totalA = 0
let totalB = 0
    for(let i = 0; i < a.length; i++){
        totalA += a[i]
    }
    for(let i = 0; i < b.length; i++){
        totalB += b[i]
    }
    if((totalA/a.length) > (totalB/b.length)){
        return true;
    }
    else{return false;}
}
console.log(avgNumbers(numOfPeople, numOfPhones))


function willBuyDrink(isHotOutside, moneyInPocket){
//     if(moneyInPocket >= 10.50 && isHotOutside == true)
//     return true
// else{return false}
return(isHotOutside == true && moneyInPocket >= 10.50)
}
console.log(willBuyDrink(true, 12))
console.log(willBuyDrink(false,12))


function isEven(aNumber){
return(aNumber%2 == 0)
}
console.log(isEven(0))