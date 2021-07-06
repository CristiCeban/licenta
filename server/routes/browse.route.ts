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
            const {page = 1, limit = 10, type = 'all'} = req.query
            let filterType = {$gt: -1, $lt: 2}
            if (type === 'pneumonia')
                filterType = {$gt: 0.5, $lt: 2}
            else if (type === 'normal')
                filterType = {$gt: -1, $lt: 0.5}
            const rawPredictions = await Predict.find({
                percent: filterType
            }, {
                __v: 0, userId: 0,
            }).limit((limit * 1 as any))
                .skip((page - 1) * limit)
                .exec()

            const predictions = rawPredictions.map(el => ({
                ...el['_doc'],
                path: el['_doc'].path.split('\\').pop()
            }))

            const count = await Predict.countDocuments({percent: filterType})

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
            const {page = 1, limit = 10, type = 'all'} = req.query
            let filterType = {$gt: -1, $lt: 2}
            if (type === 'pneumonia')
                filterType = {$gt: 0.5, $lt: 2}
            else if (type === 'normal')
                filterType = {$gt: -1, $lt: 0.5}

            const rawPredictions = await Predict.find({
                userId,
                percent: filterType
            }, {
                __v: 0, userId: 0,
            }).limit((limit * 1 as any))
                .skip((page - 1) * limit)
                .exec()

            const predictions = rawPredictions.map(el => ({
                ...el['_doc'],
                path: el['_doc'].path.split('\\').pop()
            }))
            const count = await Predict.countDocuments({
                userId,
                percent: filterType,
            })

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
