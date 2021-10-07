function func(a, b){
    let x = a
    const interval = setInterval(function(){
      if (x > b) {clearInterval(interval)} else {console.log(x)}
      x += 1
    }, 1000, a, b)
  }