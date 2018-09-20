// Monkey Patched unique
Array.prototype.bubbleSort = function() {
  let arr = [];
  this.forEach(function(el) {

    if (!arr.includes(el)){
      arr.push(el);
    } 
  });
  return arr;
};
