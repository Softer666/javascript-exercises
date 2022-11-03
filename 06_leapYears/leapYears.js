const leapYears = function (Year) {
  if (Year % 100 === 0) {
    if (Year % 400 === 0) {
      return true;
    } else return false;
  } else if (Year % 4 === 0) {
    return true;
  } else return false;
};

// Do not edit below this line
module.exports = leapYears;
