import express from 'express'
import {
    getCardById,
    createCard,
    updateCard,
    deleteCard,
    getCards,
    checkCard,
    createCards
} from '../controller/CardController.js'

const router = express.Router()

router.get('/cards', getCards)
// router.get('/cards/:id', getCardById)
router.get('/cards/:nfcId', checkCard)
router.post('/cards', createCard)
router.post('/cards/IdsUpload', createCards)
// router.patch('/cards/:id', updateCard)
router.delete('/cards/:id', deleteCard)

export default router
