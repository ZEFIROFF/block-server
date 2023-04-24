import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const getCards = async (req, res) => {
    try {
        const response = await prisma.Card.findMany()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

export const getCardById = async (req, res) => {
    try {
        const response = await prisma.Card.findUnique({
            where: {
                NFCid: Number(req.params.id),
            },
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}
export const checkCard = async (req, res) => {
    try {
        const response = await prisma.Card.findUnique({
            where: {
                NFCid: Number(req.params.nfcId),
            },
        })
        console.log(response)
        res.status(200).json(response.isNull ? false : true)
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}

export const createCard = async (req, res) => {
    const { nfcId } = req.body
    try {
        const Card = await prisma.Card.create({
            data: {
                NFCid: nfcId,
            },
        })
        res.status(201).json(Card)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

export const createCards = async (req, res) => {
    const [{ nfcIdArr }] = req.body
    console.log(nfcIdArr)
    try {
        for (const nfcIdarrElement of nfcIdArr) {
            await prisma.Card.create({
                data: {
                    NFCid: nfcId,
                },
            })
        }
        res.status(201).json(nfcIdArr)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

export const updateCard = async (req, res) => {
    const { name, price } = req.body
    try {
        const Card = await prisma.Card.update({
            where: {
                id: Number(req.params.id),
            },
            data: {
                name: name,
                price: price,
            },
        })
        res.status(200).json(Card)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

export const deleteCard = async (req, res) => {
    try {
        const Card = await prisma.Card.delete({
            where: {
                id: Number(req.params.id),
            },
        })
        res.status(200).json(Card)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}
