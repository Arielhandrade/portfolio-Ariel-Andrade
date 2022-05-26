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
        
                res.render('sections/works', {
                    title: 'trabajos',
                })
            },

    skills: (req, res) => {
        
                res.render('sections/skills', {
                    title: 'habilidades',
                })
            }

    }