const nums =[1,3,2,4,5,7,6,8];
console.log(nums);


const slice =nums.slice(2,6);
console.log(slice);//slice doesn't remove items from main array..
const spilceer =nums.splice(1,5, 12);//splice remove items from main array..here first two number is direction which remove number from main array...and third number is added into this gap...
console.log(spilceer);

const joiner =nums.join(" ,")//joint makes it string
console.log(joiner);
console.log(nums);


