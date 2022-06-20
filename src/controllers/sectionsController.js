const { getSkills, getProyects } = require('../data/dataBase');

module.exports = {

    contact: (req, res) => {

        res.render('sections/contact', {
            title: 'contacto',
        })
    },

    profile: (req, res) => {

        res.render('sections/profile', {
            title: 'perfil',
        })
    },

    works: (req, res) => {

        let proyects = getProyects.filter(proyect => {
            return proyect.category == "workProyect"
        });
        let designs = getProyects.filter(design => {
            return design.category == "workDesign"
        });
        res.render('sections/works', {
            title: 'trabajos',
            proyects,
            designs
        })
    },

    skills: (req, res) => {

        let design = getSkills.filter(design => {
            return design.category == "diseño"
        })
        let frontend = getSkills.filter(frontend => {
            return frontend.category == "front"
        })
        let backend = getSkills.filter(backend => {
            return backend.category == "back"
        })
        res.render('sections/skills', {
            title: 'habilidades',
            design,
            frontend,
            backend
        })
    }
}