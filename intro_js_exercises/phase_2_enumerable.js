// Monkey Patch #myEach(callback)
Array.prototype.myEach = function(callback) {
  for(let i = 0; i < this.length; i++){
    callback(this[i]);
  }
};

myCallBack = function(el) {
  console.log(el);
};

// Monkey Patch #myMap(callback)

Array.prototype.myMap = function(callback) {
  let arr = [];
  
  this.myEach(function(el) {
    arr.push(callback(el));
  });
  
  return arr;
};

myCallBack2 = function(el) {
  return el * 2;
};

console.log([1,2,3].myMap(myCallBack2));

// Monkey Patch Array#myReduce(callback[, initialValue])

Array.prototype.myReduce = function(callback, initialValue) {
  let i = 0;
  let acc;
  
  if (arguments.length > 1) {
    acc = initialValue;
  } else {
    acc = this[0];
    i = 1;
  }
  
  for(i; i < this.length; i++) {
    acc = callback(acc, this[i]);
  }
  
  return acc;
};