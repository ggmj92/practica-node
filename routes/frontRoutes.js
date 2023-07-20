const express=require("express");
const router=express.Router();

const {getContacto, getCursos, getIndex,getInstalaciones,getProfesores}=require('../controllers/frontController');

router.get('/', getIndex);

router.get('/cursos', getCursos);

router.get('/instalaciones', getInstalaciones);

router.get('/profesores', getProfesores);

router.get('/contacto', getContacto);

module.exports=router