const jwt = require('jsonwebtoken')
const config = require('config')
import {NextFunction, Request, Response} from 'express'

module.exports = (req: Request, res: Response, next: NextFunction) => {
    if (req.method === 'Options')
        return next()
    try {
        const token = req.headers.authorization.split(' ')[1];
        if (!token)
            return res.status(401).json({message: 'not auth user'})
        req["user"] = jwt.verify(token, config.get('jwtSecret'))
        next()
    } catch (e) {
        res.status(401).json({message: 'not auth user'})
    }
}