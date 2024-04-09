import mongoose from 'mongoose'

const Schema = mongoose.Schema

const cardSchema = new Schema({
  // Test api to ensure naming conventions match 
})

const Card = mongoose.model('Card', cardSchema)

export { Card }