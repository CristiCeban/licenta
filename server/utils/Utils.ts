import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'
import config from 'config'

const Utils = {
    createToken: (id: string) => {
        return jwt.sign(
            {userId: id},
            config.get('jwtSecret'),
            {expiresIn: '24h'}
        )
    },
    randomString: (size?: number) => {
        if (!size)
            size = 8
        return Math.random().toString(36).slice(-size)
    },
    createPassword: async (password?: string) => {
        if (!password)
            password = Math.random().toString(36).slice(-8)
        return bcrypt.hash(password, config.get('bcryptSalt'))
    },
    checkPassword: async (password: string, bdPassword: string) => {
        return bcrypt.compare(password, bdPassword)
    },
}

export default Utils