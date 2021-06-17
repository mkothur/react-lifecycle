const CountLetters = (str) => {
    let tempStrArray = str.split('');
    let lettersArr = [];
    let count = 1;

    for (let i = 0; i< tempStrArray.length; i++) {
        if (tempStrArray[i] === tempStrArray[i+1]) {
            count++;
        } else {
            let val = `${tempStrArray[i]}${count}`;
            // lettersArr = [...lettersArr, val];
            lettersArr.push(val);
            count = 1;
        }
    }

    return lettersArr.join('');
}

console.log(CountLetters('aababcc'))