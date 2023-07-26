const mongoose = require('mongoose');

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.URI_DB)
        console.log('base de datos conectada')
    } catch (error) {
        console.log(error)
    }
}

module.exports={dbConnect}