const ftoc = function (value) {
  const far = (value - 32) * (5 / 9);
  let multiplier = Math.pow(10, 1 || 0);
  let cel = Math.round(far * multiplier) / multiplier;

  return cel;
};

const ctof = function (value) {
  const cel = value * (9 / 5) + 32;
  let multiplier = Math.pow(10, 1 || 0);
  let far = Math.round(cel * multiplier) / multiplier;

  return far;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
