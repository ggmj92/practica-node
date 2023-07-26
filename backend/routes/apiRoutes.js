const express=require('express');
const router=express.Router();
const {getCursos,getCursoById,createCurso,updateCursoById,deleteCursoById}=require('../controllers/apiControllers');

//RECOGER TODOS LOS CURSOS
router.get('/cursos', getCursos);

//RECOGER UN CURSO POR SU 'ID'
router.get('cursos/:id', getCursoById);

//CREAR UN CURSO NUEVO
router.post('cursos', createCurso);

//ACTUALIZAR UN CURSO POR SU 'ID'
router.put('cursos/:id', updateCursoById);

//ELIMINAR UN CURSO POR SU 'ID'
router.delete('/cursos/:id', deleteCursoById);

module.exports=router;