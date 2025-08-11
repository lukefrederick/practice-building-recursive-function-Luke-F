


function reverseString(word) {
    // Base Case
    if(word.length === 1 || word === "") {
        return word;
    }

    return (word[word.length - 1] + reverseString(word.slice(0, -1)));
     
}

let res = reverseString("hello");
console.log(res);

