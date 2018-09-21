// Monkey Patched unique
Array.prototype.bubbleSort = function() {
  let sorted = false; 
  while (sorted === false) {
    sorted = true;
    
    for(let i = 0; i < this.length - 1; i++){
      for(let j = i + 1; j < this.length; j++){
        if(this[i] > this[j]){
          temp = this[i];
          this[i] = this[j];
          this[j] = temp;
          sorted = false;
        }
      }
    }
  }
  return this;
};


String.prototype.substrings = function() {
  
  let result = [];
  
  for(let i = 0; i < this.length; i++) {
    for(let j = i; j < this.length; j++) {
      result.push(this.slice(i, j + 1));
    }
  }
  
  return result;
  
};