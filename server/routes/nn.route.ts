import {Router} from "express"
const PythonShell = require('python-shell').PythonShell;

const router = Router()

// /api/nn/predict
router.get(
    '/predict',
    [],
    async (req,res) => {
        console.log('entered')
        try{
            const options = {
                mode: 'text',
                pythonPath: 'C:\\Users\\cristi\\PycharmProjects\\X_RAY\\venv\\Scripts\\python.exe',
                // pythonPath: '../../../PycharmProjects/X_RAY/venv/Scripts/python.exe',
                pythonOptions: ['-u'],
                scriptPath: 'C:\\Users\\cristi\\PycharmProjects\\X_RAY\\',
                // scriptPath: '../../../PycharmProjects/X_RAY/',
                args: ['-path', 'C:\\Users\\cristi\\PycharmProjects\\X_RAY\\chest_xray\\chest_xray\\test\\PNEUMONIA\\person1_virus_6.jpeg']
            };

            PythonShell.run('main.py',options,(err,response) => {
                if(err) throw err
                console.log('results: %j', response)
                res.send(response)
            })

        }
        catch (e) {
            await res.status(500).json({message: 'Server error'})
        }
    }
)

router.get(
    '/',
    (req,res) => res.send('nn')
)

module.exports = router