const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TierlistSchema = new Schema({
  author: { type: String, default: 'anonymous' },
  sTier: [],
  aTier: [],
  bTier: [],
  cTier: [],
  dTier: [],
  unused: [],
  upvotes: { type: Number, default: 0 },
  createdAt: { type: Date, required: true, default: Date.now },
});

module.exports = mongoose.model('tierlist', TierlistSchema);
