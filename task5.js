const pow = (x, n) => {
    let result = 1
    for (let i = 1; i <= n; i = i + 1) {
      result = result * x
    }
    return result
  }
console.log(pow(2, 8))