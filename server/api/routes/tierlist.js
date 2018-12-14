const router = require('express').Router();
const tierlistController = require('../../controllers/tierlist.controller');

router.route('/').get(tierlistController.findAllTierlists);

module.exports = router;
