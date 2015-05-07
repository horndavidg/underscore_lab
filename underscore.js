module.exports = {

// _.average method: returns the average value in a given array

    average: function(data){
      var sum = 0;
      for (var i = 0; i < data.length; i++) {
        sum += data[i];
      }
      return sum / data.length;
       },
  

// _.contains: returns true is a given value is present in an array

    contains: function(data, x){
      for (var i = 0; i < data.length; i++) {
       if (x === data[i]) {
         return true;
       }
      }
      return false;
     },
   

// _.first: returns the first element in an array

    first: function(data){
      for (var i = 0; i < 1;) {
         return data[i];
          }
        },

// _.last: returns the last element in an array

    last: function(data){
      for (var i = (data.length -1); i < data.length;) {
         return data[i];
        }
      },

// _.max: returns the maximum value in an array

    max: function(data){
      max = Math.max.apply(null, data);
         return max;
        },

// _.min: returns the minimum value in an array

    min: function(data){
      min = Math.min.apply(null, data);
         return min;
        },

// _.indexOf: Returns the index at which value 
//can be found in the array, or -1 if value is not 
//present in the array.

        indexOf: function(inputArray, inputValue) {
        for (var i = 0; i <= inputArray.length; i++){
        if(inputArray[i] === inputValue) {
             return i;
                  }
               }
             }
      
};

// _.shuffle: returns a shuffled copy of the list

// var _ = (function() { 
//     return {
//     shuffle: function (data) {
  
//       var current = data.length, temp, random;
      
//   while (0 !== current) {

//     random = Math.floor(Math.random() * current);
//     current -= 1;

//     temp = data[current];
//     data[current] = data[random];
//     data[random] = temp;
//   }

//   return data;
//            }
//        };
//  })();

// _.sample: Produce a random sample from the list. 
//Pass a number to return n random elements from the list. 
//Otherwise a single random item will be returned.

  
// var _ = (function() {
//   return {
//   sample: function(arr, num) {
//   var rand;
//   if(num){
//     var result = [];
//     for(var i = 0; i < num; i++){
//        rand = Math.floor(Math.random() * arr.length);
//        result.push(arr[rand]);
//     }
//     console.log(result);
//   } else {
//       rand = Math.floor(Math.random() * arr.length);
//       console.log(arr[rand]);
//          }
//        }
//     };
// })();

// _.difference: returns the values from array that 
//are not present in the other array.

// var _ = (function() {
//   return {
//     difference: function(a1, a2){
//       var a = [];
//      var diff = [];
//       for (var i = 0; i < a1.length; i++) 
//        a = a1[i];
//       for (var j = 0; j < a2.length; j++)
//         if (a !== a2[j])
//           diff.push(a2[j]);
//           console.log(diff);
//         }
//      };
// })();

// _.pluck: extracts a list of property values and returns 
//them in an array.

// var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];

// var _ =(function() {
//   return {
//  pluck: function(list, inputkey) {
//   var arr = [];
//   for (var i = 0; i < list.length; i++){
//    arr.push(list[i][inputkey]); 
//             }
//   return arr;
//              }
//         };
//  })();

// console.log(_.pluck(stooges, 'name'));

// _.each: iterates over an array and calls a given function 
// with each element.

// var _ = (function() { 
//   return {
//   each: function(array, action) {
//   for (var i = 0; i < array.length; i++)
//     action(array[i]);
//            }
//        };
//  })();

// _.each([1, 2, 3], alert);

// _.compact: returns a new array with all provided undefined 
// values removed. 

// var _ = (function() {
//     return {  
//     compact: function(array) {
//     var answer = [];
//     for (var i = 0; i < array.length; i++)
//     if (array[i] !== undefined) {
//       answer.push(array[i]);
//     }
//     console.log(answer);
//               }
//            };
//     })();

// _.compact([1, "hello", undefined, 3, undefined, 8]);

// _.map: returns a new array of values produced by running each 
// element of an array through a given function.

// var _ = (function () {
//    return {
//      map: function(array, action) {
//           var answer = [];
//           for (var i = 0; i < array.length; i++)
//           answer.push(action(array[i]));
//           console.log(answer);
//                  }
//                };
//            })();
  
// _.map([1, 2, 3], function(num){ return num * 3; });

// _.filter: Looks through each value in the list, returning 
// an array of all the values that pass a truth test.

// var _ = (function () {
//    return {
//      filter: function(array, action) {
//           var answer = [];
//           for (var i = 0; i < array.length; i++)
//           if (action(array[i]) === true) 
//           answer.push(array[i]);
//           console.log(answer);
//               }
//           };
//     })();
  
// _.filter([1, 2, 3, 4, 5, 6, 8], function(num){ return num % 2 === 0; });



