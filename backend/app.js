const express = require('express');

require('dotenv').config();

const {dbConnect}=require('./helpers/connection');

//SERVIDORES
const app = express();
const port = process.env.PORT;

//CONEXIÓN A BASE DE DATOS
dbConnect();

//parse application (EXPRESS!)/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false}))

//parse application (EXPRESS!)/json
app.use(express.json())

//CONFIGURACIÓN CARPETA ESTATICA
app.use(express.static(__dirname + '/public'));

//RUTAS
app.use('/api/v1/',require('./routes/apiRoutes'))

app.listen(port,() => {
    console.log(`servidor a la escucha por el puerto ${port}`)
})