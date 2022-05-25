let express = require('express');
let router = express.Router();
let {
  contact,
  profile,
  works,
  skills
} = require('../controllers/sectionsController')

/* GET sections page. */
router.get('/contact/', contact);
router.get('/profile/', profile);
router.get('/works/', works);
router.get('/skills/', skills);

module.exports = router;