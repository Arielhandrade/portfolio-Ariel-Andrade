let express = require('express');
let router = express.Router();
let {
  login
} = require('../controllers/usersController')
/* GET users listing. */
router.get('/login', login)

module.exports = router;
