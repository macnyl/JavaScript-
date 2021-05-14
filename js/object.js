//создать объект Student который содержит следующие свойства: имя, фамилию, пол, контактные данные, методы: вывод адреса, смена пола.
const student = {
    name: 'Vasya',
    lastName:'Tryoshkin',
    isMale: true,
    contacts:{
        adress: 'Prospect,14',
        phone: 478819247,
        email: 'vasya777@gmail.com'
    },
    pablicName(){
        return this.contacts;
    }
}

console.log('student :>> ', student);
student.lastName = 'Ivanovich';

student.contacts = {
    adress: 'Pobeda,77',
    phone: 7777777777,
    email: 'vasya001@gmail.com'
}
console.log('student :>> ', student);

/**3 Создать функции-конструкторы:
- Книга (автор, название, год издания, издательство)
- Электронная версия книги (автор, название, год издания, издательство, формат, электронный номер)*/

function Book(bookAutor, bookName, bookYear, bookPublishing){
this.bookAutor = bookAutor;
this.name = bookName;
this.bookYear = bookYear;
this.publishing = bookPublishing;
}

const eBook = new Book('Marein Haverbeke', 'Expressive JavaScript', '2019', 'Third Edition');
console.log('eBook :>> ', eBook);