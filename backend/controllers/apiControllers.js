const Curso = require('../models/CursoModel');

//RECOGE TODOS LOS CURSOS
const getCursos = async (req, res) => {
    try {
        const cursos = await Curso.find()
        console.log(cursos)
        
        return res.status(200).json({
            ok: true,
            msg: 'recoge todos los cursos',
            data: cursos,
            total_results: cursos.length,
            limit: 20
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: "Contacta con el administrador"
        })
        
    }
}


//RECOGE UN CURSO POR SU ID
const getCursoById = async (req, res) => {

    try {
        const id = req.params.id
        console.log(id)
        const getCurso = await Curso.findById(id)
        console.log(getCurso)

        return res.status(201).json({
            ok: true,
            data: getCurso,
            msg: "recoge un curso por su id"
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg:"Contacta con el administrador"
        })
        
    }
}


//CREA UN CURSO NUEVO
const createCurso = async (req, res) => {
    const curso = new Curso(req.body)

    try {
        const cursoSave = await curso.save()

        return res.status(201).json({
            ok: true,
            data: cursoSave,
            msg: "Crea un curso nuevo"
        })
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg:"Contacta con el administrador"
        })
        
    }
}


//ACTUALIZA UN CURSO POR SU ID
const updateCursoById = async (req, res) => {

    try {
        const id = req.params.id
        const {datos} = req.body
        const cursoUpdate = await Curso.findByIdAndUpdate(id, datos, {new:true});

        return res.status(200).json({
            ok: true,
            dato: cursoUpdate,
            msg:"Actualiza un curso por su id"
        })
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg:"Contacta con el administrador"
        })
        
    }
}


//ELIMINA UN CURSO POR SU ID
const deleteCursoById = async (req, res) => {
    
    try {
        const id = req.params.id
        const cursoDelete = await Curso.findByIdAndDelete(id);

        return res.status(200).json({
            ok: true,
            data: cursoDelete,
            msg: "Elimina un curso por su id"
        })
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: "Contacta con el administrador"
        })
        
    }
}


module.exports = {
    getCursos,
    getCursoById,
    createCurso,
    updateCursoById,
    deleteCursoById
}