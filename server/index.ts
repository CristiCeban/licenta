import express from 'express'

const morgan = require('morgan');
const mongoose = require('mongoose')

const cors = require('cors')
const config = require('config')
const PythonShell = require('python-shell').PythonShell;


const options = {
    mode: 'text',
    pythonPath: 'C:\\Users\\cristi\\PycharmProjects\\X_RAY\\venv\\Scripts\\python.exe',
    // pythonPath: '../../../PycharmProjects/X_RAY/venv/Scripts/python.exe',
    pythonOptions: ['-u'],
    scriptPath: 'C:\\Users\\cristi\\PycharmProjects\\X_RAY\\',
    // scriptPath: '../../../PycharmProjects/X_RAY/',
    args: ['-path', 'C:\\Users\\cristi\\PycharmProjects\\X_RAY\\chest_xray\\chest_xray\\test\\PNEUMONIA\\person1_virus_6.jpeg']
};

// const script = require('../../../PycharmProjects/X_RAY/main.py')
// const script = require('../../../PycharmProjects/X_RAY/venv/Scripts/python.exe')

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
        app.get('/', (req, res) => res.send('AM DE FACUT PROIECTUL'))
        app.get('/api/', (req, res) => res.send(200).json({msg: 'asa'}))
        app.use('/api/auth', require('./routes/auth.route'))
        app.use('/api/nn', require('./routes/nn.route'))
        app.listen(apiPort, () => console.log(`Listen on port ${apiPort}`))
    } catch (e) {
        console.warn(e)
    }
}

(async () => await start())()



