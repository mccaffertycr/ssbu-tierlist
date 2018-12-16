const tierlist = require('../database/models/tierlist');

module.exports = {
  findTierlistById: (req, res) => {
    const { id } = req.body;
    tierlist
      .findById(id)
      .then(dbTierlist => res.json(dbTierlist))
      .catch(err => res.status(422).json(err));
  },
  findRandomTierlist: (req, res) => {
    tierlist
      .aggregate([{ $sample: { size: 1 } }])
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
      .then(dbTierlist => {
        res.send('new tierlist successfully created!');
      })
      .catch(err => res.status(422).json(err));
  },
  upvoteTierlist: (req, res) => {
    const id = req.params.id;
    if (!req.session.upvoted) {
      req.session.upvoted = [];
      req.session.upvoted.push(id);
      upvoteQuery(id);
    } else {
      if (!req.session.upvoted.includes(id)) {
        req.session.upvoted.push(id);
        upvoteQuery(id);
      } else {
        res.json({ msg: 'sorry you are only able to upvote a tierlist once' });
      }
    }
    function upvoteQuery(id) {
      tierlist
        .findByIdAndUpdate(id, { $inc: { upvotes: 1 } }, { new: true })
        .then(dbTierlist => {
          res.json({
            upvotes: dbTierlist.upvotes,
          });
        })
        .catch(err => res.status(422).json(err));
    }
  },
};
