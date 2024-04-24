import { Deck } from '../models/deck.js'

async function create(req, res) {
  try {
    const deck = await Deck.create(req.body)
    res.json(deck)
  } catch (err) {
    console.log(err)
    res.json(err)
  }
}

async function index(req, res) {
  try {
    const decks = await Deck.find({}).sort({ createdAt: 'desc' })
    res.json(decks)
  } catch (err) {
    console.log(err)
    res.json(err)
  }
}

export {
  create,
  index,
}