function maxStrSum(arr) {
  let max = 0; //
  for (let i = 0; i < arr.length; i++) {
    let startSum = 0;
    for (let j = i; j < arr.length; j++) {
      startSum += arr[j];
      max = Math.max(max,startSum);
    }
  }
  return max;
}

console.log(maxStrSum([-2,1,-3,4,-1,2,1,-5,4]) ); // 5
