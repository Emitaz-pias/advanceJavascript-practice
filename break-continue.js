const nums =[1,2,3,4,5,6,7,8,9];

for (let i = 0; i< nums.length; i++) {
        if ( nums[i]>4){
            break
        }
        console.log(nums[i]);
    }
    const nums2 =[1,2,3,4,-4,-44,-5,8,6,7,-49,8,9];
    
for (let i = 0; i< nums2.length; i++) {
     if ( nums2[i]<0){
         continue//means skip..
    }
    console.log(nums2[i]);
}