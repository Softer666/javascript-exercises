const removeFromArray = function (...myArray) {
  const array = myArray[0];
  const newArray = [];
  array.forEach((element) => {
    if (!myArray.includes(element)) {
      newArray.push(element);
      console.log(newArray);
    }
  });
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
