var counter = function(arr){
  return 'There are ' + arr.length + ' elements in this array'
}

var add = function(a,b,c){
  return `Total de la suma es: ${a+b+c}`;
}

var pi = 3.14159265359;

module.exports.counter = counter;
module.exports.add = add;
module.exports.pi = pi;
