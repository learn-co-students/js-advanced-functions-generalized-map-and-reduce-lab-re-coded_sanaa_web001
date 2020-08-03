// Add your functions here

 
function map(src, func) {
    var arr = new Array();
  
        src.forEach(element => {
            arr.push(func(element))
        });
    
    return arr;
  }

  function reduce(src, func, starting) {
    var  arr = (!!starting) ? starting : src[0];
    var i = (!!starting) ? 0 : 1;
  
    for (; i < src.length; i++) {
      arr = func(src[i], arr);
    }
  
    return arr;
  }
//   console.log(map([1,2,3,4],function(a){ return a * -1 }));
  

// my own map-like methods
// map returns an array with all values made negative
//   1) transforms correctly
//   map returns an array with the original values
//     2) transforms correctly
//   map returns an array with the original values multiplied by 2
//     3) transforms correctly
//   map returns an array with the original values squared
//     4) transforms correctly

// my own reduce-like methods
// reduce returns a running total when not given a starting point
//   5) reduces correctly
// reduce returns a running total when given a starting point
//   6) reduces correctly
// reduce returns true when all values are true
//   7) reduces correctly
// reduce returns false when any value is false
//   8) reduces correctly
// reduce returns true when a true value is present
//   9) reduces correctly
// reduce returns false when no true value is present
//   10) reduces correctly
