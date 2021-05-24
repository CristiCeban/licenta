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
    createPassword: async (password: string) => {
        return bcrypt.hash(password, config.get('bcryptSalt'))
    },
    checkPassword: async (password: string, bdPassword: string) => {
        return bcrypt.compare(password, bdPassword)
    },
}

export default Utils