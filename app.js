const express = require('express');
const app=express();

const port=process.env.PORT || 3000;
//Función middleware que espicifica cual es la carpeta publica antes de ejecutar lo siguiente:
app.use(express.static(__dirname+'/public'))


//Configurar ingenieria de plantillas

app.set('view engine', 'ejs');

app.set("views",__dirname+"/views");

app.use('/',require('./routes/frontRoutes'));

app.use((req,res)=> {
    res.status(404).render("404",{
        titulo: 'error 404'
    })
})

app.listen(port,()=>{
    console.log(`App a la escucha desde http:localhost:${port}`)
})

