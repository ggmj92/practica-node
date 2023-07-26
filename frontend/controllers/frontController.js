const CursoModel = require("../models/CursoModel")
const ProfesorModel = require("../models/ProfesorModel")
const InstalacionModel = require("../models/InstalacionModel")

const getIndex=(req, res) => {
    res.render('index', {
        titulo: 'este es el titulo de index',
        imgPrincipal: [
            {
                url: 'principal.jpg',
                alt: 'imagen principal',
                descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore illo assumenda, sit iure quae reprehenderit!'
            }
        ]

    })
}

const getCursos = async (req, res) => {

    try {
        const cursos = await CursoModel.find()
        console.log(cursos)

        return res.render('cursos', {
            titulo: 'Nuestros Cursos',
            cursos
        })
    } catch (error) {
        console.log(error)
    }
}

const getInstalaciones = async (req, res) => {

    try {
        const instalaciones = await InstalacionModel.find()
        console.log(instalaciones)

        return res.render('instalaciones', {
            titulo: 'Nuestras Instalaciones',
            instalaciones
        })
    } catch (error) {
        console.log(error)
    }
}


const getProfesores = async (req,res) => {

    try{
        const profesores = await ProfesorModel.find()
        console.log(profesores)

        return res.render('profesores', {
            titulo: 'Nuestros Profesores',
            profesores
        })
    } catch (error) {
        console.log(error)
    }
}

// const getCursos=(req, res) => {
//     res.render('cursos', {
//         cursos: [
//             {
//                 nombre:'Ciencias Sociales',
//                 url: 'curso1.jpg',
//                 alt: 'Ciencias Sociales',
//                 descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, exercitationem.'
//             },
//             {
//                 nombre:'Programación',
//                 url: 'curso2.jpg',
//                 alt: 'Programación',
//                 descripcion:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, voluptatem?'

//             },
//             {
//                 nombre:'Filosofía',
//                 url: 'curso3.jpg',
//                 alt: 'Filosofía',
//                 descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, commodi!'
//             },
//             {
//                 nombre: 'Geografía',
//                 url: 'curso4.jpg',
//                 alt: 'Geografía',
//                 descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, dolor.'
//             },
//             {
//                 nombre: 'Biología',
//                 url: 'curso5.jpg',
//                 alt: 'Biología',
//                 descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, molestiae?'
//             },
//             {
//                 nombre: 'Matemática',
//                 url: 'curso6.jpg',
//                 alt: 'Matemática',
//                 descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, recusandae.'
//             }
//         ]
//     })
// }

// const getInstalaciones=(req, res) => {
//     res.render('instalaciones', {
//         instalaciones: [
//             {
//                 nombre: 'Aulas',
//                 url: 'instalaciones1.jpg',
//                 alt: 'Aulas',
//                 descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, exercitationem.'
//             },
//             {
//                 nombre: 'Comedor',
//                 url: 'instalaciones2.jpg',
//                 alt: 'Comedor',
//                 descripcion:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, voluptatem?'
//             },
//             {
//                 nombre: 'Auditorio',
//                 url: 'instalaciones3.jpg',
//                 alt: 'Auditorio',
//                 descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, commodi!'
//             },
//             {
//                 nombre: 'Instalaciones Deportivas',
//                 url: 'instalaciones4.jpg',
//                 alt: 'Instalaciones Deportivas',
//                 descripcion:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, dolor.'
//             },
//             {
//                 nombre: 'Biblioteca',
//                 url: 'instalaciones5.jpg',
//                 alt: 'Biblioteca',
//                 descripcion:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, molestiae?'
//             },
//             {
//                 nombre: 'Laboratorios',
//                 url: 'instalaciones6.jpg',
//                 alt: 'Laboratiorios',
//                 descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, recusandae.'
//             }
//         ]
//     })
// }

// const getProfesores=(req, res) => {
//     res.render('profesores', {
//         profesores: [
//             {
//                 nombre: 'Manolita',
//                 url: 'profe1.jpg',
//                 alt: 'Profe 1',
//                 descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, exercitationem.'
//             },
//             {
//                 nombre: 'Manolito',
//                 url: 'profe2.jpg',
//                 alt:'Profe 2',
//                 descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, voluptatem?'
//             },
//             {
//                 nombre: 'Manolo',
//                 url: 'profe3.jpg',
//                 alt: 'Profe 3',
//                 descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, commodi!'
//             },
//             {
//                 nombre: 'Pepe',
//                 url: 'profe4.jpg',
//                 alt: "Profe 4",
//                 descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, dolor.'
//             },
//             {
//                 nombre: 'Pipo',
//                 url: 'profe5.jpg',
//                 alt: 'Profe 5',
//                 descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, molestiae?'

//             },
//             {
//                 nombre: "Karen",
//                 url: 'profe6.jpg',
//                 alt: 'Profe 6',
//                 descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, recusandae.'
//             }
        
//         ]

//     })
// }

const getContacto=(req, res) => {
    res.render('contacto', {
        contacto: [
            {
                direccion: "Calle de la Brújula 38, 28045, Madrid",
                telefono: '912345678',
                email: 'laescuela@laescuela.edu',
            }
        ]
        
    })
}

module.exports={
    getIndex,
    getCursos,
    getInstalaciones,
    getProfesores,
    getContacto
}