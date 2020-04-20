function sum (num1, num2){
    const result =num1 +num2;
    return result
}
// console.log(reult); here result is declared with const...thast why it is not printing...note :which variable declered with let or cons can't print out side of it's scope..{it is a block scope}...but a variable wich is declered with var can be print outside of it's blocked scope...such as from parent scope... 

const output =sum(7,3);
console.log(output);

console.log(name);//it is declered with var that's why it is showing undefined..if we declare it with let or const it would no be printed...
var name ="paodjasj"
