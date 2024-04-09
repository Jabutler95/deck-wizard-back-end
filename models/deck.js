import mongoose from "mongoose"

const Schema = mongoose.Schema

const deckSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  wins: {
    type: Number
  },
  losses: {
    type: Number
  },
  notes: {
    type: String
  },
  mana: {
    type: String,
    enum: ['White', 'Black', 'Blue', 'Red', 'Green', 'Multi-color'],
    required: true
  }, 
  cards: [{ type: Schema.Types.ObjectId, ref: 'Card' }]
},{
  timestamps: true,
})

const Deck = mongoose.model('Deck', deckSchema)

export { Deck }