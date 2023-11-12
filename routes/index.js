var express = require('express');
var router = express.Router();
//////////////
const mainControllers = require('../controllers/mainControlers.js')

/* GET home page. */
router.get('/', mainControllers.root);

/////////////////////
// la que armo yo
router.get('/n', mainControllers.n);
// mira vos
router.get('/w', mainControllers.w);
// mi post
router.post('/wi', mainControllers.wiPost);
router.post('/2', mainControllers.dosPost);
// mi put con method-override en el form de un html
router.put('/n', mainControllers.nPut);
//////////////////////////

module.exports = router;
