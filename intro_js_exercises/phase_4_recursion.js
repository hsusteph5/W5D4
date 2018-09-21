// range recursion
function range(start, end){
  let a = [start];
  
  if (start === end) {
    return [start];
  }
  return a.concat(range(start + 1, end));
}

//sumRec(arr)
function sumRec(arr) {
  if (arr.length === 1){
    return arr[0];
  }
  return arr[arr.length - 1] + sumRec(arr.slice(0, -1));
}

//exponent(base, exp)
function exponent(base, exp){
  if (exp === 0){
    return 1;
  } 
  return base * exponent(base, exp - 1);
}

//fibonacci(n)
function fibonacci(n){
  if (n === 1){
    return [1];
  } else if (n === 2){
    return [1, 1];
  } else {
    let result = (fibonacci(n - 1));
    let lastTwo = result.slice(-2);
    let sum = lastTwo[0] + lastTwo[1];
    result.push(sum);
    return result;
  }
}

//deep dup 
function deepDup(arr){
  let result = [];
  
  for(let i = 0; i < arr.length; i++){
    if (Array.isArray(arr[i])) {
      result.push(deepDup(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

//bsearch
function bsearch(arr, target){
  if (arr.length <= 1 && arr[0] != target) {
    return undefined;
  }
  let middle = Math.floor((arr.length / 2));
  let midNum = arr[middle];
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);
  
  if (midNum === target){
    return middle;
  } else if (target < midNum){
    return bsearch(left, target);
  } else if (target > midNum) {
    right_searched = bsearch(right, target);
    if (!right_searched) {
      return undefined;
    }
    return middle + right_searched;
  } 
}

//mergesort(arr)

function mergesort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  
  let middle = Math.floor((arr.length / 2));
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);
  // debugger
  return merge(mergesort(left), mergesort(right));
}


function merge(arr1, arr2) {
  let result = [];
  while (arr1.length >= 1 || arr2.length >= 1) {
    if (arr1[0] < arr2[0]) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }
  }
  return result.concat(arr1, arr2);
}








