import express from 'express'
import {getCardById, createCard, updateCard, deleteCard, getCards} from '../controller/CardController.js'

const router = express.Router()

router.get('/cards', getCards)
router.get('/cards/:id', getCardById)
router.post('/cards', createCard)
router.patch('/cards/:id', updateCard)
router.delete('/cards/:id', deleteCard)

export default router
