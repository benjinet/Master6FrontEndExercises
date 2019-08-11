"use strict";
exports.__esModule = true;
var book_1 = require("./book");
console.log("Has you read, Harry Potter y la piedra filosofal? " + book_1.isBookRead(book_1.listBooks, 'Harry Potter y la piedra filosofal'));
console.log("Has you read, Canci\u00F3n de hielo y fuego? " + book_1.isBookRead(book_1.listBooks, 'Canción de hielo y fuego'));
console.log("Has you read, Devastaci\u00F3n? " + book_1.isBookRead(book_1.listBooks, 'Devastación'));
