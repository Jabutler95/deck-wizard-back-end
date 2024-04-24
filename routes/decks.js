import { Router } from 'express'
import * as decksCtrl from '../controllers/decks.js'

const router = Router()

// ========== Public Routes ===========
router.post('/', decksCtrl.create)

export {
  router
}