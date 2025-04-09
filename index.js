//1
function stringLength(arrStr){
    const places = arrStr.map(str => str.length);
   return places
}
console.log(stringLength(["city", "urban","town", "rural","suburb"]));

//2
function evenNumbers(arrNums){
    const nums = arrNums.filter(item => item%2==0);
    return nums
}
console.log(evenNumbers([10,15,16,19,23,55,90]));

//3
function studentScores(grade){
    
    const scoreCard=grade.filter(item => item.score>75)
    const name = scoreCard.map(item => item.name)
    return name
}
console.log(studentScores([{name:"Judy", score:80},{name:"Sara",score:75}, {name:"Peter",score:89}]));

//4
function  square(arrSquare){
    const squared = arrSquare.map(item => item*item);
    return squared
}
console.log(square([12,14,16,18,10]));

//5
function dataTypes(arrTypes){
    const stringOnly=arrTypes.filter(item => typeof(item)==="string");
    const stringUpper = stringOnly.map(word => word.toUpperCase());
    return stringUpper
}
console.log(dataTypes([true,"boy",3,"man",3.7,"school"]));