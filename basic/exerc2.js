"use strict";
const library = {
    name: "Biblioteca Pública Estadual Luiz de Bessa",
    address: "Praça da Liberdade, 21 - Funcionários, Belo Horizonte - MG, 30140-010",
    numberOfBooks: 1000,
    type: "Pública",
    books: [
        {
            title: "O Senhor dos Anéis",
            pages: 1000,
            isbn: "978-0-261-10325-3",
        },
    ],
    genres: ["Fantasia", "Aventura"],
    members: [
        { name: "João", phone: "31 99999-9999" },
        { name: "Maria", phone: "31 99999-9999" },
        { name: "José", phone: "31 99999-9999", email: "Jose@gmail.com" },
    ],
};
console.log(library);
