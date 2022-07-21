function getSecondLargest(nums){
nums.sort();
for (let i =nums.length -2; i>=0; i--){
    if(nums[i] != nums[i-1]){
        // return arr[i];
    }
}
return nums.length;
}

const arr=[1,4,5,2 ,2,3,6,8];
console.log(getSecondLargest(arr));