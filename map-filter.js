const numbers = [3,4,5,6,7,8];
const squerdNumbers =[];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element * element
    squerdNumbers.push(result);
}
 console.log(squerdNumbers);
// //using arrow function
 const result = numbers.map(squerMaker =x =>x*x);
console.log(result);//map numbers array er sobgula  element k dhore dhore chalay...loop er moto ar  akta array return kore..
 const results = numbers.filter(giver =x =>x>4);
 console.log(results);//filter requiers a condition...it returns  an array..
// find is similar to filter but it gives an single element each time...not an array
const results1 = numbers.find(finder =x =>x>4);
console.log(results1)