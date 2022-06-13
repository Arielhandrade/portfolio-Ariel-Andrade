module.exports = {

    adminPanel: (req, res) => {
        res.render('admin/admin', {
            title: 'panel administrador',
        })
    },

    formAddProyect: (req, res) => {
        res.render('admin/formAddProyect', {
            title: 'Agregar Proyecto',
        })
    },

    formAddDesign: (req, res) => {
        res.render('admin/formAddDesign', {
            title: 'Agregar Diseño',
        })
    },

    formAddSkill: (req, res) => {
        res.render('admin/formAddSkills', {
            title: 'Agregar Habilidad',
        })
    },

    formAddUser: (req, res) => {
        res.render('admin/formAddUser', {
            title: 'Agregar Usuario',
        })
    },
}
