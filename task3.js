var func1 = function (a, b){
    return function(b) {
      return a + b;
    };
  };
  
  var func2 = func1(5)
  
  console.log(func2(3))