export interface  iBook {
    title: string,
    isRead: boolean,
} 
export const listBooks: iBook[] = [
    {title: "Harry Potter y la piedra filosofal", isRead: true},
    {title: "Canción de hielo y fuego", isRead: false},
    {title: "Devastación", isRead: true},
    ];


export const isBookRead =  function (books: iBook[], title: String) {
    const findBooks: iBook[] = books.filter(function (element, index, array){
        return (element && element.title === title);
    }); 
    // in theory only return one
    return findBooks[0].isRead;
}
