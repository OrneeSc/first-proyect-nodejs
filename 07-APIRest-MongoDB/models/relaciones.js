//Relaciones por referencia (normalización) base de datos relacionales --> consistencia de datos se mantiene
let usuario = {
    id: 'U0001',
    nombre: 'Groover',
    email: 'mail@email.com'
}

let curso = {
    id: 'C0001',
    id_alumnos: ['U0001', 'U0002', 'U0003'],
    titulo: 'Javascript Moderno',
    descripcion: 'xxxx'
}

//Relaciones por documentos (der-normalización) base de datos NO relacionales (mongoDB) --> performance
let curso = {
    id: 'C0001',
    autor: {
        nombre: 'Carlos Perez'
    },
    id_alumnos: 
    [
        {id: 'A0001', nombre: 'Groover', email:'groover@email.com'},
        {id: 'A0002', nombre: 'Ana', email:'ana@email.com'}
    ],
    titulo: 'Javascript Moderno',
    descripcion: 'xxxx'
}