// 1-masala
// function countA(arg){
//     let count = 0
//     for(let i = 0; i < arg.length; i++){
//         if(arg[i] == 'a' || arg[i] == 'A'){
//             count++
//         }
//     }
//     return count
// }
// console.log(countA('salom bolalar'));

// 2-masala
// function returnLastTheere(arg){
//     if(arg.length <= 3){
//         return arg
//     }
//     return arg.slice(-3)
// }
// console.log(returnLastTheere('bolalar'))

// 3-masala
// function capitalize(arg){
//     let resArr = arg.split(' ')
//     return resArr.map(val => val[0].toUpperCase() + val.slice(1)).join(' ')
// }
// console.log(capitalize('salom bolalar yaxshimisizlar'));

// 4-masala
// function deletProbel(arg){
//     return arg.split(' ').join('')
// }
// console.log(deletProbel('  salom balalar '));

// 5-masala
// function reverse(arg){
//     return arg.split(' ').reverse().join(' ')
// }
// console.log(reverse('xayrli tong'));

// 6-masala
// function countSymbol(arg){
//     let sum = 0
//     for (const i of arg) {
//         sum++
//     }
//     return sum
// }
// console.log(countSymbol('salom bola'));

// 7-masala
// function repeatStr(arg){
//     return arg.repeat(3)
// }
// console.log(repeatStr('salom '));

// 8-masala
// function repeatNumber(arg){
//     return arg.split('').filter(val => val >= 0 && val <= 9).join(' ')
// }
// console.log(repeatNumber('4sal0m 5olal9ar xay14'));

// 9-masala
// function firstWord(arg){
//     let resArr = arg.split(' ') 
//     return resArr[0]   
// }
// console.log(firstWord('salom xayr'));

// 10-masala
// function checkWord(arg){
    // return arg.includes('js')
// }
// console.log(checkWord('men jsni organyapman'));


// 1-masala
// function findMaxArr(arg){
//     let max = arg[0]
//     let res = arg.forEach(val => {
//         if(val > max){
//             max = val
//         }
//     })
//     return max
// }
// console.log(findMaxArr([12, 4, 54, 21]));

// 2-masala
// function filterArr(arg){
//     return arg.filter(val => val % 2 == 0)
// }
// console.log(filterArr([12, 5, 4, 81, 73, 6]));

// 3-masala
// function findSumArr(arg){
//     let sum = 0
//     let res = arg.forEach(val => {
//         sum += val
//     })
//     return sum
// }
// console.log(findSumArr([1, 4, 5, 2, 3]));

// 4-masaala
// function ikkiBaravarga(arg){
//     return arg.map(val => val * 2)
// }
// console.log(ikkiBaravarga([2, 3, 4, 5]));

// 5-masala
// function musbatArr(arg){
//     let res = []
//     for (const i of arg) {
//         if(i > 0){
//             res.push(i)
//         }
//     }
//     return res
// }
// console.log(musbatArr([-12, 4, -5, 3, -8, 7]));

// 6-masala
// savol tushunarli emas

// 7-masala
// function birlashtirishArr(arg1, arg2){
//     return arg1.concat(arg2)
// }
// console.log(birlashtirishArr([12, 13, 14], [15, 16, 17]));

// 8-masala
// function teskarArr(arg){
//     return arg.reverse()
// }
// console.log(teskarArr([1, 2, 3, 4]));

// 9-masala
// function oddIndexArr(arg){
//     return arg.filter(function(val, index){
//         return index % 2 == 1
//     })
// }
// console.log(oddIndexArr([1, 2, 3, 4, 5, 6]));

// 10-masala
// function ortaQiymat(arg){
//     let sum = 0
//     let res = arg.forEach(val => {
//         sum += val
//     })
//     return Math.trunc(sum / arg.length)
// }
// console.log(ortaQiymat([12, 8, 5, 15]));


// 1-masala
// function getOldestPersonName(people){
//     let old = people[0]
//     for (const i of people) {
//         if(i.age > old.age){
//             old = i
//         }
//     }
//     return old
// }
// console.log(getOldestPersonName([
//     { name: "Ali", age: 25 },
//     { name: "Vali", age: 30 },
//     { name: "Hasan", age: 28 }
// ]
// ));

// 2-masala
// function getPeopleAboveAge(people, age){
//     return people.filter(val => val.age > age)
// }
// console.log(getPeopleAboveAge( [
//     { name: "Ali", age: 25 },
//     { name: "Vali", age: 30 },
//     { name: "Hasan", age: 28 }
// ], 26
// ));

// 3-masala
// function getNames(people) {
//     return people.map(val => val.name)
// }
// console.log(getNames([
//     { name: "Ali", age: 25 },
//     { name: "Vali", age: 30 },
//     { name: "Hasan", age: 28 }
// ]
// ));

// 4-masala
// function getTotalAge(people){
//     return people.reduce((sum, val) => sum + val.age, 0)
// }
// console.log(getTotalAge([
//     { name: "Ali", age: 25 },
//     { name: "Vali", age: 30 },
//     { name: "Hasan", age: 28 }
// ])
// );

// 5-masala
// function getPersonByName(people, name) {
//     return people.find(val => val.name == name)
// }
// console.log(getPersonByName( [
//     { name: "Ali", age: 25 },
//     { name: "Vali", age: 30 },
//     { name: "Hasan", age: 28 }
// ], 'Ali'
// ));

// 6-masala
// function getAverageAge(people){
//     let res = people.reduce((sum, person) => sum + person.age, 0)
//     return Math.trunc(res / people.length)
// }
// console.log(getAverageAge([
//     { name: "Ali", age: 25 },
//     { name: "Vali", age: 30 },
//     { name: "Hasan", age: 28 }
// ]
// ));

// 7-masala
// function getFemales(people){
//     return people.filter(val => val.gender == 'male')
// }
// console.log(getFemales([
//     { name: "Ali", age: 25, gender: "male" },
//     { name: "Vali", age: 30, gender: "male" },
//     { name: "Hasan", age: 28, gender: "male" },
//     { name: "Salima", age: 22, gender: "female" }
// ]
// ));

// 8-masala
function incrementAges(people){
    return people.map(val => val.age + 1)
}
console.log(incrementAges( [
    { name: "Ali", age: 25 },
    { name: "Vali", age: 30 },
    { name: "Hasan", age: 28 }
]
));
