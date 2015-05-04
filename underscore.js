// _.average method: returns the average value in a given array

var _ = (function() {
  return {
    average: function(data){
      var sum = 0;
      for (var i = 0; i < data.length; i++) {
        sum += data[i];
      }
      return sum / data.length;
    }
    
  };
  
})();

console.log(_.average([6, 15, 13, 12]));

// _.contains: returns true is a given value is present in an array

var _ = (function() {
  return {
    contains: function(data, x){
      for (var i = 0; i < data.length; i++) {
       if (x === data[i]) {
         return true;
       }
      }
      return false;
       }
     };
})();

console.log(_.contains([6, 15, 13, 12], 15));

// _.first: returns the first element in an array

var _ = (function() {
  return {
    first: function(data){
      for (var i = 0; i < 1;) {
         return data[i];
          }
        }
     };
})();

console.log(_.first([333, 15, 13, 12, 13, 15, 25]));

// _.last: returns the last element in an array

var _ = (function() {
  return {
    last: function(data){
      for (var i = (data.length -1); i < data.length;) {
         return data[i];
        }
      }
    };
})();

console.log(_.last([333, 15, 13, 12, 13, 15, 37]));

// _.max: returns the maximum value in an array

var _ = (function() {
  return {
    max: function(data){
      max = Math.max.apply(null, data);
         return max;
        }
    };
})();

console.log(_.max([333, 15, 13, 12, 13, 15, 37, 1, 666]));

// _.min: returns the minimum value in an array

var _ = (function() {
  return {
    min: function(data){
      min = Math.min.apply(null, data);
         return min;
        }
    };
})();

console.log(_.min([333, 15, 8, 13, 15, 37, 9999]));

// _.shuffle: returns a shuffled copy of the list

var _ = (function() { 
    return {
    shuffle: function (data) {
  
      var current = data.length, temp, random;
      
  while (0 !== current) {

    random = Math.floor(Math.random() * current);
    current -= 1;

    temp = data[current];
    data[current] = data[random];
    data[random] = temp;
  }

  return data;
           }
       };
 })();

console.log(_.shuffle([1,11,3,4,5,6,7]));





