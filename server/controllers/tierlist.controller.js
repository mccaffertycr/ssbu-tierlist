const tierlist = require('../database/models/tierlist');

module.exports = {
  findAllTierlists: (req, res) => {
    tierlist
      .find({})
      .then(dbTierlists => res.json(dbTierlists))
      .catch(err => res.status(422).json(err));
  },
};
