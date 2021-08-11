const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Demo', {useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado a MongoDB...'))  
    .catch(err => console.log('No se pudo conectar con MongoDB...', err));

const cursoSchema = new mongoose.Schema({
    nombre    : String,
    autor     : String,
    etiquetas : [String],
    fecha     : {type: Date, default: Date.now},
    publicado : Boolean
});

const Curso = mongoose.model('Curso', cursoSchema);
async function crearCurso(){
    const curso = new Curso({
        nombre: 'Node JS desde Cero',
        autor: 'Luis',
        etiquetas: ['desarrollo web', 'back end'],
        publicado: true
    });    
    const resultado = await curso.save();
    console.log(resultado);
}

// eq (equal, igual)
// ne (not equal, no igual)
// gt (greater than, mayor que)
// gte (greater than or equal to, mayor o igual que)
// lt (less than, menor que)
// lte (less than or equal to, menor o igual que)
// in
// nin (not in)

// or
// and
async function listarCursos(){
    const numeroPage = 2;
    const sizePage = 10;
    //api/cursos?numeroPage=4&sizePage=10

    const cursos = await Curso.find()
    //operadores de comparacion:
    //.find({precio: {$gte:10, $lte:30}})
    //.find({precio: {$in: [10, 15, 25]}})

    //.find({autor: /^Gro/}) busca el autor que empiece con esas letras
    //.find({autor: /ver$/}) busca el autor que termine con esas letras

    //.find( {autor: /.*ro.*/}) condicion. cuando un campo tiene un contenido específico

    //.or([{autor: 'Groover'}, {publicado: true}])
    //.and

    //filtros
    // .find({autor: 'Groover'});
    // .limit(10)
    // .sort({autor: 1/-1}); asc/desc
    // .select({nombre:1, etiquetas:1});
    // .skip((numeroPage - 1) * sizePage)
    // .limit(sizePage)
    console.log(cursos)
}
//crearCurso();
//listarCursos();

async function actualizarCurso(id){

    //1
    // const curso = await Curso.findById(id);
    // if(!curso) {
    //     console.log('El curso no existe')
    //     return;
    // }
    // curso.publicado = false;
    // curso.autor = 'Groover Vázquez';

    // curso.set({
    //     publicado : false,
    //     autor: 'Groover Vásquez'
    // })
    // const resultado = await curso.save();

    //2
    const resultado = await Curso.update({ _id: id}, {
                 // = await Curso.findByIdAndUpdate(id, {)
        $set: {
            autor: 'Groover',
            publicado: true
        }
    });
    console.log(resultado);
}

// actualizarCurso('6112e24de24796721c93766c');

async function eliminarDocumento(id){
    const result = await Curso.deleteOne({_id: id});
    //const resultado = await Curso.findByIdAndDelete(id);
    console.log(result);
}
eliminarDocumento('6112e24de24796721c93766c');

