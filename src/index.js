module.exports = function towelSort(matrix) {
  return matrix
    ? matrix.flatMap((arr, ind) => (ind % 2 !== 0 ? arr.reverse() : arr))
    : [];
};
