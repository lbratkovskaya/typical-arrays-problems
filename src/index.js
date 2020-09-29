
exports.min = function min (array) {
    if (!array || !Array.isArray (array) || array.length == 0)
  return 0;

  let min = 0;
  
  array.forEach(element => {

    min = Math.min(element, min);
  });

  return min
}

exports.max = function max (array) {
  if (!Array.isArray (array) || array.length == 0)
    return 0;

  let max = 0;

  array.forEach(element => {
    max = Math.max(element, max);
  });

  return max
}

exports.avg = function avg (array) {
    if (!Array.isArray (array) || array.length == 0)
    return 0;

  let sum = 0;

  array.forEach(element => {
    sum += element;
  });

  return sum / array.length;
}
