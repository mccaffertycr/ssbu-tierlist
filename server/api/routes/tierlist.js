const router = require('express').Router();
const tierlistController = require('../../controllers/tierlist.controller');

router
  .route('/')
  .get(tierlistController.findAllTierlists)
  .post(tierlistController.createTierlist);

router.route('/new').get(tierlistController.findNewTierlists);

router.route('/top').get(tierlistController.findTopTierlists);

router.route('/random').get(tierlistController.findRandomTierlist);

router
  .route('/:id')
  .get(tierlistController.findTierlistById)
  .put(tierlistController.upvoteTierlist);

module.exports = router;
