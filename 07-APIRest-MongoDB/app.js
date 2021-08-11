const express = require('express');
const mongoose = require ('mongoose');

//conectarnos a la base de datos
mongoose.connect('mongodb://localhost:27017/Proyecto', {useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado a MongoDB...'))  
    .catch(err => console.log('No se pudo conectar con MongoDB...', err));

const app = express();

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Api REST ejecutándose...');
})