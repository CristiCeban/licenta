import {Router} from "express"
import {check, validationResult} from 'express-validator'
import Utils from "../utils/Utils";
import axios from "axios";

const User = require('../models/User')

const router = Router()

// api/auth/register
router.post(
    '/register',
    [
        check('email', 'Incorrect email').isEmail(),
        check('password', 'Password should be at least 6 char')
            .isLength({min: 6})
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: "registration data didn't pass validation"
                })
            }

            const {email, password,} = req.body
            console.log(email)

            const candidate = await User.findOne({email})

            if (candidate)
                return res.status(400).json({
                    errors: [
                        {
                            msg: 'This user already exists',
                            param: 'email',
                            location: 'body',
                        }
                    ]
                })

            const hashedPassword = await Utils.createPassword(password)

            const user = new User({email, password: hashedPassword})

            await user.save()

            return res.status(201).json({msg: 'success'})

        } catch (e) {
            console.warn(e)
            await res.status(500).json({message: 'Server error'})
        }
    }
)

// api/auth/login
router.post(
    '/login',
    [
        check('email', 'Enter valid mail').isEmail(),
        check('password', 'Password is empty').exists()
    ],
    async (req, res) => {
        console.log('asa')
        try {
            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: "incorrect values for auth"
                })
            }

            const {email, password} = req.body;

            const user = await User.findOne({email})

            if (!user) {
                return res.status(400).json({
                    errors: [
                        {
                            msg: "User with this email doesn't exists",
                            param: 'email',
                            location: 'body',
                        }
                    ]
                })
            }

            const isMatch = await Utils.checkPassword(password, user.password)

            if (!isMatch) {
                return res.status(400).json({
                    errors: [
                        {
                            msg: "Password is not matching,Please try again",
                            param: 'password',
                            location: 'body',
                        }
                    ]
                })
            }

            const newUserFound = await User.findOne({email}, {password: 0, "__v": 0})

            const token = Utils.createToken(newUserFound.id)

            return res.json({token, newUserFound})

        } catch (e) {
            await res.status(500).json({message: 'Server error'})
        }
    }
)

router.post(
    '/facebook',
    async (req, res) => {
        try {
            const {token} = req.body

            const fetchedUser = await axios.get(`https://graph.facebook.com/v10.0/me?transport=cors&access_token=${token}&fields=id,first_name,last_name,email,picture.type(large)`)
            const {email, id} = fetchedUser.data

            const user = await User.findOne({facebookId: id}, {password: 0, "__v": 0})
            if (!user) {
                const hashedPassword = await Utils.createPassword()
                const newUser = new User({facebookId: id, email, password: hashedPassword})
                await newUser.save()
                const newUserFound = await User.findOne({facebookId: id}, {password: 0, "__v": 0})
                const token = Utils.createToken(newUserFound.id)
                res.status(201).json({token, newUserFound})
            }
            //if user exist
            else {
                const token = Utils.createToken(user.id)
                res.json({token, user})
            }
        } catch (e) {
            await res.status(500).json({message: 'Server error'})
        }
    }
)

router.post(
    '/google',
    async (req, res) => {
        try {
            const {token, user} = req.body;
            const {email} = user
            const isRegUser = await User.findOne({email}, {password: 0, "__v": 0})
            // if user is not registered already
            if (!isRegUser) {
                const hashedPassword = await Utils.createPassword(email)
                const newUser = new User({
                    email,
                    password: hashedPassword
                })
                await newUser.save()
                const newUserFound = await User.findOne({email}, {password: 0, "__v": 0})
                const token = Utils.createToken(newUserFound.id)
                await res.status(201).json({token, newUserFound})
            }
            // if user is already registered
            else {
                const token = Utils.createToken(isRegUser.id)
                await res.json({token, isRegUser})
            }
        } catch (e) {
            await res.status(500).json({message: 'Server error'})
        }
    }
)

module.exports = router