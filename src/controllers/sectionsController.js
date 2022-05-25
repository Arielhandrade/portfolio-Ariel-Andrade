module.exports = {

    contact: (req, res) => {
        
                res.render('sections/contact', {
                    title: 'contact',
                })
            },

    profile: (req, res) => {
        
                res.render('sections/profile', {
                    title: 'profile',
                })
            },

    works: (req, res) => {
        
                res.render('sections/works', {
                    title: 'works',
                })
            },

    skills: (req, res) => {
        
                res.render('sections/skills', {
                    title: 'skills',
                })
            }

    }