"use strict";
exports.__esModule = true;
exports.listBooks = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];
exports.isBookRead = function (books, title) {
    var findBooks = books.filter(function (element, index, array) {
        return (element && element.title === title);
    });
    // in theory only return one
    return findBooks[0].isRead;
};
