/*
    How to Flatten a Nested Javascript Array
    To flatten an array means to reduce the dimensionality of an array. 
    In simpler terms, it means reducing a multidimensional array to a specific dimension.
*/

let arr = [[1, 2],[3, 4],[5, 6, 7, 8, 9],[10, 11, 12]];

/**
    1. Using concat and apply
 */
let flattened_with_apply = [].concat.apply([], arr);

console.log('1.Flatten Array using concat and apply', flattened_with_apply);

/*
    2: spread operator in ES6
*/

let flattened_with_spread = [].concat(...arr);

console.log('2.Flatten Array using spread ES6', flattened_with_spread);

/*
    3: array.reduce()
*/

let flattened_with_reduce = arr.reduce((a, b) =>  a.concat(b),[])

console.log('3.Flatten Array using array.reduce', flattened_with_reduce);

/*
    3: array.proptotype.flat(with_arg)
*/

let flattened_with_flat = arr.flat(1);

console.log('4.Flatten Array using flat', flattened_with_flat);
let test = [1, [2, [3, [4]], 5]].flat(Infinity)
console.log(test);
