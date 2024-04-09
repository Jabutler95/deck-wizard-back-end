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
  image: {
    type: String,
    required: true 
  },
  text: {
    type: String,
    required: true
  },
  colorIdentity: {
    type: String,
    required: true
  },
  colors: {
    type: String,
    required: true
  },
  manaCost: {
    type: String,
    required: true
  },
  multiverseid: {
    type: String,
    required: true
  } 
},{
    timestamps: true,
})

const Card = mongoose.model('Card', cardSchema)

export { Card }