import { Router } from 'express'
import * as decksCtrl from '../controllers/decks.js'

const router = Router()

// ========== Public Routes ===========
router.post('/', decksCtrl.create)
router.get('/', decksCtrl.index)
router.get('/:deckId', decksCtrl.show)
router.delete('/:deckId', decksCtrl.delete)

export {
  router
}