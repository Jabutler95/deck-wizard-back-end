import mongoose from 'mongoose'

const Schema = mongoose.Schema

const cardSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  types: {
    type: String
  },
  image: {
    type: String,
  },
  text: {
    type: String,
  },
  colorIdentity: {
    type: String,
    required: true
  },
  colors: {
    type: String,
    required: true
  },
  cmc: {
    type: Number,
    required: true
  },
  manaCost: {
    type: String,
    required: true
  },
  multiverseid: {
    type: String,
    required: true
  }, 
  power: {
    type: String,
  },
  toughness: {
    type: String
  } 
},{
    timestamps: true,
})

const Card = mongoose.model('Card', cardSchema)

export { Card }