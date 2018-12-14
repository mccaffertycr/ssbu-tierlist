const router = require('express').Router();
const tierlistRoutes = require('./tierlist');

router.use('/tierlist', tierlistRoutes);

module.exports = router;
