/*function capitalize(str){
    str = str.split('')
    for (var i = 0;i < str.length;i++){
        str[i] = str[1][0].toUppercase() + str(1)

    }
    return str.join('')
}
console.log(capitalize('a short sentence'))
['a', 'short', 'sentence'] */

function capitalize(str) {
  const words = [];
  for (let word of str.split("")) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }
  return words.join("");
}
