// function chunk(array, size) {
//   var original = size;
//   var subarray = [];
//   var result = [];
//   while (array.length > 0) {
//     while (size > 0 && array.length > 0) {
//       original.push(array.shift());
//     }
//     result.push(subarray);
//     size = original;
//     subarray = [];
//   }
//   return result;
// }
// chunk();
// function chunk (array, size){
// const chunked = []
// let index = 0
// while (index < array.length){
//     chunked.push(array.slice(index, index + size))
//     index += size;

// }
// }
function chunk(array, size) {
  const chunked = [];
  for (let element of array) {
    const last = chunked[chunked.length - 1];
    if (!last || last.length === size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }
  return chunked;
}
console.log(chunk([...array(10).keys()], 2));
