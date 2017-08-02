(function(){
  'use strict';

  /**
   * Functional Iterators
   */

   /*********** forEach *********************************/

   var fruits = ['apple', 'orange', 'pear', 'plum'];
   var cars = ['honda', 'bmw', 'tesla'];


   cars.forEach(function(car, counter, originalArray){
     var number = counter + 1;
     console.log('Tune-up docket ' + number + '/' + originalArray.length, car);
   });

   fruits.forEach(function(fruit){
     console.log(fruit + ' is tasty', fruit.length);
   });

  //  function forEach(array, callback){
  //    for(var i=0; i<array.length; i++){
  //      callback(array[i], i, array);
  //    }
  //  }

  //  forEach(fruits, function(item, counter){
  //    console.log('My #' + (counter + 1) + ' fav fruit is ' + item);
  //    //console.log('Adding this to my fruit bowl ' + item);
  //  });
   //
  //  forEach(cars, function(item, counter, originalArray){
  //    var number = counter + 1;
  //    console.log('Tune-up docket ' + number + '/' + originalArray.length, item);
  //  });

  var numbers = [1, 2, 3, 4];

  var squares = numbers.map(function(number){
    return number * number;
  });

  // function map(array, callback){
  //   var updatedArray = [];
  //
  //   for(var i=0; i<array.length; i++){
  //     var newValue = callback(array[i], i, array);
  //     updatedArray.push(newValue);
  //   }
  //
  //   return updatedArray;
  // }
  //
  // var updatedArray = map(numbers, function(number){
  //   return number * number;
  // });

  console.log(squares) // undefined .... [2, 4, 6, 8]

  //*************** reduce *************************


  var groceryPrices = [10, 12, 1.5];

  var total = groceryPrices.reduce(function(total, item){
    return total + item;
  });

  // function reduce(array, callback, starter){
  //   var accumulator = starter ? starter : array[0];
  //
  //   for(var i=1; i<array.length; i++){
  //     accumulator = callback(accumulator, array[i], i, array);
  //   }
  //
  //   return accumulator;
  // }
  //
  // var total = reduce(groceryPrices, function(total, grocery){
  //   return total + grocery;
  // });

  console.log(total);

}());
