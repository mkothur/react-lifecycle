const IsAnagram = (w1, w2) => {
    const checker = (word) => {
        word = word.replace(/[^\w]/g, '').toLowerCase();
        word.split('').sort().join('').trim();
    }

    return checker(w1) === checker(w2)
}

console.log(IsAnagram('listen', 'silent'));