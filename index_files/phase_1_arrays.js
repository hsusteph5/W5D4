// Monkey Patched unique
Array.prototype.uniq = function() {
  let arr = [];
  this.forEach(function(el) {

    if (!arr.includes(el)){
      arr.push(el);
    } 
  });
  return arr;
};

// Monkey Patched twoSum
Array.prototype.two_sum = function() {
  let arr = [];
  
  for(let i = 0; i < this.length - 1; i++){
    for(let j = i + 1; j < this.length; j++){
      if(this[i] + this[j] === 0){
        arr.push([i,j]);
      }
    }
  }
  return arr;
};


// Monkey Patched transpose
Array.prototype.transpose = function() {
  let result = [];
  let rowCount = this.length;
  let columnCount = this[0].length;
  for(let j = 0; j < columnCount; j++) {
    let temp_arr = [];
    
    for(let i = 0; i < rowCount; i++){
      temp_arr.push(this[i][j]);
    }
    result.push(temp_arr);
  }
  return result;
};


