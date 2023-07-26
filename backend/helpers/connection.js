const mongoose = require('mongoose');

const dbConnect = async () => {
    try {
        console.log('Conectado a la BBDD')
        return await mongoose.connect(process.env.URI_DB)
    } catch (error) {
        return {
            ok: false,
            msg: 'Error al conectar a la base de datos'
        }

    }
}

module.exports = {dbConnect}