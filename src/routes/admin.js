let express = require('express');
let router = express.Router();
let {
  adminPanel,
  formAddProyect,
  formAddDesign,
  formAddSkill,
  formAddUser,
} = require('../controllers/adminController')

/* GET panel administrador. */
router.get('/panel-administrador', adminPanel)

/* RUTAS DE PROYECTOS */
/* GET agregar proyecto. */
router.get('/add-proyect', formAddProyect)

/* RUTAS DE DISEÑOS */
/* GET agregar diseño. */
router.get('/add-design', formAddDesign)


/* RUTAS DE HABILIDADES */
/* GET agregar habilidad. */
router.get('/add-skill', formAddSkill)

/* RUTAS DE USUARIOS */
/* GET agregar usuario. */
router.get('/add-user', formAddUser)


module.exports = router;
