const express = require('express');
const {dbConnect} = require('./utilities/connection');
require('dotenv').config()

const app = express();

const port = process.env.PORT;

//Función middleware que espicifica cual es la carpeta publica antes de ejecutar lo siguiente:
app.use(express.static(__dirname + '/public'))

//Configurar ingenieria de plantillas

app.set("views", __dirname + "/views");
app.set('view engine', 'ejs');

//CONEXIÓN MONGODB
dbConnect();

app.use('/', require('./routes/frontRoutes'));

app.use((req, res) => {
    res.status(404).render("404", {
        titulo: 'error 404'
    })
})

app.listen(port, () => {
    console.log(`App a la escucha desde http:localhost:${port}`)
})

