import express from 'express'

const morgan = require('morgan');
const mongoose = require('mongoose')

const cors = require('cors')
const config = require('config')

const start = async () => {
    try {

        await mongoose.connect(config.get('mongoUrl'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })

        const apiPort = config.get('apiPort') || 3000
        const app = express()
        app.use(cors())
        app.use(express.json())
        app.use(morgan('dev'));
        app.post('/expo', async (req, res) => {
            try {
                const {token} = req.body
                console.log(token)
                res.status(200).json(token)
            } catch (e) {
                console.log(e)
                res.status(500).json({msg: 'server error'})
            }
        })
        app.get('/', (req, res) => res.send('AM DE FACUT PROIECTUL'))
        app.get('/api/', (req, res) => res.send(200).json({msg: 'asa'}))
        app.use('/api/auth', require('./routes/auth.route'))
        app.use('/api/nn', require('./routes/nn.route'))
        app.use('/api/browse', require('./routes/browse.route'))
        app.use('/images', express.static(__dirname + '/images'));
        app.listen(apiPort, () => console.log(`Listen on port ${apiPort}`))
    } catch (e) {
        console.warn(e)
    }
}

(async () => await start())()



