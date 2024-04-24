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

export {
  create,
}