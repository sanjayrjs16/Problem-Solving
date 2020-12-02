// Simple server to execure JS problems done in terminal using node, express. Write a new script, and require here, then run npm run check.
const express = require('express');
const PORT = process.env.PORT || 8080;

const app = new express();

const secondBiggestInArray = require('./secondBiggestInArray.js');

app.listen(PORT, () => {
    console.log(`Server Listening on port ${PORT}`);
})