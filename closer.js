function stopwacth(){
    let count =0;//eita hoise main kahini...ekhan thekei abar count suru korbe prottek caller
    return function(){
        count++;
        return count;

    }
}
const clock1 =stopwacth();

console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());
const clock2 =stopwacth();
console.log(clock2());
console.log(clock2());//kono akta function er vitor theke arek ta function ke declare korle take prottekbar call korar somoy se akta close environment toiri kore ney this is called closer..this was confusin that's why it is written in bangla...

