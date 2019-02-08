Array.prototype.uniq = function() {
  arr = []
  this.forEach( function(ele) {
    if (!arr.includes(ele)) {
      arr.push(ele)
    }
  })
  return arr
}


Array.prototype.twoSum = function () {
  let arr = [];
  let thisArr = this;
  thisArr.forEach( function(ele1, i1) {
    thisArr.forEach ( function(ele2, i2) {
      if (i2 > i1 && ele1 + ele2 === 0) {
        arr.push([i1, i2]);
      }
    })
  })
  return arr;
}

Array.prototype.transpose = function () {
  let arr = [...Array(this.length)].map(e => Array(this.length))
  this.forEach( function (row, rowI) {
    row.forEach( function (value, colI) {
      // debugger
      arr[colI][rowI] = value;
      });
  });

  return arr;
}

let testArr = [4,2,2,5,6,5,75,3,5,34,42,5];

Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
}

Array.prototype.myMap = function(callback) {
  let arr = []
  this.myEach( (ele) => arr.push(callback(ele)) );
  return arr;
}

Array.prototype.myReduce = function(callback, initialValue = null) {
  if (!initialValue) {
    acc = this[0];
    this.slice(1).myEach((ele) => acc = callback(acc, ele));
  } else {
    acc = initialValue;
    this.myEach((ele) => acc = callback(acc, ele));
  }
  return acc;
}

Array.prototype.bubbleSort = function () {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] > this[i+1]) {
        sorted = false;
        [this[i], this[i + 1]] = [this[i + 1], this[i]]
      }
    }
  }

  return this;
}

let str = 'hello world'

String.prototype.substrings = function () {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this.length; j++) {
      if (j >= i) {
        arr.push(this.slice(i, j+1));
      }
    }
  }
  return arr;
}

function range(start, end) {
  if (start === end) {
    return end;
  }
  
  return [start].concat(range(start + 1, end));
}

function sumRec(arr) {
  if (arr.length === 1) {
    return arr[0];
  }

  return arr[0] + sumRec(arr.slice(1));
}

function exponent1(base, exp) {
  if (exp === 0) {
    return 1;
  }

  return base * exponent(base, exp - 1);
}

function exponent2(base, exp) {
  if (exp === 0) {
    return 1;
  } else if (exp === 1) {
    return base;
  }

  if (exp % 2 === 0) {
    return exponent2(base, exp / 2) ** 2;
  } else {
    return base * (exponent2(base, (exp - 1) / 2) ** 2);
  }
}