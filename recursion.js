


function reverseString(word, count) {
    console.log("Count: " + count);
    count++;
    console.log("Word: " + word)
    if (count > 10) {
        return;
    }
    // Base Case
    if(word.length === 1 || word === "") {
        console.log("Length: ");
        console.log(word);
        return word;
    }
    // Concatenate the last character with the result of the recursive call on the remaining part of the string (recursive case)

    return (word[word.length - 1] + reverseString(word.slice(0, -1), count));
     
}

let res = reverseString("hello", 0);
console.log(res);

/*
hello

result = o, pass in hell
call
reslt = ol, pass in hel
call
result = oll, pass in he
result = olle pass in h
result = olleh pass in ''
return











*/