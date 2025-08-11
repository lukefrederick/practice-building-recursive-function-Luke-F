


function reverseString(word) {
    // Base Case
    if(word.length === 1 || word === "") {
        console.log("Length: ");
        console.log(word);
        return word;
    }

    return (word[word.length - 1] + reverseString(word.slice(0, -1), count));
     
}

let res = reverseString("hello");
console.log(res);

