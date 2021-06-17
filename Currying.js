function add(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}

console.log("add(1)(2)(3) : ", add(1)(2)(3))

const sum = function(a)  {
    return function(b) {
        if(b) {
            return sum(a + b)
        }
        return a;
    }
}

console.log("sum(1)(2)(3)(4)(5)(): ", sum(1)(2)(3)(4)(5)());
console.log("sum(1)(2)(): ", sum(1)(2)());


function Addition(a, b) {
    return function(c, d) {
        return a + b + c + d;
    }
}

console.log("Addition(1,2)(3,4): ", Addition(1,2)(3,4));


function summation(...args) {
    let a = args.reduce((a, b) =>  a + b, 0);
    return function(...args) {
        let b = args.reduce((a, b) =>  a + b, 0);
        if(b) {
            return summation(a+b)
        }
        return a;
    }
}

//console.log("summation", summation(1,2,...5)(5,6, ...10)(10)())

var reverse = function(x) {
    let num = x;
     var rev = 0, remaining;
    while (num>0)
    {
        remaining = num % 10;
        rev = rev * 10 + remaining ;
        num = Math.floor(num/10);
    }
    return rev;
};


console.log(reverse(100))

var palindrome = function(str) {
    let len = str.length;

    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len -1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

console.log('is it plalindrome?', palindrome("MadaM"))


var checkPlaindrome = (str) => {
    let arrStr = str.split("")
    console.log('str to arr of string', arrStr);
    let revArr = arrStr.reverse();
    let reverseString = revArr.join('');
    console.log('array to string', reverseString)
    if(reverseString === str) {
        return 'its a palindrome'
    } else {
        return 'its not a palindrome'
    }
}

console.log(checkPlaindrome("MadaM"))

const reverseArrayWithEmptyArray = (arr) => {
    let reverse = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        reverse.push(arr[i])
    }
    return reverse
}

console.log("reversing an array using an empty array", reverseArrayWithEmptyArray([1,2,3]))

const reverseInPlace = (arr) => {
    let temp;
    for (let i =0; i < arr.length / 2; i++) {
        temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp
    }
    return arr;
}

console.log('Revering an array in place', reverseInPlace([1,2,3]))
