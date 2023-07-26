const { Schema, model } = require('mongoose');

const InstalacionSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        unique: true
    },
    descripcion: {
        type: String,
        required: true
    },
    alt: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
})

module.exports = model('Instalacion', InstalacionSchema)