import {listBooks, isBookRead} from './book';

console.log(`Has you read, Harry Potter y la piedra filosofal? ${isBookRead(listBooks, 'Harry Potter y la piedra filosofal')}`);
console.log(`Has you read, Canción de hielo y fuego? ${isBookRead(listBooks, 'Canción de hielo y fuego')}`);
console.log(`Has you read, Devastación? ${isBookRead(listBooks, 'Devastación')}`);