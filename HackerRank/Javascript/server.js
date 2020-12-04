// Simple server to execure JS problems done in terminal using node, express. Write a new script, and require here, then run npm run check.
const express = require('express');
const PORT = process.env.PORT || 8080;

const app = new express();

// const secondBiggestInArray = require('./10 days of JS/secondBiggestInArray.js');
// const reverseArray = require('./10 days of JS/reverseString.js');
const anagram = require('./10 days of JS/ProblemSolving/Anagrams.js')


app.listen(PORT, () => {
    console.log(`Server Listening on port ${PORT}`);
})