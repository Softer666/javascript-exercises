const sumAll = function (...arr) {
  const min = arr[0];
  const max = arr[1];
  let sum;

  if (
    min < 0 ||
    max < 0 ||
    isNaN(min) ||
    isNaN(max) ||
    typeof min === "string" ||
    typeof max === "string"
  ) {
    return "ERROR";
  } else if (min > max) {
    const min1 = max;
    const max2 = min;
    sum = (max2 * (max2 + 1) - (min1 - 1) * min1) / 2;
  } else sum = (max * (max + 1) - (min - 1) * min) / 2;

  console.log(sum);
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
