const LongestWord = (str) => {
    let words = str.split(' ');
    let longest_word = '';
    // let size = 0;
    // let max = [""];
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest_word.length) {
            longest_word = words[i];
        }
        // if(words[i].length >= size) {
        //     size = words[i].length;
        //     if(max[max.length - 1].length < words[i].length) {
        //         max = [];
        //         max.push(words[i])
        //     } else {
        //         max = [...max, words[i]]
        //     }
        // }
    }

     return longest_word;
    //return [...max]
}

console.log(LongestWord("I woke up early today"))
