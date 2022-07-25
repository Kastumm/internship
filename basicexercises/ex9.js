function getSecondLargest(nums) {
  nums.sort((a,b)=>a-b);
  let secondHighest = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < nums[i + 1]) {
      secondHighest = nums[i];
    }
  }
  return secondHighest;
}

const nums = [2, 3, 6, 6, 5,8,3,12];
console.log(getSecondLargest(nums));
