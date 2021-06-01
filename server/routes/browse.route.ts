import {Router} from "express"

const Predict = require('../models/Predict')
const auth = require('../middlewares/auth.middleware')

const router = Router()

// /api/browse/
router.get(
    '/',
    [auth],
    async (req, res) => {
        try {
            const {page = 1, limit = 10} = req.query
            const rawPredictions = await Predict.find({}, {
                __v: 0, userId: 0,
            }).limit((limit * 1 as any))
                .skip((page - 1) * limit)
                .exec()
            const predictions = rawPredictions.map(el => ({
                ...el['_doc'],
                path: el['_doc'].path.split('\\').pop()
            }))
            const count = await Predict.countDocuments()
            res.json({
                predictions,
                totalPages: Math.ceil((count) / limit),
                currentPage: page,
            })

        } catch (e) {
            console.log(e)
            res.status(500).json({message: 'Server error'})
        }
    }
)

// /api/browse/user
router.get(
    '/user',
    [auth],
    async (req, res) => {
        try {
            const {userId} = req.user
            const {page = 1, limit = 10} = req.query
            const rawPredictions = await Predict.find({
                userId,
            }, {
                __v: 0, userId: 0,
            }).limit((limit * 1 as any))
                .skip((page - 1) * limit)
                .exec()
            const predictions = rawPredictions.map(el => ({
                ...el['_doc'],
                path: el['_doc'].path.split('\\').pop()
            }))
            const count = await Predict.countDocuments()
            res.json({
                predictions,
                totalPages: Math.ceil((count) / limit),
                currentPage: page,
            })

        } catch (e) {
            res.status(500).json({message: 'Server error'})
        }
    }
)

module.exports = router
