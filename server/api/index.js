const path = require('path');
const router = require('express').Router();
const routes = require('./routes');

router.use('/api', routes);

router.use('/*', (req, res) =>
  res.sendFile(path.join(__dirname, '../../client/build/index.html'))
);

module.exports = router;
