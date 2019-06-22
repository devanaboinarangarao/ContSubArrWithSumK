function contSubArrWithSumK(array, sum) {

  if (!sum || typeof sum != 'number' || typeof array != 'object' || array.length < 2) {
    return 'Something went wrong';
  }
  let map = {0 : -1}, currSum = 0;

  for (let i = 0; i < array.length; i++) {
    currSum += array[i];

    let difference = currSum - sum;

    if (map[difference] != undefined) {

      if ((i - map[difference]) > 1) {

        return `continuous sub array with given sum is between ${map[difference] + 1} to ${i}`;
      }
    }

    map[currSum] = i;
  }

  return 'Sum not found in given array';
}

console.log(contSubArrWithSumK([2, 1, 2, 3, 4], 8))
