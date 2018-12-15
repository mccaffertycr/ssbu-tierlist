const tierlist = require('../database/models/tierlist');

module.exports = {
  findTierlistById: (req, res) => {
    const { id } = req.body;
    tierlist
      .findById(id)
      .then(dbTierlist => res.json(dbTierlist))
      .catch(err => res.status(422).json(err));
  },
  findAllTierlists: (req, res) => {
    const { limit, offset } = req.body;
    tierlist
      .find({})
      .limit(limit)
      .skip(offset)
      .then(dbTierlists => res.json(dbTierlists))
      .catch(err => res.status(422).json(err));
  },
  findNewTierlists: (req, res) => {
    const { limit, offset } = req.body;
    tierlist
      .find({})
      .limit(limit)
      .skip(offset)
      .sort({ createdAt: -1 })
      .then(dbTierlists => res.json(dbTierlists))
      .catch(err => res.status(422).json(err));
  },
  findTopTierlists: (req, res) => {
    const { limit, offset } = req.body;
    tierlist
      .find({})
      .limit(limit)
      .skip(offset)
      .then(dbTierlists => res.json(dbTierlists))
      .catch(err => res.status(422).json(err));
  },
  createTierlist: (req, res) => {
    tierlist
      .create(req.body)
      .then(dbTierlist => console.log(dbTierlist))
      .catch(err => res.status(422).json(err));
  },
  upvoteTierlist: (req, res) => {
    const { id } = req.body;
    tierlist
      .findByIdAndUpdate(id, { $inc: { upvotes: 1 } })
      .then(dbTierlist => console.log(dbTierlist))
      .catch(err => res.status(422).json(err));
  },
};
