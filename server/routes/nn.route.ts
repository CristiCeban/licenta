import {Router} from "express"
import * as Path from "path";

const multer = require('multer');
const PythonShell = require('python-shell').PythonShell;
const auth = require('../middlewares/auth.middleware')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'images')      //you tell where to upload the files,
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.jpeg')
    }
})


const imageUpload = multer({
    storage: storage,
    onFileUploadStart: function (file) {
        console.log(file.originalname + ' is starting ...')
    },
});

const router = Router()

// /api/nn/predict
router.post(
    '/predict',
    [
        auth,
        imageUpload.single('image'),
    ],
    async (req, res) => {
        console.log('entered')
        try {

            console.log(req.file);
            console.log(__dirname)
            const dirs = __dirname.split('\\')
            dirs.pop()
            console.log('dirs joined')
            console.log(dirs.join('/'))
            const dir = Path.join(dirs.join('/'), req.file.path)
            console.log(dir)
            const options = {
                mode: 'text',
                pythonPath: 'C:\\Users\\cristi\\PycharmProjects\\X_RAY\\venv\\Scripts\\python.exe',
                // pythonPath: '../../../PycharmProjects/X_RAY/venv/Scripts/python.exe',
                pythonOptions: ['-u'],
                scriptPath: 'C:\\Users\\cristi\\PycharmProjects\\X_RAY\\',
                // scriptPath: '../../../PycharmProjects/X_RAY/',
                args: ['-path', dir]
            };

            PythonShell.run('main.py', options, (err, response) => {
                if (err) throw err
                const percent = Number(response[0])
                console.log('results: %j', percent)
                const resJson = {
                    type: percent > 0.5 ? 'Pneumonia' : 'Normal',
                    percent,
                }
                res.status(200).json(resJson)
            })

        } catch (e) {
            await res.status(500).json({message: 'Server error'})
        }
    }
)

router.get(
    '/',
    (req, res) => res.send('nn')
)

module.exports = router