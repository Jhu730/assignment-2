/*----------------------------------------------------------
JavaScript Prototype: Method
Every object in JavaScript has a built-in property called "prototype." 
The prototype constructor is used to add new methods (functions) and properties to a JavaScript object. 
- If a method is constructed, then it will be available for the object. 
- If a property is constructed, then the object will be given the property and its value, as default.

In this Assignment, we use the prototype constructor to add new methods to the Array() object.
----------------------------------------------------------*/

// MAP //
Array.prototype.myMap = function (callbackFn) {
  // Place your code here.
  const res = [];

  for (let i = 0; i < this.length; i++) {
    res.push(callbackFn(this[i], i, this));
  }
  return res;
};

// FILTER //
Array.prototype.myFilter = function (callbackFn) {
  // Place your code here.
  const res = [];
  for (let i = 0; i < this.length; i++) {
    if (callbackFn(this[i])) {
      res.push(this[i]);
    }
  }
  return res;
};

// SOME //
Array.prototype.mySome = function (callbackFn) {
  // Place your code here.
  for (let i = 0; i < this.length; i++) {
    if (callbackFn(this[i], i, this)) {
      return true;
    }
  }
  return false;
};

// EVERY // The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
Array.prototype.myEvery = function (callbackFn) {
  // Place your code here.
  for (let i = 0; i < this.length; i++) {
    if (!callbackFn(this[i], i, this)) {
      return false;
    }
    return true;
  }
};

// REDUCE //
Array.prototype.myReduce = function (callbackFn) {
  // Place your code here.
  let res = initalValue;
  for (let i = 0; i < this.length; i++) {
    if (res !== undefined) {
      res = callbackFn(res, this[i], i, this);
    } else {
      res = this[i];
    }
    return res;
  }
};

// INCLUDES //
Array.prototype.myIncludes = function (searchElement) {
  // Place your code here.
  for (let i = 0; i < this.length; i++) {
    if (this[i] == searchElement) {
      return true;
    }
  }
  return false;
};

// INDEXOF //
Array.prototype.myIndexOf = function (searchElement) {
  // Place your code here.
  for (let i = 0; i < this.length; i++) {
    if (this[i] == searchElement) {
      return i;
    }
  }
  return -1;
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function (searchElement) {
  // Place your code here.
  for (let i = this.length - 1; i >= 0; i--) {
    if (this[i] == searchElement) {
      return i;
    }
  }
  return -1;
};

// KEYS //
Object.myKeys = function (object) {
  // Place your code here.
  let res = [];
  for (let key in object) {
    res.push(key);
  }
  return res;
};

// VALUES //
Object.myValues = function (object) {
  // Place your code here.
  let res = [];
  for (let key in object) {
    res.push(object[key]);
  }
  return res;
};

// TESTING //
//let arr = [1, 2, 3, 4, 5];

// console.log(arr.myMap((x) => x * 2));

//console.log(arr.myFilter((x) => x % 2 == 0));

// console.log(arr.mySome((x) => x % 2 == 0));

// console.log(arr.myEvery((x) => x > 10));

/*
const initialValue = 0;
const sumWithInitial = arr.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);

*/

//console.log(arr.myIncludes(5));
//console.log(arr.myIncludes(10));

//console.log(arr.myIndexOf(5));
//console.log(arr.myIndexOf(10));

//let arr1 = [1, 2, 3, 4, 5, 7, 6, 8, 6, 5, 3];
//console.log(arr1.myLastIndexOf(3));

/*
const object1 = {
  a: "somestring",
  b: 42,
  c: false,
};

*/
//console.log(Object.myKeys(object1));
//console.log(Object.myValues(object1));
