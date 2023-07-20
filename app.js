const express = require('express');
const app=express();

const port=process.env.PORT || 3000;
//Función middleware que espicifica cual es la carpeta publica antes de ejecutar lo siguiente:
app.use(express.static(__dirname+'/public'))


//Configurar ingenieria de plantillas

app.set('view engine', 'ejs');

app.set("views",__dirname+"/views");

app.get('/',(req,res)=>{
    res.render('index',{})
})

app.get('/cursos', (req,res)=> {
    res.render('cursos',{})
})

app.get('/instalaciones', (req,res)=> {
    res.render('instalaciones',{})
})

app.get('/profesores', (req,res)=> {
    res.render('profesores',{})
})

app.get('/contacto', (req,res)=> {
    res.render('contacto',{})
})

app.listen(port,()=>{
    console.log(`App a la escucha desde http:localhost:${port}`)
})

